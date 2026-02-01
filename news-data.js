/**
 * DATABASE BERITA POLRES PINRANG
 * Semua berita disimpan dalam array JavaScript
 */

const NEWS_DATABASE = {
    // Kategori berita
    categories: [
        { id: 'kegiatan', name: 'Kegiatan', color: '#007bff', icon: 'fa-calendar' },
        { id: 'penegakan-hukum', name: 'Penegakan Hukum', color: '#dc3545', icon: 'fa-gavel' },
        { id: 'bakti-sosial', name: 'Bakti Sosial', color: '#28a745', icon: 'fa-handshake' },
        { id: 'layanan', name: 'Layanan', color: '#17a2b8', icon: 'fa-concierge-bell' },
        { id: 'prestasi', name: 'Prestasi', color: '#ffc107', icon: 'fa-trophy' },
        { id: 'pengumuman', name: 'Pengumuman', color: '#6f42c1', icon: 'fa-bullhorn' }
    ],

    // Semua berita tersimpan
    articles: [
        
        {
            id: 1,
            title: "Bhabinkamtibmas Lakukan Pembinaan di Desa Tertinggal",
            category: "kegiatan",
            excerpt: "Personel Bhabinkamtibmas Polres Pinrang melaksanakan pembinaan dan penyuluhan kepada masyarakat desa tertinggal dalam rangka meningkatkan kesadaran hukum.",
            content: `<p>Personel Bhabinkamtibmas Polres Pinrang telah melaksanakan kegiatan pembinaan dan penyuluhan kepada masyarakat di Desa Makkawao, Kecamatan Mattiro Bulu, Kabupaten Pinrang. Kegiatan ini merupakan bagian dari program Polri Presisi dalam rangka mendekatkan pelayanan kepolisian kepada masyarakat.</p>
            
            <p>Kegiatan yang dilaksanakan selama tiga hari ini melibatkan 150 warga dari berbagai kalangan. Materi yang disampaikan meliputi:</p>
            
            <ul>
                <li>Pencegahan tindak pidana pencurian</li>
                <li>Pentingnya menjaga keamanan lingkungan</li>
                <li>Pengenalan sistem pelaporan online</li>
                <li>Penyuluhan tentang bahaya narkoba</li>
            </ul>
            
            <p>Kapolres Pinrang, AKBP Dr. H. Andi Muhammad Yunan, S.I.K., M.H., dalam sambutannya menyampaikan bahwa kegiatan ini merupakan wujud nyata komitmen Polri dalam memberikan pelayanan terbaik kepada masyarakat.</p>
            
            <blockquote>
                "Kami ingin masyarakat merasa dekat dengan Polri. Melalui Bhabinkamtibmas, kami hadir di tengah-tengah masyarakat untuk memberikan pelayanan dan pembinaan."
            </blockquote>
            
            <p>Kegiatan ini mendapat respons positif dari masyarakat. Bapak Samsudin (45), salah satu peserta, menyatakan bahwa kegiatan ini sangat bermanfaat untuk meningkatkan pemahaman hukum masyarakat desa.</p>`,
            author: "Aipda Budi Santoso",
            position: "Humas Polres Pinrang",
            date: "2023-12-15",
            time: "10:30",
            views: 1245,
            comments: 23,
            images: [
                "assets/images/news/kegiatan1.jpg",
                "assets/images/news/kegiatan2.jpg",
                "assets/images/news/kegiatan3.jpg"
            ],
            featuredImage: "assets/images/news/kegiatan1.jpg",
            tags: ["Bhabinkamtibmas", "Pembinaan", "Desa Tertinggal", "Penyuluhan Hukum"],
            location: "Desa Makkawao, Kecamatan Mattiro Bulu",
            attendees: ["Kapolres Pinrang", "Kasat Binmas", "Bhabinkamtibmas", "Tokoh Masyarakat"],
            isBreaking: true
        },
        {
            id: 2,
            title: "Polres Pinrang Ungkap Jaringan Pencurian Kendaraan Bermotor",
            category: "penegakan-hukum",
            excerpt: "Tim Resmob Polres Pinrang berhasil mengungkap jaringan pencurian kendaraan bermotor yang telah beroperasi selama 6 bulan di wilayah Pinrang dan sekitarnya.",
            content: `<p>Berdasarkan laporan masyarakat tentang maraknya kasus pencurian kendaraan bermotor, Tim Resmob Polres Pinrang melakukan penyelidikan intensif selama dua minggu. Hasilnya, berhasil diungkap jaringan pencurian kendaraan bermotor yang telah beroperasi selama 6 bulan.</p>
            
            <h3>Modus Operandi</h3>
            <p>Pelaku melakukan aksinya dengan modus:</p>
            <ol>
                <li>Mengincar kendaraan yang diparkir di tempat sepi</li>
                <li>Menggunakan alat khusus untuk membobol sistem pengamanan</li>
                <li>Mengubah nomor rangka dan mesin kendaraan</li>
                <li>Menjual ke daerah lain dengan harga murah</li>
            </ol>
            
            <h3>Barang Bukti yang Berhasil Diamankan</h3>
            <ul>
                <li>5 unit sepeda motor berbagai merek</li>
                <li>Alat pembobol kendaraan</li>
                <li>Dokumen palsu</li>
                <li>Uang tunai Rp 15.000.000</li>
            </ul>
            
            <p>Para pelaku telah ditetapkan sebagai tersangka dan saat ini sedang menjalani proses hukum. Masyarakat yang merasa menjadi korban dapat melapor ke Unit Reskrim Polres Pinrang dengan membawa dokumen kepemilikan kendaraan.</p>`,
            author: "AKP Rina Dewi",
            position: "Kasat Reskrim Polres Pinrang",
            date: "2023-12-14",
            time: "14:00",
            views: 2567,
            comments: 45,
            images: [
                "assets/images/news/pencurian1.jpg",
                "assets/images/news/pencurian2.jpg"
            ],
            featuredImage: "assets/images/news/pencurian1.jpg",
            tags: ["Pencurian", "Resmob", "Pengungkapan", "Kendaraan Bermotor"],
            location: "Wilayah Hukum Polres Pinrang",
            suspects: ["3 orang warga Pinrang", "1 orang dari Parepare"],
            status: "Dalam proses hukum"
        },
        {
            id: 3,
            title: "Polres Pinrang Bagikan Sembako kepada Keluarga Tidak Mampu",
            category: "bakti-sosial",
            excerpt: "Dalam rangka memperingati Hari Bhayangkara ke-77, Polres Pinrang membagikan paket sembako kepada 200 keluarga tidak mampu di wilayah Pinrang.",
            content: `<p>Sebagai wujud kepedulian terhadap masyarakat yang membutuhkan, Polres Pinrang melaksanakan kegiatan bakti sosial dengan membagikan paket sembako kepada 200 keluarga tidak mampu. Kegiatan ini dilaksanakan dalam rangka memperingati Hari Bhayangkara ke-77.</p>
            
            <h3>Lokasi Penyaluran</h3>
            <p>Paket sembako disalurkan di tiga lokasi:</p>
            <ul>
                <li>Kelurahan Macorawalie (75 paket)</li>
                <li>Desa Bitto (65 paket)</li>
                <li>Desa Lanrisang (60 paket)</li>
            </ul>
            
            <h3>Isi Paket Sembako</h3>
            <p>Setiap paket berisi:</p>
            <ul>
                <li>Beras 5 kg</li>
                <li>Minyak goreng 2 liter</li>
                <li>Gula pasir 2 kg</li>
                <li>Telur 1 kg</li>
                <li>Mie instan 1 karton</li>
                <li>Kecap dan bumbu dapur</li>
            </ul>
            
            <blockquote>
                "Kegiatan ini merupakan bentuk nyata Polri Presisi, di mana kami tidak hanya menjaga keamanan tetapi juga peduli terhadap kesejahteraan masyarakat," ujar Kapolres Pinrang.
            </blockquote>
            
            <p>Kegiatan ini melibatkan personel Polres Pinrang, Bhayangkari, dan relawan masyarakat. Diharapkan bantuan ini dapat meringankan beban keluarga tidak mampu terutama di masa sulit.</p>`,
            author: "Ipda Sari Wijaya",
            position: "Ketua Bhayangkari Polres Pinrang",
            date: "2023-12-13",
            time: "09:00",
            views: 1890,
            comments: 34,
            images: [
                "assets/images/news/baksos1.jpg",
                "assets/images/news/baksos2.jpg",
                "assets/images/news/baksos3.jpg",
                "assets/images/news/baksos4.jpg"
            ],
            featuredImage: "assets/images/news/baksos1.jpg",
            tags: ["Bakti Sosial", "Sembako", "Hari Bhayangkara", "Peduli Masyarakat"],
            location: "Tiga Lokasi di Pinrang",
            beneficiaries: "200 keluarga tidak mampu",
            budget: "Dana pribadi personel dan donasi"
        },
        {
            id: 4,
            title: "Jadwal SIM Keliling Desember 2023 di Wilayah Pinrang",
            category: "layanan",
            excerpt: "Polres Pinrang merilis jadwal pelayanan SIM Keliling untuk bulan Desember 2023. Pelayanan akan dilaksanakan di 10 titik berbeda di seluruh Pinrang.",
            content: `<p>Untuk memudahkan masyarakat dalam mengurus perpanjangan SIM, Polres Pinrang kembali menyelenggarakan pelayanan SIM Keliling. Berikut adalah jadwal lengkap untuk bulan Desember 2023:</p>
            
            <table class="news-table">
                <thead>
                    <tr>
                        <th>Tanggal</th>
                        <th>Lokasi</th>
                        <th>Waktu</th>
                        <th>Jenis Layanan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5 Desember 2023</td>
                        <td>Alun-alun Pinrang</td>
                        <td>08:00 - 14:00 WITA</td>
                        <td>SIM A dan C</td>
                    </tr>
                    <tr>
                        <td>12 Desember 2023</td>
                        <td>Pasar Sentral Pinrang</td>
                        <td>08:00 - 14:00 WITA</td>
                        <td>SIM A, C, dan umum</td>
                    </tr>
                    <tr>
                        <td>19 Desember 2023</td>
                        <td>Kecamatan Mattiro Bulu</td>
                        <td>09:00 - 15:00 WITA</td>
                        <td>SIM A dan C</td>
                    </tr>
                    <tr>
                        <td>26 Desember 2023</td>
                        <td>Kecamatan Duampanua</td>
                        <td>09:00 - 15:00 WITA</td>
                        <td>SIM A, C, dan umum</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Persyaratan yang Harus Dibawa</h3>
            <ol>
                <li>SIM lama yang masih berlaku/masa tenggang</li>
                <li>KTP asli dan fotokopi</li>
                <li>Pas foto ukuran 3x4 (latar merah) sebanyak 2 lembar</li>
                <li>Surat keterangan sehat dari dokter</li>
                <li>Bukti pembayaran pajak kendaraan tahun berjalan</li>
            </ol>
            
            <h3>Biaya Pelayanan</h3>
            <ul>
                <li>Perpanjangan SIM A: Rp 120.000</li>
                <li>Perpanjangan SIM C: Rp 80.000</li>
                <li>Pembuatan baru: Rp 150.000</li>
            </ul>
            
            <p>Untuk informasi lebih lanjut, masyarakat dapat menghubungi Unit Registrasi dan Identifikasi Polres Pinrang di nomor (0421) 123456 ext. 123.</p>`,
            author: "Bripka Andi Pratama",
            position: "Kasat Lantas Polres Pinrang",
            date: "2023-12-12",
            time: "08:00",
            views: 3421,
            comments: 67,
            images: [
                "assets/images/news/sim1.jpg",
                "assets/images/news/sim2.jpg"
            ],
            featuredImage: "assets/images/news/sim1.jpg",
            tags: ["SIM Keliling", "Layanan Publik", "Perpanjangan SIM", "Pelayanan Mobile"],
            location: "10 titik di Pinrang",
            schedule: "Setiap Selasa bulan Desember",
            contact: "(0421) 123456 ext. 123"
        },
        {
            id: 5,
            title: "Festival Wayang Kulit Digelar di Pendopo Polres Pinrang",
            category: "kegiatan",
            excerpt: "Dalam rangka melestarikan budaya daerah, Polres Pinrang menggelar festival wayang kulit dengan menampilkan dalang terkenal dari Jawa Tengah.",
            content: `<p>Polres Pinrang sukses menyelenggarakan Festival Wayang Kulit Nusantara di Pendopo Mapolres Pinrang. Acara yang digelar selama dua malam ini menghadirkan dalang terkenal Ki Seno Nugroho dari Jawa Tengah.</p>
            
            <h3>Jadwal Pertunjukan</h3>
            <ul>
                <li><strong>Malam Pertama:</strong> Lakon "Bima Bungkus" - Menampilkan perjuangan Bima dalam mencari air kehidupan</li>
                <li><strong>Malam Kedua:</strong> Lakon "Semar Mbangun Kahyangan" - Kisah kebijaksanaan Semar dalam menyelesaikan persoalan</li>
            </ul>
            
            <h3>Peserta dan Penonton</h3>
            <p>Acara ini dihadiri oleh:</p>
            <ul>
                <li>500 penonton dari berbagai kalangan</li>
                <li>Pelajar dari 10 sekolah di Pinrang</li>
                <li>Tokoh masyarakat dan budaya</li>
                <li>Pejabat pemerintah daerah</li>
            </ul>
            
            <blockquote>
                "Wayang bukan sekadar pertunjukan, tetapi mengandung nilai-nilai luhur yang relevan dengan kehidupan modern, termasuk pengabdian, kejujuran, dan tanggung jawab," tutur Kapolres Pinrang.
            </blockquote>
            
            <p>Acara ini juga dimanfaatkan untuk penyuluhan hukum dengan menyisipkan pesan-pesan preventif tentang bahaya narkoba, tertib lalu lintas, dan pentingnya menjaga keamanan lingkungan.</p>`,
            author: "Aipda Wayan Surya",
            position: "Bidang Humas Polres Pinrang",
            date: "2023-12-10",
            time: "19:30",
            views: 1560,
            comments: 28,
            images: [
                "assets/images/news/wayang1.jpg",
                "assets/images/news/wayang2.jpg",
                "assets/images/news/wayang3.jpg"
            ],
            featuredImage: "assets/images/news/wayang1.jpg",
            tags: ["Wayang Kulit", "Budaya", "Festival", "Pendopo Polres"],
            location: "Pendopo Mapolres Pinrang",
            performer: "Ki Seno Nugroho (Jawa Tengah)",
            duration: "2 malam"
        },
        {
            id: 6,
            title: "Polres Pinrang Raih Penghargaan Wilayah Bebas Narkoba",
            category: "prestasi",
            excerpt: "Polres Pinrang menerima penghargaan dari BNN sebagai wilayah dengan penanganan narkoba terbaik se-Sulawesi Selatan tahun 2023.",
            content: `<p>Berdasarkan penilaian kinerja pencegahan dan pemberantasan narkoba, Polres Pinrang meraih penghargaan sebagai "Wilayah Bebas Narkoba Terbaik" se-Sulawesi Selatan tahun 2023 dari Badan Narkotika Nasional (BNN).</p>
            
            <h3>Indikator Penilaian</h3>
            <p>Penghargaan ini diberikan berdasarkan beberapa indikator:</p>
            <ol>
                <li>Tingkat penyitaan narkoba tertinggi</li>
                <li>Jumlah kasus yang terungkap</li>
                <li>Program pencegahan di masyarakat</li>
                <li>Rehabilitasi pecandu narkoba</li>
                <li>Kerja sama dengan instansi terkait</li>
            </ol>
            
            <h3>Prestasi yang Dicapai</h3>
            <ul>
                <li>Mengungkap 45 kasus narkoba sepanjang 2023</li>
                <li>Menyita 5.7 kg sabu-sabu</li>
                <li>Menangkap 67 tersangka</li>
                <li>Melakukan rehabilitasi terhadap 120 pecandu</li>
                <li>Menyelenggarakan 50 kali penyuluhan anti narkoba</li>
            </ul>
            
            <blockquote>
                "Penghargaan ini bukan akhir perjuangan, tetapi justru menjadi motivasi untuk lebih giat lagi memberantas narkoba dari bumi Pinrang," tegas Kapolres Pinrang saat menerima penghargaan.
            </blockquote>
            
            <p>Penghargaan diserahkan langsung oleh Kepala BNN Provinsi Sulawesi Selatan dalam acara yang dihadiri oleh Forkopimda Pinrang dan segenap personel Polres Pinrang.</p>`,
            author: "AKBP Dr. H. Andi Muhammad Yunan, S.I.K., M.H.",
            position: "Kapolres Pinrang",
            date: "2023-12-08",
            time: "10:00",
            views: 2890,
            comments: 56,
            images: [
                "assets/images/news/prestasi1.jpg",
                "assets/images/news/prestasi2.jpg"
            ],
            featuredImage: "assets/images/news/prestasi1.jpg",
            tags: ["Penghargaan", "BNN", "Bebas Narkoba", "Prestasi"],
            location: "Aula Mapolres Pinrang",
            awardFrom: "Badan Narkotika Nasional Provinsi Sulawesi Selatan",
            year: "2023"
        },
        {
    id: 7, // ID unik
    title: "Judul Berita Baru",
    category: "kategori", // sesuai categories yang ada
    excerpt: "Ringkasan berita...",
    content: "<p>Isi berita lengkap dengan HTML</p>",
    author: "Nama Penulis",
    position: "Jabatan",
    date: "2023-12-20",
    time: "14:30",
    views: 0,
    comments: 0,
    images: ["path/gambar1.jpg", "path/gambar2.jpg"],
    featuredImage: "path/gambar-utama.jpg",
    tags: ["tag1", "tag2"],
    location: "Lokasi kegiatan"
}
    ],

    // Fungsi untuk mengambil berita berdasarkan ID
    getArticleById: function(id) {
        return this.articles.find(article => article.id === id);
    },

    // Fungsi untuk mengambil berita berdasarkan kategori
    getArticlesByCategory: function(categoryId) {
        return this.articles.filter(article => article.category === categoryId);
    },

    // Fungsi untuk mengambil berita terbaru
    getLatestArticles: function(limit = 6) {
        return this.articles
            .sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time))
            .slice(0, limit);
    },

    // Fungsi untuk mencari berita
    searchArticles: function(query) {
        const searchTerm = query.toLowerCase();
        return this.articles.filter(article => 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.content.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    },

    // Fungsi untuk mengambil kategori berdasarkan ID
    getCategoryById: function(categoryId) {
        return this.categories.find(cat => cat.id === categoryId);
    }
};

// Export untuk penggunaan global
if (typeof window !== 'undefined') {
    window.NEWS_DATABASE = NEWS_DATABASE;
}

console.log('✅ Database berita Polres Pinrang siap digunakan');