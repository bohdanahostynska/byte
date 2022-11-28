	
//2//

const salaries = {
    John: parseInt("4300.00"),
    Ann: parseInt("5700.40"),
    Pete: parseInt("4900.95"),
  };
  

  const getSalariesTotal = (salaries) => {
    let total = 0;
    for (let employee in salaries) {
      console.log( employee);
      console.log( salaries[employee])
      total += salaries[employee];
    }

    return total;
  }
  
  const totalResult = getSalariesTotal(salaries);
  console.log(`totalResult`, totalResult)
  

