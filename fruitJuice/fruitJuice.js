/*
In this toy problem we mix some tasty fruit juice. 
We can add some components with certain amounts. 
Sometimes we pour out a bit of our juice. 
Then we want to find out, which concentrations our fruit juice has.

Example:

You take an empty jar for your juice
Whenever the jar is empty, the concentrations are always 0
Now you add 200 units of apple juice
And then you add 200 units of banana juice
Now the concentration of apple juice is 0.5 (50%)
Then you pour out 200 units 100 100
The concentration of apple juice is still 50%
Then you add 200 units of apple juice again
Now the concentration of apple juice is 0.75, while the concentration
of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)

Complete the functions in order to provide this functionality.
*/

function Jar() {
  this.apple = 0;
  this.banana = 0;
  this.concentration = 0;
  this.totalAmount = 0;
}

Jar.prototype.getConcentration = function(x){
	return this[x]*100/this.totalAmount;
}

Jar.prototype.add = function(a,b){
	this[b] += a ;
	this.totalAmount += a
}

Jar.prototype.getTotalAmount = function(){
	return this.totalAmount;
}
