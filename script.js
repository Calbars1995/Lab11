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
        return `Product Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`
    }
}

//Perishable child class of product properties
class PerishableProductProperties extends ProductProperties
{
    //constructor for this child class
    constructor(name, price, quantity, expirationDate)
    {
        //super for something already in parent
        super(name);
        super(price);
        super(quantity);
        //regular usage for new property
        this.expirationDate = expirationDate;
    }
}