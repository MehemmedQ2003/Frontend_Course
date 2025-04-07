// ! 1) Read file with fs

const fs = require('fs');

fs.readFile('./sample.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    // console.log(data.toString());

    // ! 2) Find Letter and word count without spaces
    const text = data.toString();
    const letterCount = text.replace(/ /g, '').length;
    // console.log(letterCount);

    const wordCount = text.split(' ').length;
    // console.log(wordCount);


    // ! 3) Write a function that finds how many numbers are in the text from the word entered as a parameter

    const findNumberCount = (word) => {
        const regex = new RegExp(word, 'g');
        const matches = text.match(regex);
        return matches ? matches.length : 0;
    }
    // console.log(findNumberCount('m'));
});


// todo 1. File System Module - fs - read, write, update, delete files


// fs.writeFile('example.txt', 'Hello, world!', (err) => {
//   if (err){
//     console.log(err);
//   };
//   console.log('File has been written');
// });


// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err){
//     console.log(err);
//   };
//   console.log(data);
// });


// fs.appendFile('example.txt', '\nAppend this text', (err) => {
//     if (err){
//         console.log(err);
//     };
//     console.log('File has been updated');
// });


// fs.unlink('example.txt', (err) => {
//     if (err){
//         console.log(err);
//     };
//     console.log('File has been deleted');
// });



// todo 2. HTTP Module - http - create server, send requests

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, world!\n');
// });

// server.listen(3000, '127.0.0.1', () => {
//   console.log('Server running at http://127.0.0.1:3000/');
// });




// todo 3. OS Module - os - get information about the operating system

// const os = require('os');

// console.log('Platform:', os.platform());
// console.log('Architecture:', os.arch());
// console.log('CPU Core Info:', os.cpus());
// console.log('Free Memory:', os.freemem());
// console.log('Total Memory:', os.totalmem());
// console.log('Uptime:', os.uptime());




// todo 4. Path Module - path - handle file paths

// const path = require('path');

// const filePath = '/user/local/bin/file.txt';

// console.log('Directory Name:', path.dirname(filePath));
// console.log('Base Name:', path.basename(filePath));
// console.log('Extension:', path.extname(filePath));
// console.log('Join Paths:', path.join('/user', 'local', 'bin', 'file.txt'));
// console.log('Resolve Path:', path.resolve('file.txt'));




// todo 5. Query String Module - querystring - handle query strings

// const querystring = require('querystring');

// const qs = 'name=JohnDoe&age=25&city=NewYork';
// const parsed = querystring.parse(qs);
// console.log(parsed);
// const stringified = querystring.stringify(parsed);
// console.log(stringified);




// todo 6. Stream Module - stream - handle streaming data

// const readableStream = fs.createReadStream('example.txt', 'utf8');
// readableStream.on('data', (chunk) => {
//   console.log('New chunk received:', chunk);
// });

// const writableStream = fs.createWriteStream('example.txt');
// writableStream.write('Hello, ');
// writableStream.write('world!');
// writableStream.end();


// todo 7. URL Module - url - parse URL strings

// const url = require('url');

// const urlString = 'https://www.example.com/path/name?query=string#hash';
// const parsedUrl = url.parse(urlString);
// console.log('Protocol:', parsedUrl.protocol);
// console.log('Host:', parsedUrl.host);
// console.log('Pathname:', parsedUrl.pathname);
// console.log('Query:', parsedUrl.query);