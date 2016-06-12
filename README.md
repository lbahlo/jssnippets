
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

"Recursive:ArraySum"
````
//Write a JavaScript program to compute the sum of an array of integer
function arraySum(values) {
  //stop condition
  if (values.length === 1){
    return values[0];
  }
  else{
    return values.pop() + arraySum(values);
  }
    
}
console.log(arraySum([1,2,3,4,5,6])); 
````

"Recursive exponent(n,power)"
````
// Write a JavaScript program to compute the exponent of a number
//assumptions:  only positive numbers
//tests : power of 0  ==> 1,  
//        anyting to the negaive power is 1/antying to positive power
function exponent(n,power) {
  //stop
  if (power <= 0) {
    return 1
  }
  else {
    return n * exponent(n,(power-1));
  }
    
  
}
console.log(exponent(2,2));
console.log(exponent(8,2));
console.log(exponent(8,0));
````

"Fibonacci(n)"
````
//Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
//Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent
//number is the sum of the previous two.
//requirements
// F0 = 0; F1 = 1; F2=1, F3=2, F4=3,F5=5, F6=8

function Fibonacci(n){
  
   if (n === 0) { return 0;}
   if (n === 1) {return 1;}
   return Fibonacci(n-1) + Fibonacci(n-2);
   
  
}

console.log(Fibonacci(5));
console.log(Fibonacci(10));
console.log(Fibonacci(0));
console.log(Fibonacci(1));
console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(4));
````
"Recursive: isEven(n)"
````
//Write a JavaScript program to check whether a number is even or not.
//Requirements
// Return true if number is even else false
// number is event if divisble by 2

function isEven(n){
  if (n < 0) { n=Math.abs(n);} //make positive
  if ( n === 0)  {
     return true;
  }
  else if (n === 1 ){
    return false;
  }
  n = n-2;
  return isEven(n);
      
}

 console.log(isEven(0));
 console.log(isEven(-7));
 console.log(isEven(-8));
 console.log(isEven(1));
 console.log(isEven(2));
 console.log(isEven(10));
 console.log(isEven(100));
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