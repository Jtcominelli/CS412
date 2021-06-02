/*
Josh Cominelli
PS1 Problem 2
 */

function evaluate(exp){
    [left,op,right] = exp.split('');

    switch (op){
        case '+':
            return ([l,o,r]) => parseInt(l)+parseInt(r);
            break;
        case '-':
            return ([l,o,r]) => parseInt(l)-parseInt(r);
            break;
        case '*':
            return ([l,o,r]) => parseInt(l)*parseInt(r);
            break;
        case '/':
            return ([l,o,r]) => parseInt(l)/parseInt(r);
            break;
        case '^':
            return ([l,o,r]) => parseInt(l)**parseInt(r);
            break;
    }
}

const expression = '9^3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);