//requireds
//const fs = require('express');
//const fs = require('./fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');

/* require('yargs')
.command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
})
.command('crear', 'Genera un archivo de la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
})
.help()
.argv; */

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log('Archivo creado: ' + `${archivo}`.america.bold);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log('comando no reconocido');

}

//console.log(argv);
//let base = '5';

//console.log(process.argv);

//let argv2 = process.argv;

//console.log('Limite', argv.limite);


//let parametro = argv[2];
//let base = parametro.split('=')[1];


//console.log(base);



//console.log(multiplicar);