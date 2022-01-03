let quantityForm = document.querySelector('#quantityForm');
let incrementButton = document.querySelector('#incrementButton');
let decrementButton = document.querySelector('#decrementButton');

const inputPatterns = {
  fname: /^[a-z\d]{3,12}$/i,
  lname: /^[a-z\d]{3,12}$/i,
  password: /^[\w-@]{8,20}$/,
  telephone: /^\d{11}$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};

//Getting All the Books
const URL = 'https://uniproject-web23.herokuapp.com/api/Book/';
axios
  .get(URL)
  .then(data => {
    const counter = 3;
    let Popular_Book = document.querySelector('.popular_books');
    let recentlyAddedBook = document.querySelector('.recentlyAddedBook');

    for (let i = 0; i < counter; i++) {
      Book_Card(data.data.books[i], Popular_Book);
      Book_Card(data.data.books[i], recentlyAddedBook);
    }
  })
  .catch(err => console.log(err));

function Book_Card(book, ref) {
  if (ref) {
    const html = `<div class="col-sm-4">
<div class="card">
  <div class="card-body">
    <div class="row">
        <div class="col-sm-4">
            <img src="./images/most-popular-books/${book.image
              .split('\\')
              .pop()}" class="rounded" alt="">
        </div>
        <div class="col-sm-8">
            <h5 class="card-title">${book.Name}</h5>
    <p class="card-text text-muted">By: ${book.Author}
    </p>
    <form action="./product.html" method="GET">
    <input style="display:none;" value="${
      book._id
    }" type="text" name="serialNumber" />
    <input  class="btn btn-primary" type="submit" value="More Details" />
</form>
        </div>
    </div>
    
  </div>
</div>
</div>`;
    ref.innerHTML += html;
  }
}

// Check User Authorization
let athorization = document.querySelector('.athorization');

const id = localStorage.getItem('_id');
if (id) {
  let user_name = localStorage.getItem('name');
  athorization.innerHTML = `${user_name.toUpperCase()} <span class="logout"><i  class="fa fa-sign-in text-center" ></i>Logout</span>`;
} else {
  athorization.innerHTML = '<a class="login" href="./login.html">Login</a>';
}
//Logout
let logout = document.querySelector('.logout');
logout.addEventListener('click', () => {
  localStorage.removeItem('_id');
  localStorage.removeItem('name');
  location.href = './login.html';
});
