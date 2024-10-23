// Create your solutions here

// task-1
function startsWithLosOrNew(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.startsWith("los") || lowerStr.startsWith("new");
}

// task-2
function isDivisibleBy100(num) {
    return num % 100 === 0;
}

// task-3
function isRaining(isRain) {
    return isRain ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home";
}

// task-4
function powerOf(num) {
    return Math.pow(num, num);
}

// task-5
function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}