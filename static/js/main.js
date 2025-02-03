// Screen width responsive function
function handleScreenResize() {
    const width = window.innerWidth;
    
    if (width >= 992 && width <= 1600) {
        document.body.style.zoom = "0.9";
    } else if (width >= 700 && width <= 767) {
        document.body.style.zoom = "0.8";
    } else if (width >= 600 && width <= 700) {
        document.body.style.zoom = "0.75";
    } else if (width <= 600) {
        document.body.style.zoom = "0.5";
    } else {
        document.body.style.zoom = "1";
    }
}

// Left menu toggle function
function toggleLeftMenu() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('active');
}

// Event listeners
window.addEventListener('resize', handleScreenResize);
window.addEventListener('load', handleScreenResize); 