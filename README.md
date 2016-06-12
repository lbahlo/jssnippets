// comands to update
//C:\Lenna\Examples\jssnippets>git add README.md
//C:\Lenna\Examples\jssnippets>git commit -m "c1"
//C:\Lenna\Examples\jssnippets>git push -u origin master

"# jssnippets" 

````
//Title:
//What
//Requirmeents

var myModule = (function() {
     'use strict';
      var vm = {};
   
      //public  
      vm.XXX = XXX;   
     
      function XXX(....r) { 
  
          return yyy;

       };
 
	    return vm;
      
    })();


//Tests Edge cases "null, 0 negative, min, max"

     var tests = myModule;
     console.log(tests(...));  

````

"#  adding html element " 

````

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

"#  Check if variable is array "

````

var myArray = [];
if (myArray instanceof Array) {
   // do something...
}

````

````
Goals
Start with a brute force solution, look for repeat work in that solution, and modify it to only do that work once.

````

"Factoral(x)"

````
//Factoral(x) 

function factorial(x){
  if (x <= 0){
    return 1;
  }
  return x * factorial(x-1)  
  
}

console.log(factorial(5))


````


"GreatestCommonDivisor"
````
//Write a JavaScript program to find the greatest common divisor (gcd) of two positive 
function greatedCommonDivisor(n1,n2,gcd) {
 
    var x = Math.min(n1,n2);
    if ( gcd === Math.min(n1,n2) ) {
       return gcd;
    }
    
    var posGcd = gcd+1; 
   
    while (posGcd <= Math.min(n1,n2) ) {
      if (  (n1 % posGcd) === 0 && (n2 % posGcd) === 0 ) {
          gcd = posGcd;
          greatedCommonDivisor(n1,n2,gcd);
      }   
      
      posGcd++;
    }
    
    return gcd; 
}
   //tests
   console.log(greatedCommonDivisor(4,8,1));
   console.log(greatedCommonDivisor(4,9,1));
   
         
````


"Type of Errors"

````
JavaScript gives a message if it encounters an error. The recognized errors are –

Load-time errors: The errors shown at the time of the page loading are counted under Load-time errors. These errors are encountered by the use of improper syntax, and thus are detected while the page is getting loaded.
Run-time errors: This is the error that comes up while the program is running. It is caused by illegal operations, for example, division of a number by zero, or trying to access a non-existent area of the memory.
Logic errors: It is caused by the use of syntactically correct code, which does not fulfill the required task. For example, an infinite loop.




````
//module/function name

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