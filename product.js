var book = '';
let main_image = document.querySelector('.product_banner');
let book_name = document.querySelector('.book_name');
let author_name = document.querySelector('.author_name');
let discount = document.querySelector('.discount');
let original_price = document.querySelector('.original_price');
let book_description = document.querySelector('.book_description');

//Grab Tables
let book_titletable = document.querySelector('.book_titletable');
let book_authortable = document.querySelector('.book_authortable');
let Book_Codetable = document.querySelector('.Book_Codetable');
let Book_Issuetable = document.querySelector('.Book_Issuetable');
let Book_Piecestable = document.querySelector('.Book_Piecestable');

const Product_URL = `https://uniproject-web23.herokuapp.com/api/Book?_id=${window.location.search
  .split('=')
  .pop()}`;
incrementButton.addEventListener('click', e => {
  if (quantityForm.value < book.Total_Pieces) {
    quantityForm.value = Number(quantityForm.value) + 1;
  }
});
//Quality Control
decrementButton.addEventListener('click', e => {
  if (quantityForm.value > 1) {
    quantityForm.value = Number(quantityForm.value) - 1;
  }
});
axios
  .get(Product_URL)
  .then(data => {
    book = data.data.books[0];
    main_image.src = `./images/most-popular-books/${book.image
      .split('\\')
      .pop()}`;
    book_name.innerHTML = book.Name;
    author_name.innerHTML = book.Author;
    original_price.innerHTML = Math.floor(book.Price) + ' PKR';
    discount.innerHTML = Math.floor(book.Price * 0.8) + ' PKR';
    book_description.innerHTML = book.description;
    //Adding Table Values
    book_titletable.innerText = book.Name;
    book_authortable.innerText = book.Author;
    Book_Codetable.innerText = book.BookCode;
    Book_Issuetable.innerText = new Date(book.IssueYear).toLocaleDateString();
    Book_Piecestable.innerText = book.Total_Pieces;
  })
  .catch(err => console.log(err));
