import '../css/game.css';
import { Game } from './Core/Game.js';

export let skiGame;

document.addEventListener("DOMContentLoaded",() => {
    skiGame = new Game();
    skiGame.load().then(() => {
        skiGame.init();
        skiGame.run();
    });
});

document.addEventListener("click",() => {
    if (skiGame.isOver()) {
        skiGame = new Game();
        skiGame.load().then(() => {
            skiGame.init();
            skiGame.run();
        });
    }
});