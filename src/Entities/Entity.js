export class Entity {
    x = 0;
    y = 0;

    assetName = '';

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getAssetName() {
        return this.assetName;
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }

    draw(canvas, assetManager) {
        const asset = assetManager.getAsset(this.assetName);
        const drawX = this.x - asset.width / 2;
        const drawY = this.y - asset.height / 2;

        canvas.drawImage(asset, drawX, drawY, asset.width, asset.height);
    }

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