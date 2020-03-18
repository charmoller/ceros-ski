import "babel-polyfill";
import {AssetManager} from "../Core/AssetManager";
import * as Constants from "../Constants";
import {SKIER_CRASH} from "../Constants";
import {SKIER_LEFT} from "../Constants";

const LOAD_FAILURE_SRC = 'LOAD_FAILURE_SRC';
const LOAD_SUCCESS_SRC = 'LOAD_SUCCESS_SRC';

beforeAll(() => {
    Object.defineProperty(global.Image.prototype, 'src', {
        set(src) {
            setTimeout(() => this.onload());
        },
    });
});

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
    return assetManager.loadSingleAsset(LOAD_SUCCESS_SRC, Constants.SKIER_CRASH)
        .then(result => {
            expect(result).toEqual(true);
            expect(assetManager.loadedAssets.length).toBe(1);
        })
    ;
});


test('Load assets', () => {
    const ASSETS = {
        [SKIER_CRASH]: 'img/skier_crash.png',
        [SKIER_LEFT]: 'img/skier_left.png',
    };
    const assetManager = new AssetManager();
    return assetManager.loadAssets(ASSETS)
        .then(result => {
            expect(assetManager.loadedAssets.length).toBe(2);
            expect(assetManager).toEqual({loadedAssets: []});
        });
});
*/