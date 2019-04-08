// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // input: anything
  // output: string
  // edge cases: variables that are functions and undefined variables or properties
  var output = '';  

  //if obj is string 
  if(typeof obj === 'string') {
    return `"obj"`;
  }

  //if obj is a number or boolean
  if(typeof obj === 'number' || typeof obj === 'boolean') {
    output += obj;
    return output;
  }

  //if obj is null
  if(typeof obj === 'null') {
    return 'null';
  }

  //if obj is an array
  if(Array.isArray(obj) === true){ 
    var newArray = [];  
    for(var i =0; i<obj.length; i++){
      newArray.push(stringifyJSON(obj[i]));
    }
    output = "[" + newArray.join(",") + "]";
    return output;
  }
  //
  //if obj is an object
  if(typeof obj === "object"){
    var stringObject = "";
    for(key in obj){
      if(!obj[key]===undefined || !typeof obj[key] === "function"){
      stringObject += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
      }
    }
    output += "{" + stringObject.slice(0, stringObject.length-1) + "}"; 
    return output;
  }
  //
};

stringifyJSON('bob');
stringifyJSON(1);
stringifyJSON(false);
stringifyJSON(null);
stringifyJSON([]);
stringifyJSON([1, 2, ['a', 'b', 'c']]);
stringifyJSON({name: 'bob', age: 1});




// var keys = [];
//   if(Array.isArray(obj) === true) { 
//     keys = Object.keys(obj);
//     output += '[';
//   } else if(typeof obj === 'object') {
//     keys = Object.keys(obj);
//     output += '{';
//   }
//   for(var i = 0; i<keys.length; i++) {
//     if(Array.isArray(obj) === true) {
//       if(keys[i + 1] === undefined) {
//         if(typeof obj[keys[i]] === 'function' || typeof obj[keys[i]] === 'undefined') {
//         output += 'null';
//         } else {
//           output += stringifyJSON(obj[keys[i]]);
//         } 
//         output += ']';
//       } else {
//          if(typeof obj[keys[i]] === 'function' || typeof obj[keys[i]] === 'undefined') {
//         output += 'null';
//         } else {
//           output += stringifyJSON(obj[keys[i]]);
//         } 
//         output += ',';
//       }
//     } else if(typeof obj === 'object') {
//       if(typeof obj[keys[i]] === 'function' || typeof obj[keys[i]] === 'undefined') {
//         continue;
//       }
//       if(keys[i + 1] === undefined) {
//         output += keys[i] + ':' + stringifyJSON(obj[keys[i]]) + '}';
//       } else {
//         output += keys[i] + ':' + stringifyJSON(obj[keys[i]]) + ',';
//       }
//     }
// }
//   return output;
