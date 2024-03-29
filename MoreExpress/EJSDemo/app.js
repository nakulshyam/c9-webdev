var express = require("express");
var app = express();

app.use(express.static("public"))
app.set("view engine", "ejs")

// setting up root
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "POST 1", author: "Susy"},
        {title: "My adorable bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"},
    ]
    res.render("posts", {posts: posts})
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server starting...");
});