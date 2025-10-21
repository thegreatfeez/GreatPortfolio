import { projectsData } from './projects-data.js';

class ImageSlider {
  constructor() {
    this.currentSlide = 0;
    this.slides = null;
    this.totalSlides = 0;
    this.sliderContainer = null;
    this.sliderNav = null;
    this.prevBtn = null;
    this.nextBtn = null;
    this.navDots = null;
    this.autoSlideInterval = null;
  }
  
  init() {
    this.slides = document.querySelectorAll('.slide');
    this.totalSlides = this.slides.length;
    this.sliderContainer = document.getElementById('sliderContainer');
    this.sliderNav = document.getElementById('sliderNav');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    
    if (!this.sliderContainer || this.totalSlides === 0) return;
    
    this.createNavDots();
    this.addEventListeners();
    this.startAutoSlide();
  }
  
  createNavDots() {
    this.sliderNav.innerHTML = '';
    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('nav-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('data-slide', i);
      this.sliderNav.appendChild(dot);
    }
    this.navDots = document.querySelectorAll('.nav-dot');
  }
  
  addEventListeners() {
    this.prevBtn.addEventListener('click', () => {
      this.pauseAutoSlide();
      this.prevSlide();
      this.startAutoSlide();
    });
    
    this.nextBtn.addEventListener('click', () => {
      this.pauseAutoSlide();
      this.nextSlide();
      this.startAutoSlide();
    });
    
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

function getProjectIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  console.log('Project ID from URL:', id);
  return id;
}

function loadProjectData() {
  if (typeof projectsData === 'undefined') {
    console.error('projectsData is not defined. Make sure projects-data.js is loaded.');
    return;
  }
  
  const projectId = getProjectIdFromURL();
  
  if (!projectId || isNaN(projectId)) {
    console.error('Invalid project ID');
    window.location.href = 'index.html';
    return;
  }
  
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    console.error('Project not found with ID:', projectId);
    window.location.href = 'index.html';
    return;
  }
  
  console.log('Loading project:', project.title);
  
  document.title = `Case Study of ${project.title}`;
  document.getElementById('projectTitle').textContent = project.title;
  document.getElementById('projectShortDesc').textContent = project.shortDesc;
  document.getElementById('heroLiveLink').href = project.liveLink;
  
  const imageContainer = document.getElementById('imageContainer');
  
  if (project.hasSlider && project.images.length > 1) {
    const sliderHTML = `
      <div class="image-slider">
        <div class="slider-container" id="sliderContainer">
          ${project.images.map(img => `
            <div class="slide">
              <img src="${img}" alt="${project.title} Screenshot" class="project-details__showcase-img"/>
            </div>
          `).join('')}
        </div>
        <button class="slider-arrows arrow-left" id="prevBtn">❮</button>
        <button class="slider-arrows arrow-right" id="nextBtn">❯</button>
        <div class="slider-nav" id="sliderNav"></div>
      </div>
    `;
    imageContainer.innerHTML = sliderHTML;
    
    const slider = new ImageSlider();
    slider.init();
  } else {
    imageContainer.innerHTML = `
      <img src="${project.images[0]}" alt="${project.title} Image" class="project-details__showcase-img"/>
    `;
  }
  
  const overviewContainer = document.getElementById('overviewContainer');
  overviewContainer.innerHTML = project.overview.map(para => 
    `<p class="project-details__desc-para">${para}</p>`
  ).join('');
  
  const toolsContainer = document.getElementById('toolsContainer');
  toolsContainer.innerHTML = project.tools.map(tool => 
    `<div class="skills__skill">${tool}</div>`
  ).join('');
  
  document.getElementById('liveLink').href = project.liveLink;
  document.getElementById('codeLink').href = project.codeLink;
}

document.addEventListener('DOMContentLoaded', loadProjectData);