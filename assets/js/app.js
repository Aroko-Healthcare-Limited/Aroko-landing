document.addEventListener("DOMContentLoaded", () => {
    // FAQ Accordion Animation
    const accordions = document.querySelectorAll(".accordion-button");
  
    accordions.forEach((accordion) => {
        accordion.addEventListener("click", () => {
            // Toggle clicked accordion
            const collapse = accordion.nextElementSibling;

            if (collapse) {
                const isActive = collapse.classList.contains("show");
                // Close all accordions
                accordions.forEach((acc) => {
                    acc.classList.add("collapsed");
                    const siblingCollapse = acc.nextElementSibling;
                    if (siblingCollapse) siblingCollapse.classList.remove("show");
                });

                // Toggle the clicked accordion
                if (!isActive) {
                    accordion.classList.remove("collapsed");
                    collapse.classList.add("show");
                }
            }
        });
    });
  
    // Smooth Scrolling
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href");
            if (targetId && targetId.startsWith("#")) {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        });
    });

    // Mobile Navigation Toggle
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        // Close the menu on link click
        const menuLinks = mobileMenu.querySelectorAll("a");
        menuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    } else {
        console.error("Mobile menu toggle or menu element not found!");
    }
});