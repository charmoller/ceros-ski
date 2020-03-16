import "babel-polyfill";
import {Rhino} from "../Entities/Rhino";
import * as Constants from "../Constants";
import {SKIER_DIRECTIONS} from "../Constants";
import {RHINO_RUN} from "../Constants";
import {Skier} from "../Entities/Skier";
import {RHINO_EAT} from "../Constants";

test('Create new rhino object', () => {
    const rhino = new Rhino(0, 0, SKIER_DIRECTIONS.DOWN);
    expect(rhino).toEqual({assetName: Constants.RHINO_RUN_ASSET[RHINO_RUN.RUN_1], direction: Constants.SKIER_DIRECTIONS.DOWN, eating: false, eatingAnimate: Constants.RHINO_EAT.LIFT, previousDirection: Constants.SKIER_DIRECTIONS.DOWN, runningAsset: Constants.RHINO_RUN.RUN_1, runningInterval: Constants.RHINO_RUNNING_ANIMATE, turning: 0, speed: Constants.RHINO_STARTING_SPEED, x: 0, y: 0});
});

test('Eat skier', () => {
    const rhino = new Rhino(0, 0, SKIER_DIRECTIONS.DOWN);

    for (let i = 1; i <= 20; i++) {
        rhino.eatSkier();
        expect(rhino).toEqual({assetName: Constants.RHINO_LIFT, direction: Constants.SKIER_DIRECTIONS.DOWN, eating: false, eatingAnimate: Constants.RHINO_EAT.LIFT-i, previousDirection: Constants.SKIER_DIRECTIONS.DOWN, runningAsset: Constants.RHINO_RUN.RUN_1, runningInterval: Constants.RHINO_RUNNING_ANIMATE, speed: Constants.RHINO_STARTING_SPEED, turning: 0, x: 0, y: 0});
    }

    for (let i = 21; i <= 40; i++) {
        rhino.eatSkier();
        expect(rhino).toEqual({assetName: Constants.RHINO_LIFT_MOUTH_OPEN, direction: Constants.SKIER_DIRECTIONS.DOWN, eating: false, eatingAnimate: Constants.RHINO_EAT.LIFT-i, previousDirection: Constants.SKIER_DIRECTIONS.DOWN, runningAsset: Constants.RHINO_RUN.RUN_1, runningInterval: Constants.RHINO_RUNNING_ANIMATE, speed: Constants.RHINO_STARTING_SPEED, turning: 0, x: 0, y: 0});
    }

    for (let i = 41; i <= 60; i++) {
        rhino.eatSkier();
        expect(rhino).toEqual({assetName: Constants.RHINO_EAT_1, direction: Constants.SKIER_DIRECTIONS.DOWN, eating: false, eatingAnimate: Constants.RHINO_EAT.LIFT-i, previousDirection: Constants.SKIER_DIRECTIONS.DOWN, runningAsset: Constants.RHINO_RUN.RUN_1, runningInterval: Constants.RHINO_RUNNING_ANIMATE, speed: Constants.RHINO_STARTING_SPEED, turning: 0, x: 0, y: 0});
    }

    for (let i = 61; i <= 80; i++) {
        rhino.eatSkier();
        expect(rhino).toEqual({assetName: Constants.RHINO_EAT_2, direction: Constants.SKIER_DIRECTIONS.DOWN, eating: false, eatingAnimate: Constants.RHINO_EAT.LIFT-i, previousDirection: Constants.SKIER_DIRECTIONS.DOWN, runningAsset: Constants.RHINO_RUN.RUN_1, runningInterval: Constants.RHINO_RUNNING_ANIMATE, speed: Constants.RHINO_STARTING_SPEED, turning: 0, x: 0, y: 0});
    }

    for (let i = 81; i <= 100; i++) {
        rhino.eatSkier();
        expect(rhino).toEqual({assetName: Constants.RHINO_EAT_3, direction: Constants.SKIER_DIRECTIONS.DOWN, eating: false, eatingAnimate: Constants.RHINO_EAT.LIFT-i, previousDirection: Constants.SKIER_DIRECTIONS.DOWN, runningAsset: Constants.RHINO_RUN.RUN_1, runningInterval: Constants.RHINO_RUNNING_ANIMATE, speed: Constants.RHINO_STARTING_SPEED, turning: 0, x: 0, y: 0});
    }

    for (let i = 101; i <= 120; i++) {
        rhino.eatSkier();
        expect(rhino).toEqual({assetName: Constants.RHINO_EAT_4, direction: Constants.SKIER_DIRECTIONS.DOWN, eating: false, eatingAnimate: Constants.RHINO_EAT.LIFT-i, previousDirection: Constants.SKIER_DIRECTIONS.DOWN, runningAsset: Constants.RHINO_RUN.RUN_1, runningInterval: Constants.RHINO_RUNNING_ANIMATE, speed: Constants.RHINO_STARTING_SPEED, turning: 0, x: 0, y: 0});
    }
});