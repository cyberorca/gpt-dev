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
            this.audience = "Avid Recent Reader"; 
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
            const dataArticles = {"rows":[{"url":"https://kapanlagi.com/foto/berita-foto/korea/9-aktris-dengan-gaun-terlalu-terbuka-di-red-carpet-dan-jadi-sorotan-publik-ada-yang-nggak-boleh-masuk-ke-acara.html","title":"9 Aktris dengan Gaun Terlalu Terbuka di Red Carpet dan Jadi Sorotan Publik, Ada yang Nggak Boleh Masuk ke Acara - Kapanlagi.com"},{"url":"https://kapanlagi.com/dangdut/berita-foto/15-foto-lawas-lucinta-luna-dari-koleksi-mantan-bos-manager-tak-tahu-karena-tak-kenal-lucinta-zaman-dulu.html","title":"15 Foto Lawas Lucinta Luna dari Koleksi Mantan Bos, Manager Tak Tahu Karena Tak Kenal Lucinta Zaman Dulu - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/8-potret-gisella-anastasia-saat-di-medan-tahun-2017-silam-tampil-cantik-di-acara-gathering---netizen-salah-fokus-ke-cat-kuku.html","title":"8 Potret Gisella Anastasia Saat di Medan Tahun 2017 Silam, Tampil Cantik di Acara Gathering - Netizen Salah Fokus ke Cat Kuku - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/8-potret-lucinta-luna-saat-ditangkap-aparat-terkait-narkoba-wajah-sedih-tanpa-wig-dan-make-up.html","title":"8 Potret Lucinta Luna Saat Ditangkap Aparat Terkait Narkoba, Wajah Sedih Tanpa Wig dan Make Up - Kapanlagi.com"},{"url":"https://kapanlagi.com/dangdut/matcont-sering-disebut-aslinya-perempuan-abash-pacar-lucinta-luna-nekat-renang-bertelanjang-dada-29f013.html","title":"Sering Disebut Aslinya Perempuan, Abash Pacar Lucinta Luna Nekat Renang Bertelanjang Dada - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/bikin-pikiran-kaum-adam-traveling-9-potret-angel-karamoy-yang-hot-mom-abis-di-usia-34-tahun---netizen-auto-nge-zoom.html","title":"Bikin Pikiran Kaum Adam Traveling, 9 Potret Angel Karamoy yang Hot Mom Abis di Usia 34 Tahun - Netizen Auto Nge-zoom - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/korea/8-gaun-kontroversial-aktris-korea-di-red-carpet-transparan-sampai-hampir-seluruh-tubuh-kelihatan.html","title":"8 Gaun Kontroversial Aktris Korea di Red Carpet, Transparan Sampai Hampir Seluruh Tubuh Kelihatan - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/korea/dari-yoona-girls-generation-sampai-bae-suzy-9-idol-cantik-ini-pernah-gunakan-busana-gagal-di-acara-red-carpet.html","title":"Dari Yoona Girls' Generation Sampai Bae Suzy, 9 Idol Cantik Ini Pernah Gunakan Busana 'Gagal' di Acara Red Carpet - Kapanlagi.com"},{"url":"https://kapanlagi.com/dangdut/berita-foto/dulu-berdinding-bambu--berada-di-kampung-simak-5-potret-rumah-baru-lesty-kejora-sekarang.html","title":"Dulu Berdinding Bambu & Berada di Kampung, Simak 5 Potret Rumah Baru Lesty Kejora Sekarang - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/foto-shakiena-azalea-anak-pasha-ungu-dan-okie-agustina-yang-cantik-banget-punya-aura-model.html","title":"Foto Shakiena Azalea Anak Pasha Ungu dan Okie Agustina yang Cantik Banget, Punya Aura Model - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/9-potret-lucinta-luna-jalani-maternity-shoot-usung-adat-bali-pamer-perut-buncit---cium-pasangan.html","title":"9 Potret Lucinta Luna Jalani Maternity Shoot Usung Adat Bali, Pamer Perut Buncit - Cium Pasangan - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/nikita-mirzani-jalani-pemotretan-bareng-tiga-anaknya-si-sulung-laura-cantik-banget.html","title":"Nikita Mirzani Jalani Pemotretan Bareng Tiga Anaknya, Si Sulung Lolly Dandan Cantik Banget! - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/8-potret-maura-magnalia-putri-sulung-nurul-arifin-yang-tak-tersorot-cantik-bertato---gayanya-nyentrik-abis.html","title":"8 Potret Maura Magnalia Putri Sulung Nurul Arifin yang Tak Tersorot, Cantik Bertato - Gayanya Nyentrik Abis - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/jarang-terekspos-ini-9-potret-muchlis-rusli-ayah-bcl-yang-pernah-bekerja-di-bank-indonesia.html","title":"Jarang Terekspos, Ini 9 Potret Muchlis Rusli Ayah BCL yang Pernah Bekerja di Bank Indonesia - Kapanlagi.com"},{"url":"https://kapanlagi.com/showbiz/selebriti/tanpa-gaun-pengantin-mewah-sherina-munaf-pakai-celana-saat-menikah-5ddce2.html","title":"Tanpa Gaun Pengantin Mewah, Sherina Munaf Pakai Celana Saat Menikah - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/7-pesona-manuella-aziza-putri-bungsu-sophia-latjuba-yang-jarang-tersorot-beranjak-remaja-dan-makin-cantik.html","title":"7 Pesona Manuella Aziza Putri Bungsu Sophia Latjuba yang Jarang Tersorot, Beranjak Remaja dan Makin Cantik - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/sukses-di-ibukota-seperti-ini-8-potret-rumah-orangtua-iis-dahlia-di-kampung-halaman.html","title":"Sukses di Ibukota, Seperti Ini 8 Potret Rumah Orangtua Iis Dahlia di Kampung Halaman - Kapanlagi.com"},{"url":"https://kapanlagi.com/showbiz/selebriti/pilih-tak-terjun-ke-dunia-hiburan-jadi-pebisnis-muda-ini-9-potret-ganteng-dua-putra-meriam-bellina-yang-jarang-tersorot-6621d8.html","title":"Pilih Tak Terjun ke Dunia Hiburan - Jadi Pebisnis Muda, Ini 9 Potret Ganteng 2 Anak Meriam Bellina yang Jarang Tersorot - Kapanlagi.com"},{"url":"https://kapanlagi.com/dangdut/gebby-vesta-ungkap-bayaran-yang-diterima-lucinta-luna-saat-jual-diri-di-malaysia-de7688.html","title":"Gebby Vesta Ungkap Bayaran yang Diterima Lucinta Luna Saat Jual Diri di Malaysia - Kapanlagi.com"},{"url":"https://kapanlagi.com/dangdut/berita-foto/10-potret-masa-sma-ayu-ting-ting-cantik-sejak-dulu-tapi-sering-dibully-kakak-kelas.html","title":"10 Potret Masa SMA Ayu Ting Ting, Cantik Sejak Dulu Tapi Sering Dibully Kakak Kelas - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/11-foto-tante-ernie-pemersatu-bangsa-dengan-suami-ganteng--3-anaknya-hangat--mesra.html","title":"11 Foto Tante Ernie Pemersatu Bangsa dengan Suami Ganteng & 3 Anaknya, Hangat & Mesra - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/8-potret-itje-trisnawati-pedangdut-jadul-yang-kini-berhijab-dan-tetap-cantik-di-usia-setengah-abad-lebih.html","title":"8 Potret Itje Trisnawati, Pedangdut Jadul yang Kini Berhijab dan Tetap Cantik di Usia Setengah Abad Lebih - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/10-potret-shandy-aulia-ajak-baby-claire-main-di-pantai-untuk-pertama-kali-seru-seruan-sampai-pose-berbikini.html","title":"10 Potret Shandy Aulia Ajak Baby Claire Main di Pantai untuk Pertama Kali, Seru-Seruan Sampai Pose Berbikini - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/27-tahun-menduda-begini-potret-ronny-sianturi-urus-anak-semata-wayangnya-seorang-diri---jadi-hot-daddy.html","title":"27 Tahun Menduda, Begini Potret Ronny Sianturi Urus Anak Semata Wayangnya Seorang Diri - Jadi Hot Daddy - Kapanlagi.com"},{"url":"https://kapanlagi.com/dangdut/berita-foto/foto-perbandingan-rumah-lama-dan-baru-zaskia-gotik-dulu-tak-berplester-dan-kamar-mandinya-berdinding-separuh-kini-mewah-punya-kolam-renang.html","title":"Foto Perbandingan Rumah Lama dan Baru Zaskia Gotik: Dulu Tak Berplester dan Kamar Mandinya Berdinding Separuh, Kini Mewah Punya Kolam Renang - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/7-potret-nikita-mirzani-intip-dada-dinar-candy-langsung-di-balik-bra-penasaran-dengan-hasil-operasi-plastik.html","title":"7 Potret Nikita Mirzani Intip Dada Dinar Candy Langsung di Balik Bra, Penasaran dengan Hasil Operasi Plastik - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/8-potret-terbaru-varsha-strauss-menantu-bule-bambang-trihatmodjo-makin-cantik---kini-fokus-mengasuh-buah-hati.html","title":"8 Potret Terbaru Varsha Strauss Menantu Bule Bambang Trihatmodjo, Makin Cantik - Kini Fokus Mengasuh Buah Hati - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/7-potret-pesta-ulang-tahun-nikita-mirzani-ke-35-digelar-mewah-bertabur-bunga---tampil-cantik-berambut-panjang-bikin-pangling.html","title":"7 Potret Pesta Ulang Tahun Nikita Mirzani ke-35, Digelar Mewah Bertabur Bunga - Tampil Cantik Berambut Panjang Bikin Pangling - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/foto-sarah-azhari-rayakan-ultah-ke-44-pakai-baju-transparan---hot-pamer-pakaian-dalam.html","title":"FOTO Sarah Azhari Rayakan Ultah ke-44, Pakai Baju Transparan - Hot Pamer Pakaian Dalam - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/jumlah-uang-bulanan-5-selebriti-ini-dengan-kita-kita-bak-langit--bumi-ada-yang-sampai-200-juta-rupiah-perbulan.html","title":"Jumlah Uang Bulanan 5 Selebriti Ini Dengan Kita-Kita Bak Langit & Bumi, Ada yang Sampai 200 Juta Rupiah Perbulan! - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/7-potret-tiara-anak-mulan-jameela-yang-jadi-sorotan-di-ulang-tahun-safeea-ke-10-cantik-pakai-gaun-high-slit---sibuk-bikin-burger.html","title":"7 Potret Tiara Anak Mulan Jameela yang Jadi Sorotan di Ulang Tahun Safeea ke-10, Cantik Pakai Gaun High Slit - Sibuk Bikin Burger - Kapanlagi.com"},{"url":"https://kapanlagi.com/showbiz/selebriti/buka-bukaan-soal-kondisi-keuangan-karena-corona-nikita-mirzani-bertahan-dari-uang-yang-ada-di-rekening-aja-f6c031.html","title":"Buka-bukaan Soal Kondisi Keuangan Karena Corona, Nikita Mirzani: Bertahan dari Uang yang Ada di Rekening Aja - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/8-potret-terbaru-dara-the-virgin-yang-jadi-sorotan-rambut-bondol-dan-pirang---pamer-pinggang-mulus-penuh-tato.html","title":"8 Potret Terbaru Dara The Virgin yang Jadi Sorotan, Rambut Bondol dan Pirang - Pamer Pinggang Mulus Penuh Tato - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/6-potret-kisah-hidup-artis-terkenal-ini-bikin-pilu-dulu-terkenal-sekarang-meninggal-dalam-kondisi-miskin--menggelandang.html","title":"6 Potret Kisah Hidup Artis Terkenal Ini Bikin Pilu, Dulu Terkenal Sekarang Meninggal Dalam Kondisi Miskin & Menggelandang - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/8-gaya-selebriti-berjemur-untuk-cegah-covid-19-ayu-ting-ting-bak-piknik---nagita-slavina-santai-di-loteng.html","title":"8 Gaya Selebriti Berjemur Untuk Cegah Covid-19, Ayu Ting Ting Bak Piknik - Nagita Slavina Santai di Loteng - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/6-potret-kamar-lala-pengasuh-rafathar-akhirnya-punya-kamar-setelah-5-tahun-kerja---baru-sekali-disambangi-nagita-slavina.html","title":"7 Potret Kamar Lala Pengasuh Rafathar, Akhirnya Punya Kamar Setelah 5 Tahun Kerja - Baru Sekali Disambangi Nagita Slavina - Kapanlagi.com"},{"url":"https://kapanlagi.com/showbiz/selebriti/momen-menyentuh-bcl-pemotretan-bareng-keluarga-ashraf-sinclair-noah-bawa-foto-almarhum-283a8f.html","title":"Momen Menyentuh BCL Pemotretan Bareng Keluarga Ashraf Sinclair, Noah Bawa Foto Almarhum - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/7-potret-terbaru-catherine-wilson-pasca-keluar-dari-penjara-tubuh-berisi-yang-membuatnya-tampil-fresh--bikin-pangling.html","title":"7 Potret Terbaru Catherine Wilson Pasca Keluar Dari Penjara, Tubuh Berisi yang Membuatnya Tampil Fresh & Bikin Pangling - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/10-foto-terbaru-temmy-rahadi-artis-yang-sempat-diduga-sebagai-penyebab-revi-mariska-gila.html","title":"10 Foto Terbaru Temmy Rahadi, Artis yang Sempat Diduga Sebagai Penyebab Revi Mariska Gila - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/8-potret-penampilan-cantik-nabila-syakieb-di-hari-pernikahan-ali-syakieb-dan-margin-wieheerm-tampil-memesona-pakai-kebaya.html","title":"8 Potret Penampilan Cantik Nabila Syakieb di Hari Pernikahan Ali Syakieb dan Margin Wieheerm, Tampil Memesona Pakai Kebaya - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/internasional/10-foto-alesya-kafelnikova-model-asal-rusia-yang-bikin-geger-karena-foto-telanjang-di-atas-gajah-sumatera.html","title":"10 Foto Alesya Kafelnikova, Model Asal Rusia yang Bikin Geger Karena Foto Telanjang di Atas Gajah Sumatera - Kapanlagi.com"},{"url":"https://kapanlagi.com/dangdut/berita-foto/9-potret-detail-kebaya-akad-nikah-lesti-kejora-berhiaskan-payet-bentuk-padi---punya-makna-yang-dalam.html","title":"9 Potret Detail Kebaya Akad Nikah Lesti Kejora, Berhiaskan Payet Bentuk Padi - Punya Makna yang Dalam - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/kabar-member-7-icons-sekarang-ada-yang-jadi-anak-jalanan-hingga-mantap-berhijab.html","title":"Kabar Member 7 Icons Sekarang, Ada yang Jadi 'Anak Jalanan' Hingga Mantap Berhijab - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/8-potret-gaun-indah-pernikahan-marcella-daryanani-cantik-dilapisi-swarovski.html","title":"8 Potret Gaun Indah Pernikahan Marcella Daryanani, Cantik Dilapisi Swarovski - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/10-foto-cantik-imel-putri-cahyati-mantan-istri-sirajuddin-mahmud-sekaligus-sahabat-zaskia-gotik-yang-dulunya-bintang-ftv-genta-buana.html","title":"10 Foto Cantik Imel Putri Cahyati, Mantan Istri Sirajuddin Mahmud Sekaligus Sahabat Zaskia Gotik yang Dulunya Bintang FTV Genta Buana - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/6-penampakan-tato-baru-penuhi-tubuh-ammar-zoni-macho-abis---foto-romantis-dengan-irish-bella.html","title":"6 Penampakan Tato Baru Penuhi Tubuh Ammar Zoni, Macho Abis - Foto Romantis Dengan Irish Bella - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/8-foto-nabila-syakieb-di-lamaran-ali-syakieb---margin-wieheerm-cantik-pakai-kebaya-dan-dipanggil-madam.html","title":"8 Foto Nabila Syakieb di Lamaran Ali Syakieb - Margin Wieheerm, Cantik Pakai Kebaya dan Dipanggil Madam - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/7-potret-diduga-romo-ndaru-kusumo-yang-baru-saja-menikahi-olivia-zalianty-bergelar-bangsawan---petinggi-di-sebuah-yayasan.html","title":"7 Potret Diduga Romo Ndaru Kusumo yang Baru Saja Menikahi Olivia Zalianty, Bergelar Bangsawan - Petinggi di Sebuah Yayasan? - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/10-potret-syafa-azzahra-putri-kedua-ussy-sulistiawaty-yang-makin-cantik-dan-beranjak-remaja.html","title":"10 Potret Syafa Azzahra Putri Kedua Ussy Sulistiawaty yang Makin Cantik dan Beranjak Remaja - Kapanlagi.com"},{"url":"https://kapanlagi.com/foto/berita-foto/indonesia/gaya-rambut-pendek-aurel-hermansyah-yang-bikin-atta-halilintar-terpesona-disebut-manis-bak-gula-jawa-oleh-netizen.html","title":"Gaya Rambut Pendek Aurel Hermansyah yang Bikin Atta Halilintar Terpesona, Disebut Manis Bak Gula Jawa oleh Netizen - Kapanlagi.com"}]};
            let articles = dataArticles.rows.sort(() => Math.random() - 0.5);
            let listArticle = articles.chunk(3).sort(()=> Math.random() - 0.5).slice(0,5);
            let newsList = "";
            let gaIndex = 1;
            listArticle.forEach((val,key)=>{
                newsList += \`<div class="slide \`+ (key==0?"active":"") +\`" data-slide-id="\` + (key+1) +\`" ><ul class="slide-ul">\`; 
                val.forEach((v,k)=>{
                    newsList += \`<li class="slide-ul-li"><a href="\`+ v["url"] +\`?utm_campaign=widget-recommendation" target="_blank" class="feedboard-lp" data-ga='{"event":"click","feature_name":"widget-recommendation","feature_location":"center","feature_position":"item","feature_index":"\`+gaIndex+\`","kanal_page":"\`+this.kanalPage+\`","audience_content":"\`+this.audience+\`","site_item":"\`+this.siteItem+\`"}'><span class="clamp-text">\`+ v["title"] +\`</span></a></li>\`;
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