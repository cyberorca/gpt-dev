lazzyLoadingAdunit : function() {
    const _noIntersectionMethod = !window.IntersectionObserver;
    var __lazzYSetting__ = {
        "div-gpt-ad-merdeka-mobile-contextual-oop" :{
            "type" : "oop",
            "adunit" : "/36504930/m.merdeka.com/dfp-contextual",
            "generated" : 0,
        },
        "div-gpt-ad-kapanlagi-dfp-exposer-slot1-oop" :{
            "type" : "size",
            "adunit" : "/36504930/m.kapanlagi.com/dfp-exposer-slot1",
            "size" : [ [300, 250], [300, 600], [320, 480], [160, 600], [250, 250] ],
            "generated" : 0,
        }
    }
   
    document.addEventListener('DOMContentLoaded', function () {
        let _options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.25
        };
        let _observer = null;
        if(_noIntersectionMethod){
            window.addEventListener("scroll",renderAdunit);
        }else{
            _observer = new IntersectionObserver(_entries => {
                _entries.forEach(entry => {
                if (entry.isIntersecting) {
                    value = __lazzYSetting__[entry.target.id];
                    if (!value.generated) {
                        if (value.type == "oop") {
                            _defineSlot_ = googletag.defineOutOfPageSlot(value.adunit, entry.target.id).addService(googletag.pubads());
                        }else{
                            _defineSlot_= googletag.defineSlot(value.adunit, value.size, entry.target.id).addService(googletag.pubads());
                        }
                        googletag.display(_defineSlot_);
                        googletag.pubads().refresh([_defineSlot_]);
                        value.generated = 1;
                    }
                } 
                });
            },_options);
            for (const [key, value] of Object.entries(__lazzYSetting__)) {
                let _adunitElement = document.querySelector(`#${key}`);
                _observer.observe(_adunitElement);
            };
        }

        function renderAdunit(){
            var _generatedCount_ = 0;
            var _itemCount_ = 0;

            for (const [key, value] of Object.entries(__lazzYSetting__)) {
                console.log(`${key}: ${value}`);
                _itemCount_ ++;
                var _defineSlot_ = null;

                console.log("viewport --",elementInViewport(document.getElementById(key)), null);

                if (!value.generated && elementInViewport(document.getElementById(key))) {

                    if (value.type == "oop") {
                        _defineSlot_ = googletag.defineOutOfPageSlot(value.adunit, key).addService(googletag.pubads());
                    }else{
                        _defineSlot_= googletag.defineSlot(value.adunit,value.size,key).addService(googletag.pubads());
                    }

                    googletag.display(_defineSlot_);
                    googletag.pubads().refresh([_defineSlot_]);
                    value.generated = 1;

                }

                if (_generatedCount_ == _itemCount_) {
                    window.removeEventListener('scroll',renderAdunit);
                }
            }

        }
        
        function elementInViewport(el) {
                let rect = el.getBoundingClientRect()
                return (
                    rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
                )
        }
    });
}