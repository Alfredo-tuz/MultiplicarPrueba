const file = require('fs');


let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base * i }`)
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i }\n`
        }

        file.writeFile(`tabla-${ base }.txt`, data, (error) => {
            if (error) reject(error);
            else
                resolve(`tabla-${ base }.txt`);
        });
    });

}


module.exports = {
    crearArchivo,
    listarTabla
}