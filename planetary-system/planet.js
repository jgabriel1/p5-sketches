class Planet extends p5.Vector {
    constructor(x, y, radius, velX, velY, aclX, aclY) {
        super(x, y)
        this.radius = radius
        this.velocity = createVector(velX, velY) // this is the direction of the velocity
        this.acceleration = createVector(aclX, aclY) // this is the direction of the acceleration
    }

    move() {
        this.add(this.velocity)
        this.velocity.add(this.acceleration)

        if (this.x >= windowWidth || this.y >= windowHeight) {
            this.x = windowWidth / 2
            this.y = windowHeight / 2
            this.velocity = createVector(0, 0)
        }
    }

    show(color) {
        fill(color)
        ellipse(this.x, this.y, this.radius, this.radius)
    }
}