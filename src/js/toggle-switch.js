const toggle = document.getElementById('toggle');
const circle = document.getElementById('circle');

toggle.addEventListener('click', () => {
    circle.classList.toggle('active');
});