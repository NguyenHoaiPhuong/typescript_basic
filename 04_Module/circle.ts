import { IShape } from './shape'

export class Circle implements IShape {
    draw(): string {
        return "Draw circle";
    }
}