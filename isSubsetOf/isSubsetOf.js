/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/
<<<<<<< HEAD
//Without Extra credit
// Array.prototype.isSubsetOf = function (arr) {
	// for (var i = 0; i < this.length; i++) {
	// 	if(arr.indexOf(JSON.stringify(this[i]))=== -1){
	// 		return false;
	// 	}
	// }
	// return true;
// }


//With Extra credit
Array.prototype.isSubsetOf = function (arr) {
	this.counter=0;
	this.flage = true;
	for (var j = 0; j < this.length; j++){ 
	  this.counter=0;
		for (var i = 0; i < arr.length; i++) {
			if(JSON.stringify(arr[i])===(JSON.stringify(this[j]))){
				this.counter++;
			}
		}
		if(this.counter === 0){this.flage = false;}
	}
	return this.flage;
=======

Array.prototype.isSubsetOf = function (arr) {

>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
}