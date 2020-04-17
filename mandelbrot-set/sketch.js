let matrix
const canvasSize = 400

function setup() {
	createCanvas(canvasSize, canvasSize)

	matrix = mandelbrotMatrix(canvasSize, -1, 1, -1, 1)

	noLoop()
	pixelDensity(1)
}

function draw() {
	background(150)

	loadPixels()
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let index = (x + y * width) * 4
			let value = matrix[x][y]
			pixels[index] = value
			pixels[index + 1] = value
			pixels[index + 2] = value
		}
	}
	updatePixels()
}