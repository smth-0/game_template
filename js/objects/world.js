import {Player} from "./player";
import {Info} from "./info";
import {Laser} from "./laser";
import {Mob} from "./mob";


export class World {
    constructor() {
        // Создадим игрока
        this.laser = [];
        this.bots = [];
        this.player = new Player(window.innerWidth/2, window.innerHeight/2);
        this.isShowData = true;
        this.multyplier = 2;
        this.mouseX = 0;
        this.mouseY = 0;
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
                        this.player.x < 1 + this.player.r +
                        this
                            .multyplier ? this
                            .player
                            .set_cords(
                                1 + this
                                    .player
                                    .r + this
                                    .multyplier
                                , this
                                    .player
                                    .y) : this
                            .player
                            .go_left();
                        break;
                    case "d":
                        this
                            .player
                            .x > (
                            window
                                .innerWidth -
                            this
                                .player
                                .r -
                            this
                                .multyplier
                            - 1
                        ) ? this
                            .player
                            .set_cords(
                                (window
                                        .innerWidth -
                                    this
                                        .player
                                        .r -
                                    this
                                        .multyplier
                                    - 1), this
                                    .player
                                    .y
                            ) : this
                            .player
                            .go_right();
                        break;
                    case "s":
                        this
                            .player
                            .y > (window
                                .innerHeight - this
                                .player
                                .r - this
                                .multyplier
                            - 1
                        ) ? this
                            .player
                            .set_cords(
                                this
                                    .player
                                    .x, (
                                    window
                                        .innerHeight
                                    - this
                                        .player
                                        .r - this
                                        .multyplier
                                    - 10
                                )
                            ) : this
                            .player
                            .go_down();
                        break;
                    case "w":
                        this
                            .player
                            .y < this
                            .player
                            .r
                        + 1 +
                        this.multyplier ? this
                            .player
                            .set_cords(
                                this
                                    .player
                                    .x, this
                                    .player
                                    .r
                                + 10
                                + this
                                    .multyplier) : this
                            .player
                            .go_up();
                        break;
                    case "r":
                        location
                            .reload();
                        console
                            .log("RELOAD");
                        break;
                }
            }
        });

    };

    click(x, y) {
        this
            .laser
            .push(
                new Laser(
                    this
                        .player
                        .x,
                    this
                        .player
                        .y,
                    x,
                    y
                )
            )
    }

    get_items() {
        this.laser.length > 20 ? this.laser.shift() : null;
        this.bots.length > 10 ? null : this.bots.push(new Mob(getRandomInt(30,window.innerWidth-30),getRandomInt(30,window.innerHeight-30),this.player));

        return [this.player, new Info(this.player.x, this.player.y, this.mouseX, this.mouseY, this.laser.length, this.bots.length),...this.laser,...this.bots];
    }

}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
