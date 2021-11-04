const express = require("express");
const app = express();
const cors = require("cors");
const port = 8070;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));


// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/pet.routes");
AllMyUserRoutes(app);

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");



app.listen(8000, () => console.log("The server is all fired up on port 8000"));