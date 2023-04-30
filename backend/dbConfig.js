const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB Connected Successfully");
}).catch(err => {
    console.log("DB connection failed", err);
});

module.exports = "Load DB";