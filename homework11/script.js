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

  const createBlogArticle = (name, brand, price, properties) =>{

    console.log( products);

    console.dir( products);
    const blogContainer = document.createElement ('div');
    const nameElement = document.createElement ('h2');
    console.dir( nameElement);
    const brandElement = document.createElement ('h3');
    const priceElement = document.createElement ('h4');
    const propertiesContainer = document.createElement ('div');
  
    nameElement.innerText = name;
   
    brandElement.innerText = brand;

    priceElement.innerText = price;

   properties.forEach((item) => {
      const itemElement = document.createElement("p");
      itemElement.innerText = item;
      propertiesContainer.append(itemElement);
      console.log(propertiesContainer);
    })    

  blogContainer.append(nameElement,brandElement, priceElement,propertiesContainer);
  console.log(blogContainer);

  return blogContainer;
}

  const blogItemElement = createBlogArticle(products);
  console.log( products);
//   document.body.append(blogItemElement);


