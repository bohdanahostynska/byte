const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "Фіцджеральд", name: "Великий Гетсбі", isReading: false },
  { id: 2, author: "Шевченко", name: "Катерина", isReading: false },
  { id: 3, author: "Оруел", name: "1984", isReading: false },
  { id: 4, author: "Сервантес", name: "Дон Кіхот", isReading: false },
  {
    id: 5,
    author: "Джейн Остін",
    name: "Гoрдість і упередження",
    isReading: false,
  }
]


function library() {
 
let action = prompt("Action?");

  if (action === null) {
    alert("Bye!");
    return;
  }

  action = action.toLowerCase().trim();

  switch (action) {
    case "take":
      takeBook();
      break;
    case "return":
      returnBook();
      break;
    case "add":
      addBook();
      break;
    default:
      alert("No action!");
  }
 }

const takeBook = () => {
  const availableBooksNames = books
    .filter((book) => !book.isReading)
    .map((book) => ` - ${book.name} ${book.author}`)
    .join("\n");

  let desiredBookName = prompt(`Enter book name:\n${availableBooksNames}\n${availableBooksAuthor}||`);

  if ((!desiredBookName)||(!desiredBookAuthor)){
    alert("No book name");

    return;
  }

  desiredBookName = desiredBookName.trim().toLowerCase();

  const desiredBook = books.find((book) => {
    return book.name.toLowerCase() === desiredBookName;
  });

  if (!desiredBook) {
    alert("No book with this name");

    return;
  }

  if (desiredBook.isReading) {
    alert("Sorry, this book is currently unavailable.");

    return;
  }

  desiredBook.isReading = true;

  alert(`Thnx! Your book id is${desiredBook.id}`);

  console.log(`books`, books);
};

const returnBook = () => {
  const returningBookId = Number(prompt("Enter book id:"));

  if (!returningBookId) {
    alert("No book id");

    return;
  }

  const currentBook = books.find((book) => book.id === returningBookId);

  if (!currentBook) {
    alert("Invalid book id");

    return;
  }

  if (!currentBook.isReading) {
    alert("This book is available");

    return;
  }

  currentBook.isReading = false;
  alert(`Thanks, come back to us again! Did you enjoy reading "${currentBook.name}"? `);
};

const addBook = () => {
  const name = prompt("Book name");
  const author = prompt("Book Author");

  const newBook = {
    name,
    author,
    isReaading: false,
    id: generateBookId(),
  };

  
  console.log(`newBook`, newBook);
  books.push(newBook);

  alert(`Book was added! Libary id: ${newBook.id}`);
};

function generateBookId () {
  let isBookWithIdExists = true;
  let generatedId;

  do {
    generatedId = Math.ceil(Math.random() * 1000);
    isBookWithIdExists = Boolean(books.find((book) => book.id === generatedId));
  } while (isBookWithIdExists);

  return generatedId;
}



