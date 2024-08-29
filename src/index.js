const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path')

const app = express();
const port = 3000;

const route  = require('./routes/index')

// static path
app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({
    extended : true
})); // xử lý dữ liệu từ form submit qua 
app.use(express.json()); // axios

//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources\\views'));


// ACTION   --> dispatcher -> function handler 

// route init
route(app);




/*
app.get('/',(req,res) => {
    return res.send('Hello world');
})
*/

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));