let _kly = typeof parent.kmklabs !== "undefined" ? parent.kmklabs : parent.kly;
    let _intObsEl = ".tags--topics, .relatedtag, .fimela-tags--topics, .tags--topics, .mdk-dt-box, .tag-box-section, #tag-terkait";
    let _audience = "Food & Drink"; 
    let _kanalPage = _kly.gtm.subCategory;
    let _siteItem = _kly.site;
    let _siteColor = "#FF3300";

    switch(_siteItem) {
      case "Merdeka":
        _siteColor = "CE0000";
        break;
      case "Kapanlagi":
        _siteColor = "FDA017";
        break;
    }
    
    let _style = `
    .no-scroll {
        overflow: hidden;
    }
    .modal {
        position: fixed;
        z-index: 2147483647;
        left: 0;
        top: 0;
        width: 0;
        height: 0;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
        font-family: AcuminPro;
        font-style: normal;
        opacity: 0;
        transition: all 0.2s ease-in-out;
    }
    
    .modal.modal-ready {
        opacity: 1;
        transition: all 0.2s ease-in-out;
        width: 100%;
        height: 100%;
    }
    
    .modal.close {
        -webkit-animation-name: fadeOut;
        -webkit-animation-duration: 0.4s;
        animation-name: fadeOut;
        animation-duration: 0.4s;
    }
    
    
    /* Modal Content */
    
    .modal-content {
        position: relative;
        bottom: 0;
        top: 16%;
        margin: 0 auto;
        background-color: #fefefe;
        width: 97%;
        max-width: 360px;
        height: 389px;
        border-radius: 12px;
        transform: scale(0);
        opacity: 1;
        transition: all 0.2s ease-in-out;
        overflow: hidden;
    }
    .modal-content h1, h3, span, p {
        font-family: 'AcuminPro';
        margin:revert;
    }
    .modal-content.modal-content-ready {
        transform: scale(1);
        transition: all 0.3s ease-in-out;
    }
    
    .modal-content h1 {
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #`+_siteColor+`;
    }
    
    .modal-content h3 {
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #`+_siteColor+`;
    }
    
    
    /* The Close Button */
    .feedboard-lp{
        color:#333;
    }
    
    .feedboard-lp:link, .feedboard-lp:visited, .feedboard-lp:hover {
        color:#333;
    } 
    
    .close-feedboard {
        color: #CBCBCB;
        float: right;
        font-size: 25px;
        margin-top: 5%;
    }
    
    .close-feedboard:hover,
    .close-feedboard:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
    .hide-feedboard-header{
        visibility:hidden;
    }
    .modal-header {
        padding: 2px 16px;
        color: rgb(0, 0, 0);
        height: 50px;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        background: #F8F8F8;
        border-radius: 12px 12px 0px 0px;
    }
    .modal-header p {
        font-weight: bold !important;
    }
    .modal-body {
        overflow: hidden;
        display: inline-flex;
        transition: left 100ms linear;
        position: relative;
        left: 0;
        padding-top: 8px;
    }
    
    .modal-footer {
        padding: 0 16px 4px 16px;
        color: rgb(0, 0, 0);
        position: absolute;
        bottom: 8px;
        width: 100%;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
    }
    
    .modal-footer .modal-btn {
        padding: 8px;
        text-decoration: none;
        transition: 0.5s ease;
        border: 1px solid #`+_siteColor+`;
        box-sizing: border-box;
        border-radius: 12px;
        width: 100%;
        height: 38px;
        display: block;
        text-align: center;
        color: #`+_siteColor+`;
    }
    
    .next-word {
        margin-right: 5px;
    }
    
    .slide {
        position: relative;
        left: 0;
        opacity: 1;
        transition: 0.5s ease;
        float: left;
        width: 340px;
    }
    
    .slide-ul{
        margin: 0 auto;
        list-style: none;
        padding:revert;
    }
    
    .slide-ul-li {
        list-style: none;
        padding-top: 2px;
        padding-bottom: 5px;
        color: #333333;
        font-weight: 600;
        font-size: 13px;
        line-height: 180%;
        text-indent: 2px;
    }
    
    .slide-ul-li::before {
        content: "\u2022";
        color: #`+_siteColor+`;
        font-weight: bold;
        font-size: 1.5rem;
        display: inline-block;
        width: 23px;
        margin-left: -1em;
        vertical-align: top;
    }
    
    .clamp-text{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-top: -1.7em;
    }
    
    .end-slide {
        position: relative;
        width: 100%;
        top: 25%;
        margin: 0 auto;
    }
    
    .right-side {
        right: 0;
        left: auto
    }
    
    .next-arrow {
        border: solid #`+_siteColor+`;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 2px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
    
    
    /* Add Animation */
    
    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    
    @-moz-keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    
    @-webkit-keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    
    @-o-keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    
    @-ms-keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    `;
    
    let _script = `
    {
        Array.prototype.chunk = function ( n ) {
            if ( !this.length ) {
                return [];
            }
            return [ this.slice( 0, n ) ].concat( this.slice(n).chunk(n) );
        };
    
        var _modalWrapper = document.getElementById("modal-wrapper");
        var _modalContent = document.querySelector(".modal-content");
        var _modalBtn = document.querySelector(".modal-btn");
        var _closeBtn = document.querySelector(".close-feedboard");
        var _modalBody = _modalWrapper.querySelector( ".modal-body" );
        var _modalHeader = _modalWrapper.querySelector( ".modal-header" );  
        var _slideIndex = 0;
        var _width = 0;
        var _closeState = 0;
        
        _collectList();
        _boot(_slideIndex);
    
        /** GRAB DATA */
        function _collectList(){
                var _data = {"rows":[{"url":"https://liputan6.com/lifestyle/read/3910794/31-makanan-khas-daerah-di-indonesia-dengan-cita-rasa-otentik","title":"31 Makanan Khas Daerah di Indonesia dengan Cita Rasa Otentik - Lifestyle Liputan6.com"},{"url":"https://liputan6.com/citizen6/read/3884332/jantung-kobra-hingga-otak-kera-8-makanan-paling-ekstrem-di-dunia","title":"Jantung Kobra hingga Otak Kera, 8 Makanan Paling Ekstrem di Dunia - Citizen6 Liputan6.com"},{"url":"https://liputan6.com/hot/read/4134636/11-makanan-dan-minuman-haram-dalam-islam-beserta-dalilnya","title":"11 Makanan dan Minuman Haram dalam Islam Beserta Dalilnya - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/4226305/10-jenis-alkohol-dalam-minuman-keras-ketahui-kandungannya","title":"10 Jenis Alkohol dalam Minuman Keras, Ketahui Kandungannya - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/4157324/7-makanan-dan-minuman-yang-tidak-boleh-dimakan-bersamaan-dengan-durian","title":"7 Makanan dan Minuman yang Tidak Boleh Dimakan Bersamaan dengan Durian - Hot Liputan6.com"},{"url":"https://liputan6.com/health/read/3174761/kenali-lebih-jauh-risiko-minum-kangen-water","title":"Kenali Lebih Jauh Risiko Minum Kangen Water - Health Liputan6.com"},{"url":"https://liputan6.com/lifestyle/read/3910744/15-makanan-yang-mengandung-protein-selain-telur-dan-susu-cek-di-sini","title":"15 Makanan yang Mengandung Protein Selain Telur dan Susu, Cek di Sini - Lifestyle Liputan6.com"},{"url":"https://liputan6.com/hot/read/4140583/6-makanan-dan-minuman-halal-dalam-islam-beserta-dalilnya","title":"6 Makanan dan Minuman Halal dalam Islam Beserta Dalilnya - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/4422717/50-kata-kata-promosi-makanan-yang-menarik-konsumen","title":"50 Kata-Kata Promosi Makanan yang Menarik Konsumen - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/3945008/11-makanan-penyubur-kandungan-agar-cepat-hamil-mudah-ditemukan","title":"11 Makanan Penyubur Kandungan Agar Cepat Hamil, Mudah Ditemukan - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/4123673/11-makanan-dan-minuman-yang-perlu-dihindari-saat-menstruasi","title":"11 Makanan dan Minuman yang Perlu Dihindari saat Menstruasi - Hot Liputan6.com"},{"url":"https://liputan6.com/health/read/3909566/4-makanan-penyebab-bisul-dan-bahan-alami-yang-bisa-dijadikan-obat","title":"4 Makanan Penyebab Bisul dan Bahan Alami yang Bisa Dijadikan Obat - Health Liputan6.com"},{"url":"https://liputan6.com/ramadan/read/4251158/8-adab-makan-dan-minum-dalam-islam","title":"8 Adab Makan dan Minum dalam Islam - Ramadan Liputan6.com"},{"url":"https://liputan6.com/health/read/3796100/15-makanan-penurun-kolesterol-tinggi-mudah-didapat-dan-ampuh","title":"15 Makanan Penurun Kolesterol Tinggi, Mudah Didapat dan Ampuh - Health Liputan6.com"},{"url":"https://liputan6.com/health/read/3280837/ini-batas-makanan-masih-bisa-dikonsumsi-setelah-kedaluwarsa","title":"Ini Batas Makanan Masih Bisa Dikonsumsi Setelah Kedaluwarsa - Health Liputan6.com"},{"url":"https://liputan6.com/citizen6/read/4312571/viral-struk-makanan-capai-rp135-juta-warganet-makan-kayak-bayar-haji","title":"Viral Struk Makanan Capai Rp135 Juta, Warganet: Makan Kayak Bayar Haji - Citizen6 Liputan6.com"},{"url":"https://liputan6.com/hot/read/4354411/18-tanda-kucing-cacingan-kenali-sejak-dini","title":"18 Tanda Kucing Cacingan, Kenali Sejak Dini - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/4204292/12-makanan-untuk-penderita-diabetes-dan-yang-harus-dihindari","title":"12 Makanan untuk Penderita Diabetes dan yang Harus Dihindari - Hot Liputan6.com"},{"url":"https://liputan6.com/lifestyle/read/3987476/6-makanan-dan-minuman-yang-bisa-menghilangkan-racun-dalam-tubuh","title":"6 Makanan dan Minuman yang Bisa Menghilangkan Racun dalam Tubuh - Lifestyle Liputan6.com"},{"url":"https://liputan6.com/lifestyle/read/3696903/11-manfaat-susu-kambing-untuk-kecantikan-mencerahkan-dan-bikin-awet-muda","title":"11 Manfaat Susu Kambing Untuk Kecantikan, Mencerahkan dan Bikin Awet Muda - Lifestyle Liputan6.com"},{"url":"https://liputan6.com/hot/read/4216390/5-makanan-pembakar-lemak-saat-tidur-bantu-turunkan-berat-badan","title":"5 Makanan Pembakar Lemak Saat Tidur, Bantu Turunkan Berat Badan - Hot Liputan6.com"},{"url":"https://liputan6.com/bola/read/4150464/punya-penyakit-jantung-berikut-8-makanan-yang-harus-dihindari","title":"Punya Penyakit Jantung, Berikut 8 Makanan yang Harus Dihindari - Bola Liputan6.com"},{"url":"https://liputan6.com/hot/read/4308063/35-makanan-khas-nusantara-beserta-daerah-asalnya-menggugah-selera","title":"35 Makanan Khas Nusantara Beserta Daerah Asalnya, Menggugah Selera - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/4224401/13-bahan-pengawet-makanan-alami-dan-buatan-kenali-efeknya-untuk-kesehatan","title":"13 Bahan Pengawet Makanan Alami dan Buatan, Kenali Efeknya untuk Kesehatan - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/4372187/40-nama-unik-untuk-usaha-makanan-yang-islami-lengkap-dengan-maknanya","title":"40 Nama Unik untuk Usaha Makanan yang Islami, Lengkap dengan Maknanya - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/3953615/10-makanan-yang-mengandung-zat-besi-mudah-didapat-dan-baik-untuk-kesehatan","title":"10 Makanan yang Mengandung Zat Besi, Mudah Didapat dan Baik untuk Kesehatan - Hot Liputan6.com"},{"url":"https://liputan6.com/citizen6/read/4287660/10-potret-makanan-tentara-dari-berbagai-negara","title":"10 Potret Makanan Tentara dari Berbagai Negara - Citizen6 Liputan6.com"},{"url":"https://liputan6.com/bola/read/4169035/7-efek-negatif-minum-air-putih-terlalu-banyak-timbulkan-masalah-pada-jantung","title":"7 Efek Negatif Minum Air Putih Terlalu Banyak, Timbulkan Masalah pada Jantung - Bola Liputan6.com"},{"url":"https://liputan6.com/hot/read/4039385/bahan-pengawet-makanan-yang-aman-dikonsumsi-jangan-sampai-salah","title":"Bahan Pengawet Makanan yang Aman Dikonsumsi, Jangan Sampai Salah - Hot Liputan6.com"},{"url":"https://liputan6.com/citizen6/read/4161614/jangan-remehkan-6-tanda-tubuh-terlalu-banyak-minum-kopi","title":"Jangan Remehkan, 6 Tanda Tubuh Terlalu Banyak Minum Kopi - Citizen6 Liputan6.com"},{"url":"https://liputan6.com/global/read/3223914/waspada-5-campuran-jus-buah-dan-sayur-ini-ternyata-berbahaya","title":"Waspada, 5 Campuran Jus Buah dan Sayur Ini Ternyata Berbahaya - Global Liputan6.com"},{"url":"https://liputan6.com/hot/read/4210261/9-makanan-yang-baik-untuk-penderita-asam-lambung","title":"9 Makanan yang Baik untuk Penderita Asam Lambung - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/4064044/5-manfaat-minum-yakult-nutrisinya-baik-untuk-menjaga-kesehatan-sistem-pencernaan","title":"5 Manfaat Minum Yakult, Nutrisinya Baik untuk Menjaga Kesehatan Sistem Pencernaan - Hot Liputan6.com"},{"url":"https://liputan6.com/health/read/3614585/kurangi-minum-kopi-bila-temukan-6-tanda-ini","title":"Kurangi Minum Kopi Bila Temukan 6 Tanda Ini - Health Liputan6.com"},{"url":"https://liputan6.com/hot/read/4147220/7-bahaya-minum-kopi-berlebihan-bagi-kesehatan-kenali-sebelum-ketagihan","title":"7 Bahaya Minum Kopi Berlebihan bagi Kesehatan, Kenali Sebelum Ketagihan - Hot Liputan6.com"},{"url":"https://liputan6.com/citizen6/read/3553094/waspada-4-hal-ini-bisa-menyebabkan-kulkas-meledak","title":"Waspada, 4 Hal Ini Bisa Menyebabkan Kulkas Meledak - Citizen6 Liputan6.com"},{"url":"https://liputan6.com/hot/read/4336064/makanan-penyebab-darah-kental-ketahui-gejala-dan-komplikasinya","title":"Makanan Penyebab Darah Kental, Ketahui Gejala dan Komplikasinya - Hot Liputan6.com"},{"url":"https://liputan6.com/citizen6/read/4206394/6-bahan-makanan-ini-tak-boleh-dicuci-sebelum-anda-masak","title":"6 Bahan Makanan Ini Tak Boleh Dicuci Sebelum Anda Masak - Citizen6 Liputan6.com"},{"url":"https://liputan6.com/hot/read/3937406/makanan-halal-dan-haram-menurut-islam-dilengkapi-penjelasannya","title":"Makanan Halal dan Haram Menurut Islam, Dilengkapi Penjelasannya - Hot Liputan6.com"},{"url":"https://liputan6.com/lifestyle/read/3803996/4-manfaat-minuman-bersoda-bagi-tubuh-yang-jarang-orang-tahu?adv=1","title":"4 Manfaat Minuman Bersoda Bagi Tubuh yang Jarang Orang Tahu - Lifestyle Liputan6.com"},{"url":"https://liputan6.com/hot/read/4153247/6-potret-mi-instan-campur-makanan-lain-ini-indonesia-banget","title":"6 Potret Mi Instan Campur Makanan Lain Ini Indonesia Banget - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/4250261/7-potret-penyajian-makanan-di-restoran-ini-nyeleneh-bikin-bingung-makannya","title":"7 Potret Penyajian Makanan Di Restoran Ini Nyeleneh, Bikin Bingung Makannya - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/4307911/14-pantangan-makanan-ibu-hamil-muda-yang-sering-diabaikan","title":"14 Pantangan Makanan Ibu Hamil Muda yang Sering Diabaikan - Hot Liputan6.com"},{"url":"https://liputan6.com/hot/read/4378321/6-makanan-yang-tidak-boleh-dikonsumsi-bersamaan-dengan-kopi","title":"6 Makanan yang Tidak Boleh Dikonsumsi Bersamaan dengan Kopi - Hot Liputan6.com"},{"url":"https://liputan6.com/global/read/4110134/9-khasiat-minum-kopi-hitam-tanpa-gula-setiap-hari-dan-7-efek-negatifnya","title":"9 Khasiat Minum Kopi Hitam Tanpa Gula Setiap Hari dan 7 Efek Negatifnya - Global Liputan6.com"},{"url":"https://liputan6.com/hot/read/4392893/5-buah-yang-tidak-boleh-dicampur-susu-bisa-timbulkan-penyakit","title":"5 Buah yang Tidak Boleh Dicampur Susu, Bisa Timbulkan Penyakit - Hot Liputan6.com"},{"url":"https://liputan6.com/lifestyle/read/3730771/14-jenis-minuman-kopi-hits-yang-wajib-kamu-tahu-biar-tak-salah-pesan","title":"14 Jenis Minuman Kopi Hits yang Wajib Kamu Tahu, Biar Tak Salah Pesan - Lifestyle Liputan6.com"},{"url":"https://liputan6.com/lifestyle/read/4311248/warganet-heboh-kue-klepon-disebut-tidak-islami-apa-saja-bahan-pembuatnya","title":"Warganet Heboh Kue Klepon Disebut Tidak Islami, Apa Saja Bahan Pembuatnya? - Lifestyle Liputan6.com"},{"url":"https://liputan6.com/lifestyle/read/3590946/jangan-bingung-ini-beda-susu-kental-manis-dengan-krimer-kental-manis","title":"Jangan Bingung! Ini Beda Susu Kental Manis dengan Krimer Kental Manis - Lifestyle Liputan6.com"},{"url":"https://liputan6.com/citizen6/read/4467988/pramugari-sarankan-jangan-minum-teh-dan-kopi-di-pesawat-alasannya-tak-diduga","title":"Pramugari Sarankan Jangan Minum Teh dan Kopi di Pesawat, Alasannya Tak Diduga - Citizen6 Liputan6.com"}]};
                var _modalBody = parent.document.querySelector( ".modal-body" ); 
                var _articles = _data.rows.sort(() => Math.random() - 0.5);
                var _listArticle = _articles.chunk(5).sort(()=> Math.random() - 0.5).slice(0,3);
                var _newsList = "";
                var _gaIndex = 1;
                _listArticle.forEach((val,key)=>{
                    _newsList += \`<div class="slide \`+ (key==0?"active":"") +\`" slide-id="\` + (key+1) +\`" slide-color="#D18B49"><ul class="slide-ul">\`; 
                    val.forEach((v,k)=>{
                        _newsList += \`<li class="slide-ul-li"><a href="\`+ v["url"] +\`?utm_campaign=widget-recommendation" target="_blank" class="feedboard-lp" data-ga='{"event":"click","feature_name":"widget-recommendation","feature_location":"center","feature_position":"item","feature_index":"\$\{_gaIndex\}","kanal_page":"`+_kanalPage+`","audience_content":"`+_audience+`","site_item":"`+_siteItem+`"}'><span class="clamp-text">\`+ v["title"] +\`</span></a></li>\`;
                        _gaIndex++;
                    });
                    _newsList += \`</ul></div>\`;
                });
    
                _newsList += \`<div class="slide" slide-id="\`+ (_listArticle.length+1) +\`" slide-color="#D18B49">
                    <div class="end-slide">
                        <h1>Terima Kasih</h1>
                        <h3>Sekian Rekomendasi Artikel Hari Ini</h3>
                    </div>
                    </div>
                \`; 
    
            _modalBody.insertAdjacentHTML("afterbegin",_newsList);
        }
    
        function _counter(count) {
          _boot(_slideIndex += count);
        }
    
        function _boot(count) {
          let slides = document.querySelectorAll(".slide");
            console.log("Jumlah Slides,count : ", slides.length,count);
          if ( count > slides.length ) return;
                
          if( [1, 2, 3].indexOf(count) > -1 ){
            _pushGA('{"event":"click","feature_name":"widget-recommendation","feature_location":"center","feature_position":"selanjutnya-'+ count +'","feature_index":"'+ count +'","kanal_page":"`+_kanalPage+`","audience_content":"`+_audience+`","site_item":"`+_siteItem+`"}');
          }
          
          if( count == (slides.length - 1) ) {
            _modalHeader.classList.add("hide-feedboard-header");
            _modalBtn.firstElementChild.innerText = "Tutup";
            _modalBtn.lastElementChild.remove();
          }
    
          if( count == slides.length ) {    
            _modalBtn.removeEventListener("click",_countSlideIndexes);
            _closeModal(1);
          } 
    
          typeof slides[count-1] !== "undefined" ? slides[count-1].classList.remove("active") : "";
    
          if( typeof slides[count] !== "undefined" && count > 0 ) {
                slides[count].classList.add("active");
                console.log(slides[count].offsetWidth);
                _width += slides[count].offsetWidth;
                _modalBody.style.left = "-" + _width + "px";	
          }
          
          _slideIndex = count;
    
        }
    
        function _countSlideIndexes( e ){
          e.preventDefault();
          _counter(1);
        }
        
        function freezeState(state){
            var _body = document.body,
             _scrollY = _body.style.top,	
             _bodyRect = _body.getBoundingClientRect(),
             _elemRect = parent.document.querySelector("`+ _intObsEl +`").getBoundingClientRect(),
             _offset   = _elemRect.top - _bodyRect.top;
    
            if( !_modalWrapper.classList.contains("modal-ready")) return;
    
            if( state ){
                /* FREEZE */
                _body.style.setProperty("position","fixed","important");
                _body.style.setProperty("top","-" + _offset + "px");
            }else{
                /* unFREEZE */
                _body.style.setProperty("position","unset","important");
                window.scrollTo(0, Math.abs(parseInt(_offset || "0")));
            }
        }
    
    function _closeModal( event ){    
        if( event.target == _modalWrapper || event.target == _closeBtn || event == 1 ){
            freezeState(0);
            if(event == 1){
                _pushGA('{"event":"click","feature_name":"widget-recommendation","feature_location":"center","feature_position":"tutup","feature_index":"0","kanal_page":"`+_kanalPage+`","audience_content":"`+_audience+`","site_item":"`+_siteItem+`"}');
            }else{
                event.stopPropagation();
                if(event.target == _closeBtn ){
                    _pushGA('{"event":"click","feature_name":"widget-recommendation","feature_location":"center","feature_position":"bttn-close","feature_index":"0","kanal_page":"`+_kanalPage+`","audience_content":"`+_audience+`","site_item":"`+_siteItem+`"}');
                }else if(event.target == _modalWrapper){
                    _pushGA('{"event":"click","feature_name":"widget-recommendation","feature_location":"center","feature_position":"outer","feature_index":"0","kanal_page":"`+_kanalPage+`","audience_content":"`+_audience+`","site_item":"`+_siteItem+`"}');
                }
            }
              _modalWrapper.classList.remove("modal-ready");        
              _modalContent.classList.remove("modal-content-ready");
              window.removeEventListener("orientationchange", _orientationChange);
              setTimeout(function(){_modalWrapper.previousElementSibling.remove();_modalWrapper.remove();},320);
        }
    }
    
        function _pushGA(json){
            let jsonParse = JSON.parse(json);
            window.dataLayer.push(jsonParse);
            console.log('DATA LAYER',window.dataLayer);
        }
    
        function _orientationChange(){
            var _ios = [
                    "iPad Simulator",
                    "iPhone Simulator",
                    "iPod Simulator",
                    "iPad",
                    "iPhone",
                    "iPod"
                ].includes(navigator.platform)
                || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
                var _orientationScreenAPI = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    
        if(typeof _orientationScreenAPI !== "undefined"){
                    if(_orientationScreenAPI.match(/portrait/ig)){
                        _modalWrapper.style.setProperty("display","block");
                        freezeState(1);
                    }else if(_orientationScreenAPI.match(/landscape/ig)){
                        _modalWrapper.style.setProperty("display","none");
                    freezeState(0);
                    }
        }else{
                var _orientation = document.documentElement.clientWidth < document.documentElement.clientHeight ? 1 : 0;  
            _orientation = _ios ? ( ( navigator.userAgent.match(/(criOS)/ig) !== null) ?_orientation:!_orientation ) : ( ( navigator.userAgent.match(/(CPH1937)/ig) !== null) ?_orientation:!_orientation );
            
                if(_orientation){
                    _modalWrapper.style.setProperty("display","block");
                    freezeState(1);
                }else{
                    _modalWrapper.style.setProperty("display","none");
                    freezeState(0);
                }
            }
        }
    
        document.querySelectorAll(".feedboard-lp").forEach(item => {
            item.addEventListener("click", event => {
                console.log("test",JSON.parse(item.dataset.ga));
                _pushGA(item.dataset.ga);
            })
        });
        _modalBtn.addEventListener("click",_countSlideIndexes);
        _closeBtn.addEventListener("click",_closeModal);
        _modalWrapper.addEventListener("click",_closeModal);
        window.addEventListener("orientationchange", _orientationChange);	
    }
    `;
    
    let _template = `
      <div class="modal-content">
        <div class="modal-header">
          <span class="close-feedboard">&times;</span>
          <p>Artikel Rekomendasi untuk anda</p>
        </div>
        <div class="modal-body">
          <!-- LIST CONTENT -->
        </div>
        <div class="modal-footer">
          <a class="modal-btn" id="next" href="#" ripple="" ripple-color="#666666">
          <span class="next-word">Selanjutnya</span> <i class="next-arrow"></i>
          </a>
        </div>
      </div>
    `;
    
    
    let _templateElement = document.createElement("div");
    
    _templateElement.setAttribute("id", "modal-wrapper");
    _templateElement.setAttribute("class", "modal");    
    _templateElement.innerHTML = _template;
    _createTrackerImg();
    parent.document.querySelector("body").insertAdjacentElement("beforeend", _templateElement); /**  TEMPLATE */

    /** INTERSECTION OBSERVER  */
    let _optionsRec = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };
    let _adunitElementRec = parent.document.querySelector(_intObsEl);
    let _observerRec = null;
    var _generatedRec = 0;
    
    function _createTrackerImg(){
        let _impressionTracker = document.createElement("img");
        let _impTrackerUrl = "";
        if(_impTrackerUrl == "") return;
        _impressionTracker.setAttribute("id","feedboard-impression-tracker");
        _impressionTracker.width = "0";
        _impressionTracker.height = "0";
        _impressionTracker.setAttribute("src",_impTrackerUrl + "1205491201");
        parent.document.body.insertAdjacentElement("beforeend",_impressionTracker);
    }
      
    function _openParentModal() {
        const scrollY = `-${parent.window.scrollY}px`;
        const body = parent.document.body;
        let _styleElement = document.createElement("style");
        let _scriptElement = document.createElement("script");
        let _parentModalWrapper = parent.document.querySelector("#modal-wrapper");
        let _parentModalContent = parent.document.querySelector(".modal-content");
        
        _styleElement.textContent = _style;
        _scriptElement.innerHTML = _script;
        _templateElement.insertAdjacentElement("afterbegin", _styleElement);
        _templateElement.insertAdjacentElement("afterbegin", _scriptElement);
        
        parent.dataLayer.push({
            "event":"impression",
            "feature_name":"widget-recommendation",
            "feature_location":"center",
            "feature_position":"",
            "feature_index":"",
            "kanal_page":_kanalPage,
            "audience_content":_audience,
            "site_item":_siteItem
        });
        _parentModalWrapper.classList.add("modal-ready");
        _parentModalContent.classList.add("modal-content-ready");
    
        body.style.setProperty("position", "fixed", "important");
        body.style.setProperty("top", scrollY);
    }
    
    
    _observerRec = new IntersectionObserver(_entries => {
        _entries.forEach(entry => {
            if (entry.isIntersecting) {
                /* -- add recommendation popup script here -- */
                var _ios = [
                        "iPad Simulator",
                        "iPhone Simulator",
                        "iPod Simulator",
                        "iPad",
                        "iPhone",
                        "iPod"
                    ].includes(parent.navigator.platform)
                    /*iPad on iOS 13 detection*/
                    ||
                    (parent.navigator.userAgent.includes("Mac") && "ontouchend" in parent.document);
                var _orientationScreenAPI = (parent.screen.orientation || {}).type || parent.screen.mozOrientation || parent.screen.msOrientation;
                var _orientation = 1;
    
                if(typeof _orientationScreenAPI !== "undefined"){
                    if(_orientationScreenAPI.match(/portrait/ig)){
                        _orientation = 1;
                    }else if(_orientationScreenAPI.match(/landscape/ig)){
                        _orientation = 0;
                    }
                }else{
                         _orientation = parent.document.documentElement.clientWidth < parent.document.documentElement.clientHeight ? 1 : 0;
                        _orientation = parent.navigator.userAgent.match(/(CPH1937)/ig) ? !_orientation : _orientation;
                }
    
                console.log("Generated , Portrait :", _generatedRec, _orientation);
                if (!_generatedRec && _orientation) {
                    _openParentModal();
                    _generatedRec = 1;
                }
            }
        });
    }, _optionsRec);
    
    _observerRec.observe(_adunitElementRec);
    /**  */