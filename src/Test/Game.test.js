import "babel-polyfill";
import * as Constants from "../Constants";
import {Game} from "../Core/Game";

test('Create new game object', () => {
    // Set up our document body
    document.body.innerHTML = '<canvas id="skiCanvas"></canvas>';
    const newGame = new Game();
    expect(newGame.gameWindow).toBe(null);
});