    let feedboardScript = `
    class Feedboard extends HTMLElement {
        constructor() {
            super();
            this.intObsEl = ".tags--topics, .relatedtag, .fimela-tags--topics, .tags--topics, .mdk-dt-box, .tag-box-section, #tag-terkait, #tag-box, .tagbola, .detail-box";
            this.globalObj = (window.kly) ? window.kly : window.kmklabs;
            this.countSlide = 0;
            this.siteColor = "FF3300";
            this.slideULPadding = this.globalObj.site === "Merdeka" ? "20px 39px" : "20px 21px";
            this.modalHeaderPadding = this.globalObj.site === "Merdeka" ? "padding-left: 1em;" : "";
            this.svgArrow = '<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.375 9.75L5.625 5.5L1.375 1.25" stroke="#FF3300" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            this.audience = "[%audience%]"; 
            this.kanalPage = this.globalObj.gtm.subCategory;
            this.siteItem = this.globalObj.site;
            this.nextSlide = this.nextSlide.bind(this);
            this.setFeedboardElement();
            this.open();
            this.pushGA('{"event":"impression","feature_name":"widget-recommendation","feature_location":"center","feature_position":"","feature_index":"","kanal_page":"'+this.kanalPage+'","audience_content":"'+this.audience+'","site_item":"'+this.siteItem+'"}');
        }
    
        setFeedboardElement() {
            /** SET ALL FEEDBOARD ELEMENT */
            const shadow = this.attachShadow({
                mode: 'open'
            });
            
            const modalContent = document.createElement('div');

            const style = document.createElement('style');
            const styleMDK = document.createElement('style');
    
            modalContent.setAttribute("class", "modal");
            modalContent.setAttribute("id", "modal-wrapper");
            modalContent.setAttribute("style", "display: none !important;");

    
            switch(this.siteItem) {
                case "Merdeka":
                    this.siteColor = "CE0000";
                    this.svgArrow = '<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.375 9.75L5.625 5.5L1.375 1.25" stroke="#FF3300" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/></svg>';
                  break;
                case "Kapanlagi":
                    this.siteColor = "FDA017";
                    this.svgArrow = '<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.375 9.75L5.625 5.5L1.375 1.25" stroke="#FDA017" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/></svg>';
                  break;
            }
    
            modalContent.innerHTML = \`
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Artikel Rekomendasi untuk anda</h5>
                    </div>
                    <div class="modal-body"></div>
                    <div class="modal-footer justify-content-center ">
                        <button type="button" class="btn btn-secondary btn-next" data-dismiss="modal">
                            <span class="next-arrow">
                                Selanjutnya
                                \`+ this.svgArrow  +\`
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            \`;
            style.textContent = \`
            @font-face {
                font-family: 'Acumin Pro';
                font-style: normal;
                font-weight: normal;
                src: url('https://cdns.klimg.com/d.kapanlaginetwork.com/banner/asset/feedboard/fonts/Acumin-RPro.woff') format('woff');
            }
            @font-face {
                font-family: 'Acumin Pro Italic';
                font-style: normal;
                font-weight: normal;
                src: url('https://cdns.klimg.com/d.kapanlaginetwork.com/banner/asset/feedboard/fonts/Acumin-ItPro.woff') format('woff');
            }
            @font-face {
                font-family: 'Acumin Pro Bold';
                font-style: normal;
                font-weight: normal;
                src: url('https://cdns.klimg.com/d.kapanlaginetwork.com/banner/asset/feedboard/fonts/Acumin-BdPro.woff') format('woff');
            }
            @font-face {
                font-family: 'Acumin Pro Bold Italic';
                font-style: normal;
                font-weight: normal;
                src: url('https://cdns.klimg.com/d.kapanlaginetwork.com/banner/asset/feedboard/fonts/Acumin-BdItPro.woff') format('woff');
            }
    
            span.next-arrow svg {
                height: 1em;
                vertical-align: -0.27em;
                margin-left: 9.38px;
            }
            h1{
                font-weight: 700;
                font-style:normal;
                font-size:20px;
                line-height:24px;
                text-align:center;
                color:#\`+this.siteColor+\`;
            }
            h3{
                font-weight: 400;
                font-style:normal;
                font-size:16px;
                line-height:24px;
                text-align:center;
                color:#\`+this.siteColor+\`;
            }
            .imi-button-text {
                margin: auto 0;
            }
            .btn {
                display: inline-block;
                font-weight: 400;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                border: 1px solid transparent;
                padding: .375rem .75rem;
                font-size: 1rem;
                line-height: 1.5;
                border-radius: 12px;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                width: 320px;
            }
            .btn:not(:disabled):not(.disabled) {
                cursor: pointer;
            }
            .btn-secondary {
                font-family: inherit;
                color:#\`+this.siteColor+\`;
                background-color: #fff;
                border: 1px solid #\`+this.siteColor+\`;
                box-sizing: border-box;
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
            }
            .modal {
                position: relative;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 2147483647;
                display: none;
                overflow: hidden;
                outline: 0;
                font-family: 'Acumin Pro';
                margin: auto;
                padding: 2em 0 2em;
            }
            .fade {
                opacity: 0;
                transition: opacity .15s linear;
            }
            .modal-open .modal {
                overflow-x: hidden;
                overflow-y: auto;
            }
            .fade.show {
                opacity: 1;
            }
    
            .modal.fade .modal-dialog {
                transition: -webkit-transform .3s ease-out;
                transition: transform .3s ease-out;
                transition: transform .3s ease-out,-webkit-transform .3s ease-out;
                -webkit-transform: translate(0,-25%);
                transform: translate(0,-25%);
            }
    
            .modal.show .modal-dialog {
                -webkit-transform: translate(0,0);
                transform: translate(0,0);
            }
    
            .modal-dialog-centered {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                min-height: calc(100% - (.5rem * 2));
            }
            .modal-dialog {
                position: relative;
                width: auto;
                margin: .3rem;
                pointer-events: none;
                
            }
    
            .modal-content {
                position: relative;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                width: 100%;
                pointer-events: auto;
                background-color: #fff;
                background-clip: padding-box;
                outline: 0;
                max-width: 360px;
                margin: 0 auto;      
            }
            .modal-header {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: start;
                -ms-flex-align: start;
                align-items: flex-start;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                \`+ this.modalHeaderPadding +\`
            }
    
            .modal-body {
                position: relative;
                overflow: hidden;
            }
            .modal-footer {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: end;
                -ms-flex-pack: end;
                justify-content: flex-end;
            }
           
            .justify-content-center {
                -webkit-box-pack: center!important;
                -ms-flex-pack: center!important;
                justify-content: center!important;
            }
            .modal-title {
                margin: 0px;
                line-height: 1.5;
                margin-top: 5px;
                font-family: 'Acumin Pro Bold';
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
            }
    
            .close:not(:disabled):not(.disabled) {
                cursor: pointer;
            }
            .close {
                float: right;
                font-size: 1.5625rem;
                font-weight: 200;
                line-height: 1;
                color: #CBCBCB;
                text-shadow: 0 1px 0 #fff;
            }
            .modal-header .close {
                padding: 1.125rem 1.25rem;
                margin: -1rem -1rem -1rem auto;
            }
            button.close {
                padding: 0;
                background-color: transparent;
                border: 0;
                -webkit-appearance: none;
            }

            .slide {
                position: relative;
                left: 0;
                opacity: 1;
                transition: 0.5s ease;
                float: left;
                /*width: 340px;*/
                display:none;
                position: relative;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                width: 100%;
                transition: -webkit-transform .6s ease;
                transition: transform .6s ease;
                transition: transform .6s ease,-webkit-transform .6s ease;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                -webkit-perspective: 1000px;
                perspective: 1000px;
            }
    
            .slide.active{
                display:block !important;
            }
            
            .active.item-left {
                transform: translateX(-100%);
                transform: translate3d(-100%, 0, 0);
            }
    
            .item-next.item-left{
                transform: translateX(0);
                transform: translate3d(0, 0, 0);
            }
    
            .slide-ul{
                margin: 0 auto;
                list-style: none;
                padding: \`+ this.slideULPadding  + \`;

            }
            
            .slide-ul-li {
                list-style: none;
                padding-top: 5px;
                padding-bottom: 5px;
                color: #333333;
                font-weight: 600;
                font-size: 13px;
                line-height: 1.7em;
            }
            
            .slide-ul-li::before {
                content: "";
                color: #\`+this.siteColor+\`;
                display: inline-block;
                margin-left: -1.538em;
                width: 8px;
                height: 8px;
                background-color: #\`+this.siteColor+\`;
                border-radius: 50%;
                -moz-border-radius: 50%;
                -webkit-border-radius: 50%;
            }
            .end-slide {
                position: relative;
                margin-top: 23%;
            }
            .feedboard-lp {
                color: #333 !important;
                text-decoration: none !important;
            }
            .clamp-text{
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                margin-top: -1.7em;
            }
                
            .animation {
                -webkit-animation-duration: 0.3s;
                animation-duration: 0.3s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
                padding: auto
            }
    
            @-webkit-keyframes zoom-in {
                0% {
                    opacity: 0;
                    -webkit-transform: scale3d(.3,.3,.3);
                    transform: scale3d(.3,.3,.3)
                }
            
                50% {
                    opacity: 1
                }
            }
            
            @keyframes zoom-in {
                0% {
                    opacity: 0;
                    -webkit-transform: scale3d(.3,.3,.3);
                    transform: scale3d(.3,.3,.3)
                }
            
                50% {
                    opacity: 1
                }
            }
            
            .zoom-in {
                -webkit-animation-name: zoom-in;
                animation-name: zoom-in
            }
            
            @-webkit-keyframes zoom-out {
                0% {
                    opacity: 1
                }
            
                50% {
                    opacity: 0;
                    -webkit-transform: scale3d(.3,.3,.3);
                    transform: scale3d(.3,.3,.3)
                }
            
                to {
                    opacity: 0
                }
            }
            
            @keyframes zoom-out {
                0% {
                    opacity: 1
                }
            
                50% {
                    opacity: 0;
                    -webkit-transform: scale3d(.3,.3,.3);
                    transform: scale3d(.3,.3,.3)
                }
            
                to {
                    opacity: 0
                }
            }
            
            .zoom-out {
                -webkit-animation-name: zoom-out;
                animation-name: zoom-out
            }        
            \`;
    
            styleMDK.textContent = \`
            .modal-title {
                margin-top: unset !important;
            }
            .slide-ul{
                padding-top: unset !important;
            }
            .modal-header .close {
                margin: -.9rem -.9rem -.9rem auto !important;
            }
            .slide-ul{
                padding-top: unset !important;
            }
            .slide-ul-li {
                padding-top: unset !important;
                padding-bottom: unset !important;
                line-height: 1.8em !important;
            }
            .slide-ul-li::before {
                margin-top: 1em !important;
            }
            .clamp-text{
                margin-top: -1em !important;
            }
            \`;
    
            let link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('href', 'https://cdns.klimg.com/d.kapanlaginetwork.com/banner/asset/feedboard/fonts/style.css');
            this.shadowRoot.appendChild(link);
    
            shadow.appendChild(style);
            (this.globalObj.site === "Merdeka") ? (shadow.appendChild(styleMDK)) : '';
            shadow.appendChild(modalContent);
            
            this.modal = this.shadowRoot.querySelector(".modal");
            this.modalBody = this.shadowRoot.querySelector(".modal-body");
            this.modalHeader = this.shadowRoot.querySelector(".modal-header");
            this.buttonClose = this.shadowRoot.querySelector("button.close");
    
            /** APPEND ARTICLE LIST */
            this.collectList();
            this.buttonNext = this.shadowRoot.querySelector(".btn-next");
            this.slides = this.shadowRoot.querySelectorAll(".slide");
    
            /** APPEND ARTICLE LIST */
    
            /** EVENTS */
            this.buttonNext.addEventListener('click', this.nextSlide);
            this.shadowRoot.querySelectorAll(".feedboard-lp").forEach(item => {
                item.addEventListener("click", event => {
                    console.log("test",JSON.parse(item.dataset.ga));
                    this.pushGA(item.dataset.ga);
                })
            });

            return;
        }
        
        collectList(){
            /** CUSTOM ARRAY METHOD - CHUNK */
            Array.prototype.chunk=function(a){return this.length?[this.slice(0,a)].concat(this.slice(a).chunk(a)):[]};
            const dataArticles = [%jsonarticle%];
            let articles = dataArticles.rows.sort(() => Math.random() - 0.5);
            let listArticle = articles.chunk(3).sort(()=> Math.random() - 0.5).slice(0,5);
            let newsList = "";
            let gaIndex = 1;
            listArticle.forEach((val,key)=>{
                newsList += \`<div class="slide \`+ (key==0?"active":"") +\`" data-slide-id="\` + (key+1) +\`" ><ul class="slide-ul">\`; 
                val.forEach((v,k)=>{
                    newsList += \`<li class="slide-ul-li"><a href="\`+ v["url"] +\`?[%utm%]" target="_blank" class="feedboard-lp" data-ga='{"event":"click","feature_name":"widget-recommendation","feature_location":"center","feature_position":"item","feature_index":"\`+gaIndex+\`","kanal_page":"\`+this.kanalPage+\`","audience_content":"\`+this.audience+\`","site_item":"\`+this.siteItem+\`"}'><span class="clamp-text">\`+ v["title"] +\`</span></a></li>\`;
                    gaIndex++;
                });
                newsList += \`</ul></div>\`;
            });    
            this.modalBody.insertAdjacentHTML("afterbegin",newsList);
        }

        nextSlide(){
    
            let slideLength = this.slides.length;
            let activeSlide = this.modalBody.querySelector(".active");
            this.countSlide = parseInt(activeSlide.dataset.slideId);
            let nextSlide = activeSlide.nextElementSibling;
            
            if( [1, 2, 3, 4, 5].indexOf(this.countSlide) > -1 ){
                console.log("GA EVENT PUSH!");
                this.pushGA('{"event":"click","feature_name":"widget-recommendation","feature_location":"center","feature_position":"selanjutnya-'+ this.countSlide +'","feature_index":"'+ this.countSlide +'","kanal_page":"'+this.kanalPage+'","audience_content":"'+this.audience+'","site_item":"'+this.siteItem+'"}');
            }
    
            if( this.countSlide == slideLength ) {   
                this.buttonNext.removeEventListener("click",this.nextSlide);
            } 
    
            if(nextSlide !== null){
                activeSlide.classList.add("item-left");
                nextSlide.classList.add("item-next","item-left");
                setTimeout(() => {
                    activeSlide.classList.remove("active","item-left");
                    nextSlide.classList.remove("item-next","item-left");
                    nextSlide.classList.add("active");
                }, 300);
            }
    
            if( this.countSlide == (slideLength - 1) ){
                this.buttonNext.remove();
            }
            
        }
        pushGA(json){
            let jsonParse = JSON.parse(json);
            window.dataLayer.push(jsonParse);
            console.log('DATA LAYER',window.dataLayer);
        }
    
        open() {
            this.modal.style.setProperty("display","block","important");            
        } 
    }

    let feedboardContainer = document.createElement("feedboard-popup");
    let link = document.createElement('link');
    let style = document.createElement('style');
    let _impressionTracker = document.createElement("img");
    let _impTrackerUrl = "[%imptracker%]";
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
