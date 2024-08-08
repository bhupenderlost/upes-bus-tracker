const { Schema, model, default: mongoose } = require("mongoose") 
const mongoosePaginate = require('mongoose-paginate-v2') // Plugin For Pagination

//init userSchema
const userSchema = Schema({
    //First Name Of The User
    firstName: {
        type: String, //Type of string
        required: true, //It is required
        trim: true //Should be trimmed no spaces
    },
    //Last Name Of The User
    lastName: {
        type: String, //Type of string
        required: false, //It is not required
        trim: true //Should be trimmed no spaces
    },
    //Email Address Of The User
    email: {
        type: String, //Type of string
        required: true, //It is required
        trim: true, //Should be trimmed no spaces
        unique: true //Should be unique 

    },
    //Username Of The User
    username: {
        type: String, //Type of string
        required: true, //It is required
        trim: true, //Should be trimmed no spaces
        unique: true //Should be unique 
    },
    //Type Of User
    userType: {
        type: String, //Type Of String
        enum: ['admin', 'readonly', 'student'], //Can only take 3 string values 
        default: 'student' //Default value always should be student
    },
    //Salt For Password Encryption
    salt: {
        type: String, //Type Of String
        required: true //It is required
    },
    //Encrypted Password Of The User
    encpy_password: {
        type: String, //Type Of String
        required: true //It is required   
    },
    /* Only If The User Type == student */
    //Course Name
    courseName: String,
    //Semster Of The Student
    semester: Number,
    //SAP ID Of The Student
    sapId: Number,
    //Boarding Point Of The Student
    boardingPoint: String
    
  
}, { timestamps: true }) //Timestamps should be shown createdAt and updatedAt

//Add The Mongoose Paginate Plugin To The userSchema
userSchema.plugin(mongoosePaginate)
//Create The Model Named User
const User = model('User', userSchema)
//Export the model User
module.exports = User