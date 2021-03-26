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

  document.getElementById('span'+list).innerHTML = "<a href='.uploads/"+list+"' download class='a'>DOWNLOAD FILE</a><form action='/delete' method='post' enctype='multipart/form-data'><input type='text' name='delete' id='file' value='"+list+"' style='display:none;'/><input type='submit' value='DELETE FILE' class='df'/></form><div class='cl-btn-7' onclick='document.getElementById(`span"+list+"`).innerHTML = ``;'></div>";


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
