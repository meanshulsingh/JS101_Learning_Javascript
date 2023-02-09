// // Problem 2: Print Prime Numbers from 1 to given limit

let N=31;
let prime = [];

for (let i=2;i<=N;i++){  
  let isprime=true;
  
  for(let j=2;j<i;j++){
    
    if(i%j===0){
      isprime=false;
      break;
    }
  }
  if(isprime){
    prime.push(i);
  }
}
return prime;

console.log(prime);
