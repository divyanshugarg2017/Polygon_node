const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const LawfirmSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please provide email"],
    validate: {
      validator: validator.isEmail,
      messsage: "please provide valid email",
    },
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  status: {
    type: String,
    enum: ["approve", "deny", "hold", "admin"],
    default: "hold",
  },
  phoneNumber: {
    type: String,
    required: [true, "please provide your phone number"],
  },
  createdDate: {
    type: Date
  },
  upadtedDate: {
    type: Date
  }
});

lawfirmSchema.methods.createJWT = function () {
  return jwt.sign(
      { lawFirmId: this._id, lawFirmEmail: this.email },
      process.env.JWT_SECRET,
      {
          expiresIn: process.env.JWT_LIFETIME,
      }
  )
};

lawfirmSchema.pre('save', function() {
  const now = new Date()
  this.updatedDate = now
  if ( !this.createdDate ) {
      this.createdDate = now
  }
})

module.exports = mongoose.model('LawFirm', LawFirmSchema)
