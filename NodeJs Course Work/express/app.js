//Basic express import file 
const http = require('http');

//express import
const express = require('express');

//All the express related helper will be inside the express function
//so we save it inside the app module
const app = express();

//Middleware Section 
//use function of express is used to set a middleware
//three arguments needed for middleware
app.use((req, res, next) => {
    console.log('The First Middleware');
   next(); //the following next call will execute the next middleware in the line 
});

//second middlewaRE wit the response 
app.use((req, res, next) => {
    console.log("The Second Middleware");

    //the send e=given by express to send the resposne
    res.send('<h1>The response is send from the middleware</h1>')
});
//app willact as a requesthandler so we pass to the createServer
//const server = http.createServer(app);

//server.listen(3000);

//the express way
app.listen(3000);