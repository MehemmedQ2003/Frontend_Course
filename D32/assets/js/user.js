class User{
    constructor(_id, _name, _surname, _email){
        this.id = _id;
        this.name = _name;
        this.surname = _surname;
        this.email = _email;
    }
}


// Create User
let users = []
function createUser(id, name, surname, email){
    const user = new User(id, name, surname, email);
    users.push(user);
    return users;
}


// Get User
function getUser(id){
    const user = users.find(user => user.id === id);
    return user;
}


// Update User
function updateUser(id, newName, newSurname, newEmail){
    const user = getUser(id);
    if (user) {
        user.name = newName || user.name;
        user.surname = newSurname || user.surname;
        user.email = newEmail || user.email;
        return user;
    }
    return null;
};


// Remove User
function removeUser(id){
    users = users.filter(user => user.id !== id);
    return users;
};


export {getUser, createUser, removeUser, updateUser}