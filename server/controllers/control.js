const axios = require("axios");
let getApiData = (req, res) => {
    axios
        .get(`https://api.coinmarketcap.com/v1/ticker/`)
        .then(result =>{
            return res.json(result.data);
        });
};

module.exports = {
    getApiData
};