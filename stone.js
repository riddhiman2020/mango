class stone{
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }  
      this.x=x
      this.y=y
      this.radius=radius;
      this.body = Bodies.circle(x, y, radius, options);
      this.image = loadImage("images/stone.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius,this.radius);
      pop();
    }
  }