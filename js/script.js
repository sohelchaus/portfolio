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
function setAllProgress() {
  // Loop through every skill block
  document.querySelectorAll(".skill").forEach(skill => {
    const numberEl = skill.querySelector(".number");   // use class
    const circle = skill.querySelector("circle");      // each skill has its own circle
    const percent = parseInt(numberEl.textContent);    // read percentage

    const radius = circle.r.baseVal.value;             // 35px
    const circumference = 2 * Math.PI * radius;

    circle.style.stroke = "url(#GradientColor)";       // apply gradient
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
  });
}

// Run once on load
setAllProgress();

