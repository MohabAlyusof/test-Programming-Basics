function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}


console.log(range(5, 10)); // [ 5, 6, 7, 8, 9, 10 ] 
console.log(range(10, 16)); // [ 10, 11, 12, 13, 14, 15, 16 ] 
console.log(range(1, 6)); // [ 1, 2, 3, 4, 5, 6 ] 
console.log(range(0, 3)); // [ 0, 1, 2, 3 ] 