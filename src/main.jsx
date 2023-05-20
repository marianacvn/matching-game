import './styles/generic/reset.css';
import './styles/settings/colors.css';
import './styles/elements/base.css';
import BoardGame from './objects/BoardGame';



const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
