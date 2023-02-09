// Description

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to traverse the array, and print sum of even elements

// Print each number on a new line

// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5

// The sum of even elements are : 2 + 4 = 6
// 7
// 155 136 172 68 38 65 128


let arr=[155,136,172,68,38,65,128];
let n=7;
let sum=0;

for(let i=0;i<=n;i++){
  if(arr[i]%2===0){
    sum=sum+arr[i];
  }
  else{
    continue;
  }
  i++;
}console.log(sum);