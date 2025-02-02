const weeks = [
    { number: 1, image: 'week1.jpg', description: 'Introduction to Digital Fabrication' },
    { number: 2, image: 'week2.jpg', description: 'Computer-Aided Design' },
    { number: 3, image: 'week3.jpg', description: '3D Printing and Scanning' },
    { number: 4, image: 'week4.jpg', description: 'Electronic Input Devices' },
    { number: 5, image: 'week5.jpg', description: 'Electronic Output Devices' },
    { number: 6, image: 'week6.jpg', description: 'CNC Milling' },
    { number: 7, image: 'week7.jpg', description: 'Laser Cutting' },
    { number: 8, image: 'week8.jpg', description: 'Embedded Programming' },
    { number: 9, image: 'week9.jpg', description: 'Radio and Internet' },
    { number: 10, image: 'week10.jpg', description: 'Machine Building' },
    { number: 11, image: 'week11.jpg', description: 'Project Development I' },
    { number: 12, image: 'week12.jpg', description: 'Project Development II' },
    { number: 13, image: 'week13.jpg', description: 'Final Project' },
];

const gridContainer = document.querySelector('.grid-container');

document.addEventListener('DOMContentLoaded', () => {
    // Create 13 weeks of content
    for (let i = 1; i <= 13; i++) {
        const weekCard = document.createElement('div');
        weekCard.className = 'week-card fade-in-delayed';
        weekCard.innerHTML = `
            <h2>Week ${i}</h2>
            <p>Click to see my progress and projects from Week ${i}</p>
        `;
        
        // Add click event to navigate to week pages
        weekCard.addEventListener('click', () => {
            window.location.href = `week${i}.html`;
        });
        
        gridContainer.appendChild(weekCard);
    }
}); 