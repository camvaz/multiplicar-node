//requireds
const colors = require('colors');
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    if (!Number(base) || !Number(limite)) {
        console.log(`Error: Argumentos base: ${base} o limite: ${limite} invalidos`);
    } else {
        let data = '';
        for (let i = 0; i <= limite; ++i) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        console.log('============'.green);
        console.log(`==Tabla del: ${base}==`.rainbow);
        console.log('============'.magenta);
        console.log(data);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base || !Number(limite))) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-limite-${limite}.txt`);
            //console.log(`El archivo tabla-${base}.txt ha sido creado.`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}