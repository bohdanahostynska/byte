/////1.1/////

// const digits =[1, 2, -10, -2, 7]

// const sortedDigits = digits.map((digit) => digit>0);

// console.log(' sortedDigits', sortedDigits);

//////1.2//////

// const users = [
//     {
//       name: 'Sam',
//       role: 'admin',
//       age: 25,
//     },
//       {
//       name: 'Peter',
//       role: 'admin',
//       age: 16,
//     },
//       {
//       name: 'Pablo',
//       role: 'admin',
//       age: 32,
//     },
//       {
//       name: 'Enrico',
//       role: 'client',
//       age: 43,
//     },
//       {
//       name: 'Mary',
//       role: 'client',
//       age: 34,
//     },
//       {
//       name: 'Katerine',
//       role: 'guest',
//       age: 17,
//     },
//   ]

//   const filterAdultAdmin=(Arr)=>{  
//     return Arr
//     .filter((user)=> user.age >=18 && user.role ==='admin')
//      .map((user) => user.name)
//     }
//     const adultAdmins = filterAdultAdmin(users)
//     console.log(`adultAdmins`, adultAdmins);
  
   
////1.3////

// const numbers = [1, 10, 17, 24, 45];
// const numbersTotal = numbers.reduce((arr,value) =>{

//     console.log('value',value);
//     arr += value / numbers.length
//     return arr;
// },0)

// console.log('numbersTotal',numbersTotal);


//////2/////


// const logger = (element, index, array) => {
//   console.log(`In array [${arr}] on position ${index}: ${element}`);
// };

// const ownForEach = (arr, logger) => {
//     for (let num of arr){
//         logger(num,arr.indexOf(num),arr)
//     }
// }
// ownForEach([1, 2, 3, 4 ,5], logger);


////////////

// const increment = (number) => number + 1;
// const ownMap = (arr,increment)=> {

//     let arrClone = [];

//     for (let number of arr) {
//             arrClone.push(increment(number))   
        
//     }
//     return arrClone;
// }

// const result = ownMap([1, 2, 3, 4 ,5],increment);
// console.log('result',result);

/////////////////

// const isNegative = (number) => number < 0;
// const ownFilter = (arr,isNegative)=> {

//     let arrClone = [];

//     for (let number of arr) {

//         if(isNegative(number)){  
//             arrClone.push(number)  
//         }
//     }
//     return arrClone;
// }

// const result =  ownFilter([-2, 4, -1 ,5,-6],isNegative);
// console.log('result',result);

// ///3///
// const data = [
//     {
//       name: "John",
//       age: 24,
//       position: "senior",
//       isActive: false,

//     },
//     {
//       name: "Peter",
//       age: 33,
//       position: "middle",
//       isActive: false,

//     },
//     {
//       name: "Sam",
//       age: 29,
//       position: "junior",
//       isActive: true,

//     },
//     {
//       name: "Mary",
//       age: 24,
//       position: "middle",
//       isActive: false,

//     },
//     {
//       name: "Steve",
//       age: 23,
//       position: "middle",
//       isActive: true,

//     },
//     {
//       name: "Kate",
//       age: 31,
//       position: "middle",
//       isActive: false,

//     },
//     {
//       name: "Sally",
//       age: 19,
//       position: "junior",
//       isActive: false,
//     },
//     {
//       name: "Jack",
//       age: 19,
//       position: "middle",
//       isActive: true,
//     },
//   ];
  
  

// const filterData =(dataArray ,objectToFilter) =>{
//     let result = dataArray.filter(item => {

//    console.log('keys:',Object.keys(objectToFilter))

//     return Object.keys(objectToFilter).every(key=>{

//         return item[key] === objectToFilter[key]
//     })
//     })
//     return result



// }
// const resFilt = filterData(data, { age:19})
// console.log('resFilt ',resFilt );