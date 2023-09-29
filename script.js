const container = document.querySelector('.container');
const loveCount = 120; 

function createLove() {
    const love = document.createElement('div');
    love.classList.add('love');

    const size = Math.random() * 30 + 10; 
    love.style.width = `${size}px`;
    love.style.height = `${size}px`;

    const x = Math.random() * window.innerWidth;
    const y = -size;
    love.style.left = `${x}px`;
    love.style.top = `${y}px`;

    container.appendChild(love);

    const animationDuration = Math.random() * 3 + 1; 
    love.style.animation = `falling ${animationDuration}s linear infinite`;

    love.addEventListener('animationiteration', () => {
        container.removeChild(love);
        createLove();
    });
}
for (let i = 0; i < loveCount; i++) {
    createLove();
}

