class Segment {

    constructor(xStart, yStart, xEnd, yEnd) {
        this.xStart = xStart;
        this.xEnd = xEnd;
        this.yStart = yStart;
        this.yEnd = yEnd;
    }

    get length() {
        const pointStart = new Point(this.xStart, this.yStart);
        const pointEnd = new Point(this.xEnd, this.yEnd);
        return MathC.calculateDistance(pointStart, pointEnd);
    }

    get mediumPoint() {
        const pointStart = new Point(this.xStart, this.yStart);
        const pointEnd = new Point(this.xEnd, this.yEnd);
        return MathC.medianPoint(pointStart, pointEnd);
    }

}