import { createUser, getUser, removeUser, updateUser } from "./user.js";
import { createProduct, getProduct, removeProduct, updateProduct } from "./product.js";
import { createProductCategory, getProductCategory, removeProductCategory, updateProductCategory } from "./productCategory.js";
import { createOrder, getOrder, removeOrder, updateOrder } from "./order.js";


console.log(createUser(1, "Muhammed", "Gardashov", "mehemmed.qardasov2003@gmail.com"));
console.log(getUser(1));
console.log(updateUser(2, "Metin", "Gardashov", "metin.qardasov2003@gmail.com"));
console.log(removeUser(1));


console.log(createProduct(1, "Apple"));
console.log(getProduct(1));
console.log(updateProduct(2, "Banana"));
console.log(removeProduct(1));


console.log(createProductCategory(1, "Electronics"));
console.log(getProductCategory(1));
console.log(removeProductCategory(2, "Accessories"));
console.log(updateProductCategory(1));


console.log(createOrder(1, "Phones"));
console.log(getOrder(1));
console.log(updateOrder(2, "Rings"));
console.log(removeOrder(1));