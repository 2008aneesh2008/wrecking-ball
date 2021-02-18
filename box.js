class Box {
    constructor(x,y,width,height)
    {
      var options={
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
       this.image = loadImage("wood1.png");
      World.add(world,this.body)
    }
    display(){
      var pos = this.body.position;
       // rect(pos.x,pos.y,this.width,this.height)
     image(this.image,pos.x,pos.y,this.width,this.height )
    }
  
};

