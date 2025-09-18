class ProjectRenderer {
    constructor() {
        this.currentProject = null;
        this.slider = null;
    }

    init() {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = parseInt(urlParams.get('id'));
        
        if (!projectId) {
            this.redirectToHome();
            return;
        }

        this.currentProject = projectsData.find(project => project.id === projectId);
        
        if (!this.currentProject) {
            this.redirectToHome();
            return;
        }

        this.renderProject();
    }

    redirectToHome() {
        window.location.href = './index.html';
    }

    renderProject() {
        this.renderBasicInfo();
        this.renderImages();
        this.renderDescription();
        this.renderTools();
        this.renderLinks();
        this.updatePageTitle();
    }

    renderBasicInfo() {
        document.getElementById('project-title').textContent = this.currentProject.title;
        document.getElementById('project-short-desc').textContent = this.currentProject.shortDescription;
        document.getElementById('hero-live-link').href = this.currentProject.liveLink;
    }

    renderImages() {
        const imageShowcase = document.getElementById('image-showcase');
        const images = this.currentProject.images;

        if (images.length === 1) {
            imageShowcase.innerHTML = `
                <img src="${images[0]}" alt="${this.currentProject.title} Image" class="project-details__showcase-img"/>
            `;
        } else {
            this.createSimpleSlider(imageShowcase, images);
        }
    }

    createSimpleSlider(container, images) {
        // Create a much simpler slider structure
        const sliderHTML = `
            <div class="simple-slider">
                <div class="slider-viewport">
                    <div class="slider-track" id="sliderTrack">
                        ${images.map((img, index) => `
                            <div class="slider-slide">
                                <img src="${img}" alt="${this.currentProject.title} Screenshot ${index + 1}" />
                            </div>
                        `).join('')}
                    </div>
                </div>
                <button class="slider-btn slider-prev" id="prevBtn">❮</button>
                <button class="slider-btn slider-next" id="nextBtn">❯</button>
                <div class="slider-dots" id="sliderDots">
                    ${images.map((_, index) => `
                        <span class="slider-dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
                    `).join('')}
                </div>
            </div>
            
            <style>
                .simple-slider {
                    position: relative;
                    width: 100%;
                    background: var(--glass-bg);
                    backdrop-filter: blur(10px);
                    border: 1px solid var(--glass-border);
                    border-radius: 20px;
                    padding: 20px;
                    overflow: hidden;
                }
                
                .slider-viewport {
                    width: 100%;
                    overflow: hidden;
                    border-radius: 15px;
                }
                
                .slider-track {
                    display: flex;
                    width: ${images.length * 100}%;
                    transition: transform 0.5s ease;
                    transform: translateX(0%);
                }
                
                .slider-slide {
                    width: ${100 / images.length}%;
                    flex-shrink: 0;
                    padding: 0 10px;
                    box-sizing: border-box;
                }
                
                .slider-slide img {
                    width: 100%;
                    height: 400px;
                    object-fit: contain;
                    border-radius: 10px;
                    background: #16213e;
                    display: block;
                }
                
                .slider-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(102, 126, 234, 0.8);
                    color: white;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    font-size: 18px;
                    cursor: pointer;
                    z-index: 10;
                    transition: all 0.3s ease;
                }
                
                .slider-btn:hover {
                    background: rgba(102, 126, 234, 1);
                    transform: translateY(-50%) scale(1.1);
                }
                
                .slider-prev {
                    left: 30px;
                }
                
                .slider-next {
                    right: 30px;
                }
                
                .slider-dots {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin-top: 20px;
                }
                
                .slider-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .slider-dot.active {
                    background: #667eea;
                    transform: scale(1.2);
                }
                
                .slider-dot:hover {
                    background: rgba(255, 255, 255, 0.8);
                }
            </style>
        `;
        
        container.innerHTML = sliderHTML;
        this.initializeSimpleSlider(images.length);
    }

    initializeSimpleSlider(totalSlides) {
        this.slider = new SimpleImageSlider(totalSlides);
    }

    renderDescription() {
        const descriptionContainer = document.getElementById('project-description');
        const paragraphs = this.currentProject.fullDescription.map(para => 
            `<p class="project-details__desc-para">${para}</p>`
        ).join('');
        
        descriptionContainer.innerHTML = paragraphs;
    }

    renderTools() {
        const toolsContainer = document.getElementById('project-tools');
        const tools = this.currentProject.tools.map(tool => 
            `<div class="skills__skill">${tool}</div>`
        ).join('');
        
        toolsContainer.innerHTML = tools;
    }

    renderLinks() {
        document.getElementById('main-live-link').href = this.currentProject.liveLink;
        document.getElementById('code-link').href = this.currentProject.codeLink;
    }

    updatePageTitle() {
        document.title = `Case Study of ${this.currentProject.title} | Adams Afeez`;
    }
}

class SimpleImageSlider {
    constructor(totalSlides) {
        this.currentSlide = 0;
        this.totalSlides = totalSlides;
        this.sliderTrack = document.getElementById('sliderTrack');
        this.dots = document.querySelectorAll('.slider-dot');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.autoSlideInterval = null;
        
        this.init();
    }
    
    init() {
        this.addEventListeners();
        this.startAutoSlide();
    }
    
    addEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.pauseAutoSlide();
                this.prevSlide();
                this.startAutoSlide();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.pauseAutoSlide();
                this.nextSlide();
                this.startAutoSlide();
            });
        }
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.pauseAutoSlide();
                this.goToSlide(index);
                this.startAutoSlide();
            });
        });
        
        // Pause on hover
        const slider = document.querySelector('.simple-slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.pauseAutoSlide());
            slider.addEventListener('mouseleave', () => this.startAutoSlide());
        }
    }
    
    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        const translateX = -(slideIndex * (100 / this.totalSlides));
        
        if (this.sliderTrack) {
            this.sliderTrack.style.transform = `translateX(${translateX}%)`;
        }
        
        this.updateDots();
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(this.currentSlide);
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(this.currentSlide);
    }
    
    updateDots() {
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    startAutoSlide() {
        this.pauseAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 4000);
    }
    
    pauseAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const projectRenderer = new ProjectRenderer();
    projectRenderer.init();
});