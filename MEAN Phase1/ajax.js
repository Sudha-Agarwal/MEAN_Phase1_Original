function getData(){
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/todos/1";

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
          document.getElementById("p1").innerHTML = this.responseText
        }

    }
    //send the request to the server
    xhr.send();


}