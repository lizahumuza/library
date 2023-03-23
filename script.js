let myLibrary=[]
  
function Book(title, author, pages, read) {
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;  
}

Book.prototype.info = function() {
   return(`${this.title} by ${this.author}, ${this.pages} pages , <strong>${this.read ? "read" : "not read"}</strong>`)
}

Book.prototype.changeReadStatus = function () {
this.read = !this.read;
}

  function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("status").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayLibrary();
    document.getElementById("newForm").reset();
    document.getElementById("newForm").style.display = "none";
  }

  function displayLibrary() {
    let libraryDiv = document.getElementById("library");
    libraryDiv.textContent = "";
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
      let bookDiv = document.createElement("div");
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

let btn = document.getElementById("new-book-btn")
btn.addEventListener("click", function () {
      document.getElementById("newForm").style.display = "block";
    });

let form1 = document.getElementById("newForm")
form1.addEventListener("submit", function (event) {
      event.preventDefault(); 
      addBookToLibrary();
    }); 

let lib= document.getElementById("library")  
lib.addEventListener("click", function (event) {
      if (event.target.classList.contains("delButton")) {
        let index = event.target.getAttribute("data-index");
        myLibrary.splice(index, 1);
        displayLibrary();
      } else if (
        event.target.classList.contains("change-read-status-button")
      ) {
        let index = event.target.getAttribute("data-index");
        myLibrary[index].changeReadStatus();
        displayLibrary();
      }
    });     
    
    
//myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
//myLibrary.push(new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, true));

displayLibrary();