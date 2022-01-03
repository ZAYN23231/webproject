const URL = 'https://uniproject-web23.herokuapp.com//api/Book/';
axios
  .get(URL)
  .then(data => {
    let collection_books = document.querySelector('.collection_books');
    console.log(data.data.books);
    data.data.books.forEach(e => {
      Book_Card(e, collection_books);
    });
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
