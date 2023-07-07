// Given an array of integers, find if the array contains any duplicates. Your
// function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.


// duplicates([1,2,4,1,,1,5,6])  //true
// duplicates([1,2,4,5,6])//false

const duplicates = (numbers) => {
    const number = new Set();
    for(const num of numbers){
        if(number.has(num)){
            return true;
        }
        number.add(num);
    }
    return false;
};
const number1 = [1, 2, 4, 1, 3 , 1, 5, 6];
const result1 = duplicates(number1);
console.log(result1);

const number2 = [1, 2, 4, 5, 6];
const result2 = duplicates(number2);
console.log(result2);
