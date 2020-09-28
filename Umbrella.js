class Umbrella{
    constructor(x,y){
        var options={
            isStatic: true,
            restitution:0,
            friction:0.1,
            density:1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,10,options);
        this.image = loadImage("images/man1.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,0,0,400,400);
      pop();
    }
}