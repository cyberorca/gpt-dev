
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
                        { precision: 2, min: 0.20, max: 2.99, increment: 0.01 },
                        { precision: 2, min: 3, max: 10, increment: 0.1 },
                    ],
                };

            var gptadslots = [];
            var googletag = googletag || {};
            var pbjs = pbjs || {};
            var PREBID_TIMEOUT = 1000;
            var FAILSAFE_TIMEOUT = 3000;
            var HB_TIMEOUT = 1000;
            var adUnits = [
                {
                    code: "/36504930/m.kapanlagi.com/dfp-sc",
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
                        { bidder: "appnexus", params: { placementId: 14771940, member: "10375" } },
                        { bidder: "gamma", params: { siteId: 1526627763, zoneId: 1529648577 } },
                        { bidder: "teads", params: { pageId: 120640, placementId: 130846 } },
                        { bidder: "emx_digital", params: { tagid: "113617" } },
                        { bidder: "oftmedia", params: { placementId: "18777710" } },
                        { bidder: "rtbhouse", params: { publisherId: "bI2sp5Pt1ubwkv6C9Hs5", region: "prebid-asia" } },
                        { bidder: "adnuntius", params: { auId: "00000000001093e7" } },
                        { bidder: "spotx", params: { channel_id: 285432, ad_unit: "outstream", outstream_function: spotxOutstreamFunc } },
                        { bidder: 'rubicon', params: { accountId: 12534, siteId: 377460, zoneId: 2082390 } },
                        { bidder: 'ix', params: { siteId: '683432' } },
                        { bidder: "innity", params: { zone: 97836, pub: 539 } },
                        { bidder: "pubmatic", params: { publisherId: '156536', adSlot: 'Prebid-Kapanlagi-Mobile-300x250_1', } } 
                    ],
                },
                {
                    code: "/36504930/m.kapanlagi.com/dfp-headline",
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
                        { bidder: "appnexus", params: { placementId: 14771937, member: "10375" } },
                        { bidder: "gamma", params: { siteId: 1526627763, zoneId: 1529648607 } },
                        { bidder: "teads", params: { pageId: 120640, placementId: 130846 } },
                        { bidder: "emx_digital", params: { tagid: "113617" } },
                        { bidder: "oftmedia", params: { placementId: "18777710" } },
                        { bidder: "rtbhouse", params: { publisherId: "bI2sp5Pt1ubwkv6C9Hs5", region: "prebid-asia" } },
                        { bidder: "adnuntius", params: { auId: "00000000001093e8" } },
                        { bidder: "spotx", params: { channel_id: 285432, ad_unit: "outstream", outstream_function: spotxOutstreamFunc } },
                        { bidder: "rubicon", params: { accountId: 12534, siteId: 377460, zoneId: 2082390 } },
                        { bidder: "ix", params: { siteId: "683431" } },
                        { bidder: "innity", params: { zone: 97835, pub: 539 }},
                        { bidder: "pubmatic", params: { publisherId: '156536', adSlot: 'Prebid-Kapanlagi-Mobile-320x50_1', } } 
                    ],
                },
                {
                    code: "/36504930/m.kapanlagi.com/dfp-bottomfrm",
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
                        { bidder: "appnexus", params: { placementId: 14771937, member: "10375" } },
                        { bidder: "gamma", params: { siteId: 1526627763, zoneId: 1526629015 } },
                        { bidder: "teads", params: { pageId: 120640, placementId: 130846 } },
                        { bidder: "emx_digital", params: { tagid: "113617" } },
                        { bidder: "oftmedia", params: { placementId: "18777710" } },
                        { bidder: "rtbhouse", params: { publisherId: "bI2sp5Pt1ubwkv6C9Hs5", region: "prebid-asia" } },
                        { bidder: "adnuntius", params: { auId: "00000000001093eb" } },
                        { bidder: "spotx", params: { channel_id: 285432, ad_unit: "outstream", outstream_function: spotxOutstreamFunc } },
                        {
                            bidder: 'pubmatic',
                            params: {
                                publisherId: '156536',
                                videoAdUnit : '4045181',
                                adSlot: 'kly_prebid_outstream_mobile_kapanlagi',
                                outstreamAU: 'kly_prebid_outstream_mobile_kapanlagi',
                                video: {
                                    skippable: false,
                                    playbackmethod: [2],
                                    context: "outstream",
                                    api: [2, 7],
                                    minduration: 5,
                                    maxduration: 30,
                                    mimes: ["video/mp4", "video/x-ms-wmv", "application/javascript", "video/3gpp", "application/x-mpegURL", "video/quicktime", "video/x-msvideo", "video/x-flv", "video/webm"],
                                    placement: 3
                                }
                            }
                        },
                        { bidder: "innity", params: { zone: 97106, pub: 539 } },
                        { bidder: "rubicon", params: { accountId: 12534, siteId: 377460, zoneId: 2082390 } },
                        { bidder: "ix", params: { siteId: "683433" } }
                    ],
                },
                {
                    code: "/36504930/m.kapanlagi.com/dfp-exposer-slot1",
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
                        { bidder: "appnexus", params: { placementId: 14771938, member: "10375" } },
                        { bidder: "gamma", params: { siteId: 1526627763, zoneId: 1529648373 } },
                        { bidder: "teads", params: { pageId: 120640, placementId: 130846 } },
                        { bidder: "emx_digital", params: { tagid: "113617" } },
                        { bidder: "oftmedia", params: { placementId: "18777710" } },
                        { bidder: "rtbhouse", params: { publisherId: "bI2sp5Pt1ubwkv6C9Hs5", region: "prebid-asia" } },
                        { bidder: "spotx", params: { channel_id: 285432, ad_unit: "outstream", outstream_function: spotxOutstreamFunc } },
                        { bidder: "innity", params: { zone: 97107, pub: 539 } },
                        { bidder: "rubicon", params: { accountId: 12534, siteId: 377460, zoneId: 2082390 } },
                        { bidder: "pubmatic", params: { publisherId: '156536', adSlot: 'Prebid-Kapanlagi-Mobile-300x600' } }
                    ],
                },
            ];
            
            pbjs.que = pbjs.que || [];
            googletag.cmd = googletag.cmd || [];   
            googletag.cmd.push(function () {
                googletag.pubads().disableInitialLoad();
            });

            pbjs.que.push(() => {
                pbjs.setConfig({
                    enableSendAllBids:true,
                    cache: {
                            url: 'https://prebid.adnxs.com/pbc/v1/cache'
                    },
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

            var gpt_gam_ver = 'V14-DK';
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
                window.dataLayer = window.dataLayer || [];
                window.GAMLibrary = {};
                window.GAMLibrary = {
                    dfpSlideup 			: 	'/36504930/m.kapanlagi.com/dfp-slideup',
                    dfpExposer1 		: 	'/36504930/m.kapanlagi.com/dfp-exposer-slot1',
                    dfpExposer2 		: 	'/36504930/m.kapanlagi.com/dfp-exposer-slot2',
                    dfpBottomFrame		: 	'/36504930/m.kapanlagi.com/dfp-bottomfrm',
                    dfpTopframe 		: 	'/36504930/m.kapanlagi.com/dfp-topfrm',
                    dfpHeadline 		: 	'/36504930/m.kapanlagi.com/dfp-headline',
                    scSlot 				: 	'/36504930/m.kapanlagi.com/dfp-sc',
                    topFrameFixedSize   :   1,
                    timedBottomFrm      :  	null,
                    setGamBFInterval    :  	function (active = true) {
                                                if (!active) {
                                                    clearInterval(window.GAMLibrary.gamBFInterval);
                                                    return;
                                                }
                                                window.GAMLibrary.gamBFInterval = setInterval(function () {
                                                    document.querySelector("#dfp-spinads") && document.querySelector("#dfp-spinads").parentElement.remove(); 
                                                    pbjs.setTargetingForGPTAsync([window.GAMLibrary.dfpBottomFrame]);
                                                    googletag.pubads().refresh([window.GAMLibrary.refreshSlot]);
                                                }, 60000);
                                            },
                    documentMeta       :   	function (metaName) {
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
                    scrollBottomFrame   : 	function() {
                                                this.scroll = function(){
                                                                    var scrollNode = document.scrollingElement || document.documentElement;
                                                                    var scrollTop = scrollNode.scrollTop;
                                                                    if (scrollTop >= "200") {
                                                                        // console.log('testing scroll',scrollTop,this.timedBottomFrm);
                                                                        this.timedBottomFrm = googletag.defineSlot(this.dfpBottomFrame, [[320, 50],[320, 100]], 'div-gpt-ad-kapanlagi-bottomfrm').addService(googletag.pubads());
                                                                        window.removeEventListener("scroll", this.scrollHandler);
                                                                        pbjs.setTargetingForGPTAsync([this.dfpBottomFrame]);
                                                                        googletag.pubads().refresh([this.timedBottomFrm]);
            
                                                                        this.refreshSlot = this.timedBottomFrm;
                                                                        this.setGamBFInterval();
                                                                    }
                                                                };
                                                this.scrollHandler = this.scroll.bind(this);
                                                window.addEventListener("scroll", this.scrollHandler);
                                            },
                    initiateSCReadPage	:  function () {
                                                var scContainer = document.querySelectorAll('#div-gpt-ad-kapanlagi-sc'),
                                                idx_scMulti = 1;
                                                scContainer.forEach(function(v,i){
                                                    if(!((i+1) % 2)){
                                                        scId = 'div-gpt-ad-kapanlagi-sc-'+idx_scMulti;
                                                        v.setAttribute('id',scId);
                                                        var sc_adunit=  googletag.defineSlot('/36504930/m.kapanlagi.com/dfp-sc', [[300, 250],[250, 250],[200, 200]], scId).addService(googletag.pubads()).setTargeting("position", [idx_scMulti.toString()]);;
                                                                        googletag.display(scId);
                                                                        pbjs.setTargetingForGPTAsync(['/36504930/m.kapanlagi.com/dfp-sc']);
                                                                        googletag.pubads().refresh([sc_adunit]);
                                                        idx_scMulti++;
                                                    }
                                                });
                                            },
                    generateViewabilityTracker : function(){
                                                    let isFotoGallery = kly && kly.gtm.type.match(/PhotoGallery/ig);
                                                    let vTrackEl = null;
                                                    if( isFotoGallery ){
                                                        vTrackEl = document.createElement('img');
                                                        vTrackEl.setAttribute('src', 'https://pubads.g.doubleclick.net/gampad/clk?id=5255364166&iu=/36504930');
                                                        vTrackEl.setAttribute('width', '0');
                                                        vTrackEl.setAttribute('height', '0');
                                                        vTrackEl.setAttribute('id', 'gam-viewability-tracker-kl-berita-foto');
                                                        vTrackEl.setAttribute('alt', '');
                                                          parent.window.document.body.appendChild(vTrackEl);
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
					lazzyLoadingAdunit 			:   function(){
															document.addEventListener('DOMContentLoaded', function () {
																var generateContextual = 0,
																containerName = 'div-gpt-ad-kapanlagi-mobile-contextual-oop',
																containerEl = document.querySelector("#"+containerName);
                                                                
                                                                if( !containerEl ) return;

																console.log("container : ", containerEl);
																function renderContextual(){
																	let contextualSlot = googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-contextual', containerName).addService(googletag.pubads());
                       												googletag.display(contextualSlot);
																	googletag.pubads().refresh([contextualSlot]);
																}
																function elementInViewport(el) {
																		let rect = el.getBoundingClientRect()
																		return (
																			rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
																		)
																}
																function lazzyLoadScroll(){
																	console.log('CARI ..... ',containerName);
																	if( !generateContextual && elementInViewport(containerEl) ){
																		console.log('GENERATE MGID - VIEWABLE CONTAINER');
																		renderContextual();
																		generateContextual = 1;
																		console.log('GENERATE MGID - REMOVE EVENT SCROLL');
																		window.removeEventListener('scroll',lazzyLoadScroll);
																	}
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
																			if(!generateContextual){
																				console.log('RENDERING CONTEXTUAL!');
																				renderContextual();
																				generateContextual = 1;
																				intersectionObserver.unobserve(containerEl);
																				intersectionObserver.disconnect();
																			}
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

window.createDMPTracker = function(adsCatList, dfpTracker, macro) {
    window.createCDPTracker(adsCatList, macro);
    parent.window.open(dfpTracker, '_blank');
};

window.createCDPTracker = function(cat, macro) {
    var cName = 'liputan6_id_visitor_id=',
        cVisitorId = document.cookie.split(';').find(v => { return v.match(cName);}),
        partnerUID = cVisitorId ? decodeURIComponent(cVisitorId).trim().replace(cName, '') : 0,
        gamMacro = typeof macro === "string" ? JSON.parse(macro) : macro,
        defaultKey = {
            adunitId: "ads_adunit_id",
            advertiserId: "ads_advertiser_id",
            creativeId: "ads_creative_id",
            lineitemId: "ads_lineitem_id",
            orderId: "ads_order_id",
        };

    	actionDetails = Object.keys(gamMacro).reduce((obj, k) => Object.assign(obj, defaultKey[k] ? { [defaultKey[k]]: gamMacro[k] } : { [k]: gamMacro[k] }), {}),
        cdpData = {
            action: actionDetails.action ? actionDetails.action : 'ads_click',
            action_category: cat,
            action_details: actionDetails.action ? (delete actionDetails.action,actionDetails=actionDetails) : actionDetails,
            visitor_id: partnerUID
        };

    console.log("%c DATA CDP : ", "color:#cad315; font-size:12px; font-weight: bold; -webkit-text-stroke: 1px black;", cdpData);
    console.log("%c PARTNER USER ID : ", "color:#cad315; font-size:12px; font-weight: bold; -webkit-text-stroke: 1px black;", partnerUID);

    partnerUID ? window.VidioPersonalization.sendData(null, cdpData) : '';
};
                
                /*LOAD CONTEXTUAL ON DOM READY*/
				GAMLibrary.lazzyLoadingAdunit();
                
                var isReadPage = kly.pageType === "ReadPage";
            
                googletag.cmd.push(function() {
                    var urlPath = document.URL;
                    var _klyObject = typeof window.kly !== 'undefined' ? window.kly : window.kmklabs;
                    var _articlePages = _klyObject && _klyObject.article;
                    var _isAdultContent = _articlePages && _articlePages.isAdultContent;
                    var isMatcont = "0";
					var isViolateBrandSafety = "0";
                    var dfp_brandSafety = new Array('matcont', 'aduhai', 'kelamin', 'vital', 'anal', 'belahan', 'bercinta', 'bergairah', 'gairah', 'intim', 'bikini', 'bokong', 'boob', 'bra', 'bugil', 'celana', 'ciuman', 'cleavage', 'dada', 'dewasa', 'diremas', 'doggie', 'ejakulasi', 'ereksi', 'erotis', 'foreplay', 'kiss', 'seks', 'gangbang', 'horny', 'hot', 'kamasutra', 'keperawanan', 'perawan', 'kondom', 'kontrasepsi', 'libido', 'lingerie', 'masturbasi', 'mature', 'menggairahkan', 'menggoda', 'mesra', 'miss-v', 'mr-p', 'nakal', 'naughty', 'nipple', 'nipples', 'onani', 'oral', 'oral seks', 'organ', 'orgasme', 'paha', 'pantat', 'panties', 'payudara', 'pelecehan', 'telanjang', 'penetrasi', 'penis', 'perkosa', 'perkosaan', 'pole', 'porno', 'pornoaksi', 'pornografi', 'telentang', 'provokatif', 'putting', 'ranjang', 'sex', 'penetratif', 'seksi', 'seksual', 'sensual', 'seronok', 'doll', 'toys', 'skandal', 'sperma', 'striptease', 'striptis', 'syur', 'terangsang', 'tiduri', 'topless', 'vagina', 'vibrator', 'lendir', 'prostitusi', 'homoseks', 'meraba-raba', 'mesum', 'memerkosa', 'rudapaksa', 'kemaluan', 'kasus asusila', 'pemerkosaan', 'hubungan seksual', 'hubungan intim', 'video porno', 'berita hoax', 'ternyata hoax', 'ahed tamimi', 'konflik palestina israel', 'konflik suriah', 'ujaran kebencian', 'g30s', 'kediktatoran arab saudi', 'konflik palestina-israel', 'fpi', 'penembakan', 'pelecehan seksual', 'tips seks', 'komunitas swinger', 'fenomena kelainan seksual', 'penyimpangan seks', 'posisi seks', 'obat kuat', 'bentuk payudara', 'implan payudara', 'chat firza-rizieq', 'anarkisme suporter sepakbola', 'bentrok suporter', 'pengeroyokan', 'penganiayaan', 'begal motor', 'kekerasan pada wartawan', 'pemerkosaan anak', 'pencabulan', 'bentrokan warga', 'bentrokan', 'kasus narkoba', 'akibat merokok', 'bahaya merokok', 'berhenti merokok', 'cara berhenti merokok', 'efek berhenti merokok', 'larangan merokok', 'tips berhenti merokok', 'rokok elektrik', 'pilpres 2019', 'koalisi pilpres 2019', 'koalisi prabowo', 'koalisi jokowi', 'prabowo-sandiaga', 'ratna sarumpaet', 'capres jokowi', 'capres prabowo', 'kebohongan ratna sarumpaet', 'prabowo subianto', 'jemaah ansharut daulah', 'aliran sesat', 'lia eden', 'kisah mualaf', 'penistaan agama', 'suporter tewas', 'gempa palu', 'gempa donggala', 'gempa sulawesi tengah', 'pembunuhan', 'tsunami palu', 'penemuan mayat', 'lion air jatuh di karawang', 'lion air jatuh', 'pembunuhan sadis', 'lion air hilang kontak', 'pesawat jatuh', 'pesawat hilang kontak', 'kecelakaan', 'kapal tenggelam di danau toba', 'kecelakaan bus', 'kapal tenggelam', 'kasus tabrak lari', 'bunuh diri', 'perselingkuhan', 'kisah perselingkuhan', 'razia pasangan mesum', 'seks bebas', 'gangguan jiwa', 'tes keperawanan', 'kontroversi hukuman mati', 'stres dan depresi', 'ahok gugat cerai veronica tan', 'Kanker', 'Impotensi', 'merokok', 'Perokok', 'Rokok', 'tembakau', 'Pelanggaran', 'Tablet', 'Overdosis', 'Jantung', 'Stroke', 'Cancer', 'Narkoba', 'Djarum', 'Ganja', 'BNN', 'Obesitas', 'Osteoporosis', 'Corona', 'Corona di indonesia', 'virus corona', 'virus-corona', 'covid-19', 'wabah corona', 'menewaskan', 'menewaskan orang', 'mengancam nyawa', 'meninggal', 'meninggal dunia', 'orang mati', 'orang tewas', 'pemakaman', 'petugas penyelamat', 'telah meninggal', 'terbunuh', 'tewas', 'tewaskan', 'tim penyelamat', 'wanita meninggal', 'autopsi', 'belasungkawa', 'bencana', 'bencana besar', 'bunuh orang', 'darurat bencana', 'dilaporkan tewas', 'dimakamkan', 'dipastikan tewas', 'ditemukan mati', 'ditemukan tewas', 'hilangnya nyawa', 'identitas korban', 'inalillahi', 'jasad korban', 'jasadnya', 'jenasah wanita', 'jenazah', 'jenazah pria', 'jenazah teridentifikasi', 'jasad', 'kehilangan hidupnya', 'kehilangan nyawa', 'kehilangan nyawanya', 'kematian', 'korban', 'korban jiwa', 'korban meninggal', 'korban tewas', 'mati', 'mayat', 'mayat korban', 'membunuh', 'membunuh istrinya', 'membunuh mereka', 'membunuh suaminya', 'menemui ajal', 'mengalami koma', 'menghembuskan nafas terakhir', 'menimbulkan korban', 'meninggal akibat sakit', 'menyebabkan kematian', 'meregang nyawa', 'meregggut nyawa', 'modar', 'nyawa hilang', 'nyawa melayang', 'penyebab kematian', 'tak bernyawa', 'tak sadarkan diri', 'terkapar', 'tidak bernyawa', 'tutup usia', 'wafat', 'kematian virus', 'kematian wabah', 'korban terinfeksi', 'virus menyerang', 'merenggut nyawa', 'pelayat', 'hilangkan nyawa', 'renggut nyawa', 'wabah', 'keadaan kritis', 'kehilangan darah', 'merenggut jiwa', 'telan nyawa', 'menelan nyawa', 'memakan nyawa', 'dinyatakan meninggal', 'nyawa tak tertolong', 'penyakit', 'sakit pernapasan', 'sesak', 'korona', 'corona', 'odp', 'pdp', 'virus', 'rumah sakit', 'Covid-19', 'virus korona', 'positif korona', 'COVID-19', 'terjangkit COVID-19', 'terinfeksi virus corona', '15lam','agen poker','agen sbobet','al quran','al-quran','alat kontrasepsi','alat vital pria','alergi','anatomi vagina','anjeng','anjing','anjlng','anjrit','anying','apa itu kondom','artis indonesia bugil','artis porno','asu','babi','bahaya masturbasi','bajingan','bandar ceme','bangsat','bego','bentuk payudara','bercinta','bercinta saat hamil','berhubungan intim','berita jateng','bintang film porno','bintang porno','bitch','bocah sd foto mesum','bokne','bom surabaya 2018','boneka seks','bonus deposit','bonus refferal','bonus rollingan','buda','budha','bullshit','bulshit','bulu kemaluan','cara berhubungan intim','cara membuat suami bergairah','cara memperbesar penis','cara mengatasi ejakulasi dini','cara seksual','cashtree','corona','corona di indonesia','covid 19','covid-19','cukur bulu kemaluan','disfungsi ereksi','ejakulasi','ejakulasi dini','ejakulasi wanita','elo','entot','ereksi','ewe','fase menstruasi','fenomena kelainan seksual','foto berhubungan intim','foto intim','fuck','gairah seksual','gangguan seks','ganja','gay','gaya bercinta','gaya bercinta dalam islam','gaya bercinta yang disukai pria','gaya seks','gejala penyakit','gemar368','goblok','gue','gwe','henceut','hindu','hubungan intim','hubungan seksual','ibu hamil','implan payudara','industri film porno','infeksi saluran kencing','injil','insomnia dan tidur','intim','isl4m','islam','itil','jancok','jancuk','jenis alat kontrasepsi','jerawat','jual beli sperma','judi','kafir','kakek cabul','kanibal','kanibalisme','kanker payudara','katolik','kecanduan seks','kemaluan wanita','kencing','kesehatan kulit dan kelamin','kesehatan payudara','kesehatan reproduksi','kesehatan wanita','khusus deewasa','kimpet','klitoris','kondom','kondom pria','kontol','kontolnya','kontrasepsi','kontroversi lgbt','kristen','legalisasi ganja','lgbt','lonte','m3m3k','makanan berbahaya','makanan sehat','masa subur pria','masturbasi','meki','melakukan hubungan intim','memek','mencukur bulu kemaluan','menstruasi','minimal deposit','model hot','model seksi','monyet','mucikari siswi smp','muh4mmad','muhammad','muhammad saw','nabi','ngentot','ngewe','nonok','obat ejakulasi dini','obat pembesar','obat pembesar penis terbaik','oral seks','organ intim wanita','orgasme','orgasme wanita','pakistan','payudara kecil','payudara wanita','pelacur','pembesar penis','pemerkosaan','pengetahuan seks','pengobatan alternatif','penis','penis','penis bengkok','penis besar','penis kecil','penis pria','penyakit sipilis','penyakit vagina','penyimpangan seks','perang dunia','perawatan vagina','perek','poker','poker online','pornoaksi','pornografi','posisi bercinta','posisi hubungan intim suami istri menurut islam','posisi seks','posisi seksual','pria dewasa','pria idaman','prostitusi','puki','puting','puting payudara','rasisme','rokok elektrik','sbobet','seks','seks bebas','seks oral','seksual','seksual lelaki dan perempuan','seksualitas','sex toy','shit','siklus menstruasi','situs poker terpercaya','situs porno','sperma','tai','taik','taruhan online','telanjang','terorisme','test pack','testis','tips bercinta','tips seks','titit','toket','tolol','ukuran normal penis','ukuran penis','ukuran penis normal','ukuran penis orang indonesia','vagina','vagina gatal','vagina wanita','vakum pembesar penis','viagra','video bercinta dengan pasangan','video porno','video seks','virus corona','xxxx online','yesus');/* POPULATE META DATA KEYWORDS */
                    var dfp_pageTitle = _articlePages && _articlePages.title.klyFiltering(' ');
                    var dfp_titles = (typeof dfp_pageTitle !== 'undefined' && dfp_pageTitle.length > 0 ) ? dfp_pageTitle: [];
                    var dfp_pageKeywords = GAMLibrary.documentMeta("keywords");
                    var dfp_keyword = dfp_pageKeywords.klyFiltering(",");
                    /* POPULATE META DATA DESC */
                    var dfp_pageDesc = GAMLibrary.documentMeta("description");
                    var dfp_desc = dfp_pageDesc.klyFiltering(",");
                    var tagForAds = _klyObject.gtm.tag.replace(/[^A-Za-z0-9|\- ]/ig,"").klyFiltering("|");
                    var dfp_keywords = dfp_keyword.concat(dfp_titles, dfp_desc, tagForAds).filter(item=>item!==undefined);
                    var isMultipage = window.kly.article["isMultipage"].toString();
                    
					/*MATURE CONTENT DEFINED VAR*/
                    isViolateBrandSafety = dfp_brandSafety.some((word)=>{
						let regWord = new RegExp("(" + word + ")","ig");
						return dfp_keywords.some((keyword)=>{
							return keyword.match(regWord);
						})
					}) ? "1" : "0";
					
					isMatcont = (_isAdultContent || isViolateBrandSafety === "1") ? "1" : "0";

                    /*DEFINE ALL SLOT*/
                    googletag.defineSlot(GAMLibrary.dfpHeadline, [
                        [320, 50],
                        [320, 100]
                    ], 'div-gpt-ad-kapanlagi-hl').addService(googletag.pubads());
                    googletag.defineSlot(GAMLibrary.scSlot, [
                        [300, 250],
                        [250, 250],
                        [200, 200]
                    ], 'div-gpt-ad-kapanlagi-sc').addService(googletag.pubads());
                    googletag.defineSlot(GAMLibrary.dfpExposer1, [
                        [300, 250],
                        [300, 600],
                        [320, 480],
                        [160, 600],
                        [250, 250]
                    ], 'div-gpt-ad-kapanlagi-dfp-exposer-slot1-oop').addService(googletag.pubads());
                    
                    //(document.querySelector('#div-gpt-ad-kapanlagi-sc-2')) ? googletag.defineSlot(GAMLibrary.scSlot, [[300, 250],[250, 250],[200, 200]], 'div-gpt-ad-kapanlagi-sc-2').addService(googletag.pubads()) : '';
                    //googletag.defineSlot(GAMLibrary.scSlot, [[300, 250],[250, 250],[200, 200]], 'div-gpt-ad-kapanlagi-sc-3').addService(googletag.pubads());
                    
                    if(GAMLibrary.topFrameFixedSize){
                        googletag.defineSlot(GAMLibrary.dfpTopframe, [1, 1], 'div-gpt-ad-kapanlagi-topfrm-oop').addService(googletag.pubads());
                    }else{
                        googletag.defineOutOfPageSlot(GAMLibrary.dfpTopframe, 'div-gpt-ad-kapanlagi-topfrm-oop').addService(googletag.pubads());
                    }
                    
                    /*OUT OF PAGE SLOTS*/
                    googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-recommend-slot-2', 'div-gpt-ad-kapanlagi-recommend-slot-2-oop').addService(googletag.pubads());
                    googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-recommend-slot-3', 'div-gpt-ad-kapanlagi-recommend-slot-3-oop').addService(googletag.pubads());
                    googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-recommend-slot-9', 'div-gpt-ad-kapanlagi-recommend-slot-9-oop').addService(googletag.pubads());
                    googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-newsTag1', 'div-gpt-ad-kapanlagi-dfp-newsTag1-oop').addService(googletag.pubads());
                    googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-newsTag2', 'div-gpt-ad-kapanlagi-dfp-newsTag2-oop').addService(googletag.pubads());
                    googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-visual-story-1', 'div-gpt-ad-kapanlagi-visual-story-1-oop').addService(googletag.pubads());
                    googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-visual-story-2', 'div-gpt-ad-kapanlagi-visual-story-2-oop').addService(googletag.pubads());
                    googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-visual-story-3', 'div-gpt-ad-kapanlagi-visual-story-3-oop').addService(googletag.pubads());
                    googletag.defineOutOfPageSlot(GAMLibrary.dfpExposer2, 'div-gpt-ad-kapanlagi-dfp-exposer-slot2-oop').addService(googletag.pubads());
                    googletag.defineOutOfPageSlot(GAMLibrary.dfpSlideup, 'div-gpt-ad-dfp-overlay-oop').addService(googletag.pubads());
            
                    googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-crm-headline', 'div-gpt-ad-kapanlagi-crm-headline-oop').addService(googletag.pubads());
                    googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-crm-1', 'div-gpt-ad-kapanlagi-crm1-oop').addService(googletag.pubads());
                    googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-crm-2', 'div-gpt-ad-kapanlagi-crm2-oop').addService(googletag.pubads());
                    googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-crm-3', 'div-gpt-ad-kapanlagi-crm3-oop').addService(googletag.pubads());
                  
                    if (isReadPage) {
                        googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-insertion', 'div-gpt-ad-kapanlagi-insertion-oop').addService(googletag.pubads());
                        // googletag.defineOutOfPageSlot('/36504930/m.kapanlagi.com/dfp-contextual', 'div-gpt-ad-kapanlagi-mobile-contextual-oop').addService(googletag.pubads());
                    }
            
                    /*Bottom Frame Scrolling*/
                    GAMLibrary.scrollBottomFrame();
                    /*Bottom Frame Scrolling*/
                    googletag.pubads().addEventListener('slotResponseReceived', function(event) {
                        var dfp_slotDelivered = event.slot.getResponseInformation() ? 'block' : 'none'; /* check wheter there is ads or not*/
                        var dfp_slotAdUnitPath = event.slot.getSlotId().getAdUnitPath(); /* get adunit path */
            
                        /*check if native ads creative was delivered*/
                        if (dfp_slotDelivered == 'block') {
                            
                            /* tracking impression */
                            GAMLibrary.eventTrackingImpression(kly.gtm.subCategory,dfp_slotAdUnitPath);
                        
                            if (dfp_slotAdUnitPath == GAMLibrary.dfpHeadline) {
                                var urlParams = new URLSearchParams(window.location.search);
                                var myParam = JSON.parse(urlParams.get('interval'));
                                headlineSticky(myParam);
                            }
                        } else {
                            var dfp_slotElementId = event.slot.getSlotId().getDomId();
                            if (dfp_slotElementId.match(/newsTag|recommend/)) {
                                if (document.getElementById(dfp_slotElementId) && document.getElementById(dfp_slotElementId).getElementsByTagName('iframe')[0] && document.getElementById(dfp_slotElementId).getElementsByTagName('iframe')[0].getAttribute('height') == 1) {
                                    document.getElementById(dfp_slotElementId).getElementsByTagName('iframe')[0].style.display = "none";
                                }
            
                            }
                              
                            if (dfp_slotElementId.match(/crm\d/)) {
                              (crmEl = document.querySelector("#"+dfp_slotElementId)) ? (crmEl.parentElement.style.display = "none") : '';
                            }
                        }
                    });
            
                    /*INITIATE ADS ON CONTINOUS PAGE */
                    GAMLibrary.initiateSCReadPage();
                    GAMLibrary.generateViewabilityTracker();
                  
					/*  START TARGETING BLOCK   */
					googletag.pubads().setTargeting("isMatcont", isMatcont);
					googletag.pubads().setTargeting("brandsafety", isViolateBrandSafety);
                    
                    if(typeof Krux !== "undefined"){
                        googletag.pubads().setTargeting('ksg', Krux.segments);
                        googletag.pubads().setTargeting('kuid', Krux.user);
                    }

                    googletag.pubads().setTargeting("tags",dfp_keywords);
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
                    /* SET VISITOR ID AS PUBLISHER PROVIDED ID - START*/
                    var cVisitorId = (visId = document.cookie.split('liputan6_id_visitor_id=')[1]) ? visId.split(';')[0].replace(/[^a-zA-Z0-9]/ig,'') : 0;
                    cVisitorId ? googletag.pubads().setPublisherProvidedId(cVisitorId+'kly') : '';
                    /* SET VISITOR ID AS PUBLISHER PROVIDED ID - END*/                    
                    googletag.pubads().setCentering(true);
                    googletag.pubads().enableSingleRequest();      
                    googletag.enableServices();
            
                });

                    if (isReadPage) {
                        googletag.cmd.push(function() {
                            googletag.display('div-gpt-ad-kapanlagi-insertion-oop');
                        });
                    }
            
                    var gptMKapanlagiStyle = document.createElement('style');
                    gptMKapanlagiStyle.textContent = '.div-gpt-ad-kapanlagi-sc-continous{margin-bottom:30px}';
                    
                    window.onload = function() { document.body.appendChild(gptMKapanlagiStyle);};
            
                    /* ===== HEADLINESTICKY METHOD - DEFAULT 3s ===== */
                    var headlineStickyInterval=3,headlineStickyStatus=!1;function headlineSticky(t){null!=t&&(headlineStickyInterval=t),console.log(headlineStickyInterval);var e=document.getElementById("div-gpt-ad-kapanlagi-hl"),n=document.createElement("div");n.setAttribute("id","div-gpt-ad-kapanlagi-hl-shadow"),e.parentElement.insertBefore(n,e),injectStickyStyleAndAnimation(),window.addEventListener("scroll",headlineStickyScrollEevent)}function headlineStickyScrollEevent(){var t=document.getElementById("div-gpt-ad-kapanlagi-hl"),e=document.getElementById("div-gpt-ad-kapanlagi-hl-shadow").getBoundingClientRect().top;document.querySelector(".layout__nav-content"),document.documentElement.scrollTop||document.body.scrollTop;headlineStickyStatus?e<=0||(window.removeEventListener("scroll",headlineStickyScrollEevent),removeStickyHeadline(t,!1)):e<=0&&(t.classList.add("hl-active-sticky"),t.style="",removeStickyHeadline(t,!0),headlineStickyStatus=!0)}function removeStickyHeadline(t,e){var n=setInterval(function(){headlineStickyInterval<=0?(t.classList.remove("hl-active-sticky"),t.classList.remove("hl-navbar-hanging"),t.style.margin="10px 0",clearInterval(n),window.removeEventListener("scroll",headlineStickyScrollEevent)):headlineStickyInterval--},1e3);e||(clearInterval(n),t.classList.remove("hl-active-sticky"),t.classList.remove("hl-navbar-hanging"),t.style.margin="10px 0")}function injectStickyStyleAndAnimation(){var t=document.createElement("style");t.textContent="\n\t\t.hl-active-sticky {\n\t\t\tposition: fixed;\n\t\t\ttop: -100%;\n\t\t\tz-index: 9999;\n\t\t\tleft: 50%;\n\t\t\ttransform: translateX(-50%);\n\t\t\tmargin: 0;\n\t\t\ttransition : margin-top .5s ease;\n\t\t\tanimation: hlSlideDown .5s forwards;\n\t\t}\n\n\t\t.hl-navbar-hanging{\n\t\t\tmargin-top : 50px !important;\n\t\t}\n\n\t\t@keyframes hlSlideDown{\n\t\t\t0%{top : -100px;}\n\t\t\t100%{top : 0px;}\n\t\t}\n\t\t",document.head.appendChild(t)}
                    /* ===== HEADLINESTICKY METHOD ===== */