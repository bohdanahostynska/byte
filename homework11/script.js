// const products = [
//     {
//       name: "Iphone 12",
//       brand: "Apple",
//       price: 3200000,
//       properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
//     },
//     {
//       name: "Galaxy S20 Ultra",
//       brand: "Samsung",
//       price: 2900000,
//       properties: ["120 hz screen", "Water resistance"],
//     },
//     {
//       name: "MI 9",
//       brand: "Xiaomi",
//       price: 1300000,
//       properties: ["Best price", "Pay less - get more!"],
//     },
//   ];

  const createBlogArticle = (title, subtitle, pretitle, text) =>{

    const blogContainer = document.createElement ('div');
 
    // const titleElement = document.createElement ('h2');
    // const subtitleElement = document.createElement ('h3');
    // const pretextElement = document.createElement ('h4');
    // const textContainer = document.createElement ('div');
  
    // titleElement.innerText =   title;
    // subtitleElement.innerText = subtitle;
    //  pretextElement.innerText = pretext;

    //  text.forEach((paragraph) => {
    //     const paragraphElement = document.createElement("p");
    //     paragraphElement.innerText = paragraph;

    //     textContainer.append(paragraphElement);
    //  });

    blogContainer.innerHTML =`
    <h2>${title}</h2>
    <h3>${subtitle}</h3>
    <h4>${pretitle}</h4>
    <div>${text.map((textItem) => `<p>${textItem}</p>`).join("")}</div>
    `;

    return blogContainer;

  };



  const blogItemElement = createBlogArticle( "phone","sumsung","2000","best price");
     
  document.body.append(blogItemElement);


