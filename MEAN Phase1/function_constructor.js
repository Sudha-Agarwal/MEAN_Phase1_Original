var body = "return Math.PI * radius * radius1";


var circle = new Function("radius","radius1",body);
console.log(circle(5,4));



