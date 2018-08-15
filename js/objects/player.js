import * as PIXI from "pixi.js";

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 10;
        this.f = 8;
        this.hp = 10;
    }

    draw() {
        // http://pixijs.download/dev/docs/PIXI.Graphics.html
        const graphics = new PIXI.Graphics();

        this.hp > 5 ? this.r=this.hp : this.r = 5;
        this.hp > 25 ? this.hp=25 : null;
        this.f = 25-this.r;

        graphics.beginFill(0xb2ff00);

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