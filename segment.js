class Segment{

    constructor(point1, point2){
        this.point1 = point1;
        this.point2 = point2;
    }

    get length(){
        return this.point1.distanceFrom(this.point2);
    }

    get median(){
        return this.point1.medianPointFromPoint(this.point2);
    }

}