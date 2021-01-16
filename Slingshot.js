class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.slingimg1=loadImage("sprites/sling1.png");
        this.slingimg2=loadImage("sprites/sling2.png");
        this.slingimg3=loadImage("sprites/sling3.png");



        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x<200){
                strokeWeight(10);
                stroke(67,30,5);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y,pointB.x+30,pointB.y);
                image(this.slingimg3, pointA.x-30, pointA.y-10,15,30);
            }else{
                strokeWeight(6);
                stroke(67,30,5);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y,pointB.x+30,pointB.y);
                image(this.slingimg3, pointA.x+20, pointA.y-10,15,30);
            }
            pop();
        }
        image(this.slingimg1, 200, 20);
        image(this.slingimg2, 170, 20);
    }
    
}