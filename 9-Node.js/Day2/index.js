const express = require('express');
const todoRoute = require('./routes/todo');
const userRoute = require('./routes/user');
const mongoose = require('mongoose');
//const pug = require('pug');
const cors = require('cors')
const app = express();



//UseMiddleware: convert body to parse
//recieve callback function

app.use(cors({
    //any domain
    origin: '*',
    methods: 'GET POST PATCH',
}))
app.use(express.json());
app.use('/todo', todoRoute);
app.use('/user', userRoute);

//Error Handleing
app.use('*', function(req, res,next){
    res.status(404).json({
        status: 'Faild',
        message: 'Not Found',
    })
    next();
});

//Error Handleing
app.use(function(err, req, res, next){
    res.status(500).json({
        status: 'Faild',
        message: 'Error',
    })
})

mongoose.connect('mongodb://127.0.0.1:27017/tododb').then(() => {
    console.log('Connected to Database')
})



const port = 5555;
app.listen(port, () =>{
    console.log(`Success`);
})