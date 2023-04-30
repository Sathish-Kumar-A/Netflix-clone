const { ErrorHandler, MasterErrorHandler } = require("../ErrorHandler")
const User = require("../Models/User")

exports.CreateUser = async (req,res,next) => {
    try {
        const data = new User(req.body);
        // console.log({ data });
        // // console.log(await data.validateSync());
        // const validation = await data.validate();
        // console.log({validation});
        const result = await data.save();
        // console.log({result});
        res.status(201).send({
            status: true,
            message: "User created successfully"
        });
    } catch (error) {
        MasterErrorHandler({
            error,next
        }) 
    }
}