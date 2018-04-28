const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 8080

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routing/htmlRoutes")(app);



app.listen(PORT, () => console.log('Example app listening on port 8080!'));