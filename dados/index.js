const generate = () => {
    let num = Math.ceil(Math.random()*6)
    return num
}

const numero = generate()
document.write(`Dado 1: ${numero} <br/>`)

const numero2 = generate()
document.write(`Dado 2: ${numero2} `)

