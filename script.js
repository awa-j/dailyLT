document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const demoBtn = document.getElementById('demoBtn');
    const demoModal = document.getElementById('demoModal');
    const demoForm = document.getElementById('demoForm');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    demoBtn.addEventListener('click', () => {
        demoModal.style.display = 'block';
    });
    demoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch('/api/demo-request', {
            method: 'POST',
            body: new FormData(demoForm)
        });
        demoModal.style.display = 'none';
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
});
// ...