//Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
let string = 'ahb acb aeb aeeb adcb axeb';
let re = /a.b/gi;
console.log(string.match(re));
//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
let string1 = '2 + 3 223 2223';
let re1 = /2 \+ 3/;
console.log(string1.match(re1));
//Get the day, month and year of the current date and output it to the console separately
let now = new Date();
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());