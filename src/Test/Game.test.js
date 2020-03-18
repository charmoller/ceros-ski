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
    expect(game.rhinoDelay).toBe(Constants.RHINO_DELAY);
    expect(game.rhino).toEqual({assetName: Constants.RHINO_DEFAULT, chasing: false, direction: Constants.SKIER_DIRECTIONS.DOWN, eating: false, eatingAnimate: Constants.RHINO_EAT.LIFT, previousDirection: Constants.SKIER_DIRECTIONS.DOWN, runningAnimate: Constants.RHINO_RUN.RUN_1, turning: 0, speed: Constants.RHINO_STARTING_SPEED, x: 0, y: 0});
    for (let i = 1; i < Constants.RHINO_DELAY; i++) {
        game.skier.move();
        expect(game.skier.numberOfMoves).not.toEqual(Constants.RHINO_DELAY);
    }

    game.skier.move();
    expect(game.skier.numberOfMoves).toEqual(Constants.RHINO_DELAY);

    game.displayRhino();
    expect(game.rhino).toEqual({assetName: Constants.RHINO_RUN_LEFT, chasing: true, direction: Constants.SKIER_DIRECTIONS.DOWN, eating: false, eatingAnimate: Constants.RHINO_EAT.LIFT, previousDirection: Constants.SKIER_DIRECTIONS.DOWN, runningAnimate: Constants.RHINO_RUN.RUN_1 - 1, turning: 0, speed: Constants.RHINO_STARTING_SPEED, x: 0, y: (Constants.RHINO_DELAY * Constants.SKIER_STARTING_SPEED) - (Constants.GAME_HEIGHT / 2) + Constants.RHINO_STARTING_SPEED});
});

test('Calculate Score', () => {
    // Set up our document body
    document.body.innerHTML = '<canvas id="skiCanvas"></canvas>';
    const game = new Game();

    // Move skier and check score
    for (let i = 1; i < 300; i++) {
        game.skier.move();
        expect(game.skier.getDistanceSkied()).toBe(i*Constants.SKIER_STARTING_SPEED);
        expect(game.skier.calculateScore()).toBe(Math.round(i/10));
    }
});
