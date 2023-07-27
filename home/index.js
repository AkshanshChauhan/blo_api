const express = require("express");
const blo = require("../api/routs/blo");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const password = encodeURIComponent("ak47ch74##");

mongoose.connect("mongodb+srv://akshanshchauhan:" + password + "@cluster0.hcj7kdp.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: "*"
}));

app.use("/blo", blo);

app.use(morgan('dev'));

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (res.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods: POST, PATCH, DELETE, PUT, GET');
        return res.status(200).json({});
        next();
    }
})

module.exports = app;