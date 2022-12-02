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
//     let value = 0;
   

//     for (let elem of arr) {

//         if (elem === 'a'){
//             value += elem
//             console.log(elem);
//         }
        
//         if (elem === 'b'){
//             value += elem
//             console.log(elem);

//         }
        
//         if(elem === 'v'){
//             value += elem
//             console.log(elem);
//         }

//     }

//     return value;


// }

// const resultCount = getOccurrencesCount(["a", "v", "a", "b", "b"]);
// console.log('resultCount',resultCount);

// const getOccurrencesCount = (arr) => {
//         let value = 0;

//         for (let elem of arr) {
    
//             if((elem === "apples") || (elem === "oranges") || (elem === "pears")){
//                 value += elem
//                 console.log(elem);
//             }
    
//         }
    
//         return value;
//     }
    
//     const getCount = getOccurrencesCount([
//         "apples",
//         "oranges",
//         "pears",
//         "pears",
//         "apples",
//         "oranges",
//         "oranges",
//         "pears",
//       ]);

//     console.log('getCount', getCount);
    

//////3//////
  
// (1)
    //  const findExcess = ([0, 1, 2]);

    //     function isPrime(number) {
    //       for (let i = 0; number > i; i++) {
    //         if (number % i === 0) {
    //           return false
    //       }else{
    //         return number < 2
    //       }
    //     }
      
    // }    
    //     console.log (findExcess.filter(isPrime))

// (2)
// const findExcess = ([1, 2, 3]);

// function isPrime(number) {
//   for (let i = 0; number > i; i++) {
//     if (number % i === 0) {
//       return false;
//     }else{
//         return number == 2;
//     }
//   }

// }

// console.log (findExcess.filter(isPrime))


//(3)

    //  const findExcess = ([2, 6, 8, 10, 3]);

    //     function isPrime(number) {
    //       for (let i = 2; number > i; i++) {
    //         if (number % i) {
    //           return true
    //       }else{
    //         return false
    //       }
    //     }
      
    // }    
    //     console.log (findExcess.filter(isPrime))

  
      
//(4)
        
// const findExcess = ([0, 0, 3, 0, 0]);

// function isPrime(number) {
//   for (let i = 0; number >= i; i++) {
//     if (number !== 0) {
//       return true
//   }else{
//     false
//   }
// }

// }  
// console.log (findExcess.filter(isPrime))

//(5)

        
// const findExcess = ([1, 1, 0, 1, 1]);

// function isPrime(number) {
//   for (let i = 1; number >= i; i++) {
//     if (number === 1) {
//       return false
//   }else{
//     true
//   }
// }

// }  
// console.log (findExcess.filter(isPrime))