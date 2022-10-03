window.googletag = window.googletag || {
        cmd: []
    };
    var wscreen = window.innerWidth;
    googletag.cmd.push(function() {
        if (wscreen > 767) {
            googletag.defineSlot('/36504930/microsite/desktop/dfp-topfrm', [996, 50], 'div-gpt-ad-awake-desktop-masthead').addService(googletag.pubads());
            googletag.defineSlot('/36504930/microsite/desktop/dfp-lb', [728, 90], 'div-gpt-ad-awake-desktop-leaderboard').addService(googletag.pubads());
            googletag.defineOutOfPageSlot('/36504930/microsite/desktop/dfp-bottomfrm', 'div-gpt-ad-awake-desktop-bottomframe').addService(googletag.pubads());
        } else {
            googletag.defineOutOfPageSlot('/36504930/microsite/mobile/dfp-topfrm', 'div-gpt-ad-awake-mobile-masthead').addService(googletag.pubads());
            googletag.defineSlot('/36504930/microsite/mobile/dfp-headline', [320, 100], 'div-gpt-ad-awake-mobile-headline').addService(googletag.pubads());
            googletag.defineSlot('/36504930/microsite/mobile/dfp-bottomfrm', [320, 100], 'div-gpt-ad-awake-mobile-bottomframe').addService(googletag.pubads());

            googletag.pubads().addEventListener('slotResponseReceived', function(event) {
                var dfp_slotDelivered = event.slot.getResponseInformation() ? 'block' : 'none'; /* check wheter there is ads or not*/
                var dfp_slotAdUnitPath = event.slot.getSlotId().getAdUnitPath(); /* get adunit path */
                if (!event.slot.getResponseInformation()) {
                    ("/36504930/microsite/mobile/dfp-topfrm" === event.slot.getSlotId().getAdUnitPath()) ? document.querySelector("#div-gpt-ad-topfrm-parallax-wrapper").style.setProperty("display", "none"): "";
                }
            });
        }
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
    });

    if (wscreen > 767) {
        googletag.cmd.push(function() {
            googletag.display('div-gpt-ad-awake-desktop-masthead');
        });
        googletag.cmd.push(function() {
            googletag.display('div-gpt-ad-awake-desktop-leaderboard');
        });
        googletag.cmd.push(function() {
            googletag.display('div-gpt-ad-awake-desktop-bottomframe');
        });
    } else {
        googletag.cmd.push(function() {
            googletag.display('div-gpt-ad-awake-mobile-masthead');
        });
        googletag.cmd.push(function() {
            googletag.display('div-gpt-ad-awake-mobile-headline');
        });
        googletag.cmd.push(function() {
            googletag.display('div-gpt-ad-awake-mobile-bottomframe');
        });
    }

    window.addEventListener("DOMContentLoaded", (e) => {
        document.querySelector(".hamburger").addEventListener("click", () => {
            let header = document.querySelector(".header");
            if (header.classList.contains("sticky")) {
                header.classList.remove("sticky");
                header.classList.add("fixed");
            } else {
                header.classList.remove("fixed");
                header.classList.add("sticky");
            }
        })
    })
