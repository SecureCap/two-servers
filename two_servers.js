var http = require("http");

var portOne = 7000;
var portTwo = 7500;

function handleRequestOne(request, response){
    response.end(`You're Awesome! Keep up the good Work`);
}
function handleRequestTwo(request, response){
    response.end(`You suck!!`);
}

var server = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

server.listen(portOne, function(){
    console.log(`Server listening on http://localhost:${PORT}`);
})

serverTwo.listen(portTwo, function(){
    console.log(`Server listening on http://localhost:${PORT}`);
})


