// for(day=1;day<=3;day++){
//   console.log("i open laptop", day );
//   for (time=1;time<=3;time++){
//   console.log("from 11 to 11", time);
// }
// }

// can you see the day in console

// for (time=1;time<=3;time++){
//   console.log("from 11 to 11", time);
// }

// for (day=1;day<=3;day++){
//   console.log("I go to school day", day);
//   for (sub=1;sub<=6;sub++){
//     console.log("Learn Subject", sub)
//   }
// }

// clock recheck

// for(hour=0;hour>=4;hour++){
//   for(min=1;min>=3;min++){
//     console.log("minute", min)
//   console.log("hour competed", hour);
// }
// }

// class work

// for (farm=1;farm<=4;farm++){
//   console.log("Going to Farm" , farm);
//   for (s=1;s<=5;s++){
//   console.log("*",s);
// }
// }


// creating * in a lone $$imp$$

// for(let farm=1;farm<=5;farm++){
//   console.log("Farm", farm);
  
//   let a=""; //$$for putting * in a line$$
  
//    for(let s=1;s<=3;s++){
//    a=a+"*"
//  //console.log(s,a); //(do it maja ayega)
// }  
// console.log(a) // can't take s in () , gives your output
// }

// let a=""; //$$for putting * in a line$$

// for(let s=1;s<=3;s++){
//   a=a+"*"
//   console.log(s,a);
// }  

// intersting question

// for(farm=1;farm<=5;farm++){
//   console.log("farm",farm)
//   let a="";
// for(seed=1;seed<=farm;seed++){
// a=a+"*";
// }
// console.log(a);
// }
// let a="";
// for(seed=1;seed<=farm;seed++){
// a=a+"*";
// }
// console.log(a);

// making rectangle $$important$$

// for(ver=1;ver<=10;ver++){
//   let a="";
//   for(let hor=1;hor<=10;hor++){
    
//   }
// }

// let num=5;
// let count=0;

// for(i=0;i<=num;i++){
//   for(j=0;j<5;j++){
//     count++;
//   }
// }
//   console.log(count++);


// let N=5;
// let str="nshl"
//   //let vowel=["a","e","i","o","u"];
//   let flag=false;
  
//   for(i=0;i<N-1;i++){
//       if((str[i]=="a")||(str[i]=="e")||(str[i]=="i")||(str[i]=="o")||(str[i]=="u"));
//         //console.log("True");
//         flag=true;
//         break;
//       }
//   if(flag===true){
//       console.log("true");
//   }
//   else {
//       console.log("false");
//   }


// let N=7;
// let str="oanshul";
// let count=0;

//   for(i=0;i<N;i++){
//       if((str[i]=="a")||(str[i]=="e")||(str[i]=="i")||(str[i]=="o")||(str[i]=="u")){
//         //console.log("True");
//         count++;
//       }
//   }
//   if(count>0){
//       console.log("true");
//   }
//   else {
//       console.log("false");
//   }
// let N=5;
// let str="Anshul";
// //str=["Anshul","Singh"];

//  let put=0;
//   for(i=0;i<N;i++){
//      if(str[i]==str[N-i-1]){
//           put=1;
      
//       }
//   }
//   if(put==1){
//       console.log("No");
//   }else {
//       console.log("Yes")
//   }

// You are given a integer num.

// You need to printYesif that integer is a palindrome or else printNo.

// A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward, such asmadamorracecar
// 1221 yes

//$$$$Important$$$$

  // let p = num;
  // let reverse = 0;
  // while(num !== 0){
  //     reverse = (reverse*10)+(num%10);
  //     num = Math.floor(num/10)
  // }
  // if(p==reverse){
  //     console.log("Yes")
  // }
  // else{
  //     console.log("No")
  // }
   
  //type 2


//   let ans = num.toString();
//   let arr = ans.split("").reverse().join("");
//   if(ans == arr){
//       console.log("Yes")
//   }else{
//       console.log("No")
//   }

//tough question 


// let num=4;
// var sum =0;
//     for(var i=1; i<=num; i++){
//         for(var j=1; j<=num; j++){
//             if(j % 2 == 0){
//                 sum  += j
//             }
//             console.log(sum)
//         }
//         break;
//     }