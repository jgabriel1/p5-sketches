class Complex {
    constructor(real, imag) {
        this.real = real
        this.imag = imag
    }

    abs = () => Math.sqrt(Math.pow(this.real, 2) - Math.pow(this.imag, 2))

    plus(other) {
        const resultReal = this.real + other.real 
        const resultImag = this.imag + other.imag 

        return new Complex(resultReal, resultImag)
    }

    times(other) {
        const resultReal = this.real * other.real - this.imag * other.imag
        const resultImag = this.imag * other.real + this.real * other.imag

        return new Complex(resultReal, resultImag)
    }
}