const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ic_number: {
        type: String,
        required: true,
        trim: true
    },
    ic_colour: {
        type: String,
        required: true
        
    },
    gender: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true,
        trim: true
    },
    date_of_birth: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true
    },
    educational_institution: {
        type: String,
        required: true,
        trim: true
    },
    question_1: {
        type: String,
        required: true  
    },
    question_2: {
        type: String,
        required: true
    },
    question_3: {
        type: String,
        required: true
    },
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;