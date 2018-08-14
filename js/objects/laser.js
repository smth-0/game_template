import * as PIXI from "pixi.js";

export class Laser {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 3;
        this.f = 4;
    }

    draw() {
        // http://pixijs.download/dev/docs/PIXI.Graphics.html
        const graphics = new PIXI.Graphics();

        graphics.beginFill(0x000FFF);
        graphics.drawCircle(this.x, this.y, this.r);
        //graphics.drawSquare(this.x, this.y, 10, 10);
        graphics.endFill();

        return graphics
    }

    go_left = () => {
        this.x -= this.f
    };

    go_right = () => {
        this.x += this.f
    };

    go_up = () => {
        this.y -= this.f
    };

    go_down = () => {
        this.y += this.f
    };
    set_cords = (x, y) => {
        this.x=x;
        this.y=y;
    };
}