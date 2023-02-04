/** 
 * GAM KLY V4.0 - m.bola.net
 * Prefix Detail :
 * fp : Floating Pin
 * sc : Showcase
 * exp : Exposer
 * hl : Headline
 * bf : Bottomframe
 * tf : Topframe
 * gfn : Global Function
 * prebid : Prebid 
 * Copyright 2023
 * Author: Ads Tech KLY
 * All Rights Reserved.
 */

var gptadslots = [];
var googletag = googletag || {};
var pbjs = pbjs || {};
var pageKlyObj = typeof window.kly !== 'undefined' ? window.kly : window.kmklabs;
pbjs.que = pbjs.que || [];
googletag.cmd = googletag.cmd || [];

window.GAMLibrary = {};
window.GAMLibrary = {
    gamHeadline: '/36504930/KLY/MOBILE/BOLA.NET/HEADLINE',
    gamBottomframe: '/36504930/KLY/MOBILE/BOLA.NET/BOTTOM_FRAME',
    gamFloatingPin: '/36504930/KLY/MOBILE/BOLA.NET/FLOATING_PIN',
    gamTopframe: '/36504930/KLY/MOBILE/BOLA.NET/MASTHEAD',
    gamExposer1: '/36504930/KLY/MOBILE/BOLA.NET/EXPOSER',
    gamSlideup: '/36504930/KLY/MOBILE/BOLA.NET/SLIDE_UP',
    gamShowcase: '/36504930/KLY/MOBILE/BOLA.NET/SHOWCASE',
    pageIsReadPage: (pageKlyObj.pageType && pageKlyObj.pageType.search(/(readpage)/ig)) > -1,
    pageTags: [""],
    pageArticleType: {
        "TextTypeArticle": {
            'scroll': 50
        },
        "VideoGallery": {
            'scroll': 50
        },
        "PhotoGallery": {
            'scroll': 0
        },
        "default": {
            'scroll': 50
        },
    },
    pageDocumentMeta: function(metaName) {
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
    gfnFilterString: function(str, delimiter) {
        return str.trim().split(delimiter).map(function(t) {
            return t.trim().toLowerCase()
        }).filter(x => x != "");
    },
    gfnOnDomContentLoaded: function() {
        this.tfInitSticky();
        this.insertPictureFirst();
        this.expInterscrollerStyle();
        visualViewport.addEventListener('resize', () => {
            this.tfSetDeviceOrientation = visualViewport.height > visualViewport.width ? true : false;
        });
        this.scFlyingCarpetStyle();
    },
    generatedScrollAdunit: 0, // Flags for balancing between headline, bottomframe and floating pin 
    pageBrandSafetyChecker: function() {
        var articlePages = pageKlyObj && pageKlyObj.article,
            isMatcont = "0",
            isViolateBrandSafety = "0",
            /** POPULATE META DATA */
            bsKeyword = [],
            pageTitle = articlePages && this.gfnFilterString(articlePages.title, ' '),
            pageTitles = (typeof pageTitle !== 'undefined') ? pageTitle : '',
            pageKeyword = this.pageDocumentMeta("keywords"),
            pageDesc = this.pageDocumentMeta("description"),
            pageTag = pageKlyObj.gtm.tag || pageKlyObj.tag && pageKlyObj.tag.name;

        this.pageTags = typeof pageTag === 'undefined' ? [] : this.gfnFilterString(pageTag.replace(/[^A-Za-z0-9|\- ]/ig, ""), "|");

        const BS_KEYWORD_LIST = {
            'adult': ['adegan erotis', 'adegan seks', 'aduhai', 'adult', 'affair', 'air mani', 'alat bantu seks', 'alat kelamin', 'alat kontrasepsi', 'alat vital pria', 'alergi', 'anal', 'anatomi vagina', 'anjeng', 'anjing', 'anjlng', 'anjrit', 'anus', 'anying', 'apa itu kondom', 'artis indonesia bugil', 'artis porno', 'ass', 'asu', 'ayam hitam', 'babi', 'bahaya masturbasi', 'bajingan', 'bandar ceme', 'bangsat', 'bdsm', 'bego', 'belahan', 'bentuk kelamin', 'bentuk payudara', 'bercinta', 'bercinta saat hamil', 'bergairah', 'berhubungan intim', 'berhubungan seks', 'berhubungan seksual', 'bersetubuh', 'bikini', 'bintang film porno', 'bintang porno', 'biseksual', 'bitch', 'bocah sd foto mesum', 'body shaming', 'bokne', 'bokong', 'bom surabaya 2018', 'boneka seks', 'boob', 'bra', 'bugil', 'bullshit', 'bulshit', 'bulu kemaluan', 'bunuh diri', 'cabul', 'cara berhubungan intim', 'cara membuat suami bergairah', 'cara memperbesar penis', 'cara mengatasi ejakulasi dini', 'cara seksual', 'celana', 'cemani', 'cemen', 'chat firza-rizieq', 'ciuman', 'cleavage', 'cock', 'cok', 'cukur bulu kemaluan', 'cum', 'dada', 'death', 'dewasa', 'di bawah umur', 'dick', 'dildo', 'diremas', 'disfungsi ereksi', 'doggie', 'doll', 'drunk', 'ejakulasi', 'ejakulasi dini', 'ejakulasi wanita', 'eksotik', 'elo', 'entot', 'ereksi', 'erotic', 'erotis', 'ewe', 'exotic', 'fakta seks', 'fase menstruasi', 'fenomena kelainan seksual', 'fetish', 'film porno', 'foreplay', 'foto berhubungan intim', 'foto intim', 'foto telanjang', 'fuck', 'gairah', 'gairah seks', 'gairah seksual', 'gangbang', 'gangguan jiwa', 'gangguan seks', 'ganguan jiwa', 'ganguan seksual', 'ganja', 'gay', 'gaya bercinta', 'gaya bercinta dalam islam', 'gaya bercinta yang disukai pria', 'gaya seks', 'gejala penyakit', 'gemar368', 'germo', 'goblok', 'gue', 'gwe', 'hardcore', 'hasrat seksual', 'henceut', 'hindu', 'hitam mafia', 'homoseks', 'horny', 'hot', 'hubungan', 'hubungan intim', 'hubungan seksual', 'ibu hamil', 'implan payudara', 'industri film porno', 'intim', 'itil', 'jancok', 'jancuk', 'jenis alat kontrasepsi', 'jerawat', 'jual beli sperma', 'kacau', 'kakek cabul', 'kamasutra', 'kanibal', 'kanibalisme', 'kanker payudara', 'kapalan', 'kasus asusila', 'kebencian', 'kecanduan seks', 'kehidupan seks', 'kekerasan seksual', 'kelainan seks', 'kelamin', 'kelamin wanita', 'kemaluan', 'kemaluan wanita', 'kencing', 'keperawanan', 'keriting', 'kesehatan kulit dan kelamin', 'kesehatan payudara', 'kesehatan penis', 'kesehatan reproduksi', 'kesehatan wanita', 'khusus deewasa', 'kimpet', 'kisah perselingkuhan', 'kiss', 'klitoris', 'komunitas swinger', 'kondom', 'kondom pria', 'kontol', 'kontolnya', 'kontrasepsi', 'kontroversi hukuman mati', 'kontroversi lgbt', 'kotor', 'kotoran', 'kristen', 'kumuh', 'kursi tantra seks', 'legalisasi ganja', 'lemari es', 'lendir', 'lesbian', 'lgbt', 'libido', 'lingerie', 'lolita', 'lonte', 'm3m3k', 'mabuk', 'mahasiswi', 'mainan dewasa', 'mainan perangsang gairah', 'makanan berbahaya', 'makanan sehat', 'masa subur pria', 'masturbasi', 'matcont', 'mature', 'meki', 'melakukan hubungan intim', 'memek', 'memerkosa', 'mencukur bulu kemaluan', 'menggairahkan', 'menggoda', 'mengupas', 'menstruasi', 'menyiangi', 'meraba-raba', 'mesra', 'mesum', 'mimpi seks', 'mimpi telanjang', 'miss-v', 'mitos seks', 'model hot', 'model seksi', 'monyet', 'mr-p', 'mucikari siswi smp', 'nakal', 'naked', 'naughty', 'ngentot', 'ngewe', 'nipple', 'nipples', 'nonok', 'nude', 'obat ejakulasi dini', 'obat kuat', 'obat pembesar', 'obat pembesar penis terbaik', 'onani', 'oral', 'oral seks', 'organ', 'organ intim wanita', 'orgasme', 'orgasme wanita', 'overdose', 'overdosis', 'paha', 'pakistan', 'pamer', 'pantat', 'panties', 'payudara', 'payudara kecil', 'payudara wanita', 'pelacur', 'pelecehan', 'pelecehan seksual', 'pembesar penis', 'pembunuh', 'pembunuhan', 'pemerkosaan', 'pemerkosaan anak', 'pemuda', 'pencabulan', 'penetrasi', 'penetratif', 'pengetahuan seks', 'pengobatan alternatif', 'penis', 'penis bengkok', 'penis besar', 'penis kecil', 'penis pria', 'penyakit sipilis', 'penyakit vagina', 'penyimpangan seks', 'perawan', 'perawatan vagina', 'perbudakan', 'perek', 'perguruan tinggi', 'perkosa', 'perkosaan', 'permen', 'perselingkuhan', 'piss', 'play boy', 'pole', 'porn', 'porno', 'pornoaksi', 'pornografi', 'posisi bercinta', 'posisi hubungan intim suami istri menurut islam', 'posisi seks', 'posisi seksual', 'pria dewasa', 'pria idaman', 'prostitusi', 'provokatif', 'pukang', 'puki', 'puting', 'puting payudara', 'putting', 'radikal', 'raksasa', 'rangsang payudara', 'ranjang', 'rasis', 'rasisme', 'razia pasangan mesum', 'rokok', 'rudapaksa', 'rumah bordil', 'sbobet', 'seks', 'seks bebas', 'seks dalam islam', 'seks dan agama', 'seks dan kriminal', 'seks dan pasutri', 'seks oral', 'seks pria dan wanita', 'seks toy', 'seksi', 'seksual', 'seksual lelaki dan perempuan', 'seksualitas', 'seksualitas pria', 'seksualitas wanita', 'semen', 'sensual', 'seronok', 'sex', 'sex toy', 'sexy', 'shit', 'siklus menstruasi', 'situs poker terpercaya', 'situs porno', 'skandal', 'sperma', 'stres dan depresi', 'strip', 'striptease', 'striptis', 'suicide', 'sundulan', 'swinger', 'syur', 'tai', 'taik', 'tamparan', 'tante seksi', 'taruhan online', 'telanjang', 'telentang', 'terangsang', 'teroris', 'terorisme', 'tes keperawanan', 'test pack', 'testis', 'tiduri', 'tips bercinta', 'tips seks', 'titik rangsang', 'titit', 'toket', 'tolol', 'topless', 'toys', 'ujian', 'ukuran normal penis', 'ukuran penis', 'ukuran penis normal', 'ukuran penis orang indonesia', 'ukuran vagina', 'vagina', 'vagina gatal', 'vagina wanita', 'vakum pembesar penis', 'viagra', 'vibrator', 'video bercinta dengan pasangan', 'video porno', 'video seks', 'virus corona', 'vital', 'wanita telanjang', 'waria', 'woman on top', 'xxx', 'xxxx online'],
            'war_politics': ['ahed tamimi', 'ahok gugat cerai veronica tan', 'aliran sesat', 'anarkis', 'anarkisme suporter sepakbola', 'begal motor', 'bentrok suporter', 'bentrokan', 'bentrokan warga', 'berita hoax', 'capres jokowi', 'capres prabowo', 'fanatik', 'fpi', 'g30s', 'invasi rusia', 'jemaah ansharut daulah', 'kebohongan ratna sarumpaet', 'kediktatoran arab saudi', 'kekerasan pada wartawan', 'killing', 'kisah mualaf', 'koalisi jokowi', 'koalisi pilpres 2019', 'koalisi prabowo', 'konflik palestina israel', 'konflik palestina-israel', 'konflik rusia ukraina', 'konflik suriah', 'lia eden', 'luwu timur', 'nato', 'penembakan', 'penganiayaan', 'pengawal', 'pengeroyokan', 'penistaan agama', 'perang', 'perang di ukraina', 'perang dunia', 'perang dunia 3', 'perang rusia', 'peristiwa', 'pilpres 2019', 'prabowo subianto', 'prabowo-sandiaga', 'presiden rusia', 'presiden ukraina', 'propaganda rusia', 'ratna sarumpaet', 'rokok elektrik', 'rusia', 'rusia dan ukraina', 'rusia serang ukraina', 'senjata rusia', 'serang ukraina', 'serangan', 'suporter tewas', 'taliban', 'ternyata hoax', 'ujaran kebencian', 'ukraina', 'vladimir putin'],
            'drugs_tobacco_alcohol': ['adiktif', 'akibat merokok', 'alcohol', 'alkohol', 'artis narkoba', 'asap rokok', 'bahaya berhenti merokok', 'bahaya merokok', 'bahaya narkoba', 'bahaya rokok', 'bahaya rokok elektrik', 'berhenti merokok', 'bnn', 'cancer', 'candy', 'cara berhenti merokok', 'cbd', 'ciri ciri pengguna narkoba', 'dampak merokok', 'djarum', 'drugs', 'efek berhenti merokok', 'ganja', 'hash', 'impotensi', 'jantung', 'jenis alkohol', 'jenis alkohol dalam minuman keras', 'jenis jenis narkoba', 'jenis narkotika', 'kanker', 'kartel narkoa', 'kasus narkoba', 'kecanduan', 'kesehatan paru', 'larangan merokok', 'mafia narkoba', 'manfaat berhenti merokok', 'merokok', 'minuman beralkohol', 'minuman keras', 'narkoba', 'narkoba artis', 'obat psikotropika', 'overdosis', 'pelanggaran', 'penyalahgunaan narkoba', 'penyeludupan narkoba', 'perokok', 'pot', 'pppa', 'rehabilitasi narkoba', 'remaja narkoba', 'rokok', 'rokok elektrik', 'ruu minuman beralkohol', 'sabu', 'selebriti narkoba', 'sidang narkoba', 'stroke', 'tablet', 'tembakau', 'tips berhenti merokok'],
            'disaster': ['10 macam pencemaran lingkungan', 'autopsi', 'bahaya pencemaran udara', 'bahaya polusi', 'belasungkawa', 'bencana', 'bencana besar', 'bom', 'bom atom', 'bom bali', 'bom bunuh diri', 'bom gereja', 'bom meledak', 'bom nuklir', 'bom panci', 'bom sarinah', 'bom seks', 'bunuh orang', 'cara mencegah global warming', 'cara mencegah pemanasan global', 'cara mengatasi pemanasan global', 'cara mengatasi pemanasan global sebagai pelajar', 'cara mengatasi pencemaran udara', 'climate change', 'contoh pencemaran lingkungan', 'dampak pencemaran lingkungan', 'dampak pencemaran udara', 'darurat bencana', 'dilaporkan tewas', 'dimakamkan', 'dinyatakan meninggal', 'dipastikan tewas', 'ditemukan mati', 'ditemukan tewas', 'efek rumah kaca', 'efek rumah kaca adalah', 'fenomena alam', 'gas rumah kaca', 'gempa donggala', 'gempa palu', 'gempa sulawesi tengah', 'global warming', 'global warming adalah', 'hilangkan nyawa', 'hilangnya nyawa', 'identitas korban', 'inalillahi', 'isis', 'jasad', 'jasad korban', 'jasadnya', 'jenasah wanita', 'jenazah', 'jenazah pria', 'jenazah teridentifikasi', 'jenis pencemaran lingkungan', 'kapal tenggelam', 'kapal tenggelam di danau toba', 'kasus penebangan pohon', 'kasus tabrak lari', 'keadaan kritis', 'kecelakaan', 'kecelakaan bus', 'kehilangan darah', 'kehilangan hidupnya', 'kehilangan nyawa', 'kehilangan nyawanya', 'kematian', 'korban', 'korban jiwa', 'korban meninggal', 'korban tewas', 'kota paling berpolusi', 'kota paling berpolusi didunia', 'krisis iklim', 'kualitas udara', 'ledakan bom', 'limbah', 'limbah pabrik', 'lion air hilang kontak', 'lion air jatuh', 'lion air jatuh di karawang', 'macam pencemaran lingkungan', 'mati', 'mayat', 'mayat korban', 'memakan nyawa', 'membunuh', 'membunuh istrinya', 'membunuh mereka', 'membunuh suaminya', 'menelan nyawa', 'menemui ajal', 'menewaskan', 'menewaskan orang', 'mengalami koma', 'mengancam nyawa', 'menghembuskan nafas terakhir', 'menimbulkan korban', 'meninggal', 'meninggal akibat sakit', 'meninggal dunia', 'menyebabkan kematian', 'meregang nyawa', 'meregggut nyawa', 'merenggut jiwa', 'merenggut nyawa', 'modar', 'nyawa hilang', 'nyawa melayang', 'nyawa tak tertolong', 'orang mati', 'orang tewas', 'pelayat', 'pemakaman', 'pemanasan global', 'pemanasan global adalah', 'pembunuhan', 'pembunuhan sadis', 'pencemaran', 'pencemaran air', 'pencemaran air bersih', 'pencemaran air laut', 'pencemaran limbah', 'pencemaran lingkungan', 'pencemaran minyak', 'pencemaran sungai', 'pencemaran sungai brantas', 'pencemaran udara', 'penemuan mayat', 'pengertian efek rumah kaca', 'pengertian efek rumah kaca menurut para ahli', 'pengertian pemanasan global', 'penyakit polusi udara', 'penyakit yang disebabkan oleh polusi udara', 'penyebab efek rumah kaca', 'penyebab global warming', 'penyebab kematian', 'penyebab kerusakan lingkungan', 'penyebab pemanasan global', 'penyebab pemanasan global akibat aktivitas manusia', 'penyebab pencemaran air', 'penyebab pencemaran udara', 'penyebab perubahan iklim', 'penyebab perubahan iklim global', 'penyebab polusi udara', 'penyebab terjadinya efek rumah kaca', 'penyebab terjadinya pemanasan global', 'penyebab terjadinya pemanasan global dan efek rumah kaca', 'perubahan iklim', 'perubahan iklim global', 'pesawat hilang kontak', 'pesawat jatuh', 'petugas penyelamat', 'pollution', 'polusi', 'polusi jakarta', 'polusi udara', 'polusi udara di jakarta', 'polutan', 'renggut nyawa', 'sampah plastik', 'tak bernyawa', 'tak sadarkan diri', 'telah meninggal', 'telan nyawa', 'terbunuh', 'terkapar', 'teror bom', 'tewas', 'tewaskan', 'tidak bernyawa', 'tim penyelamat', 'tsunami palu', 'tutup usia', 'udara bersih', 'udara jakarta', 'wafat', 'wanita meninggal'],
            'epidemic_desease': ['corona', 'corona di indonesia', 'covid', 'covid 19', 'covid-19', 'doctor', 'dokter', 'health', 'healthy', 'hospital', 'infeksi saluran kencing', 'insomnia dan tidur', 'kematian', 'kematian virus', 'kematian wabah', 'kesehatan', 'korban terinfeksi', 'korona', 'obesitas', 'odp', 'osteoporosis', 'pdp', 'penyakit', 'positif korona', 'rsud', 'rumah sakit', 'sakit pernapasan', 'sehat', 'sesak', 'terinfeksi virus corona', 'terjangkit covid-19', 'terkena', 'virus', 'virus corona', 'virus korona', 'virus menyerang', 'virus-corona', 'wabah', 'wabah corona'],
            'religion': ['15lam', 'abu bakar al-baghdadi', 'al quran', 'al-quran', 'buda', 'budha', 'ibrahim al-hashimi al-qurayshi,', 'injil', 'isl4m', 'islam', 'ismi aisyah', 'jimat', 'kafir', 'katolik', 'muh4mmad', 'muhammad', 'muhammad saw', 'nabi', 'yesus'],
            'gambling': ['agen poker', 'agen sbobet', 'bonus deposit', 'bonus refferal', 'bonus rollingan', 'cashtree', 'judi', 'minimal deposit', 'poker', 'poker online'],
            'parenting': ['anak', 'anak artis', 'anak cerdas', 'anak dan balita', 'anak mandiri', 'anak selebritis', 'anak selebritis indonesia', 'arti nama anak', 'arti nama bayi', 'artis bercerai', 'artis hamil', 'asi anak', 'ayah', 'baby', 'baby ameena', 'baby arsy', 'baby bump', 'baby bump artis', 'baby dan balita', 'baby face', 'baby gempi', 'baby leslar', 'baby shower', 'baby shower selebritis', 'baby sitter', 'baby spa', 'baby walker', 'babymoon', 'babymoon artis', 'babyologist', 'baru lahir', 'bayi', 'bayi 6 bulan', 'bayi artis', 'bayi dan anak', 'bayi kembar', 'bayi muntah', 'bayi pilek', 'bayi seleb', 'bayi selebritis', 'bayi selebritis indonesia', 'bayi tabung', 'camilan bayi', 'cara mengeluarkan dahak pada bayi', 'child', 'children', 'family', 'father', 'gaya baby', 'ibu', 'ibu anak', 'induk', 'jadwal makan bayi', 'jam tidur bayi', 'kehamilan', 'keibuan', 'kelahiran anak', 'kelahiran bayi', 'keluarga', 'keluarga artis', 'keluarga bahagia', 'keluarga dan anak', 'keluarga harmonis', 'keluarga penjabat', 'keluarga seleb', 'kesehatan bayi', 'kesehatan bayi dan balita', 'kesehatan keluarga', 'kid', 'masalah anak', 'mendidik anak', 'menyusui', 'mother', 'mpasi', 'nama anak', 'nama anak islam', 'nama anak kristen', 'nama anak laki laki', 'nama anak perempuan', 'nama anak sansekerta', 'nama bayi', 'nama bayi islam', 'nama bayi kristen', 'nama bayi laki laki', 'nama bayi laki laki unik', 'nama bayi perempuan', 'nama bayi perempuan unik', 'nama bayi sansekerta', 'newborn', 'orang tua', 'parent', 'parenting', 'pendidikan', 'penyakit bayi', 'penyebab bayi muntah', 'perawatan bayi', 'perceraian artis', 'perkembangan janin', 'perlengkapan bayi', 'pertumbuhan anak', 'pijat bayi', 'remaja', 'resep mpasi', 'school', 'sekolah', 'spa baby', 'tips parenting', 'ucapan kelahiran', 'youth']
        };

        /*change this acording to the site page layout*/
        var siteContentObject = document.getElementsByClassName("detail-body");
        var siteContentText = "";

        if (siteContentObject.length) {
            siteContentText = siteContentObject[0].innerText;

            /*removing BACA JUGA box since it unrelated with main content*/
            /*change this acording to the site page layout*/
            var bacaJugaElements = siteContentObject[0].getElementsByClassName("detail__terkait");
            for (var i in bacaJugaElements) {
                bacajuga = bacaJugaElements[i].innerText;
                siteContentText = siteContentText.replace(bacajuga, '');
            }
        }
        siteContentText = pageKeyword.concat(pageTitles, ' ', pageDesc, ' ', this.pageTags, ' ', siteContentText);

        /*Iterate for all keyword list category to find match word*/
        for (var bsKey in BS_KEYWORD_LIST) {
            var subKeywordList = BS_KEYWORD_LIST[bsKey];
            if (subKeywordList.length > 0) {
                if (matchString = new RegExp("\\b(" + subKeywordList.join("|") + ")\\b", "ig").exec(siteContentText)) {
                    bsKeyword.push(bsKey);
                }
            }
        }

        if (bsKeyword.length > 0) {
            googletag.pubads().setTargeting("bsKeyword", bsKeyword);
            /*Temporary preserve the previous brand safety targeting*/
            googletag.pubads().setTargeting("isMatcont", isMatcont);
            googletag.pubads().setTargeting("brandsafety", isViolateBrandSafety);
        }
    },
    onMessageReceivedGPTUpdateCreativeStyle: function() {
        this.onMessageReceivedGetStyle = function(e) {
            /** filter only correct origin and setStyle command */
            if (!(e.origin.match(/safeframe.googlesyndication.com/ig)) ||
                typeof e.data !== 'object' ||
                typeof e.data.id !== 'string' ||
                e.data.cmd !== 'setStyle' ||
                typeof e.data.params !== 'object'
            ) {
                return;
            }

            /* remove # character from id, we don't use jquery*/
            var elementId = e.data.id.replace(/#/, "");

            var wrapperEl = document.getElementById(elementId);
            if (wrapperEl === null) {
                return;
            }

            var elements = [wrapperEl];
            /*target on KLY authorized element child ( div and iframe ) */
            if (typeof e.data.query === 'string' && e.data.query) {
                let el = null;
                if (el = e.data.query.match(/(div|iframe)/ig)) {
                    elements = wrapperEl.querySelectorAll(el.join(", "));
                }
            }

            /** target on KLY authorized attribute ( display, heigth, width ) */
            elements.forEach(function(element) {
                Object.keys(e.data.params).forEach(function(param) {
                    let allowedAttr = ['display', 'height', 'width'];
                    allowedAttr.indexOf(param) > -1 ? (element.style[param] = e.data.params[param]) : '';
                });
            });

        }
        if (window.addEventListener) {
            window.addEventListener('message', this.onMessageReceivedGetStyle, false);
        } else {
            if (window.attachEvent) {
                window.attachEvent('onmessage', this.onMessageReceivedGetStyle);
            } else {
                window.onmessage = this.onMessageReceivedGetStyle;
            }
        }
    },
    insertPictureFirst: function() {
        var pictureFirstElement = document.createElement("div")
        pictureFirstElement.setAttribute("id", "div-gpt-ad-bola-picturefirst")
        pictureFirstElement.setAttribute("data-info", "ad")

        var pictureFirstScriptElement = document.createElement("script")
        pictureFirstScriptElement.textContent = `googletag.cmd.push(function() { googletag.display('div-gpt-ad-bola-picturefirst'); });`
        pictureFirstElement.appendChild(pictureFirstScriptElement)

        var pictureFirstTargetElement = (kly.pageType.toLowerCase() != 'readpage') ? document.getElementById("main_mid_lastest") : document.querySelector(".box-tag");
        if (pictureFirstTargetElement) {
            pictureFirstTargetElement.parentElement.insertBefore(pictureFirstElement, pictureFirstTargetElement.nextElementSibling)
        };

        this.consoleLog({
            'text': 'insertPictureFirst IN this.gfnOnDomContentLoaded',
            'variable': []
        });
    },
    createDMPTracker: function(adsCatList, dfpTracker, macro) {
        var cName = 'ahoy_visitor=',
            cVisitorId = document.cookie.split(';').find(v => {
                return v.match(cName);
            }),
            partnerUID = cVisitorId ? decodeURIComponent(cVisitorId).trim().replace(cName, '') : 0,
            gamMacro = typeof macro === "string" ? JSON.parse(macro) : macro,
            defaultKey = {
                adunitId: "ads_adunit_id",
                advertiserId: "ads_advertiser_id",
                creativeId: "ads_creative_id",
                lineitemId: "ads_lineitem_id",
                orderId: "ads_order_id",
            };
        actionDetails = Object.keys(gamMacro).reduce((obj, k) => Object.assign(obj, defaultKey[k] ? {
                [defaultKey[k]]: gamMacro[k]
            } : {
                [k]: gamMacro[k]
            }), {}),
            cdpData = {
                action: actionDetails.action ? actionDetails.action : 'ads_click',
                action_category: adsCatList,
                action_details: actionDetails.action ? (delete actionDetails.action, actionDetails = actionDetails) : actionDetails,
                visitor_id: partnerUID
            };
        (actionDetails.action == 'ads_click') ? (partnerUID ? window.AhoyEvent.sendPersonalizationUserEvent(cdpData) : '') : '';
        window.open(dfpTracker, '_blank');
    },
    /** ============ PREBID ============ */
    prebidNewAdunit: {},
    prebidIsRendered: new Map([
        ["div-gpt-ad-bola-sc", false],
        ["div-gpt-ad-bola-dfp-exposer-slot1-oop", false],
    ]),
    set renderedStatus(adunit) {
        if (!this.prebidIsRendered.has(adunit)) {
            this.prebidIsRendered.set(adunit, false);
        } else {
            this.prebidIsRendered[adunit] = true;
        }
    },
    get renderedStatus() {
        return this.prebidIsRendered;
    },
    get prebidDisplay() {
        return [{
            code: "div-gpt-ad-bola-sc",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250],
                        [250, 250],
                        [200, 200],
                    ],
                },
            },
            bids: [{
                bidder: "innity",
                params: {
                    zone: 97841,
                    pub: 539
                }
            }, {
                bidder: "teads",
                params: {
                    pageId: 151772,
                    placementId: 167811
                }
            }, {
                bidder: "pubmatic",
                params: {
                    publisherId: '156536',
                    adSlot: 'Prebid-Bolanet-Mobile-300x250',
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: 12534,
                    siteId: 377462,
                    zoneId: 2082392
                }
            }, {
                bidder: 'unruly',
                params: {
                    siteId: 243584
                }
            }, {
                bidder: 'medianet',
                params: {
                    cid: '8CUWX4UX4',
                    crid: '576550861'
                }
            }, {
                bidder: 'smartadserver',
                params: {
                    domain: 'https://prg-apac.smartadserver.com',
                    networkId: 4221,
                    siteId: 498330,
                    pageId: 1556522,
                    formatId: 111310
                }
            }, {
                bidder: "openx",
                params: {
                    delDomain: "emtek-d.openx.net",
                    unit: "556894055"
                }
            }, {
                bidder: "oftmedia",
                params: {
                    placementId: "27497187"
                }
            }, {
                bidder: "yahoossp",
                params: {
                    dcn: '8a969d80018383b1b722c66620e1024f',
                    pos: '8a96908c018383b1ce9ac6665fe00248'
                }
            }, {
                bidder: "taboola",
                params: {
                    tagId: 'showcase_homepage_1',
                    publisherId: '1501401',
                }
            }, {
                bidder: "triplelift",
                params: {
                    inventoryCode: 'Bola-net_Mobile_300x250_Pubmatic'
                }
            }, ],
        }, {
            code: "div-gpt-ad-bola-hl",
            mediaTypes: {
                banner: {
                    sizes: [
                        [320, 50],
                        [320, 100],
                    ],
                },
            },
            bids: [{
                bidder: "innity",
                params: {
                    zone: 97840,
                    pub: 539
                }
            }, {
                bidder: "pubmatic",
                params: {
                    publisherId: '156536',
                    adSlot: 'Prebid-Bolanet-Mobile-320x50_1'
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: 12534,
                    siteId: 377462,
                    zoneId: 2082392
                }
            }, {
                bidder: 'medianet',
                params: {
                    cid: '8CUWX4UX4',
                    crid: '888142531'
                }
            }, {
                bidder: 'smartadserver',
                params: {
                    domain: 'https://prg-apac.smartadserver.com',
                    networkId: 4221,
                    siteId: 498330,
                    pageId: 1556522,
                    formatId: 111312
                }
            }, {
                bidder: "openx",
                params: {
                    delDomain: "emtek-d.openx.net",
                    unit: "556894068"
                }
            }, {
                bidder: 'ix',
                params: {
                    siteId: '802738'
                }
            }, {
                bidder: "teads",
                params: {
                    pageId: 153497,
                    placementId: 167809
                }
            }, {
                bidder: "oftmedia",
                params: {
                    placementId: "27497186"
                }
            }, {
                bidder: "yahoossp",
                params: {
                    dcn: '8a969d80018383b1b722c66620e1024f',
                    pos: '8a969d80018383b1b722c666d6050251'
                }
            }, {
                bidder: "taboola",
                params: {
                    tagId: 'headline_homepage_1',
                    publisherId: '1501401',
                }
            }, {
                bidder: "triplelift",
                params: {
                    inventoryCode: 'Bola-net_HDX_Pubmatic'
                }
            }, ],
        }, {
            code: "div-gpt-ad-bola-bottomfrm",
            mediaTypes: {
                banner: {
                    sizes: [
                        [320, 50],
                        [320, 100],
                    ],
                },
            },
            bids: [{
                bidder: "innity",
                params: {
                    zone: 97842,
                    pub: 539
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: 12534,
                    siteId: 377462,
                    zoneId: 2082392
                }
            }, {
                bidder: 'medianet',
                params: {
                    cid: '8CUWX4UX4',
                    crid: '986414413'
                }
            }, {
                bidder: 'smartadserver',
                params: {
                    domain: 'https://prg-apac.smartadserver.com',
                    networkId: 4221,
                    siteId: 498330,
                    pageId: 1556522,
                    formatId: 111312
                }
            }, {
                bidder: "openx",
                params: {
                    delDomain: "emtek-d.openx.net",
                    unit: "556894064"
                }
            }, {
                bidder: 'ix',
                params: {
                    siteId: '802749'
                }
            }, {
                bidder: "teads",
                params: {
                    pageId: 151772,
                    placementId: 167811
                }
            }, {
                bidder: "oftmedia",
                params: {
                    placementId: "27497188"
                }
            }, {
                bidder: "yahoossp",
                params: {
                    dcn: '8a969d80018383b1b722c66620e1024f',
                    pos: '8a9695bc018383b1c995c6672692025e'
                }
            }, {
                bidder: "taboola",
                params: {
                    tagId: 'bottomfrm_homepage_1',
                    publisherId: '1501401',
                }
            }, {
                bidder: "triplelift",
                params: {
                    inventoryCode: 'Bola-net_HDX_Pubmatic'
                }
            }, ],
        }, {
            code: "div-gpt-ad-bola-dfp-exposer-slot1-oop",
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
            },
            bids: [{
                bidder: "innity",
                params: {
                    zone: 97843,
                    pub: 539
                }
            }, {
                bidder: "teads",
                params: {
                    pageId: 153497,
                    placementId: 167809
                }
            }, {
                bidder: "pubmatic",
                params: {
                    publisherId: '156536',
                    adSlot: 'Prebid-Bolanet-Mobile-300x600'
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: 12534,
                    siteId: 377462,
                    zoneId: 2082392
                }
            }, {
                bidder: 'unruly',
                params: {
                    siteId: 243584
                }
            }, {
                bidder: 'medianet',
                params: {
                    cid: '8CUWX4UX4',
                    crid: '123558562'
                }
            }, {
                bidder: 'smartadserver',
                params: {
                    domain: 'https://prg-apac.smartadserver.com',
                    networkId: 4221,
                    siteId: 498330,
                    pageId: 1556522,
                    formatId: 111311
                }
            }, {
                bidder: "openx",
                params: {
                    delDomain: "emtek-d.openx.net",
                    unit: "556894066"
                }
            }, {
                bidder: 'ix',
                params: {
                    siteId: '802748'
                }
            }, {
                bidder: "oftmedia",
                params: {
                    placementId: "27497189"
                }
            }, {
                bidder: "yahoossp",
                params: {
                    dcn: '8a969d80018383b1b722c66620e1024f',
                    pos: '8a96908c018383b1ce9ac66698bf024a'
                }
            }, {
                bidder: "taboola",
                params: {
                    tagId: 'exposer_homepage_1',
                    publisherId: '1501401',
                }
            }, {
                bidder: "triplelift",
                params: {
                    inventoryCode: 'Bola-net_Mobile_300x250_Pubmatic'
                }
            }, ],
        }, ];
    },
    get prebidVideo() {
        const SPOTX_OUTSTREAM_FUNCTION = function(bid) {
            var bMobile = function() {
                var check = false;
                (function(a) {
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                            a
                        ) ||
                        /1207|6310|6590|3gso|4thp|50[1 6]i|770s|802s|a wa|abac|ac(er|oo|s\ )|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\ m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\ (n|u)|c55\/|capi|ccwa|cdm\ |cell|chtm|cldc|cmd\ |co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\ s|devi|dica|dmob|do(c|p)o|ds(12|\ d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4 7]0|os|wa|ze)|fetc|fly(\ |_)|g1 u|g560|gene|gf\ 5|g\ mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\ (m|p|t)|hei\ |hi(pt|ta)|hp( i|ip)|hs\ c|ht(c(\ | |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\ (20|go|ma)|i230|iac( |\ |\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\ |kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\ [a w])|libw|lynx|m1\ w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\ cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\ | |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0 2]|n20[2 3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\ |on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\ ([1 8]|c))|phil|pire|pl(ay|uc)|pn\ 2|po(ck|rt|se)|prox|psio|pt\ g|qa\ a|qc(07|12|21|32|60|\ [2 7]|i\ )|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\ |oo|p\ )|sdk\/|se(c(\ |0|1)|47|mc|nd|ri)|sgh\ |shar|sie(\ |m)|sk\ 0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\ |v\ |v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\ |tdg\ |tel(i|m)|tim\ |t\ mo|to(pl|sh)|ts(70|m\ |m3|m5)|tx\ 9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0 3]|\ v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\ | )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\ |your|zeto|zte\ /i.test(
                            a.substr(0, 4)
                        ))
                        check = true;
                })(navigator.userAgent || navigator.vendor || window.opera);
                return check;
            };

            if (bMobile()) {
                var playerWidth = 300;
                var playerHeight = 169;
            } else {
                var playerWidth = 640;
                var playerHeight = 360;
            }

            const videoDiv = bid.adUnitCode;
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
        return [{
            code: "div-gpt-ad-bola-sc",
            mediaTypes: {
                video: {
                    playerSize: [640, 360],
                    context: "outstream",
                    protocols: [2, 3, 5, 6, 7],
                    api: [2, 3, 7],
                    minduration: 4,
                    maxduration: 30,
                    mimes: ["video/mp4", "video/x-ms-wmv", "application/javascript", "video/3gpp", "application/x-mpegURL", "video/quicktime", "video/x-msvideo", "video/x-flv", "video/webm"],
                    placement: 3
                },
            },
            bids: [{
                bidder: "spotx",
                params: {
                    channel_id: 285432,
                    ad_unit: "outstream",
                    outstream_function: SPOTX_OUTSTREAM_FUNCTION
                }
            }, ],
        }, {
            code: "div-gpt-ad-bola-hl",
            mediaTypes: {
                video: {
                    playerSize: [640, 360],
                    context: "outstream",
                    protocols: [2, 3, 5, 6, 7],
                    api: [2, 3, 7],
                    minduration: 4,
                    maxduration: 30,
                    mimes: ["video/mp4", "video/x-ms-wmv", "application/javascript", "video/3gpp", "application/x-mpegURL", "video/quicktime", "video/x-msvideo", "video/x-flv", "video/webm"],
                    placement: 3
                },
            },
            bids: [{
                bidder: "spotx",
                params: {
                    channel_id: 285432,
                    ad_unit: "outstream",
                    outstream_function: SPOTX_OUTSTREAM_FUNCTION
                }
            }, {
                bidder: 'ix',
                params: {
                    siteId: '802738'
                }
            }, ],
        }, {
            code: "div-gpt-ad-bola-bottomfrm",
            mediaTypes: {
                video: {
                    playerSize: [640, 360],
                    context: "outstream",
                    protocols: [2, 3, 5, 6, 7],
                    api: [2, 3, 7],
                    minduration: 4,
                    maxduration: 30,
                    mimes: ["video/mp4", "video/x-ms-wmv", "application/javascript", "video/3gpp", "application/x-mpegURL", "video/quicktime", "video/x-msvideo", "video/x-flv", "video/webm"],
                    placement: 3
                },
            },
            bids: [{
                bidder: "spotx",
                params: {
                    channel_id: 285432,
                    ad_unit: "outstream",
                    outstream_function: SPOTX_OUTSTREAM_FUNCTION
                }
            }, {
                bidder: 'pubmatic',
                params: {
                    publisherId: "156536",
                    videoAdUnit: "4045169",
                    adSlot: "kly_prebid_outstream_mobile_bola_net",
                    outstreamAU: "kly_prebid_outstream_mobile_bola_net",
                    video: {
                        skippable: true,
                        playbackmethod: [2],
                        context: "outstream",
                        api: [2, 7],
                        minduration: 5,
                        maxduration: 30,
                        mimes: ["video/mp4", "video/x-ms-wmv", "application/javascript", "video/3gpp", "application/x-mpegURL", "video/quicktime", "video/x-msvideo", "video/x-flv", "video/webm"],
                        placement: 3
                    }
                }
            }, ],
        }, {
            code: "div-gpt-ad-bola-dfp-exposer-slot1-oop",
            mediaTypes: {
                video: {
                    playerSize: [640, 360],
                    context: "outstream",
                    protocols: [2, 3, 5, 6, 7],
                    api: [2, 3, 7],
                    minduration: 4,
                    maxduration: 30,
                    mimes: ["video/mp4", "video/x-ms-wmv", "application/javascript", "video/3gpp", "application/x-mpegURL", "video/quicktime", "video/x-msvideo", "video/x-flv", "video/webm"],
                    placement: 3
                },
            },
            bids: [{
                bidder: "spotx",
                params: {
                    channel_id: 285432,
                    ad_unit: "outstream",
                    outstream_function: SPOTX_OUTSTREAM_FUNCTION
                }
            }, {
                bidder: 'ix',
                params: {
                    siteId: '802748'
                }
            }, ],
        }, ];

    },
    set prebidAdunit(gamParams) {
        /** default adunit object */
        var newPrebidAdunit = {
            'display': {
                'obj': this.prebidDisplay,
                'definedSlot': [this.definedSc, this.exposer1],
                'containerName': ['div-gpt-ad-bola-sc', 'div-gpt-ad-bola-dfp-exposer-slot1-oop'], // to set rendered status
            },
            'video': {
                'obj': this.prebidVideo,
                'definedSlot': [this.definedSc, this.exposer1],
                'containerName': ['div-gpt-ad-bola-sc', 'div-gpt-ad-bola-dfp-exposer-slot1-oop'], // to set rendered status
            },
        };

        /** 
         * default : using `newPrebidAdunit` as default adunit object 
         * other request : using `gamParams` as adunit parameters
         */
        for (var [key, values] of Object.entries(newPrebidAdunit)) {
            var containerName = !gamParams.containerName.length ? values.containerName : gamParams.containerName;

            values.obj = values.obj.map((ob) => {
                containerName.map(function(el) {
                    /** filter showcase in paging */
                    if (el && el.replace(/\-\d$/ig, '').match(`${ob.code}`)) {
                        ob.code = el;
                    }
                });
                if (containerName.indexOf(`${ob.code}`) > -1) {
                    return ob;
                }
            }).filter(function(element) {
                return element !== undefined;
            });

            values.definedSlot = !gamParams.containerName.length ? values.definedSlot : gamParams.definedSlot;
            values.containerName = !gamParams.containerName.length ? values.containerName : gamParams.containerName;
        }

        this.prebidNewAdunit = newPrebidAdunit;

        this.consoleLog({
            'text': "PARAMS & FILTERED PREBID ADUNIT ( DISPLAY & VIDEO ): ",
            'variable': [gamParams, this.prebidNewAdunit]
        });

    },
    get prebidAdUnit() {
        return this.prebidNewAdunit;
    },
    prebidInitAdserver: function() {
        var displayAdUnitCodes = [];
        this.prebidAdUnit.display.obj.forEach(function(adUnit) {
            displayAdUnitCodes.push(adUnit.code);
        });
        googletag.cmd.push(function() {
            pbjs.que.push(function() {
                pbjs.setTargetingForGPTAsync(displayAdUnitCodes);
                googletag.pubads().refresh(this.prebidAdUnit.display.definedSlot);
            }.bind(this));
        }.bind(this));
    },
    prebidInstantiate: function(params) {
        const PRICE_GRANULARITY_CONFIG = {
            buckets: [{
                precision: 2,
                min: 0.02,
                max: 2.99,
                increment: 0.01
            }, {
                precision: 2,
                min: 3,
                max: 10,
                increment: 0.1
            }, ],
        };
        const TIMEOUT = 1000;
        const FS_TIMEOUT = 3000;
        /** 
         *  params = {
         *      containerName: 'xxx',
         *      definedSlot: [xxx,xxx,xxx],  
         *  }
         */
        this.prebidAdunit = params;

        pbjs.bidderSettings = {
            taboola: {
                storageAllowed: true
            }
        }
        var initAdserver = this.prebidInitAdserver.bind(this);

        pbjs.que.push(() => {
            pbjs.addAdUnits(this.prebidAdUnit.display.obj);
            pbjs.addAdUnits(this.prebidAdUnit.video.obj);
            pbjs.setConfig({
                priceGranularity: PRICE_GRANULARITY_CONFIG,
                enableSendAllBids: true,
                cache: {
                    url: 'https://prebid.adnxs.com/pbc/v1/cache'
                },
                // bidderTimeout: 2000,
            });
            pbjs.requestBids({
                bidsBackHandler: initAdserver,
                timeout: TIMEOUT,
            });
        });

        setTimeout(function() {
            initAdserver;
        }.bind(this), FS_TIMEOUT);
    },
    /** ============ PREBID ============ */

    /** ============ BOTTOM FRAME ============ */
    bfDefinedAdunit: null,
    set definedBf(definedAdunit) {
        this.bfDefinedAdunit = definedAdunit;
    },
    get definedBf() {
        return this.bfDefinedAdunit;
    },
    bfSetInterval: function(active = true) {
        if (!active) {
            clearInterval(this.gamBFInterval);
            return;
        }
        this.gamBFInterval = setInterval(function() {
            document.querySelector("#dfp-bframe-cont").style.display = "block";
            document.querySelector("#dfp-spinads") && document.querySelector("#dfp-spinads").parentElement.remove();
            /** Init prebid  */
            this.prebidInstantiate({
                containerName: ['div-gpt-ad-bola-bottomfrm'],
                definedSlot: [this.refreshSlot]
            });
            typeof SPAFreezeBody == 'function' ? SPAFreezeBody(false) : '';
        }.bind(this), 60000);
    },
    bfSetButtonClose: function() {
        let buttonCloseBframeClick = document.createElement("a");
        buttonCloseBframeClick.setAttribute("href", "#");
        buttonCloseBframeClick.setAttribute("id", "dfp-bframe-close");
        buttonCloseBframeClick.setAttribute("onclick", "document.getElementById('dfp-bframe-cont').style.display='none'; return false;");
        buttonCloseBframeClick.setAttribute("style", "width: 20px; position: absolute; margin-left: 150px; top: -15px; z-index: 999999;");
        let buttonCloseBframeImg = document.createElement("img");
        buttonCloseBframeImg.setAttribute("src", "https://cdns.klimg.com/d.kapanlaginetwork.com/banner/preview/2019/08/20/close.png");
        buttonCloseBframeImg.setAttribute("style", "width: 20px; border: none;");
        buttonCloseBframeClick.appendChild(buttonCloseBframeImg);
        let checkBframeContainer = setInterval(function() {
            if (document.querySelector("#dfp-bframe-cont") !== null) {
                document.querySelector("#dfp-bframe-cont").style.textAlign = "center";
                document.querySelector("#dfp-bframe-cont").insertAdjacentElement("afterBegin", buttonCloseBframeClick);
                clearInterval(checkBframeContainer);
            }
        }, 500);
    },
    bfOnScroll: function() {
        this.scroll = function() {
            var scrollNode = document.scrollingElement || document.documentElement;
            var scrollTop = scrollNode.scrollTop;
            var pageType = pageKlyObj.gtm.type == '' ? 'default' : pageKlyObj.gtm.type;

            if (scrollTop >= this.pageArticleType[pageType].scroll) {
                if (!this.definedBf) {
                    this.definedBf = googletag.defineSlot(this.gamBottomframe, [
                        [320, 50],
                        [320, 100]
                    ], 'div-gpt-ad-bola-bottomfrm').addService(googletag.pubads());

                    /** Init prebid  */
                    this.prebidInstantiate({
                        containerName: ['div-gpt-ad-bola-bottomfrm'],
                        definedSlot: [this.definedBf]
                    })

                    this.refreshSlot = this.definedBf;
                    this.bfSetInterval();
                    this.bfSetButtonClose();
                } else {
                    window.removeEventListener("scroll", this.scrollHandler);
                }
            }
        };
        this.scrollHandler = this.scroll.bind(this);
        window.addEventListener("scroll", this.scrollHandler);
    },
    /** ============ BOTTOM FRAME ============ */

    /** ============ FLOATING PIN ============ */
    fpDefinedAdunit: null, // Floating Pin Defined Object
    fpOnScroll: function() {
        this.scroll = function() {
            var scrollNode = document.scrollingElement || document.documentElement;
            var scrollTop = scrollNode.scrollTop;
            var pageType = kly.gtm.type == '' ? 'default' : kly.gtm.type;
            if (scrollTop >= this.pageArticleType[pageType].scroll) {
                if (!this.fpDefinedAdunit) {
                    this.fpDefinedAdunit = googletag.defineSlot(this.gamFloatingPin, [
                        [1, 1],
                        ['fluid']
                    ], 'div-gpt-ad-bola-floating-pin').addService(googletag.pubads());
                    googletag.pubads().refresh([this.fpDefinedAdunit]);
                } else {
                    window.removeEventListener("scroll", this.scrollHandler);
                }
            }
        };
        this.scrollHandler = this.scroll.bind(this);
        window.addEventListener("scroll", this.scrollHandler);
    },
    /** ============ FLOATING PIN ============ */

    /** ============ SHOWCASE ============ */
    scDefinedAdunit: null,
    set definedSc(definedAdunit) {
        this.scDefinedAdunit = definedAdunit;
    },
    get definedSc() {
        return this.scDefinedAdunit;
    },
    scInPaging: function() {
        var countFinder = 0;
        var findPlaceholder = setInterval(function() {
            var placeholderElement = document.querySelectorAll("#div-gpt-ad-sc-paging-placeholder");

            if (placeholderElement) {
                const OPTIONS = {
                    rootMargin: '50px 0px 55%'
                };
                placeholderElement.forEach((placeholder, index) => {
                    let containerID = "div-gpt-ad-bola-sc-" + (index + 1);
                    let containerSCArticle = document.createElement('div');
                    containerSCArticle.setAttribute("id", containerID);
                    containerSCArticle.setAttribute('class', 'article-ad');
                    placeholder.insertAdjacentElement("beforeEnd", containerSCArticle);
                })
                const OBSERVER = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        const intersecting = entry.isIntersecting;
                        if (entry.isIntersecting) {
                            if (this.definedSc = googletag.defineSlot('/36504930/KLY/MOBILE/BOLA.NET/SHOWCASE', [
                                    [300, 600],
                                    [300, 250],
                                    [250, 250],
                                    [200, 200]
                                ], entry.target.id)) {
                                this.definedSc.addService(googletag.pubads());
                                /** Init prebid  */
                                this.prebidInstantiate({
                                    containerName: [entry.target.id],
                                    definedSlot: [this.definedSc],
                                });
                            }

                            OBSERVER.unobserve(entry.target)
                        }
                    })
                }, OPTIONS)
                document.querySelectorAll("div[id^='div-gpt-ad-bola-sc-']").forEach(function(el, idx) {
                    OBSERVER.observe(el);
                });

                clearInterval(findPlaceholder);
            }
            if (countFinder > 10) {
                clearInterval(findPlaceholder);
            }
            countFinder++;
        }.bind(this), 300);
    },
    scFlyingCarpetEffect: function(event) {
        var _domId_ = event.slot.getSlotId().getDomId();

        var _domTarget_ = document.getElementById(_domId_)
        var _is300x600_ = JSON.stringify(event.size) == '[300,600]'
        if (_is300x600_ && _domId_.includes("sc")) {
            _domTarget_.classList.add("flying-carpet")
            _domTarget_.querySelector("div").classList.add("ad-content")
        }
    },
    scFlyingCarpetStyle: function() {
        var flyingCarpetStyle = document.createElement("style");
        flyingCarpetStyle.textContent = `.advertisement-placeholder div[id*="bola-sc"].flying-carpet{ position: relative; clear: both; overflow: hidden; clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%) !important; min-height: 270px; width: 100%; display: flex; justify-content: center; } .advertisement-placeholder div[id*="bola-sc"].flying-carpet .ad-content { top: 50%; transform: translateY(-50%); position: fixed; z-index: 2; } div#div-gpt-ad-sc-placeholder { min-width: 320px; }`;
        document.querySelector("body").appendChild(flyingCarpetStyle);

        this.consoleLog({
            'text': 'scFlyingCarpetStyle IN this.gfnOnDomContentLoaded',
            'variable': []
        });
    },
    /** ============ SHOWCASE ============ */

    /** ============ EXPOSER ============ */
    expInterscroller: function(event) {
        var _domId_ = event.slot.getSlotId().getDomId();
        var _domTarget_ = document.getElementById(_domId_)
        var _is300x250_ = JSON.stringify(event.size) == '[300,250]'
        if (_is300x250_ && _domId_.includes("exposer")) {
            _domTarget_.classList.add("interscroller");

            if (_domTarget_.parentElement.id.includes("placeholder")) {
                _domTarget_.parentElement.classList.add("interscroller-wrapper");
            }
        }
    },
    expInterscrollerStyle: function() {
        var interscrollerStyle = document.createElement("style");
        interscrollerStyle.textContent = "body{overflow: unset;} .interscroller-wrapper{display: block !important;} .interscroller{position: sticky !important; top: 160px;}";
        document.head.appendChild(interscrollerStyle);
        document.querySelector("body").appendChild(interscrollerStyle);
        this.consoleLog({
            'text': 'expInterscrollerStyle IN this.gfnOnDomContentLoaded',
            'variable': []
        });
    },
    /** ============ EXPOSER ============ */

    /** ============ HEADLINE ============ */
    hlDefinedAdunit: null,
    hlIsSticky: false,
    hlStickyIsPaused: false,
    hlStickyCounterStatus: false,
    hlStickyInterval: 7,
    get hlDecreamentStickyInterval() {
        this.hlStickyInterval--;
    },
    set hlSetStickyInterval(intr) {
        this.hlStickyInterval = intr;
    },
    get hlGetStickyInterval() {
        return this.hlStickyInterval;
    },
    hlInitiate: function() {
        let isTFShrinking = null;
        let catchHLContainer = 0;
        let hlStickyStyle = document.createElement("style");

        /** Set Sticky Headline Style */
        hlStickyStyle.textContent = "\n\t\t.hl-active-sticky {\n\t\t\tposition: fixed;\n\t\t\ttop: -100%;\n\t\t\tz-index: 9999;\n\t\t\tleft: 50%;\n\t\t\ttransform: translateX(-50%);\n\t\t\tmargin: 0;\n\t\t\ttransition : margin-top .5s ease;\n\t\t\tanimation: hlSlideDown .5s forwards;\n\t\t}\n\n\t\t.hl-navbar-hanging{\n\t\t\tmargin-top : 5px !important;\n\t\t}\n\n\t\t@keyframes hlSlideDown{\n\t\t\t0%{top : -100px;}\n\t\t\t100%{top : 0px;}\n\t\t}\n\t\t.headline_ad__box {display: flex;justify-content: center;align-items: center;}\n\t\t#div-gpt-ad-bola-hl iframe {max-width: 100vw;}";
        document.head.appendChild(hlStickyStyle)

        /** Check If Headline container already exists */
        let hlContainerCheck = setInterval(function() {
            catchHLContainer += 1;
            if (document.getElementById("div-gpt-ad-bola-hl") !== null) {
                isTFShrinking = setInterval(function() {
                    /** inject headline after receive after sticky end  */
                    if (this.tfStickyIsEnd) {
                        this.hlInjectElement();
                        clearInterval(isTFShrinking);
                    }
                }.bind(this), 300);
                clearInterval(hlContainerCheck);
            } else {
                if (catchHLContainer === 30) { // stop searching if it's reach 30
                    clearInterval(hlContainerCheck);
                }
            }
        }.bind(this), 500);
    },
    hlInjectElement: function() {
        let headlineSlotContainer = document.querySelector("#div-gpt-ad-bola-hl");
        this.hlBindScrollEvent = this.hlStickyScrollEvent.bind(this);

        /** Set headline element sticky on event scroll */
        window.addEventListener("scroll", this.hlBindScrollEvent)

        /** Set sticky and render headline when top position <= screen height  on first page load */
        if ((headlineSlotContainer.getClientRects() && ~~headlineSlotContainer.getClientRects()[0].top) <= (window.screen.height - 50)) {
            this.hlRender;
            /** Wait until adunit object defined and iframe container exists */
            let waitForHlContainer = setInterval(function() {
                if (document.getElementById("div-gpt-ad-bola-hl").firstElementChild !== null) {
                    this.hlBindScrollEvent();
                    clearInterval(waitForHlContainer);
                }
            }.bind(this), 100)

        }

    },
    get hlRender() {
        if (!this.hlDefinedAdunit) {
            this.hlDefinedAdunit = googletag.defineSlot(GAMLibrary.gamHeadline, [
                [320, 50],
                [320, 100]
            ], 'div-gpt-ad-bola-hl').addService(googletag.pubads());
            /** Init prebid  */
            this.prebidInstantiate({
                containerName: ['div-gpt-ad-bola-hl'],
                definedSlot: [this.hlDefinedAdunit],
            });
        }
        return this.hlDefinedAdunit;
    },
    hlStickyScrollEvent: function() {
        var hlFirstChild = document.getElementById("div-gpt-ad-bola-hl").firstElementChild,
            hlContainerTop = document.getElementById("div-gpt-ad-bola-hl").getBoundingClientRect().top;

        this.hlRender

        if (this.hlIsSticky) {
            if (0 >= hlContainerTop) {
                hlFirstChild.classList.add("hl-navbar-hanging")
                this.hlStickyIsPaused = false
            } else {
                hlFirstChild.classList.remove("hl-active-sticky")
                hlFirstChild.classList.remove("hl-navbar-hanging")
                this.hlStickyIsPaused = true
                this.hlIsSticky = false
            }
        } else {
            if (0 >= hlContainerTop) {
                if (hlFirstChild !== null) {
                    hlFirstChild.classList.add("hl-active-sticky");
                    if (!this.hlStickyCounterStatus) {
                        this.hlStickyCounterStatus = true;
                        this.hlUnsetSticky(hlFirstChild, false);
                    }
                    this.hlIsSticky = true
                }
            }
        }

        this.consoleLog({
            'text': 'this.hlIsSticky | hlStickyCounterStatus | this.hlGetStickyInterval | hlContainerTop | hlFirstChild',
            'variable': [this.hlIsSticky, this.hlStickyCounterStatus, this.hlGetStickyInterval, hlContainerTop, hlFirstChild],
        });

    },
    hlUnsetSticky: function(hlChild, hlForceClose) {
        let interval = 7;
        let urlParams = new URLSearchParams(window.location.search);
        this.hlSetStickyInterval = (interval = JSON.parse(urlParams.get('interval'))) == null ? 7 : interval;
        var stickyInterval = setInterval(function() {
            if (!this.hlStickyIsPaused) {
                if (0 >= this.hlGetStickyInterval) {
                    hlChild.classList.remove("hl-active-sticky");
                    hlChild.classList.remove("hl-navbar-hanging");
                    hlChild.style.margin = "10px 0";
                    window.removeEventListener("scroll", this.hlBindScrollEvent)
                    clearInterval(stickyInterval);

                } else {
                    this.hlDecreamentStickyInterval;
                }
            }
        }.bind(this), 1e3);

        if (!this.hlStickyIsPaused && hlForceClose) {
            clearInterval(stickyInterval);
            hlChild.classList.remove("hl-active-sticky");
            hlChild.classList.remove("hl-navbar-hanging");
        }
    },
    /** ============ HEADLINE ============ */

    /** ============= MASTHEAD ============= */
    tfIsFixedSized: 1, // Topframe Flags between OOP and Fixed size 
    tfAdsVisible: {
        "topframe": false,
        "topframeClassTweak": false,
        "topframeScrollBackToTop": false,
    },
    tfParentBodyTarget: null,
    tfParentWrapper: null,
    tfWrapper: null,
    tfSticky: false,
    tfStickyIsEnd: false,
    tfStickyLastScroll: 0,
    tfStickyLastScrollEnd: 0,
    tfStickyScrollSpeed: 10,
    tfStickyCountDownV2: 0,
    tfStickyTimer: 7,
    tfStickyIsReady: false,
    tfStickyAdunitTarget: "#div-gpt-ad-bola-topfrm-oop",
    tfStickyType: null,
    tfIsTurnOff: false,
    tfDeviceOrientation: window.matchMedia("(orientation: portrait)").matches,
    tfStickyCustomStyleElement: document.createElement("style"),
    /* TOPFRAME SHIRNKING */
    tfChildElement: [],
    tfPageNavbar: null,
    tfPageMain: null,
    /**
     * @param {boolean} ori
     */
    set tfSetDeviceOrientation(ori) {
        this.tfDeviceOrientation = ori;
    },
    get tfGetDeviceOrientation() {
        return this.tfDeviceOrientation;
    },
    get tfDecreamentStickyTimer() {
        this.tfStickyTimer--;
    },
    get tfIncreamentStickyCountDownV2() {
        this.tfStickyCountDownV2++;
    },
    get tfIsSticky() {
        return this.tfSticky;
    },
    set tfIsSticky(value) {
        this.tfSticky = value;
    },
    /*To get all method and property inside GAMLibrary always bind 'this' object to all events*/
    tfInitSticky: function() {
        this.tfGetTargets();
        this.tfParentWrapper = document.querySelector("#div-gpt-ad-topfrm-parallax-wrapper");
        this.tfWrapper = document.querySelector("#div-gpt-ad-topfrm-parallax-wrapper");
        this.tfParentBodyTarget.style = '';
        this.tfBindStickyScroll = this.tfStickyScroll.bind(this);
        document.addEventListener("scroll", this.tfBindStickyScroll);
        window.addEventListener("orientationchange", this.tfOrientationChange.bind(this));
        this.tfStickyIsReady = true;
        this.consoleLog({
            'text': 'tfInitSticky IN this.gfnOnDomContentLoaded',
            'variable': []
        });

    },
    tfOrientationChange: function() {
        if (!this.tfGetDeviceOrientation) {
            return;
        }
        this.tfIsTurnOff = true;
        this.tfUnsetSticky();
    },
    tfGetTargets: function() {
        let parentType1 = document.querySelector(".a2");
        let parentType2 = document.querySelector(".main");
        let childs = document.querySelectorAll(".rm01");
        let customContainer = document.createElement('div');

        childs && childs.forEach(el => {
            if (el.parentElement.tagName == 'BODY') {
                this.tfChildElement.push(el);
                if (el.nextElementSibling.classList.length == 0) {
                    this.tfChildElement.push(el.nextElementSibling);
                }
            }
        });
        if (parentType1) {
            this.tfPageNavbar = document.querySelector("#main_top");
            if (this.tfPageNavbar) {
                customContainer.classList.add('ads-container');
                this.tfPageNavbar.insertAdjacentElement('beforebegin', customContainer);
                this.tfPageMain = parentType1;
            }
        } else if (parentType2) {
            this.tfPageNavbar = document.querySelector(".header");
            if (this.tfPageNavbar) {
                customContainer.classList.add('a2');
                this.tfPageNavbar.insertAdjacentElement('beforebegin', customContainer);
            }
        } else {
            this.tfPageNavbar = document.querySelector("#main_top");
            if (this.tfPageNavbar) {
                customContainer.classList.add('a2');
                this.tfPageNavbar.insertAdjacentElement('beforebegin', customContainer);
            }
        }
        this.tfParentBodyTarget = customContainer;
    },
    tfStickyScroll: function() {
        var scrollTop = document.documentElement.scrollTop;
        if (scrollTop >= 0 && "v7" == this.tfStickyType) {
            if (this.tfIsSticky) {
                this.tfStickyTweak();
                this.tfStickyStyle();

                this.tfIsSticky = false;
                this.tfParentWrapper.classList.add("sticky");
                this.tfWrapper.classList.add("sticky");

                this.tfStickyCountDown();
                /* tfBindStickyScroll is bind method from tfStickyScroll */
                document.removeEventListener("scroll", this.tfBindStickyScroll);
                this.tfParentBodyTarget.classList.add("topframe_is_sticky");
            }
        }

        if (!this.tfStickyIsEnd) {
            this.tfStickyLastScrollEnd = this.tfStickyLastScroll + (scrollTop / (this.tfStickyScrollSpeed / 4));
            document.querySelector('.topframe_is_sticky') && (document.querySelector('.topframe_is_sticky').style.transform = 'translateY(' + -(this.tfStickyLastScrollEnd) + 'px)');
        }
    },
    tfUnsetSticky: function() {

        document.removeEventListener("scroll", this.tfBindStickyScroll);

        this.tfStickyIsEnd = true;
        this.tfStickyCustomStyleElement.remove();
        if (this.tfParentWrapper !== null) {
            this.tfParentWrapper.classList.remove("sticky");
        }
        if (this.tfWrapper !== null) {
            this.tfWrapper.classList.remove("sticky");
        }

        this.tfParentBodyTarget.classList.remove("topframe_is_sticky");

        setTimeout(function() {
            document.querySelector("body").style = '';
            this.tfParentBodyTarget.style = '';
            if (this.tfParentWrapper !== null) {
                this.tfParentWrapper.style = '';
            }
            /*document.documentElement.scrollTo(0, this.tfStickyLastScrollEnd);*/
        }.bind(this), 200);
    },
    tfStickyCountDown: function() {
        this.tfStickyLastScroll = document.documentElement.scrollTop;
        var tfStickyCounter = document.querySelector(".topframe-sticky-counter");
        var countdown = setInterval(function() {

            tfStickyCounter.textContent = 'Penawaran sponsor berakhir setelah ( ' + this.tfStickyTimer + ' )';
            if (this.tfStickyTimer <= 0 || this.tfIsTurnOff) {
                this.tfParentWrapper.style.top = '-100vh';
                this.tfParentWrapper.style.transition = 'top .5s ease';

                setTimeout(function() {
                    this.tfUnsetSticky();
                }.bind(this), 700);
                clearInterval(countdown);
                tfStickyCounter.remove();
            }
            this.tfDecreamentStickyTimer;
        }.bind(this), 1000);
    },
    tfStickyStyle: function() {
        var parElement = document.createElement("p");
        parElement.classList.add("topframe-sticky-counter");
        parElement.textContent = "Penawaran sponsor berakhir setelah (7)";
        this.tfParentWrapper.appendChild(parElement)
        var bodyClientHeight = document.querySelector("body").clientHeight;
        this.tfStickyCustomStyleElement.textContent = `
  body {
  height: ${(bodyClientHeight * 20)}px;
  scroll-behavior: smooth;
  width: 100vw
  }
  
  .topframe_is_sticky::before {
  content: "";
  position: relative;
  height: 110.41666666666667vw !important;
  display: block;
  }
  
  .topframe_is_sticky {
  position: fixed;
  top: 0px;
  left: 0px;
  transition: all 1s ease;
  width: 100vw;
  }
  
  .layout__ads {
  transition: all 1s ease;
  }
  
  .topframe-sticky-counter {
  display: none;
  }
  
  .layout__ads.sticky {
  position: fixed;
  z-index: 99;
  height: calc(100vw *(267 / 414) + 25px);
  }
  
  #div-gpt-ad-topfrm-parallax-wrapper.sticky::after,
  #div-gpt-ad-topfrm-parallax-wrapper.sticky::before {
  position: absolute;
  height: 25px;
  width: 100vw;
  left: 0;
  }
  
  #div-gpt-ad-topfrm-parallax-wrapper.sticky::after {
  content: "";
  top: calc(100vw *(267 / 414));
  background: #0072FF;
  z-index: 100;
  animation: progress-bar 7s forwards linear;
  }
  
  #div-gpt-ad-topfrm-parallax-wrapper.sticky::before {
  content: "";
  top: calc(100vw *(267 / 414));
  background: #212121;
  z-index: 99;
  }
  
  .sticky .topframe-sticky-counter {
  display: block;
  top: calc((100vw *(267 / 414)) + 8px);
  color: #fff;
  line-height: 14px;
  z-index: 101;
  -webkit-animation: webkit-progress-count 7s forwards linear;
  animation: progress-count 7s forwards linear;
  width: 100%;
  margin: 0px;
  position: absolute;
  text-align: center;
  font-family: sans-serif;
  }
  
  div#div-gpt-ad-topfrm-parallax-wrapper,
  div#div-gpt-ad-topfrm-parallax-wrapper.sticky #div-gpt-ad-bola-topfrm-oop iframe {
  transition: all .3s ease;
  }
  
  div#div-gpt-ad-topfrm-parallax-wrapper.sticky {
  height: calc(100vw *(267 / 414)) !important;
  position: fixed !important;
  top: 0px;
  z-index: 9;
  }
  
  div#div-gpt-ad-topfrm-parallax-wrapper.sticky #div-gpt-ad-bola-topfrm-oop iframe {
  transform: scale(.55);
  top: calc((-110.41666666666667vw * .42) / 2) !important;
  }
  
  @keyframes progress-bar {
  from {
    width: 0px;
  }
  to {
    width: 100vw;
  }
  }body {
  height: ' + (bodyClientHeight * 20) + 'px;
  scroll-behavior: smooth;
  width: 100vw
  }
  
  .topframe_is_sticky::before {
  content: "";
  position: relative;
  height: 110.41666666666667vw !important;
  display: block;
  }
  
  .topframe_is_sticky {
  position: fixed;
  top: 0px;
  left: 0px;
  transition: all 1s ease;
  width: 100vw;
  }
  
  .layout__ads {
  transition: all 1s ease;
  }
  
  .topframe-sticky-counter {
  display: none;
  }
  
  .layout__ads.sticky {
  position: fixed;
  z-index: 99;
  height: calc(100vw *(267 / 414) + 25px);
  }
  
  #div-gpt-ad-topfrm-parallax-wrapper.sticky::after,
  #div-gpt-ad-topfrm-parallax-wrapper.sticky::before {
  position: absolute;
  height: 25px;
  width: 100vw;
  left: 0;
  }
  
  #div-gpt-ad-topfrm-parallax-wrapper.sticky::after {
  content: "";
  top: calc(100vw *(267 / 414));
  background: #0072FF;
  z-index: 100;
  animation: progress-bar 7s forwards linear;
  }
  
  #div-gpt-ad-topfrm-parallax-wrapper.sticky::before {
  content: "";
  top: calc(100vw *(267 / 414));
  background: #212121;
  z-index: 99;
  }
  
  .sticky .topframe-sticky-counter {
  display: block;
  top: calc((100vw *(267 / 414)) + 8px);
  color: #fff;
  line-height: 14px;
  z-index: 101;
  -webkit-animation: webkit-progress-count 7s forwards linear;
  animation: progress-count 7s forwards linear;
  width: 100%;
  margin: 0px;
  position: absolute;
  text-align: center;
  font-family: sans-serif;
  }
  
  div#div-gpt-ad-topfrm-parallax-wrapper,
  div#div-gpt-ad-topfrm-parallax-wrapper.sticky #div-gpt-ad-bola-topfrm-oop iframe {
  transition: all .3s ease;
  }
  
  div#div-gpt-ad-topfrm-parallax-wrapper.sticky {
  height: calc(100vw *(267 / 414)) !important;
  position: fixed !important;
  top: 0px;
  z-index: 9;
  }
  
  div#div-gpt-ad-topfrm-parallax-wrapper.sticky #div-gpt-ad-bola-topfrm-oop iframe {
  transform: scale(.55);
  top: calc((-110.41666666666667vw * .42) / 2) !important;
  }
  
  @keyframes progress-bar {
  from {
    width: 0px;
  }
  to {
    width: 100vw;
  }
  }
  `;
        this.tfParentBodyTarget.appendChild(this.tfStickyCustomStyleElement);
    },
    tfStickyTweak: function() {
        this.tfPageMain && this.tfParentBodyTarget.insertAdjacentElement('afterbegin', this.tfPageMain);
        this.tfParentBodyTarget.insertAdjacentElement('afterbegin', this.tfPageNavbar);
        if (this.tfChildElement.length > 0) {
            this.tfChildElement.forEach(el => {
                this.tfParentBodyTarget.lastChild.insertAdjacentElement('afterend', el);
            })
        }
        setTimeout(() => {
            googletag.pubads().refresh([window.GAMLibrary.headline, window.GAMLibrary.showcase, window.GAMLibrary.exposer1]);
        }, 500);
    },
    /** START SHRINKING V8 */
    tfSetStickyV2Scroll: function() {
        if (this.tfStickyType != "v8") {
            window.removeEventListener("scroll", this.tfBindSetStickyV2Scroll)
            return
        }
        var scrollTop = window.document.scrollingElement.scrollTop || window.document.documentElement.scrollTop
        if (scrollTop == 0 && this.tfAdsVisible.topframeClassTweak) {
            this.tfAdsVisible.topframeScrollBackToTop = true
        }

        if ((document.documentElement.scrollTop > (document.querySelector(this.tfStickyAdunitTarget).clientHeight / 3)) && !this.tfAdsVisible.topframeClassTweak && this.tfIsSticky && !this.tfStickyIsEnd) {
            this.tfSetStickyStyleV2()
            this.tfAdsVisible.topframeClassTweak = true;
            this.tfSetSticky()
        }

    },
    tfSetSticky: function() {
        if (document.querySelector(".topframe-sticky-counter")) {
            document.querySelector(".topframe-sticky-counter").remove()
        }

        document.querySelector(this.tfStickyAdunitTarget).classList.add("puller")
        document.querySelector(this.tfStickyAdunitTarget).style = "position : fixed !important;top : -60px !important;"

        if (this.tfStickyIsEnd) {
            document.querySelector(this.tfStickyAdunitTarget).style.opacity = 0;
            return;
        }

        var tfStickyCountDownInt = setInterval(function() {
            if (this.tfStickyCountDownV2 >= 75 || this.tfAdsVisible.topframeScrollBackToTop && !this.tfStickyIsEnd) {
                clearInterval(tfStickyCountDownInt)
                this.tfAdsVisible.topframe = true
                this.tfStickyIsEnd = true
                this.tfStickyUnsetV2()
            }
            this.tfIncreamentStickyCountDownV2;
        }.bind(this), 100);

    },
    tfStickyUnsetV2: function() {
        document.querySelector(this.tfStickyAdunitTarget).classList.remove("puller")
        document.querySelector(this.tfStickyAdunitTarget).style.setProperty("position", "relative", "important");
        document.querySelector(this.tfStickyAdunitTarget).style.setProperty("top", "");
        document.querySelector(this.tfStickyAdunitTarget).style.opacity = 1;
        window.removeEventListener("scroll", this.tfSetStickyV2Scroll.bind(this))
    },
    tfSetStickyStyleV2: function() {
        this.tfStickyCustomStyleElement.textContent = `div${this.tfStickyAdunitTarget}.puller { position: fixed !important; z-index: 999; transform: scale(.55) translateX(38%); border-radius: 20px; overflow: hidden; } div${this.tfStickyAdunitTarget}.puller::after { content: ""; position: absolute; height: 5px; width: 100%; background: yellow; left: 0; animation: tf-puller-loading 7s forwards; } @keyframes tf-puller-loading { 0% { width: 0px } 100% { width: 100% } }`
        document.querySelector(this.tfStickyAdunitTarget).appendChild(this.tfStickyCustomStyleElement)
    },
    /** END SHRINKING V8 */
    /** ============= MASTHEAD ============= */

    /** ============ GPT EVENT LISTENER ============ */
    counterAhoy: 0,
    get increamentCounterAhoy() {
        this.counterAhoy++;
    },
    gamSlotVisibilityChange: function(event) {
        let slot = event.slot,
            vrslotName = slot.getSlotElementId();

        // topframe shirnking tweak
        if (vrslotName.includes("topfrm") && event.inViewPercentage >= 70) {
            if (this.tfStickyTimer > 2 && !this.tfAdsVisible.topframe && document.querySelector(".topframe-sticky-counter")) {
                this.tfStickyTimer = 4
                this.tfAdsVisible.topframe = true
            }
        }
        // topframe shirnking tweak

        if (slot === this.hlDefinedAdunit) {
            if (event.inViewPercentage > 80 && !this.generatedScrollAdunit) {
                /*Bottom Frame Scrolling*/
                this.bfOnScroll();

                /*Floating Pin Scrolling*/
                this.fpOnScroll();

                this.generatedScrollAdunit = 1;
            }
        }
    },
    gamSlotOnLoad: function(event) {
        var gamSlotDelivered = event.slot.getResponseInformation() ? 'block' : 'none'; /* check wheter there is ads or not*/

        if (gamSlotDelivered == 'block') {
            cdpData = {
                action: 'ads_impression',
                action_details: {
                    slotElementId: event.slot.getSlotElementId(),
                    ResponseInformation: event.slot.getResponseInformation(),
                    sizes: event.slot.getSizes(),
                    adunitPath: event.slot.getAdUnitPath(),
                    outOfPage: event.slot.getOutOfPage()
                }
            };

            let ahoyInterval = setInterval(function(e) {
                if (window.AhoyEvent && typeof window.AhoyEvent.sendPersonalizationUserEvent === 'function') {
                    try {
                        this.consoleLog({
                            'text': 'AHOY SAVED',
                            'variable': [cdpData]
                        });
                        window.AhoyEvent.sendPersonalizationUserEvent(cdpData);
                        clearInterval(ahoyInterval);
                    } catch (error) {
                        this.consoleLog({
                            'text': 'AHOY FAILED! : ' + error,
                            'variable': []
                        });
                        clearInterval(ahoyInterval);
                    }
                }
                if (this.counterAhoy > 30) {
                    clearInterval(ahoyInterval)
                }
                this.increamentCounterAhoy;
            }.bind(this), 100);
        }
    },
    gamSlotRenderEnded: function(event) {
        this.expInterscroller(event);
        this.scFlyingCarpetEffect(event);

        var containerId = event.slot.getSlotElementId();
        var containerEl = document.getElementById(containerId);

        // TOPFRAME SHRINKING V8
        if (containerId.includes("topfrm") && !this.tfAdsVisible.topframe) {
            this.tfBindSetStickyV2Scroll = this.tfSetStickyV2Scroll.bind(this);
            window.addEventListener("scroll", this.tfBindSetStickyV2Scroll)
            setTimeout(function() {
                if (!this.tfIsSticky) {
                    window.removeEventListener("scroll", this.tfBindSetStickyV2Scroll)
                    this.tfStickyIsEnd = true
                }
            }.bind(this), 2000);
        }
        // END TOPFRAME SHRINKING V8

        if (containerEl === null) return;

        var iframeEl = containerEl.querySelectorAll('iframe')[0];

        /* it's delayed by 10 milliseconds, because iframe is not yet fully rendered
        and limited to max to 10 seconds to wait*/
        var timeoutFunction = function() {
            var src = "#" + containerId;
            /* `src` attribute is null, when iframe is FriendlyIframe, and
            when it's present, then it's SafeFrame */
            if (iframeEl) {
                if ((iframeEl.getAttribute('src') !== null)) {
                    src = iframeEl.getAttribute('src').replace(/#.*/, "") + src;
                } else {
                    var name = iframeEl.getAttribute('name') + "#" + containerId;
                    iframeEl.setAttribute('name', name);
                }
                iframeEl.setAttribute('src', src);
            }
        };
        setTimeout(timeoutFunction, 10);
    },
    /** ============ GPT EVENT LISTENER ============ */
    /** ============ TOOLS ============ */
    /** 
     * `showConsole` Logger for debuging
     * cookie key : gamlibLogger
     * cookie value : `true` ( display all gamlib console log ), `false` ( turn off all gamlib console log )
     * */
    pageLogger: {},
    set consoleToggle(stat) {
        document.cookie = `gamlibLogger=${stat}`;
    },
    /* Set console format msg : { text: Text, variable: Array } */
    set showConsole(msg) {
        this.pageLogger = msg;
    },
    /* Get console */
    get showConsole() {
        var getLog = document.cookie.split("gamlibLogger")[1] ? document.cookie.split("gamlibLogger")[1] : ';';
        var loggerCookies = getLog.split(';')[0].match(/(true)/ig) !== null ? true : false;
        if (loggerCookies) {
            console.log(this.pageLogger.text, this.pageLogger.variable);
        }
    },
    consoleLog: function(msg) {
        /* CONSOLE BLOCK */
        this.showConsole = msg;
        this.showConsole;
        /* CONSOLE BLOCK */
    },
    /** ============ TOOLS ============ */
    setGamBFInterval: function() {
        return;
    },
}

googletag.cmd.push(function() {
    var documentURL = document.URL;

    /*SET NEW BRAND SAFETY LOGIC*/
    GAMLibrary.pageBrandSafetyChecker();

    /*OUT OF PAGE SLOTS*/
    if (GAMLibrary.tfIsFixedSized) {
        window.GAMLibrary.topframe = googletag.defineSlot(GAMLibrary.gamTopframe, [1, 1], 'div-gpt-ad-bola-topfrm-oop').addService(googletag.pubads());
    } else {
        window.GAMLibrary.topframe = googletag.defineOutOfPageSlot(GAMLibrary.gamTopframe, 'div-gpt-ad-bola-topfrm-oop').addService(googletag.pubads());
    }

    /** INITIATE HEADLINE STICKY */
    GAMLibrary.hlInitiate();
    /** INITIATE HEADLINE STICKY */

    window.GAMLibrary.overlay = googletag.defineOutOfPageSlot(GAMLibrary.gamSlideup, 'div-gpt-ad-dfp-overlay-oop').addService(googletag.pubads());
    window.GAMLibrary.crmHeadline = googletag.defineOutOfPageSlot('/36504930/KLY/MOBILE/BOLA.NET/HEADLINE_CRM', 'div-gpt-ad-bola-crm-headline-oop').addService(googletag.pubads());
    window.GAMLibrary.crmOrganic1 = googletag.defineOutOfPageSlot('/36504930/KLY/MOBILE/BOLA.NET/ORGANIC_FEED_CRM_1', 'div-gpt-ad-bola-crm1-oop').addService(googletag.pubads());
    window.GAMLibrary.crmOrganic2 = googletag.defineOutOfPageSlot('/36504930/KLY/MOBILE/BOLA.NET/ORGANIC_FEED_CRM_2', 'div-gpt-ad-bola-crm2-oop').addService(googletag.pubads());
    window.GAMLibrary.crmOrganic3 = googletag.defineOutOfPageSlot('/36504930/KLY/MOBILE/BOLA.NET/ORGANIC_FEED_CRM_3', 'div-gpt-ad-bola-crm3-oop').addService(googletag.pubads());
    window.GAMLibrary.pictureFirst = googletag.defineOutOfPageSlot('/36504930/KLY/MOBILE/BOLA.NET/CONTENT_CAROUSEL', 'div-gpt-ad-bola-picturefirst').addService(googletag.pubads());

    window.GAMLibrary.definedSc = googletag.defineSlot(GAMLibrary.gamShowcase, [
        [300, 600],
        [300, 250],
        [250, 250],
        [200, 200]
    ], 'div-gpt-ad-bola-sc').addService(googletag.pubads());
    window.GAMLibrary.exposer1 = googletag.defineSlot(GAMLibrary.gamExposer1, [
        [300, 250],
        [300, 600],
        [320, 480],
        [160, 600],
        [250, 250]
    ], 'div-gpt-ad-bola-dfp-exposer-slot1-oop').addService(googletag.pubads());

    if (GAMLibrary.pageIsReadPage) {
        window.GAMLibrary.insertion = googletag.defineOutOfPageSlot('/36504930/KLY/MOBILE/BOLA.NET/INSERTION', 'div-gpt-ad-bola-insertion-oop').addService(googletag.pubads());
        window.GAMLibrary.inreadnative = googletag.defineOutOfPageSlot('/36504930/KLY/MOBILE/BOLA.NET/IN-READ_NATIVE', 'div-gpt-ad-bola-in-read-native').addService(googletag.pubads());
    } else if (pageKlyObj.pageType === "Homepage") {
        window.GAMLibrary.advHeadline1 = googletag.defineOutOfPageSlot('/36504930/KLY/MOBILE/BOLA.NET/ADVERTORIAL_HEADLINE_1', 'div-gpt-ad-bola-advertorial-headline1').addService(googletag.pubads());
        window.GAMLibrary.advHeadline2 = googletag.defineOutOfPageSlot('/36504930/KLY/MOBILE/BOLA.NET/ADVERTORIAL_HEADLINE_2', 'div-gpt-ad-bola-advertorial-headline2').addService(googletag.pubads());
    }

    googletag.pubads().addEventListener('slotVisibilityChanged', GAMLibrary.gamSlotVisibilityChange.bind(GAMLibrary));
    googletag.pubads().addEventListener('slotOnload', GAMLibrary.gamSlotOnLoad.bind(GAMLibrary));
    googletag.pubads().addEventListener('slotRenderEnded', GAMLibrary.gamSlotRenderEnded.bind(GAMLibrary));

    /*  START TARGETING BLOCK   */
    googletag.pubads().setTargeting("tags", GAMLibrary.pageTags);
    googletag.pubads().setTargeting("currentUrl", documentURL);
    googletag.pubads().setTargeting("platform", kly.platform);
    googletag.pubads().setTargeting("type", kly.gtm.type);
    googletag.pubads().setTargeting("pageType", kly.pageType);
    googletag.pubads().setTargeting("channel", kly.gtm.subCategory);
    googletag.pubads().setTargeting("audience", typeof(audience = kly.gtm.audience && kly.gtm.audience.split("|")) === "undefined" ? "false" : audience);
    googletag.pubads().setTargeting("isAdvertorial", typeof(isAdvertorial = kly.article && kly.article.isAdvertorial.toString()) === "undefined" ? "false" : isAdvertorial);
    googletag.pubads().setTargeting("isMultipage", typeof(isMultipage = kly.article && kly.article.isMultipage.toString()) === "undefined" ? "false" : isMultipage);
    googletag.pubads().setTargeting("articleId", kly.gtm.articleId.toString());
    googletag.pubads().setTargeting("newExp", typeof(newExp = kly.gtm.new_exp) === "undefined" ? "false" : kly.gtm.new_exp.toString());
    googletag.pubads().setTargeting("pagingNum", typeof(pageParam = kly.gtm.pageParam && kly.gtm.pageParam.toString()) === "undefined" ? "false" : pageParam);
    googletag.pubads().setTargeting("site", kly.site);
    googletag.pubads().setTargeting("age", typeof(age = kly.gtm.age) === "undefined" ? "false" : kly.gtm.age.toString());
    googletag.pubads().setTargeting("gender", typeof(gender = kly.gtm.gender) === "undefined" ? "false" : kly.gtm.gender.toString());
    googletag.pubads().setTargeting("subcategory", kly.gtm.subCategory);
    /*  END TARGETING BLOCK   */

    /* SET VISITOR ID AS PUBLISHER PROVIDED ID - START*/
    let cVisitorId = (visId = document.cookie.split("ahoy_visitor")[1]) ? visId.split(';')[0].replace(/[^a-zA-Z0-9]/ig, '') : false;
    if (cVisitorId) {
        googletag.pubads().setPublisherProvidedId(cVisitorId + 'kly');
    }
    /* SET VISITOR ID AS PUBLISHER PROVIDED ID - END*/

    googletag.pubads().setCentering(true);
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().disableInitialLoad();
    googletag.enableServices();

    /* REFRESH ON DEMAND */
    googletag.pubads().refresh([window.GAMLibrary.topframe, window.GAMLibrary.overlay, window.GAMLibrary.crmHeadline, window.GAMLibrary.crmOrganic1, window.GAMLibrary.crmOrganic2, window.GAMLibrary.crmOrganic3, window.GAMLibrary.pictureFirst]);

    if (GAMLibrary.pageIsReadPage) {
        googletag.pubads().refresh([window.GAMLibrary.insertion, window.GAMLibrary.inreadnative]);
    } else if (pageKlyObj.pageType === "Homepage") {
        googletag.pubads().refresh([window.GAMLibrary.advHeadline1, window.GAMLibrary.advHeadline2]);
    }

    /* INITIATE PREBID */
    GAMLibrary.prebidInstantiate({
        containerName: [],
        definedSlot: []
    });

    /*INITIATE SHOWCASE IN PAGING */
    if (GAMLibrary.pageIsReadPage) {
        GAMLibrary.scInPaging()
    };
});

/** GET MESSAGE FROM SAFEFRAME CONTAINER */
GAMLibrary.onMessageReceivedGPTUpdateCreativeStyle();
/** GET MESSAGE FROM SAFEFRAME CONTAINER */

document.addEventListener("DOMContentLoaded", GAMLibrary.gfnOnDomContentLoaded.bind(GAMLibrary));
window.addEventListener("orientationchange", GAMLibrary.tfOrientationChange.bind(GAMLibrary));
