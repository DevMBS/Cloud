const express = require("express");
const multer  = require("multer");
const app = express();
const fs = require('fs')
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads/.uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});
 
app.use(express.static(__dirname));

app.use(multer({storage:storageConfig}).single("filedata"));
app.post("/upload", function (req, res, next) {
   
    let filedata = req.file;
    fs.appendFile('uploads/files.filedata', String(filedata.filename)+" ", (err) => {
    if (err) {
      console.error(err)
      return
    }
    });
    if(!filedata)
        res.send("Failed to upload file<script>location.href='..//uploads';</script>");
    else
        res.send("File uploaded<script>location.href='..//uploads';</script>");
});
app.post('/delete', function(req, res) {
    var ffd = req.body.delete;
    fs.unlink("uploads/.uploads/"+ffd, (err) => {
      if(err){
      }
      else{
        res.send("<script>location.href='..//uploads';</script>");
        fs.readFile("uploads/files.filedata", "utf8", function(error,data){ 
          const datafile = data.split(" ");
          let newDatafile = [];
          for(i = 0; i < datafile.length-1; i++){
            if(datafile[i] == (ffd)){
              newDatafile.push("");
            }
            else{
              newDatafile.push(datafile[i]+" ");
            }
          }	
          fs.unlinkSync("uploads/files.filedata");
          fs.appendFile('uploads/files.filedata', String(newDatafile.join("")), (err) => {});
        });
      }
    });
 });
app.listen(3000, ()=>{console.log("Server started");});
