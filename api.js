const form = document.getElementById('registration-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (name === '' || email === '' || password === '' || confirmPassword === '' || phone === '' || address === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // Send form data to server using AJAX or fetch API
    // For demonstration purposes, we'll just log the data to the console
    console.log({
        name,
        email,
        password,
        phone,
        address
    });

    // Reset form fields
    form.reset();
    errorMessage.textContent = '';
});