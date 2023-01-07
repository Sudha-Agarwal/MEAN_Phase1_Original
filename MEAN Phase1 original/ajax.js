    function run() {
  
        // Creating Our XMLHttpRequest object 
        var xhr = new XMLHttpRequest();
  
        // Making our connection  
        var url = 'https://jsonplaceholder.typicode.com/todos/1';
        xhr.open("GET", url, true);
  
        // function execute after request is successful 
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML = this.responseText;
            }
        }
        // Sending our request 
        xhr.send();
    }
    
    function getdata(){
        run();

    }
