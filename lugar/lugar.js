// const axios = require('axios');
const getLugar = (dir) => {
    const encodeURL = encodeURI(dir);
    return {
        encodeURL
    }
}
module.exports = {
    getLugar
}

// const instance = axios.create({
//     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
//     headers: {
//         'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
//         'X-RapidAPI-Key': '40ea0844cfmsh254b6b532ccb2bfp1fc411jsnb04da160f4a6'
//     }
// });

// const resp = await instance.get()

// if (resp.data.Results.length === 0) {
//     throw new Error(`No hay resultados para ${dir}`)
// }

// const data = resp.data.Results[0];
// const direccion = data.name;
// const lat = data.lat;
// const lng = data.lon;