/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
	if(num<=2**69){
	var array = String(num).split("");
	}else
	array = String(num).split("e")[0].split(".")[1].split("")
	array.push("1");
	var sum =0; 
		for (var i = 0; i < array.length; i++) {
			sum +=  Number(array[i]);
		}
	return sum;
}