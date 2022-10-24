// ** Importing the express and cors

const express = require("express");
const app = express();
// ** geting the cors -> middleware
const cors = require("cors");
// ** using the cors
app.use(cors());

// ** specify the port for the localhost
const port = process.env.PORT || 15000;

// ** entry api point
app.get("/", (req, res) => res.send("mastering-ai running"));

// ** app listen

app.listen(port, () =>
  console.log(`mastering-ai-server is running on port: ${port}`)
);
