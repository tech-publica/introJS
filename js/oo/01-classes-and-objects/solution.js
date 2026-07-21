class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  describe() {
    return `${this.title} was written by ${this.author}.`;
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien");
const frankenstein = new Book("Frankenstein", "Mary Shelley");

console.log(theHobbit.describe());
console.log(frankenstein.describe());
