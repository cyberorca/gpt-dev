/** 
 * GAM KLY V4.0 - www.bola.net
 * Prefix Detail :
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
    gamImmersive: '/36504930/KLY/DESKTOP/BOLA.NET/IMMERSIVE',
    gamTopFrame: '/36504930/KLY/DESKTOP/BOLA.NET/TOP_FRAME',
    gamBottomFrame: '/36504930/KLY/DESKTOP/BOLA.NET/BOTTOM_FRAME',
    gamSkinad: '/36504930/KLY/DESKTOP/BOLA.NET/SKINAD',
    gamBillboard: '/36504930/KLY/DESKTOP/BOLA.NET/MASTHEAD',
    gamBalloon: '/36504930/KLY/DESKTOP/BOLA.NET/BALLOON',
    gamNewsTag1: '/36504930/KLY/DESKTOP/BOLA.NET/NEWS_TAG_1',
    gamNewsTag2: '/36504930/KLY/DESKTOP/BOLA.NET/NEWS_TAG_2',
    gamHeadlineCRM: '/36504930/KLY/DESKTOP/BOLA.NET/HEADLINE_CRM',
    gamOrganicFeedCRM1: '/36504930/KLY/DESKTOP/BOLA.NET/ORGANIC_FEED_CRM_1',
    gamOrganicFeedCRM2: '/36504930/KLY/DESKTOP/BOLA.NET/ORGANIC_FEED_CRM_2',
    gamOrganicFeedCRM3: '/36504930/KLY/DESKTOP/BOLA.NET/ORGANIC_FEED_CRM_3',
    gamAdvertorialHL1: '/36504930/KLY/DESKTOP/BOLA.NET/ADVERTORIAL_HEADLINE_1',
    gamAdvertorialHL2: '/36504930/KLY/DESKTOP/BOLA.NET/ADVERTORIAL_HEADLINE_2',
    gamShowcase: '/36504930/KLY/DESKTOP/BOLA.NET/SHOWCASE',
    gamHalfpage1: '/36504930/KLY/DESKTOP/BOLA.NET/HALFPAGE_1',
    gamLeaderboard: '/36504930/KLY/DESKTOP/BOLA.NET/LEADERBOARD',
    pageUrlPath: document.URL,
    gamUserAgent: navigator.userAgent.toLowerCase(),
    gamIsTablet: /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(this.gamUserAgent),
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
    pageTags: [""],
    pageBrandSafetyChecker: function() {
        var articlePages = pageKlyObj && pageKlyObj.article,
            isMatcont = "0",
            isViolateBrandSafety = "0",
            bsKeyword = [],
            pageTitle = articlePages && this.gfnFilterString(articlePages.title),
            pageTitles = (typeof pageTitle !== 'undefined') ? pageTitle : '',
            pageKeyword = this.pageDocumentMeta("keywords"),
            pageDesc = this.pageDocumentMeta("description"),
            pageTag = pageKlyObj.gtm.tag || pageKlyObj.tag && pageKlyObj.tag.name,
            tagForAds = typeof pageTag === 'undefined' ? [] : this.gfnFilterString(pageTag.replace(/[^A-Za-z0-9|\- ]/ig, ""), "|");

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
        var siteContentObject = document.getElementsByClassName("infinite");
        var siteContentText = "";

        if (siteContentObject.length) {
            siteContentText = siteContentObject[0].innerText;

            /*removing BACA JUGA box since it unrelated with main content*/
            /*change this acording to the site page layout*/
            var baca_juga_elements = siteContentObject[0].getElementsByClassName("detail__terkait");
            for (var i in baca_juga_elements) {
                bacajuga = baca_juga_elements[i].innerText;
                siteContentText = siteContentText.replace(bacajuga, '');
            }
        }

        siteContentText = pageKeyword.concat(pageTitles, ' ', pageDesc, ' ', tagForAds, ' ', siteContentText);

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
    createDMPTracker: function(adsCatList, dfpTracker, macro) {
        var cName = 'ahoy_visitor=',
            cVisitorId = document.cookie.split(';').find(v => { return v.match(cName); }),
            partnerUID = cVisitorId ? decodeURIComponent(cVisitorId).trim().replace(cName, '') : 0,
            gamMacro = typeof macro === "string" ? JSON.parse(macro) : macro,
            defaultKey = { adunitId: "ads_adunit_id", advertiserId: "ads_advertiser_id", creativeId: "ads_creative_id", lineitemId: "ads_lineitem_id", orderId: "ads_order_id", };
        actionDetails = Object.keys(gamMacro).reduce((obj, k) => Object.assign(obj, defaultKey[k] ? {
                [defaultKey[k]]: gamMacro[k]
            } : {
                [k]: gamMacro[k]
            }), {}),
            cdpData = { action: actionDetails.action ? actionDetails.action : 'ads_click', action_category: adsCatList, action_details: actionDetails.action ? (delete actionDetails.action, actionDetails = actionDetails) : actionDetails, visitor_id: partnerUID };
        (actionDetails.action == 'ads_click') ? (partnerUID ? window.AhoyEvent.sendPersonalizationUserEvent(cdpData) : '') : '';
        window.open(dfpTracker, '_blank');
    },
    /** ============ PREBID ============ */
    get prebidAdUnit() {
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
        const DISPLAY = [{
                code: "div-gpt-ad-bola-sc2",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250],
                            [250, 250],
                            [200, 200],
                        ],
                    },
                },
                bids: [
                    { bidder: "innity", params: { zone: 97841, pub: 539 } },
                    { bidder: "teads", params: { pageId: 151772, placementId: 167811 } },
                    { bidder: "pubmatic", params: { publisherId: '156536', adSlot: 'Prebid-Bolanet-Mobile-300x250', } },
                    { bidder: "rubicon", params: { accountId: 12534, siteId: 377462, zoneId: 2082392 } },
                    { bidder: 'unruly', params: { siteId: 243584 } },
                    { bidder: 'medianet', params: { cid: '8CUWX4UX4', crid: '576550861' } },
                    { bidder: 'smartadserver', params: { domain: 'https://prg-apac.smartadserver.com', networkId: 4221, siteId: 498330, pageId: 1556522, formatId: 111310 } },
                    { bidder: "openx", params: { delDomain: "emtek-d.openx.net", unit: "556894055" } },
                    { bidder: 'ix', params: { siteId: '802775' } },
                    { bidder: "oftmedia", params: { placementId: "27497149" } },
                    { bidder: "yahoossp", params: { dcn: '8a969d80018383b1b722c66620e1024f', pos: '8a96908c018383b1ce9ac6665fe00248' } },
                    { bidder: "taboola", params: { tagId: 'showcase_homepage_1', publisherId: '1501401', } },
                    { bidder: "triplelift", params: { inventoryCode: 'Bola-net_300x250_Pubmatic' } },
                ],
            },
            {
                code: "div-gpt-ad-bola-sc1",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250],
                            [300, 600],
                            [160, 600],
                        ],
                    },
                },
                bids: [
                    { bidder: "innity", params: { zone: 97843, pub: 539 } },
                    { bidder: "teads", params: { pageId: 151772, placementId: 167811 } },
                    { bidder: "pubmatic", params: { publisherId: '156536', adSlot: 'Prebid-Bolanet-Mobile-300x600' } },
                    { bidder: "rubicon", params: { accountId: 12534, siteId: 377462, zoneId: 2082392 } },
                    { bidder: 'unruly', params: { siteId: 243584 } },
                    { bidder: 'medianet', params: { cid: '8CUWX4UX4', crid: '123558562' } },
                    { bidder: 'smartadserver', params: { domain: 'https://prg-apac.smartadserver.com', networkId: 4221, siteId: 498330, pageId: 1556522, formatId: 111311 } },
                    { bidder: "openx", params: { delDomain: "emtek-d.openx.net", unit: "556894066" } },
                    { bidder: 'ix', params: { siteId: '802774' } },
                    { bidder: "oftmedia", params: { placementId: "27497150" } },
                    { bidder: "yahoossp", params: { dcn: '8a969d80018383b1b722c66620e1024f', pos: '8a96908c018383b1ce9ac66698bf024a' } },
                    { bidder: "taboola", params: { tagId: 'halfpage_homepage_1', publisherId: '1501401', } },
                    { bidder: "triplelift", params: { inventoryCode: 'Bola-net_300x600_Pubmatic' } },
                ],
            },
            {
                code: "div-gpt-ad-bola-lb",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [728, 90],
                            [970, 90],
                            [970, 250],
                        ],
                    },
                },
                bids: [
                    { bidder: 'smartadserver', params: { domain: 'https://prg-apac.smartadserver.com', networkId: 4221, siteId: 498330, pageId: 1556522, formatId: 111313 } },
                    { bidder: 'ix', params: { siteId: '802773' } },
                    { bidder: "teads", params: { pageId: 151772, placementId: 167811 } },
                    { bidder: "oftmedia", params: { placementId: "27497151" } },
                    { bidder: "yahoossp", params: { dcn: '8a969d80018383b1b722c66620e1024f', pos: '8a96992f018383b1c311c6676252025a' } },
                    { bidder: "taboola", params: { tagId: 'leaderboard_homepage_1', publisherId: '1501401', } },
                ],
            },
        ];
        const VIDEO = [{
                code: "div-gpt-ad-bola-sc2",
                mediaTypes: {
                    video: {
                        playerSize: [300, 250], // Not set so that the player can be repsonsive
                        context: "outstream",
                        protocols: [2, 3, 7],
                    },
                },
                bids: [
                    { bidder: "spotx", params: { channel_id: 285432, ad_unit: "outstream", outstream_function: SPOTX_OUTSTREAM_FUNCTION } },
                    { bidder: 'ix', params: { siteId: '802775' } },
                ],
            },
            {
                code: "div-gpt-ad-bola-sc1",
                mediaTypes: {
                    video: {
                        playerSize: [300, 600], // Not set so that the player can be repsonsive
                        context: "outstream",
                        protocols: [2, 3, 7],
                    },
                },
                bids: [
                    { bidder: "spotx", params: { channel_id: 285432, ad_unit: "outstream", outstream_function: SPOTX_OUTSTREAM_FUNCTION } },
                    { bidder: 'ix', params: { siteId: '802774' } },
                ],
            },
            {
                code: "div-gpt-ad-bola-lb",
                mediaTypes: {
                    video: {
                        playerSize: [970, 250], // Not set so that the player can be repsonsive
                        context: "outstream",
                        protocols: [2, 3, 7]
                    },
                },
                bids: [
                    { bidder: 'ix', params: { siteId: '802773' } },
                ],
            },
        ];

        return {
            'display': DISPLAY,
            'video': VIDEO
        };
    },
    prebidInitAdserver: function() {
        if (pbjs.prebidInitAdserverSet) return;

        pbjs.prebidInitAdserverSet = true;

        // Get all of the adUnit codes for the display adUnits
        var displayAdUnitCodes = [];
        this.prebidAdUnit.display.forEach(function(adUnit) {
            displayAdUnitCodes.push(adUnit.code);
        });

        googletag.cmd.push(function() {
            pbjs.que.push(function() {
                pbjs.setTargetingForGPTAsync(displayAdUnitCodes);
                googletag.pubads().refresh([this.showcase]);
                googletag.pubads().refresh([this.halfpage1]);
                googletag.pubads().refresh([this.leaderboard]);
            }.bind(this));
        }.bind(this));
    },
    prebidInstantiate: function() {
        const PRICE_GRANULARITY_CONFIG = { buckets: [{ precision: 2, min: 0.02, max: 2.99, increment: 0.01 }, { precision: 2, min: 3, max: 10, increment: 0.1 }, ], };
        const TIMEOUT = 1000;
        const FS_TIMEOUT = 3000

        var initAdserver = this.prebidInitAdserver.bind(this);
        pbjs.que.push(() => {
            pbjs.addAdUnits(this.prebidAdUnit.display);
            pbjs.addAdUnits(this.prebidAdUnit.video);
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

    /** ============ GPT EVENT LISTENER ============ */
    gamSlotOnLoad: function(event) {
        var slotDelivered = event.slot.getResponseInformation() ? 'block' : 'none';
        if (slotDelivered == 'block') {
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
            window.AhoyEvent.sendPersonalizationUserEvent(cdpData);
        }
    },
    gamSlotRenderEnded: function(event) {
        var containerId = event.slot.getSlotElementId();
        var containerEl = document.getElementById(containerId);

        /* START LB AND BILLBOARD RENDERRING */
        if (event.slot == this.immersive) {
            if (event.isEmpty) {
                let gamBillboard = googletag.defineOutOfPageSlot(this.gamBillboard, 'div-gpt-ad-bola-billboard-oop').addService(googletag.pubads());
                let gamTopfrm = googletag.defineOutOfPageSlot(this.gamTopFrame, "div-gpt-ad-bola-topfrm-oop").addService(googletag.pubads());
                let gamBottomfrm = googletag.defineSlot(this.gamBottomFrame, [468, 60], 'div-gpt-ad-bola-bottomfrm-oop').addService(googletag.pubads());

                /* EXCLUDE SKINAD IN TABLET */
                if (!this.gamIsTablet) {
                    gam_skinad = googletag.defineOutOfPageSlot(this.gamSkinad, "div-gpt-ad-bola-skinad-oop").addService(googletag.pubads());
                    googletag.pubads().refresh([gamBillboard, gamTopfrm, gamBottomfrm, gam_skinad]);
                } else {
                    googletag.pubads().refresh([gamBillboard, gamTopfrm, gamBottomfrm]);
                }

                /* STICKY BOTTOM FRAME TWEAK */
                document.querySelector("#div-gpt-ad-bola-bottomfrm-oop").style = "position: sticky; bottom: 0; z-index: 9999;";
            }
        }
        /* END LB AND BILLBOARD RENDERRING */

        if (containerEl !== null) {
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
        }
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
}

var elImmersiveContainer = document.createElement('div');
elImmersiveContainer.setAttribute('id', 'div-gpt-ad-bola-immersive-oop');
if (document.body.appendChild(elImmersiveContainer)) {
    googletag.cmd.push(function() {

        /*SET NEW BRAND SAFETY LOGIC*/
        GAMLibrary.pageBrandSafetyChecker();

        /* DEFINE IMMERSIVE TAG - DO NOT CHANGE THE SLOT ORDER, IMMERSIVE ALWAYS ON THE 1st POSITION - */
        window.GAMLibrary.immersive = googletag.defineOutOfPageSlot(GAMLibrary.gamImmersive, 'div-gpt-ad-bola-immersive-oop').addService(googletag.pubads());
        window.GAMLibrary.halfpage1 = googletag.defineSlot(GAMLibrary.gamHalfpage1, [
            [300, 600],
            [300, 250],
            [160, 600]
        ], "div-gpt-ad-bola-sc1").addService(googletag.pubads());
        window.GAMLibrary.showcase = googletag.defineSlot(GAMLibrary.gamShowcase, [
            [300, 250],
            [250, 250]
        ], "div-gpt-ad-bola-sc2").addService(googletag.pubads());
        window.GAMLibrary.leaderboard = googletag.defineSlot(GAMLibrary.gamLeaderboard, [
            [970, 90],
            [728, 90],
            [970, 250]
        ], 'div-gpt-ad-bola-lb').addService(googletag.pubads()).setTargeting("leaderboard_type", ['direct']);

        window.GAMLibrary.balloon = googletag.defineOutOfPageSlot(GAMLibrary.gamBalloon, "div-gpt-ad-bola-lFloating-oop").addService(googletag.pubads());
        window.GAMLibrary.newstag1 = googletag.defineOutOfPageSlot(GAMLibrary.gamNewsTag1, "div-gpt-ad-bola-newsTag1-oop").addService(googletag.pubads());
        window.GAMLibrary.newstag2 = googletag.defineOutOfPageSlot(GAMLibrary.gamNewsTag2, "div-gpt-ad-bola-newsTag2-oop").addService(googletag.pubads());
        window.GAMLibrary.organicFeedCRM1 = googletag.defineOutOfPageSlot(GAMLibrary.gamOrganicFeedCRM1, 'div-gpt-ad-bola-crm1-oop').addService(googletag.pubads());
        window.GAMLibrary.organicFeedCRM2 = googletag.defineOutOfPageSlot(GAMLibrary.gamOrganicFeedCRM2, 'div-gpt-ad-bola-crm2-oop').addService(googletag.pubads());
        window.GAMLibrary.organicFeedCRM3 = googletag.defineOutOfPageSlot(GAMLibrary.gamOrganicFeedCRM3, 'div-gpt-ad-bola-crm3-oop').addService(googletag.pubads());

        if (kly.pageType !== "ReadPage") {
            window.GAMLibrary.headlineCRM = googletag.defineOutOfPageSlot(GAMLibrary.gamHeadlineCRM, 'div-gpt-ad-bola-crm-headline-oop').addService(googletag.pubads());
        }

        if (kly.pageType === "") {
            window.GAMLibrary.advertHL1 = googletag.defineOutOfPageSlot(GAMLibrary.gamAdvertorialHL1, 'div-gpt-ad-bola-advertorial-headline1').addService(googletag.pubads());
            window.GAMLibrary.advertHL2 = googletag.defineOutOfPageSlot(GAMLibrary.gamAdvertorialHL2, 'div-gpt-ad-bola-advertorial-headline2').addService(googletag.pubads());
        }

        googletag.pubads().addEventListener('slotOnload', GAMLibrary.gamSlotOnLoad.bind(GAMLibrary));
        googletag.pubads().addEventListener('slotRenderEnded', GAMLibrary.gamSlotRenderEnded.bind(GAMLibrary));

        /*  START TARGETING BLOCK   */
        googletag.pubads().setTargeting("tags", GAMLibrary.pageTags);
        googletag.pubads().setTargeting("currentUrl", GAMLibrary.pageUrlPath);
        googletag.pubads().setTargeting("platform", kly.platform);
        googletag.pubads().setTargeting("type", kly.gtm.type);
        googletag.pubads().setTargeting("pageType", kly.pageType);
        googletag.pubads().setTargeting("channel", kly.gtm.subCategory);
        googletag.pubads().setTargeting("audience", kly.gtm.audience ? kly.gtm.audience.split("|") : "false");
        googletag.pubads().setTargeting("isAdvertorial", typeof(isAdvertorial = kly.article && kly.article.isAdvertorial.toString()) === "undefined" ? "false" : isAdvertorial);
        googletag.pubads().setTargeting("isMultipage", typeof(isMultipage = kly.article && kly.article.isMultipage.toString()) === "undefined" ? "false" : isMultipage);
        googletag.pubads().setTargeting("articleId", kly.gtm.articleId.toString());
        googletag.pubads().setTargeting("pagingNum", typeof(pageParam = kly.gtm.pageParam && kly.gtm.pageParam.toString()) === "undefined" ? "false" : pageParam);
        googletag.pubads().setTargeting("site", kly.site);
        googletag.pubads().setTargeting("age", typeof(age = kly.gtm.age) === "undefined" ? "false" : kly.gtm.age.toString());
        googletag.pubads().setTargeting("gender", typeof(gender = kly.gtm.gender) === "undefined" ? "false" : kly.gtm.gender.toString());
        googletag.pubads().setTargeting("subcategory", kly.gtm.subCategory);
        /*  END TARGETING BLOCK   */

        /* SET VISITOR ID AS PUBLISHER PROVIDED ID - START*/
        var cVisitorId = (visId = document.cookie.split("ahoy_visitor")[1]) ? visId.split(';')[0].replace(/[^a-zA-Z0-9]/ig, '') : false;
        if (cVisitorId) {
            googletag.pubads().setPublisherProvidedId(cVisitorId + 'kly');
        }
        /* SET VISITOR ID AS PUBLISHER PROVIDED ID - END*/

        googletag.pubads().setCentering(true);
        googletag.pubads().enableSingleRequest();
        googletag.pubads().disableInitialLoad();
        googletag.enableServices();

        googletag.pubads().refresh([window.GAMLibrary.immersive, window.GAMLibrary.balloon, window.GAMLibrary.newstag1, window.GAMLibrary.newstag2, window.GAMLibrary.organicFeedCRM1, window.GAMLibrary.organicFeedCRM2, window.GAMLibrary.organicFeedCRM3]);

        if (kly.pageType !== "ReadPage") {
            googletag.pubads().refresh([window.GAMLibrary.headlineCRM]);
        }

        if (kly.pageType === "") {
            googletag.pubads().refresh([window.GAMLibrary.advertHL1, window.GAMLibrary.advertHL2]);
        }
    });
    /* INITIATE PREBID */
    GAMLibrary.prebidInstantiate();
}

/** GET MESSAGE FROM SAFEFRAME CONTAINER */
GAMLibrary.onMessageReceivedGPTUpdateCreativeStyle();
/** GET MESSAGE FROM SAFEFRAME CONTAINER */
