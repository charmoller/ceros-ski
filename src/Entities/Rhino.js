import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";
import {SKIER_DIRECTIONS} from "../Constants";
import {RHINO_DEFAULT} from "../Constants";

export class Rhino extends Entity {
    assetName = Constants.RHINO_DEFAULT;

    direction = Constants.SKIER_DIRECTIONS.DOWN;
    speed = Constants.RHINO_STARTING_SPEED;
    turning = 0;

    constructor(x, y, direction) {
        super(x, y);
        this.setDirection(direction);
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