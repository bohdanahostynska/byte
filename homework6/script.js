//Homework//


//1//


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

  
       while(userAttempts !==0){  

        userPassword = prompt(" Введіть ваш пароль(не менше ,ніж 6 символів,які містять в собі символи різного реєстру):");
        console.log(userPassword.toLowerCase() === userPassword);
        console.log(userPassword.toUpperCase() === userPassword);
        console.log(userPassword);
        console.log(!isNaN(userPassword || userPassword.toLowerCase() === userPassword || (userPassword.toUpperCase() === userPassword)))
       

        if(!userPassword.split("").some(el => el.toUpperCase() === el)){
            alert("Данні помилкові.Вел буква" )
            userAttempts--
            return;
        }

        if(!userPassword.split("").some(el => el.toLowerCase() === el)){
            alert("Данні помилкові.Мал буква")
            userAttempts--
            return;
        }

        if(!userPassword.split("").some(el => +el)){
            alert("Данні помилкові.цифра")
            userAttempts--
            return;
        }

        if ((userAttempts === 0)){
            alert("Данні помилкові.цифра")
        }

        alert("Реєстрація успішна")
   
        return userPassword
    }
    

}
const resName = userRegistrationName();
const resSurName = userRegistrationSurName();
const resPassword = userRegistrationPassword();

alert(`Ви зареєстровані під іменем: ${resName} ${resSurName}
Ваш пароль: ${resPassword} `);


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
