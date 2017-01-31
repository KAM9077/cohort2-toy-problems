/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var result = 1;
	array.sort(function(a,b){return b-a})
	result = array[0]*array[1]*array[2];
return result;
};




// if(array[2]<=0 && array[2]>=0){
// 		result = array[0]*array[array.length-2]*array[array.length-1];
// 	}else
// 		if (array[0]>=0 && array[2] < 0) {
// 			result = array[0] * array[array.length-2]*array[array.length-1];
// 		}else 
// 			if (array[0]<=0) {
// 				result = array[0]*array[1]*array[2];
// 			};
