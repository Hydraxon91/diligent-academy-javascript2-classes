// ### Creating a Basic Product
function Product(name, price, description, category) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
}

Product.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}`);
    console.log(`Price: ${this.price}$`);
    console.log(`Description: ${this.description}`);
    console.log(`Category: ${this.category}`); //Task 2 Adding a Category to Products
};

Product.prototype.isOfType = function(type) { //Task 2 Adding a Category to Products
    return this.category === type;
};

Product.prototype.getPrice = function() {
    return this.price * (1 - this.discountPercentage / 100);
};

const testProduct = new Product('aaaa', 10, 'bbbbb', 'ccc')
// testProduct.displayInfo();
// console.log(testProduct.price);

// Task 3 Creating a Book Prototype
function Book(name, price, description, category, author){
    Product.call(this, name, price, description, category)
    
    this.author = author;
}

Book.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}`);
    console.log(`Price: ${this.price}$`);
    console.log(`Description: ${this.description}`);
    console.log(`Category: ${this.category}`);
    console.log(`author: ${this.author}`);
};

// Task 4: Creating a Movie Prototype

function Movie(name, price, description, category, director, releaseYear){
    Product.call(this, name, price, description, category)
    
    this.director = director;
    this.releaseYear = releaseYear;
}

Movie.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}`);
    console.log(`Price: ${this.price}$`);
    console.log(`Description: ${this.description}`);
    console.log(`Category: ${this.category}`);
    console.log(`director: ${this.director}`); 
    console.log(`releaseYear: ${this.releaseYear}`); 
};


// Task 5: Overriding Methods in Subclasses

function DiscountedProduct(name, price, description, category, discountPercentage){
    Product.call(this, name, price, description, category)
    this.discountPercentage = discountPercentage;
}

DiscountedProduct.prototype.getPrice = function() {
    return this.price * (1 - this.discountPercentage / 100);
};

const discountedTest = new DiscountedProduct('aaaa', 100, 'bbbbb', 'ccc', 15)

console.log(discountedTest.getPrice());
