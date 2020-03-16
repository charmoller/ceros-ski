import "babel-polyfill";
import {Skier} from "../Entities/Skier";
import * as Constants from "../Constants";
import {SKIER_JUMP_1} from "../Constants";

test('Create new skier object', () => {
    const newSkier = new Skier(0, 0);
    expect(newSkier).toEqual({assetName: Constants.SKIER_DOWN, direction: Constants.SKIER_DIRECTIONS.DOWN, eaten: false, jump: Constants.SKIER_JUMP.JUMP_5, speed: Constants.SKIER_STARTING_SPEED, rhinoDelay: Constants.RHINO_DELAY, x: 0, y: 0});
    expect(newSkier.isJumping()).toBe(false);
});

test('Crash skier then turn left', () => {
    const crashSkier = new Skier(0, 0);
    crashSkier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
    expect(crashSkier).toEqual({assetName: Constants.SKIER_CRASH, direction: Constants.SKIER_DIRECTIONS.CRASH, eaten: false, jump: Constants.SKIER_JUMP.JUMP_5, speed: Constants.SKIER_STARTING_SPEED, rhinoDelay: Constants.RHINO_DELAY, x: 0, y: 0});
    crashSkier.turnLeft();
    expect(crashSkier).toEqual({assetName: Constants.SKIER_LEFT, direction: Constants.SKIER_DIRECTIONS.LEFT, eaten: false, jump: Constants.SKIER_JUMP.JUMP_5, speed: Constants.SKIER_STARTING_SPEED, rhinoDelay: Constants.RHINO_DELAY, x: -Constants.SKIER_STARTING_SPEED, y: 0});
});

test('Jump skier', () => {
    const jumpSkier = new Skier(0, 0);
    jumpSkier.jumpUp();
    expect(jumpSkier).toEqual({assetName: Constants.SKIER_JUMP_1, direction: Constants.SKIER_DIRECTIONS.DOWN, eaten: false, jump: Constants.SKIER_JUMP.JUMP_1, speed: Constants.SKIER_STARTING_SPEED, rhinoDelay: Constants.RHINO_DELAY, x: 0, y: 0});

    for (let i = 1; i <= 20; i++) {
        jumpSkier.move();
        expect(jumpSkier).toEqual({assetName: Constants.SKIER_JUMP_1, direction: Constants.SKIER_DIRECTIONS.DOWN, eaten: false, jump: Constants.SKIER_JUMP.JUMP_1 - i, speed: Constants.SKIER_STARTING_SPEED, rhinoDelay: Constants.RHINO_DELAY - i, x: 0, y: i * Constants.SKIER_STARTING_SPEED});
    }

    for (let i = 21; i <= 40; i++) {
        jumpSkier.move();
        expect(jumpSkier).toEqual({assetName: Constants.SKIER_JUMP_2, direction: Constants.SKIER_DIRECTIONS.DOWN, eaten: false, jump: Constants.SKIER_JUMP.JUMP_1 - i, speed: Constants.SKIER_STARTING_SPEED, rhinoDelay: Constants.RHINO_DELAY - i, x: 0, y: i * Constants.SKIER_STARTING_SPEED});
    }

    for (let i = 41; i <= 60; i++) {
        jumpSkier.move();
        expect(jumpSkier).toEqual({assetName: Constants.SKIER_JUMP_3, direction: Constants.SKIER_DIRECTIONS.DOWN, eaten: false, jump: Constants.SKIER_JUMP.JUMP_1 - i, speed: Constants.SKIER_STARTING_SPEED, rhinoDelay: Constants.RHINO_DELAY - i, x: 0, y: i * Constants.SKIER_STARTING_SPEED});
    }

    for (let i = 61; i <= 80; i++) {
        jumpSkier.move();
        expect(jumpSkier).toEqual({assetName: Constants.SKIER_JUMP_4, direction: Constants.SKIER_DIRECTIONS.DOWN, eaten: false, jump: Constants.SKIER_JUMP.JUMP_1 - i, speed: Constants.SKIER_STARTING_SPEED, rhinoDelay: Constants.RHINO_DELAY - i, x: 0, y: i * Constants.SKIER_STARTING_SPEED});
    }

    for (let i = 81; i <= 100; i++) {
        jumpSkier.move();
        expect(jumpSkier).toEqual({assetName: Constants.SKIER_JUMP_5, direction: Constants.SKIER_DIRECTIONS.DOWN, eaten: false, jump: Constants.SKIER_JUMP.JUMP_1 - i, speed: Constants.SKIER_STARTING_SPEED, rhinoDelay: Constants.RHINO_DELAY - i, x: 0, y: i * Constants.SKIER_STARTING_SPEED});
    }

    jumpSkier.move();
    expect(jumpSkier).toEqual({assetName: Constants.SKIER_DOWN, direction: Constants.SKIER_DIRECTIONS.DOWN, eaten: false, jump: 0, speed: Constants.SKIER_STARTING_SPEED, rhinoDelay: Constants.RHINO_DELAY - 101, x: 0, y: (101 * Constants.SKIER_STARTING_SPEED)});
});

test('Rhino is coming', () => {
    const doomedSkier = new Skier(0, 0);
    expect(doomedSkier.isRhinoChasing()).toBe(false);
    for (let i = 0; i < Constants.RHINO_DELAY; i++) {
        expect(doomedSkier.isRhinoChasing()).toBe(false);
        doomedSkier.move();
    }
    expect(doomedSkier.isRhinoChasing()).toBe(true);
});