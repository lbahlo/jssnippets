"# jssnippets" 

````
Title:
What
Requirmeents
Tests

````

````
//XXX Ttile

//What are you testing? 
//requirements (e.g.)
// Prime ==> Number can be divded by 1 and self only
// 0 is not Prime
// 1 is not Prime
// negative numbers are not prime

//What Should it do?  -  if given input is a prime number return true else false
//What is the Actual Output
//What is the Execptec Output  - True or False



var myModule = (function() {
     'use strict';
      var vm = {};
   
      //public  
      vm.isPrime = isPrime;   
     
      function isPrime(number) { 
  
          return xxx;

       };
 
	    return vm;
      
    })();
    
    
    //tests

     var tests = myModule;
    
   
    //edge cases
    console.log(tests.isPrime(0));  
    console.log(tests.isPrime(-1));
    
    //non prim numbers
    console.log(tests.isPrime(4));
    console.log(tests.isPrime(6.789));
    
    //prime numbers
    console.log(tests.isPrime(3));
 //   console.log(myModule().isPrime(5));
     debugger
    console.log(myModule.isPrime(5));

````



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