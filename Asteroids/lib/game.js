const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");
// const Util = require("./utils.js");

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS = 10;

class Game {
  
  constructor() {
    this.asteroids = [];
  }
  
  addAsteroids() {
    const as = new Asteroid({pos: this.randomPosition()});
    this.asteroids.push(as);

  }
  
  randomPosition() {
    let pos_x = Math.floor(Math.random() * DIM_X);
    let pos_y = Math.floor(Math.random() * DIM_Y);
    return [pos_x, pos_y];
  }
  
  draw(ctx) {
    ctx.clearRect(0,0, DIM_X, DIM_Y);
    this.asteroids.forEach( (el) => el.draw(ctx));
  }
  
  moveObjects() {
    this.asteroids.forEach( (el) => el.move());
    if (this.asteroids.length > NUM_ASTEROIDS) {
      this.asteroids.shift();
    }
  }
  
}

let canvasEl;
let ctx;

document.addEventListener("DOMContentLoaded", function(){
  canvasEl = document.getElementById("myCanvas");
    canvasEl.height = 500;
    canvasEl.width = 500;
    
  ctx = canvasEl.getContext("2d");
  
  const mo = new MovingObject(
    { pos: [30, 30], vel: [10, 10], radius: 25, color: "#00FF00"}
  );
  
  mo.draw(ctx);
  // ctx.clearRect(0,0);
  
  mo.move();
  mo.draw(ctx);
  
  const as = new Asteroid({ pos: [130, 130] });
  
  as.draw(ctx);
  
  const g = new Game();

  
  setInterval(() => {
    g.addAsteroids();
    g.draw(ctx);
    g.moveObjects();
    mo.draw(ctx);
  }, 20);

});

module.exports = Game;