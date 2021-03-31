class Drop{
    constructor(x,y,r){
        var options={
            restitution:1.0,
            friction:0.1,
            density:1.0
        }
        this.x=x;
        this.y=y;
        this.r=r;
    
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body)
    }
    display(){
       var pos=this.body.position ;
			translate(paperpos.x, paperpos.y);
			fill("darkBlue")
			ellipse(0,0,this.r, this.r);
       

            var maxDrops=100;
            
       for(var i=0;i<maxDrops;i++){
           drops.push(new createdrop(random(0,400),random(0,400)));
       }

    }
}