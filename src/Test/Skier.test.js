import "babel-polyfill";
import {Skier} from "../Entities/Skier";
import * as Constants from "../Constants";

test('Create new skier object', () => {
    const newSkier = new Skier(0, 0);
    expect(newSkier).toEqual({assetName: Constants.SKIER_DOWN, direction: Constants.SKIER_DIRECTIONS.DOWN, jump: Constants.SKIER_JUMP.END, speed: Constants.SKIER_STARTING_SPEED, x: 0, y: 0});
    expect(newSkier.isJumping()).toBe(false);
});

test('Crash skier then turn left', () => {
    const crashSkier = new Skier(0, 0);
    crashSkier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
    expect(crashSkier).toEqual({assetName: Constants.SKIER_CRASH, direction: Constants.SKIER_DIRECTIONS.CRASH, jump: Constants.SKIER_JUMP.END, speed: Constants.SKIER_STARTING_SPEED, x: 0, y: 0});
    crashSkier.turnLeft();
    expect(crashSkier).toEqual({assetName: Constants.SKIER_LEFT, direction: Constants.SKIER_DIRECTIONS.LEFT, jump: Constants.SKIER_JUMP.END, speed: Constants.SKIER_STARTING_SPEED, x: -Constants.SKIER_STARTING_SPEED, y: 0});
});


test('Crash skier then turn right', () => {
    const crashSkier = new Skier(0, 0);
    crashSkier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
    expect(crashSkier).toEqual({assetName: Constants.SKIER_CRASH, direction: Constants.SKIER_DIRECTIONS.CRASH, jump: Constants.SKIER_JUMP.END, speed: Constants.SKIER_STARTING_SPEED, x: 0, y: 0});
    crashSkier.turnRight();
    expect(crashSkier).toEqual({assetName: Constants.SKIER_RIGHT, direction: Constants.SKIER_DIRECTIONS.RIGHT, jump: Constants.SKIER_JUMP.END, speed: Constants.SKIER_STARTING_SPEED, x: Constants.SKIER_STARTING_SPEED, y: 0});
});