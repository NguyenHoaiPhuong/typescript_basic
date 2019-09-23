import { IShape } from './shape'

export class Rectangle implements IShape {
    draw(): string {
        return "Draw rectangle";
    }    
}