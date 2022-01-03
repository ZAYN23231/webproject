//Grab All form fields
let form = document.forms[0];
form.addEventListener('submit', e => {
  e.preventDefault();
  const formdata = {
    First_name: form['fname'].value,
    Last_name: form['lname'].value,
    email: form['email'].value,
    password: form['password'].value,
    address: form['address'].value,
    Telephone: form['telephone'].value,
  };
  console.log(formdata);
  const URL = 'https://uniproject-web23.herokuapp.com/api/User/signup';
  axios
    .post(URL, formdata)
    .then(data => {
      localStorage.setItem('_id', data.data.doc._id);
      localStorage.setItem('name', data.data.doc.First_name);
      location.href = './main.html';
    })
    .catch(err => console.log(err));
});
