function animateCard(card) {
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 300);
}

// Update toggleForm function
function toggleForm() {
    var form = document.getElementById('connectForm');
    form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
}

// Add click event listener for project cards
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            animateCard(card);
        });
    });
});
