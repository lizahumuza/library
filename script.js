const myLibrary = [];

class Book{
  constructor(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }

  info() {
    const isRead = this.read ? 'read' : 'not read';
  return `${this.title} by ${this.author}, ${this.pages} pages , <strong>${isRead}</strong>`;
  }

  changeReadStatus() {
  this.read = !this.read;
  }
}

const btn = document.getElementById("new-book-btn");
const form = document.getElementById("newForm");

btn.addEventListener("click", function () {
  form.classList.remove("hidden");
});

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("status").checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  displayLibrary();

  form.reset();
  form.classList.add('hidden')
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  addBookToLibrary();

});

function displayLibrary() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.textContent = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `<div class=parent>
                       <div class="books">${book.info()}</div>
                       <div>
                       <button data-index="${i}" class="delButton">Delete</button>
                       <button data-index="${i}" class="change-read-status-button">Read Status</button>
                       </div>
                       </div>`;

    libraryDiv.appendChild(bookDiv);
  }
}

const lib = document.getElementById("library");
lib.addEventListener("click", function (event) {
  if (event.target.classList.contains("delButton")) {
    const index = event.target.getAttribute("data-index");
    myLibrary.splice(index, 1);

    displayLibrary();

  } else {
    if (event.target.classList.contains("change-read-status-button")) {
      const index = event.target.getAttribute("data-index");
      myLibrary[index].changeReadStatus();

      displayLibrary();
      
    }
  }
});

displayLibrary();
