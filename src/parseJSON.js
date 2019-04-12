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
var finder(string){
  var currentString = ""
  var curlyBracketCounter = {
    brackets : false,
    counter : 0
  }
  for(var i =0; i<string.length; i++){
    if(string[i]==="{" && string[i-1]!== "\\"){
      curlyBracketCounter.brackets = true;
      curlyBracketCounter.counter += 1;
    }
    if(string[i]==="}" && string[i-1]!== "\\")

  }
}
var objectCreate = function(){
  var results = 
}

var keyValuePairCreate = function(){

}

var arrayCreate = function(){

}

var stringPass = function(){

}

var numberCreate = function(){

}

var booleanCreate = function(){

}

};
