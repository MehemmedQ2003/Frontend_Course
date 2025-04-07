// ! 1) Generic Error

// function throwError() {
//     throw new Error('This is a generic error');
// }

// try {
//     throwError();
// } catch (error) {
//     console.error(error.name + ': ' + error.message);
// }



// ! 2) Syxntax Error
// try {
//     eval("console.log(bar");
// } catch (error) {
//     console.log(error.name + ': ' + error.message);
// }



// ! 3) Type Error

// function performOperation(value) {
//     if (typeof value !== 'number') {
//         throw new TypeError('Value must be a number');
//     }
//     return value + 10;
// }

// try {
//     let result = performOperation("abc");
//     console.log('Result:', result);
// } catch (error) {
//     console.error(error.name + ': ' + error.message);
// }



// ! 4) Reference Error

// function accessUndefinedVariable() {
//     console.log(undefinedVariable);
// }

// try {
//     accessUndefinedVariable();
// } catch (error) {
//     console.error(error.name + ': ' + error.message);
// }



// ! 5) Range Error

// function throwRangeError(value) {
//     if (value < 0 || value > 100) {
//         throw new RangeError('Value must be between 0 and 100');
//     }
//     return value;
// }

// try {
//     let result = throwRangeError(150);
//     console.log('Result:', result);
// } catch (error) {
//     console.error(error.name + ': ', error.message);
// }


// ! 6) URI Error

// function throwURIError(uri) {
//     if (!isValidURI(uri)) {
//         throw new URIError('Invalid URI');
//     }
//     return uri;
// }

// function isValidURI(uri) {
//     try {
//         new URL(uri);
//         return true;
//     } catch (error) {
//         return false;
//     }
// }

// try {
//     let result = throwURIError('not a uri');
//     console.log('Result:', result);
// } catch (error) {
//     console.error(error.name + ': ', error.message);
// }



// ! 7) Eval Error
// function executeDynamicCode(code) {
//     try {
//         eval(code);
//     } catch (error) {
//         console.error(error.name + ': ', error.message);
//     }
// }

// executeDynamicCode('console.log("Hello, world!"');