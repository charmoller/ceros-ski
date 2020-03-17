import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";

/**
 * Rhino Entity
 */
export class Rhino extends Entity {
    assetName = Constants.RHINO_DEFAULT;

    direction = Constants.SKIER_DIRECTIONS.DOWN;
    speed = Constants.RHINO_STARTING_SPEED;
    turning = 0;
    eating = false;
    eatingAnimate = Constants.RHINO_EAT.LIFT;
    runningAnimate = Constants.RHINO_RUN.RUN_1;

    /**
     * Create new rhino
     * @param x
     * @param y
     * @param direction
     */
    constructor(x, y, direction) {
        super(x, y);
        this.setDirection(direction);
    }

    /**
     * Set the rhino current and previous direction
     * @param direction
     */
    setDirection(direction) {
        this.previousDirection = this.direction;
        this.direction = direction;
    }

    /**
     * Chase the skier
     * @param skier Skier Entity
     */
    chase(skier)  {

        // If currently eating the skier, don't chase, just eat
        if (this.eating) {
            this.eatSkier();
        }
        // If not eating the skier, chase by moving the direction the skier is moving
        else {
            this.setDirection(skier.direction);

            // If changing direction, set turning so that the speed is adjusted
            if (this.isChangingDirection()) {
                this.setTurning();
            }

            // Move towards the skier
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

            // Display the correct assets to animate the rhino running
            this.runningAnimate = this.animate(this.runningAnimate, Constants.RHINO_RUN_ASSET, Constants.RHINO_RUN);
            if(this.runningAnimate === 0) {
                this.runningAnimate = Constants.RHINO_RUN.RUN_1;
            }
        }

    }

    /**
     * Is the rhino changing direction?
     * @returns {boolean}
     */
    isChangingDirection() {
        if(this.previousDirection !== this.direction) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * The rhino is turning for RHINO_TURN_TIME
     */
    setTurning() {
        this.turning = Constants.RHINO_TURN_TIME;
    }

    /**
     * Get the rhino speed. Rhinos are big and clumsy so they slow down while turning, but once they get going
     * they are faster than a skier.
     * @returns {number}
     */
    getSpeed() {
        if(this.turning > 0) {
            this.turning--;
            return this.speed / Constants.RHINO_TURN_SPEED_REDUCER;
        }
        else {
            return this.speed;
        }
    }

    /**
     * Check if the rhino caught the skier
     * @param skier Skier Entity
     * @param assetManager Assets to use for calculating if the asset boundaries intersect indicating a collision
     * @returns {boolean}
     */
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

    /**
     * Animate eating the skier
     */
    eatSkier() {
        this.eatingAnimate = this.animate(this.eatingAnimate, Constants.RHINO_EAT_ASSET, Constants.RHINO_EAT);
    }
}