const overlay = document.querySelector('.overlay');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.querySelector('.wrapper-modal');

openBtn.addEventListener('click', () => {
    modal.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
})

overlay.addEventListener('click', () => {
    modal.classList.remove('active');
})
