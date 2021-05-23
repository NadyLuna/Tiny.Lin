const mongoose = require('../config/mongodb');
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({

    email: { type: String,
        lowercase: true,
        required: true, 
        validate: [isEmail, 'Email inválido'], 
        unique: true 
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    name: {
        type: String,
        required: true,
    },
    cpf: {
        type: Number,
        unique: true,
    },
},
{
    timestamps: true,
    }
);

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
