import '../css/game.css';
import { Game } from './Core/Game.js';

let skiGame;

document.addEventListener("DOMContentLoaded",() => {
    skiGame = new Game();
    skiGame.load().then(() => {
        skiGame.init();
        skiGame.run();
    });
});

document.addEventListener("click",() => {
    if (skiGame.isOver()) {
        let skiGame = new Game();
        skiGame.load().then(() => {
            skiGame.init();
            skiGame.run();
        });
    }
});