let products = [
    {
        id: 1,
        title: "Apple",
        price: 1,
        image: "img/apple.jpg",
        info: "Apple is a good fruit",
    },
    {
        id: 2,
        title: "Orange",
        price: 2,
        image: "img/banana.jpg",
        info: "Orange is a good fruit",
    },
    {
        id: 3,
        title: "Banana",
        price: 3,
        image: "img/orange.jpg",
        info: "Banana is a good fruit",
    },
    {
        id: 4,
        title: "Kiwi",
        price: 4,
        image: "img/Kiwi-fruit.webp",
        info: "Kiwi is a good fruit",
    },
    {
        id: 5,
        title: "Watermelon",
        price: 5,
        image: "img/watermelon.jpg",
        info: "Watermelon is a good fruit",
    },
    {
        id: 6,
        title: "Greyfurt",
        price: 6,
        image: "img/greyfurt.jpeg",
        info: "Greyfurt is a good fruit",
    },
    {
        id: 7,
        title: "Melon",
        price: 7,
        image: "img/melon.jpg",
        info: "Melon is a good fruit",
    },
    {
        id: 8,
        title: "Strawberry",
        price: 8,
        image: "img/strawberry.jpg",
        info: "Strawberry is a good fruit",
    }
];

let catalog = document.querySelector(".catalog");

products.forEach((item) => {
    catalog.innerHTML += `
        <div class="card my-2">
            <img src="${item.image}" class="img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.info}</p>
                <p class="card-price">${item.price} AZN</p>
                <button class="btn btn-success add-to-cart" onclick="addToCartFunc(${item.id})">Add to Cart</button>
            </div>
        </div>
    `;
});

function addToCartFunc(id) {
    let product = products.find(item => item.id === id);
    let tbody = document.querySelector("tbody");
    tbody.innerHTML += `
        <tr>
            <td>${product.title}</td>
            <td>${product.price} AZN</td>
            <td><input type="number" placeholder="Count" min="0" class="form-control" onchange="updateTotal()"></td>
            <td class="item-total">0 AZN</td>
            <td><button class="btn btn-danger" title="delete" onclick="deleteUser(this)"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    `;
    updateTotal();
}

function deleteUser(element) {
    element.parentElement.parentElement.remove();
    updateTotal();
}


function updateTotal() {
    let total = 0;
    document.querySelectorAll("tbody tr").forEach(row => {
        let price = parseFloat(row.children[1].innerText.replace(' AZN', ''));
        let count = row.children[2].children[0].value;
        let itemTotal = price * (count ? parseInt(count) : 0);
        row.children[3].innerText = `${itemTotal} AZN`;
        total += itemTotal;
    });
    document.querySelector(".totalSumProduct").innerText = `Total: ${total} AZN`;
}



// Products data with local storage

let users = JSON.parse(localStorage.getItem("products")) || [];
let goToOrder = document.querySelector(".go-to-order");

goToOrder.addEventListener("click", function () {
    let table = document.querySelector("table");
    let rows = table.querySelectorAll("tbody tr");
    rows.forEach(row => {
        let title = row.children[0].innerText;
        let price = parseFloat(row.children[1].innerText.replace(' AZN', ''));
        let count = row.children[2].children[0].value;
        let itemTotal = price * (count ? parseInt(count) : 0);
        users.push({
            title: title,
            price: price,
            count: count,
            itemTotal: itemTotal
        });
    });
    localStorage.setItem("products", JSON.stringify(users));
    window.location.href = "shoppingCard.html";
});