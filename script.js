const simButton = document.getElementById('nao-button');
const naoButton = document.getElementById('sim-button');
const mensagem = document.getElementById('mensagem');

simButton.addEventListener('click', () => {
    const maxX = window.innerWidth - simButton.clientWidth;
    const maxY = window.innerHeight - simButton.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    simButton.style.left = `${randomX}px`;
    simButton.style.top = `${randomY}px`;
});

naoButton.addEventListener('click', () => {
    mensagem.textContent = 'Hoje tem!';
});