class Block {
    constructor(x,y,Img){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height =50;
        this.image = loadImage(Img);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
      }
    };
