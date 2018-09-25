const MovingObject = require("./moving_object.js");
// const Game = require("./game.js");
const Util = require("./utils.js");

class Asteroid extends MovingObject {
  constructor(options) {
    options.color = '#D3D3D3';
    options.radius = 35;
    options.vel = Util.randomVec(15);
    super(options);
  }
}







// window.MovingObject = MovingObject;

module.exports = Asteroid;