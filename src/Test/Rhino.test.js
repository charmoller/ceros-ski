import "babel-polyfill";
import {Rhino} from "../Entities/Rhino";
import * as Constants from "../Constants";
import {SKIER_DIRECTIONS} from "../Constants";

test('Create new rhino object', () => {
    const rhino = new Rhino(0, 0, SKIER_DIRECTIONS.DOWN);
    expect(rhino).toEqual({assetName: Constants.RHINO_DEFAULT, direction: Constants.SKIER_DIRECTIONS.DOWN, speed: Constants.RHINO_STARTING_SPEED, x: 0, y: 0});
});