class Triangle{

    constructor (point1, point2, point3){
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }

    get perimeter(){
        return this.point1.distanceFrom(this.point2)
             + this.point2.distanceFrom(this.point3)
             + this.point3.distanceFrom(this.point1);
    }

    get area(){
        const pd2 = this.perimeter / 2;
        const pd2MinusFirstSide = pd2 - this.point1.distanceFrom(this.point2);
        const pd2MinusSecondSide = pd2 - this.point2.distanceFrom(this.point3);
        const pd2MinusThirdSide = pd2 - this.point3.distanceFrom(this.point1);
        return Math.sqrt(pd2 * pd2MinusFirstSide * pd2MinusSecondSide * pd2MinusThirdSide);
    }
}

class RightTriangle extends Triangle{

    constructor(p1, p2, p3){
        super(p1, p2, p3);
    }

    calculateHp(){
        const c1 = p1.distanceFrom(p2);
        const c2 = p2.distanceFrom(p3);

        const hp = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2,2));
        
        return hp

    }
}