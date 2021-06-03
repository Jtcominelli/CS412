/*
Joshua Cominelli
PS2 Problem 1
*/

function* fibs() {
    let [val1, val2, result] = [0, 1, 0];
    while(true) {
        result = val1 + val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

function* evenFibs() {
    fib = fibs();
    while(true) {
        result = fib.next().value;
        if(result % 2 === 0) {
            yield result;
        }
    }
}

myFibs = evenFibs();
let count = 6;
while (count --> 0) {
    console.log(myFibs.next().value)
}