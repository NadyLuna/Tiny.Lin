const mongoose = require('../config/mongodb');
const {isMail} = require(Validator);

const userSchema = new mongoose.Schema({

    email: { type: String,
        lowercase: true,
        required: true, 
        validate: [isEmail,'Email inválido'], 
        unique: true 
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    token: {
        type: String,
        select: false,
    },
    tokenExpires: {
        type: String,
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

userSchema.pre('save', async function (next) {
    console.log(this.password);
    const hashPass = await bcrypt.hash(this.password, 10);
    this.password = hashPass;

    next();
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
