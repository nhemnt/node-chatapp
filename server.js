'use strict'
const express = require('express');
const app = express();

app.set('port', process.env.port || 3000);

//middleware
// let testMiddleware = (req, res, next) => {
//     req.hello = 'test middleware'
//     next();
// }
// app.use('/',testMiddleware);

app.get('/', (req, res, next) => { 
    // res.send("<h1> heello </h1>");
    res.sendFile(__dirname + "/views/login.htm")
})

app.listen(app.get('port'), () => { 
    console.log('running on 3000')
})