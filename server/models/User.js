const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email"
        ]
    },
    password:{
        type: String,
        minlength: 6,
        required: [true, "Please provide a password"],
        select: false
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
})

UserSchema.methods.generateJwtFromUser = function(){
    const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;
    const payload = {
        id: this._id,
        name: this.name
    }
    const token = jwt.sign(payload, JWT_SECRET_KEY, {
        expiresIn: JWT_EXPIRE
    })

    return token;
}

UserSchema.pre("save",function (next) {
    if (!this.isModified("password")){
        next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if(err) next(err);
        bcrypt.hash(this.password, salt, (err,hash) => {
            if(err) next(err);
            this.password = hash;
            next();
        })
    })
})

module.exports = mongoose.model('User', UserSchema);