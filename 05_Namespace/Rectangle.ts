/// <reference path = "IShape.ts" />

namespace Drawing {
    export class Rectangle implements IShape {
        draw(): string {
            return "Draw rectangle";
        }
    }
}