class Rectangle2 {
    constructor (startingPoint, w, h){
        this.startingPoint = startingPoint;
        this.w = w;
        this.h = h;
        this.topRight = new Point ((this.startingPoint.x + this.w), this.startingPoint.y);
        this.bottomRight = new Point ((this.topRight.y + this.h), this.topRight.x);
        this.bottomLeft = new Point (( this.bottomRight.x - w), this.bottomRight.y);
    }

    get perimeter2(){
        return (this.w + this.h) * 2
    }

    get area2(){
        return this.w * this.h;
    }


}