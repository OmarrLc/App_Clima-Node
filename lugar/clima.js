const axios = require('axios');

const getClima = async(dir) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${dir}&appid=447ad95328a7563407fcad769d326302&units=metric`)
    temperatura = resp.data.main.temp;
    return temperatura;
}

module.exports = {
    getClima
}