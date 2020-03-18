import * as Constants from "../Constants";
import { AssetManager } from "./AssetManager";
import { Canvas } from './Canvas';
import { Skier } from "../Entities/Skier";
import { ObstacleManager } from "../Entities/Obstacles/ObstacleManager";
import { Rect } from './Utils';
import {Rhino} from "../Entities/Rhino";

/**
 * Ski Game
 *
 */
export class Game {
    gameWindow = null;
    rhinoDelay = Constants.RHINO_DELAY;

    /**
     * Create a new Ski Game and initialize it.
     */
    constructor() {
        // Initialize the game
        this.assetManager = new AssetManager();
        this.canvas = new Canvas(Constants.GAME_WIDTH, Constants.GAME_HEIGHT);
        this.skier = new Skier(0, 0);
        this.rhino = new Rhino(0, 0);
        this.obstacleManager = new ObstacleManager();

        // Handle key presses
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    /**
     * Place the obstacles
     */
    init() {
        this.obstacleManager.placeInitialObstacles();
    }

    /**
     * Load the game assets
     * @returns {Promise<void>}
     */
    async load() {
        await this.assetManager.loadAssets(Constants.ASSETS);
    }

    /**
     * Start the game. This method is run on every screen repaint to update the displayed assets to new values
     * and re-draw them.
     */
    run() {
        this.canvas.clearCanvas();

        this.updateGameWindow();
        this.drawGameWindow();

        requestAnimationFrame(this.run.bind(this));
    }

    /**
     * Move the skier and display the rhino then calculate the boundaries of the new game window so the assets
     * can be re-drawn in the correct positions. Place additional obstacles and check if the skier hit an obstacle
     * to determine if a crash should be displayed.
     */
    updateGameWindow() {
        this.skier.move();
        this.displayRhino();

        const previousGameWindow = this.gameWindow;
        this.calculateGameWindow();

        this.obstacleManager.placeNewObstacle(this.gameWindow, previousGameWindow);

        this.skier.checkIfSkierHitObstacle(this.obstacleManager, this.assetManager);
        this.skier.eaten = this.rhino.checkIfRhinoCaughtSkier(this.skier, this.assetManager);
    }

    /**
     * Draw the game window according to the skier's new position. If the skier hasn't been eaten, draw the
     * skier. If the rhino has appeared, draw the rhino. Then draw the obstacles.
     */
    drawGameWindow() {
        this.canvas.setDrawOffset(this.gameWindow.left, this.gameWindow.top);

        if (!this.skier.eaten) this.skier.draw(this.canvas, this.assetManager);
        if (this.rhino.hasStartedChasing()) {
            this.rhino.draw(this.canvas, this.assetManager);
        }

        this.obstacleManager.drawObstacles(this.canvas, this.assetManager);
        this.canvas.drawRectWithText(this.skier.x + (Constants.GAME_WIDTH / 10), this.skier.y - (Constants.GAME_WIDTH / 10), "Score: "+this.skier.calculateScore());
    }

    /**
     * Calculate the boundaries of the game window relative to the skier's position
     */
    calculateGameWindow() {
        const skierPosition = this.skier.getPosition();
        const left = skierPosition.x - (Constants.GAME_WIDTH / 2);
        const top = skierPosition.y - (Constants.GAME_HEIGHT / 2);

        this.gameWindow = new Rect(left, top, left + Constants.GAME_WIDTH, top + Constants.GAME_HEIGHT);
    }

    /**
     * If it's time to display the rhino, create a new Rhino and start chasing the skier. CHeck if the rhino
     * caught the skier to determine if the skier should be displayed anymore.
     */
    displayRhino() {
        // Delay displaying the rhino until RHINO_DELAY number of skier moves
        if(this.skier.numberOfMoves >= this.rhinoDelay) {
            this.rhino.chase(this.skier);
        }
    }

    /**
     * Game is over because skier has been eaten
     * @returns {boolean}
     */
    isOver() {
        return this.skier.eaten;
    }

    /**
     * Handle Key presses for turn left, turn right, turn up, turn down, and jump. If the skier has been eaten,
     * no longer react to key presses.
     * @param event
     */
    handleKeyDown(event) {
        switch(event.which) {
            case Constants.KEYS.LEFT:
                this.skier.turnLeft();
                event.preventDefault();
                break;
            case Constants.KEYS.RIGHT:
                this.skier.turnRight();
                event.preventDefault();
                break;
            case Constants.KEYS.UP:
                this.skier.turnUp();
                event.preventDefault();
                break;
            case Constants.KEYS.DOWN:
                this.skier.turnDown();
                event.preventDefault();
                break;
            case Constants.KEYS.SPACE:
                this.skier.jumpUp();
                event.preventDefault();
                break;
        }
    }
}