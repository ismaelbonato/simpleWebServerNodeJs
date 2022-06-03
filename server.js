'use strict';

const numero = require('numero-por-extenso');
const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();

app.get('/*', (req, res) => {
    var number = req.url;
    var ret = number.replace('/','');
   var  test = ret.indexOf('-');
   
    if (test ==  -1) {
        var num = numero.porExtenso(ret);
        res.send('{ "Extenso":  ' + num + " }");         
    } else {
        var ret = ret.replace('-','');
        var num = numero.porExtenso(ret);
        res.send('{ "Extenso": menos ' + num + " }");       
    }
});

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');
