

//the way to import the library
const http = require('http');


//creating a server call 
const server = http.createServer((req, res) => {
    console.log(req);
    //to unregister  and exit the event loop
    //process.exit(); 
    res.setHeader('Content-Type','text/html');
    //res.write();
    res.write('<html>');
    res.write('<head><title>The First Project Page</title></head>');
    res.write('<body><h1>The Page Work<h1> </body>')
    res.write('</head>');
    res.end();
    //Once the resposne is ended we can't write a another response 
})


//listen function - to make the server run on the port 
server.listen(3000);