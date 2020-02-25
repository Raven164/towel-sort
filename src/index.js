
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if(matrix == undefined){
    return [];
    }
    else{
    var args = [];
    for (var i = 0; i < matrix.length; i++) {
     ((i+1) % 2 == 0) ? args = args
     .concat((matrix[i]).sort((a,b) => b - a)) 
     : args = args
     .concat(matrix[i].sort((a,b) => a - b));
    }
    return args;
    }
  }	


