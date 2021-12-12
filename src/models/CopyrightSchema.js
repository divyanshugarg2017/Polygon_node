const mongoose = require('mongoose')
const validator = require('validator')

const CopyrightSchema = new mongoose.Schema({
    s3Key: {
        type: String
    },
    documentName: {
        type: String,
        required: true,
    },
    registrationDate: {
        type: Date,
        default: new Date()
    },
    documentHash: {
        type:String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'failed', 'waiting', 'pushedToBlockchain'],
        default: 'pending',
    },
    type: {
        type: String,
        enum: ['dramatic', 'sound', 'artistic'],
    },
    client: {
        type: mongoose.Schema.ObjectId,
        ref: 'Client',
        required: true,
    },
    lawFirm: {
        type: mongoose.Schema.ObjectId,
        ref: 'LawFirm',
        required: true,
    },
})

module.exports = mongoose.model('Copyright', CopyrightSchema)