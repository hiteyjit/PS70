document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.gallery-track');
    const items = document.querySelectorAll('.gallery-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const itemWidth = 322; // 300px width + 22px gap
    const itemsToShow = 3; // Show 3 items at a time
    const maxIndex = Math.max(0, items.length - itemsToShow);

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

    // Initialize button states and position
    updateButtons();
    moveGallery();

    // Update gallery on window resize
    window.addEventListener('resize', () => {
        // Recalculate maxIndex based on current window size
        const viewportWidth = track.parentElement.clientWidth;
        const visibleItems = Math.floor((viewportWidth - 64) / itemWidth); // 64px for padding
        const newMaxIndex = Math.max(0, items.length - visibleItems);
        
        if (currentIndex > newMaxIndex) {
            currentIndex = newMaxIndex;
        }
        moveGallery();
    });
}); 