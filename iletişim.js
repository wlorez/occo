document.querySelector('form').addEventListener('submit', function(event) {
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var message = document.querySelector('textarea[name="message"]').value;
  
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      event.preventDefault(); // Prevent form submission
    }
  });