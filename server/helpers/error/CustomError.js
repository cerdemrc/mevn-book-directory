class CustomError extends Error{
    constructor(message, status){
        super(message)
        this.status = status;
    }
} 

module.exports = CustomError;


//error class has message property so defined in super. status property belongs only to CustomError

