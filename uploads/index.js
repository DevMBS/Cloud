var pFAR = "";
function getFiles(){
  document.getElementById("btnGetTxt").style.display = "none";
  $.ajax({
    url:'files.filedata',
    success: function (data){
      if(data!="" && document.getElementById("password").value == window.atob(pFAR)){
      const list = data.split(" ");
      for(i = 0; i < list.length-1; i++){
        document.getElementById("files").innerHTML += "<button class='menu' onclick='innerMenu(`"+list[i]+"`);'>"+list[i]+"</button><span id='span"+list[i]+"'></span>"+"<br/><br/><br/><br/>";
      }
      }
      else{
        document.getElementById("files").innerHTML = "No files :("
      }
      
    }
  });
}
function innerMenu(list){

  document.getElementById('span'+list).innerHTML = "<a href='.uploads/"+list+"' download class='a'>DOWNLOAD FILE</a><button class='openFile' onclick='openfile(`"+list+"`);'>OPEN FILE</button><form action='/delete' method='post' enctype='multipart/form-data'><input type='text' name='delete' id='file' value='"+list+"' style='display:none;'/><input type='submit' value='DELETE FILE' class='df'/></form><div class='cl-btn-7' onclick='document.getElementById(`span"+list+"`).innerHTML = ``;document.getElementById(`open`).innerHTML = ``;'></div>";


}
function openfile(file){
  const extension = file.split(".")[1];
  switch(extension){
    case "txt":
      $.ajax({
        url:'.uploads/'+file,
        success: function (data){
          document.getElementById("open").innerHTML = "<div class='txt'>"+data+"</div>";
        }
      });
      break;
    case "png":
      document.getElementById("open").innerHTML = "<img src='.uploads/"+file+"'/>";
      break;
    case "jpg":
      document.getElementById("open").innerHTML = "<img src='.uploads/"+file+"'/>";
      break;
    case "jpeg":
      document.getElementById("open").innerHTML = "<img src='.uploads/"+file+"'/>";
      break;
    case "svg":
      document.getElementById("open").innerHTML = "<img src='.uploads/"+file+"'/>";
      break;
    case "mp4":
      document.getElementById("open").innerHTML = `<video controls="controls"><source src=".uploads/`+file+`" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'></video>`;
      break;
    case "ogv":
      document.getElementById("open").innerHTML = `<video controls="controls"><source src=".uploads/`+file+`" type='video/ogg; codecs="theora, vorbis"'></video>`;
      break;
    case "webm":
      document.getElementById("open").innerHTML = `<video controls="controls"><source src=".uploads/`+file+`" type='video/webm; codecs="vp8, vorbis"'></video>`;
      break;
    default:
      document.getElementById("open").innerHTML = "This file type is not supported";
      break;
    
  }
}
function checkUser(){
  $.ajax({
    url:'peofjpienrofiu34785y389470r9123-8jfun4un0u8h349fh098hq0uj0iweufn0ui0F7Q04UFJ0EJ-F9H0.sspfmbsc',
    success: function (data){
      pFAR = data;
      if(document.getElementById("password").value == window.atob(data)){
        document.getElementById("uploads").innerHTML = '<button  type="button" id="btnGetTxt" onclick="getFiles()">See list of files</button><div id="open"></div><div id="files"></div>';
        document.getElementById("passinput").style.display="none";
      }
      else{
        document.getElementById("uploads").innerHTML = "Access denied: wrong password";
      }
    }
  });
}
