
const sidebar = document.getElementById('side-bar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    // sidebar.style.left = 0;
    sidebar.classList.toggle('active');
} )


