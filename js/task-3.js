function filterArray(numbers, value) {
    
    const filteredNumbers = [];
    
   
    for (const number of numbers) {
        
        if (number > value) {
            filteredNumbers.push(number);
        }
    }
    
 
    return filteredNumbers;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
console.log(filterArray([3, 8, 6, 15], 10)); // [15]
console.log(filterArray([1, 1, 1, 1], 1)); // []
console.log(filterArray([], 5)); // []

