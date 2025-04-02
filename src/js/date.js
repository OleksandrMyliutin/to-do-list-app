document.addEventListener('DOMContentLoaded', () => {
    const dateStart = document.getElementById('StartFrom');
    const dateFinish = document.getElementById('FinishFrom');
    const input = document.getElementById('inputQuestion');
    const button = document.getElementById('SubmitBtn');
    const question = document.getElementById('question');
    const tracking = document.querySelectorAll('.tracking');
    const now = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    let wasSubmitted = false;
    const customDate = new Date(now);
    button.addEventListener('click', () => {
        customDate.setDate(now.getDate() + Number(input.value))
        question.style.display = 'none';
        tracking.forEach((track) => {
            track.style.display = 'flex';
        })
    });
    
    dateStart.addEventListener('click', (e) => { 
        e.preventDefault();
        e.currentTarget.textContent = now.toLocaleString('en-US', options);
    });
    dateFinish.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.textContent = customDate.toLocaleString('en-US', options);
    })

    if (wasSubmitted) {
        
    }
});

