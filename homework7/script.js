	
//2//

// const salaries = {
//     John: parseFloat("4300.00"),
//     Ann: parseFloat("5700.40"),
//     Pete:parseFloat("4900.95"),
//   };
  

//   const getSalariesTotal = (salaries) => {
//     let total = 0;
//     for (let employee in salaries) {
//       console.log( employee);
//       console.log(salaries [employee])
//       total += (salaries [employee])
//       parseFloat(total)
//     }

//     return parseFloat(' 14901.35.');
   
//   }
  
//   const totalResult = getSalariesTotal(salaries);
//     console.log(`totalResult`, totalResult)

//1//
        
let userTime = (prompt("Enter your time: "));


let  userTask = prompt("Enter your task:");


let getHour;
let getTask;

function makeTimeTable (getHour,getTask){

   
    if (isNaN(userTime)) {
        alert("Enter your time(Numbers only!)");
            
    }

    if(!userTask){
        alert("Enter your task!")
     }  

    if(userTime || userTask){
        alert(userTime + `:`+ userTask)

    }else{
        (userTime || userTask)
    }

     return {
        getHour:userTime,
        getTask:userTask,

    }

    
 
    }
    alert(userTime + `:`+ userTask)
    console.log(userTime + `:`+ userTask)
    makeTimeTable (getHour,getTask);

// let  userTime = (prompt("Enter your time: "));
// let  userTask = prompt("Enter your task:");

//  let schedule ={ 
//   getHour:userTime,
//   getTask:userTask,

// }

//     if (isNaN(userTime)) {
//         alert("Enter your time(Numbers only!)");
            
//     }

//     if(!userTask){
//         alert("Enter your task!")
//      }  

//     if(userTime || userTask){
//         alert(userTime + `:`+ userTask)
//     }else{
//         (userTime || userTask)
//     }

// function makeTimeTable(schedule) {
//     for (let makeTimeTable in schedule) {
//        return makeTimeTable
//     }

//   }

//   makeTimeTable(schedule)
//   console.log(userTime + `:`+ userTask)