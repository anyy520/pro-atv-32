class Boat {
  // Adicione o parâmetro à função construtor.
  constructor(x, y, width, height, boatPos,     ) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      label: "boat"
    };
    this.animation = boatAnimation;
    this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;
    this.image = loadImage("assets/boat.png");
    World.add(world, this.body);
  }
  animate() {
    // Defina a velocidade da animação
   
  }

   remove(index) {
      Matter.World.remove(world, boats[index].body);
      boats.splice(index, 1);
    
  }
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    // Adicione o index por meio do conjunto de animações.
   

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    noTint();
    pop();
  }
}
