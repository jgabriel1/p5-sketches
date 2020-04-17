mandelbrot = (real, imag, iter) => {
    let x = new Complex(0, 0)
    const c = new Complex(real, imag)

    for (let i = 0; i < iter; i++) {
        let z = new Complex(0, 0)
        z = x.times(x).plus(c)

        if (z.abs() > 2) {
            return i
        } else {
            x = z
        }
    }
    return 0
}

mandelbrotMatrix = (size, x0, x1, y0, y1) => {
    const deltaX = (x1 - x0) / size
    const deltaY = (y1 - y0) / size
    let x, y
    let mat = new Array(size)

    for (let i = 0; i < size; i++) {
        y = y0 + deltaY * i
        mat[i] = new Array(size)
        for (let j = 0; j < size; j++) {
            x = x0 + deltaX * j
            mat[i][j] = mandelbrot(y, x, 100)
        }
    }
    return mat
}