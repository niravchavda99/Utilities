var Geometry;
(function (Geometry) {
    // Class Point for X and Y Coordinates
    class Point {
        // Constructor to set X and Y value
        constructor(x, y) {
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
    Geometry.Point = Point;
    // Class to represent Hexagon
    class Polygon {
        // Constructor to initialize values
        constructor(centerPoint, numberOfSides, sideLength, context, canvas, color = "black") {
            this._centerPoint = centerPoint;
            this.numberOfSides = numberOfSides;
            this.sideLength = sideLength;
            this.context = context;
            this.canvas = canvas;
            this.points = [];
            this._color = color;
        }
        // Get the center pointvalue
        // get centerPoint() {
        //     return this._centerPoint;
        // }
        // Draw method for Hexagon
        getPoints() {
            this.points.push(new Point(this._centerPoint.x + this.sideLength * Math.cos(0), this._centerPoint.y + this.sideLength * Math.sin(0)));
            for (let i = 1; i < this.numberOfSides; i++) {
                this.points.push(new Point(this._centerPoint.x + this.sideLength * Math.cos(i * 2 * Math.PI / this.numberOfSides), this._centerPoint.y + this.sideLength * Math.sin(i * 2 * Math.PI / this.numberOfSides)));
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
    Geometry.Polygon = Polygon;
})(Geometry || (Geometry = {}));
//# sourceMappingURL=Geometry.js.map