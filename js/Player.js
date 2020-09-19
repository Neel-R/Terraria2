class Player {
    constructor(x,y,image) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.0
          }
            this.body = Bodies.rectangle(x, y, 70, 150, options);
            this.width = 40;
            this.height = 100;
            this.image = loadImage(image);
            World.add(world, this.body);
          }
          display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            imageMode(CENTER);
            image(this.image,0, 0, this.width, this.height);
            pop();
          }
    }