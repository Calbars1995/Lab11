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