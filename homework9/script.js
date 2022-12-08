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
// const isNegative = (number) => number < 0;
// const increment = (number) => number + 1;
// const logger = (element, index, array) => {
//   console.log(`In array [${array}] on position ${index}: ${element}`);
// };

// const ownForEach = (arr, logger) => {
//     for (let num of arr){
//         logger(num,arr.indexOf(num),arr)
//     }
// }
// ownForEach([1, 2, 3, 4 ,5], logger);

// let arr =[1,2,3]
// const ownMap = arr.map((number) => (number)+1)
// console.log('ownMap ',ownMap );



// ownFilter([-2, 4, -1, 3, 5,-6])

// .filter((number) => number<0)
// console.log('ownFilter',ownFilter,isNegative);