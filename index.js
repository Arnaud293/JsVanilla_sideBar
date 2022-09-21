
const sidebar = document.getElementById('side-bar');
const toggleBtn = document.querySelector('.toggle-btn');
const content = document.querySelector('.content');

toggleBtn.addEventListener('click', () => {
    // sidebar.style.left = 0;
    sidebar.classList.toggle('active');
} )

content.addEventListener('click', () => {
    sidebar.classList.remove('active');
})


