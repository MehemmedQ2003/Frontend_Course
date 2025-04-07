// ! 1

let books=[
    "The Hobbit",
    "The Lord of the Rings",
    "The Silmarillion",
    "The Children of Hurin",
    "Unfinished Tales",
    "The History of Middle-earth",
    "The Book of Lost Tales",
    "The Book of Lost Tales Part Two",
    "The Lays of Beleriand",
    "The Shaping of Middle-earth",
    "The Lost Road and Other Writings"
];

class FindLongBook {
    constructor(books) {
        this.books = books
    }

    getBooksMax() {
        let max = 0;
        let maxLongBook = "";
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].length > max) {
                maxLongBook = this.books[i];
            }
        }
        console.log(`${maxLongBook}`);
    }

    getBooksMin(){
        let min = Infinity
        let minLongBook = "";
        for(let i = 0; i < this.books.length; i++) {
            let currentBook = this.books[i];
            let letterCount = this.books.length;
            if(letterCount < min) {
                minLongBook = currentBook
            }
        }
        console.log(`${minLongBook}`);
    }

    getBooksStartWithT(){
        let startWithT = [];
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i][0] == "T"){
                startWithT.push(this.books[i]);
            }
        }
        console.log(`${startWithT}`);
    }

}
let findLongBook = new FindLongBook(books)
// findLongBook.getBooksMax();
// findLongBook.getBooksMin();
// findLongBook.getBooksStartWithT();



// ! 2

let nums=[3,4,6,12,34,67]

class BiggestNum {
    constructor(nums) {
        this.nums = nums
    }

    getBiggestNums() {
        let biggestNums = this.nums.sort((a, b) => {a - b})
        console.log(biggestNums[biggestNums.length - 1] + " and " + biggestNums[biggestNums.length - 2])
    }
}

let biggestNum = new BiggestNum(nums);
biggestNum.getBiggestNums();