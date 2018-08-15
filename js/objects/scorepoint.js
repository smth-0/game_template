import * as PIXI from "pixi.js";

export class scorepoint {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.r = 5;
    }

    draw() {

        const graphics = new PIXI.Graphics();
        graphics.beginFill(0x427df4);
        graphics.drawCircle(this.x, this.y, this.r);
        graphics.endFill();

        return graphics
    }
}