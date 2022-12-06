//////1//////

// const countTrue = (arr) => {
//     let value = 0;

//     for (let boolean of arr) {
//         if (boolean  === true) {
//             value += boolean
//             console.log(boolean);
//         }
//     }
//     return value;
// }

// const result = countTrue([true, false, false, true, false]);
// const result2= countTrue([false, false, false, false]);
// const result3 = countTrue([]);
// console.log(result);
// console.log(result2);
// console.log(result2)


/////////2/////


// const getOccurrencesCount = (arr) => {
//     let getCount = []

//     for (let elem of arr) {

//       if(!getCount[elem]){
//        getCount[elem]=1;
//        }else{
//         getCount[elem] +=1;
//     }
//   }
//   return getCount
// }
// const resultCount = getOccurrencesCount(["a", "v", "a", "b", "b"]);
// console.log('resultCount',resultCount);

    // const getCount = getOccurrencesCount([
    //     "apples",
    //     "oranges",
    //     "pears",
    //     "pears",
    //     "apples",
    //     "oranges",
    //     "oranges",
    //     "pears",
    //   ]);

    // console.log('getCount', getCount);
   
      

//////3//////
  
// (1)

//  const findExcess = (arr) =>{ 
  

//     const arrayOfOdd = []
//     const arrayOfEven = []
 
//      for (let number of arr){ 
//              if (( number % 2 == 0)) {
//                  console.log('number is even',number);
//              } else {
//                  arrayOfOdd.push (number);
//                  console.log('number is odd',number);
//              }
//              console.log(number);

//          } 

//          if(arrayOfEven.length > arrayOfOdd.length){
//             return arrayOfOdd[0]
//          }else{
//             return  arrayOfEven[0]
//          }
       
 
//      }

    //  const evenArray = findExcess([0, 1, 2]);
    //  const evenArray = findExcess ([1, 2, 3]);
    //  const evenArray = findExcess ([2, 6, 8, 10, 3]);
    //  const evenArray = findExcess ([0, 0, 3, 0, 0]);
    //  const evenArray = findExcess ([1, 1, 0, 1, 1]);
    //  console.log ('evenArray',evenArray)
