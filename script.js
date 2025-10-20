const myLibrary = [];
const dialog = document.querySelector("dialog");
const newButton = document.querySelector("#newButton");
const submitButton = document.querySelector("#submitButton");

myLibrary.push(new Book("Frankenstein", "Mary Shelley", 288, true));
myLibrary.push(new Book("A Clockwork Orange", "Anthony Burgess", 228, true));
myLibrary.push(new Book("No Longer Human", "Osamu Dazai", 177, true));
myLibrary.push(new Book("Pride and Prejudice", "Jane Austen", 435, false));
myLibrary.push(new Book("Carmilla", "J. Sheridan Le Fanu", 108, false));

function Book(title, author, pages, beenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, beenRead) {
    myLibrary.push(new Book(title, author, pages, beenRead));
}

function createBook() {

}

function displayBooks() {
    container = document.querySelector("#container");
    for (let i = 0; i < myLibrary.length; i++) {
        //add a book card :)
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        const bookTitle = document.createElement("h2");
        bookTitle.textContent = myLibrary[i].title;
        const information = document.createElement("p");
        information.textContent = myLibrary[i].author + ", " + myLibrary[i].pages + " pages\nHas been read? " + myLibrary[i].beenRead + "\nID: " + myLibrary[i].id;
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(information);
        container.appendChild(bookCard);
    }
}

displayBooks();

newButton.addEventListener("click", () => {
    dialog.showModal();
});

submitButton.addEventListener("click", () => {
    dialog.close();
});