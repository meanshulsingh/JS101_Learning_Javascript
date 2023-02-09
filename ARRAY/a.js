// name

// let anime= ["Goku","vegita","hit","deku","gohan","naruto","kakashi"];

//console.log(anime);

// num

// let num= [1,2,3,4,5,6,7,8];

// console.log(num);

//let mix=["anshul",12,"true","5"]

//console.log(mix);

// index==roll number 

//console.log(anime[6]);

// find the number of elements in the data

// console.log(anime.length);

// to find the last element in data

//console.log(anime[anime.length-1])

// array with loop

// for(i=0;i<anime.length;i++){
//   console.log(anime[i]);
// }

// to add an element in array

// anime.push("itachi");

//  console.log(anime);

// to delete the last element in the an array.

// anime.pop();

// console.log(anime);

// merging two array in one called as spread operator
// syntax is called three dot

// let dc=["superman","batman","flash"];

// let merge=[...anime,...dc];

// console.log(merge);

//replace an element with element

// anime[3]="jiraya";
// anime[2]="Superman"
// console.log(anime);

// numbering the anime

// for(let i=0;i<anime.length;i++){
//   console.log(i+1,anime[i]);
// }

// replace small case a to capital  case A

// let char="a";
// let lc= ["a","b","c"];
// let CC= ["A","B","c"];

// for (i=0;i<lc.length;i++){
//   if (char= lc[i]){
//     char=CC[i];
//   }
// }
// console.log(CC);

// find the average of even number 



// let a=[1,3,-1,-2,-4,19];

// for ( let i=0;i<a.length;i++){
//   if(a[i]<0){
//     a[i]=0;
//   }
//   console.log(a);
// }

// even odd count

//let a=[1,2,3,4,5,6,7,8,9]
// let ecount=0;
// let ocount=0;
// for(let i=0;i<a.length;i++){
//   if(a[i]%2==1){
//     ocount++;
//   }else{
//     ecount++;
//   }
//   }
// console.log(ecount,ocount);

// max and min value in array

// let arr=[1,2,0,-5,3,-8];

// let min=+ Infinity;
// let max=- Infinity;

// for (let i=0;i<arr.length;i++){
//   if (arr[i]<min){
//     min=arr[i];
//   }
//  if (arr[i]>max){
//     max=arr[i]
//  }
//   }
// console.log(min,max);


//reversing an array

// let a=[1,2,3,4,5];

// for(let i;i<=0;i--)


//problem1

// let N=4;
// let arr=[1,2,3,4];

//   for (let i=0;i<N;i++){
//    console.log(arr[i]);
// }

// karo

// let n=5;
// let arr=[5,4,2,3,1];

// for(let i=n-1;i<=0;i--){
  
// }

// let arr=[6,4,2,7,3,5,4,98,42];

//  for(let i=0;i<arr.length;i++){
//   if(arr[i]%2==0){
//      console.log(arr[i]);
//    }

//  }





// let N=210;
// let M=200;

// if(N>M){
//     console.log("Not Yet");
// }
// else if(N<M){
//     console.log("Broken");
// }
// else{
//     console.log("Wao");
// }

// let a="";
// let n=5;
// let arr=[5,4,2,3,1];
    
//  for (let i=n-1;i>=0;i--){
//    (a=a+arr[i]+" ");
// }
// console.log(a);


// let a=[1,2,3,-5,-4,8];

// for(i=0;i<a.length;i++){
//   if (a[i]<=-1){
//     console.log("0");
//   }else {
//   console.log("1");
//   }
// }

// dividing and reversing array

let str="google";
let final ="";
//console.log(str.length)
for (let i=(str.length/2)-1;i>=0;i--){
  final = final + str[i];
}

//console.log(final)

