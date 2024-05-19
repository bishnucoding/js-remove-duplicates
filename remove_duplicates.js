const remove_duplicates = function(input){
    let myMap = new Map();
    for(i of input) myMap.set(i, true)

    return  myMap.keys();
}

input = [3,4,5,22,6,7,7,8,87,4,8,6,22]
result = remove_duplicates(input)
console.log(result)

// Time complexity: O(n): because the input is iterated only once. Map insertion takes constant time.
// Space complexity: O(n) Because additionl map is used for storing n elements from input.