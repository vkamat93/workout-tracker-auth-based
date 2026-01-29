const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

// creating static Signup method to be called in controller
userSchema.statics.signup = async function (email, password) {

    // validation logic
    if (!email || !password) {
        throw Error('All fields must be filled');
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid email');
    }
    if (!validator.isAlphanumeric(password)) {
        throw Error('Password should be alphanumeric');
    }

    // cannot use User.findOne since we are exporting it after this LOC and exporting it elsewhere, so this is used
    const userExists = await this.findOne({ email })
    if (userExists) {
        throw Error('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10); // salt value of 10

    const user = await this.create({ email, password: hashedPassword })
    return user;
}

// creating static Login method to be called in controller
userSchema.statics.login = async function (email, password) {

    // validation logic
    if (!email || !password) {
        throw Error('All fields must be filled');
    }

    // cannot use User.findOne since we are exporting it after this LOC and exporting it elsewhere, so this is used
    const legitUser = await this.findOne({ email })
    if (!legitUser) {
        throw Error('Incorrect credentials'); // generic message to avoid giving hints
    }

    const match = await bcrypt.compare(password, legitUser.password);
    if (!match) {
        throw Error('Incorrect credentials'); // generic message to avoid giving hints
    }

    return legitUser;
}

module.exports = mongoose.model('User', userSchema);