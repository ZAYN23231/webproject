//Grab login form data
const form = document.forms[0];

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    email: form['email'].value,
    password: form['password'].value,
  };
  axios
    .post('https://uniproject-web23.herokuapp.com/api/User/login', data)
    .then(data => {
      localStorage.setItem('_id', data.data.doc._id);
      localStorage.setItem('name', data.data.doc.First_name);
      location.href = './main.html';
    })
    .catch(err => console.log(err.err));
});
