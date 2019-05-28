'use strict'
const express = require('express');
const app = express();

app.set('port', process.env.port || 3000);

app.get('/', (req, res, next) => { 
    res.send("<h1> heello </h1>");
})
app.get('/dashboard', (req, res, next) => { 
    res.send("<h1> heello dashboard</h1>");
})

app.listen(app.get('port'), () => { 
    console.log('running on 3000')
})