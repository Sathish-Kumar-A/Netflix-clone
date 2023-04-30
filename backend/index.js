const express = require("express");
const cors = require("cors");
const loadDB = require("./dbConfig");
const { handleErrors } = require("./ErrorHandler");
const authRoutes = require("./Routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use((err, req, res, next) => {
    handleErrors(err, res);
})

const port = 5000;

app.listen(port, () => {
    console.log("Server Listening at",port);
})