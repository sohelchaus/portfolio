//   SKILL SECTION
function setAllProgress() {
    // Loop through every skill block
    document.querySelectorAll(".skill").forEach(skill => {
        const numberEl = skill.querySelector(".number");  
        const circle = skill.querySelector("circle");     
        const percent = parseInt(numberEl.textContent);  

        const radius = circle.r.baseVal.value;             
        const circumference = 2 * Math.PI * radius;

        circle.style.stroke = "url(#GradientColor)";    
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    });
}

// Run once on load
setAllProgress();

