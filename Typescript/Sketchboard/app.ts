// Canvas Element
let canvas: HTMLCanvasElement = <HTMLCanvasElement>(
  document.getElementById("myCanvas")
);
// Context 2D
let context: CanvasRenderingContext2D = <CanvasRenderingContext2D>(
  canvas.getContext("2d")
);
// Color of Pen
let color: HTMLInputElement;
// Canvas Bounding Client Rect
let rect = canvas.getBoundingClientRect();
// Status of draw
let draw: boolean = false;

canvas.addEventListener("mousedown", mousedown, false);
canvas.addEventListener("mousemove", mousemove, false);
canvas.addEventListener("mouseup", mouseup, false);

let p: Geometry.Point;

function mousedown(e: MouseEvent) {
  draw = true;
  context.beginPath();
  context.moveTo(e.clientX - rect.x, e.clientY - rect.y);
}

function mousemove(e: MouseEvent) {
  if (draw) {
    color = <HTMLInputElement>document.getElementById("myColor");
    context.lineTo(e.clientX - rect.x, e.clientY - rect.y);
    context.lineWidth = 2;
    context.strokeStyle = color.value;
    context.stroke();
  }
}

function mouseup(e: MouseEvent) {
  draw = false;
}
