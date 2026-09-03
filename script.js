const projectsContainer = document.getElementById("projects");
const filters = document.querySelectorAll(".filter");

const projects = [
  // BRANDING
  ...Array.from({ length: 6 }, (_, i) => ({
    category: "branding",
    folder: "branding",
    file: `branding ${i + 1}.jpg`,
    label: "BRANDING",
    title: `Football Branding ${i + 1}`
  })),

  // POSTERS
  ...Array.from({ length: 15 }, (_, i) => ({
    category: "posters",
    folder: "posters",
    file: `posters ${i + 1}.jpg`,
    label: "POSTERS",
    title: `Football Poster ${i + 1}`
  })),

  // SOCIAL MEDIA
  ...Array.from({ length: 6 }, (_, i) => ({
    category: "social-media",
    folder: "social media",
    file: `social media ${i + 1}.jpg`,
    label: "SOCIAL MEDIA",
    title: `Social Media Design ${i + 1}`
  })),

  // STATISTICS
  ...Array.from({ length: 5 }, (_, i) => ({
    category: "statistics",
    folder: "statistics",
    file: `statistics ${i + 1}.jpg`,
    label: "STATISTICS",
    title: `Football Statistics ${i + 1}`
  })),

  // THUMBNAILS
  {
    category: "thumbnails",
    folder: "thumbnails",
    file: "thumbnails 1.jpg",
    label: "THUMBNAILS",
    title: "Football Thumbnail 1"
  },
  {
    category: "thumbnails",
    folder: "thumbnails",
    file: "thumbnails 2.jpg",
    label: "THUMBNAILS",
    title: "Football Thumbnail 2"
  },
  {
    category: "thumbnails",
    folder: "thumbnails",
    file: "thumbnails 3.jpg",
    label: "THUMBNAILS",
    title: "Football Thumbnail 3"
  },
  {
    category: "thumbnails",
    folder: "thumbnails",
    file: "thumbnail 4.jpg",
    label: "THUMBNAILS",
    title: "Football Thumbnail 4"
  },
  {
    category: "thumbnails",
    folder: "thumbnails",
    file: "thumbnails 5.jpg",
    label: "THUMBNAILS",
    title: "Football Thumbnail 5"
  },
  {
    category: "thumbnails",
    folder: "thumbnails",
    file: "thumbnails 6.jpg",
    label: "THUMBNAILS",
    title: "Football Thumbnail 6"
  },
  {
    category: "thumbnails",
    folder: "thumbnails",
    file: "thumbnails 7.jpg",
    label: "THUMBNAILS",
    title: "Football Thumbnail 7"
  },
  {
    category: "thumbnails",
    folder: "thumbnails",
    file: "thumbnails 8.jpg",
    label: "THUMBNAILS",
    title: "Football Thumbnail 8"
  }
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

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(button => button.classList.remove("active"));
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
