/*
Joshua Cominelli
PS2 Problem 2
*/

function* splitWords(sent) {
    s = sent.split(' ');

    for(const word of s) {
        yield word;
    }
}

words = splitWords('All I know is something like a bird within her sang.');

nextWord = words.next().value;

while (nextWord !== undefined){
    console.log(nextWord);
    nextWord = words.next().value;
}