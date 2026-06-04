const visibleElements = document.querySelectorAll(
  ".about-grid article, .skill-column, .project-card, .team-card, .prototype-main, .motion-card, .detail-card, .scenario-card, .article-row"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

visibleElements.forEach((element) => observer.observe(element));

const visualStage = document.querySelector(".visual-stage");

if (visualStage) {
  visualStage.addEventListener("pointermove", (event) => {
    const rect = visualStage.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    visualStage.style.transform = `perspective(900px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });

  visualStage.addEventListener("pointerleave", () => {
    visualStage.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });
}
