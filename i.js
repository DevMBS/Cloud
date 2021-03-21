//checking password
function checkUser(){
  $.ajax({
    url:'uploads/peofjpienrofiu34785y389470r9123-8jfun4un0u8h349fh098hq0uj0iweufn0ui0F7Q04UFJ0EJ-F9H0.sspfmbsc',
    success: function (data){
      if(document.getElementById("password").value == window.atob(data)){
        document.getElementById("ok").innerHTML = '<h1 id="uf"><p align="center">Upload file</p></h1><br/><form action="/upload" method="post" enctype="multipart/form-data"><label>File:</label><br/><br/><input type="file" name="filedata" id="file"/><br><br><input class="s" type="submit" value="SEND" /></form><button class="up" onclick="location.href=\'/uploads\';">UPLOADS</button>';
        document.getElementById("passinput").style.display="none";
      }
      else{
        document.getElementById("ok").innerHTML = "<br/><br/>Access denied: wrong password";
      }
    }
  });
}
