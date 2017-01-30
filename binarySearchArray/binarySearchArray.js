/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
	var start = array[0];
	var end = array[array.length-1];
	var mid = Math.floor(array.length/2);
	if(target === array[mid]){
		return mid; 
	}else if(target === start){
		return 0;
	}else if(target === end){
		return array.length-1;
	}else if(target > array[mid] && array.length !== 1 ){
		return binarySearch(array.splice(mid,array.length-mid),target);
	}else if(target < array[mid] && array.length !== 1){
		return binarySearch(array.splice(0,mid),target);
	} else return false;

};

