const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 8080

app.get('/', (req, res) => res.send('Getting jiggy with it!'));

app.listen(PORT, () => console.log('Example app listening on port 8080!'));