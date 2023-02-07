//Given an array consisting of movie names, iterate over the array 
//with the output of the names of each movie to the console
const movies = ['Iron Man', 'The Incredible Hulk', 'Iron Man 2', 'Thor'];
movies.forEach(film => console.log(film));
//Given an array of car manufacturers, convert the array to a string and back to an array
const cars = ['Kia', 'Mersedes', 'Lamborghini', 'Land Rover', 'Lexus'];
let textcars = cars.toString();
const arraycars = textcars.split(',');
//Given an array of the names of your 
//friends, add the words hello to each element of the array
const names = ['Oleg', 'Larisa', 'Nikita', 'Anfisa', 'Valera'];
function sayHello(name){
    console.log('hello ' + name)
}
for (let n of names) {
    sayHello(n)
}
//Convert numeric array to Boolean
let nums = [1, 3, 5, 7, 9];
let bools = nums.map(Boolean);
//Sort the array [1,6,7,8,3,4,5,6] in descending order
const numarr = [1,6,7,8,3,4,5,6];
const reversed = numarr.reverse(numarr.sort())
//Filter array [1,6,7,8,3,4,5,6] by value> 3
const numarr2 = [1,6,7,8,3,4,5,6]
const filtered = numarr2.filter(i => i > 3)
//Write a function that takes two parameters - an array and
//a number and outputs the index of an array element equal to a number
function indexer (array, k){
console.log(array.indexOf(k))
}
indexer(nums, 1)
//Implement a loop that will print the number 'a' until it is less than 10
for (let i = 0; i < 10; i++){
console.log('a')
}
//Implement a loop that prints prime numbers to the console
for (let i = 2; i < 10; i++){
    let counter = 0
    for (let j = 2; j <= i; j++){
        if (i%j == 0){
            counter++;
        }
    }
    if (counter == 1){
        console.log(i)
    }
    }
//Implement a loop that prints odd numbers to the console
for (let i = 0; i < 10; i++){
    if (i%2 != 0){
        console.log(i)
    }
    }
