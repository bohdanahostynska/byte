	
//2//

// const salaries = {
//     John: "4300.00",
//     Ann: "5700.40",
//     Pete:"4900.95",
//   };
  

//   const getSalariesTotal = (salaries) => {
//     let total = 0;
//     for (let employee in salaries) {
//       console.log( employee);
//       console.log(salaries [employee])
//       total += (salaries [employee])
//       parseFloat(total)
//     }
//  let result = total.toFixed(2)

//  return result
   
//   }
  
//   const totalResult = getSalariesTotal(salaries);
//     console.log(`totalResult`, totalResult)

//1//
    

const makeASchedule = () => {

    const schedule ={}
    let end = false

    do{
        let time = (prompt("Enter your time: "));
        let task = (prompt("Enter your task: "));

        if ((task == null || time == null)){
            end = true
        }else{
        schedule[time] = task;
        alert("Task added")
        }

    }while(!end)

    return  schedule

}
let  timetable = makeASchedule()
console.log( timetable);



