import express from 'express'
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
// const express = require('express');
// const chalk = require('chalk');
const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/",(req,res) =>{
    res.send('hello ronnakon mekvimanloi');
})

app.listen(port,()=>{
    // console.log("listening on port %d",port);
    console.log("listening on port %d"+chalk.green(port));
    debug("listening on port %d"+chalk.green(port));
})
