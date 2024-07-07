import express from 'express'
import Downloads from '../data/Downloads.json' assert {type:'json'};

const ContactRouter = express.Router();

ContactRouter.route("/").get((req,res)=>{
    res.render("Contact",Downloads);
});
ContactRouter.route("/:id").get((req,res)=>{
    const id = req.params.id;
    res.send("Contact OK"+id);
});

export default ContactRouter;