class RectangleDoublePoint {
    constructor(tL,bR){
        this.tL = tL;
        this.bR = bR;
        this.tR = new Point (this.bR.x,this.tL.y);
        this.bL = new Point (this.tL.x, this.bR.y);
    }

    // get remainingPoint(){
    //     this.tR = new Point (this.bR.x,this.tL.y);
    //     this.bL = new Point (this.tL.x, this.bR.y);
    // }

    get perimeter(){
        return this.tL.distanceFrom(this.tR)
             + this.tR.distanceFrom(this.bR)
             + this.bR.distanceFrom(this.bL)
             + this.bL.distanceFrom(this.tL); 
    }

    get area(){
        return this.bR.distanceFrom(this.bL)
             * this.bR.distanceFrom(this.tR); 
    }
}