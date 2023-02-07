//In a try catch construction, wrap the code: console.log (a), let a = 3. 
//And display an error - 'let must be declared' before use. 
//When running 1/0, the error 'cannot be divided by zero'

try{
    console.log(a)
    let a = 3;
} catch {
    console.log('Let must be declared')
}
 
try{
    let div = 1/0;
    if (div === Infinity) {
        throw new Error('Cannot be divided by zero');
    }
    console.log(div);
} catch (err) {
    console.log(err.message );
}
