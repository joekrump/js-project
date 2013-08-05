var Product = function(name, price)
{
	var self = this;
	self.name = typeof name !== 'undefined' ? name : 'default_name';
	self.price = typeof name !== 'undefined' ? price : 0.00;
};

Product.prototype.getName() { return self.name;}
Product.prototype.getName() { return self.price;}

var Drink = function()
{
	var self = this;
	self.name = typeof name !== 'undefined' ? name : 'default drink name';
};

Drink.prototype = Object.create(Product.prototype);
Drink.prototype.constructor = Drink;
var ItemA = function() { code = 'ItemA'; c = 'a'; };


var product1 = new Drink();
console.log(product1.getName());