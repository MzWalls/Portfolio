const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach(filter => {
  filter.addEventListener("click", () => {

    // Remove active from all buttons
    filters.forEach(btn => btn.classList.remove("active"));

    // Add active to clicked button
    filter.classList.add("active");

    const category = filter.dataset.filter;

    projects.forEach(project => {

      if (category === "all" || project.dataset.category === category) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }

    });

  });
});
