const countTrue = (arr) => {
    let value = 0;

    for (let boolean of arr) {
        if (boolean  === true) {
            value += boolean
            console.log(boolean);
        }
    }
    return value;
}

const result = countTrue([true, false, false, true, false]);
const result2= countTrue([false, false, false, false]);
const result3 = countTrue([]);
console.log(result);
console.log(result2);
console.log(result2)