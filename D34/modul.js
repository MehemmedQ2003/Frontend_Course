var UserManagementModule = (function() {
    var users = [];

    function findUserIndexById(userId) {
        // TODO: Implement logic to find the index of a user by their ID
        for(let i = 0; i < users.length; i++){
            if(users[i].id === userId){
                return i;
            }
        }
        return userId;
    }

    return {
        createUser: function(user) {
            let index = findUserIndexById(user);
            users.push(index);
            return user;
        },
        readUser: function(userId) {
            let index = findUserIndexById(userId);
            if(index !== -1){
                return users[index];
            }
        },
        updateUser: function(userId, newDetails) {
            let index = findUserIndexById(userId);
            if(index !== -1){
                users[index] = {...users[index], ...newDetails};
                return users[index];
            }
        },
        deleteUser: function(userId) {
            users = users.filter(item => item.id !== userId);
        },
        listUsers: function() {
            return users;
        }
    };
})();
export { UserManagementModule };
    