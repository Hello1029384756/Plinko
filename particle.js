function Particle(x) {
  var options = {
    restitution: 0.5
  }  
  this.body = Bodies.circle(x, 50, 10, options);
    this.r = 10
    World.add(world, this.body);
}

Particle.prototype.show = function() {
  fill(255)
  stroke(255)
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  ellipse(0,0,10 * 2)
  pop();
}
