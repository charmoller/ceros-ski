import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";
import {SKIER_DIRECTIONS} from "../Constants";
import {RHINO_DEFAULT} from "../Constants";
import {RHINO_RUN} from "../Constants";
import {RHINO_EAT} from "../Constants";

export class Rhino extends Entity {
    assetName = Constants.RHINO_DEFAULT;

    direction = Constants.SKIER_DIRECTIONS.DOWN;
    speed = Constants.RHINO_STARTING_SPEED;
    turning = 0;
    runningInterval = Constants.RHINO_RUNNING_ANIMATE;
    eating = false;
    eatingAnimate = Constants.RHINO_EAT.LIFT;
    runningAnimate = Constants.RHINO_RUNNING_ANIMATE;

    constructor(x, y, direction) {
        super(x, y);
        this.setDirection(direction);
        this.runningAsset = Constants.RHINO_RUN.RUN_1;
    }

    setDirection(direction) {
        this.previousDirection = this.direction;
        this.direction = direction;
    }

    chase(skier)  {

        if (this.eating) {
            this.eatSkier();
        }
        else {
            this.setDirection(skier.direction);

            if (this.isChangingDirection()) {
                this.setTurning();
            }

            if (skier.x < this.x) {
                this.x -= this.getSpeed();
                if (this.x < skier.x) {
                    this.x = skier.x;
                }
            }
            else if (skier.x > this.x) {
                this.x += this.getSpeed();
                if (this.x > skier.x) {
                    this.x = skier.x;
                }
            }

            if (skier.y < this.y) {
                this.y -= this.getSpeed();
                if (this.y < skier.y) {
                    this.y = skier.y;
                }
            }
            else if (skier.y > this.y) {
                this.y += this.getSpeed();
                if (this.y > skier.y) {
                    this.y = skier.y;
                }
            }

            this.runningAnimate = this.animate(this.runningAnimate, Constants.RHINO_RUN_ASSET, Constants.RHINO_RUN);
            if (this.runningAnimate === 0) {
                this.runningAnimate = Constants.RHINO_RUNNING_ANIMATE;
            }
        }

    }

    isChangingDirection() {
        if(this.previousDirection !== this.direction) {
            return true;
        }
        else {
            return false;
        }
    }

    setTurning() {
        this.turning = Constants.RHINO_TURN_TIME;
    }

    getSpeed() {
        if(this.turning > 0) {
            this.turning--;
            return this.speed / Constants.RHINO_TURN_SPEED_REDUCER;
        }
        else {
            return this.speed;
        }
    }

    checkIfRhinoCaughtSkier(skier, assetManager) {
        const rhinoAsset = assetManager.getAsset(this.assetName);
        const rhinoBounds = new Rect(
            this.x - rhinoAsset.width / 2,
            this.y - rhinoAsset.height / 2,
            this.x + rhinoAsset.width / 2,
            this.y - rhinoAsset.height / 4
        );
        const skierAsset = assetManager.getAsset(skier.getAssetName());
        const skierBounds = new Rect(
            skier.x - skierAsset.width / 2,
            skier.y - skierAsset.height / 2,
            skier.x + skierAsset.width / 2,
            skier.y - skierAsset.height / 4
        );

        const caught = intersectTwoRects(rhinoBounds, skierBounds);

        if(caught) {
            this.eating = true;
        }

        return caught;
    };

    eatSkier() {
        this.eatingAnimate = this.animate(this.eatingAnimate, Constants.RHINO_EAT_ASSET, Constants.RHINO_EAT);
    }
}