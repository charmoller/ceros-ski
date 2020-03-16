import "babel-polyfill";
import {Rhino} from "../Entities/Rhino";
import * as Constants from "../Constants";
import {SKIER_DIRECTIONS} from "../Constants";
import {RHINO_RUN} from "../Constants";

test('Create new rhino object', () => {
    const rhino = new Rhino(0, 0, SKIER_DIRECTIONS.DOWN);
    expect(rhino).toEqual({assetName: Constants.RHINO_RUN_ASSET[RHINO_RUN.RUN_1], direction: Constants.SKIER_DIRECTIONS.DOWN, eating: false, eatingAsset: Constants.RHINO_EAT.LIFT, eatingInterval: Constants.RHINO_EAT_TIME, previousDirection: Constants.SKIER_DIRECTIONS.DOWN, runningAsset: Constants.RHINO_RUN.RUN_1, runningInterval: Constants.RHINO_RUNNING_ANIMATE, turning: 0, speed: Constants.RHINO_STARTING_SPEED, x: 0, y: 0});
});