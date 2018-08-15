import {Player} from "./player";
import {Info} from "./info";
import {Laser} from "./laser";
import {Mob} from "./mob";
import {healCircle} from "./healCircle";
import {scorepoint} from "./scorepoint";


export class World {
    constructor() {
        // Создадим игрока
        this.laser = [];
        this.bots = [];
        this.healCircle = new healCircle(getRandomInt(10,window.innerWidth-10),getRandomInt(10,window.innerHeight-10));
        this.player = new Player(window.innerWidth / 2, window.innerHeight / 2);
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
                    y,
                    this.player.r/2
                )
            )
    }

    get_items() {

        const getDistance = (x1, y1) => {                           // функция возвращающая расстояние до игрока
            let x2 = this.player.x, y2 = this.player.y;
            return Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);
        };

        const getDistanceToBullet = (x1, y1) => {                       //функция возвращающая расстояние до близлежащей пули
            let minimum = 999999;
            for (let i = 0; i < this.laser.length; i++) {
                let x2 = this.laser[i].cur_x, y2 = this.laser[i].cur_y;
                let cur = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);
                cur < minimum ? minimum = cur : null
            }
            return minimum;
        }
////////////////////////////////////////////////////////////////////////

        let items = [];

        this.laser.length > 40 ? this.laser.shift() : null; // чистилка патронов

        this.bots.length > 10 ? null : this.bots.push(new Mob(getRandomInt(30, window.innerWidth - 30), getRandomInt(30, window.innerHeight - 30), this.player));
        //              тут генерируются боты


        this.bots = this.bots.filter(
            onebot => {
                if (getDistance(onebot.x, onebot.y) > this.player.r) {
                    return true;
                } else {
                    this.player.hp -= 1;
                    return false;
                }
            }
        );

        this.bots = this.bots.filter(
             onebot => {
                return getDistanceToBullet(onebot.x, onebot.y) > this.player.r;
            }
        );

        if(getDistance(this.healCircle.x,this.healCircle.y) < 10){
            this.player.hp+=3;
            this.healCircle=new healCircle(getRandomInt(10,window.innerWidth),getRandomInt(10,window.innerHeight-10));
        }

        this.player.hp < 0 ? alert("game over!") : null;

        let modulationTextForPanelVariant1 =
            "player x: " + this.player.x+ "\n"+
            "player y: " + this.player.y+ "\n"+
            "number of bullets: " + this.laser.length+ "\n"+
            "player's hp: " + this.player.hp+ "\n"
            ;
        let modulationTextForPanelVariant2 =
            "number of bullets: " + this.laser.length+ "\n"+
            "player's hp: " + this.player.hp+ "\n"
        ;
        let modulationTextForPanelVariant3 =
            "player's hp: " + this.player.hp+ "\n"
        ;

        items.push(this.player);
        items.push(this.healCircle);
        items.push(new Info(modulationTextForPanelVariant3));
        items.push(new scorepoint(getrandomcoordinatex(),getrandomcoordinatey()));
        items = items.concat(this.laser);
        items = items.concat(this.bots);
        return items;
    }


}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getrandomcoordinatex() {
    return getRandomInt(10,window.innerWidth-10);
}
function getrandomcoordinatey() {
    return getRandomInt(10,window.innerHeight-10);
}
