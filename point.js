class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.z = 0;
    }

    distanceFrom(point){
        
        const xDif = point.x - this.x;
        const xDif2 = xDif * xDif;
        const yDif = point.y - this.y;
        const yDif2 = yDif * yDif;
        const sumDif2 = xDif2 + yDif2;
        const sqrtSumDif2 = Math.sqrt(sumDif2);

        return sqrtSumDif2;

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