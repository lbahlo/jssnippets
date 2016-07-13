````
//Formulas
//volume
//cylinder

//comibinations
  nCr = n! / r! * (n - r)!, where n represents the total number of items,
  and r represents the number of items being chosen at a time.

//Probability
Number of favorable outcomes/number of total outcomes


````

SQL Examples

SELECT * FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 100000

SELECT NAME FROM CITY WHERE POPULATION > 120000 AND COUNTRYCODE='USA'


hackerrank
//=============== javascript template if needed ===========
process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = "";
process.stdin.on('data', function (data) {
    input += data;
});
process.stdin.on('end', function () {
    numbers = input.split("\n");
    sum = parseInt(numbers[0]) + parseInt(numbers[1])
    prod = parseInt(numbers[0]) * parseInt(numbers[1])
    process.stdout.write(sum+"\n"+prod+"\n");
});
//==========


//Process std input to array for ProcessingInstruction
function processData(input) {
       
    var inputArray = input.split('\n');
    var tests = Number(inputArray.shift());  
   // console.log(tests);
   // console.log(inputArray);
    var ai = 1;
    for (var i = 0; i < tests; i++){
        var source = inputArray.shift();
        var target = inputArray.shift();
        findCommonSubstring(source,target);
     }
   
} 

function findCommonSubstring(source,target){
    
   // console.log("source = " + source);
   // console.log("target = " + target);
    var len = target.length;
   // console.log(len);
    for (var i = 0; i < len; i++){
      
        if ( source.indexOf(target[i]) !== -1){
            return console.log("YES");
        }
    }
   return console.log("NO");
 
}

//===================================================

function convertTimeTo24(time){
   
    //var string = "this is a string,and I have a comma";
    //var array = string.split(/[\s,]+/);
   
    var parts = time.split(/[\:,P,A,p,a]+/);
   // console.log("parts = " + parts);  
 
     var hours = parseInt(parts[0]); 
     var minutes = parts[1];
     var seconds = parts[2];
     var isPM = time.indexOf("P") !== -1 ? true : false; 
     var isAM = time.indexOf("A") !== -1 ? true : false; 
     
    //set hours to 24 clock
    if (isPM &&  hours <= 12){
        hours += 12;
    }
    if (isAM && hours === 12){
        hours = 0;
    }
    
    console.log("hours = " + hours);   
    console.log(typeof hours);   
    
    var strHours = hours.toString();
    console.log("strHours = " + strHours);   
    console.log(typeof strHours);   
    
   // console.log("hours = " + hours);   
   // console.log("minutes = " + minutes);   
   // console.log("seconds = " + seconds);   
    
  //    var newtime = time.match(/(\d+):(\d+):(\d+)(\w)/);
  //    console.log("newtime = " + newtime);  
    
     
     return (strHours + ":" + minutes + ":" + seconds);
    
}
//========================= 
   
// vectir diagonals adding
// go to caclulate with one pass o(n)
function DiagDiff(vector){
    var len = vector.length-1;
    var pds = 0;
    var sds = 0;
   
    for (var i = 0; i <= len; i++){
        pds +=  vector[i][i];
        sds += vector[i][len-i];
    }

    return  Math.abs(pds-sds);
    
}
//=======================

//Pangrams are sentences constructed by using every letter of the alphabet at least once.
function isPangram(str){
    var target = [];
    var lowerCaseStr = str.toLowerCase().replace(/ /g,'');
   // console.log(lowerCaseStr);
    var len = lowerCaseStr.length;    
    //brute force - loop input and if add chars used to target, if at end target is alphabet this input is a pangram
    for (var i = 0; i < len; i++){
        
        if (target.indexOf(lowerCaseStr[i]) === -1){
            target.push(lowerCaseStr[i]);
        }
     }
    
  //  console.log("target.length = " + target.length);
    if (target.length < 26) {  
      return  "not pangram";  
    }
    else {
        return "pangram"
    }
       
}

//===================

//There are N strings. Each string's length is no more than 20 characters. There are also  //Q queries. For each query, you are given a string, and you need to find out how many //times this string occurred previously.
function getMatches(sources, target){
  console.log("target = ", target);
  var match = 0;
  var len = sources.length;
  for (var i = 0; i < len; i++){
   // if (sources[i].includes(target)) {
      if (sources[i] === target) {
         match += 1;
     }
  }
  return match;
}

function sarray() {

   var source = [];
   var queries = [];
   var len = arguments[0];

   for (var i = 0; i < len; i++){
      source.push(arguments[i+1]);
   }
   var qlen =  arguments[i+1];
   for (var x = 0; x < qlen; x++){
     queries.push(arguments[i+2+x]); 
   }
 
   //loop through queires to outputing number of times found in source
   
   for (var x = 0; x < qlen; x++){
      console.log(getMatches(source, queries[x]));  
   }
  
  
  
 //  console.log("len = " + len);
 //  console.log("source = " + source);
 //  console.log("qlen = " + qlen);
 //  console.log("queriese = " + queries);
        
                  
}
     
     
sarray(4,"aba","baba","aba","xzxb",3,"aba","xzxb","ab");   

//----------------------------------


//Given an array of  integers, can you find the sum of its elements?
//input
//6
//1 2 3 4 10 11
//
//output
//31

function sumValues(len,values) {
   var sum = 0;
   for (var i = 0; i < len; i++) {
      sum += values[i];
   }
  return sum;
}

console.log(sumValues(6,[1,2,3,4,10,11]));


--------------------------

//Observe that its base and height are both equal to , and the image is drawn using # //symbols and spaces. The last line is not preceded by any spaces.

//Write a program that prints a staircase of size .

function staircase(steps) {
  //want o(n), one pass through
  // on each loop, build a array of spaces and array of hashes then add
    for(var i = 1; i <= steps; i++){
        var spaces = buildStr(steps-i," ");
        var hashes = buildStr(i,"#");
       // var spaces = new Array(steps-i).join("-");
       // var hashes = new Array(i+2).join("#");
        console.log(spaces+hashes);
    }
  
}

function buildStr(size,str){
    var result = [];
    for(var i = 0; i < size; i++) {
        result.push(str);
    }
    return result.join('');
}


function staircase(steps) {
  
   //need to print top to bottom
   for (var i=0; i<steps; i++){
      // note: join() requires a minimum 
      //   of 2 array elements to have any effect
      var spaces = new Array(steps-i).join(" "); 
      var hashes = new Array(2+i).join("#");
      console.log(spaces+hashes);      
  }
}

staircase(6);



function staircase(totalSteps) {

   
   //need to print top to bottom
   for (var i = 1; i <= totalSteps; i++){
   //   console.log("i = " + i);
      //print spaces
      //var spaces=[];
      var output = "";
      var spaces = totalSteps - i;
      var steps  = i;
//      console.log("spaces = " + spaces);
//      console.log("steps = " + steps);
      for (var sp = 0; sp < spaces; sp++){
           output += " ";
      }
      
       for (var s = 0; s < steps; s++){
              //spaces.push(" ");
          output += "X";
      }
          
      console.log(output);

   }
}


staircase(6);

//----------------------------------------
//print the number of square nunbers foundin given range
//
function squares(min,max) {
      var squarecount = 0;
      var done = false;
                
      for (var r = 1; !done; r++) {
        //  console.log("r = " + r);
          var square = r*r; 
  
          console.log("square = " + square);
         // console.log("square = " + square);
          if ((square >= min) && (square <=  max)) {
            console.log("min = " + min + " max = " + max);
            squarecount += 1;
            console.log("squarecount = " + squarecount);
          }
          if (square > max) { done = true;}

   
       }
        return squarecount;
    
}

function countSquares(n, ranges) {
  // console.log("n = " + n);
  // console.log("ranges = " + ranges);
   var squarecounts = [];
   for (var i = 0; i< n; i++) {
   
      var min = ranges[i][0];
      var max = ranges[i][1];
     // console.log("min = " + min);
     // console.log("max = " + max);
      squarecounts.push(squares(min,max));
         
   }
   return squarecounts

}

var input = [ [3,9], [17,24] ];

console.log(countSquares(2, input)); 


