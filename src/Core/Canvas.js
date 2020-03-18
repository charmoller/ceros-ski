/**
 * Drawing Canvas
 */
export class Canvas {
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    drawOffset = {
        x: 0,
        y: 0
    };
    ctx = null;

    /**
     * Create a new drawing canvas
     * @param width
     * @param height
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.createCanvas();
    }

    /**
     * Load the skiCanvas canvas element and save the drawing canvas dimensions
     */
    createCanvas() {
        const canvas = document.getElementById('skiCanvas');
        canvas.width = this.width * window.devicePixelRatio;
        canvas.height = this.height * window.devicePixelRatio;
        canvas.style.width = this.width + 'px';
        canvas.style.height = this.height + 'px';

        this.ctx = canvas.getContext("2d");
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    /**
     * Create teh drawing canvas
     */
    clearCanvas() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }

    /**
     * Set the offset to use for positioning elements on the canvas
     * @param x
     * @param y
     */
    setDrawOffset(x, y) {
        this.drawOffset.x = x;
        this.drawOffset.y = y;
    }

    /**
     * Draw an asset image at a relative position using the drawing office
     * @param image
     * @param x
     * @param y
     * @param width
     * @param height
     */
    drawImage(image, x, y, width, height) {
        x -= this.drawOffset.x;
        y -= this.drawOffset.y;

        this.ctx.drawImage(image, x, y, width, height);
    }

    drawRectWithText(x, y, text)
    {
        x -= this.drawOffset.x;
        y -= this.drawOffset.y;

        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText(text, x, y);
    }
}