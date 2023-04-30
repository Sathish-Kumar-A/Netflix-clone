class ErrorHandler extends Error{
    constructor(status, message) {
        super();
        this.status = status;
        this.message=message
    }
}

const handleErrors = (err, res) => {
  const { status, message } = err;
  res.status(status).send({
    status: false,
    message,
  });
};

const MasterErrorHandler = ({status,message,error,next}) => {
    try {
        throw new ErrorHandler(status||500, message || error.message || error);
    } catch (error) {
        console.log(error);
        next(error);
    }
}



module.exports = { handleErrors,ErrorHandler,MasterErrorHandler };