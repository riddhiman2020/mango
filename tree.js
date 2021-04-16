class tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/tree.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("black");
      push();
      translate(pos.x, pos.y);
      
      imageMode(CENTER);
      //image(this.image, 0, 0, this.width, this.height);
     image(this.image, 0, 0+270, this.width+30, this.height+600);
      //rect(pos.x, pos.y, this.width, this.height);
      pop();
     
    }
  };