const http = require('http');
//Handles file system 
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/'){

        res.write('<html>');
        res.write('<head><title>The Form manin Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end
    }
    //Block Code 
    if (url === '/message' && req.method === 'POST') {
        // since we use Sync the code will be blocked and it wont execute the next statement
        // till the line 19 is over 
        fs.writeFileSync('message.txt', 'Dummy Text file');
        res.statusCode = 302;
        //this will redirect to the main page 
        res.setHeader('Location', '/');
        return res.end();
    }
     //non- Block Code 
     //The nodejs will take care of creating eventlistener because of his asynchronous nature 
     if (url === '/message' && req.method === 'POST') {
        // since we use Sync the code will be blocked and it wont execute the next statement
        // till the line 19 is over 
        fs.writeFile('message.txt', 'Dummy Text file', err => {
            res.statusCode = 302;
            //this will redirect to the main page 
            res.setHeader('Location', '/');
            return res.end();
        });
        
    }
    s.setHeader('Content-Type','text/html');
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