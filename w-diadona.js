var gpt_gam_ver = 'v10-DK';
[%signature%]
[%klyfiltering%]

    var PWT={}; //Initialize Namespace
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    var gptRan = false;
    PWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT
        loadGPT();
    };
    var loadGPT = function() {
        // Check the gptRan flag
        if (!gptRan) {
            gptRan = true;
            var gads = document.createElement('script');
            var rads = document.createElement('script'); // #1
            var useSSL = 'https:' == document.location.protocol;
            gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
            rads.src = (useSSL ? 'https:' : 'http:') + '//adserver.kl-youniverse.com/asyncjs.php'; // #2
            gads.async = true; 
            rads.async = true; // #3
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
            node.parentNode.insertBefore(rads, node); // #4
        }
    };
    // Failsafe to call gpt
    setTimeout(loadGPT, 500);

    (function() {
        var purl = window.location.href;
        var url = '//ads.pubmatic.com/AdServer/js/pwt/156536/456';
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


        PWT.HookForPrebidRequestBids = function (adUnits) {
            //console.log('HookForPrebidRequestBids: Original adUnits array :', adUnits);
            adUnits.forEach(function (au) {
                //console.log('HookForPrebidRequestBids: adding kadfloor to pubmatic');
                au.bids.forEach(function (bid) {
                    //if(bid.bidder == 'pubmatic') {
                    //bid.params.wiid='hooksimpression';}
                    if (bid.bidder == 'spotx') {
                        var s_page_url = window.top!=window.parent?document.referrer:window.location.href
                            bid.params["custom"] = {"page_url": s_page_url};
                            bid.params["outstream_function"] = function (bid) {
                            //console.dir(bid);
                            //const videoDiv = bid.adUnitCode;
                            const videoDiv = bid.adUnitCode.split('@')[0];
                            const playerWidth = 300;
                            const playerHeight = 250;
                            //window.console.log("[SPOTX][renderer] Handle SpotX custom outstream renderer");
                            let script = window.document.createElement("script");
                            script.type = "text/javascript";
                            script.src = "//cdn.spotxcdn.com/website/integration_test/media/asia/EASIv2.js";
                            script.setAttribute("data-spotx_channel_id","" + bid.channel_id);
                            script.setAttribute("data-spotx_vast_url", "" + bid.vastUrl);
                            script.setAttribute("data-spotx_content_width", playerWidth);
                            script.setAttribute("data-spotx_content_height",playerHeight);
                            script.setAttribute("data-spotx_content_page_url",bid.renderer.config.content_page_url);
                            script.setAttribute("data-spotx_ad_unit", "incontent");
                            script.setAttribute("data-spotx_autoplay", "1");
                            script.setAttribute("data-spotx_continue_out_of_view", "1");
                            script.setAttribute("data-spotx_content_container_id",videoDiv);
                            var vid_contain = window.document.getElementById(videoDiv);
                            vid_contain.style.cssText = "display: none; margin-bottom: 20px";
                            vid_contain.appendChild(script);
                        }
                    }
                })
            })
        };
    })();
/* END - LOAD PUBMATIC, REVIVE, GOOGLE ADS */
	/** End Google GPT Code **/

	[%DMP_List%]
	var blackListWords = [%Black_List_Word%],
        urlPath = document.URL,
		urlArray = urlPath.split("/"),
		dfp_Channel = window.location.host,
		alowedPath = new Array("family", "relationship", "health", "food", "travel", "beauty", "d-stories", "photo"),
		urlSlot = "",
		nLevel = 1,
		isMatcont = !1,
		dfp_Article = urlArray[urlArray.length - 1];
        var userAgent = navigator.userAgent.toLowerCase();
        const GAMisTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
    
    function arrToLowerCase(arr){
        return arr.map(function(v,i){
            return v.toLowerCase();
        });
    }

	function inArray(needle, haystack) {
		var length = haystack.length;
		for (var i = 0; i < length; i++) {
			if (haystack[i] == needle) return true;
		}
		return false;
	}

	function document_meta(a) {
		var e = "",
			o = document.getElementsByTagName("meta");
		if (o)
			for (var t = 0, g = o.length; t < g; t++) o[t].name.toLowerCase() == a && (e += o[t].content);
		return "" != e ? e : ""
	}

	function document_keywords() {
		var keywords = '';
		var metas = document.getElementsByTagName('meta');
		if (metas) {
			for (var x = 0, y = metas.length; x < y; x++) {
				if (metas[x].name.toLowerCase() == "keywords") {
					keywords += metas[x].content;
				}
			}
		}
		return keywords != '' ? keywords : '';
	}

	urlArray.forEach(function(sPath) {
		if (inArray(sPath, alowedPath) && nLevel <= 1) {
			urlSlot += sPath + '/';
			nLevel++;
		}
	});

	var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

	/*INIT HEIGHT TOPFRAME AND BILLBOARD*/
	var drmTopFrm = document.getElementById('div-gpt-ad-diadona-topfrm-oop');
	var drmBill = document.getElementById('div-gpt-ad-diadona-billboard-oop');
	if (drmTopFrm != null) drmTopFrm.style.height = '0px';
	if (drmBill != null) drmBill.style.height = '0px';

	/*MATURE CONTENT DEFINED VAR*/
	if (!blackListWords) {
		var blackListWords = new Array('matcont');
    }
    
    blackListWords = arrToLowerCase(blackListWords);

	var elImmersiveContainer = document.createElement('div');
	elImmersiveContainer.setAttribute('id', 'div-gpt-ad-diadona-immersive-oop');
	if (document.body.appendChild(elImmersiveContainer)) {
		googletag.cmd.push(function() {

			var oop_dfpBillboard = '/36504930/www.diadona.id/dfp-billboard',
				oop_dfpTopfrm = '/36504930/www.diadona.id/dfp-topfrm',
				oop_dfpMarcomm1 = '/36504930/www.diadona.id/dfp-marcomm1',
				oop_dfpBottomFrm = '/36504930/www.diadona.id/dfp-bottomfrm',
				oop_gamImmersive = '/36504930/www.diadona.id/dfp-immersive',
				/* DEFINE IMMERSIVE TAG - DO NOT CHANGE THE SLOT ORDER, IMMERSIVE ALWAYS ON THE 1st POSITION - */
				gam_immersive = googletag.defineOutOfPageSlot(oop_gamImmersive, 'div-gpt-ad-diadona-immersive-oop').addService(googletag.pubads()),
				dfp_pageTitle = urlArray[urlArray.length - 1],
				dfp_titles = dfp_pageTitle.klyFiltering("-"),
				dfp_pageKeywords = document_keywords(),
				dfp_keyword = dfp_pageKeywords.klyFiltering(","),
				dfp_pageDesc = document_meta("description"),
				dfp_desc = dfp_pageDesc.klyFiltering(","),
				pageType = "FrontPage",
				dfp_Rubric = dfp_Channel + " - " + (urlSlot == "" ? "homepage" : urlSlot.replace('/', '')),
				tagForAds = (typeof window.kly !== 'undefined') ? kly.gtm.tag.klyFiltering("|") : [],
				dfp_keywords = dfp_keyword.concat(dfp_titles, dfp_desc, tagForAds);

			if (dfp_Article.length > 0) {
				pageType = "ReadPage";
			} else {
				pageType = (urlSlot == "") ? "FrontPage" : "ChannelPage";
			}

			dfp_keywords.forEach(function(sKeyword) {
				tagForAds.push(sKeyword);
				if (inArray(sKeyword.trim(), blackListWords)) {
					isMatcont = true;
				}
			});

			googletag.defineSlot('/36504930/www.diadona.id/dfp-lb', [
				[970, 90],
				[728, 90],
				[970, 250]
			], 'div-gpt-ad-diadona-lb').addService(googletag.pubads()).setTargeting("leaderboard_type", ["direct"]);
			googletag.defineSlot('/36504930/www.diadona.id/dfp-sc1', [
				[300, 600],
				[300, 250],
				[160, 600]
			], 'div-gpt-ad-diadona-sc1').addService(googletag.pubads());
			googletag.defineSlot('/36504930/www.diadona.id/dfp-sc2', [
				[300, 250],
				[250, 250]
			], 'div-gpt-ad-diadona-sc2').addService(googletag.pubads());

			googletag.defineOutOfPageSlot(oop_dfpMarcomm1, 'div-gpt-ad-diadona-marcomm1-oop').addService(googletag.pubads());
			googletag.defineOutOfPageSlot('/36504930/www.diadona.id/dfp-pop', 'div-gpt-ad-diadona-popup-oop').addService(googletag.pubads());
			googletag.defineOutOfPageSlot('/36504930/www.diadona.id/dfp-newsTag1', 'div-gpt-ad-diadona-newsTag1-oop').addService(googletag.pubads());
			googletag.defineOutOfPageSlot('/36504930/www.diadona.id/dfp-newsTag2', 'div-gpt-ad-diadona-newsTag2-oop').addService(googletag.pubads());


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

			googletag.pubads().addEventListener("slotRenderEnded", function(g) {
				if (g.slot == gam_immersive) {
					if (g.isEmpty) {
						gam_billboard = googletag.defineOutOfPageSlot(oop_dfpBillboard, 'div-gpt-ad-diadona-billboard-oop').addService(googletag.pubads());
						gam_topfrm = googletag.defineOutOfPageSlot(oop_dfpTopfrm, 'div-gpt-ad-diadona-topfrm-oop').addService(googletag.pubads());
                      	gam_bottomfrm = googletag.defineSlot(oop_dfpBottomFrm, [468, 60], 'div-gpt-ad-diadona-bottomfrm-oop').addService(googletag.pubads());
                        
                        googletag.cmd.push(function() {googletag.display("div-gpt-ad-diadona-billboard-oop")});
                        googletag.cmd.push(function() {googletag.display("div-gpt-ad-diadona-topfrm-oop")});
                        googletag.cmd.push(function() {googletag.display("div-gpt-ad-diadona-bottomfrm-oop")});

                        if(!GAMisTablet){
                            var gam_skinad = googletag.defineOutOfPageSlot('/36504930/www.diadona.id/dfp-skin', 'div-gpt-ad-diadona-skinad-oop').addService(googletag.pubads());
                            googletag.cmd.push(function() {googletag.display("div-gpt-ad-diadona-skinad-oop")});
                            googletag.pubads().refresh([gam_billboard, gam_topfrm, gam_bottomfrm, gam_skinad]);
                        }else{
                            googletag.pubads().refresh([gam_billboard, gam_topfrm, gam_bottomfrm]);
                        }
					}
				}
			});

			/*initiate sc in readpage*/
			initiate_sc_readPage();

			/*initiate sc in readpage Desktop*/
			function initiate_sc_readPage() {
				var scContainer = '.paging-showcase',
					parentElement = document.querySelector('.detail'),
					arrShowcaseContainer = document.querySelectorAll(scContainer),
					sumShowcaseContainer = document.querySelectorAll(scContainer).length;
				showcaseId = 'div-gpt-ads-dream-showcase-',
					gam_sc = null,
					countShowcaseContainer = 0,
					mo = null;

				arrShowcaseContainer.forEach(function(value, key) {
					value.setAttribute('id', showcaseId + (key + 1));
				});

				mo = new MutationObserver(function(mutations) {
					mutations.forEach(function(el) {
						var target = el.target,
							isShown = target.getAttribute('data-pushed'),
							container;
						if (isShown && el.attributeName === 'data-pushed') {
							countShowcaseContainer++;

							gam_sc = googletag.defineSlot('/36504930/www.diadona.id/dfp-sc2', [[300, 250],[250, 250]], showcaseId + countShowcaseContainer).addService(googletag.pubads());
							googletag.display(showcaseId + countShowcaseContainer);
							googletag.pubads().refresh([gam_sc]);

							if (countShowcaseContainer === sumShowcaseContainer) {
								mo.disconnect();
							}
						}
					});
				});

				parentElement && mo.observe(parentElement, {
					childList: true,
					attributes: true,
					subtree: true,
				});

			}

			/* set lfloat appearance */
			function renderLfloat() {
				googletag.defineOutOfPageSlot("/36504930/www.diadona.id/dfp-lFloating", "div-gpt-ad-diadona-lFloating-oop").addService(googletag.pubads());
				googletag.cmd.push(function() {googletag.display("div-gpt-ad-diadona-lFloating-oop")});
			}

			var lfloatCookie = dfp_getCookieValue("dfp_lfloatCookie");
			if (parseInt(lfloatCookie) == 0 || lfloatCookie == null) {
				dfp_setCookie("dfp_lfloatCookie", 1);
			} else if (parseInt(lfloatCookie) == 1) {
				dfp_setCookie("dfp_lfloatCookie", 2);
				renderLfloat();
			} else if (parseInt(lfloatCookie) == 2) {
				dfp_setCookie("dfp_lfloatCookie", 3);
				renderLfloat();
			}
			/* End set lfloat appearance */

			if (isMatcont) {
				googletag.pubads().setTargeting("isMatcont", ["1"]);
			}

			googletag.pubads().setTargeting("currentUrl", urlPath);
			googletag.pubads().setTargeting("domain", dfp_Channel);
			googletag.pubads().setTargeting("tags", tagForAds);
			googletag.pubads().setTargeting("rubric", [dfp_Rubric]);
			googletag.pubads().setTargeting("PageType", [pageType]);
			googletag.pubads().setTargeting("page_url", [dfp_Article]);
			if(typeof Krux !== 'undefined'){
                googletag.pubads().setTargeting('ksg', Krux.segments);
                googletag.pubads().setTargeting('kuid', Krux.user);
            }
          
            [%PublisherProvidedID%]
             
			googletag.pubads().setCentering(true);
			googletag.pubads().enableSingleRequest();
			googletag.pubads().collapseEmptyDivs();
			googletag.enableServices();
		});

		googletag.cmd.push(function() {googletag.display('div-gpt-ad-diadona-immersive-oop')});
		googletag.cmd.push(function() {googletag.display('div-gpt-ad-diadona-lb')});
		googletag.cmd.push(function() {googletag.display("div-gpt-ad-diadona-sc1")});
		googletag.cmd.push(function() {googletag.display("div-gpt-ad-diadona-sc2")});
		googletag.cmd.push(function() {googletag.display("div-gpt-ad-diadona-marcomm1-oop")});
		googletag.cmd.push(function() {googletag.display("div-gpt-ad-diadona-popup-oop")});
		googletag.cmd.push(function() {googletag.display("div-gpt-ad-diadona-newsTag1-oop")});
		googletag.cmd.push(function() {googletag.display("div-gpt-ad-diadona-newsTag2-oop")});
	}