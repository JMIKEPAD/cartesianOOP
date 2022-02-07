// Le classi che contengono funzioni e non proprietà (come la classe Math, per esempio), quindi non vanno istanziate, si chiamano: Statiche

// const result = Math.sqrt(64);
// console.log(result);

/*****************************************************************************/

// const pointA = new Point(3, 5);
// const pointB = new Point(6, 1);

// /*--*/

// const pointC = new Point(7, 1);
// const pointD = new Point(3, 6);
// const pointE = new Point(1, 1);
// const pointF = new Point(-2, 1);


// // Metodi applicati dalla classe astratta MathC

// const distance = MathC.calculateDistance(pointA, pointB);
// const medianPoint = MathC.medianPoint(pointA, pointB);
// const distanceOrigin = MathC.distanceFromOrigin(pointA);
// const nearest = MathC.nearestPoint(pointA, pointB, pointC, pointD, pointE, pointF);

// console.log("METODI DELLA CLASSE MathC.\n\n");
// console.log("- Distanza tra A e B: ", distance);
// console.log("- Punto medio tra A e B: ", medianPoint);
// console.log("- Distanza tra A e origine: ", distanceOrigin);
// console.log("- Più vicino ad A tra B -> F: ", nearest);

// /****/

// // Metodi applicati dalla classe Point

// const distanceP = pointA.distanceFrom(pointB);
// const medianPointP = pointA.medianPointFromPoint(pointB);
// const distanceOriginP = pointA.distanceFromOrigin();
// const nearestP = pointA.nearestPoint(pointB, pointC, pointD, pointE, pointF);

// console.log("\nMETODI DELLA CLASSE Point.\n\n");
// console.log("- Distanza tra A e B: ", distanceP);
// console.log("- Punto medio tra A e B: ", medianPointP);
// console.log("- Distanza tra A e origine: ", distanceOriginP);
// console.log("- Più vicino ad A tra B -> F: ", nearestP);

/*****************************************************************************/

const segment1 = new Segment(3, 5, 6, 1);

console.log(segment1.length);

console.log(segment1.mediumPoint);

/*****************************************************************************/

const verticeInfSx = new Point(3, 2);
const verticeSupSx = new Point(3, 6);
const verticeSupDx = new Point(8, 2);
const verticeInfDx = new Point(8, 6);

const rectangle1 = new Rectangle(verticeInfSx, verticeSupSx, verticeSupDx, verticeInfDx);

console.log(rectangle1.perimetro);

console.log(rectangle1.area);

// h = 4

// b = 5

// p = 18 / a = 20