const scrollBtn = document.getElementById("back-to-top");

scrollBtnOrigin = window.getComputedStyle(scrollBtn).getPropertyValue("bottom");

window.addEventListener('scroll', function () {
    const winHeight = window.innerHeight;
    const footHeight = document.getElementsByTagName("footer")[0].offsetHeight;
    const headHeight = document.getElementsByTagName("header")[0].offsetHeight;
    const totalHeight = document.body.offsetHeight;
    let scrollTrigger = totalHeight - winHeight - footHeight;
    let scrollAdjuster = window.scrollY + winHeight + footHeight - totalHeight;
    scrollBtn.classList.toggle('active', window.scrollY > headHeight);
    // scrollBtn.classList.toggle('btt-transition', window.scrollY > headHeight);
    if (window.scrollY > scrollTrigger) {
        scrollBtn.style.bottom = `
            ${scrollAdjuster + 10}px`;
    } else {
        scrollBtn.style.bottom = scrollBtnOrigin;
    }
});