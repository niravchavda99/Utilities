// Canvas Element
let canvas = document.getElementById("myCanvas");
// Context 2D
let context = canvas.getContext("2d");
// Color of Pen
let color;
// Canvas Bounding Client Rect
let rect = canvas.getBoundingClientRect();
// Status of draw
let draw = false;
canvas.addEventListener("mousedown", mousedown, false);
canvas.addEventListener("mousemove", mousemove, false);
canvas.addEventListener("mouseup", mouseup, false);
let p;
function mousedown(e) {
    draw = true;
    context.beginPath();
    context.moveTo(e.clientX - rect.x, e.clientY - rect.y);
}
function mousemove(e) {
    if (draw) {
        color = document.getElementById("myColor");
        context.lineTo(e.clientX - rect.x, e.clientY - rect.y);
        context.lineWidth = 2;
        context.strokeStyle = color.value;
        context.stroke();
    }
}
function mouseup(e) {
    draw = false;
}
//# sourceMappingURL=app.js.map