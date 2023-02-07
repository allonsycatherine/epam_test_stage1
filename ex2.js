//create car object
const Car = {
    color: 'black',
    power() {
        console.log('engine power = 103 kW')
    }
}
Car.color = 'green';

console.log(Car.color)
Car.power()

//Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
function counter(pears, apples) {
    return pears + apples;
}
counter(20,40)

//Your name is saved in the payment terminal...
function terminal(name){
    if (name != undefined){
        console.log('hello ' + name);}
    else {
        console.log('there is no such name')  
    }
}
terminal('Kate')
terminal()

//Write a function for calculating the type of argument and type output to the console
function typing(arg1){
    console.log(typeof arg1);
}
typing('cat')
typing(234.4)

//Write a function that determines whether a number is prime or not
function prime(num) {
    let isPrime = true
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(num + ' is a prime number');
    }
    else {
        console.log(num + ' is not a prime number');
    }
}
prime(2)
prime(9)