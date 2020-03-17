/**
 * Entity superclass
 */
export class Entity {
    x = 0;
    y = 0;

    assetName = '';

    /**
     * Create a new entity
     * @param x
     * @param y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Get the name of the asset associated with this entity
     * @returns {string}
     */
    getAssetName() {
        return this.assetName;
    }

    /**
     * Get the position of the entity
     * @returns {{x: number, y: number}}
     */
    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }

    /**
     * Draw the entity on the given drawing canvas using the provided assets
     * @param canvas
     * @param assetManager
     */
    draw(canvas, assetManager) {
        const asset = assetManager.getAsset(this.assetName);
        const drawX = this.x - asset.width / 2;
        const drawY = this.y - asset.height / 2;

        canvas.drawImage(asset, drawX, drawY, asset.width, asset.height);
    }

    /**
     * Animate the asset by cycling through the assets in the provided animateDetails, changing the asset
     * when the count of the number of moves progressed through matches the value in the animateDetails.
     * @param move The number of moves made through the animation
     * @param assets The assets to use for the animation
     * @param animateDetails A mapping between a number of moves and an asset key to use for animating
     * @returns {*}
     */
    animate(move, assets, animateDetails) {
        if (move === 0) {
            this.setDirection(this.direction);
        }
        else {
            const changeAsset = Object.keys(animateDetails).find(k => animateDetails[k]===move);
            if (changeAsset !== undefined) {
                this.assetName = assets[animateDetails[changeAsset]];
            }
            move--;
        }

        return move;
    }
}