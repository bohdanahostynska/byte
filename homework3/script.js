//1//

const a = 5;
const b = 10;
let operationResult = a + b;
console.log(" 5 + 10 =" , operationResult , "addition");

let operationResult1 = a - b;
console.log(" 5 - 10 =" , operationResult1 ,"substraction");

let operationResult2 = a * b;
console.log(" 5 * 10 =" , operationResult2 ,"multiplication");

let operationResult3 = a / b;
console.log(" 5 / 10 =" , operationResult3 , "division");


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

// const compare = Number(prompt ( " Введіть два числа: "));
// alert ( "Яке число є більшим?");

//  const x = 10 ;
//  const y = 3 ;

//  let result;

//  if ( x > y) {
//      result = "Перше число є більшим, ніж друге";
//  } 
 
//  console.log("result",result);

//  var c = 5 ;
//  var d = 5 ;

//  let result1;

//  if ( c == d) {
//      result1 = "Числа є рівними";
//  } 

//  console.log("result1",result1);


//4//



// const operationAddition = Number(prompt ( " Знайдіть суму чисел: "));


// const e = 8;
// const f = 5;

// let operationResult4 = e + f;
// alert (operationResult4 );


// switch (operationAddition){
//     case "e + f":   
  
//     break;

// }

// console.log (operationResult4 );

//5//

// const minAge = 12;
// const visitorAge = Number(prompt( "Скільки вам років?"));
// const withAdults = confirm ("Ви з дорослими?");
// if ( visitorAge >= minAge || withAdults){
//     console.log("Ласкаво просимо!")
// }else{
//     console.log("Вам недостаньо років для того,щоб увійти")
// }
