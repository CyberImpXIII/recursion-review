// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// object
//     {}
//     { members }
// members
//     pair
//     pair , members
// pair
//     string : value
// array
//     []
//     [ elements ]
// elements
//     value 
//     value , elements
// value
//     string
//     number
//     object
//     array
//     true
//     false
//     null

// but you're not, so you'll write it from scratch:

//look for matching sets of brackets and then when on the innermost set start sending strings where they need to go

var parseJSON = function(json) {
  // your code goes here
var finder = function(string) {

  var currentString = ""
  var curlyBracketCounter = {
    brackets : false,
    counter : 0
  }
  var arrBracketCounter = {
    brackets : false,
    counter : 0
  }

  var singleQuoteCounter = {
    exists: false,
    counter: 0
  };

  var doubleQuoteCounter = {
    exists: false,
    counter: 0
  }
  for(var i =0; i<string.length; i++){
    if(string[i]==="{" && string[i-1]!== "\\"){
      curlyBracketCounter.brackets = true;
      curlyBracketCounter.counter ++;
    }
    if(string[i]==="}" && string[i-1]!== "\\"){
      curlyBracketCounter.counter --;
    }
    if(string[i]==="[" && string[i-1]!== "\\"){
      arrBracketCounter.brackets = true;
      arrBracketCounter.counter ++;
    }
    if(string[i]==="]" && string[i-1]!== "\\"){
      arrBracketCounter.counter --;
    }
    if(string[i]=== "\"" && string[i-1]!== "\\"){
      doubleQuoteCounter.exists = true;
      doubleQuoteCounter.counter ++;
    }
    if(string[i]=== "\'" && string[i-1]!== "\\"){
      singleQuoteCounter.exists = true;
      singleQuoteCounter.counter ++;
    }

    currentString += string[i];

    if(singleQuoteCounter.counter === 2){
      return stringPass(currentString);
    }
    if(singleQuoteCounter.counter === 2){
      return stringPass(currentString);
    }
    if(curlyBracketCounter.brackets === 0 && curlyBracketCounter.counter === true){
      arrayCreate(currentString);
    }
    if(arrBracketCounter.brackets === 0 && arrBracketCounter.counter === true){
      objectCreate(currentString);
    }
    if(typeOf (Number(currentString)) === "number"){

    }
    if((currentString.includes("true") || currentString.includes("false") ) && doubleQuoteCounter.exists === false && singleQuoteCounter.exists === false){
      booleanCreate(currentString)
    }
  }
}


var objectCreate = function(currentString){
  var results = Object(currentString.split("").pop().shift().join(""))
}

var keyValuePairCreate = function(){

}

var arrayCreate = function(){

}

var stringPass = function(currentString){
  return String(currentString.split("").pop().shift().join(""));
}

var numberCreate = function(){

}

var booleanCreate = function(currentString){
  return currentString.includes("true");
}

};
