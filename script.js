//Product Properties base class
class ProductProperties
{
    //creating the class with name, price and quantity
    constructor(name, price, quantity)
    {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    //gets the value of the product
    getTotalValue()
    {
        return this.price * this.quantity
    }
    //turns all the information into a readable string
    toString()
    {
        return `Product Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
    }
    //Adding static applyDiscount
    static applyDiscount(products, discount)
    {
        //loops through all products
        products.forEach(product => 
            {
                //new price is equal to old price times 100% minus the discount%
                product.price = product.price * (1 - discount)
            }
        );
    }
}

//Perishable child class of product properties
class PerishableProductProperties extends ProductProperties
{
    //constructor for this child class
    constructor(name, price, quantity, expirationDate)
    {
        //super for something already in parent
        super(name, price, quantity);  //all need to be in one super, made mistake earlier and saw error in terminal
        //regular usage for new property
        this.expirationDate = expirationDate;
    }
    //new toString function that would be used instead of one above if this is the class being called
    toString()
    {
        return `${super.toString()}, Expiry Date: ${this.expirationDate}`;
    }
}

//Sample one for perishable
let sample1 = new PerishableProductProperties('Cheese', 4.97, 36, 'September 19, 2025');
console.log(sample1.toString());

//Sample two for perishable
let sample2 = new PerishableProductProperties('Bacon', 7.98, 21, 'October 12, 2025');
console.log(sample2.toString());

//Store Class
class Store
{
    //constructor
    constructor()
    {
        //makes inventory an array
        this.inventory = [];
    }
    //add product method
    addProduct()
    {
        this.inventory.push(product);
    }
}