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
    addProduct(product)
    {
        //simple push to array
        this.inventory.push(product);
    }
    //get inventory value
    getInventoryValue()
    {
        //running total to add everything together
        let runningTotal = 0;
        //loop for each item in array
        this.inventory.forEach(item => 
            {
                //inside loop, call getTotalValue method, add it to a running total
                runningTotal += item.getTotalValue();
            }
        );
        //outside loop, return running total   
        return runningTotal; 
    }
    //find by name
    findProductByName(name)
    {
        let inInventory = false;
        //loop for each item in array
        this.inventory.forEach(item =>
            {
                //inside loop, see if items's name is equal to name given
                if (this.name == name)
                {
                    inInventory = true;
                }
            }
        );
        //outside loop, if found, return name, if not found return null
        if (inInventory)
        {
            return name;
        }
        else
        {
            return null;
        }
    }
}

//adding more products
let sample3 = new ProductProperties('Water Bottle', 9.97, 59);
let sample4 = new ProductProperties('Bread Knife', 8.97, 13);
let sample5 = new PerishableProductProperties('Eggs', 6.97, 60, 'September 1, 2025');
let sample6 = new ProductProperties('TShirt', 14.97, 10);
let sample7 = new PerishableProductProperties('Chicken Soup', 1.97, 49, 'December 14, 2028');

//add to store
let store = new Store;
//create array with sample#
let samples = [sample1, sample2, sample3, sample4, sample5, sample6, sample7]
//for loop looping through all samples
for(let i = 0; i < samples.length; i++)
{
    //adding it to store
    store.addProduct(samples[i]);
}

//get total value and print it
console.log(store.getInventoryValue());
