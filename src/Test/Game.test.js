import "babel-polyfill";
import * as Constants from "../Constants";
import {Game} from "../Core/Game";
import {Skier} from "../Entities/Skier";

test('Create new game object', () => {
    // Set up our document body
    document.body.innerHTML = '<canvas id="skiCanvas"></canvas>';
    const newGame = new Game();
    expect(newGame.gameWindow).toBe(null);
});

test('Rhino is coming', () => {
    document.body.innerHTML = '<canvas id="skiCanvas"></canvas>';
    const game = new Game();
    const doomedSkier = new Skier(0, 0);
    expect(game.rhinoDelay).toBe(Constants.RHINO_DELAY);
    for (let i = 1; i < Constants.RHINO_DELAY; i++) {
        doomedSkier.move();
        expect(doomedSkier.numberOfMoves).not.toEqual(Constants.RHINO_DELAY);
    }

    doomedSkier.move();
    expect(doomedSkier.numberOfMoves).toEqual(Constants.RHINO_DELAY);
});