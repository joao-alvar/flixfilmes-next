const express = require("express");
const app = express();

const mongoose = require("mongoose");

// Import routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

const dotenv = require("dotenv");
// const cors = require("cors");

dotenv.config();

// Environment variables
const PORT = process.env.PORT || 8800;
const CONNECTION_STRING = process.env.CONNECTION_STRING || "";

mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(PORT, () => {
  console.log(`Backend server is running! on http://localhost:${PORT}`);
});
