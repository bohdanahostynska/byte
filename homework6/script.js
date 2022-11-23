

                            //Homework//


    //1//


// const getDetails = () =>{
// let userPassword;

// do {

//     userName = prompt(" Ваше ім'я:");
//  if (!userName){
//     alert("Введіть ваше ім'я:");
//     continue;
//  }

//  let properName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
//  let res = properName;
 
//  if(userName[0].toUpperCase() + userName.slice(1).toLowerCase()){
//     alert(properName)
//  }

//  userSurName = prompt(" Ваше прізвище:");
//  if (!userSurName){
//     alert("Введіть ваше прізвище:");
//     continue;
//  }

//  let properSurName = userSurName[0].toUpperCase() + userSurName.slice(1).toLowerCase();
//  let result = properSurName;
 
//  if(userSurName[0].toUpperCase() + userSurName.slice(1).toLowerCase()){
//     alert(properSurName)
//  }
//  console.log('res',res);
//  console.log('result',result);

// const succLogin = true;

//  while(i = 1,  i<=3, i++){ 

    
//  let j;
//   let properPassword = j;
//   for (let j =1; j < 6; j++){          

// userPassword = prompt('Ваш пароль:')
// if (!userPassword){
//     alert("Введіть ваш пароль:");
//     continue;
// } 

// if (userPassword >= properPassword){
//     alert("Ласкаво просимо!");  
// return;
// } else if (userPassword <= properPassword ) {
//     alert("замало символів");  
//     continue;
// }

// }
// }
//  break;

// } while(true);

 
//  alert("Ласкаво просимо!");
// }

// getDetails (); 




//2//

const a = Number(prompt("Введіть перше число:"));
const b = Number(prompt("Введіть друге число:"));

const getRandom = (max) => Math.random() * max;

const getNumb = getRandom(a,b);
 console.log(getNumb);