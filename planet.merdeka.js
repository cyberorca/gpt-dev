var gpt_gam_site = window.location.hostname.toUpperCase(),
gpt_gam_ver = 'V.0.5 - DK';
console.log('%c GPT '+gpt_gam_site+' '+gpt_gam_ver ,'color:#62ae44; font-size:18px; font-weight: bold; -webkit-text-stroke: 1px black;');

/** BEGIN PUBMATIC HB WRAPPER CODE **/
var isMobile = navigator.userAgent.match(/Android/)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| window.innerWidth <= 767;

if(isMobile == false) {
    (function() {
    var purl = window.location.href;
    if(isMobile)
    {
        var url = '//ads.pubmatic.com/AdServer/js/pwt/156536/481';
    }
    else{
        var url = '//ads.pubmatic.com/AdServer/js/pwt/156536/479';
    }
    var profileVersionId = '';
    if(purl.indexOf('pwtv=')>0){
        var regexp = /pwtv=(.*?)(&|$)/g;
        var matches = regexp.exec(purl);
        if(matches.length >= 2 && matches[1].length > 0){
            profileVersionId = '/'+matches[1];
        }
    }
    var wtads = document.createElement('script');
    wtads.async = true;
    wtads.type = 'text/javascript';
    wtads.src = url+profileVersionId+'/pwt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(wtads, node);
    })();
    /** END PUBMATIC HB WRAPPER CODE  **/

    var PWT={}; //Initialize Namespace
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    /*HL VIDEO STICKY STATE*/    
    var dfp_videoHLStickyState = false;
    PWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT
        (function() {
            var gads = document.createElement('script');
            var useSSL = 'https:' == document.location.protocol;
            gads.async = true;
            gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
        })();
    };
}

/*PROTOTYPE CUSTOM FILTERING*/
String.prototype.klyFiltering = function(delimiter) {
    return this.replace(/[\"\']/g, "").trim().split(delimiter).map(function(t) {
        return t.trim().toLowerCase()
    }).filter(function(x) {
        return x != "";
    });
};

if(isMobile) {
    /** PREBID MOBILE MERDEKA START */
    function spotxOutstreamFunc(bid) {
            function mobileAndTabletcheck() {
                var check = false;
                (function(a) {
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
            buckets: [{
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
        var adUnits = [{
                code: "div-gpt-ad-merdeka-sc",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
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
                bids: [{
                        bidder: "emx_digital",
                        params: {
                            tagid: "113616"
                        }
                    },
                    {
                        bidder: "innity",
                        params: {
                            zone: 54305,
                            pub: 536
                        }
                    },
                    {
                        bidder: "oftmedia",
                        params: {
                            placementId: "18777699"
                        }
                    },
                    {
                        bidder: "rtbhouse",
                        params: {
                            publisherId: "bI2sp5Pt1ubwkv6C9Hs5",
                            region: "prebid-asia"
                        }
                    },
                    {
                        bidder: "spotx",
                        params: {
                            channel_id: 285432,
                            ad_unit: "outstream",
                            outstream_function: spotxOutstreamFunc,
                        },
                    },
                    {
                        bidder: 'pubmatic',
                        params: {
                            publisherId: '156536',
                            adSlot: 'Prebid-Merdeka-Mobile-300x250_1',
                            video: {
                                mimes: ['video/mp4', 'video/x-flv'],
                                skippable: true,
                                minduration: 5,
                                maxduration: 30,
                                startdelay: 5,
                                playbackmethod: [1, 3],
                                api: [1, 2],
                                protocols: [2, 3],
                                battr: [13, 14],
                                linearity: 1,
                                placement: 2,
                                minbitrate: 10,
                                maxbitrate: 10
                            }
                        }
                    }
                ],
            },
            {
                code: "div-gpt-ad-merdeka-hl",
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
                bids: [{
                        bidder: "emx_digital",
                        params: {
                            tagid: "113616"
                        }
                    },
                    {
                        bidder: "innity",
                        params: {
                            zone: 53203,
                            pub: 536
                        }
                    },
                    {
                        bidder: "oftmedia",
                        params: {
                            placementId: "18777699"
                        }
                    },
                    {
                        bidder: "rtbhouse",
                        params: {
                            publisherId: "bI2sp5Pt1ubwkv6C9Hs5",
                            region: "prebid-asia"
                        }
                    },
                    {
                        bidder: "spotx",
                        params: {
                            channel_id: 285432,
                            ad_unit: "outstream",
                            outstream_function: spotxOutstreamFunc,
                        },
                    },
                    {
                        bidder: 'pubmatic',
                        params: {
                            publisherId: '156536',
                            adSlot: 'Prebid-Merdeka-Mobile-320x100_1',
                            video: {
                                mimes: ['video/mp4', 'video/x-flv'],
                                skippable: true,
                                minduration: 5,
                                maxduration: 30,
                                startdelay: 5,
                                playbackmethod: [1, 3],
                                api: [1, 2],
                                protocols: [2, 3],
                                battr: [13, 14],
                                linearity: 1,
                                placement: 2,
                                minbitrate: 10,
                                maxbitrate: 10
                            }
                        }
                    }
                ],
            },
            {
                code: "div-gpt-ad-merdeka-bottomfrm",
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
                bids: [{
                        bidder: "emx_digital",
                        params: {
                            tagid: "113616"
                        }
                    },
                    {
                        bidder: "innity",
                        params: {
                            zone: 53203,
                            pub: 536
                        }
                    },
                    {
                        bidder: "oftmedia",
                        params: {
                            placementId: "18777699"
                        }
                    },
                    {
                        bidder: "rtbhouse",
                        params: {
                            publisherId: "bI2sp5Pt1ubwkv6C9Hs5",
                            region: "prebid-asia"
                        }
                    },
                    {
                        bidder: "spotx",
                        params: {
                            channel_id: 285432,
                            ad_unit: "outstream",
                            outstream_function: spotxOutstreamFunc,
                        },
                    },
                    {
                        bidder: 'pubmatic',
                        params: {
                            publisherId: '156536',
                            adSlot: 'Prebid-Merdeka-Mobile-320x50_1',
                            video: {
                                mimes: ['video/mp4', 'video/x-flv'],
                                skippable: true,
                                minduration: 5,
                                maxduration: 30,
                                startdelay: 5,
                                playbackmethod: [1, 3],
                                api: [1, 2],
                                protocols: [2, 3],
                                battr: [13, 14],
                                linearity: 1,
                                placement: 2,
                                minbitrate: 10,
                                maxbitrate: 10
                            }
                        }
                    }
                ],
            },
            {
                code: "div-gpt-ad-merdeka-dfp-exposer-slot1-oop",
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
                bids: [{
                        bidder: "emx_digital",
                        params: {
                            tagid: "113616"
                        }
                    },
                    {
                        bidder: "oftmedia",
                        params: {
                            placementId: "18777699"
                        }
                    },
                    // { bidder: "pubmatic", params: { publisherId: "224248", adSlot: "1501749" } },
                    {
                        bidder: "rtbhouse",
                        params: {
                            publisherId: "bI2sp5Pt1ubwkv6C9Hs5",
                            region: "prebid-asia"
                        }
                    },
                    {
                        bidder: "spotx",
                        params: {
                            channel_id: 285432,
                            ad_unit: "outstream",
                            outstream_function: spotxOutstreamFunc,
                        },
                    },
                    {
                        bidder: 'pubmatic',
                        params: {
                            publisherId: '156536',
                            adSlot: 'Prebid-Merdeka-Mobile-300x600',
                            video: {
                                mimes: ['video/mp4', 'video/x-flv'],
                                skippable: true,
                                minduration: 5,
                                maxduration: 30,
                                startdelay: 5,
                                playbackmethod: [1, 3],
                                api: [1, 2],
                                protocols: [2, 3],
                                battr: [13, 14],
                                linearity: 1,
                                placement: 2,
                                minbitrate: 10,
                                maxbitrate: 10
                            }
                        }
                    }
                ],
            },
        ];

        googletag.cmd.push(function() {
            googletag.pubads().disableInitialLoad();
        });

        pbjs.que.push(() => {
            pbjs.setConfig({
                enableSendAllBids: true
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
            googletag.cmd.push(function() {
                pbjs.que.push(function() {
                    pbjs.setTargetingForGPTAsync();
                    googletag.pubads().refresh();
                });
            });
        }

        setTimeout(function() {
            initAdserver();
        }, FAILSAFE_TIMEOUT);
        /** PREBID MOBILE MERDEKA END */
        
    /*SET INTERVAL TO AUTO REFRESH BOTTOM FRAME ADS - NEW*/
    window.dataLayer = window.dataLayer || [];
    window.GAMLibrary = {};
    window.GAMLibrary = {
        dfpSlideup          :   '/36504930/m.merdeka.com/dfp-slideup',
        dfpExposerSlot1     :   '/36504930/m.merdeka.com/dfp-exposer-slot1',
        dfpExposerSlot2     :   '/36504930/m.merdeka.com/dfp-exposer-slot2',
        dfpBottomFrame      :   '/36504930/m.merdeka.com/dfp-bottomfrm',
        dfpTopFrame         :   '/36504930/m.merdeka.com/dfp-topfrm',
        dfpHeadline         :   '/36504930/m.merdeka.com/dfp-headline',
        timedBottomFrm      :   null,
        infiniteSCId        :   1,
        setGamBFInterval    :   function (active) {
                                    if (!active) {
                                        clearInterval(window.GAMLibrary.gamBFInterval);
                                        return;
                                    }
                                    window.GAMLibrary.gamBFInterval = setInterval(function () {
                                        document.querySelector("#dfp-spinads") && document.querySelector("#dfp-spinads").parentElement.remove(); 
                                        googletag.pubads().refresh([window.GAMLibrary.refreshSlot]);
                                    }, 60000);
                                },
        countScInfinite     :   function(){ return this.infiniteSCId++;},                       
        gptInitInfiniteSC   :   function () {
                                    var pageType = kly.pageType;
                                    if (pageType !== 'readPage') {
                                        var that = this;
                                        $('.js-page__articles').on('before_display', function() {
                                            var scIndex = that.countScInfinite();
                                            var slotName = 'div-gpt-ad-merdeka-infinite-sc-' + scIndex;
                                            var slotDiv = document.createElement('div');
                                            slotDiv.id = slotName;
                                            slotDiv.className = "infinite_ad";
                                            slotDiv.setAttribute("data-info", "ad");
                                            slotDiv.setAttribute("style", "text-align:center;border-top: 1px solid #E2E2E6;padding-top: 15px;");
                                            $(slotDiv).prependTo($(this));
                                            /*REGISTER DIV AND REFRESH SLOT*/
                                            googletag.cmd.push(function() {
                                                var slot = googletag.defineSlot('/36504930/m.merdeka.com/dfp-sc',[300,250],slotName).addService(googletag.pubads()).setTargeting("position", [scIndex]);
                                                googletag.display(slotName);
                                            });
                                        });
                                    } else {
                                        googletag.cmd.push(function() {
                                            googletag.defineSlot('/36504930/m.merdeka.com/dfp-sc', [300, 250], 'div-gpt-ad-merdeka-sc-1-').addService(googletag.pubads());
                                            googletag.display('/36504930/m.merdeka.com/dfp-sc');
                                        });
                                    }
                                },
        documentMeta       :   function (metaName) {
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
                                        
        arrToLowerCase      :    function (arr){
                                    return arr.map(function(v,i){
                                        return v.toLowerCase();
                                    });
                                },
        scrollBottomFrame   : function() {
                                    this.scroll = function(){
                                                        var scrollNode = document.scrollingElement || document.documentElement;
                                                        var scrollTop = scrollNode.scrollTop;
                                                        if (scrollTop >= "200") {
                                                            console.log('testing scroll',scrollTop,this.timedBottomFrm);
                                                            window.removeEventListener("scroll", this.scrollHandler);
                                                            googletag.pubads().refresh([this.timedBottomFrm]);

                                                            this.refreshSlot = this.timedBottomFrm;
                                                            this.setGamBFInterval();
                                                        }
                                                    };
                                    this.scrollHandler = this.scroll.bind(this);
                                    window.addEventListener("scroll", this.scrollHandler);
                                },
        infiniteSCArticle_var0  :  function() {
                                var infiniteEl = document.getElementById("body--infinite");
                                if(infiniteEl){
                                    var scDivContainer = document.querySelectorAll("div[id^=div-gpt-ad-merdeka-sc-infinite]"),idx=1;
                                        if(scDivContainer.length){
                                            scDivContainer.forEach(function(val,id){
                                                id++;
                                                if(!(id%2)){
                                                    googletag.cmd.push(function() {
                                                        var infiniteSlot = googletag
                                                        .defineSlot('/36504930/m.merdeka.com/dfp-sc', [300, 250], val.id)
                                                        .addService(googletag.pubads())
                                                        .setTargeting('position',idx);
                                                        googletag.display(val.id);
                                                        googletag.pubads().refresh([infiniteSlot]);
                                                        idx=idx+1;
                                                    });
                                                }
                                            });
                                        }else{
                                            var element = document.querySelector('.body--item'),
                                            bodyItemBreak = document.querySelectorAll('.body-item__break'),
                                            scContainer = '',
                                            div='',
                                            elContent = document.querySelectorAll('.body--item'),
                                            scindex=1;
                                            bodyItemBreak.forEach(function(content,id){
                                                if( !(id%2)){
                                                    googletag.cmd.push(function() {
                                                        scContainer = "div-gpt-ad-merdeka-sc-infinite-"+scindex;
                                                        div = document.createElement('div');
                                                        div.setAttribute('id', scContainer);
                                                        content.parentNode.insertBefore(div, content);
                                                        console.log("sc container : ",id,document.querySelector("#"+scContainer));
                                                        var infiniteSlot = googletag
                                                        .defineSlot('/36504930/m.merdeka.com/dfp-sc', [300, 250], scContainer)
                                                        .addService(googletag.pubads())
                                                        .setTargeting('position',scindex);
                                                        googletag.display(scContainer);
                                                        googletag.pubads().refresh([infiniteSlot]);
                                                        scindex++;
                                                    });
                                                }
                                            });
                                        }
                                    }    
                                },

        infiniteSCArticle_var12  :  function() {
                                var infiniteEl = document.getElementById("body--infinite");
                                if(infiniteEl){
                                    var scDivContainer = document.querySelectorAll("div[id^=div-gpt-ad-merdeka-sc-infinite]"),idx=1;
                                        if(scDivContainer.length){
                                            scDivContainer.forEach(function(val,id){
                                            id++;
                                            googletag.cmd.push(function() {
                                            var infiniteSlot = googletag.defineSlot('/36504930/m.merdeka.com/dfp-sc', [300, 250], val.id).addService(googletag.pubads()).setTargeting('position',idx);
                                                googletag.display(val.id);
                                                googletag.pubads().refresh([infiniteSlot]);
                                                idx=idx+1;
                                                });
                                            });
                                        }else{
                                            var element = document.querySelector('.body--item'),
                                            bodyItemBreak = document.querySelectorAll('.body-item__break'),
                                            scContainer = '',
                                            div='',
                                            elContent = document.querySelectorAll('.body--item'),
                                            scindex=1;
                                            bodyItemBreak.forEach(function(content,id){
                                                googletag.cmd.push(function() {
                                                    scContainer = "div-gpt-ad-merdeka-sc-infinite-"+scindex;
                                                    div = document.createElement('div');
                                                    div.setAttribute('id', scContainer);
                                                    content.parentNode.insertBefore(div, content);
                                                    console.log("sc container : ",id,document.querySelector("#"+scContainer));
                                                    var infiniteSlot = googletag
                                                    .defineSlot('/36504930/m.merdeka.com/dfp-sc', [300, 250], scContainer)
                                                    .addService(googletag.pubads())
                                                    .setTargeting('position',scindex);
                                                    googletag.display(scContainer);
                                                    googletag.pubads().refresh([infiniteSlot]);
                                                    scindex++;
                                                });
                                            });
                                        }
                                    }    
                                },
        eventTrackingImpression		: 	function(subCat,auPath){
                                            window.dataLayer.push({
                                                event: "impression",
                                                feature_name: "ads",
                                                feature_location: subCat, /*==> diambil dari kly.gtm.subCategory, Example : showbiz|korea*/
                                                feature_position: auPath /* ==> diambil dari adunit path ( e.slot.getSlotId().getAdUnitPath(); ), Example: "/36504930/m.kapanlagi.com/dfp-bottomfrm"*/
                                            });
                                        },
        /* START - TOPFRAME FREEZE - 30 june 2020 */
        lockScroll          		:   {
                                            timeout: 3000,
                                            unset: function() {
                                                (typeof unfreezePages === 'function') ? unfreezePages() : '';
                                                (typeof gamInitTopFrame === 'object') ? gamInitTopFrame.gamTFunfreeze(): '';
                                            },
                                            set: function() {
                                                    var that = this;
                                                    var lockTime = new Date().getTime();
                                                    var startLoad = window.kly && window.kly.startLoad ? window.kly.startLoad : 0;
                                                    var diff = lockTime - startLoad;
                                                    var lockTimeStamp = Math.floor(diff / 1000 % 60);
                                                    this.eventTrackingLock(lockTimeStamp);
                                                    setTimeout(function() {
                                                        that.unset();
                                                    }, that.timeout);
                                            },
                                            eventTrackingLock		: 	function(lockDuration){
                                                window.dataLayer.push({
                                                event: "impression",
                                                feature_name: "load-scroll",
                                                feature_location: lockDuration,
                                                feature_position: "" 
                                                });
                                            }
                                        },
        /* END - TOPFRAME FREEZE - 30 june 2020 */
        lazzyLoadingAdunit : function(){
                                var __lazzYSetting__ = {
                                    "div-gpt-ad-merdeka-mobile-contextual-oop" :{
                                        "type" : "oop",
                                        "adunit" : "/36504930/m.merdeka.com/dfp-contextual",
                                        "generated" : 0,
                                    }
                                }
                            
                                document.addEventListener('DOMContentLoaded', function () {
                                    function renderContextual(){
                                        var _generatedCount_ = 0;
                                        var _itemCount_ = 0;
                            
                                        for (const [key, value] of Object.entries(__lazzYSetting__)) {
                                            _itemCount_ ++;
                                            var _defineSlot_ = null;
                            
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
    }

    /* DMP CATEGORY LIST */
    window.createDMPTracker = function(adsList,dfpTracker){
        var dmpEl,dmpON,dmpId = 1, 
            dmpList=["fashion-events","acara-film","beauty-events","comedy-events","fan-conventions","lifestyle-events","musical-events","sporting-events","auto-shows","parenting-events","political-event","apartments","life-insurance","motor-insurance","health-insurance","education-insurance","travel-insurance","home-insurance","automotive","auto-racing","beauty","disasters","local-news","law","international-news","crime","national-news","elections","politics","government-business","business-and-finance","cloud-computing","content-channel","education","outdoor-decorating","consumer-electronics","esports","events","family-and-relationships","fashion-anak","mens-fashion","womens-fashion","fitness-and-exercise","fmcg-food-and-drink","fmcg-personal-care","console-games","pc-games","gaming","computer-peripherals","hatchback","health","healthy-and-wellness","home-and-garden","homeschooling","hotels-and-motels","pharmaceutical-industry","financial-industry","entertainment-industry","healthcare-industry","construction-industry","legal-services-industry","power-and-energy-industry","logistics-and-transportation-industry","food-industry","manufacturing-industry","media-industry","mechanical-and-industrial-engineering-industry","automotive-industry","education-industry","aviation-industry","hospitality-industry","advertising-industry","agriculture","real-estate-industry","retail-industry","technology-industry","telecommunications-industry","interior-decorating","internet","residentials-buy-sell-and-rentals","auto-buying-and-selling","credit-cards","household-supplies","injuries","pregnancy","childrens-health","adults-health","mental-health","reproductive-health","computing","bollywood-content","dangdut-content","movie-content","hijab-content","hollywood-content","korean-content","quiz-content","music-content","coffee","course-education","green-vehicles","frozen-foods","fast-foods","side-dishes","desserts-and-baking","snacks","healthy-cooking-and-eating","make-up","marketing-and-advertising","soft-drinks","mobil-cerdas","luxury-cars","budget-cars","performance-cars","mobile-apps","mpv","news-and-politics","nutrition","non-profit-organizations","business-expos-and-conferences","parenting","marketplace/ecommerce","weight-loss","early-childhood-education","alternative-medicine","chronic-disease","ailment","sports-equipment","skin-care","hair-care","body-care","facecare","home-appliances","personal-finance","houses","loans","fmcg-oral-care","fmcg-hair-care","fmcg-body-care","fmcg-face-care","milk-products","tickets-promo-and-vouchers","property","relationship","auto-rentals","sales-and-promotions","primary-education","online-education","private-school","soccer","motorcycles","auto-repair","shopping-and-ecommerce","smartphones","social-networking","computer-software-and-applications","auto-parts","sports","startups","style-and-fashion","suv","water-services","gas-and-electric","internet-service-providers","phone-services","technology-and-computing","television","physical-therapy","train-tickets","flight-tickets","online-transportation","travel","budget-travel","special-interest-tv","childrens-tv","animation-tv","news-tv","drama-tv","comedy-tv","music-tv","sports-tv","reality-tv","college-education","vaccines","wearable-technology","web-hosting","family-travel","culinary-travel","religious-tourism"];
            Array.isArray(adsList) && dmpList.forEach(function(v,k){
                adsList.forEach(function(l,e){
                if(v === l){
                    cat = v.trim();
                    dmpEl = document.createElement('img');
                    dmpON = parent.window.document.querySelector('#dmp-tracker-'+dmpId);
                    dmpON ? dmpON.remove() : '';
                    dmpEl.setAttribute('src','https://beacon.krxd.net/event.gif?event_id=M361oCpv&event_type=registration&cat='+cat+'&media=banner');
                    dmpEl.setAttribute('width','0');
                    dmpEl.setAttribute('height','0');
                    dmpEl.setAttribute('id','dmp-tracker-'+dmpId);
                    parent.window.document.body.appendChild(dmpEl);
                    dmpId++;     
                    } 
                });
            });
        parent.window.open(dfpTracker, '_blank');
    };

    var isReadPage = kly.pageType === "ReadPage";

    /*LOAD CONTEXTUAL ON DOM READY*/
    if(isReadPage) {
        GAMLibrary.lazzyLoadingAdunit();
    }

    googletag.cmd.push(function() {
        /* IF CHANNEL NOT EQUAL TO ADUNIT LIST */
        var urlPath = document.URL,
            isMatcont = false,
            blackListWords = new Array('matcont', 'aduhai', 'kelamin', 'vital', 'anal', 'belahan', 'bercinta', 'bergairah', 'gairah', 'intim', 'bikini', 'bokong', 'boob', 'bra', 'bugil', 'celana', 'ciuman', 'cleavage', 'dada', 'dewasa', 'diremas', 'doggie', 'ejakulasi', 'ereksi', 'erotis', 'foreplay', 'kiss', 'seks', 'gangbang', 'horny', 'hot', 'kamasutra', 'keperawanan', 'perawan', 'kondom', 'kontrasepsi', 'libido', 'lingerie', 'masturbasi', 'mature', 'menggairahkan', 'menggoda', 'mesra', 'miss-v', 'mr-p', 'nakal', 'naughty', 'nipple', 'nipples', 'onani', 'oral', 'oral seks', 'organ', 'orgasme', 'paha', 'pantat', 'panties', 'payudara', 'pelecehan', 'telanjang', 'penetrasi', 'penis', 'perkosa', 'perkosaan', 'pole', 'porno', 'pornoaksi', 'pornografi', 'telentang', 'provokatif', 'putting', 'ranjang', 'sex', 'penetratif', 'seksi', 'seksual', 'sensual', 'seronok', 'doll', 'toys', 'skandal', 'sperma', 'striptease', 'striptis', 'syur', 'terangsang', 'tiduri', 'topless', 'vagina', 'vibrator', 'lendir', 'prostitusi', 'homoseks', 'meraba-raba', 'mesum', 'memerkosa', 'rudapaksa', 'kemaluan', 'kasus asusila', 'pemerkosaan', 'hubungan seksual', 'hubungan intim', 'video porno', 'berita hoax', 'ternyata hoax', 'ahed tamimi', 'konflik palestina israel', 'konflik suriah', 'ujaran kebencian', 'g30s', 'kediktatoran arab saudi', 'konflik palestina-israel', 'fpi', 'penembakan', 'pelecehan seksual', 'tips seks', 'komunitas swinger', 'fenomena kelainan seksual', 'penyimpangan seks', 'posisi seks', 'obat kuat', 'bentuk payudara', 'implan payudara', 'chat firza-rizieq', 'anarkisme suporter sepakbola', 'bentrok suporter', 'pengeroyokan', 'penganiayaan', 'begal motor', 'kekerasan pada wartawan', 'pemerkosaan anak', 'pencabulan', 'bentrokan warga', 'bentrokan', 'kasus narkoba', 'akibat merokok', 'bahaya merokok', 'berhenti merokok', 'cara berhenti merokok', 'efek berhenti merokok', 'larangan merokok', 'tips berhenti merokok', 'rokok elektrik', 'pilpres 2019', 'koalisi pilpres 2019', 'koalisi prabowo', 'koalisi jokowi', 'prabowo-sandiaga', 'ratna sarumpaet', 'capres jokowi', 'capres prabowo', 'kebohongan ratna sarumpaet', 'prabowo subianto', 'jemaah ansharut daulah', 'aliran sesat', 'lia eden', 'kisah mualaf', 'penistaan agama', 'suporter tewas', 'gempa palu', 'gempa donggala', 'gempa sulawesi tengah', 'pembunuhan', 'tsunami palu', 'penemuan mayat', 'lion air jatuh di karawang', 'lion air jatuh', 'pembunuhan sadis', 'lion air hilang kontak', 'pesawat jatuh', 'pesawat hilang kontak', 'kecelakaan', 'kapal tenggelam di danau toba', 'kecelakaan bus', 'kapal tenggelam', 'kasus tabrak lari', 'bunuh diri', 'perselingkuhan', 'kisah perselingkuhan', 'razia pasangan mesum', 'seks bebas', 'gangguan jiwa', 'tes keperawanan', 'kontroversi hukuman mati', 'stres dan depresi', 'ahok gugat cerai veronica tan', 'Kanker', 'Impotensi', 'merokok', 'Perokok', 'Rokok', 'tembakau', 'Pelanggaran', 'Tablet', 'Overdosis', 'Jantung', 'Stroke', 'Cancer', 'Narkoba', 'Djarum', 'Ganja', 'BNN', 'Obesitas', 'Osteoporosis', 'Corona', 'Corona di indonesia', 'virus corona', 'virus-corona', 'covid-19', 'wabah corona', 'menewaskan', 'menewaskan orang', 'mengancam nyawa', 'meninggal', 'meninggal dunia', 'orang mati', 'orang tewas', 'pemakaman', 'petugas penyelamat', 'telah meninggal', 'terbunuh', 'tewas', 'tewaskan', 'tim penyelamat', 'wanita meninggal', 'autopsi', 'belasungkawa', 'bencana', 'bencana besar', 'bunuh orang', 'darurat bencana', 'dilaporkan tewas', 'dimakamkan', 'dipastikan tewas', 'ditemukan mati', 'ditemukan tewas', 'hilangnya nyawa', 'identitas korban', 'inalillahi', 'jasad korban', 'jasadnya', 'jenasah wanita', 'jenazah', 'jenazah pria', 'jenazah teridentifikasi', 'jasad', 'kehilangan hidupnya', 'kehilangan nyawa', 'kehilangan nyawanya', 'kematian', 'korban', 'korban jiwa', 'korban meninggal', 'korban tewas', 'mati', 'mayat', 'mayat korban', 'membunuh', 'membunuh istrinya', 'membunuh mereka', 'membunuh suaminya', 'menemui ajal', 'mengalami koma', 'menghembuskan nafas terakhir', 'menimbulkan korban', 'meninggal akibat sakit', 'menyebabkan kematian', 'meregang nyawa', 'meregggut nyawa', 'modar', 'nyawa hilang', 'nyawa melayang', 'penyebab kematian', 'tak bernyawa', 'tak sadarkan diri', 'terkapar', 'tidak bernyawa', 'tutup usia', 'wafat', 'kematian virus', 'kematian wabah', 'korban terinfeksi', 'virus menyerang', 'merenggut nyawa', 'pelayat', 'hilangkan nyawa', 'renggut nyawa', 'wabah', 'keadaan kritis', 'kehilangan darah', 'merenggut jiwa', 'telan nyawa', 'menelan nyawa', 'memakan nyawa', 'dinyatakan meninggal', 'nyawa tak tertolong', 'penyakit', 'sakit pernapasan', 'sesak', 'korona', 'corona', 'odp', 'pdp', 'virus', 'rumah sakit', 'Covid-19', 'virus korona', 'positif korona', 'COVID-19', 'terjangkit COVID-19', 'terinfeksi virus corona'),
            /* POPULATE META DATA KEYWORDS */
            dfp_pageTitle = kly.article && kly.article.title.klyFiltering(' '),
            dfp_titles = (typeof dfp_pageTitle !== 'undefined') ? dfp_pageTitle : '',
            dfp_pageKeywords = GAMLibrary.documentMeta("keywords"),
            dfp_keyword = dfp_pageKeywords.klyFiltering(","),
            /* POPULATE META DATA DESC */
            dfp_pageDesc = GAMLibrary.documentMeta("description"),
            dfp_desc = dfp_pageDesc.klyFiltering(","),
            tagForAds = kly && (tagForAds = kly.gtm.tag.klyFiltering("|")),
            dfp_keywords = dfp_keyword.concat(dfp_titles, dfp_desc, tagForAds);
            /*MATURE CONTENT DEFINED VAR & SET TARGETTING*/
            if (!blackListWords) {
                var blackListWords = new Array('matcont');
            }

            /*search from keyword, desc & tag meta data*/
            dfp_keywords.forEach(function(sKeyword) {
                sKeyword = sKeyword.toLowerCase();
                blackListWords = GAMLibrary.arrToLowerCase(blackListWords);
                tagForAds.push(sKeyword);
                if (GAMLibrary.inArray(sKeyword, blackListWords)) {
                    isMatcont = true;
                }
            });
            
        /*  START TARGETING BLOCK   */
        if (isMatcont) { googletag.pubads().setTargeting("isMatcont", ["1"]);}
        if(typeof Krux !== "undefined"){
            googletag.pubads().setTargeting('ksg', Krux.segments);
            googletag.pubads().setTargeting('kuid', Krux.user);
        }
        googletag.pubads().setTargeting("tags",tagForAds);
        googletag.pubads().setTargeting("currentUrl", urlPath);
        googletag.pubads().setTargeting("type", kly.gtm.type);
        googletag.pubads().setTargeting("pageType", kly.pageType);
        googletag.pubads().setTargeting("channel", kly.channel.full_slug);
        // googletag.pubads().setTargeting("audience", kly.gtm.audience.split("|"));
        googletag.pubads().setTargeting("isAdvertorial", typeof (isAdvertorial = kly.article && kly.article.isAdvertorial.toString()) === "undefined" ? "false" :  isAdvertorial);   
        googletag.pubads().setTargeting("isMultipage", typeof (isMultipage = kly.article && kly.article.isMultipage.toString()) === "undefined" ? "false" : isMultipage );
        googletag.pubads().setTargeting("articleId", kly.gtm.articleId.toString());
        googletag.pubads().setTargeting("pagingNum", typeof (pageParam = kly.gtm.pageParam && kly.gtm.pageParam.toString()) === "undefined" ? "false" : pageParam );
        googletag.pubads().setTargeting("newExp",typeof (newExp = kly.gtm.new_exp) === "undefined" ? "false" : kly.gtm.new_exp.toString());
        /*  END TARGETING BLOCK   */

        /*DEFINE ALL SLOT*/
        googletag.defineSlot(GAMLibrary.dfpTopFrame,[1, 1],'div-gpt-ad-merdeka-topfrm-oop').addService(googletag.pubads());
        googletag.defineSlot(GAMLibrary.dfpHeadline,[
            [320, 50],
            [320, 100]
        ], 'div-gpt-ad-merdeka-hl').addService(googletag.pubads());
        googletag.defineSlot('/36504930/m.merdeka.com/dfp-sc', [300, 250], 'div-gpt-ad-merdeka-sc').addService(googletag.pubads());
        googletag.defineSlot(GAMLibrary.dfpExposerSlot1, [[300,250],[300,600],[320,480]], 'div-gpt-ad-merdeka-dfp-exposer-slot1-oop').addService(googletag.pubads());
        googletag.defineOutOfPageSlot(GAMLibrary.dfpExposerSlot2, 'div-gpt-ad-merdeka-dfp-exposer-slot2-oop').addService(googletag.pubads());
        // googletag.defineOutOfPageSlot(GAMLibrary.dfpTopFrame, 'div-gpt-ad-merdeka-topfrm-oop').addService(googletag.pubads());
        googletag.defineOutOfPageSlot('/36504930/m.merdeka.com/dfp-newsTag1', 'div-gpt-ad-liputan6-merdeka-oop').addService(googletag.pubads());
        googletag.defineOutOfPageSlot('/36504930/m.merdeka.com/dfp-newsTag2', 'div-gpt-ad-merdeka-newsTag2-oop').addService(googletag.pubads());
        googletag.defineOutOfPageSlot(GAMLibrary.dfpSlideup, 'div-gpt-ad-dfp-overlay-oop').addService(googletag.pubads());
        
        /*Bottom Frame Scrolling*/
        GAMLibrary.timedBottomFrm = googletag.defineSlot(GAMLibrary.dfpBottomFrame, [[320, 50],[320, 100]], 'div-gpt-ad-merdeka-bottomfrm').addService(googletag.pubads());
        GAMLibrary.scrollBottomFrame();
        /*Bottom Frame Scrolling*/
        var _countAdUnit = 0,
        _slots = kly.pageType !== "ReadPage" ? [9] : [10,11,12],
        _send = false;
        googletag.pubads().addEventListener('slotResponseReceived', function(event) {
            _countAdUnit++;
            var dfp_slotDelivered = event.slot.getResponseInformation() ? 'block' : 'none'; /* check wheter there is ads or not*/
            var dfp_slotAdUnitPath = event.slot.getSlotId().getAdUnitPath(); /* get adunit path */
            var dfp_slotAdUnitID = event.slot.getSlotId().getId(); /* get adunit container id*/
            var dfp_slotElementId = event.slot.getSlotId().getDomId(); /* get adunit dom id*/
            /*check delivering ads slot*/
            if (dfp_slotDelivered == 'block')
            {
                if (dfp_slotAdUnitPath == GAMLibrary.dfpHeadline) {
                    console.log('INIT STICKY HEADLINE ');
                    headlineSticky();
                }
                /* START - TOPFRAME FREEZE - 30 june 2020 */
                if (dfp_slotAdUnitPath == GAMLibrary.dfpTopFrame) {
                    var deviceOrientation = window.matchMedia("(orientation: portrait)");
                    var that = GAMLibrary.lockScroll;
                    if (!deviceOrientation.matches) {
                        GAMLibrary.lockScroll.unset();
                    }else{
                        GAMLibrary.lockScroll.set();
                    }
                    window.addEventListener("resize", function() {
                        if (!deviceOrientation.matches) {
                            that.unset();
                        }
                    });
                }
                /* END - TOPFRAME FREEZE - 30 june 2020 */
            }else{
                /* START - TOPFRAME FREEZE - 30 june 2020 */
                if (dfp_slotAdUnitPath == GAMLibrary.dfpTopFrame) {
                    GAMLibrary.lockScroll.unset();                     
                }	
                /* END - TOPFRAME FREEZE - 30 june 2020 */					
            }

            if (dfp_slotElementId.match(/-oop/)) { 
                if (document.getElementById(dfp_slotElementId) && document.getElementById(dfp_slotElementId).getElementsByTagName('iframe')[0] && (document.getElementById(dfp_slotElementId).getElementsByTagName('iframe')[0].getAttribute('height') == 1)) {
                    document.getElementById(dfp_slotElementId).getElementsByTagName('iframe')[0].style.display = "none";
                }
            }
            if (_slots.indexOf(_countAdUnit) != -1) {
                    var _timeEnd = _getDateTimeNow().date;
                    _globalVar.timeEnd = _getDateTimeNow().milisecond;
                    var _totalResponse = _globalVar.timeEnd - _globalVar.timeStart;
                    if(!_send){
                        var  _timeEndParse= _totalResponse / 1000;
                        _timeEndResult = +_timeEndParse.toFixed(2);
                        _callConsoleTime("GPT LOADTIME END WITH "+_countAdUnit +" AD RESPONSE AT", _timeEnd);
                        _callConsoleTime("GPT LOADTIME TOTAL RESPONSE ( milisecond )", _totalResponse + " milisecond");
                        _callConsoleTime("GPT LOADTIME TOTAL RESPONSE ( second )", _timeEndResult + " second");

                        window.dataLayer.push({
                            event: "load-time",
                            feature_name: "ads-latency",
                            feature_value: _timeEndResult
                        });
                        _send = true;
                    }
            }
        });

        /* START INIT LIST SHOWCASE ADS */
        var CheckNewExp = typeof (newExp = kly.gtm.new_exp) === "undefined" ? "NULL" : kly.gtm.new_exp.toString();
        if (CheckNewExp != "NULL") {
            if (CheckNewExp=="paging_var0") {
                GAMLibrary.infiniteSCArticle_var0();
            }
            else {
                GAMLibrary.infiniteSCArticle_var12();
            }
        } else { GAMLibrary.gptInitInfiniteSC(); }
        /* END INIT LIST SHOWCASE ADS */

        googletag.pubads().setCentering(true);
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
        
    });
        
    /************ HEADLINE STICKY 3s ************/
    var headlineStickyInterval = 3
    var headlineStickyStatus = false;                    
    function headlineSticky(timeInterval) {
        if (timeInterval != null) {
            headlineStickyInterval = timeInterval;
        }
        console.log(headlineStickyInterval)
        var dfpHL = document.getElementById("div-gpt-ad-merdeka-hl");
        var dfpHLShadow = document.createElement("div");
        dfpHLShadow.setAttribute("id","div-gpt-ad-merdeka-hl-shadow");
        dfpHL.parentElement.insertBefore(dfpHLShadow, dfpHL);

        injectStickyStyleAndAnimation();
        window.addEventListener("scroll", headlineStickyScrollEevent)
    }            
    function headlineStickyScrollEevent() {
        var dfpHL = document.getElementById("div-gpt-ad-merdeka-hl");
        var dfpHLShadow = document.getElementById("div-gpt-ad-merdeka-hl-shadow");
        var hlTop = dfpHLShadow.getBoundingClientRect().top;
        var menubar = document.querySelector(".layout__nav-content");
        var scrollTOP = document.documentElement.scrollTop || document.body.scrollTop;

        if(!headlineStickyStatus){
            if(hlTop <= 0){
                dfpHL.classList.add("hl-active-sticky");
                dfpHL.style = ''; 
                removeStickyHeadline(dfpHL, true);
                headlineStickyStatus = true;
            }
        }else{
            if(hlTop <= 0){

            }else{
                window.removeEventListener("scroll", headlineStickyScrollEevent);
                removeStickyHeadline(dfpHL, false);
            }
        }

    }
    function removeStickyHeadline(dfpHL, status) {
        var _interval = setInterval(function () {
                            if (headlineStickyInterval <= 0) {
                                dfpHL.classList.remove("hl-active-sticky");
                                dfpHL.classList.remove("hl-navbar-hanging");
                                dfpHL.style.margin = "10px 0";
                                clearInterval(_interval);
                                window.removeEventListener("scroll", headlineStickyScrollEevent);
                            }else{
                                headlineStickyInterval--;
                            }
                        }, 1000)

        if (!status) {
        clearInterval(_interval);
        dfpHL.classList.remove("hl-active-sticky");
        dfpHL.classList.remove("hl-navbar-hanging");
        dfpHL.style.margin = "10px 0";
        }
    }
    function injectStickyStyleAndAnimation() {
        var _style = document.createElement("style");
        _style.textContent = '.hl-active-sticky {position: fixed;top: -100%;z-index: 9999;left: 50%;transform: translateX(-50%);margin: 0;transition : margin-top .5s ease;animation: hlSlideDown .5s forwards;}.hl-navbar-hanging{margin-top : 50px !important;}@keyframes hlSlideDown{0%{top : -100px;}100%{top : 0px;}}';
        document.head.appendChild(_style)
    }
    /************ HEADLINE STICKY 3s ************/

} else {

        /* UnCompressed GPT Tag Desktop v20190503-0415-DK */
        var blackListWords = new Array('matcont', 'aduhai','dildo','sekstoys', 'kelamin', 'vital', 'anal', 'belahan', 'bercinta', 'bergairah', 'gairah', 'intim', 'bikini', 'bokong', 'boob', 'bra', 'bugil', 'celana', 'ciuman', 'cleavage', 'dada', 'dewasa', 'diremas', 'doggie', 'ejakulasi', 'ereksi', 'erotis', 'foreplay', 'kiss', 'gairah', 'seks', 'gangbang', 'horny', 'hot', 'kamasutra', 'keperawanan', 'perawan', 'kondom', 'kontrasepsi', 'libido', 'lingerie', 'masturbasi', 'mature', 'menggairahkan', 'menggoda', 'mesra', 'miss-v', 'mr-p', 'nakal', 'naughty', 'nipple', 'nipples', 'onani', 'oral', 'oral seks', 'organ', 'orgasme', 'paha', 'pantat', 'panties', 'payudara', 'pelecehan', 'telanjang', 'penetrasi', 'penis', 'perkosa', 'perkosaan', 'pole', 'porno', 'pornoaksi', 'pornografi', 'telentang', 'provokatif', 'putting', 'ranjang', 'sex', 'penetratif', 'seksi', 'seksual', 'sensual', 'seronok', 'doll', 'toys', 'skandal', 'sperma', 'striptease', 'striptis', 'syur', 'terangsang', 'tiduri', 'topless', 'vagina', 'vibrator', 'lendir', 'prostitusi', 'homoseks', 'meraba-raba', 'mesum', 'keperawanan', 'memerkosa', 'rudapaksa', 'kemaluan');
        var isMatcont = false;
        /* Function to Check Ipad Local storage Lfloat */
        var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
        
        /*MATURE CONTENT DEFINED VAR*/
        if (!blackListWords) {
            var blackListWords = new Array('matcont');
        }
        
        /* DMP CATEGORY LIST */
        window.createDMPTracker = function(adsList, dfpTracker) {
            var dmpEl, dmpON, dmpId = 1,
                dmpList = ["fashion-events","acara-film","beauty-events","comedy-events","fan-conventions","lifestyle-events","musical-events","sporting-events","auto-shows","parenting-events","political-event","apartments","life-insurance","motor-insurance","health-insurance","education-insurance","travel-insurance","home-insurance","automotive","auto-racing","beauty","disasters","local-news","law","international-news","crime","national-news","elections","politics","government-business","business-and-finance","cloud-computing","content-channel","education","outdoor-decorating","consumer-electronics","esports","events","family-and-relationships","fashion-anak","mens-fashion","womens-fashion","fitness-and-exercise","fmcg-food-and-drink","fmcg-personal-care","console-games","pc-games","gaming","computer-peripherals","hatchback","health","healthy-and-wellness","home-and-garden","homeschooling","hotels-and-motels","pharmaceutical-industry","financial-industry","entertainment-industry","healthcare-industry","construction-industry","legal-services-industry","power-and-energy-industry","logistics-and-transportation-industry","food-industry","manufacturing-industry","media-industry","mechanical-and-industrial-engineering-industry","automotive-industry","education-industry","aviation-industry","hospitality-industry","advertising-industry","agriculture","real-estate-industry","retail-industry","technology-industry","telecommunications-industry","interior-decorating","internet","residentials-buy-sell-and-rentals","auto-buying-and-selling","credit-cards","household-supplies","injuries","pregnancy","childrens-health","adults-health","mental-health","reproductive-health","computing","bollywood-content","dangdut-content","movie-content","hijab-content","hollywood-content","korean-content","quiz-content","music-content","coffee","course-education","green-vehicles","frozen-foods","fast-foods","side-dishes","desserts-and-baking","snacks","healthy-cooking-and-eating","make-up","marketing-and-advertising","soft-drinks","mobil-cerdas","luxury-cars","budget-cars","performance-cars","mobile-apps","mpv","news-and-politics","nutrition","non-profit-organizations","business-expos-and-conferences","parenting","marketplace/ecommerce","weight-loss","early-childhood-education","alternative-medicine","chronic-disease","ailment","sports-equipment","skin-care","hair-care","body-care","facecare","home-appliances","personal-finance","houses","loans","fmcg-oral-care","fmcg-hair-care","fmcg-body-care","fmcg-face-care","milk-products","tickets-promo-and-vouchers","property","relationship","auto-rentals","sales-and-promotions","primary-education","online-education","private-school","soccer","motorcycles","auto-repair","shopping-and-ecommerce","smartphones","social-networking","computer-software-and-applications","auto-parts","sports","startups","style-and-fashion","suv","water-services","gas-and-electric","internet-service-providers","phone-services","technology-and-computing","television","physical-therapy","train-tickets","flight-tickets","online-transportation","travel","budget-travel","special-interest-tv","childrens-tv","animation-tv","news-tv","drama-tv","comedy-tv","music-tv","sports-tv","reality-tv","college-education","vaccines","wearable-technology","web-hosting","family-travel","culinary-travel","religious-tourism"];
            Array.isArray(adsList) && dmpList.forEach(function(v, k) {
                adsList.forEach(function(l, e) {
                    if (v === l) {
                        cat = v.trim();
                        dmpEl = document.createElement('img');
                        dmpON = parent.window.document.querySelector('#dmp-tracker-' + dmpId);
                        dmpON ? dmpON.remove() : '';
                        dmpEl.setAttribute('src', 'https://beacon.krxd.net/event.gif?event_id=M361oCpv&event_type=registration&cat=' + cat + '&media=banner');
                        dmpEl.setAttribute('width', '0');
                        dmpEl.setAttribute('height', '0');
                        dmpEl.setAttribute('id', 'dmp-tracker-' + dmpId);
                        console.log(dmpEl);
                        parent.window.document.body.appendChild(dmpEl);
                        dmpId++;
                    }
                });
            });
            parent.window.open(dfpTracker, '_blank');
        };
        
        googletag.cmd.push(function() {
            var oop_dfpBillboard = '/36504930/www.merdeka.com/dfp-billboard';
            var oop_dfpBottomFrm = '/36504930/www.merdeka.com/dfp-bottomfrm';
            var oop_dfpRecommend1 = '/36504930/www.merdeka.com/dfp-recommend-slot-1';
            var oop_dfpRecommend2 = '/36504930/www.merdeka.com/dfp-recommend-slot-2';
            var isBFRendered = false;
            /*CONTENT FILTERING SCRIPT*/
            var urlPath = document.URL;
            var urlArray=urlPath.split("/");
            function inArray(needle, haystack) {var length = haystack.length; for(var i = 0; i < length; i++) { if(haystack[i] == needle) return true;} return false;}
            function documentMeta(metaName){
                var metaResult = '';
                var metas = document.getElementsByTagName('meta');
                if (metas) {
                    for (var x=0,y=metas.length; x<y; x++) {
                        if (metas[x].name.toLowerCase() == metaName) {
                            metaResult += metas[x].content;
                        }
                    }
                }
                return metaResult != '' ? metaResult : '';
            }
            function arrToLowerCase (arr){
                return arr.map(function(v,i){
                    return v.toLowerCase();
                });
            }

            /*CONTENT FILTERING SCRIPT*/
            var dfp_pageTitle = urlArray[urlArray.length -1],
            dfp_titles = dfp_pageTitle.klyFiltering("-"),
            dfp_pageKeywords = documentMeta("keywords"),
            dfp_keyword = dfp_pageKeywords.klyFiltering(","),
            /* POPULATE META DATA DESC */
            dfp_pageDesc = documentMeta("description"),
            dfp_desc = dfp_pageDesc.klyFiltering(","),
            tagForAds = kly && (tagForAds = kly.gtm.tag.klyFiltering("|")),
            dfp_pageTag = is_taggedAds = new Array(),
            dfp_keywords = dfp_keyword.concat(dfp_titles, dfp_desc, tagForAds);
            //search from keyword, desc & tag meta data
            dfp_keywords.forEach(function(sKeyword) {
                sKeyword = sKeyword.toLowerCase();
                blackListWords = arrToLowerCase(blackListWords);
                tagForAds.push(sKeyword);
                if (inArray(sKeyword, blackListWords)) {
                    isMatcont = true;
                }
            });
            /*END CONTENT FILTERING SCRIPT*/
            mdkInfinite_sc = '/36504930/www.merdeka.com/dfp-sc2';

            googletag.defineSlot('/36504930/www.merdeka.com/dfp-sc1', [300, 600], 'div-gpt-ad-merdeka-sc1').addService(googletag.pubads());
            googletag.defineSlot(mdkInfinite_sc , [300, 250], 'div-gpt-ad-merdeka-sc2').addService(googletag.pubads());
            
            googletag.defineOutOfPageSlot(oop_dfpBillboard, 'div-gpt-ad-merdeka-billboard-oop').addService(googletag.pubads());
            googletag.defineOutOfPageSlot(oop_dfpBottomFrm, 'div-gpt-ad-merdeka-bottomfrm-oop').addService(googletag.pubads());
            
            if(document.getElementById("dfp-recommend-1")){
                googletag.defineOutOfPageSlot(oop_dfpRecommend1, 'dfp-recommend-1').addService(googletag.pubads());
            } 
            if(document.getElementById("dfp-recommend-2")) {
                googletag.defineOutOfPageSlot(oop_dfpRecommend2, 'dfp-recommend-2').addService(googletag.pubads());
            }
            
            googletag.defineOutOfPageSlot('/36504930/www.merdeka.com/dfp-marcomm1', 'div-gpt-ad-merdeka-marcomm1-oop').addService(googletag.pubads());
            googletag.defineOutOfPageSlot('/36504930/www.merdeka.com/dfp-topfrm', 'div-gpt-ad-merdeka-topfrm-oop').addService(googletag.pubads());
            googletag.defineOutOfPageSlot('/36504930/www.merdeka.com/dfp-pop', 'div-gpt-ad-merdeka-popup-oop').addService(googletag.pubads());
            googletag.defineOutOfPageSlot('/36504930/www.merdeka.com/dfp-skin', 'div-gpt-ad-merdeka-skinad-oop').addService(googletag.pubads());
            googletag.defineOutOfPageSlot('/36504930/www.merdeka.com/dfp-newsTag1', 'div-gpt-ad-merdeka-newsTag1-oop').addService(googletag.pubads());
            googletag.defineOutOfPageSlot('/36504930/www.merdeka.com/dfp-newsTag2', 'div-gpt-ad-merdeka-newsTag2-oop').addService(googletag.pubads());
            googletag.defineOutOfPageSlot('/36504930/www.merdeka.com/dfp-government1', 'div-gpt-ad-merdeka-government1-oop').addService(googletag.pubads());
            googletag.defineOutOfPageSlot('/36504930/www.merdeka.com/dfp-contextual', 'div-gpt-ad-merdeka-desktop-contextual-oop').addService(googletag.pubads());
            
            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                var dfp_slotDelivered = event.isEmpty ? 'none' : 'block'; /* check wheter there is ads or not*/
                var dfp_slotAdUnitID = event.slot.getSlotId().getId(); /* get adunit container id*/
                
                /* START LB AND BILLBOARD RENDERRING */
                var dfp_slotAdUnitPath = event.slot.getSlotId().getAdUnitPath(),
                dfp_slotElementId = event.slot.getSlotId().getDomId(),
                lb_def,
                dfp_lb_keyTargetting = [];

                if (dfp_slotAdUnitPath == oop_dfpBillboard) {
                        if (!event.isEmpty){
                            isBillboardRendered =   1;
                            dfp_lb_keyTargetting = ['direct'];
                            lb_def = googletag.defineSlot('/36504930/www.merdeka.com/dfp-lb', [[970, 90],[728, 90],[970, 250]], 'div-gpt-ad-merdeka-lb').addService(googletag.pubads()).setTargeting("leaderboard_type", dfp_lb_keyTargetting);
                            console.log("billboard filled");              
                        }else{
                            isBillboardRendered =  -1;
                            console.log("billboard empty");
                            lb_def = googletag.defineSlot('/36504930/www.merdeka.com/dfp-lb', [[970, 90],[728, 90],[970, 250]], 'div-gpt-ad-merdeka-lb').addService(googletag.pubads());
                        }
                    googletag.display('div-gpt-ad-merdeka-lb');
                    googletag.pubads().refresh([lb_def]);
                }
                /* END LB AND BILLBOARD RENDERRING */

                /*Hide dfp frame container */
                if(
                    dfp_slotAdUnitPath==oop_dfpRecommend1 || dfp_slotAdUnitPath==oop_dfpRecommend2
                ){
                    document.getElementById("google_ads_iframe_"+dfp_slotAdUnitID) && (document.getElementById("google_ads_iframe_"+dfp_slotAdUnitID).style.display = "none");
                }

                /*check for ads rendering process */
                if (dfp_slotAdUnitPath == oop_dfpBillboard) {
                    if (dfp_slotDelivered == 'block') {
                        isBillboardRendered = 1;
                        document.getElementById("mdk-cover") && document.getElementById("mdk-cover").setAttribute("style", "display: block !important;");
                        document.getElementById("mdk-cover2") && document.getElementById("mdk-cover2").setAttribute("style", "display: none !important;");
                    } else {
                        isBillboardRendered = -1;
                        document.getElementById("mdk-cover") && document.getElementById("mdk-cover").setAttribute("style", "display: none !important;");
                        document.getElementById("mdk-cover2") && document.getElementById("mdk-cover2").setAttribute("style", "display: block !important;");
                    }
                }

                /*Workarround for bottomframe*/
                if (dfp_slotAdUnitPath == oop_dfpBottomFrm) {
                    var mdkBody = document.getElementsByTagName('body')[0];
                    var mdkFooterEl = document.getElementsByClassName('mdk-footerv2')[0];
                    if (!isBFRendered && typeof mdkFooterEl != 'undefined') {
                        mdkBody.style.marginBottom = '50px';
                        isBFRendered = true;
                    }
                }
            });

            /*DEPENDECIES FUNCTIONs*/
            function dfp_getCookieValue(e) {
                var n = document.cookie,
                    t = n.indexOf(" " + e + "=");
                if (-1 == t && (t = n.indexOf(e + "=")), -1 == t) n = null;
                else {
                    t = n.indexOf("=", t) + 1;
                    var i = n.indexOf(";", t); - 1 == i && (i = n.length), n = unescape(n.substring(t, i))
                }
                return n
            }

            function dfp_setCookie(e, n, t, i) {
                n = escape(n);
                var o = extractDomain();
                if ("" == i) {
                    var r = new Date;
                    r.setHours(r.getHours(), r.getMinutes() + 10), i = r.toGMTString()
                }
                "" != t && (t = ";Path=" + t), document.cookie = e + "=" + n + ";expires=" + i + t + ";Domain=" + o
            }

            function extractDomain() {
                var e, n = window.location.href;
                return e = n.indexOf("://") > -1 ? n.split("/")[2] : n.split("/")[0], e = e.split(":")[0]
            }
            
            /* set lfloat appearance */
            function renderLfloat() {
            googletag.defineOutOfPageSlot('/36504930/www.merdeka.com/dfp-lFloating', 'div-gpt-ad-merdeka-lFloating-oop').addService(googletag.pubads());
            googletag.cmd.push(function() {
                    googletag.display('div-gpt-ad-merdeka-lFloating-oop');
                });
            }

            if (iOS){
                if(typeof localStorage['data'] === "undefined"){
                    localStorage['data']=JSON.stringify({dfp_lfloatCookie:1});
                }else{
                    var data=JSON.parse(localStorage['data']);
                    if(data.dfp_lfloatCookie_test==1){
                        localStorage['data']=JSON.stringify({dfp_lfloatCookie:2});
                        renderLfloat();
                    }else if(data.dfp_lfloatCookie_test==2){
                        localStorage['data']=JSON.stringify({dfp_lfloatCookie:3});
                        renderLfloat();
                    }
                }
            }
            else {
                
                var lfloatCookie = dfp_getCookieValue("dfp_lfloatCookie");
                if(parseInt(lfloatCookie) == 0 || lfloatCookie == null) {
                
                dfp_setCookie("dfp_lfloatCookie", 1);
                    
                } else if(parseInt(lfloatCookie) == 1) {
                
                dfp_setCookie("dfp_lfloatCookie", 2);

                renderLfloat();

                } else if(parseInt(lfloatCookie) == 2) {

                dfp_setCookie("dfp_lfloatCookie", 3);  
                
                renderLfloat();    
                }
            } 
            /* End set lfloat appearance */


            /* END custom targeting based on page type */

            /* TAGGED ADS */
            if (is_taggedAds.length > 0) {
                is_taggedAds.push('all');
                googletag.pubads().setTargeting("taggedAds", is_taggedAds);
            }

            /* MATCONT */
            if (isMatcont) {
                googletag.pubads().setTargeting("isMatcont", ["1"]);
            }
            
            /* SET VISITOR ID AS PUBLISHER PROVIDED ID - START*/
            var cVisitorId = (visId = document.cookie.split('liputan6_id_visitor_id=')[1]) ? visId.split(';')[0].replace(/[^a-zA-Z0-9]/ig,'') : 0;
            cVisitorId ? googletag.pubads().setPublisherProvidedId(cVisitorId+'kly') : '';
            /* SET VISITOR ID AS PUBLISHER PROVIDED ID - END*/
            
            googletag.pubads().setTargeting("pageType", kly.pageType);
            googletag.pubads().setTargeting("tags", tagForAds);
            googletag.pubads().setTargeting('ksg', Krux.segments);
            googletag.pubads().setTargeting('kuid', Krux.user);
            googletag.pubads().setCentering(true);
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });

        /*INITIATE ADS CALL*/
        googletag.cmd.push(function() {googletag.display('div-gpt-ad-merdeka-topfrm-oop');});
        googletag.cmd.push(function() {googletag.display('div-gpt-ad-merdeka-billboard-oop');});
        googletag.cmd.push(function() {googletag.display('div-gpt-ad-merdeka-newsTag1-oop');});
        googletag.cmd.push(function() {googletag.display('div-gpt-ad-merdeka-newsTag2-oop');});
        googletag.cmd.push(function() {googletag.display('div-gpt-ad-merdeka-sc1');});
        googletag.cmd.push(function() {googletag.display('div-gpt-ad-merdeka-sc2');});
        googletag.cmd.push(function() {googletag.display('div-gpt-ad-merdeka-government1-oop');});
        googletag.cmd.push(function() {googletag.display('div-gpt-ad-merdeka-marcomm1-oop');});
        googletag.cmd.push(function() {googletag.display('div-gpt-ad-merdeka-popup-oop');});
        googletag.cmd.push(function() {googletag.display('div-gpt-ad-merdeka-skinad-oop');});
        googletag.cmd.push(function() {googletag.display('div-gpt-ad-merdeka-bottomfrm-oop');});
        googletag.cmd.push(function() {googletag.display('div-gpt-ad-merdeka-desktop-contextual-oop');});
        
        if(document.getElementById("dfp-recommend-1")) googletag.cmd.push(function() { googletag.display('dfp-recommend-1'); });
        if(document.getElementById("dfp-recommend-2")) googletag.cmd.push(function() { googletag.display('dfp-recommend-2'); });
        
        /*Put additional script to load showcase on infinite page*/
        var infiniteEl = document.getElementById("body--infinite");
        if(infiniteEl){
                var scDivContainer = document.querySelectorAll("div[id^=div-gpt-ad-merdeka-sc-infinite]"),idx=1;
                if(scDivContainer.length){
                    scDivContainer.forEach(function(val,id){
                        id++;
                        if(!(id%2)){
                            googletag.cmd.push(function() {
                                var infiniteSlot = googletag
                                .defineSlot('/36504930/www.merdeka.com/dfp-sc2', [300, 250], val.id)
                                .addService(googletag.pubads())
                                .setTargeting('position',idx);
                                googletag.display(val.id);
                                googletag.pubads().refresh([infiniteSlot]);
                                idx=idx+1;
                            });
                        }
                    });
                }else{
                    var element = document.querySelector('.body--item'),
                    bodyItemBreak = document.querySelectorAll('.body-item__break'),
                    scContainer = '',
                    div='',
                    elContent = document.querySelectorAll('.body--item'),
                    scindex=1;
                    bodyItemBreak.forEach(function(content,id){
                        if( !(id%2)){
                            googletag.cmd.push(function() {
                                scContainer = "div-gpt-ad-merdeka-sc-infinite-"+scindex;
                                div = document.createElement('div');
                                div.setAttribute('id', scContainer);
                                content.parentNode.insertBefore(div, content);
                                console.log("sc container : ",id,document.querySelector("#"+scContainer));
                                var infiniteSlot = googletag
                                .defineSlot('/36504930/www.merdeka.com/dfp-sc2', [300, 250], scContainer)
                                .addService(googletag.pubads())
                                .setTargeting('position',scindex);
                                googletag.display(scContainer);
                                googletag.pubads().refresh([infiniteSlot]);
                                scindex++;
                            });
                        }
                    });
                }
            /** END DFP CODE **/
        }
        /*Put additional script to load showcase on infinite page*/
}