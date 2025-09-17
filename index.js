// Updated index.js
class PortfolioManager {
    constructor() {
        this.init();
    }

    init() {
        this.renderProjects();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
    }

    renderProjects() {
        const projectsContainer = document.querySelector('.projects__content');
        if (!projectsContainer) return;

        // Clear existing content
        projectsContainer.innerHTML = '';

        // Generate project cards dynamically
        projectsData.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectsContainer.appendChild(projectCard);
        });
    }

    createProjectCard(project) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'projects__row';

        // Use the first image for the card display
        const mainImage = project.images[0];

        projectDiv.innerHTML = `
            <div class="projects__row-img-cont">
                <img src="${mainImage}" alt="${project.title} Screenshot" class="projects__row-img" loading="lazy"/>
            </div>
            <div class="projects__row-content">
                <h3 class="projects__row-content-title">${project.title}</h3>
                <p class="projects__row-content-desc">
                    ${project.shortDescription}
                </p>
                <a href="./project.html?id=${project.id}" class="btn btn--med btn--theme dynamicBgClr">Learn more</a>
            </div>
        `;

        return projectDiv;
    }

    setupMobileMenu() {
        const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
        const hamMenu = document.querySelector('.header__main-ham-menu');
        const hamMenuClose = document.querySelector('.header__main-ham-menu-close');
        const mobileMenu = document.querySelector('.header__sm-menu');

        if (!hamMenuBtn) return;

        hamMenuBtn.addEventListener('click', () => {
            if (hamMenu.classList.contains('d-none')) {

                hamMenu.classList.remove('d-none');
                hamMenuClose.classList.add('d-none');
                mobileMenu.classList.remove('header__sm-menu--active');
            } else {

                hamMenu.classList.add('d-none');
                hamMenuClose.classList.remove('d-none');
                mobileMenu.classList.add('header__sm-menu--active');
            }
        });


        const mobileLinks = document.querySelectorAll('.header__sm-menu-link a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamMenu.classList.remove('d-none');
                hamMenuClose.classList.add('d-none');
                mobileMenu.classList.remove('header__sm-menu--active');
            });
        });
    }

    setupSmoothScrolling() {

        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }


    addProject(projectData) {
        projectsData.push(projectData);
        this.renderProjects();
    }

   
    updateProject(projectId, updatedData) {
        const projectIndex = projectsData.findIndex(project => project.id === projectId);
        if (projectIndex !== -1) {
            projectsData[projectIndex] = { ...projectsData[projectIndex], ...updatedData };
            this.renderProjects();
        }
    }
}


class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupHeaderScrollEffect();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);


        const animatedElements = document.querySelectorAll('.projects__row, .about__content-main, .about__content-skills');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    setupHeaderScrollEffect() {
        const header = document.querySelector('.header');
        if (!header) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(26, 26, 46, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'var(--glass-bg)';
                header.style.backdropFilter = 'blur(20px)';
            }
        });
    }
}

class ContactHandler {
    constructor() {
        this.setupContactForm();
    }

    setupContactForm() {
        const contactForm = document.querySelector('.contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(contactForm);
        });
    }

    handleFormSubmission(form) {
        console.log('Form submitted');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    if (typeof projectsData !== 'undefined') {
        new PortfolioManager();
        new ScrollAnimations();
        new ContactHandler();
    }
});


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioManager, ScrollAnimations, ContactHandler };
}