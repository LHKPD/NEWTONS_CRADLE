class Roof
{
	constructor(x,y,w,h)
    {
        var options={
            isStatic:true,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    
     this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
     World.add(world,this.body);

        
    }
display()
{
    var roofPos = this.body.position;

    push();
     translate(roofPos.x, roofPos.y);
     fill("grey");
     rectMode(CENTER);
     rect(0,0,this.w,this.h);
    pop();
}
}