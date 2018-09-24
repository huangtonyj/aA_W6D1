// Function.prototype.inherits = function (superclass) {
//   function Surrogate () {}
//   Surrogate.prototype = superclass.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function (superclass) {
  this.prototype = Object.create(superclass.prototype);
  this.prototype.constructor = this;
};


function MovingObject () {}

MovingObject.prototype.sayHello = function () {
  console.log("hello");
};

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);