const weeks = [
    { number: 1, image: 'Week 1/week1.jpg', description: 'Website Creation & Ideas for the Final Project' },
    { number: 2, image: 'Week 2/week2.jpg', description: '2D Design and Cutting' },
    { number: 3, image: 'Week 3/week3.jpg', description: 'Kinetic Sculpture' },
    { number: 4, image: 'Week 4/week4.jpg', description: 'Microcontroller-controlled Kinetic Sculpture' },
    { number: 5, image: 'Week 5/week5.jpg', description: '3D Printing and Scanning' },
    { number: 6, image: 'Week 6/week6.jpg', description: 'Capacitive Sensors & Other Sensors' },
    { number: 7, image: 'Week 7/week7.jpg', description: 'MVP' },
    { number: 8, image: 'Week 8/week8.jpg', description: 'CNC Milling' },
    { number: 9, image: 'Week 9/week9.jpg', description: 'Radio Control' },
    { number: 10, image: 'Week 10/week10.jpg', description: 'Machine Building' },
    { number: 11, image: 'Week 11/week11.jpg', description: 'Integrated Project – Final Project Check-in' },
    //{ number: 12, image: 'Week 12/week12.jpg', description: 'Project Development II' },
   { number: 13, image: 'Week 13/week13.jpg', description: 'My Personal Journey Building the Final Project' }
];

const gridContainer = document.querySelector('.grid-container');

document.addEventListener('DOMContentLoaded', () => {
    // Create week cards using the weeks array
    weeks.forEach(week => {
        const weekCard = document.createElement('div');
        weekCard.className = 'week-card fade-in-delayed';
        weekCard.innerHTML = `
            <h2>Week ${week.number}</h2>
            <p>${week.description}</p>
        `;
        
        // Add click event to navigate to week pages
        weekCard.addEventListener('click', () => {
            window.location.href = `Week ${week.number}/week${week.number}.html`;
        });
        
        gridContainer.appendChild(weekCard);
    });

    // Add Final Project card
    const finalProjectCard = document.createElement('div');
    finalProjectCard.className = 'week-card fade-in-delayed final-project-card';
    finalProjectCard.innerHTML = `
        <h2>Final Project</h2>
        <p>Click to see my final project documentation</p>
    `;
    
    finalProjectCard.addEventListener('click', () => {
        window.location.href = 'Final Project/finalproject.html';
    });
    
    gridContainer.appendChild(finalProjectCard);
}); 