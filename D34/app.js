import { UserManagementModule } from "./modul.js";


let newUser1 = { id: 1, name: "Mehemmed Gardashov", email: "mehemmed.qardasov2003@gmail.com" };
let newUser2 = { id: 2, name: "Metin Gardashov", email: "metin.qardasov2003@gmail.com"};
let newUser3 = { id: 3, name: "Musa Budagov", email: "musa.budagov2005@gmail.com"};
let newUser4 = { id: 4, name: "Xezer Nesirov", email: "xezer.nesirov2004@gmail.com"};
let newUser5 = { id: 5, name: "Azer Nesirov", email: "azer.nesirov2001@gmail.com"};
let newUser6 = { id: 6, name: "John Doe", email: " john@doe.com"};


UserManagementModule.createUser(newUser1);
UserManagementModule.createUser(newUser2);
UserManagementModule.createUser(newUser3);
UserManagementModule.createUser(newUser4);
UserManagementModule.createUser(newUser5);
UserManagementModule.createUser(newUser6);


console.log(UserManagementModule.readUser(1))


UserManagementModule.updateUser(6, { name: "John Smith", email: "john.smith@example.com" });

UserManagementModule.deleteUser(6)


console.log(UserManagementModule.listUsers())