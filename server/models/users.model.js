const {model, Schema} = require('mongoose')

const usersSchema = new Schema({
    login: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 32
    },
    inits: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true
    },
    social: {
        type: Map,
        of: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    code: {
        type: String,
        unique: true,
        required: true
    },
    access_level: {
        type: Number,
        enum: [0, 1, 2]
    }
})

module.exports = model('users', usersSchema)