
const now = new Date();
const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
};

now.toLocaleString('en-US', options);

const date = document.getElementById('wrapper-note-form-group-calendar');
document.addEventListener('DOMContentLoaded', () => {
    date.target.value = now.toLocaleString('en-US', options);
});