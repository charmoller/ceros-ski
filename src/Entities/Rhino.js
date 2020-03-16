import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";
import {SKIER_DIRECTIONS} from "../Constants";
import {RHINO_DEFAULT} from "../Constants";
import {RHINO_RUN} from "../Constants";

export class Rhino extends Entity {
    assetName = Constants.RHINO_DEFAULT;

    direction = Constants.SKIER_DIRECTIONS.DOWN;
    speed = Constants.RHINO_STARTING_SPEED;
    turning = 0;
    runningInterval = Constants.RHINO_RUNNING_ANIMATE;

    constructor(x, y, direction) {
        super(x, y);
        this.setDirection(direction);
        this.assetName = Constants.RHINO_RUN_ASSET[RHINO_RUN.RUN_1];
        this.runningAsset = Constants.RHINO_RUN.RUN_1;
    }

    setDirection(direction) {
        this.previousDirection = this.direction;
        this.direction = direction;
    }

    chase(skierX, skierY, skierDirection)  {

        this.setDirection(skierDirection);

        if (this.isChangingDirection()) this.setTurning();

        if (skierX < this.x) {
            this.x -= this.getSpeed();
            if (this.x < skierX) this.x = skierX;
        }
        else if (skierX > this.x) {
            this.x += this.getSpeed();
            if (this.x > skierX) this.x = skierX;
        }

        if (skierY < this.y) {
            this.y -= this.getSpeed();
            if (this.y < skierY) this.y = skierY;
        }
        else if (skierY > this.y) {
            this.y += this.getSpeed();
            if (this.y > skierY) this.y = skierY;
        }

        this.updateAsset();

    }

    updateAsset() {
        if (this.runningInterval === 0)  this.runningAsset = 1 - this.runningAsset;
        this.assetName = Constants.RHINO_RUN_ASSET[this.runningAsset];

        if (this.runningInterval > 0) this.runningInterval--;
        else this.runningInterval = Constants.RHINO_RUNNING_ANIMATE;
    }

    isChangingDirection() {
        if (this.previousDirection !== this.direction) return true;
        else return false;
    }

   setTurning() {
        this.turning = Constants.RHINO_TURN_TIME;
    }

    getSpeed() {
        if (this.turning > 0) {
            this.turning--;
            return this.speed / Constants.RHINO_TURN_SPEED_REDUCER;
        }
        else {
            return this.speed;
        }
    }
}