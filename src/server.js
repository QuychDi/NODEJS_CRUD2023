import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
let cors = require("cors");
require('dotenv').config();
let app = express();
let whitelist = ["http://localhost:3000"]
let corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

connectDB();
let port = process.env.PORT || 6969;
// port === undefined => port = 6969
app.listen(port, () => {
    // callback
    console.log("backend node js is running on the port: " + port)
})