//1//

// const a = 5;
// const b = 10;
// let getSum = a + b;
// console.log(getSum, "addition");

// let operationResult1 = a - b;
// console.log(operationResult1, "subtraction");

// let operationResult2 = a * b;
// console.log(operationResult2, "multiplication");

// let operationResult3 = a / b;
// console.log(operationResult3, "division");


//2//


// true && true                                        true
// false || true                                       true
// true && 'false'                                     false
// 0 && 1 || ' ' && 42    0 || null                    true
// null == undefined                                   true
// '' == 0                                             true
// 1 === '1'                                           false
// NaN === NaN && true                                 false
// true || false && true || false,true||false||false   true
// (true || false) && (true || false)                  true
// 10 || 0 && 'dog' || '',  10 || 0 || '',10           true
// (10 || 0) && ('dog' || ''),10 && "dog","dog"        true




//3//

// const x = Number(prompt ( " Введіть число: "));
// const y= Number(prompt ( " Введіть число: "));
// alert ( "Яке число є більшим?");


//  let result;

//  if ( x > y) {
//      alert = "Перше число є більшим, ніж друге";
//  } else if ( x < y){
//      alert =  "Перше число є меншим, ніж друге";
//  } else {
//      alert = "Числа є рівними"
//  }

//  console.log("result",result);


//4//

// const e = Number(prompt(" Введіть перше число: "));

// const f = Number(prompt(" Введіть друге число: "));

// const operation = prompt("Яку дію ви хочете провести?");


// console.log("a");

// switch (operation) {
//         case '+': 
//             alert (e + f);
//            break;         
//         case '-':
//             alert (e -f);   
//             break;
//         case '*':
//              alert (e * f);
//             break;
//         case '/': 
//         alert(e / f);
//             break;  
//             default:
//                 console.log(operation);           
//     }


//5//


// const minAge = 18;
// const visitorsAge = Number(prompt("Скільки вам років?"));
// let withAdults;


// if ((visitorsAge >= 12 && visitorsAge < 18) && withAdults){
//      withAdults = confirm("Ви з дорослими?");
//      alert("Ласкаво просимо!");
//  } else if ( visitorsAge >=18 && visitorsAge <=60) { 
//         alert ("Ласкаво просимо!");
//  } else if (visitorsAge >= 60 && visitorsAge <= 80 && withAdults) { 
//     withAdults = confirm("Ви з дорослими?");
//         alert ("Ласкаво просимо!");   
// // } else if ((visitorsAge >=12 && visitorsAge > 60) && withAdults) {
// //     withAdults = confirm("Ви з дорослими?");
// //     alert("Ласкаво просимо!");
// //  } else  {
// //     alert("Вибачте,але ви не можете увійти");
// //  }
// }
// console.log(visitorsAge)

