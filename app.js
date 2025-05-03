const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();
app.use(bodyParser.json());

db.sequelize.sync(); // { force: true } for reset

app.use("/users", require("./routes/user.routes.js"));
app.use("/universities", require("./routes/university.routes.js"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
