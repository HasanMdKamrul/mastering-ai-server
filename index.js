// ** Importing the express and cors

const express = require("express");
const app = express();
// ** geting the cors -> middleware
const cors = require("cors");
// ** using the cors
app.use(cors());

// ** data import
const courses = require("./data/courses.json");
const blogs = require("./data/blog.json");
const faqs = require("./data/faq.json");

// ** specify the port for the localhost
const port = process.env.PORT || 15000;

// ** entry api point
app.get("/", (req, res) => res.send("mastering-ai running"));

// ** courses api endpoint
app.get("/courses", (req, res) => {
  res.send(courses);
});

// ** course details api end points (dynamic course data load)
app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const courseDetails = courses.find((course) => course.id === id);
  res.send(courseDetails);
});
// ** blog api endpoint
app.get("/blogs", (req, res) => res.send(blogs));
// ** faq api end points
app.get("/faq", (req, res) => res.send(faqs));
// ** app listen

app.listen(port, () =>
  console.log(`mastering-ai-server is running on port: ${port}`)
);
