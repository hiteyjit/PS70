document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-track');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Mouse events for desktop
    gallery.addEventListener('mousedown', (e) => {
        isDown = true;
        gallery.style.cursor = 'grabbing';
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseleave', () => {
        isDown = false;
        gallery.style.cursor = 'grab';
    });

    gallery.addEventListener('mouseup', () => {
        isDown = false;
        gallery.style.cursor = 'grab';
    });

    gallery.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2;
        gallery.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    gallery.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('touchend', () => {
        isDown = false;
    });

    gallery.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2;
        gallery.scrollLeft = scrollLeft - walk;
    });

    // Wheel scroll horizontal
    gallery.addEventListener('wheel', (e) => {
        e.preventDefault();
        gallery.scrollLeft += e.deltaY;
    });
}); 