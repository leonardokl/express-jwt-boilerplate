"use strict"

var bcrypt = require("bcrypt-nodejs");
var jwt = require("jsonwebtoken");
var configAuth = require("../config/auth");
var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        set: function(password) {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        required: true
    },
    created_at: {
        type: Date,
        default: function() {
            return Date.now();
        },
        required: true
    },
    updated_at: {
        type: Date,
        default: function() {
            return Date.now();
        },
        required: true
    }
});

UserSchema.statics.getUserByLogin = function getUserByLoginStatic(login) {
    return this.findOne({"login": login});
};

UserSchema.statics.updateUserByLogin = function updateUserByLoginStatic(login) {
    return;
}

UserSchema.statics.comparePasswords = function comparePasswordsStatic(auth_password, user_password) {
    return  bcrypt.compareSync(auth_password, user_password);
};

UserSchema.statics.createToken = function createTokenStatic(user) {
    let token = jwt.sign(user, configAuth.secret, {
        expiresInMinutes: 1440 // expires in 24 hours
    });
    return token;
};

module.exports = mongoose.model("User", UserSchema);
