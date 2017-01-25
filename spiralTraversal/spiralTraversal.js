/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
var x=0,y=-1,numper = matrix.length*2-1;
var array = [];
	for (var i = 0; i < matrix.length-2; i++){
		for (var j = 0; j < numper; j++) {
			if (j <=(numper+1)/2-1) {
				y++;
				array.push(matrix[x][y])
			}else{
				x++;
				array.push(matrix[x][y])
			}
		}
		numper-=2;
		for (var a = 0; a < numper; a++) {
			if (a <=(numper+1)/2-1) {
				y--;
				array.push(matrix[x][y])
			}else{
				x--;
				array.push(matrix[x][y])
			}
		}
		numper-=2;
	}
	return array;
}