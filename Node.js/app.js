const express = require('express');
const app = express();
const port = 3000;
const chalk = require('chalk');

app.get("/",(req,res) =>{
    res.send('hello ronnakon mekvimanloi');
})

app.listen(port,()=>{
    console.log("listening on port %d",port);
    // console.log("listening on port %d"+chalk.green(port));
})
