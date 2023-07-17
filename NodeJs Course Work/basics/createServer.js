

//the way to import the library
const http = require('http');


//creating a server call 
const server = http.createServer((req, res) => {
    console.log(req);
    //to unregister  and exit the event loop
    process.exit(); 
})


//listen function - to make the server run on the port 
server.listen(3000);