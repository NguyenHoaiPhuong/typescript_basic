import { IShape } from './shape'
import { Circle } from './circle'
import { Rectangle } from './rectangle'

function drawAllShapes() {
    let shapes = new Array<IShape>(2);
    shapes[0] = new Circle();
    shapes[1] = new Rectangle();
    // shapes.forEach(function(shape: IShape, index: number, array: IShape[]) {
    //     console.log(shape.draw());
    // })
    for (let shape of shapes) {
        console.log(shape.draw())
    }
}
drawAllShapes()
