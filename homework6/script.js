//Homework//


//1//



// let userName;
// let userSurName;
// let userPassword;

const upperCaseString = (userString) => {

    const firstSymbolString = (userString[0]).toUpperCase();
    const symbolString = (userString.slice(1)).toLowerCase();

    return firstSymbolString + symbolString;
}

const userRegistrationName = () => {

    let userName

    do {
        userName = prompt("Введіть ваше ім'я:");

        if (!userName) {
            alert("Введіть хоча б один символ")
        } else {
            break
        }

    } while (true);

    const upperCaseName = upperCaseString(userName)

    return upperCaseName

};

const userRegistrationSurName = () => {

    let userSurName
    do {
        userSurName = prompt("Введіть ваше прізвище:");

        if (!userSurName) {
            alert("Введіть хоча б один символ")
        } else {
            break
        }

    } while (true);

    const upperCaseSurName = upperCaseString(userSurName)

    return upperCaseSurName
}
const userRegistrationPassword = (userString) => {

    let userPassword;
    let userAttempts = 3;

    while(userAttempts !==0) {

        userPassword = prompt(" Введіть ваш пароль(не менше ,ніж 6 символів,які містять в собі символи різного реєстру):");

        
         if (!isNaN(userPassword || userPassword.toLowerCase() === userPassword || (userPassword.toUpperCase() === userPassword))) {
            alert('Некоректний пароль')
          } else if(userAttempts--||(!isNaN(userPassword || userPassword.toLowerCase() === userPassword || (userPassword.toUpperCase() === userPassword)))){
             alert(`Данні помилкові.Кількість спроб залишилось:${userAttempts}`)
          } else {
            alert("Не залишилось більше спроб")
            break
        
        }
    } 
    
    // if(userPassword || userPassword.toLowerCase() === userPassword || (userPassword.toUpperCase() === userPassword)||userPassword.length>6){
    //     alert("Вітаю!Реєстрація пройшла успішно!")
    return userPassword

}
const resName = userRegistrationName();
const resSurName = userRegistrationSurName();
const resPassword = userRegistrationPassword();

alert(`Ви зареєстровані під іменем: ${resName} ${resSurName}
Ваш пароль: ${resPassword} `);

// function getDetails() {

//     let userName;
//     let userSurName;
//     let properName;
//     let properSurName;
//     let isNotValidData = true;
//     let userPassword;
//     let yourProperPassword;


//     do {

//         userName = prompt(" Ваше ім'я:");
//         userSurName = prompt(" Ваше прізвище:");
//         userPassword = prompt(" Введіть ваш пароль(не менше ,ніж 6 символів,які містять в собі символи різного реєстру):");

//         if (!userName) {
//             alert("Введіть ваше ім'я:");
//             continue;
//         }

//         properName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
//         let res = properName;

//         properSurName = userSurName[0].toUpperCase() + userSurName.slice(1).toLowerCase();

//         if (!userSurName) {
//             alert("Введіть ваше прізвище:");
//             continue;
//         }

//         let result = properSurName;

//         yourProperPassword = (userPassword.toLowerCase() === (userPassword.length >= 6)) && (userPassword.toUpperCase() === (userPassword.length >= 6));

//         let result2 = yourProperPassword;


//         if ( !userPassword) {
//             alert("Введіть ваш пароль::");
//             continue;
//         }

//         if(userPassword === yourProperPassword){
//             alert("Реєстрація пройшла успішно!")
//          }


//         userPassword;
//         for (let i=1; i<=3; i-1){  

//         if(userPassword !== yourProperPassword){
//             alert("Некоректний пароль.Спробуйте ще раз" );
//             continue;
//          } 
//         } 

//         } while (isNotValidData);



//    alert("Вітаю,"  + properName + " "+ properSurName + userPassword);
// }

// // alert("Ласкаво просимо!");

// getDetails();

//2//

// const a = Number(prompt("Введіть перше число:"));
// const b = Number(prompt("Введіть друге число:"));

// const getRandom = (min,max) =>{  

// const random = min + Math.random(min) =( max +1 -min);
// return Math.floor(random);
// } 
// const getNumb = getRandom(a,b);

//  console.log('getNumb',getNumb);

//  alert(getNumb)
