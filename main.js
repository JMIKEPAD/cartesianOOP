
const pointA = new Point(3,5);

const pointB = new Point(6,1);

const pointC = new Point(5,2);

const pointD = new Point(8,3);

const pointE = new Point(6,0);

const pointF = new Point(10,5);



const distance = MathC.calculateDistance(pointA,pointB);

const pointMedian = MathC.medianPoint(pointA,pointB);

console.log(distance);


console.log(pointMedian);


const distanceFromB = pointA.distanceFrom(pointB);

const distanceFromOrigin = pointA.distanceFromOrigin();

const medianPoint = pointA.medianPointFrompoint(pointB);

const nearestPoint = pointA.nearestPoint(pointB,pointC,pointD,pointE);
