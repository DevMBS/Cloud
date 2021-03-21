//Initalizing node modules
const express = require("express");
const multer  = require("multer");
const app = express();
const fs = require('fs')

//configuring multer
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads/.uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});
 
app.use(express.static(__dirname));
//upload file
app.use(multer({storage:storageConfig}).single("filedata"));
app.post("/upload", function (req, res, next) {
    //writing information about the name of the uploaded file to the files.filedata
    let filedata = req.file;
    fs.appendFile('uploads/files.filedata', String(filedata.filename)+" ", (err) => {
    if (err) {
      console.error(err)
      return
    }
    })
    //displaying information that the file has been uploaded (or not)
    if(!filedata)
        res.send("Failed to upload file<script>location.href='..//uploads';</script>");
    else
        res.send("File uploaded<script>location.href='..//uploads';</script>");
});
//starting express server
app.listen(3000, ()=>{console.log("Server started");});
