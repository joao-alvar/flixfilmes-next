const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
// const cors = require("cors");

dotenv.config();

// Environment variables
const PORT = process.env.PORT || 8800;
const URL = process.env.MONGO_URL || "";

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

// Cors config
// app.use(
//   cors({
//     origin: URL,
//   })
// );

/** routes */

app.listen(PORT, () => {
  console.log(`Backend server is running! on http://localhost:${PORT}`);
});
