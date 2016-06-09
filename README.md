"# jssnippets" 

````
// Function factory
function Car () {
  var self = {
    make: 'Honda',
    model: 'Accord',
    color: '#cc0000',
    paint: function(color){
      self.color = color;
    }
  };
  return self;
}
 
var myCar = Car();
````

````
// adding html element 
<html> 
<head> <title>t1</title> 

<script type="text/javascript"> 
function addNode() {
     var newP = document.createElement("p"); 
     var textNode = document.createTextNode(" This is a new text node");    
     
     newP.appendChild(textNode); document.getElementById("firstP").appendChild(newP);
 } 
</script> </head> 

<body> <p id="firstP">firstP<p> </body> 
</html>


````

````
//Check if variable is array
var myArray = [];
if (myArray instanceof Array) {
   // do something...
}

````

````
Goals
Start with a brute force solution, look for repeat work in that solution, and modify it to only do that work once.

````