class Planet {
    constructor({ // Change ESLint configurations;
        x,
        y,
        radius,
        vel,
        color
    }) {
        this.side = random([-1, 1])
        this.trail = []

        this.pos = createVector(this.side * x || 0, y || 0)
        this.vel = vel ? vel.mult(this.side) : createVector()
        this.color = color || {
            r: random(50, 200),
            g: random(50, 200),
            b: random(50, 200)
        }

        this.radius = radius
        this.mass = radius ** 3
    }

    move() {
        const deltaV = this.vel.copy()
        deltaV.mult(dt)
        this.pos.add(deltaV)

        this.trail.push(this.pos)
        if (this.trail.length > 20) {
            this.trail.splice(0, 1)
        }
    }

    show() {
        fill(this.color.r, this.color.g, this.color.b)
        ellipse(this.pos.x, this.pos.y, this.radius)

        noFill()
        beginShape()
        for (let i = 0; i < this.trail.length; i++) {
            let position = this.trail[i]
            vertex(position.x, position.y)
        }
        endShape()
    }

    pull(planet) {
        const dist = p5.Vector.sub(this.pos, planet.pos)
        const force = dist.normalize()
        force.setMag(dt * G * this.mass / (dist.mag() ** 2))
        planet.vel.add(force)
    }
}