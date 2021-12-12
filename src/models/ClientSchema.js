const mongoose = require("mongoose");
const validator = require("validator");

const ClientSchema = new mongoose.schema({
  email: {
    type: String,
    required: [true, "please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "please provide valid email",
    },
    unique: true,
  },
  name: {
    type: String,
    required: [true, "please provide name"],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "please provide phone number"],
  },
  createdDate: {
    type: Date,
    default: new Date(),
  },
  lawfirm: [
    {
      type: mongoose.Schema.objectId,
      ref: 'Lawfirm',
      required: true,
    },
  ],
})

module.exports = mongoose.model('client',ClientSchema)
