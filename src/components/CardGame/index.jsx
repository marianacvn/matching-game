import './styles.css';


function CardGame(icon = 'alurapixel', alt = 'Logo da Alura') {
    return /*html*/ `
    <article class="card-game">
        <img src="../../../src/images/${icon}.png" alt="${alt}">
    </article>
    `;
}

export default CardGame;