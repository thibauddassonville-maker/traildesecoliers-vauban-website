// ===== ANIMATIONS SPORT =====
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'impact');
        }
    });
}, { threshold: 0.3 });

cards.forEach(card => {
    card.classList.add('speed-in', 'run-up', 'speed-lines');
    observer.observe(card);
});

// ===== COMPTEUR D'ÉLÈVES =====
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / 100);

        if(count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                updateCount();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counterObserver.observe(counter);
});

// ===== FOND QUI ZOOM AU SCROLL =====
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const scale = 1 + scrollTop / 2000; // ajuste la vitesse
    document.querySelector('.background').style.transform = `scale(${scale})`;
});

