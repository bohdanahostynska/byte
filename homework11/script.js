

const products = [
    {
        name: "Iphone 12",
        brand: "Apple",
        price: 3200000,
        properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
        name: "Galaxy S20 Ultra",
        brand: "Samsung",
        price: 2900000,
        properties: ["120 hz screen", "Water resistance"],
    },
    {
        name: "MI 9",
        brand: "Xiaomi",
        price: 1300000,
        properties: ["Best price", "Pay less - get more!"],
    },
]

const createListFromAray = (arr) => {

    const list = document.createElement("div");
    const listItem = document.createElement("div");

    arr.forEach((item) => {
        listItem.innerHTML += (`
        <div>
          <h2>${item.name}</h2>
          <h3>${item.brand}</h3>
          <h4>${item.price}</h4>
        <ul>
        ${item.properties.map(properties => `<li>${properties}</li>`).join('')}
        </ul>
        </div>
        `);

        list.append(listItem);
    });

    document.body.append(list)
}
createListFromAray(products)
