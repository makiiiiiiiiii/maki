var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/maki", (req, res) => {
    res.sendFile(__dirname + "/makie.html");
});

app.listen(8080);
