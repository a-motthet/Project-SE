const express = require('express');
const Quotes = require('inspirational-quotes');

const app = express();

app.get('/', (req,res) =>{
    res.send(Quotes.getQuote());

})
app.listen(5000,() =>{
    console.log('Sever started ssuiskadoaskd')
})