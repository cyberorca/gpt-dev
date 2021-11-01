let feedboardScript = `
    class Feedboard extends HTMLElement {
        constructor() {
            super();
            this.intObsEl = ".tags--topics, .relatedtag, .fimela-tags--topics, .tags--topics, .mdk-dt-box, .tag-box-section, #tag-terkait, #tag-box, .tagbola, .detail-box";
            this.globalObj = (window.kly) ? window.kly : window.kmklabs;
            this.siteItem = this.globalObj.site;
            this.setFeedboardElement();
        }
    
        setFeedboardElement() {
            //
            return;
        }
        
        getFeedboardIC(){
            return ``;
        }
    }

    let feedboardContainer = document.createElement("feedboard-popup");
    let link = document.createElement('link');
    let style = document.createElement('style');
    let _impressionTracker = document.createElement("img");
    let _impTrackerUrl = "https://adserver.kl-youniverse.com/lg.php?bannerid=328&campaignid=116&zoneid=74&cb=";
    let globalObject = window.kly ? window.kly : window.kmklabs;

    style.textContent = \`html{font-size:100% !important;}\`;
    feedboardContainer.setAttribute("data-color-themes", "FF3300");
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://cdns.klimg.com/d.kapanlaginetwork.com/banner/asset/feedboard/fonts/style.css');
    feedboardContainer.appendChild(link);
    feedboardContainer.appendChild(style); 

 
    
    switch(globalObject.site){
        case 'liputan6' :
            document.querySelector(".copy-container").parentElement.insertAdjacentElement("beforebegin", feedboardContainer);
            break;
        case 'Kapanlagi' :
            document.querySelector("#div-gpt-ad-kapanlagi-dfp-exposer-slot2-oop").insertAdjacentElement("beforebegin", feedboardContainer);
            break;
        case 'Merdeka' :
            document.querySelector("#div-gpt-ad-merdeka-sc").insertAdjacentElement("beforebegin", feedboardContainer);
            break;
    }

    /*DEFINE CUSTOM FEEDBOARD ELEMENT*/    
    customElements.define('feedboard-popup', Feedboard);
    
    if(_impTrackerUrl !== ""){
        _impressionTracker.setAttribute("id","feedboard-impression-tracker");
        _impressionTracker.width = "0";
        _impressionTracker.height = "0";
        _impressionTracker.setAttribute("src",_impTrackerUrl + "365145989");
        document.body.insertAdjacentElement("beforeend",_impressionTracker);
    } 
    `;
    
    let feedBoardScriptEl = document.createElement("script");
    feedBoardScriptEl.textContent = feedboardScript;
    window.frameElement.insertAdjacentElement("beforebegin",feedBoardScriptEl);