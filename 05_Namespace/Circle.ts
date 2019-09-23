/// <reference path = "IShape.ts" />

namespace Drawing {
    export class Circle implements IShape {
        draw(): string {
            return "Draw circle";
        }
    }
}