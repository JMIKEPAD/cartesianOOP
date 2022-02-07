
const pointA = new Point(3, 5);

const pointB = new Point(6, 1);

const pointC = new Point(7, 1);

const pointD = new Point(3, 6);

const pointE = new Point(1, 1);

const pointF = new Point(-2, 1);


const distance = MathC.calculateDistance(pointA, pointB);

const medianPoint = MathC.medianPoint(pointA, pointB);

const distanceFromOrigin = MathC.distanceFromOrigin(pointA);

const nearest = MathC.nearestPoint(pointA, pointB, pointC, pointD, pointE, pointF);


console.log(distance);

console.log(medianPoint);


const distanceFromB = pointA.distanceFrom(pointB);

console.log(distanceFromB);

const distanceFromOriginOfA = pointA.distanceFromOrigin();

console.log(distanceFromOriginOfA);

const medianFromB = pointA.medianPointFromPoint(pointB);

console.log(medianFromB);

const nearestToA = pointA.nearestPoint(pointB, pointC, pointD, pointE);

console.log(nearestToA);


const seg1 = new Segment(pointA, pointB);

console.log(seg1.length);

console.log(seg1.median);

const topLeft = new Point(1, 6);
const topRight = new Point(8, 6);
const bottomRight = new Point(8, 1);
const bottomLeft = new Point(1, 1);

const rect1 = new Rectangle(topLeft, topRight, bottomRight, bottomLeft);

console.log(rect1.perimeter);

console.log(rect1.area);


const point1 = new Point(1, 1);
const point2 = new Point(1, 5);
const point3= new Point(4, 1);

const tri1 = new Triangle(point1, point2, point3);

console.log(tri1.perimeter);

console.log(tri1.area);

// let bev2 = new Bevanda(name: "chinotto", insertionDate: new Date())