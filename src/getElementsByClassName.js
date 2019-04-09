// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  //input:class name
  //output:array of HTML elements
  // your code here

  var output = [];

  var recursiveFunction = function(element){
    if(element.classList.contains(className)){
      output.push(element);
    }  
    var i=0
    while(i < element.children.length){
      recursiveFunction(element.children[i]);
      i+=1;    
    }
  };
  recursiveFunction(document.body);
  console.log(output);
  return output;

};
