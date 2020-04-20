class Planet {
    constructor(x, y, radius, velX, velY, aclX, aclY) {
        this.pos = createVector(x, y)
        this.radius = radius
        this.velocity = createVector(0, -25)
    }

    move() {
        const deltaV = this.velocity.copy()
        deltaV.mult(dt)
        this.pos.add(deltaV)

        if (this.pos.x >= width || this.pos.y >= height) {
            this.pos.x = 0
            this.pos.y = 0
            this.velocity = createVector(0, 0)
        }

    }

    show(color) {
        fill(color)
        ellipse(this.pos.x, this.pos.y, this.radius)
    }

    pull(planet) {
        const force = p5.Vector.sub(this.pos, planet.pos)
        force.setMag(2) // arbitrary value
        planet.velocity.add(force)
    }
}