import CardGame from '../CardGame/index';
import './styles.css';

function CardFrontBack (){ 
    return /*html*/ `
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("javascript", 'Logo do javascript')}
            </div>
        </article>
    `;
}

export default CardFrontBack;