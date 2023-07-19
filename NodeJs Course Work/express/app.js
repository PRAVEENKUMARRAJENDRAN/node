//Basic express import file 
const http = require('http');

//express import
const express = require('express');

//All the express related helper will be inside the express function
//so we save it inside the app module
const app = express();
//app willact as a requesthandler so we pass to the createServer
const server = http.createServer(app);

server.listen(3000);