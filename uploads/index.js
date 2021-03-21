var pFAR = "";
function getFiles(){
  document.getElementById("btnGetTxt").style.display = "none";
  $.ajax({
    url:'files.filedata',
    success: function (data){
      if(data!="" && document.getElementById("password").value == window.atob(pFAR)){
      const list = data.split(" ");
      for(i = 0; i < list.length-1; i++){
        document.getElementById("files").innerHTML += "<a href='.uploads/"+list[i]+"' download>"+list[i]+"</a>"+"<br/><br/><br/><br/>";
      }
      }
      else{
        document.getElementById("files").innerHTML = "No files :("
      }
    }
  });
}
function checkUser(){
  $.ajax({
    url:'peofjpienrofiu34785y389470r9123-8jfun4un0u8h349fh098hq0uj0iweufn0ui0F7Q04UFJ0EJ-F9H0.sspfmbsc',
    success: function (data){
      pFAR = data;
      if(document.getElementById("password").value == window.atob(data)){
        document.getElementById("uploads").innerHTML = '<button  type="button" id="btnGetTxt" onclick="getFiles()">See list of files</button><div id="files"></div>';
        document.getElementById("passinput").style.display="none";
      }
      else{
        document.getElementById("uploads").innerHTML = "Access denied: wrong password";
      }
    }
  });
}