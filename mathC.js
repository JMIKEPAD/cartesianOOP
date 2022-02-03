class MathC {
    static calculateDistance(a, b) {
        const xDif = b.x - a.x;

        const xDif2 = xDif * xDif;

        const yDif = b.y - a.y;

        const yDif2 = yDif * yDif;

        const sumDif2 = xDif2 + yDif2;

        const sqrtSumaDIf2 = Math.sqrt(sumDif2);

        return sqrtSumaDIf2;


        // return Math.sqrt(Math.pow((b.x-a.x),2) + Math.pow((b.y-a.y),2));
    }


    static medianPoint(a, b) {

        const xM = (a.x + b.x) / 2;
        const yM = (a.y + b.y) / 2;

        const pointMedian = new Point(xM, yM);
        return pointMedian;
    }


    static distanceFromOrigin(p) {

        const origin = new Point(0, 0);
        const distance = this.calculateDistance(origin, p);
        return distance;

    }

    static nearestPoint(startingPoint, ...points) {
        let nearest = points[0];

        for (let i = 1; i < points.length; i++) {
            const point = points[i];
            if (this.calculateDistance(startingPoint, point) < this.calculateDistance(startingPoint, nearest)) {
                nearest = point;
            }

        }
        return nearest;
    }



}