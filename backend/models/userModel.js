const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

// creating static method to be called in controller
userSchema.statics.signup = async function (email, password) {
    // cannot user User.findOne since we are exporting it after this LOC and exporting it elsewhere, so this is used
    const userExists = await this.findOne({ email }) 
    if (userExists) {
        throw Error('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10); // salt value of 10

    const user = await this.create({email, password: hashedPassword})
    return user;
}

module.exports = mongoose.model('User', userSchema);