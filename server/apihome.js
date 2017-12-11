const axios =require('axios');

let apikey = '';
let appID = '';

let coinApi = [];

const getData = (req, res) => {
    axios.get("https://api.coinmarketcap.com/v1/ticker/").then(response => {
        coinApi = response.data.ticker;
        res.json(coinApi);
    })
}


module.exports = {
    getData
}