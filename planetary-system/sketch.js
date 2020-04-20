let sun
let nPlanets
const planets = new Array()

// Arbitraty constants for better looks:
const dt = 0.05
const G = 0.0002

function setup() {
	noStroke()
	frameRate(60)
	createCanvas(600, 600)

	sun = new Planet(0, 0, 100, 0, 0, {
		r: 250,
		g: 180,
		b: 0
	})

	nPlanets = random(1, 5)
	for (let i = 0; i < nPlanets; i++) {
		let side = random([-1, 1])
		planets[i] = new Planet(
			x = random(100, 200),
			y = 0,
			radius = random(5, 30),
			velX = 0,
			velY = 200
		)
	}
}

function draw() {
	translate(width / 2, height / 2)
	background(10)

	sun.show(250, 180, 0)
	for (let planet of planets) {
		sun.pull(planet)
		planet.show()
		planet.move()
	}
}