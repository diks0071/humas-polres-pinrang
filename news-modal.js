/**
 * SISTEM MODAL BERITA
 * Menampilkan berita lengkap dalam modal pop-up
 */

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
        console.log('📰 Sistem modal berita siap');
    }

    createModalStructure() {
        // Create modal container
        this.modal = document.createElement('div');
        this.modal.className = 'news-modal';
        this.modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-container">
                <div class="modal-header">
                    <button class="modal-close" aria-label="Tutup">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="article-category"></div>
                    <h2 class="article-title"></h2>
                    <div class="article-meta">
                        <span class="meta-author"></span>
                        <span class="meta-date"></span>
                        <span class="meta-views"><i class="far fa-eye"></i> <span class="views-count">0</span></span>
                        <span class="meta-comments"><i class="far fa-comment"></i> <span class="comments-count">0</span></span>
                    </div>
                </div>
                
                <div class="modal-body">
                    <div class="article-featured-image">
                        <img src="" alt="">
                    </div>
                    
                    <div class="article-excerpt">
                        <p></p>
                    </div>
                    
                    <div class="article-content">
                        <!-- Konten berita akan dimuat di sini -->
                    </div>
                    
                    <div class="article-gallery">
                        <h4><i class="fas fa-images"></i> Galeri Foto</h4>
                        <div class="gallery-grid"></div>
                    </div>
                    
                    <div class="article-tags">
                        <h4><i class="fas fa-tags"></i> Tag Berita</h4>
                        <div class="tags-container"></div>
                    </div>
                    
                    <div class="article-details">
                        <h4><i class="fas fa-info-circle"></i> Detail Kegiatan</h4>
                        <div class="details-grid"></div>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <div class="share-section">
                        <h5><i class="fas fa-share-alt"></i> Bagikan Berita</h5>
                        <div class="share-buttons">
                            <button class="share-btn facebook" data-platform="facebook">
                                <i class="fab fa-facebook-f"></i>
                            </button>
                            <button class="share-btn twitter" data-platform="twitter">
                                <i class="fab fa-twitter"></i>
                            </button>
                            <button class="share-btn whatsapp" data-platform="whatsapp">
                                <i class="fab fa-whatsapp"></i>
                            </button>
                            <button class="share-btn copy-link" data-platform="copy">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="btn btn-outline prev-article">
                            <i class="fas fa-chevron-left"></i> Berita Sebelumnya
                        </button>
                        <button class="btn btn-primary print-article">
                            <i class="fas fa-print"></i> Cetak Berita
                        </button>
                        <button class="btn btn-outline next-article">
                            Berita Selanjutnya <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Add modal to body
        document.body.appendChild(this.modal);

        // Add modal styles
        this.addModalStyles();
    }

    addModalStyles() {
        const styles = `
            /* News Modal Styles */
            .news-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                display: none;
            }
            
            .news-modal.active {
                display: block;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(5px);
            }
            
            .modal-container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 90%;
                max-width: 1000px;
                max-height: 90vh;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                animation: modalSlideIn 0.3s ease;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }
            
            @keyframes modalSlideIn {
                from {
                    opacity: 0;
                    transform: translate(-50%, -60%);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
            }
            
            .modal-header {
                padding: 25px 30px 15px;
                background: linear-gradient(135deg, #003399, #002266);
                color: white;
                position: relative;
            }
            
            .modal-close {
                position: absolute;
                top: 20px;
                right: 20px;
                background: rgba(255, 255, 255, 0.1);
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                color: white;
                font-size: 18px;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .modal-close:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: rotate(90deg);
            }
            
            .article-category {
                display: inline-block;
                background: rgba(255, 255, 255, 0.9);
                color: #003399;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 15px;
            }
            
            .article-title {
                font-size: 24px;
                line-height: 1.3;
                margin: 0 0 15px 0;
                color: white;
            }
            
            .article-meta {
                display: flex;
                gap: 20px;
                font-size: 14px;
                opacity: 0.9;
                flex-wrap: wrap;
            }
            
            .article-meta i {
                margin-right: 5px;
            }
            
            .modal-body {
                padding: 30px;
                overflow-y: auto;
                flex: 1;
            }
            
            .article-featured-image {
                width: 100%;
                height: 400px;
                border-radius: 8px;
                overflow: hidden;
                margin-bottom: 25px;
            }
            
            .article-featured-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;
            }
            
            .article-featured-image:hover img {
                transform: scale(1.02);
            }
            
            .article-excerpt {
                font-size: 18px;
                line-height: 1.6;
                color: #333;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 2px solid #f0f0f0;
                font-weight: 500;
            }
            
            .article-content {
                font-size: 16px;
                line-height: 1.8;
                color: #444;
                margin-bottom: 30px;
            }
            
            .article-content h3 {
                color: #003399;
                margin: 25px 0 15px;
                font-size: 20px;
            }
            
            .article-content h4 {
                color: #0056b3;
                margin: 20px 0 10px;
                font-size: 18px;
            }
            
            .article-content p {
                margin-bottom: 15px;
            }
            
            .article-content ul,
            .article-content ol {
                margin-bottom: 20px;
                padding-left: 20px;
            }
            
            .article-content li {
                margin-bottom: 8px;
            }
            
            .article-content blockquote {
                border-left: 4px solid #003399;
                padding: 15px 20px;
                margin: 20px 0;
                background: #f8f9ff;
                font-style: italic;
                color: #555;
            }
            
            .news-table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
            }
            
            .news-table th {
                background: #003399;
                color: white;
                padding: 12px;
                text-align: left;
                font-weight: 600;
            }
            
            .news-table td {
                padding: 12px;
                border-bottom: 1px solid #eee;
            }
            
            .news-table tr:nth-child(even) {
                background: #f8f9ff;
            }
            
            .article-gallery {
                margin: 40px 0;
                padding: 25px;
                background: #f8f9ff;
                border-radius: 8px;
            }
            
            .article-gallery h4 {
                color: #003399;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .gallery-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                gap: 15px;
            }
            
            .gallery-item {
                height: 150px;
                border-radius: 6px;
                overflow: hidden;
                cursor: pointer;
                transition: transform 0.3s ease;
            }
            
            .gallery-item:hover {
                transform: scale(1.05);
            }
            
            .gallery-item img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .article-tags {
                margin: 30px 0;
            }
            
            .article-tags h4 {
                color: #003399;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .tags-container {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            
            .tag {
                background: #e9ecef;
                color: #495057;
                padding: 6px 15px;
                border-radius: 20px;
                font-size: 14px;
                transition: all 0.3s ease;
            }
            
            .tag:hover {
                background: #003399;
                color: white;
                transform: translateY(-2px);
            }
            
            .article-details {
                margin: 40px 0;
                padding: 25px;
                background: linear-gradient(135deg, #f8f9ff, #e9ecef);
                border-radius: 8px;
                border-left: 4px solid #003399;
            }
            
            .article-details h4 {
                color: #003399;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .details-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 20px;
            }
            
            .detail-item {
                background: white;
                padding: 15px;
                border-radius: 6px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            .detail-label {
                font-size: 12px;
                color: #6c757d;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 5px;
            }
            
            .detail-value {
                font-size: 16px;
                color: #333;
                font-weight: 500;
            }
            
            .modal-footer {
                padding: 25px 30px;
                background: #f8f9fa;
                border-top: 1px solid #dee2e6;
            }
            
            .share-section {
                margin-bottom: 25px;
                text-align: center;
            }
            
            .share-section h5 {
                color: #495057;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
            
            .share-buttons {
                display: flex;
                justify-content: center;
                gap: 15px;
            }
            
            .share-btn {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                border: none;
                color: white;
                font-size: 18px;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .share-btn.facebook {
                background: #1877f2;
            }
            
            .share-btn.twitter {
                background: #1da1f2;
            }
            
            .share-btn.whatsapp {
                background: #25d366;
            }
            
            .share-btn.copy-link {
                background: #6c757d;
            }
            
            .share-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
            
            .action-buttons {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 15px;
            }
            
            .action-buttons .btn {
                min-width: 180px;
            }
            
            .prev-article i,
            .next-article i {
                transition: transform 0.3s ease;
            }
            
            .prev-article:hover i {
                transform: translateX(-5px);
            }
            
            .next-article:hover i {
                transform: translateX(5px);
            }
            
            .print-article:hover {
                background: #002266;
            }
            
            /* Responsive Styles */
            @media (max-width: 768px) {
                .modal-container {
                    width: 95%;
                    max-height: 95vh;
                }
                
                .modal-header {
                    padding: 20px 15px 10px;
                }
                
                .modal-close {
                    top: 10px;
                    right: 10px;
                    width: 35px;
                    height: 35px;
                }
                
                .article-title {
                    font-size: 20px;
                    padding-right: 40px;
                }
                
                .article-meta {
                    gap: 10px;
                    font-size: 13px;
                }
                
                .modal-body {
                    padding: 20px;
                }
                
                .article-featured-image {
                    height: 250px;
                }
                
                .article-excerpt {
                    font-size: 16px;
                }
                
                .article-content {
                    font-size: 15px;
                }
                
                .gallery-grid {
                    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                }
                
                .gallery-item {
                    height: 120px;
                }
                
                .details-grid {
                    grid-template-columns: 1fr;
                }
                
                .modal-footer {
                    padding: 20px;
                }
                
                .action-buttons {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .action-buttons .btn {
                    width: 100%;
                }
            }
            
            @media (max-width: 480px) {
                .article-title {
                    font-size: 18px;
                }
                
                .article-featured-image {
                    height: 200px;
                }
                
                .gallery-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
        `;

        const styleElement = document.createElement('style');
        styleElement.id = 'news-modal-styles';
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }

    bindEvents() {
        // Close modal on overlay click
        this.modal.querySelector('.modal-overlay').addEventListener('click', () => this.close());
        
        // Close modal on close button click
        this.modal.querySelector('.modal-close').addEventListener('click', () => this.close());
        
        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
        
        // Share buttons
        this.modal.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleShare(e));
        });
        
        // Print button
        this.modal.querySelector('.print-article').addEventListener('click', () => this.printArticle());
        
        // Navigation buttons
        this.modal.querySelector('.prev-article').addEventListener('click', () => this.navigateArticle('prev'));
        this.modal.querySelector('.next-article').addEventListener('click', () => this.navigateArticle('next'));
        
        // Gallery image click
        this.modal.addEventListener('click', (e) => {
            if (e.target.closest('.gallery-item')) {
                this.openGallery(e.target.closest('.gallery-item'));
            }
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
        
        // Update modal content
        this.updateModalContent(article);
        
        // Show modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Update view count
        this.updateViewCount(articleId);
        
        console.log('📖 Membuka artikel:', article.title);
    }

    close() {
        this.isOpen = false;
        this.modal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
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
        this.modal.querySelector('.views-count').textContent = article.views.toLocaleString();
        this.modal.querySelector('.comments-count').textContent = article.comments;
        
        // Update featured image
        const featuredImg = this.modal.querySelector('.article-featured-image img');
        featuredImg.src = article.featuredImage || 'assets/images/news/default.jpg';
        featuredImg.alt = article.title;
        
        // Update excerpt
        this.modal.querySelector('.article-excerpt p').textContent = article.excerpt;
        
        // Update content
        this.modal.querySelector('.article-content').innerHTML = article.content;
        
        // Update gallery
        this.updateGallery(article.images);
        
        // Update tags
        this.updateTags(article.tags);
        
        // Update details
        this.updateDetails(article);
        
        // Update navigation buttons
        this.updateNavigationButtons(article.id);
    }

    formatDate(dateString, timeString) {
        const date = new Date(`${dateString}T${timeString}`);
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('id-ID', options);
    }

    updateGallery(images) {
        const galleryGrid = this.modal.querySelector('.gallery-grid');
        galleryGrid.innerHTML = '';
        
        if (!images || images.length === 0) {
            this.modal.querySelector('.article-gallery').style.display = 'none';
            return;
        }
        
        images.forEach((imgSrc, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `<img src="${imgSrc}" alt="Galeri ${index + 1}" loading="lazy">`;
            galleryGrid.appendChild(galleryItem);
        });
        
        this.modal.querySelector('.article-gallery').style.display = 'block';
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

    updateDetails(article) {
        const detailsGrid = this.modal.querySelector('.details-grid');
        detailsGrid.innerHTML = '';
        
        // Add location if exists
        if (article.location) {
            this.addDetailItem('Lokasi Kegiatan', article.location);
        }
        
        // Add date if not already in meta
        this.addDetailItem('Tanggal Pelaksanaan', this.formatDate(article.date, article.time));
        
        // Add other custom details
        Object.keys(article).forEach(key => {
            if (typeof article[key] === 'string' && 
                !['title', 'excerpt', 'content', 'author', 'position', 'featuredImage'].includes(key) &&
                article[key].length < 100) {
                const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                this.addDetailItem(label, article[key]);
            }
        });
        
        if (detailsGrid.children.length === 0) {
            this.modal.querySelector('.article-details').style.display = 'none';
        } else {
            this.modal.querySelector('.article-details').style.display = 'block';
        }
    }

    addDetailItem(label, value) {
        const detailsGrid = this.modal.querySelector('.details-grid');
        const detailItem = document.createElement('div');
        detailItem.className = 'detail-item';
        detailItem.innerHTML = `
            <div class="detail-label">${label}</div>
            <div class="detail-value">${value}</div>
        `;
        detailsGrid.appendChild(detailItem);
    }

    updateNavigationButtons(currentId) {
        const articles = NEWS_DATABASE.articles;
        const currentIndex = articles.findIndex(article => article.id === currentId);
        
        const prevBtn = this.modal.querySelector('.prev-article');
        const nextBtn = this.modal.querySelector('.next-article');
        
        // Previous button
        if (currentIndex > 0) {
            const prevArticle = articles[currentIndex - 1];
            prevBtn.disabled = false;
            prevBtn.onclick = () => this.open(prevArticle.id);
        } else {
            prevBtn.disabled = true;
            prevBtn.onclick = null;
        }
        
        // Next button
        if (currentIndex < articles.length - 1) {
            const nextArticle = articles[currentIndex + 1];
            nextBtn.disabled = false;
            nextBtn.onclick = () => this.open(nextArticle.id);
        } else {
            nextBtn.disabled = true;
            nextBtn.onclick = null;
        }
    }

    updateViewCount(articleId) {
        // In a real application, this would send an API request
        // For now, just update the local database
        const article = NEWS_DATABASE.getArticleById(articleId);
        if (article) {
            article.views++;
            this.modal.querySelector('.views-count').textContent = article.views.toLocaleString();
        }
    }

    handleShare(event) {
        const platform = event.currentTarget.dataset.platform;
        const article = this.currentArticle;
        const url = window.location.href.split('?')[0] + `?news=${article.id}`;
        const text = `Baca berita: ${article.title} - ${article.excerpt}`;
        
        switch(platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                break;
                
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                break;
                
            case 'whatsapp':
                window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, '_blank');
                break;
                
            case 'copy':
                navigator.clipboard.writeText(`${text} ${url}`).then(() => {
                    this.showNotification('Link berita berhasil disalin!', 'success');
                });
                break;
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
                    .excerpt { font-size: 18px; font-weight: bold; margin: 20px 0; padding: 15px; background: #f8f9ff; }
                    .content { margin-top: 30px; }
                    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; font-size: 12px; color: #666; }
                    @media print {
                        body { margin: 0; }
                        .no-print { display: none; }
                    }
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
                    <strong>Tanggal:</strong> ${this.formatDate(article.date, article.time)}<br>
                    <strong>Dilihat:</strong> ${article.views} kali | <strong>Komentar:</strong> ${article.comments}
                </div>
                
                <div class="excerpt">
                    ${article.excerpt}
                </div>
                
                <div class="content">
                    ${article.content}
                </div>
                
                <div class="footer">
                    <p><strong>HUMAS POLRES PINRANG</strong><br>
                    Jl. Jenderal Sudirman No. 45, Pinrang, Sulawesi Selatan 91271<br>
                    Telp: (0421) 123456 | Email: humas.polrespinrang@polri.go.id</p>
                    <p>© ${new Date().getFullYear()} Humas Polres Pinrang. Hak Cipta Dilindungi Undang-Undang.</p>
                </div>
                
                <script>
                    window.onload = function() {
                        window.print();
                    };
                </script>
            </body>
            </html>
        `;
        
        printWindow.document.write(printContent);
        printWindow.document.close();
    }

    navigateArticle(direction) {
        const articles = NEWS_DATABASE.articles;
        const currentIndex = articles.findIndex(article => article.id === this.currentArticle.id);
        
        let newIndex;
        if (direction === 'prev' && currentIndex > 0) {
            newIndex = currentIndex - 1;
        } else if (direction === 'next' && currentIndex < articles.length - 1) {
            newIndex = currentIndex + 1;
        } else {
            return;
        }
        
        this.open(articles[newIndex].id);
    }

    openGallery(galleryItem) {
        const imgSrc = galleryItem.querySelector('img').src;
        
        const lightbox = document.createElement('div');
        lightbox.className = 'gallery-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-overlay"></div>
            <div class="lightbox-content">
                <button class="lightbox-close"><i class="fas fa-times"></i></button>
                <img src="${imgSrc}" alt="Galeri">
            </div>
        `;
        
        document.body.appendChild(lightbox);
        
        // Add styles
        if (!document.querySelector('#lightbox-styles')) {
            const styles = document.createElement('style');
            styles.id = 'lightbox-styles';
            styles.textContent = `
                .gallery-lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .lightbox-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(10px);
                }
                
                .lightbox-content {
                    position: relative;
                    z-index: 2;
                    max-width: 90%;
                    max-height: 90%;
                }
                
                .lightbox-content img {
                    max-width: 100%;
                    max-height: 80vh;
                    border-radius: 8px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                }
                
                .lightbox-close {
                    position: absolute;
                    top: -50px;
                    right: 0;
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    font-size: 20px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .lightbox-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: rotate(90deg);
                }
            `;
            document.head.appendChild(styles);
        }
        
        // Close lightbox
        lightbox.addEventListener('click', (e) => {
            if (e.target.classList.contains('lightbox-overlay') || 
                e.target.classList.contains('lightbox-close') ||
                e.target.closest('.lightbox-close')) {
                lightbox.remove();
            }
        });
        
        // Close on Escape
        document.addEventListener('keydown', function closeLightbox(e) {
            if (e.key === 'Escape' && document.querySelector('.gallery-lightbox')) {
                document.querySelector('.gallery-lightbox').remove();
                document.removeEventListener('keydown', closeLightbox);
            }
        });
    }

    showNotification(message, type = 'info') {
        // Implementation of notification system
        // This would be integrated with your existing notification system
        alert(message); // Simple fallback
    }
}

// Initialize modal system when DOM is loaded
let newsModalInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    newsModalInstance = new NewsModal();
    
    // Make it globally accessible
    window.NewsModal = newsModalInstance;
    
    console.log('✅ Sistem modal berita telah diinisialisasi');
});