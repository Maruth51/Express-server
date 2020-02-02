const express = require("express");
const app = express();

const student = require("./students");
app.get("/", (request, response) => {
  response.send("Hello");
});

app.get("/student", (request, response) => {
  response.status(200).json(student);
  //response.json(student);
});

app.get("/student/id", (request, response) => {
  const data = student[1];
  response.send(data);
});

const server = app.listen("8080", () => {
  console.log(`Server running at ${server.address().port}`);
});
