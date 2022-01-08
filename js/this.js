// const bookShelf = {
//   authors: ["Bernard Cornwell", "Robert Sheckley"],
//   getAuthors1() {
//     return this.authors;
//     },
  
//    getAuthors2() {
//     return bookShelf.authors;
//     },
   
//    addAuthor(authorName) {
//      this.authors.push(authorName);
//    },
// };

// console.log(bookShelf);
// console.log(bookShelf.getAuthors1());
// console.log(bookShelf.getAuthors2());

// bookShelf.addAuthor("Tanith Lee");
// console.log(bookShelf.getAuthors1());




// ------------- задача 2 --------------

class User {
  // Синтаксис объявления метода класса
  constructor(name, email) {
    // Инициализация свойств экземпляра
    this.name = name;
    this.email = email;
  }
}

console.log(User);

const mango = new User("Mango", "mango@mail.com");
console.log(mango);