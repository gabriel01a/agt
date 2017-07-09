var express = require('express');
var app = express();
app.use("/controller", express.static(__dirname + "/controller"));
app.use("/", express.static(__dirname + "/"));
app.listen('3000');

app.get("/",function(req,res){
	res.sendfile("index.html");
});