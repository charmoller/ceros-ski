import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";
import {SKIER_DIRECTIONS} from "../Constants";
import {RHINO_DEFAULT} from "../Constants";

export class Rhino extends Entity {
    assetName = Constants.RHINO_DEFAULT;

    direction = Constants.SKIER_DIRECTIONS.DOWN;
    speed = Constants.RHINO_STARTING_SPEED;

    constructor(x, y, direction) {
        super(x, y);
        this.setDirection(direction);
    }

    setDirection(direction) {
        this.direction = direction;
    }

    move(skierX, skierY, skierDirection) {

        let speed = this.speed;
        if ((skierDirection === Constants.SKIER_DIRECTIONS.LEFT_DOWN) || (skierDirection === Constants.SKIER_DIRECTIONS.RIGHT_DOWN)) {
            speed = this.speed / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
        }

        if (skierX < this.x) {
            this.x -= speed;
        }
        else if (skierX > this.x) {
            this.x += speed;
        }

        if (skierY < this.y) {
            this.y -= speed;
        }
        else if (skierY > this.y) {
            this.y += speed;
        }
    }

    moveRhinoLeft() {
        this.x -= Constants.SKIER_STARTING_SPEED;
    }

    moveRhinoLeftDown() {
        this.x -= this.speed / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
    }

    moveRhinoDown() {
        this.y += this.speed;
    }

    moveRhinoRightDown() {
        this.x += this.speed / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.RHINO_DIAGONAL_SPEED_REDUCER;
    }

    moveRhinoRight() {
        this.x += Constants.SKIER_STARTING_SPEED;
    }

    moveRhinoUp() {
        this.y -= Constants.SKIER_STARTING_SPEED;
    }

    turnLeft() {
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
        if(this.direction === Constants.SKIER_DIRECTIONS.LEFT || this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.moveRhinoUp();
        }
    }

    turnDown() {
        this.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
    }
}