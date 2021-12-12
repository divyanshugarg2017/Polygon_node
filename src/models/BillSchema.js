const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
  lawFirm: {
    type: mongoose.Schema.ObjectId,
    ref: "LawFirm",
    required: true,
  },
  trademarkCount: {
    type: Number,
    default: 0,
  },
  copyrightCount: {
    type: Number,
    default: 0,
  },
  paymentStatus: {
    type: String,
    enum: ["unpaid", "paid"],
    default: "unpaid",
  },
  paidAmount: {
    type: Number,
  },
  paymentDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Bill", BillSchema);
