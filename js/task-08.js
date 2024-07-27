
const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formObject = {};
  const inputs = form.elements;


  for (const input of inputs) {
    if (input.name) {
      formObject[input.name] = input.value;
    }
  }

 
  const allFieldsFilled = Object.values(formObject).every(value => value.length > 0);

  if (allFieldsFilled) {

    console.log(formObject);

    form.reset();

  } else {
    alert('All fields must be filled in');
  }
});
