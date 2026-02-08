// const express = require('express');
import express from 'express';
import home from './pages/home.js';
import login from './pages/login.js';
const app = express();

app.get('/',(req,res)=>{
    res.send(home());
});
app.get('/login',(req,res)=>{
    res.send(login()
    );
});

// similarly for submit page
app.post('/submit',(req,res)=>{
    res.send('<h1>Form submitted</h1>');
});

app.listen(3201);