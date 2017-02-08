
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var translateRomanNumeral = function(romanNumeral){
	var count = 0;
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
	count = DIGIT_VALUES[romanNumeral[romanNumeral.length-1]]
	for (var i = romanNumeral.length-2 ; i >= 0; i--) {
		if( DIGIT_VALUES[romanNumeral[i]] >= DIGIT_VALUES[romanNumeral[i+1]]){
			count+=DIGIT_VALUES[romanNumeral[i]]
		}else{
			count-=DIGIT_VALUES[romanNumeral[i]]
		}
	}
return count;
}