// CRUD - Create, Read, Update, Delete


let users = [];

class User{
    constructor(_id, _name, _surname, _email){
        this.id = _id;
        this.name = _name;
        this.surname = _surname;
        this.email = _email;
    }
}

// Create User

function createUser(e){
    e.preventDefault();

    let id = users.length + 1;
    let name = document.getElementsByName("_name")[0].value;
    let surname = document.getElementsByName("_surname")[0].value;
    let email = document.getElementsByName("_email")[0].value;


    let user = new User(id, name, surname, email);
    users.push(user);

    let tBody = document.getElementsByTagName("tbody")[0];

    let html = '';

    for (let user of users) {
        let template = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.surname}</td>
                <td>${user.email}</td>
                <td>
                    <button class="btn btn-primary" onclick="updateUser()">Edit</button>
                    <button class="btn btn-danger" onclick="deleteUser(this)">Delete</button>
                </td>
            </tr>
        `;
        html += template;
    }
    tBody.innerHTML = html;
}


function deleteUser(e){
    e.preventDefault();
    let elementParent = e.parentElement.parentElement.parentElement;
    elementParent.remove();
}
