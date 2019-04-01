const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar') // Destructuración de objetos
const argv = require('./config/yargs').argv;

//console.log(process); //<-objeto de node js donde obtiene valores de configuración.
//console.log(process.argv);<- obtiene los parametros de entrada
/*
let base = argv[2];
console.log(argv);
console.log(process.argv);
*/

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado : ${ archivo }`))
    .catch(e => console.log(e));*/