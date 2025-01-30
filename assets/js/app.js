document.addEventListener("DOMContentLoaded", () => {
    // FAQ Accordion Animation
    const accordions = document.querySelectorAll(".accordion-button");
  
    accordions.forEach((accordion) => {
      accordion.addEventListener("click", () => {
        accordions.forEach((acc) => {
          if (acc !== accordion) {
            acc.classList.remove("collapsed");
            const collapse = acc.nextElementSibling;
            if (collapse) collapse.classList.remove("show");
          }
        });
      });
    });
  
    // Smooth Scrolling
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  });