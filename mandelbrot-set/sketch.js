let matrix
const canvasSize = 400

function setup() {
	createCanvas(canvasSize, canvasSize)
	noLoop()
	pixelDensity(1)

	background(255)
	mandelbrotSet(-1.5, 0.5, -1, 1, 50)
}