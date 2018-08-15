import * as PIXI from "pixi.js";
import {Player} from "./player";

export class healCircle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.r = 5;
    }

    draw() {

        const graphics = new PIXI.Graphics();
        graphics.beginFill(0x00ff72);
        graphics.drawCircle(this.x, this.y, this.r);
        graphics.endFill();

        return graphics
    }
}