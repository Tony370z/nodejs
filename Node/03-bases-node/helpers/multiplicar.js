const fs = require("fs");
const crearArchivo = async (base = 5) => {
  let salida = "";
  for (let n = 1; n < 11; n++) {
    salida += `${base} x ${n} = ${base * n}\n`;
  }

  console.log(salida);

  fs.writeFileSync(`tabla-${base}.txt`, salida);

  return `tabla-${base}.txt`;
};

module.exports = {
  crearArchivo,
};
