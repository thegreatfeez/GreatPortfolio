import { projectsData } from './projects-data.js';

function loadProjects() {
  const projectsContainer = document.getElementById('projectsContainer');
  
  if (!projectsContainer) {
    console.error('Projects container not found');
    return;
  }
  
  if (typeof projectsData === 'undefined') {
    console.error('projectsData is not defined. Make sure projects-data.js is loaded first.');
    return;
  }
  
  console.log('Loading', projectsData.length, 'projects');
  
  projectsContainer.innerHTML = projectsData.map(project => `
    <div class="projects__row">
      <div class="projects__row-img-cont">
        <img src="${project.thumbnail}" alt="${project.title} Screenshot" class="projects__row-img" loading="lazy"/>
      </div>
      <div class="projects__row-content">
        <h3 class="projects__row-content-title">${project.title}</h3>
        <p class="projects__row-content-desc">
          ${project.shortDesc}
        </p>
        <a href="./project.html?id=${project.id}" class="btn btn--med btn--theme dynamicBgClr">Learn more</a>
      </div>
    </div>
  `).join('');
  
  console.log('Projects loaded successfully');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadProjects);
} else {
  loadProjects();
}