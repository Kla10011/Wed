import express from 'express'
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
// const express = require('express');
// const chalk = require('chalk');
const app = express();
const port = process.env.port || 4000;
const currentDir = path.dirname(fileURLToPath(import.meta.url));

app.use(morgan("combined"));
app.use(express.static(path.join(currentDir,"/public/")))

app.get("/",(req,res) =>{
    res.send('Hi ronnakon mekvimanloi');
})

app.listen(port,()=>{
    // console.log("listening on port %d",port);
    console.log("listening on port %d"+chalk.green(port));
    debug("listening on port %d"+chalk.red(port));
})
