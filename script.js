const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages , <strong>${
    this.read ? "read" : "not read"
  }</strong>`;
};

Book.prototype.changeReadStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("status").checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayLibrary();
  document.getElementById("newForm").reset();
  document.getElementById("newForm").style.display = "none";
}

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

const btn = document.getElementById("new-book-btn");
btn.addEventListener("click", function () {
  document.getElementById("newForm").style.display = "block";
});

const form1 = document.getElementById("newForm");
form1.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
});

const lib = document.getElementById("library");
lib.addEventListener("click", function (event) {
  if (event.target.classList.contains("delButton")) {
    const index = event.target.getAttribute("data-index");
    myLibrary.splice(index, 1);
    displayLibrary();
  } else if (event.target.classList.contains("change-read-status-button")) {
    const index = event.target.getAttribute("data-index");
    myLibrary[index].changeReadStatus();
    displayLibrary();
  }
});

displayLibrary();
