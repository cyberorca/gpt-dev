
    let feedboardScript = `
    class Feedboard extends HTMLElement {
        constructor() {
            super();
            this.intObsEl = ".tags--topics, .relatedtag, .fimela-tags--topics, .tags--topics, .mdk-dt-box, .tag-box-section, #tag-terkait, #tag-box, .tagbola, .detail-box";
            this.globalObj = (window.kly) ? window.kly : window.kmklabs;
            this.generatedRec = 0;
            this.feedboardClosed = 0;
            this.portrait = 1;
            this.countSlide = 0;
            this.siteColor = "FF3300";
            this.svgArrow = '<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.375 9.75L5.625 5.5L1.375 1.25" stroke="#FF3300" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            this.audience = "[%audience%]"; 
            this.kanalPage = this.globalObj.gtm.subCategory;
            this.siteItem = this.globalObj.site;
            this.nextSlide = this.nextSlide.bind(this);
            this.freezeState = this.freezeState.bind(this);
            this.closed = this.closed.bind(this);
            this.closedModal = this.closedModal.bind(this);
            this.orientationHandler = this.orientationHandler.bind(this);
    
            this.setFeedboardElement();
            this.intersectionObserverHandler();
            this.pushGA('{"event":"impression","feature_name":"widget-recommendation","feature_location":"center","feature_position":"","feature_index":"","kanal_page":"'+this.kanalPage+'","audience_content":"'+this.audience+'","site_item":"'+this.siteItem+'"}');
        }
    
        setFeedboardElement() {
            /** SET ALL FEEDBOARD ELEMENT */
            const shadow = this.attachShadow({
                mode: 'open'
            });
            
            const modalContent = document.createElement('div');
            const modalBackdrop = document.createElement('div');
            const style = document.createElement('style');
            const styleMDK = document.createElement('style');
    
            modalContent.setAttribute("class", "modal animation zoom-in");
            modalContent.setAttribute("id", "modal-wrapper");
            modalContent.setAttribute("style", "display: none !important;");
            modalBackdrop.setAttribute("class", "modal-backdrop");
            modalBackdrop.setAttribute("style", "display: none !important;");
    
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
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.23814 7.00083L13.7435 1.4955C14.0855 1.15376 14.0855 0.599255 13.7435 0.257507C13.4014 -0.0845334 12.8475 -0.0845334 12.5055 0.257507L7.00015 5.76283L1.49453 0.257507C1.15249 -0.0845334 0.59857 -0.0845334 0.25653 0.257507C-0.08551 0.599255 -0.08551 1.15376 0.25653 1.4955L5.76215 7.00083L0.25653 12.5062C-0.08551 12.8479 -0.08551 13.4024 0.25653 13.7442C0.42755 13.9149 0.651685 14.0004 0.875529 14.0004C1.09937 14.0004 1.32351 13.9149 1.49453 13.7439L7.00015 8.23854L12.5055 13.7439C12.6765 13.9149 12.9006 14.0004 13.1245 14.0004C13.3483 14.0004 13.5724 13.9149 13.7435 13.7439C14.0855 13.4021 14.0855 12.8476 13.7435 12.5059L8.23814 7.00083Z" fill="#CBCBCB"/>
                        </svg></span>
                        </button>
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
            @media (orientation: landscape) {
                .modal, .modal-backdrop {
                  display:none;
                }
                body{
                    position: unset;
                }
              }
              
            @media (orientation: portrait) {
                .modal, .modal-backdrop {
                    display:block;
                }
                body{
                    position: fixed;
                }
            }
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
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 2147483647;
                display: none;
                overflow: hidden;
                outline: 0;
                font-family: 'Acumin Pro';
                height: 400px;
                margin: auto;
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
                border: 1px solid rgba(0,0,0,.2);
                border-radius: 12px;
                outline: 0;
                max-width: 360px;
                margin: 0 auto;
                height:389px;
                
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
                padding: 0.8125rem 1.25rem;
                border-radius: 12px 12px 0px 0px;
                background: #F8F8F8;
            }
    
            .modal-body {
                position: relative;
                -webkit-box-flex: 1;
                -ms-flex: 1 1 auto;
                flex: 1 1 auto;
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
                padding: 0 20px 15px;
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
    
            .modal-backdrop {
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 2147483640;
                background-color: #000;
                opacity: .5;
            }
            .modal-backdrop.fade {
                opacity: 0;
            }
            .modal-backdrop.show {
                opacity: .5;
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
                padding: 10px 38px;
            }
            
            .slide-ul-li {
                list-style: none;
                padding-top: 4px;
                padding-bottom: 4px;
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
            shadow.appendChild(modalBackdrop);
            
            this.modal = this.shadowRoot.querySelector(".modal");
            this.modalBody = this.shadowRoot.querySelector(".modal-body");
            this.modalBackdrop = this.shadowRoot.querySelector(".modal-backdrop");
            this.modalHeader = this.shadowRoot.querySelector(".modal-header");
            this.buttonClose = this.shadowRoot.querySelector("button.close");
    
            /** APPEND ARTICLE LIST */
            this.collectList();
            this.buttonNext = this.shadowRoot.querySelector(".btn-next");
            this.slides = this.shadowRoot.querySelectorAll(".slide");
    
            /** APPEND ARTICLE LIST */
    
            /** EVENTS */
            this.buttonNext.addEventListener('click', this.nextSlide);
            this.buttonClose.addEventListener('click', this.closedModal);
            this.modalBackdrop.addEventListener('click', this.closedModal);
            this.shadowRoot.querySelectorAll(".feedboard-lp").forEach(item => {
                item.addEventListener("click", event => {
                    console.log("test",JSON.parse(item.dataset.ga));
                    this.pushGA(item.dataset.ga);
                })
            });
            window.addEventListener("orientationchange", this.orientationHandler);
            return;
        }
        
        collectList(){
            /** CUSTOM ARRAY METHOD - CHUNK */
            Array.prototype.chunk=function(a){return this.length?[this.slice(0,a)].concat(this.slice(a).chunk(a)):[]};
            const dataArticles = [%jsonarticle%];
            let articles = dataArticles.rows.sort(() => Math.random() - 0.5);
            let listArticle = articles.chunk(5).sort(()=> Math.random() - 0.5).slice(0,3);
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
    
            newsList += \`
                <div class="slide" data-slide-id="\`+ (listArticle.length+1) +\`">
                    <div class="end-slide">
                        <h1>Terima Kasih</h1>
                        <h3>Sekian Rekomendasi Artikel Hari Ini</h3>
                    </div>
                </div>
            \`; 
    
            this.modalBody.insertAdjacentHTML("afterbegin",newsList);
        }
    
        orientationHandler() {
            let _ios = ["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;
            let _orientationScreenAPI = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    
            if (typeof _orientationScreenAPI !== "undefined") {
                if (this.generatedRec && _orientationScreenAPI.match(/portrait/ig)) {
                    this.open();
                } else if (_orientationScreenAPI.match(/landscape/ig)) {
                    this.closed();
                }
            } else {
                let _orientation = document.documentElement.clientWidth < document.documentElement.clientHeight ? 1 : 0;
                _orientation = _ios ? ((navigator.userAgent.match(/(criOS)/ig) !== null) ? _orientation : !_orientation) : ((navigator.userAgent.match(/(CPH1937)/ig) !== null) ? _orientation : !_orientation);
    
                if (this.generatedRec && _orientation) {
                    this.open();
                } else {
                    this.closed();
                }
            }
        }
        intersectionObserverHandler(){    
            let optionsRec = {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            };
            let adunitElementRec = document.querySelector(this.intObsEl);
            let observerRec = null;
            observerRec = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        /* -- add recommendation popup script here -- */
                        let _ios = ["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;
                        let _orientationScreenAPI = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
                        let _orientation = 1;
            
                        if( typeof _orientationScreenAPI !== "undefined" ){
                            if( _orientationScreenAPI.match(/portrait/ig) ){
                                _orientation = 1;
                            }else if( _orientationScreenAPI.match(/landscape/ig) ){
                                _orientation = 0;
                            }
                        }else{
                            _orientation = document.documentElement.clientWidth < document.documentElement.clientHeight ? 1 : 0;
                            _orientation = navigator.userAgent.match(/(CPH1937)/ig) ? !_orientation : _orientation;
                        }
                        if (!this.generatedRec && _orientation) {
                            this.open();
                            this.generatedRec = 1;
                        }
                    }
                });
            }, optionsRec);
            observerRec.observe(adunitElementRec);
        }
    
        nextSlide(){
    
            let slideLength = this.slides.length;
            let activeSlide = this.modalBody.querySelector(".active");
            this.countSlide = parseInt(activeSlide.dataset.slideId);
            let nextSlide = activeSlide.nextElementSibling;
            
            if( [1, 2, 3].indexOf(this.countSlide) > -1 ){
                console.log("GA EVENT PUSH!");
                this.pushGA('{"event":"click","feature_name":"widget-recommendation","feature_location":"center","feature_position":"selanjutnya-'+ this.countSlide +'","feature_index":"'+ this.countSlide +'","kanal_page":"'+this.kanalPage+'","audience_content":"'+this.audience+'","site_item":"'+this.siteItem+'"}');
            }
    
            if( this.countSlide == slideLength ) {   
                this.closedModal(); 
                this.pushGA('{"event":"click","feature_name":"widget-recommendation","feature_location":"center","feature_position":"tutup","feature_index":"0","kanal_page":"'+this.kanalPage+'","audience_content":"'+this.audience+'","site_item":"'+this.siteItem+'"}');
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
                this.modalHeader.style.setProperty("visibility","hidden","important");
                this.buttonNext.firstElementChild.innerText = "Tutup";
            }
            
        }
    
        freezeState(state) {
            let docBody = document.body;
            let bodyRect = docBody.getBoundingClientRect();
            let elemRect = docBody.querySelector(this.intObsEl).getBoundingClientRect();
            let offset = elemRect.top - bodyRect.top;
    
            if (state) {
                /* FREEZE */
                docBody.style.setProperty("position", "fixed");
                docBody.style.setProperty("top", "-" + offset + "px");
            } else {
                /* unFREEZE */
                docBody.style.setProperty("position", "unset");
                (this.generatedRec) ? window.scrollTo(0, Math.abs(parseInt(offset || "0"))) : '';
            }
        }
    
        pushGA(json){
            let jsonParse = JSON.parse(json);
            window.dataLayer.push(jsonParse);
            console.log('DATA LAYER',window.dataLayer);
        }
    
        open() {
            this.modal.classList.remove("zoom-out");
            this.modal.classList.add("zoom-in");
            this.modal.style.setProperty("display","block","important");
            this.modalBackdrop.style.setProperty("display","block","important");
            this.freezeState(1);
            
        }
    
        closed() {
            this.modal.classList.remove("zoom-in");
            this.modal.classList.add("zoom-out");
            var that = this;
            setTimeout(() => {
                that.modal.style.setProperty("display","none","important");
                that.modalBackdrop.style.setProperty("display","none","important");
            }, 500);
            this.freezeState(0);
        }
    
        closedModal(e){
            if( e && e.srcElement){
                let tagname = (e.srcElement.tagName == "DIV") ? "outer" : "bttn-close";
                this.pushGA('{"event":"click","feature_name":"widget-recommendation","feature_location":"center","feature_position":"'+ tagname +'","feature_index":"0","kanal_page":"'+this.kanalPage+'","audience_content":"'+this.audience+'","site_item":"'+this.siteItem+'"}');
            }
            this.closed();
    
            this.modal.remove();
            this.modalBackdrop.remove();
            this.feedboardClosed = 1;
            window.removeEventListener("orientationchange", this.orientationHandler);
        }
    
    }

    let feedboardContainer = document.createElement("feedboard-popup");
    let link = document.createElement('link');
    let style = document.createElement('style');
    let _impressionTracker = document.createElement("img");
    let _impTrackerUrl = "[%imptracker%]";
    
    style.textContent = \`html{font-size:100% !important;}\`;
    feedboardContainer.setAttribute("data-color-themes", "FF3300");
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://cdns.klimg.com/d.kapanlaginetwork.com/banner/asset/feedboard/fonts/style.css');
    feedboardContainer.appendChild(link);
    feedboardContainer.appendChild(style);
    document.body.insertAdjacentElement("beforeend", feedboardContainer);

    /*DEFINE CUSTOM FEEDBOARD ELEMENT*/    
    customElements.define('feedboard-popup', Feedboard);
    

    if(_impTrackerUrl !== ""){
        _impressionTracker.setAttribute("id","feedboard-impression-tracker");
        _impressionTracker.width = "0";
        _impressionTracker.height = "0";
        _impressionTracker.setAttribute("src",_impTrackerUrl + "%%CACHEBUSTER%%");
        document.body.insertAdjacentElement("beforeend",_impressionTracker);
    } 
    `;
    
    let feedBoardScriptEl = document.createElement("script");
    feedBoardScriptEl.textContent = feedboardScript;
    
    parent.document.body.insertAdjacentElement("beforeend",feedBoardScriptEl);