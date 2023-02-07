const submitBtn = document.querySelector('#submit');
const addBookForm = document.querySelector('#addBook');
const newBookBtn = document.querySelector('.btn');
const cancelBtn = document.querySelector('#cancel');
const overlay = document.querySelector('#overlay');
const books = document.querySelector('.books');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
} 

let library = [];

function addBookToLibrary(book) {
    library.push(book);
}

function displayBooks(library) {
    books.innerHTML = "";
    for (let book of library) {
        let bookChild = document.createElement('div');
        bookChild.classList.add('book');
        bookChild.innerHTML = 
        `<div class="title">Title: ${book.title}</div>
        <div class="author">Author: ${book.author}</div>
        <div class="pages">Pages: ${book.pages}</div>`;
        let readButton = document.createElement('button');
        readButton.style.backgroundColor = (book.read) ? "#5cb85c": "#d9534f";
        readButton.type = "button";
        readButton.innerText = (book.read) ? "Read": "Unread";
        bookChild.appendChild(readButton);
        readButton.addEventListener('click', (e) => {
            book.read = !book.read;
            displayBooks(library);
        });
        let removeBookButton = document.createElement('button');
        removeBookButton.type = "button";
        removeBookButton.style.backgroundColor = "#d9534f";
        removeBookButton.innerText = "Remove Book";
        removeBookButton.addEventListener('click', (e) => {
            // remove book from library
        })
        bookChild.appendChild(removeBookButton);
        books.appendChild(bookChild);
    }
}

submitBtn.addEventListener('click', (e) => {
    
    e.preventDefault();
    if (addBookForm.checkValidity()) {
        addBookForm.style.display = "none";
        overlay.classList.toggle('overlay');
        let elements = addBookForm.elements;
        let title = elements.title.value;
        elements.title.value = "";
        let author = elements.author.value;
        elements.author.value = "";
        let pages = elements.pages.value;
        elements.pages.value = "";
        let read = elements.read.checked;
        let book = new Book(title, author, pages, read);
        addBookToLibrary(book);
        displayBooks(library);
    }
    else {
        addBookForm.reportValidity();
    }
    
    
    
});

newBookBtn.addEventListener('click', (e) => {
    addBookForm.style.display = 'flex';
    overlay.classList.toggle('overlay');
});

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookForm.style.display = "none";
    overlay.classList.toggle('overlay');
});

