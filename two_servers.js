var http = require("http");

var portOne = 7000;
var portTwo = 7500;

function handleRequestOne(request, response){
    response.end("You're Awesome! Keep up the good Work" + request.url)
}
function handleRequestTwo(request, response){
    response.end("You suck!!" + request.url)
}

var server = http.createServer(handleRequestOne, handleRequestTwo);
// var serverTwo = http.createServer(handleRequestTwo);

server.listen(portOne, function(){
    console.log(`Server listening on http://localhost:${PORT}`);
})

server.listen(portTwo, function(){
    console.log(`Server listening on http://localhost:${PORT}`);
})


