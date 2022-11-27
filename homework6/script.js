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
    let isAuthSuccess = false;
    let userAttempts=3;

  
       while(userAttempts !==0){  

        userPassword = prompt(" Введіть ваш пароль(не менше ,ніж 6 символів,які містять в собі символи різного реєстру):");

        if (userPassword.split("").some(el => el.toUpperCase() === el) || (userPassword.split("").some(el => el.toLowerCase() === el)) ||(userPassword.split("").some(el => +el))){
            alert("Вітаю!Реєстрація пройшла успішно!")
            isAuthSuccess = true;
          return;       
        }

        if ( userPassword.length < 6){
            alert("Замало символів")
            continue;
        } else if   (userAttempts-- ||(!userPassword.split("").some(el => el.toUpperCase() === el) || (!userPassword.split("").some(el => el.toLowerCase() === el)) ||(!userPassword.split("").some(el => +el)))){
            alert(`Данні помилкові.`+ userAttempts);
            continue;
        } 
        
    
   
        return userPassword
    }
    
if(isAuthSuccess){  
    alert("Вітаю!Реєстрація пройшла успішно!")
}else{
    alert("Спроби закінчилися")
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
