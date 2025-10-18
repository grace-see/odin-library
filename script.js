const myLibrary = [];

function Book(title, author, pages, beenRead, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
    this.id = id;
}

function addBookToLibrary(title, author, pages, beenRead) {
    myLibrary.push(new Book(title, author, pages, beenRead, crypto.randomUUID()));
}