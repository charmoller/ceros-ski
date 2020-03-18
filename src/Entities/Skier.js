import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";
import {SKIER_DIRECTIONS} from "../Constants";

/**
 * Skier Entity
 */
export class Skier extends Entity {
    assetName = Constants.SKIER_DOWN;

    direction = Constants.SKIER_DIRECTIONS.DOWN;
    speed = Constants.SKIER_STARTING_SPEED;
    jump  = 0;
    eaten = false;

    constructor(x, y) {
        super(x, y);
        this.numberOfMoves = 0;
    }

    setDirection(direction) {
        this.direction = direction;
        this.updateAsset();
    }

    updateAsset() {
        this.assetName = Constants.SKIER_DIRECTION_ASSET[this.direction];
    }

    move() {
        if (!this.isEaten()) {
            switch(this.direction) {
                case Constants.SKIER_DIRECTIONS.LEFT_DOWN:
                    this.moveSkierLeftDown();
                    break;
                case Constants.SKIER_DIRECTIONS.DOWN:
                    this.moveSkierDown();
                    break;
                case Constants.SKIER_DIRECTIONS.RIGHT_DOWN:
                    this.moveSkierRightDown();
                    break;
            }

            this.jump = this.animate(this.jump, Constants.SKIER_JUMP_ASSET, Constants.SKIER_JUMP);

            this.numberOfMoves++;
        }
    }

    moveSkierLeft() {
        this.x -= Constants.SKIER_STARTING_SPEED;
    }

    moveSkierLeftDown() {
        this.x -= this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    }

    moveSkierDown() {
        this.y += this.speed;
    }

    moveSkierRightDown() {
        this.x += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
        this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    }

    moveSkierRight() {
        this.x += Constants.SKIER_STARTING_SPEED;
    }

    moveSkierUp() {
        this.y -= Constants.SKIER_STARTING_SPEED;
    }

    turnLeft() {
        if (this.isJumping() || this.isEaten()) {
            return;
        }

        if(this.direction === Constants.SKIER_DIRECTIONS.LEFT) {
            this.moveSkierLeft();
        }
        else if(this.direction === SKIER_DIRECTIONS.CRASH) {
            this.moveSkierLeft();
            this.setDirection(SKIER_DIRECTIONS.LEFT);
        }
        else {
            this.setDirection(this.direction - 1);
        }
    }

    turnRight() {
        if (this.isJumping() || this.isEaten()) {
            return;
        }

        if(this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.moveSkierRight();
        }
        else if(this.direction === SKIER_DIRECTIONS.CRASH) {
            this.moveSkierRight();
            this.setDirection(SKIER_DIRECTIONS.RIGHT);
        }
        else {
            this.setDirection(this.direction + 1);
        }
    }

    turnUp() {
        if (this.isJumping() || this.isEaten()) {
            return;
        }

        if(this.direction === Constants.SKIER_DIRECTIONS.LEFT || this.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.moveSkierUp();
        }
    }

    turnDown() {
        if (this.isJumping() || this.isEaten()) {
            return;
        }

        this.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
    }

    jumpUp() {
        this.jump = Constants.SKIER_JUMP.JUMP_1;
        this.assetName = Constants.SKIER_JUMP_ASSET[this.jump];
    }

    checkIfSkierHitObstacle(obstacleManager, assetManager) {
        const asset = assetManager.getAsset(this.assetName);
        const skierBounds = new Rect(
            this.x - asset.width / 2,
            this.y - asset.height / 2,
            this.x + asset.width / 2,
            this.y - asset.height / 4
        );

        const collision = obstacleManager.getObstacles().find((obstacle) => {
            const obstacleAsset = assetManager.getAsset(obstacle.getAssetName());
            const obstaclePosition = obstacle.getPosition();
            const obstacleBounds = new Rect(
                obstaclePosition.x - obstacleAsset.width / 2,
                obstaclePosition.y - obstacleAsset.height / 2,
                obstaclePosition.x + obstacleAsset.width / 2,
                obstaclePosition.y
            );

            if (this.isJumping() && obstacle.isRock()) return false;

            return intersectTwoRects(skierBounds, obstacleBounds);
        });

        if(collision) {
            if (collision.isRamp()) this.jumpUp();
            else this.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
        }
    };

    isJumping()
    {
        return this.jump !== 0;
    }

    isEaten()
    {
        return this.eaten;
    }

    getDistanceSkied() {
        return this.y;
    }

    calculateScore() {
        return Math.round(this.getDistanceSkied() / 100);
    }
}