const express = require("express");
const multer  = require("multer");
  
const app = express();
 
const upload = multer({dest:"http://webgame.hostronavt.ru/uploads"});
app.use(express.static(__dirname));
 
app.post("/upload", upload.single("filedata"), function (req, res, next) {
   
    let filedata = req.file;
 
    console.log(filedata);
    if(!filedata)
        res.send("Failed to upload file");
    else
        res.send("File uploaded. If you want to download it enter '"+filedata.filename+"' ");
});
app.listen(3000);
