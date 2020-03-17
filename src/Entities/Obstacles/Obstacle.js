import * as Constants from "../../Constants";
import { Entity } from "../Entity";
import { randomInt } from '../../Core/Utils';

const assetTypes = [
    Constants.TREE,
    Constants.TREE_CLUSTER,
    Constants.ROCK1,
    Constants.ROCK2,
    Constants.RAMP
];

/**
 * Obstacle Entity
 */
export class Obstacle extends Entity {

    /**
     * Create a new obstacle at position x, y
     * @param x
     * @param y
     */
    constructor(x, y) {
        super(x, y);

        const assetIdx = randomInt(0, assetTypes.length - 1);
        this.assetName = assetTypes[assetIdx];
    }

    /**
     * Is obstacle a rock?
     * @returns {boolean}
     */
    isRock() {
        return (this.assetName === Constants.ROCK1) || (this.assetName === Constants.ROCK2);
    }

    /** Is obstacle a ramp?
     *
     * @returns {boolean}
     */
    isRamp() {
        return this.assetName === Constants.RAMP;
    }
}