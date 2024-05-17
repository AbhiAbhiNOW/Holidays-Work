// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Assignment Toggle
const toggleButtons = document.querySelectorAll('.toggle-button');
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Search Functionality
document.getElementById('search-input').addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    const assignments = document.querySelectorAll('.assignment');
    assignments.forEach(assignment => {
        const assignmentText = assignment.textContent.toLowerCase();
        assignment.style.display = assignmentText.includes(searchValue) ? 'block' : 'none';
    });
});

// Hidden Quote
const hiddenQuote = document.getElementById('hidden-quote');
hiddenQuote.style.display = 'none';
document.querySelector('.profile-image img').addEventListener('click', () => {
    hiddenQuote.style.display = hiddenQuote.style.display === 'block' ? 'none' : 'block';
});

// Konami Code
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;
document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.getElementById('hidden-game').style.display = 'block';
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
