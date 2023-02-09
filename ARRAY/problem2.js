//Problem 2 : Given a character in lower case print the upper case character

let character="a";
let lc=["a","b","c","d"];
let UC=["A","B","C","D"];

for (let i=0;i<=lc.length;i++){
  if(character=lc[i]){
    character=UC[i];
  }
}
console.log(UC);
