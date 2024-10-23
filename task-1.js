function startsWithLosOrNew(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.startsWith("los") || lowerStr.startsWith("new");
}


console.log(startsWithLosOrNew("New York")); // true
console.log(startsWithLosOrNew("newark")); // true 
console.log(startsWithLosOrNew("London")); // false
console.log(startsWithLosOrNew("Los Angeles")); // true
console.log(startsWithLosOrNew("lOs Angeles")); // true
console.log(startsWithLosOrNew("San Carlos")); // false