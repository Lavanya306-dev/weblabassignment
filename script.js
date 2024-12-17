
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            link.style.color = 'orange';
        });
        link.addEventListener('mouseout', function () {
            link.style.color = '';
        });
    });
});