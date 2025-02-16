// ? SUM OF NUMBER (NOT ARRAY)
function findSum( num , result) {
    if(num == 0) return result;

    result += Math.floor(num % 10)

    return findSum(num/10,result);
}

console.log(findSum(123,0));


//? FIBONACCI SEQUENCE
function fibonacci(n) {
    if(n==0) return 0;
    if(n==1) return 1;
  
    return fibonacci(n-1) + fibonacci(n-2);
  }
  
  console.log(fibonacci(5))