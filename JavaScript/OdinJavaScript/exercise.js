function book(title, autor, pages, read) {
  this.title = title;
  this.autor = autor;
  this.pages = pages;
  this.read = function read(isRead) {
    if (isRead) {
      console.log("Okundu");
    }
    else {
      console.log("Okunmadı");
    }
  }
  this.info = function () {
    console.log(this.title + " by " + this.autor + " , " +
      this.pages + "pages" + " , " + this.read());
  }
}

const hobbit = new book("The Hobbit ", "YAzar ", 500, false)
hobbit.info();