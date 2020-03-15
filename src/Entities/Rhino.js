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
        this.direction = direction;
    }

    move() {

        switch(this.direction) {
            case Constants.SKIER_DIRECTIONS.LEFT_DOWN:
                this.moveRhinoLeftDown();
                break;
            case Constants.SKIER_DIRECTIONS.DOWN:
                this.moveRhinoDown();
                break;
            case Constants.SKIER_DIRECTIONS.RIGHT_DOWN:
                this.moveRhinoRightDown();
                break;
        }
    }

    moveRhinoLeft() {
        this.x -= Constants.SKIER_STARTING_SPEED;
    }

    moveRhinoLeftDown() {
        this.x -= this.getSpeed() / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
        this.y += this.getSpeed()  / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
    }

    moveRhinoDown() {
        this.y += this.getSpeed() ;
    }

    moveRhinoRightDown() {
        this.x += this.getSpeed()  / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
        this.y += this.getSpeed()  / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
    }

    moveRhinoRight() {
        this.x += Constants.SKIER_STARTING_SPEED;
    }

    moveRhinoUp() {
        this.y -= Constants.SKIER_STARTING_SPEED;
    }

    turnLeft() {
        this.setTurning();
        if(this.direction === Constants.SKIER_DIRECTIONS.LEFT) {
            this.moveRhinoLeft();
        }
        else if(this.direction === SKIER_DIRECTIONS.CRASH) {
            this.moveRhinoLeft();
            this.setDirection(SKIER_DIRECTIONS.LEFT);
        }
        else {
            this.setDirection(this.direction - 1);
        }
    }

    turnRight() {
        this.setTurning();
        if(this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.moveRhinoRight();
        }
        else if(this.direction === SKIER_DIRECTIONS.CRASH) {
            this.moveRhinoRight();
            this.setDirection(SKIER_DIRECTIONS.RIGHT);
        }
        else {
            this.setDirection(this.direction + 1);
        }
    }

    turnUp() {
        this.setTurning();
        if(this.direction === Constants.SKIER_DIRECTIONS.LEFT || this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.moveRhinoUp();
        }
    }

    turnDown() {
        this.setTurning();
        this.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
    }

    setTurning() {
        this.turning = 150;
    }

    getSpeed() {
        if (this.turning > 0) {
            this.turning--;
            return this.speed / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
        }
        else {
            return this.speed;
        }
    }
}