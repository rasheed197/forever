import express from "express"; // To create routes
import cors from "cors"; // Allows front end ip to access the backend ip
import "dotenv/config"; // For support of .env file

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// App Config
const app = express(); // Create an instance of the express server
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

// Middlewares
app.use(express.json()); // Whatever request we get will be passes using the json
app.use(cors()); // We'll be able to access the backend ip from any ip


// API endpoints
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server started on PORT: " + port)); // Statrt the express server
