const router = require("express").Router();
const { CreateUser } = require("../Controllers/Users");
const User = require("../Models/User");
const { setSchema, schemaValidation } = require("../Schema/schemaValidation");


router.route("/").post(CreateUser)

module.exports = router;