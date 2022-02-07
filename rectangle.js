class Rectangle {

    constructor(infSx, supSx, supDx, infDx) {
        this.infSx = infSx;
        this.supSx = supSx;
        this.supDx = supDx;
        this.infDx = infDx;
    }

    get perimetro() {
        const base = this.infDx.x - this.infSx.x;
        const altezza = this.supSx.y - this.infSx.y;
        return 2 * (base + altezza);
    }

    get area() {
        const base = this.infDx.x - this.infSx.x;
        const altezza = this.supSx.y - this.infSx.y;
        return base * altezza;
    }

}