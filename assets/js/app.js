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

});

// Benefits Section
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
            image: "./assets/images/images/preventive.png",
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

    const progressText = document.querySelector(".progress-text");
    const progressBar = document.querySelector(".progress-bar");
    const cardTitle = document.querySelector(".card-title");
    const cardDescription = document.querySelector(".card-description");
    const cardImage = document.querySelector(".card-benefit-image");
    const benefitItems = document.querySelectorAll(".benefit-item");

    const updateContent = (index) => {
        // Update progress text and bar
        progressText.textContent = `0${index + 1}/04`;
        progressBar.style.width = `${(index + 1) * 25}%`;

        // Update card content
        const currentBenefit = benefits[index];
        cardTitle.textContent = currentBenefit.title;
        cardDescription.textContent = currentBenefit.description;
        cardImage.src = currentBenefit.image;

        // Highlight the active benefit item
        benefitItems.forEach((item, idx) => {
            const arrow = item.querySelector("i");
            if (idx === index) {
                arrow.classList.replace("text-transparent", "text-black");
                item.classList.add("active");
            } else {
                arrow.classList.replace("text-black", "text-transparent");
                item.classList.remove("active");
            }
        });
    };

    // Add click event listeners to benefit items
    benefitItems.forEach((item, index) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            currentIndex = index;
            updateContent(currentIndex);
        });
    });

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


    // Plans 
    let pageNumber = 1;
    let maxPages = 4;

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (pageNumber < maxPages) {
            pageNumber++;
            document.getElementById('pageNumber').textContent = pageNumber;
        }
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (pageNumber > 1) {
            pageNumber--;
            document.getElementById('pageNumber').textContent = pageNumber;
        }
    });