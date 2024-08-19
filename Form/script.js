
document.getElementById('form').style.backgroundColor = '#C3A2BB';
document.getElementById('form').style.fontSize = '22px';
document.getElementById('form').style.color = '#220738';
document.getElementById('form').style.padding = '18px';
document.getElementById('form').style.margin = '0 auto';
document.getElementById('form').style.maxWidth = '500px';
document.querySelectorAll('input[type="text"], input[type="email"], input[type="number"]').forEach(input => {
    input.style.borderColor = '#000';
    input.style.borderWidth = '2px';
    input.addEventListener('focus', function() {
        this.style.borderColor = '#0056b3';
        this.style.borderWidth = '2px';
    });
    input.addEventListener('blur', function() {
        this.style.borderColor = '#007BFF';
        this.style.borderWidth = '2px';
    });
});
document.querySelector('button').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#008B8E';
});
document.querySelector('button').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#F2D730';
});


    document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    // Gender selection
    const male = document.getElementById('male');
    const female = document.getElementById('female');
    let gender = 'Not specified';
    if (male.checked) {
        gender = male.value;
    } else if (female.checked) {
        gender = female.value;
    }

    // Hobbies selection
    const selectedHobbies = [];
    const checkboxes = document.querySelectorAll('input[name="hobbies"]:checked');
    checkboxes.forEach((checkbox) => {
        selectedHobbies.push(checkbox.value);
    });
    const hobbiesText = selectedHobbies.length > 0 ? selectedHobbies.join(', ') : 'Not specified';

    // Display form data
    document.getElementById('user-details').innerHTML = `
        <p><strong>Name:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${number}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Hobbies:</strong> ${hobbiesText}</p>
    `;
});