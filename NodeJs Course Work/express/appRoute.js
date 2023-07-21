const express = require('express');
const bodyParser = require('body-parser');

//Routes import 
const adminRoutes =  require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));


//using the routes 
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);