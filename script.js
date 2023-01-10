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
        document.createElement('div');
        
    }
}