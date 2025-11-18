window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    // Intensité des effets — à ajuster selon goût
    const zoomIntensity = 0.0008;     // zoom
    const driftIntensity = 0.15;      // mouvement vertical
    const blurIntensity = 0.005;      // flou

    // Valeurs brutes selon le scroll
    let rawScale = 1 + scroll * zoomIntensity;
    let rawTranslate = scroll * driftIntensity;
    let rawBlur = scroll * blurIntensity;

    // Easing : interpolation douce façon cinéma
    const ease = t => 1 - Math.exp(-t * 0.003);

    let easedScale = 1 + (rawScale - 1) * ease(scroll);
    let easedTranslate = rawTranslate * ease(scroll);
    let easedBlur = rawBlur * ease(scroll);

    document.querySelector(".cinematic-bg").style.transform =
        `scale(${easedScale}) translateY(${easedTranslate}px)`;

    document.querySelector(".cinematic-bg").style.filter =
        `blur(${easedBlur}px)`;
});
