// You are given an array, whose size is stored in a variable of sizen

// The array is stored in a variable with the name,arr

// You have to print the sum of all elements of an array

// For example, the value stored inN = 5, and the array isarr = [1 2 3 4 5]

// Therefore, the required output will be
// 10
// 1 2 3 1 5 2 3 4 5 6

let arr=[1,2,3,1,5,2,4,4,5,6];
let n=10;
let sum=0;

for (i=0;i<=n;i++){
  if(i<n){
  sum=sum+arr[i];
  }
}console.log(sum);

