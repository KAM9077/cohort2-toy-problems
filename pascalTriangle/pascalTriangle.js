/*
Pascal triangle is a triangle made with rows of numbers.
The first row is [1]. 
The second row is [1,1].
In all following rows, each number is the sum of the two directly above it.

For example, the pascal triangle with 4 rows is:

        1
      1   1
    1   2   1
  1   3   3   1

or in array form: [[1],[1,1],[1,2,1],[1,3,3,1]];

Read more about Pascal Triangle here:
http://en.wikipedia.org/wiki/Pascal's_triangle

Also, see the animated GIF file in this folder (open it in Chrome)

The task for this exercise is to write a function that given the number of rows, builds an array of arrays that represents the pascal triangle.

For example:
buildTriangle(3);// should output [[1],[1,1],[1,2,1]];
*/

var buildTriangle = function(numOfRows){
var array = [];
var arr = [];
// if(numOfRows === 1){
// 	array.push([1])
// }else if(numOfRows === 2){
// 	array.push([1,1])
// }

	for (var i = 0; i < numOfRows+2 ; i++) {
		if(i === 0)
		array.push([1])
		for (var j = 0; j < array.length-1 ; j++) {
			if(j === 0 || j === array[i-1].length){
				arr.push(1)
			}else
			arr.push(array[i-1][j-1] + array[i-1][j])
		}
		if(i !== 0){
		array.push(arr);
		arr = [];
		}
	}
	array.splice(0,2);			
return array;
}
		