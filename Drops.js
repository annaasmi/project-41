class Drop{
    constructor(x,y){
        var options={
            restitution:0,
            friction:0.1,
            density:1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,10,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("Blue");
      ellipseMode(CENTER);
      ellipse(this.x,this.y,10,10);
      pop();
    }
    updatePosition(){
        if(this.body.position.y > height){
                Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,700)})
        }
    }
}