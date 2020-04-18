class Complex {
    constructor(real, imag) {
        this.real = real
        this.imag = imag
    }

    abs = () => Math.sqrt(this.real * this.real - this.imag * this.imag)

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