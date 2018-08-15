import * as PIXI from "pixi.js";
import {Player} from "./player.js";

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
export class Mob {
    constructor(spawnx, spawny, player) {
        this.x = spawnx;
        this.y = spawny;
        this.hp = 2;
        this.current_player_x=player.x;
        this.current_player_y=player.y;
        this.player=player;
        this.r = 10;
        this.f = 1;
        this.k = (this.current_player_y - this.y) /  (this.current_player_x - this.x);
        this.b = this.y - this.k*this.x;
    }
    draw() {
        const getDistance = () => {
            return Math.sqrt((this.current_player_y - this.y) ** 2 + (this.current_player_x - this.x) ** 2);
        };
        this.current_player_x=this.player.x;
        this.current_player_y=this.player.y;
        /*
        this.k = (this.current_player_y - this.y) /  (this.current_player_x - this.x);
        this.b = this.y - this.k*this.x;

        this.r = this.player.r/2+1;


        if(this.current_player_x>this.x) {
            this.x += this.f;
            this.y = this.k * this.x + this.b;
        } else {
            this.x -= this.f;
            this.y = this.k * this.x + this.b;
        }
        */


        if(getDistance()<300) {
            this.x > this.current_player_x ? this.x -= this.f * 2 : this.x += this.f * 2;
            this.y > this.current_player_y ? this.y -= this.f : this.y += this.f;
        }

        // http://pixijs.download/dev/docs/PIXI.Graphics.html
        const graphics = new PIXI.Graphics();

        graphics.beginFill(0xff0000);
        graphics.drawCircle(this.x, this.y, this.r);
        //graphics.drawSquare(this.x, this.y, 10, 10);
        graphics.endFill();

        return graphics
    }
}