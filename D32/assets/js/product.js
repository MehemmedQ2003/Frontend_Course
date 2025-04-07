class Product{
    constructor(_id, _name){
        this.id = _id;
        this.name = _name;
    }
}


// Create Product
let products = []
function createProduct(id, name){
    const product = new Product(id, name);
    products.push(product);
    return products;
}


// Get Product
function getProduct(id){
    const product = products.find(product => product.id === id);
    return product;
}


// Update Product
function updateProduct(id, newName){
    const product = getProduct(id);
    if (product) {
        product.name = newName || product.name;
        return product;
    }
    return null;
};


// Remove Product
function removeProduct(id){
    products = products.filter(product => product.id !== id);
    return products;
};


export {getProduct, createProduct, removeProduct, updateProduct}