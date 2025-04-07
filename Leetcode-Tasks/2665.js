var createCounter = function(init) {
    let currentCount = init;
    
    return {
        increment: function() {
            currentCount++;
            return currentCount;
        },
        decrement: function() {
            currentCount--;
            return currentCount;
        },
        reset: function() {
            currentCount = init;
            return currentCount;
        }
    };
};