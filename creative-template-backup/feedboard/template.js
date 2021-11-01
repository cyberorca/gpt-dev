var globalObject = (parent.kly) ? parent.kly : parent.kmklabs,
    feedboardContainer = document.createElement('iframe');
    divFeedContainer = document.createElement('div');
    divFeedContainer.setAttribute("class","feedboard-wrapper");
    divFeedContainer.setAttribute("style","display: flex;align-items: center;justify-content: center;");
    feedboardContainer.setAttribute("id","feedboard-ic"); 
    feedboardContainer.setAttribute("name","feedboard-ic"); 
    feedboardContainer.setAttribute("scrolling","no");
    feedboardContainer.setAttribute("marginwidth","0");
    feedboardContainer.setAttribute("marginheight","0");
    feedboardContainer.setAttribute("frameborder","0");
    feedboardContainer.setAttribute('srcdoc', '<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Iframe Feedboard</title></head><body><style>div#iframe-wrapper{height:100%;width:100%;display:inline}</style><div id="kly-feedboard-ic" class="minimize show"><div id="kly-feedboard-ic-container" class="loader"><div id="iframe-wrapper"></div></div></div><script src="https://d.infeed.id/resources/js/v.2.1/iframeResizer.min.js"><\/script><script type="text/javascript">var _klyad=parent.kly||parent.kmklabs,_feedboardICContainer=document.getElementById("kly-feedboard-ic-container"),_parntIframe=window.frameElement,_parentDivWrapper=_parntIframe.parentElement.parentElement,_feedboardICSource="https://www.newshub.id/interactive2/?embed=1#/2232/cover",isIos=parent.navigator.platform.match(/iPhone|iPod|iPad/),_feedboardIC=document.getElementById("kly-feedboard-ic");_bootAds();function _bootAds(){_createIframe(_feedboardICSource),_resizeEmbededIframe(),_resizeIframe()}function _resizeEmbededIframe(){window.addEventListener("message",a=>{var b=document.getElementById("kly-feedboard-ic-iframe");if(b){var c=b.contentWindow;if(c){if(a.source!==c)return;console.log(JSON.parse(a.data).height),b.style.height=`${JSON.parse(a.data).height}px`}}})}function _parentSize(){var a=isIos?parent.window.orientation:parent.screen.orientation.angle,b={width:0,height:0};return isIos?(b.width=parent.screen.width,b.height=parent.window.innerHeight):0==a?(b.width=parent.screen.width,b.height=parent.window.innerHeight):(b.width=pparent.window.innerHeight,b.height=parent.screen.width),b}function _resizeIframe(){var a=isIos?parent.window.orientation:parent.screen.orientation.angle;if(0==a){var b=_parentSize(),c=b.width/3.6-b.height;_parntIframe.style=`height: ${b.height}px`,_feedboardIC.style=`height: ${b.height}px`}}function _createIframe(a){_feedboardICIframe=document.createElement("iframe"),_feedboardICIframe.setAttribute("frameborder",0),_feedboardICIframe.setAttribute("id","kly-feedboard-ic-iframe"),_feedboardICIframe.setAttribute("src",a),_feedboardICContainer.querySelector("#iframe-wrapper").appendChild(_feedboardICIframe)}<\/script></body></html>');
    divFeedContainer.appendChild(feedboardContainer);
    
    switch(globalObject.site){
        case 'liputan6' :
            parent.document.querySelector(".tags--topics").parentElement.insertAdjacentElement("beforebegin", divFeedContainer);
            break;
        case 'Kapanlagi' :
            parent.document.querySelector("#div-gpt-ad-kapanlagi-dfp-exposer-slot2-oop").insertAdjacentElement("beforebegin", divFeedContainer);
            break;
        case 'Merdeka' :
            parent.document.querySelector("#div-gpt-ad-merdeka-sc").insertAdjacentElement("beforebegin", divFeedContainer);
            break;
    }