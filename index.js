const express = require("express")

const app = express();
// const router = express.Router();
const{APP_PORT,DB_URL} = require("./config")
const routes = require('./routes');
const mongoose = require("mongoose")

const bodyParser = require('body-parser')  

mongoose.connect(DB_URL)
  .then(() => console.log('Connected!'));

app.use(express.static(__dirname + "/public"));
app.use("/upload",express.static ("upload"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())
    
 app.use(routes);


app.listen(APP_PORT, () => {
    console.log(`app run on ${APP_PORT}`)   
})

