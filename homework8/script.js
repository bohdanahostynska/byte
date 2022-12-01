//1//

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


//2//


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

const getOccurrencesCount = (arr) => {
        let value = 0;
       
    
        for (let elem of arr) {
    
            if ((elem === "apples") || (elem === "oranges") || (elem === "pears")){
                value += elem
                console.log(elem);
            }
    
        }
    
        return value;
    
    
    }
    
    const getCount = getOccurrencesCount([
        "apples",
        "oranges",
        "pears",
        "pears",
        "apples",
        "oranges",
        "oranges",
        "pears",
      ]);

    console.log('getCount', getCount);
    