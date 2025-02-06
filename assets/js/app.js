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
    // const menuToggle = document.getElementById("mobile-menu-toggle");
    // const mobileMenu = document.getElementById("mobile-menu");

    // if (menuToggle && mobileMenu) {
    //     menuToggle.addEventListener("click", () => {
    //         mobileMenu.classList.toggle("hidden");
    //     });

    //     // Close the menu on link click
    //     const menuLinks = mobileMenu.querySelectorAll("a");
    //     menuLinks.forEach((link) => {
    //         link.addEventListener("click", () => {
    //             mobileMenu.classList.add("hidden");
    //         });
    //     });
    // } else {
    //     console.error("Mobile menu toggle or menu element not found!");
    // }
    
});

document.addEventListener("DOMContentLoaded", () => {
    const benefits = [
      {
        title: "Affordable Health Care",
        description: "We offer affordable yearly payment plans for our users.",
        image: "./assets/images/images/doctor2.jpg",
      },
      {
        title: "Preventive & Wellness Service",
        description: "Comprehensive preventive health services.",
        image: "./assets/images/images/preventive.jpg",
      },
      {
        title: "Telemedicine",
        description: "Access to doctors anytime, anywhere.",
        image: "./assets/images/images/telemedicine.jpg",
      },
      {
        title: "Specialist Access",
        description: "Care from specialists when needed.",
        image: "./assets/images/images/specialist.jpg",
      },
    ];
  
    let currentIndex = 0;
  
    const updateContent = (index) => {
      document.querySelector(".progress-text").textContent = `0${index + 1}/04`;
      document.querySelector(".progress-bar").style.width = `${(index + 1) * 25}%`;
  
      document.querySelector(".card-title").textContent = benefits[index].title;
      document.querySelector(".card p").textContent = benefits[index].description;
      document.querySelector(".card img").src = benefits[index].image;
  
      document.querySelectorAll(".benefit-item").forEach((item, idx) => {
        if (idx === index) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };
  
    document.querySelectorAll(".benefit-item").forEach((item, index) => {
      item.addEventListener("click", () => {
        currentIndex = index;
        updateContent(currentIndex);
      });
    });
  
    // Scroll Event
    // document.addEventListener("wheel", (event) => {
    //   if (event.deltaY > 0) {
    //     currentIndex = (currentIndex + 1) % benefits.length;
    //   } else {
    //     currentIndex = (currentIndex - 1 + benefits.length) % benefits.length;
    //   }
    //   updateContent(currentIndex);
    // });
  
    // Initialize content
    updateContent(currentIndex);
  });


    // Toggle mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const aboutToggle = document.getElementById('mobile-about-toggle');
    const aboutMenu = document.getElementById('mobile-about-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    aboutToggle.addEventListener('click', () => {
        aboutMenu.classList.toggle('hidden');
    });