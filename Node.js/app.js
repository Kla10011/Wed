const express = require('express');
const chalk = require('chalk');
const app = express();
const port = 3000;

app.get("/",(req,res) =>{
    res.send('hello ronnakon mekvimanloi');
})

app.listen(port,()=>{
    console.log("listening on port %d",port);
    // console.log("listening on port %d"+chalk.green(port));
})
