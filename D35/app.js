const fs = require('fs');

const data = [
    {
        name: 'Muhammed',
        surname: 'Gardashov',
        age: 20,
        city: 'Baku'
    },
    {
        name: 'Metin',
        surname: 'Gardashov',
        age: 20,
        city: 'Baku'
    },
    {
        name: 'Xezer',
        surname: 'Nesirov',
        age: 20,
        city: 'Lenkeran'
    },
    {
        name: 'Azer',
        surname: 'Nesirov',
        age: 23,
        city: 'Lenkeran'
    }
];


const jsonData = JSON.stringify(data, null, 2);

fs.writeFile("data.json", jsonData, "utf8", (err, data) =>{
    if(err){
        console.log(`Error ${err}`);
    }
    console.log("Adding is successfully");
});