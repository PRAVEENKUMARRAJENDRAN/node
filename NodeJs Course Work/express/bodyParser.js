//Basic express import file 
const http = require('http');
const bodyParser = require('body-parser');

//express import
const express = require('express');

//All the express related helper will be inside the express function
//so we save it inside the app module
const app = express();

//body Parser is used to pass the request and get the body 
app.use(bodyParser.urlencoded({extended: false}));


app.use('/',(req, res, next) => {
    console.log("The Second Middleware");

    //the send e=given by express to send the resposne
    res.send('<h1>The response is send from the middleware</h1>')
});


//the express way
app.listen(3000);