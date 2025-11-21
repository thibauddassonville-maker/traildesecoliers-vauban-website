
document.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    
    // facteur de zoom (à ajuster selon ton goût)
    const zoomFactor = 1 + scrollPos / 2000;

    document.querySelector(".background").style.transform = `scale(${zoomFactor})`;
});

// Appliquer les animations sport/vitesse
const elements = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'impact');
        }
    });
}, { threshold: 0.3 });

// Ajouter classes de base
elements.forEach(el => {
    el.classList.add('speed-in', 'run-up', 'speed-lines');
    observer.observe(el);
});
