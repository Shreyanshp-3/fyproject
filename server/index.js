require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const profile = require("./routes/profile");
// database connection
connection();
let PORT = 5050;

// middlewares
app.use(express.json());
app.use(cors());



// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profile);

const port = PORT;
app.listen(port, console.log(`Listening on port ${port}...`));
