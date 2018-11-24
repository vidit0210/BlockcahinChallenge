const pug = require('pug');

const express = require('express');
const app = express();
const PORT = process.env.PORT ||5000;

app.set('view engine','pug');
app.get('/',(req,res)=>{
    res.render('data',{_title:'Block Chain Quiz 1',message:'Hello World'});
});
app.listen(PORT,()=>{console.log(`Listening on port ${PORT} `)});
