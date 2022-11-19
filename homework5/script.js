
// const LOGIN = "ADMIN";
// const PASSWORD = "123456";

// const authorize = () =>{
//     let userLogin;
//     let userPassword;


// do {
//     userLogin = prompt(" Логін:");
//  if (!userLogin){
//     alert("Введіть ваш логін");
//     continue;
//  }

//     userPassword = prompt("Пароль:");
//  if (!userPassword){
//     alert("Введіть ваш пароль");
//     continue;
//  }

//  if (userPassword !== PASSWORD || userLogin !== LOGIN){
//     alert("Ваш дані невірні. Будь ласка, перевірте їх і спробуйте ще раз");
//     continue;
//  }

//  break;

// } while(true);

// alert("Ласкаво просимо!")
// }

// authorize (); 

// const drawPyramid = (height) =>{
//     for (let i =0; i < height; i++){
//         let spaceBefore = '';
//         let stars = '';

//         for ( let j = 0; j < 2 * i + 1; j++) {
//             stars += "*";
//         }

//         for (let k =0; k < height - i -1; k++){
//             spaceBefore += " ";
//         }
//         console.log(spaceBefore  + stars);
//     }

// };

// const desiredHeight = Number (prompt ("Якою повинна бути висота піраміди?"));
// drawPyramid(desiredHeight)
                              //HOMEWORK//

//3//

// const LOGIN = "ADMIN";
// const PASSWORD = "123456";

// const authorize = () => {
//     let userLogin;
//     let userPassword;
//     let isAuthsuccess = false;

//     userLogin = prompt(" Логін:");
//     userPassword = prompt("Пароль:");

//     if (userPassword === PASSWORD || userLogin === LOGIN) {
//         isAuthsuccess = true;
//         alert("Welcome");
//     }

//     do {

//         for (let i = 1; i <= 3; i++) {

//             userLogin = prompt(" Логін:");
//             if (!userLogin) {
//                 alert("Введіть ваш логін");
//                 continue;
//             }

//             userPassword = prompt("Пароль:");
//             if (!userPassword) {
//                 alert("Введіть ваш пароль");
//                 continue;
//             }

//             if (userPassword !== PASSWORD || userLogin !== LOGIN) {
//                 isAuthsuccess = false;
//                 alert("Ваш дані невірні. Будь ласка, перевірте їх і спробуйте ще раз");
//            } 
//        } while (isAuthsuccess);
//         alert("Вибачте,але ви перевищили кількість спроб"); 

// }while (!isAuthsuccess);

// }

// authorize();



