const express = require("express");
const app = express();
const path = require("path");
app.use(express.static('public/'));

const students = [
    { name: "Aarav Mehta", rollNo: "101", course: "ExpressJS", batch: "10-12 AM" },
    { name: "Riya Sharma", rollNo: "102", course: "MongoDB", batch: "12-3 PM" },
    { name: "Rohit Patil", rollNo: "103", course: "NodeJS", batch: "2:30-4:30 PM" },
    { name: "Neha Kulkarni", rollNo: "104", course: "EJS", batch: "5-6 PM" }
  ];

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));

  app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("pages/home", { title: "Home" });
});

app.get("/students", (req, res) => {
  res.render("pages/students", { title: "Students", students });
});

app.get("/contact", (req, res) => {
    res.render("pages/contact", { title: "Contact" });
  });


const port = 7000;
const host = '127.0.0.1';

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
})