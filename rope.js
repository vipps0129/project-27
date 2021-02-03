class Rope{
constructor(body1,body2,offsetX,offsetY){
 this.offsetX=offsetX
 this.offsetY=offsetY
 var options={
     bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY}
 }
 this.rope=W
 orld.constraint.create(options)
 World.add(world,this.rope)
}
display(){
var point1=this.rope.bodyA.position
var point2=this.rope.bodyB.position

strokeWeight(2)

var a1x=point1.x
var a1y=point1.y

var a2x=point2.x+this.offsetX
var a2y=point2.y+this.offsetY

line(a1x,a1y,a2x,a2y) 
}
}