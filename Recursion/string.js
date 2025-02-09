//? REVERSE STRING
function reverseString(str, index = 0, result = '') {
    if(index === str.length) return result;

    return str[str.length-1 - index] + reverseString(str, index + 1);
}

console.log(reverseString('hi'))


//? DELETE LETTER FROM A STRING
function deleteWord(str,index,result,target) {
    if(index === str.length) return result;

    if(str[index] !== target){
        result += str[index];
    }

    return deleteWord(str,index+1,result,target);
}

console.log(deleteWord('hello',0,'','l'))