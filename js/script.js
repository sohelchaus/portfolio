// -----------
// MENU TOGGLE
// -----------
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// --------------
// NAVIGATION BAR
// --------------
const tabs = document.querySelectorAll('nav ul li a');
const ACTIVE_TAB_KEY = 'activeTab';

// Function to set active tab
const setActiveTab = (id) => {
    tabs.forEach((tab) => tab.classList.remove('active'));
    const activeTab = document.getElementById(id);
    if (activeTab) activeTab.classList.add('active');
    localStorage.setItem(ACTIVE_TAB_KEY, id);
};

// Initialize on page load
const savedTabId = localStorage.getItem(ACTIVE_TAB_KEY);
if (savedTabId) {
    setActiveTab(savedTabId);
} else {
    setActiveTab('home'); // Default tab
}

// Add click event listeners
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        setActiveTab(tab.id);
    });
});


// -------------------------
//  RATING - COUNT ANIMATION
// -------------------------
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");

    counters.forEach(counter => {
        let target = +counter.getAttribute("data-target");
        let count = 0;
        let increment = target / 100;

        const updateCount = () => {
            count += increment;

            if (count < target) {
                counter.innerText = Math.ceil(count) + (counter.innerText.includes('%') ? '%' : '+');
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+');
            }
        };

        updateCount();
    });
});

// -------------
// CERTIFICATION
// -------------
const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    grabCursor: true
});

//   SKILL SECTION
function setProgress(percent, labelText) {
    const numberEl = document.getElementById("number");
    const circle = document.querySelector("circle");
    const labelEl = document.getElementById("skill-label");

    // Update text
    numberEl.innerText = percent + "%";
    labelEl.innerText = labelText;

    // Circle math
    const radius = circle.r.baseVal.value; // 70px
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

// Example usage: show only one progress at a time
setProgress(65, "HTML");


