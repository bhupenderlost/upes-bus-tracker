const { Schema, model, default: mongoose } = require("mongoose")
const mongoosePaginate = require('mongoose-paginate-v2')
const { v4: uuid } = require('uuid')

const userSchema = Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true

    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    userType: {
        type: String,
        enum: ['admin', 'readonly', 'student'],
        default: 'student'
    },
    salt: {
        type: String,
        required: true
    },
    encpy_password: {
        type: String,
        required: true    
    },
    courseName: String,
    semester: Number,
    sapId: Number,
    boardingPoint: String
    
  
}, { timestamps: true })

userSchema.plugin(mongoosePaginate)
const User = model('User', userSchema)

module.exports = User