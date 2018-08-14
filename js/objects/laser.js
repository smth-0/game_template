import * as PIXI from "pixi.js";
import {Player} from "./player";
import {Info} from "./info";
import {World} from "./world";



export class Laser {
    constructor(startX, startY, destx, desry) {
        this.destX = destx;
        this.destY = desry;
        this.startX = startX;
        this.startY = startY;
        this.x=startX;
        this.y=startY;
        this.r = 5;
        this.f = 100;


        this.k = (this.destX-this.startX)/(this.destY-this.startY)
        this.b = this.startY;

    }

    draw() {
        this.calculate();
        // http://pixijs.download/dev/docs/PIXI.Graphics.html
        const graphics = new PIXI.Graphics();
        // this.calculate();
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

    calculate = () => {

        let curX = this.startX;
        if(this.destX>this.curX){
            curX++;
        } else if(this.destX==this.x&&this.destY==this.y){
            return;
        } else {
            curX--;
        }
        let curY = curX*this.k+this.b;

        this.x=curX;
        this.y=curY;
    }
}