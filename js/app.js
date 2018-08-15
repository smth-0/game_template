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
    renderer.resize(window.innerWidth,window.innerHeight);
};
// document.addEventListener('mousemove', onMouseUpdate, false);
//document.addEventListener('mouseenter', onMouseUpdate, false);
//
// function onMouseUpdate(e) {
//     world.mouseX = e.x;
//     world.mouseY = e.y;
// //    console.log('Mouse at  x:'+world.mouseX+' and Y: '+world.mouseY);
// };

document.addEventListener('click', (ev) => {
    world.click(ev.x,ev.y);
    console.log("CLICK!");

});

// Начинаем рисовать!
animate();

function resizeCanvas(){
    const canvas = renderer.view;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
};

// Wait for document loaded
window.onload = function () {
    // Достаём <div id="main"/> и суём туда canvas из renderer
    // View Page Source если не веришь
    document.getElementById("main").appendChild(renderer.view);
    // renderer.resize(window.innerWidth,window.innerHeight);

    // Устанавливаем нужные параметры высоты и ширины для канваса
    resizeCanvas();
    renderer.resize(window.innerWidth,window.innerHeight);
};