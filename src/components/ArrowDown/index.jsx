import './styles.css';

function ArrowDown (currentPlayer = 1) {
    return /*html*/`
        <img class="arrow-down" 
            data-currentplayer="${currentPlayer}"
            src="../../../src/images/arrowdown.png"
            alt="Ícone de uma seta para baixo">
    `;
}

export default ArrowDown;