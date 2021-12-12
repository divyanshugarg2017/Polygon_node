const mongoose = require("mongoose");
const { connect, set } = require("mongoose");
const connectDatabase = (url) => {
  return mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connectDatabase;
