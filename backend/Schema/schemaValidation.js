// const { MasterErrorHandler } = require("../ErrorHandler");
// const format = require("ajv-formats").default;
// const ajvValidate = new ajv();
// format(ajvValidate);

// exports.setSchema = (req, res, next) => {
//     try {
//         // const url = req.url;
//         const Schema = schemaSelection(req.url);
//         if (!Schema) {
//             return MasterErrorHandler({status:400,message:"UnAuthorised route action",next})
//         }
//         res.locals.schema = Schema(req.method);
//         next();
        
//     } catch (error) {
//         MasterErrorHandler(error);
//     }
// }

// exports.schemaValidation = () => {
//     const validate = ajvValidate.compile(res.locals.schema);
//     const valid = validate(req.body);
//     if (!valid) {
//       return MasterErrorHandler({ error: validate.errors[0], next, service });
//     } 
//       next();
// }

// const schemaSelection = (url) => {
//     let schema;
//     switch (true) {
//         case url.includes("users"):
//             schema=require("../Schema/users")
//             break;
    
//         default:
//             schema=undefined
//             break;
//     }
//     return schema;
// }