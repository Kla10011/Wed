import express from 'express'
import Downloads from '../data/Downloads.json' assert {type:'json'};

const DownloadRouter = express.Router();

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
export default DownloadRouter;