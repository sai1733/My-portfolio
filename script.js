function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function scrollToSection(id){
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

// THEME TOGGLE LOGIC
const sunSvg = `<svg class="theme-svg sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="5"></circle>
  <line x1="12" y1="1" x2="12" y2="3"></line>
  <line x1="12" y1="21" x2="12" y2="23"></line>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
  <line x1="1" y1="12" x2="3" y2="12"></line>
  <line x1="21" y1="12" x2="23" y2="12"></line>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
</svg>`;

const moonSvg = `<svg class="theme-svg moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>`;

function updateThemeIcons(isDark) {
    const buttons = document.querySelectorAll(".theme-btn");
    buttons.forEach(btn => {
        btn.innerHTML = isDark ? sunSvg : moonSvg;
        btn.setAttribute("title", isDark ? "Switch to Light Mode" : "Switch to Dark Mode");
        btn.setAttribute("aria-label", isDark ? "Switch to Light Mode" : "Switch to Dark Mode");
    });
}

function toggleTheme(){
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    updateThemeIcons(isDark);
}

// Initialize theme on script load
(function initTheme(){
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    if (isDark) {
        document.body.classList.add("dark-theme");
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => updateThemeIcons(isDark));
    } else {
        updateThemeIcons(isDark);
    }
})();

// CERTIFICATES ACCORDION TOGGLE
function toggleCertificates() {
    const moreCerts = document.getElementById("more-certs");
    const toggleBtn = document.getElementById("cert-toggle-btn");
    if (!moreCerts || !toggleBtn) return;

    const isOpen = moreCerts.classList.toggle("open");
    if (isOpen) {
        toggleBtn.innerHTML = "Show Less ↑";
    } else {
        toggleBtn.innerHTML = "View All Certifications (14) ↓";
        const section = document.getElementById("certifications");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
    const hamburgerNav = document.getElementById("hamburger-nav");
    if (!hamburgerNav) return;
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (menu && menu.classList.contains("open") && !hamburgerNav.contains(e.target)) {
        menu.classList.remove("open");
        if (icon) icon.classList.remove("open");
    }
});