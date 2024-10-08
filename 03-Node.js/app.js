import express from 'express'
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import ContactRouter from "./src/router/ContactRouter.js";
import DownloadRouter from './src/router/DownloadRouter.js';
// const express = require('express');
// const chalk = require('chalk');
const app = express();
const port = process.env.port || 4000;
const currentDir = path.dirname(fileURLToPath(import.meta.url));
const url = "mongodb+srv://admin:0000@cluster0.agcmx4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(morgan("combined"));
app.use(express.static(path.join(currentDir,"/public/")));

app.set("views","./src/view");
app.set("view engine","ejs");

app.use("/Download",DownloadRouter);
app.use("/Contact",ContactRouter);
app.get("/",(req,res) =>{
    // res.send('Hi ronnakon mekvimanloi');
    res.render('index',{username:'Ronnakon M.', customers:["B1","B2","B3"]}); //Use with ejs
});

app.listen(port,()=>{
    // console.log("listening on port %d",port);
    console.log("listening on port %d"+chalk.green(port));
    debug("listening on port %d"+chalk.red(port));
});
