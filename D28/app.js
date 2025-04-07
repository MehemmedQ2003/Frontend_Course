// ! ----------------------------- 1 -----------------------------
const filterEvenNumbers = arr => {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            result.push(arr[i]);
        }
    }
    return result;
};
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// ! ----------------------------- 2 -----------------------------
const mapToSquares = arr => {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i] ** 2);
    }
    return result;
};
// console.log(mapToSquares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// ! ----------------------------- 3 -----------------------------
const reduceToSum = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
};
// console.log(reduceToSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// ! ----------------------------- 4 -----------------------------
const findMax = arr => {
    let max = Math.max(...arr);
    return max;
};
// console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));




// ! ----------------------------- 5 -----------------------------
const findMin = arr => {
    let min = Math.min(...arr);
    return min;
};
// console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));




// ! ----------------------------- 6 -----------------------------
const removeDuplicates = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};
// console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 5, 3, 2, 5, 3, 8, 9, 10]));




// ! ----------------------------- 7 -----------------------------
const groupBy = (arr, key) => {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (!result[arr[i][key]]) {
            result[arr[i][key]] = [];
        }
        result[arr[i][key]].push(arr[i]);
    }
    return result;
};
console.log(groupBy([{name: 'Muhammed', age: 20}, {name: 'Metin', age: 20}, {name: 'Musa', age: 19}], 'age'));