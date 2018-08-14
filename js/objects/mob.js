import * as PIXI from "pixi.js";
import {Player} from "./player.js";

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
export class Mob {
    constructor(spawnx, spawny, player) {
        this.x = spawnx;
        this.y = spawny;
        this.current_player_x=player.x;
        this.current_player_y=player.y;
        this.player=player;
        this.r = 10;
        this.f = 4;
        this.k = (this.current_player_y - this.y) /  (this.current_player_x - this.x);
        this.b = this.y - this.k*this.x;
    }

    draw() {
        this.k = (this.current_player_y - this.y) /  (this.current_player_x - this.x);
        this.b = this.y - this.k*this.x;

        this.current_player_x=this.player.x;
        this.current_player_y=this.player.y;
        if(this.current_player_x>this.x) {
            this.x += this.f;
            this.y = this.k * this.x + this.b;
        } else {
            this.x -= this.f;
            this.y = this.k * this.x + this.b;
        }

        // http://pixijs.download/dev/docs/PIXI.Graphics.html
        const graphics = new PIXI.Graphics();

        graphics.beginFill(0xffffff);
        graphics.drawCircle(this.x, this.y, this.r);
        //graphics.drawSquare(this.x, this.y, 10, 10);
        graphics.endFill();

        return graphics
    }
}