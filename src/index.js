const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

const student = require("./student");
app.get("/", (request, response) => {
  response.send("Hello");
});

app.get("/student/:id", (request, response) => {
  const { id = 0 } = request.params;
  const req_studen = student.find(element => {
    if (parseInt(id, 10) === element.id) {
      return true;
    } else {
      return false;
    }
  });
  console.log(req_studen);
  response.status(200).send({ req_studen });
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
