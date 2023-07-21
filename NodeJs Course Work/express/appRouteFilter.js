const express = require('express');
const bodyParser = require('body-parser');

//Routes import 
const adminRoutes =  require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));


//using the routes with the filtering the path 
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

//handling the page not found issue 
app.use((req, res, next) => {
    // we use the status keyword for handling the status of the page whether it is 200 or 404 
    res.status(404).send('<h1>Page Not Found</h1>')
});

app.listen(3000);