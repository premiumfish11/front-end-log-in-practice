
const btn = document.querySelector('.btn');



// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submitß
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    console.log(nameInput.value);
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        var request = new XMLHttpRequest()

request.open('GET', 'https://boss-note-app.herokuapp.com/login/data', true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(x => {
      console.log(x.id);
      console.log(x.pw);
    })
  } else {
    console.log('error')
  }
}

request.send()

        if (nameInput.value === 'boss' || emailInput.value === 'boss') {
            window.location.replace("http://www.google.com");
        }
        else {
            alert("fail");
        }
        // Create new list item with user
        const li = document.createElement('li');

        // Add text node with input values
        //li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

        // Append to ul
        //userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}