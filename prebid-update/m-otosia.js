/** LOAD PREBID - START */
function spotxOutstreamFunc(bid) {
    function mobileAndTabletcheck() {
        var check = false;
        (function (a) {
            if (
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                    a
                ) ||
                /1207|6310|6590|3gso|4thp|50[1 6]i|770s|802s|a wa|abac|ac(er|oo|s\ )|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\ m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\ (n|u)|c55\/|capi|ccwa|cdm\ |cell|chtm|cldc|cmd\ |co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\ s|devi|dica|dmob|do(c|p)o|ds(12|\ d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4 7]0|os|wa|ze)|fetc|fly(\ |_)|g1 u|g560|gene|gf\ 5|g\ mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\ (m|p|t)|hei\ |hi(pt|ta)|hp( i|ip)|hs\ c|ht(c(\ | |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\ (20|go|ma)|i230|iac( |\ |\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\ |kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\ [a w])|libw|lynx|m1\ w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\ cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\ | |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0 2]|n20[2 3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\ |on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\ ([1 8]|c))|phil|pire|pl(ay|uc)|pn\ 2|po(ck|rt|se)|prox|psio|pt\ g|qa\ a|qc(07|12|21|32|60|\ [2 7]|i\ )|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\ |oo|p\ )|sdk\/|se(c(\ |0|1)|47|mc|nd|ri)|sgh\ |shar|sie(\ |m)|sk\ 0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\ |v\ |v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\ |tdg\ |tel(i|m)|tim\ |t\ mo|to(pl|sh)|ts(70|m\ |m3|m5)|tx\ 9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0 3]|\ v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\ | )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\ |your|zeto|zte\ /i.test(
                    a.substr(0, 4)
                )
            )
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }
    var bMobile = mobileAndTabletcheck();
    if (bMobile) {
        var playerWidth = 300;
        var playerHeight = 169;
    } else {
        var playerWidth = 640;
        var playerHeight = 360;
    }

    const videoDiv = bid.adUnitCode;
    window.console.log("[SPOTX][renderer] Handle SpotX custom outstream renderer");
    let script = window.document.createElement("script");
    script.type = "text/javascript";
    script.src = "//cdn.spotxcdn.com/website/integration_test/media/asia/EASI.js";
    script.setAttribute("data-spotx_channel_id", "" + bid.channel_id);
    script.setAttribute("data-spotx_vast_url", "" + bid.vastUrl);
    script.setAttribute("data-spotx_content_width", playerWidth);
    script.setAttribute("data-spotx_content_height", playerHeight);
    script.setAttribute("data-spotx_content_page_url", bid.renderer.config.content_page_url);
    script.setAttribute("data-spotx_ad_unit", "incontent");
    script.setAttribute("data-spotx_autoplay", "1");
    script.setAttribute("data-spotx_continue_out_of_view", "1");
    script.setAttribute("data-spotx_content_container_id", videoDiv);
    var vid_contain = window.document.getElementById(videoDiv);
    vid_contain.style.cssText = "display: none; margin-bottom: 20px";
    vid_contain.appendChild(script);
}

const priceGranularityConfig = {
    buckets: [
        {
            precision: 2,
            min: 0.2,
            max: 2.99,
            increment: 0.01,
        },
        {
            precision: 2,
            min: 3.0,
            max: 5.95,
            increment: 0.05,
        },
        {
            precision: 2,
            min: 6.0,
            max: 20.0,
            increment: 0.5,
        },
    ],
};

var gptadslots = [];
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var PREBID_TIMEOUT = 1500;
var FAILSAFE_TIMEOUT = 3000;
var HB_TIMEOUT = 1000;
var adUnits = [
    {
        code: "div-gpt-ad-otosia-sc",
        mediaTypes: {
            banner: {
                sizes: [
                    [300, 250],
                    [250, 250],
                    [200, 200],
                ],
            },
            video: {
                playerSize: [300, 250], // Not set so that the player can be repsonsive
                context: "outstream",
            },
            video: {
                playerSize: [300, 250], // Not set so that the player can be repsonsive
                context: "instream",
            },
        },
        bids: [
            { bidder: "emx_digital", params: { tagid: "113622" } },
            { bidder: "innity", params: { zone: 97848 , pub : 536} },
            { bidder: "oftmedia", params: { placementId: "18777787" } },
          	{ bidder: "teads", params: { pageId: 120641, placementId: 130847 } },
            { bidder: "rtbhouse", params: { publisherId: "bI2sp5Pt1ubwkv6C9Hs5", region: "prebid-asia" } },
          	{ bidder: "adnuntius", params: { auId: "0000000000109433" } },
            {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156536',
                    adSlot: 'Prebid-Otosia-Mobile-300x250_1',
                    video: {
                        mimes: ['video/mp4','video/x-flv'],
                        skippable: true,
                        startdelay: 0,
                        playbackmethod: [1,2,3],
                        api: [ 1, 2, 7 ],
                        protocols: [ 2, 3, 5, 6 ],
                        linearity: 1,
                        placement: 1
                    }
                }
            },
            { 
                bidder: 'rubicon',
                params: {
                    accountId: 12534,
                    siteId: 377676,
                    zoneId: 2083796
                }
            }
        ],
    },
    {
        code: "div-gpt-ad-otosia-hl",
        mediaTypes: {
            banner: {
                sizes: [
                    [320, 50],
                    [320, 100],
                ],
            },
            video: {
                playerSize: [320, 100], // Not set so that the player can be repsonsive
                context: "outstream",
            },
            video: {
                playerSize: [320, 100], // Not set so that the player can be repsonsive
                context: "instream",
            },
        },
        bids: [
            { bidder: "emx_digital", params: { tagid: "113622" } },
            { bidder: "innity", params: { zone: 97847 , pub : 536} },
            { bidder: "oftmedia", params: { placementId: "18777787" } },
            { bidder: "rtbhouse", params: { publisherId: "bI2sp5Pt1ubwkv6C9Hs5", region: "prebid-asia" } },
          	{ bidder: "adnuntius", params: { auId: "000000000010942e" } },
            {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156536',
                    adSlot: 'Prebid-Otosia-Mobile-320x100_1',
                    video: {
                        mimes: ['video/mp4','video/x-flv'],
                        skippable: true,
                        startdelay: 0,
                        playbackmethod: [1,2,3],
                        api: [ 1, 2, 7 ],
                        protocols: [ 2, 3, 5, 6 ],
                        linearity: 1,
                        placement: 1
                    }
                }
            },
            { 
                bidder: 'rubicon',
                params: {
                    accountId: 12534,
                    siteId: 377676,
                    zoneId: 2083796
                }
            }
        ],
    },
    {
        code: "div-gpt-ad-otosia-bottomfrm",
        mediaTypes: {
            banner: {
                sizes: [
                    [320, 50],
                    [320, 100],
                ],
            },
            video: {
                playerSize: [320, 100], // Not set so that the player can be repsonsive
                context: "outstream",
            },
            video: {
                playerSize: [320, 100], // Not set so that the player can be repsonsive
                context: "instream",
            },
        },
        bids: [
            { bidder: "emx_digital", params: { tagid: "113622" } },
            { bidder: "innity", params: { zone: 98041 , pub : 536} },
            { bidder: "oftmedia", params: { placementId: "18777787" } },
            { bidder: "rtbhouse", params: { publisherId: "bI2sp5Pt1ubwkv6C9Hs5", region: "prebid-asia" } },
          	{ bidder: "adnuntius", params: { auId: "0000000000109429" } },
            {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156536',
                    adSlot: 'Prebid-Otosia-Mobile-320x50_1',
                    video: {
                        mimes: ['video/mp4','video/x-flv'],
                        skippable: true,
                        startdelay: 0,
                        playbackmethod: [1,2,3],
                        api: [ 1, 2, 7 ],
                        protocols: [ 2, 3, 5, 6 ],
                        linearity: 1,
                        placement: 1
                    }
                }
            },
            { 
                bidder: 'rubicon',
                params: {
                    accountId: 12534,
                    siteId: 377676,
                    zoneId: 2083796
                }
            }
        ],
    },
    {
        code: "div-gpt-ad-otosia-dfp-exposer-slot1-oop",
        mediaTypes: {
            banner: {
                sizes: [
                    [300, 250],
                    [300, 600],
                    [320, 480],
                    [160, 600],
                    [250, 250],
                ],
            },
            video: {
                playerSize: [300, 600], // Not set so that the player can be repsonsive
                context: "outstream",
            },
            video: {
                playerSize: [300, 600], // Not set so that the player can be repsonsive
                context: "instream",
            },
        },
        bids: [
            { bidder: "emx_digital", params: { tagid: "113622" } },
            { bidder: "innity", params: { zone: 98042 , pub : 536} },
            { bidder: "oftmedia", params: { placementId: "18777787" } },
            { bidder: "teads", params: { pageId: 120942, placementId: 111237 } },
            { bidder: "rtbhouse", params: { publisherId: "bI2sp5Pt1ubwkv6C9Hs5", region: "prebid-asia" } },
          	{ bidder: "adnuntius", params: { auId: "0000000000109439" } },
            {
                bidder: 'pubmatic',
                params: {
                    publisherId: '156536',
                    adSlot: 'Prebid-Otosia-Mobile-300x600',
                    video: {
                        mimes: ['video/mp4','video/x-flv'],
                        skippable: true,
                        startdelay: 0,
                        playbackmethod: [1,2,3],
                        api: [ 1, 2, 7 ],
                        protocols: [ 2, 3, 5, 6 ],
                        linearity: 1,
                        placement: 1
                    }
                }
            },
            { 
                bidder: 'rubicon',
                params: {
                    accountId: 12534,
                    siteId: 377676,
                    zoneId: 2083796
                }
            }
        ],
    },
];

googletag.cmd.push(function () {
    googletag.pubads().disableInitialLoad();
});

pbjs.que.push(() => {
    pbjs.setConfig({
        enableSendAllBids:true
        // bidderTimeout: 2000,

    });
    pbjs.addAdUnits(adUnits);
    pbjs.setConfig({
        priceGranularity: priceGranularityConfig,
    });
    pbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT,
    });
});

function initAdserver() {
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
    googletag.cmd.push(function () {
        pbjs.que.push(function () {
            pbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh();
        });
    });
}

setTimeout(function () {
    initAdserver();
}, FAILSAFE_TIMEOUT);
/** LOAD PREBID - END */

var gpt_gam_ver = 'v010-DK';
gpt_gam_site = window.location.hostname.toUpperCase();
gpt_gam_ver = (typeof gpt_gam_site !== 'undefined') ? gpt_gam_ver.toUpperCase() : 'V.0.1';
console.log('%c GPT '+gpt_gam_site+' '+gpt_gam_ver ,'color:#d3d3d3; font-size:25px; font-weight: bold; -webkit-text-stroke: 1px black;');
/*PROTOTYPE CUSTOM FILTERING*/
    String.prototype.klyFiltering = function(delimiter) {
        return this.replace(/[\"\']/g, "").trim().split(delimiter).map(function(t) {
            return t.trim().toLowerCase()
        }).filter(function(x) {
            return x != "";
        });
    };

/*SET INTERVAL TO AUTO REFRESH BOTTOM FRAME ADS - NEW*/
window.GAMLibrary = {};
window.GAMLibrary = {
    dfpSlideup          :   '/36504930/m.otosia.com/dfp-slideup',
    dfpExposer1         :   '/36504930/m.otosia.com/dfp-exposer-slot1',
    dfpExposer2         :   '/36504930/m.otosia.com/dfp-exposer-slot2',
    dfpBottomFrame      :   '/36504930/m.otosia.com/dfp-bottomfrm',
    dfpTopFrame         :   '/36504930/m.otosia.com/dfp-topfrm',
    dfpHeadline         :   '/36504930/m.otosia.com/dfp-headline',
    scSlot              :   '/36504930/m.otosia.com/dfp-sc',
    dfpInsertion		:   '/36504930/m.otosia.com/dfp-insertion',
    timedBottomFrm      :   null,
    topFrameFixedSize   :   1,
    setGamBFInterval    :   function(active = true){
                                if (!active) {
                                    clearInterval(window.GAMLibrary.gamBFInterval);
                                    return;
                                }
                                window.GAMLibrary.gamBFInterval = setInterval(function () {
                                    document.querySelector("#dfp-spinads") && document.querySelector("#dfp-spinads").parentElement.remove(); 
                                    googletag.pubads().refresh([window.GAMLibrary.refreshSlot]);
                                }, 60000);
                            },
  	infiniteSCArticle   :   function() {
                                var parentElement = document.querySelector(".wrapper-list-paging"),
                                    pagingElement = parentElement ? parentElement.querySelectorAll(".list-paging") : 0;

                                if(pagingElement){
                                    var containerSCArticleNum = 1;
                                    pagingElement.forEach(function(element, index) {
                                        if(index !== 0 && index % 2 === 0){
                                            element.setAttribute("paging-index", containerSCArticleNum);
                                            var containerSCArticle = document.createElement('div');
                                            containerSCArticle.setAttribute("id", "gpt-ad-otosia-sc-" + containerSCArticleNum);
                                            containerSCArticle.setAttribute('class','article-ad');
                                            element.appendChild(containerSCArticle);
                                            containerSCArticleNum++;
                                        }
                                    })

                                    mo = new MutationObserver(function(mutations) {

                                        mutations.forEach(function(el) {
                                            var oldValue = el.oldValue,
                                                target = el.target,
                                                SC,
                                                pagingIndex;

                                            if (oldValue && oldValue.match(/list-paging/ig)) {
                                                pagingIndex = target.getAttribute('paging-index');
                                                target.childNodes.forEach(function(child, index) {
                                                    if (child.id && child.id.match(/gpt-ad-otosia-sc/ig)) {
                                                        if (document.getElementById(child.id) && !SC) {
                                                            /* DEFINE AND FETCH SC */
                                                            if ( SC = googletag.defineSlot('/36504930/m.otosia.com/dfp-sc', [[300,250],[250,250],[200,200]], child.id) ) {
                                                                SC.addService(googletag.pubads()).setTargeting("pagetype", kly.pageType).setTargeting("position", (pagingIndex));
                                                                googletag.display(child.id);
                                                                googletag.pubads().refresh([SC]);
                                                            }
                                                        }
                                                    }
                                                });
                                            }
                                        });
                                    });

                                    parentElement && mo.observe(parentElement, {
                                        childList: true,
                                        attributes: true,
                                        characterData: false,
                                        subtree: true,
                                        attributeOldValue: true,
                                        characterDataOldValue: false,
                                    });
                                }
                            },
    documentMeta       :    function (metaName) {
                                var metaResult = '';
                                var metas = document.getElementsByTagName('meta');
                                if (metas) {
                                    for (var x = 0, y = metas.length; x < y; x++) {
                                        if (metas[x].name.toLowerCase() == metaName) {
                                            metaResult += metas[x].content;
                                        }
                                    }
                                }
                                return metaResult != '' ? metaResult : '';
                            },
    inArray             :   function (needle, haystack) {
                                var length = haystack.length;
                                for (var i = 0; i < length; i++) {
                                    if (haystack[i] == needle) return true;
                                }
                                return false;
                            },
    arrToLowerCase      :   function (arr){
                                return arr.map(function(v,i){
                                    return v.toLowerCase();
                                });
                            },
    lockScroll          :   {
                                status: false,
                                timeout: 3000,
                                unset: function() {
                                    document.body.style.overflow = "initial";
                                    document.body.style.position = "unset";
                                    document.body.style.width = "unset";
                                    this.status = false;
                                },
                                set: function() {
                                    document.body.style.overflow = "hidden";
                                    document.body.style.position = "fixed";
                                    document.body.style.width = window.screen.width + "px";
                                    this.status = true;
                                    console.log('set');
                                }
                            },
    scrollBottomFrame   :   function(){
                                this.scroll = function(){
                                    var scrollNode = document.scrollingElement || document.documentElement;
                                    var scrollTop = scrollNode.scrollTop;
                                    if (scrollTop >= "200") {
                                        // console.log('testing scroll',scrollTop,this.timedBottomFrm);
                                        this.timedBottomFrm = googletag.defineSlot(this.dfpBottomFrame, [[320, 50],[320, 100]], 'div-gpt-ad-otosia-bottomfrm').addService(googletag.pubads());
                                        window.removeEventListener("scroll", this.scrollHandler);
                                        googletag.pubads().refresh([this.timedBottomFrm]);

                                        this.refreshSlot = this.timedBottomFrm;
                                        this.setGamBFInterval();
                                    }
                                };
                                this.scrollHandler = this.scroll.bind(this);
                                window.addEventListener("scroll", this.scrollHandler);
                            }
}
    
	[%DMP_List%]
     
	var isReadPage = kly.pageType === "ReadPage";
                            
    googletag.cmd.push(function() {
        var urlPath = document.URL;
        var _klyObject = typeof window.kly !== 'undefined' ? window.kly : window.kmklabs;
        var _articlePages = _klyObject && _klyObject.article;
        var _isAdultContent = _articlePages && _articlePages.isAdultContent;
		var isMatcont = "0";
		var isViolateBrandSafety = "0";
        var dfp_brandSafety = [%Black_List_Word%];
		/* POPULATE META DATA KEYWORDS */
        var dfp_pageTitle = _articlePages && _articlePages.title.klyFiltering(' ');
        var dfp_titles = (typeof dfp_pageTitle !== 'undefined' && dfp_pageTitle.length > 0 ) ? dfp_pageTitle: [];
        var dfp_pageKeywords = GAMLibrary.documentMeta("keywords");
        var dfp_keyword = dfp_pageKeywords.klyFiltering(",");
        /* POPULATE META DATA DESC */
        var dfp_pageDesc = GAMLibrary.documentMeta("description");
        var dfp_desc = dfp_pageDesc.klyFiltering(",");
        var tagForAds = _klyObject.gtm.tag.replace(/[^A-Za-z0-9|\- ]/ig,"").klyFiltering("|");
        var dfp_keywords = dfp_keyword.concat(dfp_titles, dfp_desc, tagForAds).filter(item=>item!==undefined);
        /*MATURE CONTENT DEFINED VAR*/
        isViolateBrandSafety = dfp_brandSafety.some((word)=>{
			let regWord = new RegExp("(" + word + ")","ig");
			return dfp_keywords.some((keyword)=>{
							return keyword.match(regWord);
			})
		}) ? "1" : "0";
					
		isMatcont = (_isAdultContent || isViolateBrandSafety === "1") ? "1" : "0";

        /*DEFINE ALL SLOT*/
        googletag.defineSlot(GAMLibrary.dfpExposer1, [
            [300, 250],
            [300, 600],
            [320, 480],
            [160, 600],
            [250, 250]
        ], 'div-gpt-ad-otosia-dfp-exposer-slot1-oop').addService(googletag.pubads());
        googletag.defineSlot(GAMLibrary.dfpHeadline, [
            [320, 100],
            [320, 50]
        ], 'div-gpt-ad-otosia-hl').addService(googletag.pubads());
        googletag.defineSlot(GAMLibrary.scSlot, [
            [300, 250],
            [250, 250],
            [200, 200]
        ], 'div-gpt-ad-otosia-sc').addService(googletag.pubads());

        /*OUT OF PAGE SLOTS*/
        if(GAMLibrary.topFrameFixedSize){
            googletag.defineSlot(GAMLibrary.dfpTopFrame, [1, 1], 'div-gpt-ad-otosia-topfrm-oop').addService(googletag.pubads());
        }else{
            googletag.defineOutOfPageSlot(GAMLibrary.dfpTopFrame, 'div-gpt-ad-otosia-topfrm-oop').addService(googletag.pubads());
        }

        googletag.defineOutOfPageSlot(GAMLibrary.dfpExposer2, 'div-gpt-ad-otosia-dfp-exposer-slot2-oop').addService(googletag.pubads());
        googletag.defineOutOfPageSlot(GAMLibrary.dfpSlideup, 'div-gpt-ad-dfp-overlay-oop').addService(googletag.pubads());

        if (isReadPage) {
            googletag.defineOutOfPageSlot(GAMLibrary.dfpInsertion, 'div-gpt-ad-otosia-insertion-oop').addService(googletag.pubads());
        }
        /*Bottom Frame Scrolling*/
        GAMLibrary.scrollBottomFrame();
        /*Bottom Frame Scrolling*/

        googletag.pubads().addEventListener('slotResponseReceived', function(event) {
            var dfp_slotDelivered = event.slot.getResponseInformation() ? 'block' : 'none'; /* check wheter there is ads or not*/
            var dfp_slotAdUnitPath = event.slot.getSlotId().getAdUnitPath(); /* get adunit path */
            var dfp_slotAdUnitID = event.slot.getSlotId().getId(); /* get adunit container id*/

            /*check if native ads creative was delivered*/
            if (dfp_slotDelivered == 'block') {
                if (dfp_slotAdUnitPath == GAMLibrary.dfpHeadline) {
                    var urlParams = new URLSearchParams(window.location.search);
                    var myParam = JSON.parse(urlParams.get('interval'));
                    headlineSticky(myParam);
                }

                /*check for topframe rendering process */
                if (dfp_slotAdUnitPath == GAMLibrary.dfpTopFrame && typeof _callConsoleTime == "function") {
                    let deviceOrientation = (window.innerHeight < window.innerWidth ? 1 : 0);
                    var that = GAMLibrary.lockScroll;
                    GAMLibrary.lockScroll.set();

                    if (GAMLibrary.lockScroll.status) {
                        setTimeout(function() {
                            that.unset();
                        }, that.timeout);
                    } else {
                        GAMLibrary.lockScroll.unset();
                    }
                    if (deviceOrientation) {
                        GAMLibrary.lockScroll.unset();
                    }
                    window.addEventListener("resize", function() {
                        let deviceOrientation = (window.innerHeight < window.innerWidth ? 1 : 0);
                        if (deviceOrientation) {
                            that.unset();
                        }
                    });
                }

            } else {

                if (dfp_slotAdUnitPath == GAMLibrary.dfpTopFrame) {

                    document.getElementById("google_ads_iframe_" + dfp_slotAdUnitID + "__container__").setAttribute("style", "display: none;");
                }
            }    
        });
      
      	GAMLibrary.infiniteSCArticle();

        /*  START TARGETING BLOCK   */
        googletag.pubads().setTargeting("isMatcont", isMatcont);
		googletag.pubads().setTargeting("brandsafety", isViolateBrandSafety);

        if(typeof Krux !== "undefined"){
            googletag.pubads().setTargeting('ksg', Krux.segments);
            googletag.pubads().setTargeting('kuid', Krux.user);
        }

        googletag.pubads().setTargeting("tags", dfp_keywords);
        googletag.pubads().setTargeting("currentUrl", urlPath);
        googletag.pubads().setTargeting("type", kly.gtm.type);
        googletag.pubads().setTargeting("pageType", kly.pageType);
        googletag.pubads().setTargeting("channel", kly.gtm.subCategory);
        googletag.pubads().setTargeting("audience", typeof (audience = kly.gtm.audience && kly.gtm.audience.split("|")) === "undefined" ? "false" : audience);
        googletag.pubads().setTargeting("isAdvertorial", typeof (isAdvertorial = kly.article && kly.article.isAdvertorial.toString()) === "undefined" ? "false" :  isAdvertorial);   
        googletag.pubads().setTargeting("isMultipage", typeof (isMultipage = kly.article && kly.article.isMultipage.toString()) === "undefined" ? "false" : isMultipage );
        googletag.pubads().setTargeting("articleId", kly.gtm.articleId.toString());
        googletag.pubads().setTargeting("pagingNum", typeof (pageParam = kly.gtm.pageParam && kly.gtm.pageParam.toString()) === "undefined" ? "false" : pageParam );
        googletag.pubads().setTargeting("newExp",typeof (newExp = kly.gtm.new_exp) === "undefined" ? "false" : kly.gtm.new_exp.toString());
        googletag.pubads().setTargeting("site", kly.site);
        googletag.pubads().setTargeting("age", typeof (age = kly.gtm.age) === "undefined" ? "false" : kly.gtm.age.toString());
        googletag.pubads().setTargeting("gender", typeof (gender = kly.gtm.gender) === "undefined" ? "false" : kly.gtm.gender.toString());
        /*  END TARGETING BLOCK   */
		[%PublisherProvidedID%]
        googletag.pubads().setCentering(true);
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
    });

    var gptMOtosiaStyle = document.createElement('style');
    gptMOtosiaStyle.textContent = '.list-artikel-berita #div-gpt-ad-otosia-dfp-exposer-slot1-oop{margin:20px auto!important}.detail-berita #div-gpt-ad-otosia-dfp-exposer-slot1-oop{margin:20px -15px!important}';
    window.onload = function() {
        document.body.appendChild(gptMOtosiaStyle);
    };

    /* ===== HEADLINESTICKY METHOD - DEFAULT 3s ===== */
    var headlineStickyInterval=3,headlineStickyStatus=!1;function headlineSticky(t){null!=t&&(headlineStickyInterval=t),console.log(headlineStickyInterval);var e=document.getElementById("div-gpt-ad-otosia-hl"),n=document.createElement("div");n.setAttribute("id","div-gpt-ad-otosia-hl-shadow"),e.parentElement.insertBefore(n,e),injectStickyStyleAndAnimation(),window.addEventListener("scroll",headlineStickyScrollEevent)}function headlineStickyScrollEevent(){var t=document.getElementById("div-gpt-ad-otosia-hl"),e=document.getElementById("div-gpt-ad-otosia-hl-shadow").getBoundingClientRect().top;document.querySelector(".layout__nav-content"),document.documentElement.scrollTop||document.body.scrollTop;headlineStickyStatus?e<=0||(window.removeEventListener("scroll",headlineStickyScrollEevent),removeStickyHeadline(t,!1)):e<=0&&(t.classList.add("hl-active-sticky"),t.style="",removeStickyHeadline(t,!0),headlineStickyStatus=!0)}function removeStickyHeadline(t,e){var n=setInterval(function(){headlineStickyInterval<=0?(t.classList.remove("hl-active-sticky"),t.classList.remove("hl-navbar-hanging"),t.style.margin="10px 0",clearInterval(n),window.removeEventListener("scroll",headlineStickyScrollEevent)):headlineStickyInterval--},1e3);e||(clearInterval(n),t.classList.remove("hl-active-sticky"),t.classList.remove("hl-navbar-hanging"),t.style.margin="10px 0")}function injectStickyStyleAndAnimation(){var t=document.createElement("style");t.textContent="\n\t\t.hl-active-sticky {\n\t\t\tposition: fixed;\n\t\t\ttop: -100%;\n\t\t\tz-index: 9999;\n\t\t\tleft: 50%;\n\t\t\ttransform: translateX(-50%);\n\t\t\tmargin: 0;\n\t\t\ttransition : margin-top .5s ease;\n\t\t\tanimation: hlSlideDown .5s forwards;\n\t\t}\n\n\t\t.hl-navbar-hanging{\n\t\t\tmargin-top : 50px !important;\n\t\t}\n\n\t\t@keyframes hlSlideDown{\n\t\t\t0%{top : -100px;}\n\t\t\t100%{top : 0px;}\n\t\t}\n\t\t",document.head.appendChild(t)}
    /* ===== HEADLINESTICKY METHOD ===== */