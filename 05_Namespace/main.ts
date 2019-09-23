/// <reference path = "IShape.ts" />
/// <reference path = "Circle.ts" />
/// <reference path = "Rectangle.ts" />

function drawAllShapes() {
    let shapes = Array<Drawing.IShape>(2);
    shapes[0] = new Drawing.Circle();
    shapes[1] = new Drawing.Rectangle();

    for (let shape of shapes) {
        console.log(shape.draw())
    }
}
drawAllShapes()