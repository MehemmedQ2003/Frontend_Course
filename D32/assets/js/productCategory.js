class ProductCategory{
    constructor(_id, _name){
        this.id = _id;
        this.name = _name;
    }
}


// Create Product Category
let productCategories = []
function createProductCategory(id, name){
    const productCategory = new ProductCategory(id, name);
    productCategories.push(productCategory);
    return productCategories;
}


// Get ProductCategory
function getProductCategory(id){
    const productCategory = productCategories.find(productCategory => productCategory.id === id);
    return productCategory;
}


// Update ProductCategory
function updateProductCategory(id, newName){
    const productCategory = getProductCategory(id);
    if (productCategory) {
        productCategory.name = newName || productCategory.name;
        return productCategory;
    }
    return null;
};


// Remove ProductCategory
function removeProductCategory(id){
    productCategories = productCategories.filter(productCategory => productCategory.id !== id);
    return productCategories;
};


export {getProductCategory, createProductCategory, removeProductCategory, updateProductCategory}