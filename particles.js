class Particles{
	constructor(x,y,r)
	{
		var options = {
			isStatic:false
		  };
		this.x=x;
		this.y=y;
		this.r=r;
    this.body=Bodies.circle(this.x, this.y, this.r/2, options)
    this.color=color(random(0,255),random(0,255),random(0,255));
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push();
			translate(pos.x,pos.y);
			rectMode(CENTER);
			strokeWeight(5);
			fill(230,230,230);
			ellipse(0,0,this.r, this.r);
			pop();
	}

}