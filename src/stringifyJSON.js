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

  //if obj is an array or object
  var keys = Object.keys(obj);
  if(Array.isArray(obj) === true) { 
    output += '[';
    for(var i = 0; i<obj.length; i++) {
      if(obj[i + 1] === undefined) {
        output += stringifyJSON(obj[i])
      }
    }
  } else if(typeof obj === 'object') {
    output += '{';
  }


  //if obj is an array with content 

  //if obj is an object (that isn't null)



};


stringifyJSON('bob');
stringifyJSON(1);
stringifyJSON(false);
stringifyJSON(null);
stringifyJSON([]);
stringifyJSON([1, 2, ['a', 'b', 'c']]);
stringifyJSON({name: 'bob', age: 1});
