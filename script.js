/**
 * HUMAS POLRES PINRANG - MAIN SCRIPT
 * Versi Final Lengkap dengan Sistem Berita Dinamis
 */

// ===== DATABASE BERITA (Inline untuk kemudahan) =====
const NEWS_DATABASE = {
    categories: [
        { id: 'kegiatan', name: 'Kegiatan', color: '#007bff', icon: 'fa-calendar' },
        { id: 'penegakan-hukum', name: 'Penegakan Hukum', color: '#dc3545', icon: 'fa-gavel' },
        { id: 'bakti-sosial', name: 'Bakti Sosial', color: '#28a745', icon: 'fa-handshake' },
        { id: 'layanan', name: 'Layanan', color: '#17a2b8', icon: 'fa-concierge-bell' },
        { id: 'prestasi', name: 'Prestasi', color: '#ffc107', icon: 'fa-trophy' }
    ],

    articles: [
        {
            id: 1,
            title: "Bhabinkamtibmas Lakukan Pembinaan di Desa Tertinggal",
            category: "kegiatan",
            excerpt: "Personel Bhabinkamtibmas Polres Pinrang melaksanakan pembinaan dan penyuluhan kepada masyarakat desa tertinggal.",
            content: `<p>Personel Bhabinkamtibmas Polres Pinrang telah melaksanakan kegiatan pembinaan dan penyuluhan kepada masyarakat di Desa Makkawao, Kecamatan Mattiro Bulu, Kabupaten Pinrang.</p>
            
            <p>Kegiatan ini merupakan bagian dari program Polri Presisi dalam rangka mendekatkan pelayanan kepolisian kepada masyarakat.</p>
            
            <blockquote>"Kami ingin masyarakat merasa dekat dengan Polri. Melalui Bhabinkamtibmas, kami hadir di tengah-tengah masyarakat"</blockquote>`,
            author: "Aipda Budi Santoso",
            position: "Humas Polres Pinrang",
            date: "2023-12-15",
            time: "10:30",
            views: 1245,
            comments: 23,
            images: [],
            featuredImage: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Bhabinkamtibmas", "Pembinaan", "Desa Tertinggal"],
            location: "Desa Makkawao, Kecamatan Mattiro Bulu"
        },
        {
            id: 2,
            title: "Polres Pinrang Ungkap Jaringan Pencurian Kendaraan",
            category: "penegakan-hukum",
            excerpt: "Tim Resmob berhasil mengungkap jaringan pencurian kendaraan bermotor yang beroperasi di wilayah Pinrang.",
            content: `<p>Berdasarkan laporan masyarakat, Tim Resmob Polres Pinrang melakukan penyelidikan intensif selama dua minggu.</p>
            
            <h3>Barang Bukti</h3>
            <ul>
                <li>5 unit sepeda motor berbagai merek</li>
                <li>Alat pembobol kendaraan</li>
                <li>Uang tunai Rp 15.000.000</li>
            </ul>`,
            author: "AKP Rina Dewi",
            position: "Kasat Reskrim Polres Pinrang",
            date: "2023-12-14",
            time: "14:00",
            views: 2567,
            comments: 45,
            images: [],
            featuredImage: "https://images.unsplash.com/photo-1543353074-6c4d7b9e7343?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Pencurian", "Resmob", "Pengungkapan"]
        },
        {
            id: 3,
            title: "Bagikan Sembako kepada Keluarga Tidak Mampu",
            category: "bakti-sosial",
            excerpt: "Polres Pinrang membagikan paket sembako kepada 200 keluarga tidak mampu di wilayah Pinrang.",
            content: `<p>Sebagai wujud kepedulian terhadap masyarakat, Polres Pinrang melaksanakan kegiatan bakti sosial dengan membagikan paket sembako.</p>
            
            <h3>Isi Paket Sembako</h3>
            <ul>
                <li>Beras 5 kg</li>
                <li>Minyak goreng 2 liter</li>
                <li>Gula pasir 2 kg</li>
                <li>Telur 1 kg</li>
            </ul>`,
            author: "Ipda Sari Wijaya",
            position: "Ketua Bhayangkari Polres Pinrang",
            date: "2023-12-13",
            time: "09:00",
            views: 1890,
            comments: 34,
            images: [],
            featuredImage: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Bakti Sosial", "Sembako", "Peduli Masyarakat"]
        },
        {
            id: 4,
            title: "Jadwal SIM Keliling Desember 2023",
            category: "layanan",
            excerpt: "Polres Pinrang merilis jadwal pelayanan SIM Keliling untuk bulan Desember 2023 di 10 titik berbeda.",
            content: `<p>Untuk memudahkan masyarakat dalam mengurus perpanjangan SIM, Polres Pinrang menyelenggarakan pelayanan SIM Keliling.</p>
            
            <h3>Persyaratan</h3>
            <ol>
                <li>SIM lama yang masih berlaku</li>
                <li>KTP asli dan fotokopi</li>
                <li>Pas foto 3x4 (latar merah)</li>
                <li>Surat keterangan sehat</li>
            </ol>`,
            author: "Bripka Andi Pratama",
            position: "Kasat Lantas Polres Pinrang",
            date: "2023-12-12",
            time: "08:00",
            views: 3421,
            comments: 67,
            images: [],
            featuredImage: "https://images.unsplash.com/photo-1581272171391-4b2dde0acfaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["SIM Keliling", "Layanan Publik", "Perpanjangan SIM"]
        }
    ],

    getArticleById: function(id) {
        return this.articles.find(article => article.id === id);
    },
    getArticlesByCategory: function(categoryId) {
        return this.articles.filter(article => article.category === categoryId);
    },
    getLatestArticles: function(limit = 6) {
        return this.articles
            .sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time))
            .slice(0, limit);
    },
    searchArticles: function(query) {
        const searchTerm = query.toLowerCase();
        return this.articles.filter(article => 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    },
    getCategoryById: function(categoryId) {
        return this.categories.find(cat => cat.id === categoryId);
    }
};

// ===== KELAS NEWS MODAL (Sistem Modal Berita) =====
class NewsModal {
    constructor() {
        this.modal = null;
        this.isOpen = false;
        this.currentArticle = null;
        this.init();
    }

    init() {
        this.createModalStructure();
        this.bindEvents();
        console.log('✅ Sistem modal berita siap');
    }

    createModalStructure() {
        this.modal = document.createElement('div');
        this.modal.className = 'news-modal';
        this.modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-container">
                <div class="modal-header">
                    <button class="modal-close" aria-label="Tutup">✕</button>
                    <div class="article-category"></div>
                    <h2 class="article-title"></h2>
                    <div class="article-meta">
                        <span class="meta-author"></span>
                        <span class="meta-date"></span>
                        <span class="meta-views">👁 <span class="views-count">0</span></span>
                        <span class="meta-comments">💬 <span class="comments-count">0</span></span>
                    </div>
                </div>
                
                <div class="modal-body">
                    <div class="article-featured-image">
                        <img src="" alt="">
                    </div>
                    
                    <div class="article-excerpt">
                        <p></p>
                    </div>
                    
                    <div class="article-content"></div>
                    
                    <div class="article-tags">
                        <h4>🏷️ Tag Berita</h4>
                        <div class="tags-container"></div>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <div class="share-section">
                        <h5>📤 Bagikan</h5>
                        <div class="share-buttons">
                            <button class="share-btn facebook">f</button>
                            <button class="share-btn twitter">𝕏</button>
                            <button class="share-btn whatsapp">🟢</button>
                            <button class="share-btn copy-link">📋</button>
                        </div>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="btn btn-outline prev-article">← Sebelumnya</button>
                        <button class="btn btn-primary print-article">🖨️ Cetak</button>
                        <button class="btn btn-outline next-article">Selanjutnya →</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(this.modal);
        this.addModalStyles();
    }

    addModalStyles() {
        const styles = `
            .news-modal {
                position: fixed;
                top: 0; left: 0;
                width: 100%; height: 100%;
                z-index: 9999;
                display: none;
            }
            .news-modal.active { display: block; }
            .modal-overlay {
                position: absolute;
                width: 100%; height: 100%;
                background: rgba(0,0,0,0.85);
                backdrop-filter: blur(5px);
            }
            .modal-container {
                position: absolute;
                top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                width: 90%; max-width: 800px;
                max-height: 90vh;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                animation: modalSlideIn 0.3s ease;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            }
            @keyframes modalSlideIn {
                from { opacity: 0; transform: translate(-50%, -60%); }
                to { opacity: 1; transform: translate(-50%, -50%); }
            }
            .modal-header {
                padding: 20px;
                background: linear-gradient(135deg, #003399, #002266);
                color: white;
                position: relative;
            }
            .modal-close {
                position: absolute;
                top: 15px; right: 15px;
                background: rgba(255,255,255,0.1);
                border: none;
                width: 35px; height: 35px;
                border-radius: 50%;
                color: white;
                font-size: 18px;
                cursor: pointer;
                transition: all 0.3s;
            }
            .modal-close:hover {
                background: rgba(255,255,255,0.2);
                transform: rotate(90deg);
            }
            .article-category {
                display: inline-block;
                background: rgba(255,255,255,0.9);
                color: #003399;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .article-title {
                font-size: 22px;
                margin: 0 0 15px 0;
                color: white;
            }
            .article-meta {
                display: flex;
                gap: 15px;
                font-size: 14px;
                opacity: 0.9;
                flex-wrap: wrap;
            }
            .modal-body {
                padding: 25px;
                overflow-y: auto;
                flex: 1;
            }
            .article-featured-image {
                width: 100%;
                height: 300px;
                border-radius: 8px;
                overflow: hidden;
                margin-bottom: 20px;
            }
            .article-featured-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .article-excerpt {
                font-size: 16px;
                color: #333;
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 2px solid #f0f0f0;
                font-weight: 500;
            }
            .article-content {
                font-size: 15px;
                line-height: 1.7;
                color: #444;
                margin-bottom: 25px;
            }
            .article-tags {
                margin: 25px 0;
            }
            .article-tags h4 {
                color: #003399;
                margin-bottom: 10px;
            }
            .tags-container {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            .tag {
                background: #e9ecef;
                color: #495057;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 13px;
            }
            .modal-footer {
                padding: 20px;
                background: #f8f9fa;
                border-top: 1px solid #dee2e6;
            }
            .share-section {
                margin-bottom: 20px;
                text-align: center;
            }
            .share-section h5 {
                color: #495057;
                margin-bottom: 10px;
            }
            .share-buttons {
                display: flex;
                justify-content: center;
                gap: 10px;
            }
            .share-btn {
                width: 40px; height: 40px;
                border-radius: 50%;
                border: none;
                color: white;
                font-size: 16px;
                cursor: pointer;
                transition: all 0.3s;
            }
            .facebook { background: #1877f2; }
            .twitter { background: #1da1f2; }
            .whatsapp { background: #25d366; }
            .copy-link { background: #6c757d; }
            .share-btn:hover { transform: translateY(-3px); }
            .action-buttons {
                display: flex;
                justify-content: space-between;
                gap: 10px;
            }
            .btn {
                padding: 10px 20px;
                border-radius: 6px;
                border: 2px solid transparent;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
            }
            .btn-primary {
                background: #003399;
                color: white;
                border-color: #003399;
            }
            .btn-primary:hover {
                background: #002266;
            }
            .btn-outline {
                background: transparent;
                color: #003399;
                border-color: #003399;
            }
            .btn-outline:hover {
                background: #003399;
                color: white;
            }
            @media (max-width: 768px) {
                .modal-container {
                    width: 95%;
                    max-height: 95vh;
                }
                .article-title { font-size: 18px; }
                .article-featured-image { height: 200px; }
                .action-buttons { flex-direction: column; }
                .btn { width: 100%; }
            }
        `;

        const styleElement = document.createElement('style');
        styleElement.id = 'news-modal-styles';
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }

    bindEvents() {
        this.modal.querySelector('.modal-overlay').addEventListener('click', () => this.close());
        this.modal.querySelector('.modal-close').addEventListener('click', () => this.close());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) this.close();
        });

        this.modal.querySelector('.print-article').addEventListener('click', () => this.printArticle());
        this.modal.querySelector('.prev-article').addEventListener('click', () => this.navigateArticle('prev'));
        this.modal.querySelector('.next-article').addEventListener('click', () => this.navigateArticle('next'));

        this.modal.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleShare(e.target.classList));
        });
    }

    open(articleId) {
        const article = NEWS_DATABASE.getArticleById(articleId);
        if (!article) {
            console.error('Artikel tidak ditemukan:', articleId);
            return;
        }
        
        this.currentArticle = article;
        this.isOpen = true;
        this.updateModalContent(article);
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Update view count
        article.views++;
        this.modal.querySelector('.views-count').textContent = article.views;
        
        console.log('📖 Membuka artikel:', article.title);
    }

    close() {
        this.isOpen = false;
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        this.currentArticle = null;
    }

    updateModalContent(article) {
        const category = NEWS_DATABASE.getCategoryById(article.category);
        
        // Update header
        this.modal.querySelector('.article-category').textContent = category?.name || 'Berita';
        this.modal.querySelector('.article-category').style.backgroundColor = category?.color || '#007bff';
        this.modal.querySelector('.article-title').textContent = article.title;
        
        // Update meta
        this.modal.querySelector('.meta-author').textContent = `${article.author} - ${article.position}`;
        this.modal.querySelector('.meta-date').textContent = this.formatDate(article.date, article.time);
        this.modal.querySelector('.views-count').textContent = article.views;
        this.modal.querySelector('.comments-count').textContent = article.comments;
        
        // Update image
        const featuredImg = this.modal.querySelector('.article-featured-image img');
        featuredImg.src = article.featuredImage;
        featuredImg.alt = article.title;
        
        // Update excerpt
        this.modal.querySelector('.article-excerpt p').textContent = article.excerpt;
        
        // Update content
        this.modal.querySelector('.article-content').innerHTML = article.content;
        
        // Update tags
        this.updateTags(article.tags);
        
        // Update navigation buttons
        this.updateNavigationButtons(article.id);
    }

    formatDate(dateString, timeString) {
        const date = new Date(`${dateString}T${timeString}`);
        return date.toLocaleDateString('id-ID', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    updateTags(tags) {
        const tagsContainer = this.modal.querySelector('.tags-container');
        tagsContainer.innerHTML = '';
        
        tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = `#${tag}`;
            tagsContainer.appendChild(tagElement);
        });
    }

    updateNavigationButtons(currentId) {
        const articles = NEWS_DATABASE.articles;
        const currentIndex = articles.findIndex(article => article.id === currentId);
        
        const prevBtn = this.modal.querySelector('.prev-article');
        const nextBtn = this.modal.querySelector('.next-article');
        
        prevBtn.disabled = currentIndex <= 0;
        nextBtn.disabled = currentIndex >= articles.length - 1;
        
        prevBtn.onclick = prevBtn.disabled ? null : () => {
            this.open(articles[currentIndex - 1].id);
        };
        
        nextBtn.onclick = nextBtn.disabled ? null : () => {
            this.open(articles[currentIndex + 1].id);
        };
    }

    handleShare(btnClass) {
        const article = this.currentArticle;
        const url = window.location.href.split('?')[0] + `?news=${article.id}`;
        const text = `Baca berita: ${article.title} - ${article.excerpt}`;
        
        if (btnClass.contains('facebook')) {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        } else if (btnClass.contains('twitter')) {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        } else if (btnClass.contains('whatsapp')) {
            window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, '_blank');
        } else if (btnClass.contains('copy-link')) {
            navigator.clipboard.writeText(`${text} ${url}`).then(() => {
                alert('Link berita berhasil disalin!');
            });
        }
    }

    printArticle() {
        const printWindow = window.open('', '_blank');
        const article = this.currentArticle;
        
        const printContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${article.title} - HUMAS POLRES PINRANG</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
                    h1 { color: #003399; border-bottom: 3px solid #003399; padding-bottom: 10px; }
                    .meta { color: #666; margin-bottom: 20px; font-size: 14px; }
                    .content { margin-top: 30px; }
                    @media print { body { margin: 0; } .no-print { display: none; } }
                </style>
            </head>
            <body>
                <div class="no-print" style="text-align: center; margin-bottom: 30px;">
                    <button onclick="window.print()">Cetak</button>
                    <button onclick="window.close()">Tutup</button>
                </div>
                
                <h1>${article.title}</h1>
                <div class="meta">
                    <strong>Penulis:</strong> ${article.author} - ${article.position}<br>
                    <strong>Tanggal:</strong> ${this.formatDate(article.date, article.time)}
                </div>
                
                <div class="content">
                    ${article.content}
                </div>
                
                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; font-size: 12px; color: #666;">
                    <p><strong>HUMAS POLRES PINRANG</strong><br>
                    © ${new Date().getFullYear()} Humas Polres Pinrang.</p>
                </div>
                
                <script>window.onload = function() { window.print(); };</script>
            </body>
            </html>
        `;
        
        printWindow.document.write(printContent);
        printWindow.document.close();
    }

    navigateArticle(direction) {
        const articles = NEWS_DATABASE.articles;
        const currentIndex = articles.findIndex(article => article.id === this.currentArticle.id);
        
        if (direction === 'prev' && currentIndex > 0) {
            this.open(articles[currentIndex - 1].id);
        } else if (direction === 'next' && currentIndex < articles.length - 1) {
            this.open(articles[currentIndex + 1].id);
        }
    }
}

// ===== MAIN APPLICATION =====
class HumasPolresApp {
    constructor() {
        this.newsModal = null;
        this.init();
    }

    init() {
        console.log('🚀 HUMAS POLRES PINRANG - Initializing...');
        
        // Initialize core functionality
        this.initCore();
        
        // Initialize news system
        this.initNewsSystem();
        
        // Initialize other features
        this.initFeatures();
        
        console.log('✅ HUMAS POLRES PINRANG - Ready!');
    }

    initCore() {
        // Mobile menu
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                this.innerHTML = navMenu.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
        }
        
        // Search functionality
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        
        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', () => this.performSearch(searchInput.value));
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.performSearch(searchInput.value);
            });
        }
        
        // Update date and time
        this.updateDateTime();
        setInterval(() => this.updateDateTime(), 1000);
        
        // Statistics counter
        this.initStatistics();
    }

    initNewsSystem() {
        console.log('📰 Initializing news system...');
        
        // Create news modal instance
        this.newsModal = new NewsModal();
        window.newsModalInstance = this.newsModal;
        
        // Make news cards clickable
        this.makeNewsCardsClickable();
        
        // Load news into grid
        this.loadNewsGrid();
        
        // Add news search
        this.initNewsSearch();
    }

    makeNewsCardsClickable() {
        // Make all news cards clickable
        document.querySelectorAll('.news-card, .latest-item, .trending-item').forEach(card => {
            card.style.cursor = 'pointer';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            
            card.addEventListener('click', (e) => {
                if (e.target.tagName === 'A' || e.target.closest('a')) return;
                
                let articleId = card.dataset.articleId;
                if (!articleId) {
                    const title = card.querySelector('h3, h4')?.textContent;
                    if (title) {
                        const article = NEWS_DATABASE.articles.find(a => 
                            a.title.includes(title.substring(0, 50))
                        );
                        if (article) articleId = article.id;
                    }
                }
                
                if (articleId) this.openNewsArticle(parseInt(articleId));
            });
            
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });
        
        // Make title links clickable
        document.querySelectorAll('.news-title-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const articleId = parseInt(link.dataset.articleId);
                if (articleId) this.openNewsArticle(articleId);
            });
        });
    }

    loadNewsGrid() {
        const newsGrid = document.querySelector('.news-grid');
        if (!newsGrid) return;
        
        const articles = NEWS_DATABASE.getLatestArticles(6);
        
        // Clear and rebuild news grid
        newsGrid.innerHTML = '';
        articles.forEach(article => {
            const category = NEWS_DATABASE.getCategoryById(article.category);
            const date = new Date(article.date);
            
            const newsCard = document.createElement('article');
            newsCard.className = 'news-card';
            newsCard.dataset.articleId = article.id;
            newsCard.innerHTML = `
                <div class="news-image">
                    <img src="${article.featuredImage}" alt="${article.title}" loading="lazy">
                    <div class="news-date">
                        <span class="date-day">${date.getDate()}</span>
                        <span class="date-month">${date.toLocaleString('id-ID', { month: 'short' }).toUpperCase()}</span>
                    </div>
                    <div class="news-category" style="background: ${category?.color || '#007bff'}">
                        ${category?.name || 'Berita'}
                    </div>
                </div>
                <div class="news-content">
                    <h3><a href="#" class="news-title-link" data-article-id="${article.id}">${article.title}</a></h3>
                    <p class="news-excerpt">${article.excerpt}</p>
                    <div class="news-meta">
                        <span><i class="far fa-user"></i> ${article.author.split(' ')[0]}</span>
                        <span><i class="far fa-clock"></i> ${article.time}</span>
                        <span><i class="far fa-eye"></i> ${article.views.toLocaleString()}</span>
                    </div>
                </div>
            `;
            
            newsGrid.appendChild(newsCard);
        });
        
        // Re-attach click events
        this.makeNewsCardsClickable();
    }

    initNewsSearch() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        
        // Add news search handler
        const originalSearchHandler = searchInput.onkeypress;
        searchInput.onkeypress = (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    const results = NEWS_DATABASE.searchArticles(query);
                    this.showNewsSearchResults(results, query);
                }
            }
        };
    }

    openNewsArticle(articleId) {
        if (this.newsModal) {
            this.newsModal.open(articleId);
        } else {
            // Fallback: open in new tab
            window.open(`#article-${articleId}`, '_blank');
        }
    }

    showNewsSearchResults(results, query) {
        // Simple alert for now - can be enhanced with modal
        if (results.length === 0) {
            alert(`Tidak ditemukan berita dengan kata kunci: "${query}"`);
        } else {
            alert(`Ditemukan ${results.length} berita untuk: "${query}"\n\nKlik salah satu berita untuk membaca lengkap.`);
        }
    }

    initFeatures() {
        // Hero slider
        this.initHeroSlider();
        
        // Statistics counter
        this.initStatistics();
        
        // Emergency buttons
        this.initEmergencyButtons();
        
        // Back to top button
        this.initBackToTop();
    }

    initHeroSlider() {
        const slides = document.querySelectorAll('.hero-slide');
        if (slides.length === 0) return;
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (index + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');
        }
        
        const prevBtn = document.querySelector('.slider-prev');
        const nextBtn = document.querySelector('.slider-next');
        
        if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
        
        // Auto slide every 5 seconds
        setInterval(() => showSlide(currentSlide + 1), 5000);
    }

    initStatistics() {
        const statNumbers = document.querySelectorAll('.stat-number[data-count]');
        if (statNumbers.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => observer.observe(stat));
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const steps = 60;
        const stepValue = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += stepValue;
            if (current >= target) {
                element.textContent = this.formatNumber(target);
                clearInterval(timer);
            } else {
                element.textContent = this.formatNumber(Math.floor(current));
            }
        }, duration / steps);
    }

    formatNumber(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'Jt';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    }

    initEmergencyButtons() {
        document.querySelectorAll('[href^="tel:"]').forEach(btn => {
            btn.addEventListener('click', function(e) {
                if (!confirm('Hubungi nomor darurat 110?')) {
                    e.preventDefault();
                }
            });
        });
    }

    initBackToTop() {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.innerHTML = '⬆';
        backToTopBtn.setAttribute('aria-label', 'Kembali ke atas');
        document.body.appendChild(backToTopBtn);
        
        window.addEventListener('scroll', () => {
            backToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Add styles
        const styles = document.createElement('style');
        styles.textContent = `
            .back-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: #003399;
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 20px;
                cursor: pointer;
                display: none;
                z-index: 999;
                box-shadow: 0 4px 12px rgba(0,51,153,0.3);
                transition: all 0.3s;
            }
            .back-to-top:hover {
                background: #002266;
                transform: translateY(-3px);
            }
        `;
        document.head.appendChild(styles);
    }

    updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        
        const dateElement = document.getElementById('current-date');
        const timeElement = document.getElementById('current-time');
        
        if (dateElement) {
            dateElement.textContent = now.toLocaleDateString('id-ID', options);
        }
        
        if (timeElement) {
            timeElement.textContent = now.toLocaleTimeString('id-ID', { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            });
        }
    }

    performSearch(query) {
        if (!query.trim()) {
            alert('Silakan masukkan kata kunci pencarian');
            return;
        }
        
        // Simple search implementation
        const results = NEWS_DATABASE.searchArticles(query);
        if (results.length > 0) {
            alert(`Ditemukan ${results.length} hasil untuk: "${query}"`);
            // In a real app, you would show the results
        } else {
            alert(`Tidak ditemukan hasil untuk: "${query}"`);
        }
    }
}

// ===== INITIALIZE APPLICATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the main application
    window.humasApp = new HumasPolresApp();
    
    // Add current year to footer if needed
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert(`Terima kasih! Email ${email} berhasil terdaftar.`);
                this.reset();
            }
        });
    }
    
    console.log('🌐 Website HUMAS POLRES PINRANG siap digunakan!');
});

// ===== UTILITY FUNCTIONS =====
function showNotification(message, type = 'info') {
    // Simple notification - can be enhanced
    alert(message);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Make database accessible globally
window.NEWS_DATABASE = NEWS_DATABASE;