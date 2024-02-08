document.addEventListener('DOMContentLoaded', (event) => {

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Retrieve values from form fields
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const passwordConfirm = document.querySelector('#password-confirm-signup').value.trim(); // Added line for password confirmation
  
    // Check if all fields are filled and passwords match
    if (name && email && password && password === passwordConfirm) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    } else if (password !== passwordConfirm) {
      alert('Passwords do not match.'); // Alert the user if passwords do not match
    } else {
      alert('Please fill out all fields.'); // Alert if any field is missing
    }
  };
  
 
  
  const loginForm = document.querySelector('.login-form');
if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler);
}



});