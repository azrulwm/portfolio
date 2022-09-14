"use strict";

const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

let activeLink = 0;
links.forEach((link, i) => {
  link.addEventListener("click", () => {
    if (activeLink != i) {
      links[activeLink].classList.remove("active");
      link.classList.add("active");
      sections[activeLink].classList.remove("active");

      setTimeout(() => {
        activeLink = i;
        sections[i].classList.add("active");
      }, 1000);
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entries);
      const projectImg = entry.target.querySelector(".project-img");
      const projectContent = entry.target.querySelector(".project-content");

      if (entry.isIntersecting) {
        projectImg.classList.add("blur");
        projectContent.classList.add("text-visible");
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      projectImg.classList.remove("blur");
      projectContent.classList.remove("text-visible");
    });
  },
  { threshold: 1 }
);

const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((projectCard) => {
  observer.observe(projectCard);
});
