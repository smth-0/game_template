import {World} from "./world";

export class Info {
    constructor(playerX, playerY, mousex, mousey, size) {
        this.text = `PlayerX: ${playerX}\nPlayerY: ${playerY}\nHeight: `+window.innerHeight+'\nWight: '+window.innerWidth+'\nmouse x: '+mousex+'\nmouseY: '+mousey+'\nnumber of bullets: '+size
    }

    draw() {
        const basicText = new PIXI.Text(this.text, {fill: 0xFFFFFF, fontSize: 14});
        basicText.x = 0;
        basicText.y = 0;
        return basicText
    }
}