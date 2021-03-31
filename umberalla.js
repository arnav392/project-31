class stone{
    constructor(x,y,r)
    {
		var options={
			restitution :1.0,
            friction :1.0,
            density :1.0
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("walking_1.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var stonePos=this.body.position;	
		push();
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER)
		//strokeWeight(4);
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.r, this.r)
		ellipse(0,0,this.r, this.r);
   pop();
 }
} 