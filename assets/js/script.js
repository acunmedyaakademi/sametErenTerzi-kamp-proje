const toogleButton = document.querySelector('#theme-btn');
const body = document.body;

toogleButton.addEventListener('input', (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    body.setAttribute('data-theme', theme);
    body.classList = theme;
});