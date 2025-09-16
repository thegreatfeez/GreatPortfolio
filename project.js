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
           
            this.createImageSlider(imageShowcase, images);
        }
    }

    createImageSlider(container, images) {
        const sliderHTML = `
            <div class="image-slider">
                <div class="slider-container" id="sliderContainer">
                    ${images.map((img, index) => `
                        <div class="slide">
                            <img src="${img}" alt="${this.currentProject.title} Screenshot ${index + 1}" class="project-details__showcase-img"/>
                        </div>
                    `).join('')}
                </div>
                <button class="slider-arrows arrow-left" id="prevBtn">❮</button>
                <button class="slider-arrows arrow-right" id="nextBtn">❯</button>
                <div class="slider-nav" id="sliderNav">
                    ${images.map((_, index) => `
                        <span class="nav-dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
                    `).join('')}
                </div>
            </div>
        `;
        
        container.innerHTML = sliderHTML;
        this.initializeSlider(images.length);
    }

    initializeSlider(totalSlides) {
        this.slider = new ImageSlider(totalSlides);
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


class ImageSlider {
    constructor(totalSlides) {
        this.currentSlide = 0;
        this.totalSlides = totalSlides;
        this.sliderContainer = document.getElementById('sliderContainer');
        this.navDots = document.querySelectorAll('.nav-dot');
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
        
        this.navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.pauseAutoSlide();
                this.goToSlide(index);
                this.startAutoSlide();
            });
        });
        
        const slider = document.querySelector('.image-slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.pauseAutoSlide());
            slider.addEventListener('mouseleave', () => this.startAutoSlide());
        }
    }
    
    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        const translateX = -slideIndex * 100;
        this.sliderContainer.style.transform = `translateX(${translateX}%)`;
        this.updateNavDots();
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(this.currentSlide);
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(this.currentSlide);
    }
    
    updateNavDots() {
        this.navDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    startAutoSlide() {
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