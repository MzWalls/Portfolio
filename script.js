const projectsContainer = document.getElementById("projects");
const filters = document.querySelectorAll(".filter");

const categories = [
  {
    name: "branding",
    folder: "branding",
    prefix: "branding_",
    label: "BRANDING",
    count: 6,
    title: "Football Branding"
  },
  {
    name: "posters",
    folder: "posters",
    prefix: "poster_",
    label: "POSTERS",
    count: 15,
    title: "Football Poster"
  },
  {
    name: "social-media",
    folder: "social media",
    prefix: "social_",
    label: "SOCIAL MEDIA",
    count: 6,
    title: "Social Media Design"
  },
  {
    name: "statistics",
    folder: "statistics",
    prefix: "statistics_",
    label: "STATISTICS",
    count: 5,
    title: "Football Statistics"
  },
  {
    name: "thumbnails",
    folder: "thumbnails",
    prefix: "thumbnail_",
    label: "THUMBNAILS",
    count: 8,
    title: "Football Thumbnail"
  }
];

categories.forEach(category => {
  for (let i = 1; i <= category.count; i++) {

    const project = document.createElement("article");
    project.className = "project";
    project.dataset.category = category.name;

    const imageName = `${category.prefix}${i}.jpg`;

    project.innerHTML = `
      <div class="project-image">
        <img
          src="${category.folder}/${imageName}"
          alt="${category.title} ${i}"
          loading="lazy"
        >
      </div>

      <div class="project-info">
        <p>${category.label}</p>
        <h3>${category.title} ${String(i).padStart(2, "0")}</h3>
      </div>
    `;

    projectsContainer.appendChild(project);
  }
});

filters.forEach(filter => {
  filter.addEventListener("click", () => {

    filters.forEach(button => button.classList.remove("active"));
    filter.classList.add("active");

    const selectedCategory = filter.dataset.filter;

    document.querySelectorAll(".project").forEach(project => {
      project.style.display =
        selectedCategory === "all" ||
        project.dataset.category === selectedCategory
          ? "block"
          : "none";
    });

  });
});
