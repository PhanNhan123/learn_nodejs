const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path')

const app = express();
const port = 3000;

// static path
app.use(express.static(path.join(__dirname,'public')));

//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources\\views'));

/*
app.get('/',(req,res) => res.send(`
    <h1 style="color:red;">Hello World!</h1>
    `));
*/
app.get('/',(req,res) => {
    res.render('home');
})

app.get('/news',(req,res) =>{
    res.render('news');
})

/*
app.get('/',(req,res) => {
    return res.send('Hello world');
})
*/

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));