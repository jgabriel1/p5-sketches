let planet
let sun

function setup() {
	createCanvas(windowWidth, windowHeight)
	noStroke()
	planet = new Planet(windowWidth / 2, windowHeight / 2, radius = 10, 0, -1, 0, 0.01)
	sun = new Planet(windowWidth / 2, windowHeight / 2, radius = 100, 0, 0, 0, 0)
}

function draw() {
	background(102)
	sun.show(51)
	planet.move()
	planet.show(255)
}