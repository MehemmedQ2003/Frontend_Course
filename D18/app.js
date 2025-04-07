// todo ************************ CallBack Function ************************


// ! Code 01

const employees = [
    { name: 'John', age: 30, department: 'Marketing' },
    { name: 'Jane', age: 25, department: 'Finance' },
    { name: 'Jim', age: 35, department: 'Sales' },
    { name: 'Bob', age: 40, department: 'Marketing' },
    { name: 'Sue', age: 28, department: 'Finance' }
];

function filterEmployees(data, employeeCondition, callback) {
    const filterData = data.filter(employee => employeeCondition(employee))
    callback(filterData)
}

function isMarketing(employee) {
    return employee.department === "Marketing"
}

filterEmployees(employees, isMarketing, function (result) {
    console.log(result);
})



// ! Code 02

const products = [
    {name: "Laptop", price: 1000},
    {name: "Mouse", price: 50},
    {name: "Keyboard", price: 75},
    {name: "Monitor", price: 200}
]

function sortProducts(data, isPrice , callback) {
    const sortData = data.sort((a, b) => {
        return isPrice(a) - isPrice(b);
    })
    callback(sortData)
}

function showPrice(product){
    return product.price
}

sortProducts(products, showPrice, function(result){
    console.log(result);
})

