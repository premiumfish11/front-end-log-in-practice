
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
    let input = {id:nameInput.value,
    pw:emailInput.value};
    console.log(input);
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        var request = new XMLHttpRequest()

var url = 'https://boss-note-app.herokuapp.com/login/data';
var xhr = createCORSRequest('GET', url);
xhr.send();
  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var data = JSON.parse(text);
    data.forEach(x=>console.log(x.id));

    console.log(input);
    console.log(data.includes(input));
    if (data.includes({id:nameInput.value,pw:emailInput.value})) {
        window.location.replace("https://boss-note-app.herokuapp.com");
    }
    else {
        alert("fail");
    }

  };
   


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

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
  
      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);
  
    } else if (typeof XDomainRequest != "undefined") {
  
      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
      xhr.open(method, url);
  
    } else {
  
      // Otherwise, CORS is not supported by the browser.
      xhr = null;
  
    }
    return xhr;
  }
