const bcrypt = require('bcryptjs')

const validateUserInput = (email,password) => {
    return email && password;
}

const comparePassword = (password, hashedPassword) => {
    bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
    validateUserInput,
    comparePassword
}