mandelbrot = (real, imag, iter) => {
    let x = new Complex(0, 0)
    const c = new Complex(real, imag)

    for (let i = 0; i < iter; i++) {
        let z = new Complex(0, 0)
        z = x.times(x).plus(c)

        if (z.abs() > 2) return i
        else x = z
    }
    return iter
}

/* 
This function doesn't really make it any faster.
The map function seems like it does what I was doing before
but under the hood.
*/
mandelbrotSet = (x0, x1, y0, y1, iter) => {
    loadPixels()
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let real = map(x, 0, width, x0, x1)
            let imag = map(y, 0, height, y0, y1)

            let pixel = (x + y * width) * 4
            pixels[pixel] = 255 - mandelbrot(real, imag, iter) * 255 / iter
            pixels[pixel + 1] = 255 - mandelbrot(real, imag, iter) * 255 / iter
            pixels[pixel + 2] = 255 - mandelbrot(real, imag, iter) * 255 / iter
        }
    }
    updatePixels()
}