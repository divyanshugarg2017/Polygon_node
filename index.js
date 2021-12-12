require("dotenv").config({ path: ".env" });
//express
const express = require("express");
const app = express();
const connectDatabase = require("./src/configs/dbConfig")
var cors = require("cors");
//middlewares

app.use(express.json());
const { PORT, MONGODB_URL } = process.env;

const StartApplication = async () => {
  try {
    app.use(cors());
    await connectDatabase(MONGODB_URL);
    process.env.NODE_ENV === "development" ? set("debug", true) : "";
    console.log({ message: "DB connection established" });
    app.set("port", PORT || 3001);

    app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
    // StartApplication()
  }
};

StartApplication();
