//Practice//

//1//

// const getRGBfromHex =(hexCode)=>{

//     const red =hexCode.slice(1, 3);
//     const green =hexCode.slice(3, 5);
//     const blue =hexCode.slice(5, 7);

//     console.log("red",red);
//     console.log("green",green);
//     console.log("blue",blue);

//     const decimalRed = parseInt (red, 16);
//     const decimalGreen = parseInt (green, 16);
//     const decimalBlue = parseInt (blue, 16);

//     return `rgb(${decimalRed},${decimalGreen},${decimalBlue})`
// }

// const rgbResult = getRGBfromHex("#ffffff");
// console.log("rgbResult",rgbResult);

//2//
// const getHexFromRGB = (r, g, b) => {
//     return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
//   }
// const resultHex = getHexFromRGB(123, 34, 78);
// console.log(`resultHex`, resultHex);

// const maskCreditCard = (cardNumber) => {
//     const MASK = '****';
//     let result = '';
  
//     for(let i = 0, j = 1; i < cardNumber.length; i += 4, j++) {
//       const numbers = cardNumber.slice(i, i + 4);
//       let maskingResult;
//       console.log(`numbers`, numbers);
  
//       if (j === 2 || j === 3) {
//         maskingResult = MASK
//       } else {
//         maskingResult = numbers
//       }
  
//       if (j !== 4) {
//         result += `${maskingResult} `
//       } else {
//         result += maskingResult
  
//       }
  
  
//     }
  
//     return result
//   }
  
//   const res = maskCreditCard('5168111147864573');
  
//   console.log(`res`, res)

                            //Homework//


    //1//



const getDetails = () =>{


do {

    userName = prompt(" Ваше ім'я:");
 if (!userName){
    alert("Введіть ваше ім'я:");
    continue;
 }

 let properName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
 let res = properName;
 
 if(userName[0].toUpperCase() + userName.slice(1).toLowerCase()){
    alert(properName)
 }

 userSurName = prompt(" Ваше прізвище:");
 if (!userSurName){
    alert("Введіть ваше прізвище:");
    continue;
 }

 let properSurName = userSurName[0].toUpperCase() + userSurName.slice(1).toLowerCase();
 let result = properSurName;
 
 if(userSurName[0].toUpperCase() + userSurName.slice(1).toLowerCase()){
    alert(properSurName)
 }
 console.log('res',res);
 console.log('result',result);

 userPassword= prompt('Ваш пароль:')
if (!userPassword){
    alert("Введіть ваш пароль:");
    continue;
 }

 let properPassword;

for (let i=1; i>=6; i++);


while (userPassword === properPassword){
    alert("Ласкаво просимо!");  
   return;
} 

if (userPassword !== properPassword){  
    alert("Кількість символів не повинна бути менше шести");
    alert("Спробуйте,будь ласка,ще раз")
    return;
}

 break;

} while(true);

 
 alert("Ласкаво просимо!");
}

getDetails (); 