document.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    
    // facteur de zoom (à ajuster selon ton goût)
    const zoomFactor = 1 + scrollPos / 2000;

    document.querySelector(".background").style.transform = `scale(${zoomFactor})`;
});
