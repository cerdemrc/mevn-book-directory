const User = require('../models/User')
const asyncErrorWrapper = require('express-async-handler')
const { sendJwtToClient } = require('../helpers/authorization/tokenHelpers')
const { validateUserInput, comparePassword } = require('../helpers/input/inputHelpers')
const CustomError = require('../helpers/error/CustomError')

const login = asyncErrorWrapper(async (req,res,next) => {
    const { email, password } = req.body;
    
    if(!validateUserInput(email,password)){
        return next(new CustomError("Please check inputs", 400));
    }

    const user = await User.findOne({ email }).select("+password"); 
    
    if(!comparePassword(password, user.password)){
        return next(new CustomError("Please check your credentials", 400));
    }

    sendJwtToClient(user, res);
})

const register = asyncErrorWrapper(async (req,res) => {
    const { name, email, password, role } = req.body;

    const user = await User.create({
       name,
       email,
       password,
       role
    });

    sendJwtToClient(user, res);
})

const getUser = (req,res) => {
    res.json({
        success: true,
         data: {
             id: req.user.id,
             name: req.user.name,
         }
    })
}

const logout = asyncErrorWrapper(async (req,res) => {
    return res
    .status(200)
    .cookie({
        httpOnly: true,
        expires: new Date(Date.now()), //delete access token
        secure: process.env.NODE_ENV === "development" ? false : true
    })
    .json({
        success: true,
        message: "Logout Successful"
    })
})

module.exports = {
    login,
    logout,
    register,
    getUser
}