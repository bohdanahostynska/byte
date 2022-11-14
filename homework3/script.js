//1//

// const a = 5;
// const b = 10;
// let getSum = a + b;
// console.log(getSum, "addition");

// let operationResult1 = a - b;
// console.log(operationResult1, "substraction");

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
// NaN === NaN && true                                 true
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
//      result = "Перше число є більшим, ніж друге";
//  } else if ( x < y){
//     result =  "Перше число є меншим, ніж друге";
//  } else {
//     result = "Числа є рівними"
//  }

//  console.log("result",result);


//4//


// const e = Number(prompt(" Введіть число: "));

// const f = Number(prompt(" Введіть число: "));

// alert("Знайти суму чисел");

// let getSum1 = e + f;

// alert(getSum1);


// switch (getSum1) {
//     case "getSum1 ":

//         break;

// }

// console.log(getSum1);

//5//

const visitors = Number(prompt( "Скільки вам років?"));
const minAge = 18;
const retireAge = 60;
const visitorAge = 12;
const withAdults = confirm ("Ви з дорослими?");
if ( visitors >= minAge){
    alert("Ласкаво просимо!")
}else if ( visitors >= retireAge || withAdults){
    alert("Ласкаво просимо!");
} else  if ( visitors < visitorAge ){
    alert("Вибачте,але ви не можете увійти");
} else {
    alert("Вибачте,але ви не можете увійти");
}
