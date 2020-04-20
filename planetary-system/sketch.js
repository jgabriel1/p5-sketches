let planet
let planet2
let sun
const dt = 0.8

function setup() {
	createCanvas(600, 600)
	noStroke()
	frameRate(15)
	planet = new Planet(random(100, 200), 0, 10, 0, 100, 0, 0)
	planet2 = new Planet(random(100, 200), 0, 10, 0, 100, 0, 0)
	sun = new Planet(0, 0, 100, 0, 0, 0, 0)
}

function draw() {
	translate(width / 2, height / 2)
	background(102)

	sun.show(51)
	sun.pull(planet)
	sun.pull(planet2)
	planet.show(255)
	planet.move()

	planet2.show(150)
	planet2.move()
}