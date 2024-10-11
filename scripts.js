document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You can implement an API call here to send the message

    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById("contactForm").reset(); // Clear the form
});
