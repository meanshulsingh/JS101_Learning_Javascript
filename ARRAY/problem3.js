//Problem 3 : Given an array of numbers find the average of all the even numbers.

let num=4;
let sum=0;
let count=0;

for(let i=1;i<=num;i++){
  if (i%2==0){
    (sum=sum+i);
    count++
  }
}
console.log(sum/count);