class Planet {
    constructor(x, y, radius, velX, velY, color) {
        this.side = random([-1, 1])
        this.pos = createVector(this.side * x, y) || createVector()
        this.radius = radius
        this.mass = radius ** 3
        this.velocity = createVector(velX, this.side * velY) || createVector()
        this.color = color || {
            r: random(50, 200),
            g: random(50, 200),
            b: random(50, 200)
        }
    }

    move() {
        const deltaV = this.velocity.copy()
        deltaV.mult(dt)
        this.pos.add(deltaV)
    }

    show() {
        fill(this.color.r, this.color.g, this.color.b)
        ellipse(this.pos.x, this.pos.y, this.radius)
    }

    pull(planet) {
        const dist = p5.Vector.sub(this.pos, planet.pos)
        const force = dist.normalize()
        force.setMag(dt * G * this.mass / (dist.mag() ** 2))
        planet.velocity.add(force)
    }
}