const express = require('express');
const app = express();
const routes = require('./routes/router');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);


app.listen(4010, ()=>{
    console.log('server initialized on https://localhost:4010');
});
    
