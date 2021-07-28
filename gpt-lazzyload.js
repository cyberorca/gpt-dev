lazzyLoadingAdunit : function() {

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
        function renderContextual(){
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
                    window.removeEventListener('scroll',lazzyLoadScroll);
                }
            }

        }
        
        function elementInViewport(el) {
                let rect = el.getBoundingClientRect()
                return (
                    rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
                )
        }
        
        function lazzyLoadScroll(){
            renderContextual();
        }

        function addEventListener (evt, fn){
            window.addEventListener
            ? window.addEventListener(evt, fn, false)
            : (window.attachEvent)
            ? window.attachEvent('on' + evt, fn)
            : window['on' + evt] = fn;
        }

        try{
                var intersectionObserver = new IntersectionObserver(function(entries) {
                    // If intersectionRatio is 0, the target is out of view
                    // and we do not need to do anything.
                    if (entries[0].intersectionRatio <= 0) return;
                        console.log('RENDERING LAZZY LOAD!');
                        renderContextual();
                        intersectionObserver.unobserve(containerEl);
                        intersectionObserver.disconnect();
                });
                // start observing
                intersectionObserver.observe(containerEl);
        }catch(err) {
                addEventListener("scroll",lazzyLoadScroll);
        }
    });
}