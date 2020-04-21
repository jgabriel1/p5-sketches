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

	sun = new Planet({
		radius: 100,
		color: {
			r: 250,
			g: 180,
			b: 0
		}
	})

	nPlanets = random(1, 2)
	for (let i = 0; i < nPlanets; i++) {
		planets[i] = new Planet({
			x: random(100, 200),
			y: 0,
			vel: createVector(0, 200),
			radius: random(5, 30)
		})
	}
}

function draw() {
	background(10)
	translate(width / 2, height / 2)

	sun.show(250, 180, 0)
	for (let planet of planets) {
		sun.pull(planet)
		planet.show()
		planet.move()
	}
}