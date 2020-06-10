const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;

const respLugar = lugar.getLugar(argv.direccion)
    // console.log(respLugar);

clima.getClima(respLugar.encodeURL)
    .then((temp) => console.log(`La temperatura en ${argv.direccion} es de ${temp} °c`))
    .catch(console.log)