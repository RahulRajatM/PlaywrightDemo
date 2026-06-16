
let fruits: string[] = new Array('Grapes', 'Apple', 'melon', 'kiwi', 'mango', 'pears', 'water melon');
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

let product: { fruit: string, numb: number }[] = fruits.map((fruit, index) => ({
    fruit: fruit,
    numb: numbers[index]
}))
//console.log(product);

//1.
fruits.push('Guava', 'orange'); //adds one/multiple element to the end of an array

//console.log("Total count: ", fruits.length, "   ", '\t', fruits);

//2.
fruits.pop(); //removes last element from an Array
//console.log(fruits);

//3.
numbers.shift(); //removes first element from the Array
//console.log(numbers);

//4. unshift() is opposite of push() 
numbers.unshift(0, 1); // adds one/multiple element at the begining of the Array

//5. concat() - combines two array in one
let anyfruits = fruits.concat(['jamun', 'Emli'], ['lichi', 'cane']);
// console.log(anyfruits);

//6. slice()- Extracts a section/portion of an Array

let newfruit = anyfruits.slice(0, 2);
//console.log(newfruit);

//7. splice() - adds/removes element from an Array

console.log(anyfruits);


let delFruit= anyfruits.splice(1, 2);  // removes 2 element starting from index 1
console.log(delFruit);

console.log(anyfruits);

anyfruits.splice(0, 0, 'banana', 'Grapes');

console.log(anyfruits);










