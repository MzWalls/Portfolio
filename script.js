const projectsContainer = document.getElementById("projects");
const filters = document.querySelectorAll(".filter");

const projects = [
  ...Array.from({ length: 6 }, (_, i) => ({
    category: "branding",
    folder: "branding",
    file: `branding ${i + 1}.jpg`,
    label: "BRANDING",
    title: `Football Branding ${i + 1}`
  })),

  ...Array.from({ length: 15 }, (_, i) => ({
    category: "posters",
    folder: "posters",
    file: `posters ${i + 1}.jpg`,
    label: "POSTERS",
    title: `Football Poster ${i + 1}`
  })),

  ...Array.from({ length: 6 }, (_, i) => ({
    category: "social-media",
    folder: "social media",
    file: `social media ${i + 1}.jpg`,
    label: "SOCIAL MEDIA",
    title: `Social Media Design ${i + 1}`
  })),

  ...Array.from({ length: 5 }, (_, i) => ({
    category: "statistics",
    folder: "statistics",
    file: `statistics ${i + 1}.jpg`,
    label: "STATISTICS",
    title: `Football Statistics ${i + 1}`
  })),

  ...Array.from({ length: 8 }, (_, i) => ({
    category: "thumbnails",
    folder: "thumbnails",
    file: `thumbnails ${i + 1}.jpg`,
    label: "THUMBNAILS",
    title: `Football Thumbnail ${i + 1}`
  }))
];

projects.forEach(projectData => {

  const project = document.createElement("article");

  project.className = "project";
  project.dataset.category = projectData.category;

  project.innerHTML = `
    <div class="project-image">
      <img
        src="${projectData.folder}/${projectData.file}"
        alt="${projectData.title}"
        loading="lazy"
      >
    </div>

    <div class="project-info">
      <p>${projectData.label}</p>
      <h3>${projectData.title}</h3>
    </div>
  `;

  projectsContainer.appendChild(project);
});


/* =========================
   FILTERS
========================= */

filters.forEach(filter => {

  filter.addEventListener("click", () => {

    filters.forEach(button => {
      button.classList.remove("active");
    });

    filter.classList.add("active");

    const selectedCategory = filter.dataset.filter;

    document.querySelectorAll(".project").forEach(project => {

      if (
        selectedCategory === "all" ||
        project.dataset.category === selectedCategory
      ) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }

    });

  });

});


/* =========================
   LIGHTBOX
========================= */

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `
  <button class="lightbox-close">&times;</button>

  <img class="lightbox-image" src="" alt="">

  <div class="lightbox-title"></div>
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox-image");
const lightboxTitle = lightbox.querySelector(".lightbox-title");
const lightboxClose = lightbox.querySelector(".lightbox-close");


/* OPEN IMAGE */

document.querySelectorAll(".project-image img").forEach(image => {

  image.addEventListener("click", () => {

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxTitle.textContent = image.alt;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


/* CLOSE BUTTON */

lightboxClose.addEventListener("click", closeLightbox);


/* CLICK OUTSIDE IMAGE */

lightbox.addEventListener("click", event => {

  if (event.target === lightbox) {
    closeLightbox();
  }

});


/* ESC KEY */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeLightbox();
  }

});


function closeLightbox() {

  lightbox.classList.remove("active");

  document.body.style.overflow = "";

}
