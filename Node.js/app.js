import express from 'express'
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import Downloads from './data/Downloads.json' assert {type:'json'};
// const express = require('express');
// const chalk = require('chalk');
const app = express();
const port = process.env.port || 4000;
const currentDir = path.dirname(fileURLToPath(import.meta.url));
const DownloadRouter = express.Router();
const ContactRouter = express.Router();

app.use(morgan("combined"));
app.use(express.static(path.join(currentDir,"/public/")));

app.set("views","./src/view");
app.set("view engine","ejs");

DownloadRouter.route("/").get((req,res)=>{
    res.render("Download",Downloads);
});
DownloadRouter.route("/:id").get((req,res)=>{
    const id = req.params.id;
    res.render("Result",Downloads.Downloads[id]);
    // res.render("Result",    {
    //     "id": 1,
    //     "Name": "cv",
    //     "Type": "pdf",
    //     "Page": 2
    // });
    // res.send("Download OK"+id);

});
ContactRouter.route("/").get((req,res)=>{
    res.render("Contact",Downloads);
});
ContactRouter.route("/:id").get((req,res)=>{
    const id = req.params.id;
    res.send("Contact OK"+id);
});

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
