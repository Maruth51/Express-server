const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

const student = require("./students");
app.get("/", (request, response) => {
  response.send("Hello");
});

app.get("/student/:id", (request, response) => {
  const { id = "" } = request.params;
  student.find(element => {
    if (parseInt(id, 10) === element.id) {
      response.status(200).send(element);
    } else {
      response.status(400);
    }
  });
  response.status(200).json({ student });
  //response.json(student);
});

app.post("/student", (request, response) => {
  //const data = student[id];
  if (request.body.id && request.body.name) {
    student.push(request.body);
    console.log(request.body);
    response.send("This is an post req");
  } else {
    response.status(400).send("Bad Data");
  }
});

const server = app.listen("8080", () => {
  console.log(`Server running at ${server.address().port}`);
});
