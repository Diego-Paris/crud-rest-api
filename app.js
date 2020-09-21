const mongoose = require("mongoose");
const colors = require("colors");

require("dotenv").config();

mongoose.connect(process.env.MONGO_CREDENTIALS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  // we're connected!
  console.log("Remote database connected".green);
});
