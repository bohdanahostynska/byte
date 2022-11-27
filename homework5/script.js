
//HOMEWORK//

//3//

const LOGIN = "ADMIN";
const PASSWORD = "123456";

const authorize = () => {
    let userLogin;
    let userPassword;
    let isAuthsuccess = false;
    let userAttempts =3;


    while (userAttempts !==0) {

        userLogin = prompt(" Логін:");
        if (!userLogin) {
            alert("Введіть ваш логін");
            continue;
        }
        userPassword = prompt("Пароль:");
        if (!userPassword) {

            alert("Введіть ваш пароль");
            continue;
        }

        if (userPassword === PASSWORD || userLogin === LOGIN) {
            isAuthsuccess = true;
            alert("Welcome");
            return;
        
        }
        if(userAttempts-- ||(userPassword !== PASSWORD || userLogin !== LOGIN)){
            isAuthsuccess = false;
            alert('Ваш дані невірні. Будь ласка, перевірте їх і спробуйте ще раз.Залишилось спроб:'+ userAttempts);
            continue;
        }

    }  
    
    if(isAuthsuccess ){
        alert("Вітаю!Ваші дані вірні!")
    }else{
        alert("У вас не залишилось більше спроб")
    }

} 

authorize();

//1//

// for (let i = 1; i < 10; i++) {
//    const a = i;
//    console.log("i",i);
// }

// for (let j = 20; j >=10; j--) {
//     const b = j;
//     console.log("j",j);
//  }

// let d = 1;
// while (d <= 10) { 
//   console.log("d",d);
//   d++;
// }


// let i = 20;
// while (i >= 10) { 
//   console.log("i",i);
//   i--;
// }

//   let d = 1;

// do {
//  d <=10;
//   console.log( "d",d);
//   d++;
// } while (d <=10);


// let i = 20;

// do {

//  i >=10;
//   console.log( "i",i);
//   i--;

// } while (i >=10);

//2//


//  const n= Number(prompt("Введіть число до якого слід вирахувати прості числа:"));

//  showPrimenumbers:

//  for (let i = 2; i <= n; i++) { 

//    for (let j = 2; j < i; j++) { 
//      if (i % j == 0) continue showPrimenumbers; 
//      console.log("i",i);
//    }

//    alert( i ); 
//  }