console.log("hey there luke!");

const form = document.getElementById('contactForm');
const message = document.querySelector('.formMessage');


form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);



    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('message'));
    console.log(formData.get('subject'));
    console.log(formData.get('phone'));
});