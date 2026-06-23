const canvas = document.getElementById("game") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
if (!ctx) throw new Error("Canvas 2D context not available");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "black";
ctx.font = "24px monospace";
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width / 2, canvas.height / 2);
