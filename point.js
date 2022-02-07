class Point { // Punto cartesiano

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceFrom(point){
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
    }


    distanceFromOrigin(){
        const origin = new Point(0,0);
        const distance = this.distanceFrom(origin);
        return distance;
    }

    medianPointFromPoint(point){
        const xM = (this.x + point.x)/2
        const yM = (this.y + point.y)/2
        const median = new Point(xM, yM);
        return median;
    }


    nearestPoint(...points){
        let nearest = points[0];
        for (let i = 1; i  < points.length; i++) {
            const point = points[i];
            if (this.distanceFrom(point) < this.distanceFrom(nearest)) {
                nearest = point;
            }
        }
        return nearest;
    }

}