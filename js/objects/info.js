import {World} from "./world";

export class Info {
    constructor(playerX, playerY, mousex, mousey, size, size_for_bots) {
        this.text = `PlayerX: ${playerX}\nPlayerY: ${playerY}\nHeight: `+window.innerHeight+'\nWight: '+window.innerWidth+'\nnumber of bullets: '+size+'\nNumber of bots: '+size_for_bots
    }

    draw() {
        const basicText = new PIXI.Text(this.text, {fill: 0xFFFFFF, fontSize: 14});
        basicText.x = 0;
        basicText.y = 0;
        return basicText
    }
}