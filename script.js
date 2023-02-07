const submitBtn = document.querySelector('#submit');
const addBookForm = document.querySelector('#addBook');
const newBookBtn = document.querySelector('.btn');
const cancelBtn = document.querySelector('#cancel');
const overlay = document.querySelector('#overlay');

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
    for (let book of library) {
        // TODO
        document.createElement('div');
        
    }
}

submitBtn.addEventListener('click', (e) => {
    
    
    if (addBookForm.checkValidity()) {
        addBookForm.style.display = "none";
        overlay.classList.toggle('overlay');
    }
    addBookForm.reportValidity()
    e.preventDefault();
    let elements = addBookForm.elements;
    let title = elements.title.value;
    elements.title.value = "";
    let author = elements.author.value;
    elements.author.value = "";
    let pages = elements.pages.value;
    elements.pages.value = "";
    let read = elements.read.value;
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
});

newBookBtn.addEventListener('click', (e) => {
    addBookForm.style.display = 'flex';
    overlay.classList.toggle('overlay');
});

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookForm.style.display = "none";
    overlay.classList.toggle('overlay');
})