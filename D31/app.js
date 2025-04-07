function fetchUserData(userId, callback) {
    setTimeout(() => {
        const userData = { id: userId, name: `User${userId}` };
        callback(userData);
    }, 1000);
}

function processUsers(userIds, callback) {
    const fetchedData = [];
    let count = 0;

    userIds.forEach((userId, index) => {
        fetchUserData(userId, (data) => {
            fetchedData[index] = data;
            count += 1;
            if (count === userIds.length) {
                callback(fetchedData);
            }
        });
    });
}

const userIds = [1, 2, 3, 4, 5];
processUsers(userIds, (fetchedData) => {
    console.log('All user data fetched:', fetchedData);
});
