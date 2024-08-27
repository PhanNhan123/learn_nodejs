const express = require('express');
const app = express();
const port = 3000;

app.get('/trang-chu',(req,res) => res.send('Hello world'));
    var a = 1;
    var b = 2;

    var c = a + b;
/*
app.get('/',(req,res) => {
    return res.send('Hello world');
})
*/

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));