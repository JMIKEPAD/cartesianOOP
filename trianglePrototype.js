function Triang(p1,p2,p3) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
}

Triang.prototype.perimeter = function(){
    return this.p1.distanceFrom(this.p2)
         + this.p2.distanceFrom(this.p3)
         + this.p3.distanceFrom(this.p1);
}

Triang.prototype.area = function(){
    const pd2 = this.perimeter() / 2;
    const pd2MinusFirstSide = pd2 - this.p1.distanceFrom(this.p2);
    const pd2MinusSecondSide = pd2 - this.p2.distanceFrom(this.p3);
    const pd2MinusThirdSide = pd2 - this.p3.distanceFrom(this.p1);
    return Math.sqrt(pd2 * pd2MinusFirstSide * pd2MinusSecondSide * pd2MinusThirdSide);
}

function RightTriang(p1,p2,p3) {
    Triang.call(this, p1, p2, p3);
    Object.setPrototypeOf(RightTriang.prototype, Triang.prototype);
}

RightTriang.prototype.calculateHp = function(){
    const c1 = this.p1.distanceFrom(this.p2);
    const c2 = this.p2.distanceFrom(this.p3);

    const hp = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2,2));
    
    return hp

}




function ScalTriang(params) {
    Triang.call(this, p1, p2, p3);
    Object.setPrototypeOf(ScalTriang.prototype, Triang.prototype);
}