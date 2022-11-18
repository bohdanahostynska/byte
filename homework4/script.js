
//1//
// function areNumberseven() {
//     const a =Number (prompt("Введіть перше число:"));
//     const b =Number (prompt("Введіть друге число:"));


//     if ( a==b){
//         alert ("Числа є рівні");
//         console.log(a==b);
//     } else {
//         return false;
//     }
//   }
//   areNumberseven();



  //2//

// function calcSum( ) {
//     const a =Number (prompt("Введіть перше число:"));
//     const b =Number (prompt("Введіть друге число:"));

//     if (a + b) {
//       alert( a + b);
//     } 

//   }
  
//   calcSum( );

    // const a = Number (prompt("Введіть перше число:"));
    // const b = Number (prompt("Введіть друге число:"));  

    // const calcSum = ( a, b) => a + b;

    // alert (a + b);

    // letfirstResSum = calcSum(a,b );

//3//

// function calcExponentiation ( ) {
//         const a = Number (prompt("Введіть перше число:"));
//         const b = Number (prompt("Введіть степінь:"));
    
//         if (a ** b) {
//           alert( a ** b);
//         } 
    
//       }
//       calcExponentiation ( ) 

function calcExponentiation ( number, power = 2 ) {
        return number ** power
      }

   const number = Number (prompt("Введіть число:"));
   const resultPower = calcExponentiation (7);
   alert(resultPower);
   console.log('calcExponentiation result',resultPower);



//4//


// function turnDayintoNumber() {
//     const numberDay = Number (prompt("Введіть число:"));

//     if (numberDay  === 1){
//         alert ( "Понеділок");
//     } else if (numberDay  === 2 ){
//         alert ( "Вівторок");
//     } else if ( numberDay  === 3 ){
//         alert ( "Середа"); 
//     } else if ( numberDay  === 4 ){
//         alert ( "Четвер"); 
//     } else if ( numberDay  === 5 ){
//         alert ( "П'ятниця"); 
//     } else if ( numberDay  === 6 ){
//         alert ( "Субота"); 
//     } else if ( numberDay  === 7 ){
//         alert ( "Неділя"); 
//     }

//     console.log(numberDay) ;
// }

// turnDayintoNumber() 

//5//

// function getDetails() {
//         const userName = prompt("Як вас звати?");
//         const userAge = Number (prompt("Скільки вам років?"));

//        if (userAge >=30 ){
//         alert ( "Вітаю," + userName);
//        } else if ( userAge < 30 ){
//         alert ("Привіт," + userName);
//        }
//     }       

//     getDetails()