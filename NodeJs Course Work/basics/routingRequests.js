const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/'){

        res.write('<html>');
        res.write('<head><title>The Form manin Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end
    }
    res.setHeader('Content-Type','text/html');
    //res.write();
    res.write('<html>');
    res.write('<head><title>The First Project Page</title></head>');
    res.write('<body><h1>The Page Work<h1> </body>')
    res.write('</head>');
    res.end();
    //Once the resposne is ended we can't write a another response 
});


//listen function - to make the server run on the port 
server.listen(3000);