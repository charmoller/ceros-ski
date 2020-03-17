/**
 * Asset Manager
 */
export class AssetManager {
    loadedAssets = [];

    constructor() {
    }

    /**
     * Load all assets
     * @param assets
     * @returns {Promise<void>}
     */
    async loadAssets(assets) {
        const assetPromises = [];

        for (const [assetName, assetUrl] of Object.entries(assets)) {
            const assetPromise = this.loadSingleAsset(assetUrl, assetName);
            assetPromises.push(assetPromise);
        }

        await Promise.all(assetPromises);
    }

    /**
     * Load a single asset
     * @param assetUrl
     * @param assetName
     * @returns {Promise<unknown>}
     */
    loadSingleAsset(assetUrl, assetName) {
        return new Promise((resolve) => {
            const assetImage = new Image();
            assetImage.onload = () => {
                assetImage.width /= 2;
                assetImage.height /= 2;

                this.loadedAssets[assetName] = assetImage;
                resolve();
            };
            assetImage.src = assetUrl;
        });
    }

    /**
     * Get an asset
     * @param assetName
     * @returns {*}
     * @throws Error If asset is not found
     */
    getAsset(assetName) {
        const asset = this.loadedAssets[assetName];
        if (asset === undefined) {
            throw new Error("Asset " + assetName + " not found");
        }

        return asset;
    }
}