const fs = require('fs')

const base = 3
console.clear()

let salida = ''
for (let n = 1; n < 11; n++) {
    salida += `${base} x ${n} = ${base * n}\n`
}

console.log(salida)

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err
    console.log('Archivo creado')
})