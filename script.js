// Toggle class active
const desktop = document.querySelector('desktop');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    desktop.classList.toggle('active')
};