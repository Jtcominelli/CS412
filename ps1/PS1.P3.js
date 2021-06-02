/*
Josh Cominelli
PS1 Problem 3
 */

const decorate = (input,func) => func(input);
const stuff = (s,c) => s.replace(/c/gi,'@'+c);

//expression 1
const output1 = decorate('supercalifragilisticexpialidocious', function(s) {return stuff(s,'c').split('@');});
console.log(output1);

//expression 2
const output2 = decorate('supercalifragilisticexpialidocious', function(s)
{
    const obj = {
                    originalString: s,
                    modifiedString: s.replace(/a/gi,'A'),
                    numberReplaced: (s.match(/A/gi) || []).length,
                    length: s.length
                }
    return obj;
});
console.table(output2);