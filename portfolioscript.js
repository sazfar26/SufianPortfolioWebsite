window.onload = function() {
    const text = document.getElementById("fadeText");
    text.classList.add("visible");		
};

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const elements = document.querySelectorAll('.content');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

function titleHover() {
    const el = document.getElementById("titleHover");
    el.classList.add(restore);
}


window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);