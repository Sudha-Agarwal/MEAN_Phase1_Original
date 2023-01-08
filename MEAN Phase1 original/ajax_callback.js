function makeAjaxCall(url, methodType, callback){
    var xhr = new XMLHttpRequest();
    xhr.open(methodType, url, true);
    xhr.send();
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
         if (xhr.status === 200){
            console.log("xhr done successfully");
            callback(xhr.response);
         } else {
            console.log("xhr failed");
         }
      } else {
         console.log("xhr processing going on");
      }
    }
    console.log("request sent succesfully");
 }

 function renderUsers(data){
    document.getElementById("demo").innerHTML = data;

  
    }
 var URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

 makeAjaxCall(URL,'GET', renderUsers)