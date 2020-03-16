import "babel-polyfill";
import * as Constants from "../Constants";
import {AssetManager} from "../Core/AssetManager";

test('Create new asset manager object', () => {
    const newAssetManager = new AssetManager();
    expect(newAssetManager).toEqual({loadedAssets: []});
});

test('Get asset not found', () => {
    const assetManager = new AssetManager();
    try {
        assetManager.getAsset("abc");
        expect(true).toBe(false);
    }
    catch (e) {
        expect(e.message).toBe("Asset abc not found");
    }

});

/*
test('Load single asset', () => {
    const assetManager = new AssetManager();
    return assetManager.loadSingleAsset('img/skier_crash.png', Constants.SKIER_CRASH)
        .then(result => {
            expect(result).toEqual(true);
        });
}, 10000);


test('Load assets', async () => {
    const assetManager = new AssetManager();
    await assetManager.loadAssets(Constants.ASSETS);
    expect(assetManager).toEqual({loadedAssets: []});
}, 10000);
 */