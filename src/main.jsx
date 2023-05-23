import './styles/generic/reset.css';
import './styles/settings/colors.css';
import './styles/elements/base.css';
import ScoreBoard from './objects/ScoreBoard';
import BoardGame from './objects/BoardGame';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", 
    ` 
        ${ScoreBoard()}
        ${BoardGame(2)}
    `
);
 