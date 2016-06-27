

"# jssnippets"

````
// doing things the new ES6 way
function foo(...args) {
    // `args` is already a real array

    // discard first element in `args`
    args.shift();

    // pass along all of `args` as arguments
    // to `console.log(..)`
    console.log( ...args );
}

// doing things the old-school pre-ES6 way
function bar() {
    // turn `arguments` into a real array
    var args = Array.prototype.slice.call( arguments );

    // add some elements on the end
    args.push( 4, 5 );

    // filter out odd numbers
    args = args.filter( function(v){
        return v % 2 == 0;
    } );

    // pass along all of `args` as arguments
    // to `foo(..)`
    foo.apply( null, args );
}

bar( 0, 1, 2, 3 );                  // 2 4

````



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

"#recursion on event loop vs call stack"
````
//var list = readHugeList();
var list = [1,2,3,4,5,6,7];

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        console.log("processing Item = " +item);
        setTimeout( nextListItem, 0);
    }
};

nextListItem();

The stack overflow is eliminated because the event loop handles the recursion, not the call stack. When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed to the event queue and the function exits, thereby leaving the call stack clear. When the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem. Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear, regardless of the number of iterations.


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

function is_number(value)  
        {  
        return !isNaN(value) && toString.call(value) === '[object Number]';  
       }  

  function is_regexp(value)  
        {  
       return toString.call(value) === '[object RegExp]';  
        }

````


"Functional Programming design considerations"

````

1. Are my functions dependent on the context in which they are called, or are they pure and independent?
2. Can I write these functions in such a way that I could depend on them always returning the same result for a given input?
3. Am I sure that my functions don't modify anyting outside of themselves?
4. If I wanted to use these functions in antoher program, would I need ot make changes to them?

````

````

To check type
if( Object.prototype.toString.call( someVar ) === '[object Array]' ) {

When the toString method is called, the following steps are taken:

If the this value is undefined, return "[object Undefined]".
If the this value is null, return "[object Null]".
Let O be the result of calling ToObject passing the this value as the argument.
Let class be the value of the [[Class]] internal property of O.
Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".

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

"BinarySerach(values,target,start,end)"
````
// Write a JavaScript program for binary search. Go to the editor
//Sample array : [0,1,2,3,4,5,6]
//console.log(l.br_search(5)) will return '5'
// input array is sorted
// return -1 for invalid inputs
// return the index of the target in values
function findIndex(values, target){
  return binarySearch(values, target,0, values.length-1)
}

function binarySearch(values, target,start,end){
  if (start > end) {return -1;}
  //get the mid point value
  var midIndex = Math.floor(((start+end)/2));
  var value = values[midIndex];
  if (value > target) { return binarySearch(values, target, start, midIndex-1); }
  if (value < target) { return binarySearch(values, target, midIndex+1, end); }
  return midIndex; //found!

}

console.log(findIndex([0,1,2,3,4,5,6], 5));
console.log(findIndex([0,1,2,3,4,5,6], 4));
console.log(binarySearch([0,1,2,3,4,5,6], 4, 5,0 ));  //bad parms
````


"Recursive: MergSort()"
````

function merge(left, right){
  var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}


function mergeSort(items){

    // Terminal case: 0 or 1 item arrays don't need sorting
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([34,7,23,32,5,62]));
```


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
