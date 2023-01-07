
$(document).ready(function () {
    $("#submit").click(function () {
       $.post("/request",
          {
             name: "viSion",
             designation: "Professional gamer"
          },
          function (data, status) {
             console.log(data);
          });
    });
 });