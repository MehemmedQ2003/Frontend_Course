class Order{
    constructor(_id, _name){
        this.id = _id;
        this.name = _name;
    }
}


// Create Order
let orders = []
function createOrder(id, name){
    const order = new Order(id, name);
    orders.push(order);
    return orders;
}


// Get Order
function getOrder(id){
    const order = orders.find(order => order.id === id);
    return order;
}


// Update Order
function updateOrder(id, newName){
    const order = getOrder(id);
    if (order) {
        order.name = newName || order.name;
        return order;
    }
    return null;
};


// Remove Order
function removeOrder(id){
    orders = orders.filter(order => order.id !== id);
    return orders;
};


export {getOrder, createOrder, removeOrder, updateOrder}