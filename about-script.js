document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.gallery-track');
    const items = document.querySelectorAll('.gallery-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const itemWidth = 300; // Width of each item including gap
    const itemsToShow = Math.floor(track.clientWidth / itemWidth);
    const maxIndex = items.length - itemsToShow;

    // Function to update button states
    const updateButtons = () => {
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentIndex === 0 ? 'default' : 'pointer';
        
        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
        nextBtn.style.cursor = currentIndex >= maxIndex ? 'default' : 'pointer';
    };

    // Function to move the gallery
    const moveGallery = () => {
        const position = currentIndex * -itemWidth;
        track.style.transform = `translateX(${position}px)`;
        updateButtons();
    };

    // Event listeners for buttons
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveGallery();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            moveGallery();
        }
    });

    // Initialize button states
    updateButtons();

    // Update gallery on window resize
    window.addEventListener('resize', () => {
        const newItemsToShow = Math.floor(track.clientWidth / itemWidth);
        const newMaxIndex = items.length - newItemsToShow;
        if (currentIndex > newMaxIndex) {
            currentIndex = Math.max(0, newMaxIndex);
            moveGallery();
        }
    });
}); 