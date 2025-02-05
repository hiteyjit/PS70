const fs = require('fs');
const path = require('path');

for (let i = 2; i <= 13; i++) {
    const weekDir = `Week ${i}`;
    const weekContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Week ${i} - PS70 Project</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../week-styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>
    <header class="week-header fade-in">
        <h1>Week ${i}</h1>
    </header>
    
    <div class="week-description fade-in">
        <h3>Week ${i} Description Goes Here</h3>
    </div>

    <main class="week-content fade-in-delayed">
        <div class="content-box">
            <h2>Section Title</h2>
            <img src="your-photo.jpg" alt="Section Image">
            <p>Section content goes here.</p>
        </div>

        <div class="content-box">
            <h2>Section Title</h2>
            <img src="your-photo.jpg" alt="Section Image">
            <p>Section content goes here.</p>
        </div>

        <div class="content-box">
            <h2>Section Title</h2>
            <img src="your-photo.jpg" alt="Section Image">
            <p>Section content goes here.</p>
        </div>
    </main>

    <a href="../index.html" class="back-btn">Back to Home</a>
</body>
</html>`;

    if (!fs.existsSync(weekDir)){
        fs.mkdirSync(weekDir);
    }
    fs.writeFileSync(path.join(weekDir, `week${i}.html`), weekContent);
} 