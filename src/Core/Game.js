import * as Constants from "../Constants";
import { AssetManager } from "./AssetManager";
import { Canvas } from './Canvas';
import { Skier } from "../Entities/Skier";
import { ObstacleManager } from "../Entities/Obstacles/ObstacleManager";
import { Rect } from './Utils';
import {Rhino} from "../Entities/Rhino";

export class Game {
    gameWindow = null;
    rhino = undefined;

    constructor() {
        this.assetManager = new AssetManager();
        this.canvas = new Canvas(Constants.GAME_WIDTH, Constants.GAME_HEIGHT);
        this.skier = new Skier(0, 0);
        this.obstacleManager = new ObstacleManager();

        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    init() {
        this.obstacleManager.placeInitialObstacles();
    }

    async load() {
        await this.assetManager.loadAssets(Constants.ASSETS);
    }

    run() {
        this.canvas.clearCanvas();

        this.updateGameWindow();
        this.drawGameWindow();

        requestAnimationFrame(this.run.bind(this));
    }

    updateGameWindow() {
        this.skier.move();
        this.displayRhino();

        const previousGameWindow = this.gameWindow;
        this.calculateGameWindow();

        this.obstacleManager.placeNewObstacle(this.gameWindow, previousGameWindow);

        //this.skier.checkIfSkierHitObstacle(this.obstacleManager, this.assetManager);
    }

    drawGameWindow() {
        this.canvas.setDrawOffset(this.gameWindow.left, this.gameWindow.top);

        this.skier.draw(this.canvas, this.assetManager);
        if (this.rhino !== undefined) {
            this.rhino.draw(this.canvas, this.assetManager);
        }

        this.obstacleManager.drawObstacles(this.canvas, this.assetManager);
    }

    calculateGameWindow() {
        const skierPosition = this.skier.getPosition();
        const left = skierPosition.x - (Constants.GAME_WIDTH / 2);
        const top = skierPosition.y - (Constants.GAME_HEIGHT / 2);

        this.gameWindow = new Rect(left, top, left + Constants.GAME_WIDTH, top + Constants.GAME_HEIGHT);
    }

    displayRhino() {
        if(this.skier.isRhinoChasing()) {
            if (this.rhino === undefined) {
                this.rhino = new Rhino(this.skier.x, this.skier.y -  Constants.RHINO_POSITION_OFFSET, this.skier.direction);
            }

            this.rhino.move();
        }
    }

    handleKeyDown(event) {
        switch(event.which) {
            case Constants.KEYS.LEFT:
                this.turnLeft();
                event.preventDefault();
                break;
            case Constants.KEYS.RIGHT:
                this.turnRight();
                event.preventDefault();
                break;
            case Constants.KEYS.UP:
                this.turnUp();
                event.preventDefault();
                break;
            case Constants.KEYS.DOWN:
                this.turnDown();
                event.preventDefault();
                break;
            case Constants.KEYS.SPACE:
                this.skier.jumpUp();
                event.preventDefault();
                break;
        }
    }

    turnLeft() {
        this.skier.turnLeft();
        if (this.rhino !== undefined) {
            this.rhino.turnLeft();
        }
    }

    turnRight() {
        this.skier.turnRight();
        if (this.rhino !== undefined) {
            this.rhino.turnRight();
        }
    }

    turnUp() {
        this.skier.turnUp();
        if (this.rhino !== undefined) {
           this.rhino.turnUp();
        }
    }

    turnDown() {
        this.skier.turnDown();
        if (this.rhino !== undefined) {
            this.rhino.turnDown();
        }
    }
}