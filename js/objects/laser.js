import * as PIXI from "pixi.js";
import {Player} from "./player";

export class Laser {
    constructor(cur_x, cur_y, dist_x, dist_y) {
        this.cur_x = cur_x;
        this.cur_y = cur_y;
        this.r = 5;
        this.dist_x = dist_x;
        this.dist_y = dist_y;
        this.k = (this.dist_y - this.cur_y) /  (this.dist_x - this.cur_x);
        this.b = this.cur_y - this.k*this.cur_x;
    }

    draw() {

        if(this.dist_x>this.cur_x) {
            this.cur_x += 1;
            this.cur_y = this.k * this.cur_x + this.b;
        } else {
            this.cur_x -= 1;
            this.cur_y = this.k * this.cur_x + this.b;
        }

        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xFFFF00);
        graphics.drawCircle(this.cur_x, this.cur_y, this.r);
        graphics.endFill();

        return graphics
    }
}