namespace Geometry {
  // Class Point for X and Y Coordinates
  export class Point {
    private _x: number; // X-Coordinate
    private _y: number; // Y-Coordinate
    // Constructor to set X and Y value
    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }
    // Gives the value of X
    get x() {
      return this._x;
    }
    // Gives the value of Y
    get y() {
      return this._y;
    }
  }
  // Class to represent Hexagon
  export class Polygon {
    private _centerPoint: Point; // Center point of hexagon
    private sideLength: number; // Length of each side of Hexagon
    private numberOfSides: number;
    private context: CanvasRenderingContext2D; // Context 2D
    private canvas: HTMLCanvasElement; // Canvas Element
    private path: Path2D; // Path of the hexagon
    private points: Point[]; // Points for polygon
    private _color: string;
    // Constructor to initialize values
    constructor(
      centerPoint: Point,
      numberOfSides: number,
      sideLength: number,
      canvas: HTMLCanvasElement,
      color: string = "black"
    ) {
      this._centerPoint = centerPoint;
      this.numberOfSides = numberOfSides;
      this.sideLength = sideLength;
      this.canvas = canvas;
      this.context = this.canvas.getContext("2d");
      this.points = [];
      this._color = color;
    }

    private getPoints() {
      this.points.push(
        new Point(
          this._centerPoint.x + this.sideLength * Math.cos(0),
          this._centerPoint.y + this.sideLength * Math.sin(0)
        )
      );
      for (let i = 1; i < this.numberOfSides; i++) {
        this.points.push(
          new Point(
            this._centerPoint.x +
              this.sideLength *
                Math.cos((i * 2 * Math.PI) / this.numberOfSides),
            this._centerPoint.y +
              this.sideLength * Math.sin((i * 2 * Math.PI) / this.numberOfSides)
          )
        );
      }
    }

    draw() {
      this.getPoints();

      let drawPath = new Path2D();

      drawPath.moveTo(this.points[0].x, this.points[0].y);

      for (let i = 0; i < this.points.length; i++) {
        drawPath.lineTo(this.points[i].x, this.points[i].y);
      }
      drawPath.closePath();
      this.path = drawPath;
      this.context.fillStyle = this._color;
      this.context.lineWidth = 2;
      this.context.fill(drawPath);
    }
  }
}
