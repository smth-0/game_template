import {Player} from "./player";
import {Info} from "./info";
import {Laser} from "./laser";

export class World {
    constructor() {
        // Создадим игрока
        this.laser = new Laser(100,30);
        this.player = new Player(15, 15);
        this.isShowData = true;
        this.multyplier = 2;
    }

    // В зависисмости от нажатых клавиш изменяем среду
    move = (keys) => {
        // Для каждого ключа в объекте
        Object.keys(keys).map((key) => {
            // Если нажата кнопка
            if (keys[key]) {
                // Взависимости от того какая кнопка
                switch (key) {

                    /*case "t":
                        this.isShowData = !this.isShowData;
                        */
                    case "a":
                        this.player.x < 1+this.player.r+this.multyplier ? this.player.set_cords(1+this.player.r+this.multyplier, this.player.y) : this.player.go_left();
                        break;
                    case "d":
                        this.player.x > (window.innerWidth-this.player.r-this.multyplier-1)/2 ? this.player.set_cords((window.innerWidth-this.player.r-this.multyplier-1)/2, this.player.y) : this.player.go_right();
                        break;
                    case "s":
                        this.player.y > (window.innerHeight-this.player.r-this.multyplier-1)/2 ? this.player.set_cords(this.player.x, (window.innerHeight-this.player.r-this.multyplier-10)/2) : this.player.go_down();
                        break;
                    case "w":
                        this.player.y < this.player.r+1+this.multyplier ?  this.player.set_cords(this.player.x, this.player.r+10+this.multyplier) : this.player.go_up();
                        break;
                    case "r":
                        location.reload();
                        console.log("RELOAD");
                        break;
                }
            }
        });

    };

    get_items() {
        return [this.player, new Info(this.player.x, this.player.y), this.laser]
    }
}

