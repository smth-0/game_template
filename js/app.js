import * as PIXI from 'pixi.js';
import {World} from "./objects/world";

// Загружаем стили. Импортируем, для того чтобы webpack сам с ними разоборался
import '../styles/index.css'

// Пиксель - не пиксель https://habr.com/post/229359/
const ratio = window.devicePixelRatio;

// Создаём наш мир
const world = new World();

// Берём размеры экрана
let logicalWidth = window.innerWidth;
let logicalHeight = window.innerHeight;

// http://pixijs.download/dev/docs/PIXI.Application.html
let renderer = PIXI.autoDetectRenderer(
    logicalWidth,
    logicalHeight,
    {backgroundColor: 0x00000F, resolution: 2});

// Нажата ли кнопка
const keys = {"w": false, "s": false, "a": false, "d": false, "r": false};

function animate() {
    // Позволяет рисовать каждый тик
    requestAnimationFrame(animate);

    // http://pixijs.download/dev/docs/PIXI.Container.html
    const stage = new PIXI.Container();

    world.get_items().forEach((item) => {
        // Достаём отрисованный объект
        const graphics = item.draw();

        // Добавляем его в Container
        stage.addChild(graphics)
    });

    // Отрисовываем в этом тике всё
    renderer.render(stage);

    // Смотрим на нажатые кнопки
    world.move(keys);
}

document.addEventListener('keydown', (ev) => {
    keys[ev.key] = true;
}, false);

document.addEventListener('keyup', (ev) => {
    keys[ev.key] = false;
}, false);

window.onresize = function(event) {
    //location.reload();
    resizeCanvas();
};
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
    let x = e.pageX;
    let y = e.pageY;
    console.log(x+' '+y);
    renderer.resize(window.innerWidth,window.innerHeight);
    world.laser.set_cords(x/2,y/2);
};

function getMouseX() {
    return x;
};

function getMouseY() {
    return y;
};
// Начинаем рисовать!
animate();

function resizeCanvas(){
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerHeight/2;
    canvas.style.width = window.innerWidth/2 + 'px';
    canvas.style.height = window.innerHeight/2 + 'px';
};

// Wait for document loaded
window.onload = function () {
    // Достаём <div id="main"/> и суём туда canvas из renderer
    // View Page Source если не веришь
    document.getElementById("main").appendChild(renderer.view);
    // Устанавливаем нужные параметры высоты и ширины для канваса
    const canvas = renderer.view;
    resizeCanvas();
};