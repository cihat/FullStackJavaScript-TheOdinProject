function book(title, autor, pages) {
  this.title = title;
  this.autor = autor;
  this.pages = pages;
  this.info = function () {
    this.isRead = function (isRead) {
      if (isRead) {
        console.log("Okundu...");
      }
      else {
        console.log("OKunmadı...");
      }
    }
    return this.title + " by " + this.autor + " , " +
      this.pages + " pages " + " , " + this.isRead(true);
  }
}

const hobbit = new book("The Hobbit ", "YAzar ", 500)
console.log(hobbit.info());