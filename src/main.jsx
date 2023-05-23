import './styles/generic/reset.css';
import './styles/settings/colors.css';
import './styles/elements/base.css';
import BoardGame from './objects/BoardGame';
import PlayerName from './components/PlayerName';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${PlayerName("Player1")}
        ${PlayerName("Player2")}
        ${BoardGame(6)}
    `
);
 