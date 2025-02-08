// ? SUM OF NUMBER (NOT ARRAY)
function findSum( num , result) {
    if(num == 0) return result;

    result += Math.floor(num % 10);

    return findSum(num/10,result);
}

console.log(findSum(123,0));


