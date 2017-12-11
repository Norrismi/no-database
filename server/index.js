// might have problem connecting, move to src folder


const express = require("express")
const {json} = require("body-parser")
const cors = require("cors")
const apihome = require("./apihome")
const controler = require("./controllers/control")

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

app.get('/ticker', controler.getApiData );

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})