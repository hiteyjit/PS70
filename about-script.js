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
        // Update prev button state
        prevBtn.style.opacity = currentIndex <= 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentIndex <= 0 ? 'default' : 'pointer';
        
        // Update next button state
        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
        nextBtn.style.cursor = currentIndex >= maxIndex ? 'default' : 'pointer';
    };

    // Function to move the gallery
    const moveGallery = () => {
        // Ensure currentIndex stays within bounds
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
        
        // Calculate position (negative for moving right, positive for moving left)
        const position = -currentIndex * itemWidth;
        track.style.transform = `translateX(${position}px)`;
        updateButtons();
    };

    // Event listeners for buttons with separate logic for each direction
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex = Math.max(0, currentIndex - 1); // Move left by decreasing index
            moveGallery();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex = Math.min(maxIndex, currentIndex + 1); // Move right by increasing index
            moveGallery();
        }
    });

    // Initialize gallery position and button states
    currentIndex = 0;
    moveGallery();
    updateButtons();

    // Update gallery on window resize
    window.addEventListener('resize', () => {
        const viewportWidth = track.parentElement.clientWidth;
        const visibleItems = Math.floor((viewportWidth - 64) / itemWidth);
        const newMaxIndex = Math.max(0, items.length - visibleItems);
        
        // Adjust currentIndex if it's beyond the new maximum
        currentIndex = Math.min(currentIndex, newMaxIndex);
        moveGallery();
    });
}); 