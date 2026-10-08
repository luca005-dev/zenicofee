//hero section

let contents = [
    {
        text: "continuous improvement",
        text2: "kaizen",
        img: "",
        color1: "#f5f5dc",
        color2: "#000000",
        color3: "#000000"

    },
    {
        text: "desinging and developing software",
        text2: "sofware developer",
        img: "",
        color1: "#f5f5dc",
        color2: "#000000",
        color3: "#000000"

    },
    {
        text: "designing quality graphics",
        text2: "graphics designer",
        img: "",
        color1: "#f5f5dc",
        color2: "#000000",
        color3: "#000000"

    },
    {
        text: "creating and deploying full websites",
        text2: "fullstack developer",
        img: "",
        color1: "#f5f5dc",
        color2: "#000000",
        color3: "#000000"

    },
    {
        text: "quality project management",
        text2: "project manager",
        img: "",
        color1: "#f5f5dc",
        color2: "#000000",
        color3: "#000000"

    }
];

let currentIndex = 0;
const changeInterval = 5000;

function nextContent() {
    let bgImage = document.querySelector(".hero");
    let intro = document.querySelector(".introTitle");
    let saying = document.querySelector(".saying");
    let navColor = document.querySelectorAll(".navlink");


    // 2. Advance to the next index (loops back to 0 at the end)
    currentIndex = (currentIndex + 1) % contents.length;

    bgImage.style.backgroundImage = `url('${contents[currentIndex].img}')`;
    intro.textContent = contents[currentIndex].text2;
    saying.textContent = contents[currentIndex].text;

    navColor.forEach(function (navColor) {
        navColor.style.color = contents[currentIndex].color1;
    });

    intro.style.color = contents[currentIndex].color2;
    saying.style.color = contents[currentIndex].color3;




}

setInterval(nextContent, changeInterval);

//project section

const carousel = document.querySelector('.carousel');

const track = document.querySelector('.track');

const cards = document.querySelectorAll('.card');

const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstChild);

const allCards = document.querySelectorAll('.card');


let currentPosition = 1;

track.style.transform = "translateX(" + -(cards[0].offsetWidth + parseFloat(getComputedStyle(track).gap)) * currentPosition + "px)";

let cardWidth = cards[0].offsetWidth 

//+ 16;- 16px is the gap between cards     
let gap=parseFloat(getComputedStyle(track).gap); // Get the gap value from CSS

setInterval(() => {
    currentPosition++;
    if (currentPosition >= cards.length) {
        currentPosition = 0;
    }
    nowTranslateX = -(cardWidth + gap) * currentPosition;
    track.style.transform="translateX(" + nowTranslateX + "px)";

}, 1000);

    track.addEventListener('transitionend', () => {
        if (allCards[currentPosition].id === firstClone.id) {
            track.style.transition = 'none';
            currentPosition = 1;
            track.style.transform = "translateX(" + -(cardWidth + gap) * currentPosition + "px)";
        }
        if (allCards[currentPosition].id === lastClone.id) {
            track.style.transition = 'none';
            currentPosition = cards.length - 2;
            track.style.transform = "translateX(" + -(cardWidth + gap) * currentPosition + "px)";
        }

    });



/*contact form*/

const form = document.getElementById('form');
console.log("Form:", form);

const message = document.querySelector('.formMessage');


const showError = (input, message) => {
    const errorElement = document.getElementById(`${input.name}Error`);
    errorElement.textContent = message;
    errorElement.style.color = "red";
}

const clearError = (input) => {
    const errorElement = document.getElementById(`${input.name}Error`);
    errorElement.textContent = '';
}

//get error element for each input field
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');   


form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    //extract the form data

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const messageContent = formData.get('message'); 

    //trim the values to remove leading and trailing whitespace

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPhone = phone.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessageContent = messageContent.trim();

    //validate the form data (you can add more validation as needed)

    let isValid = true;

    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 20) {
        showError(form.elements['name'], "Name is required and must be between 2 and 20 characters.");
        isValid = false;
    } else {
        clearError(form.elements['name']);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail || !trimmedEmail.includes('@') || !emailPattern.test(trimmedEmail)) {
        showError(form.elements['email'], "Please enter a valid email address.");
        isValid = false;
    } else {
        clearError(form.elements['email']);
    }

    if (!trimmedPhone || !/^\d{10}$/.test(trimmedPhone)) {
        showError(form.elements['phone'], "Please enter a valid 10-digit phone number.");
        isValid = false;
    } else {
        clearError(form.elements['phone']);
    }

    if (!trimmedSubject) {
        showError(form.elements['subject'], "Subject is required.");
        isValid = false;
    } else {
        clearError(form.elements['subject']);
    }

    if (!trimmedMessageContent || trimmedMessageContent.length < 10 || trimmedMessageContent.length > 500) {
        showError(form.elements['message'], "Message is required and must be between 10 and 500 characters long.");
        isValid = false;
    } else {
        clearError(form.elements['message']);
    }

    if (!isValid) {
        message.textContent = "Please fill in all fields correctly.";
        message.style.color = "red";
        return;
    }

    //data is valid, you can send it to the server or perform any other action here 
    const formDataToSend = {
        name: trimmedName,
        email: trimmedEmail,    
        phone: trimmedPhone,
        subject: trimmedSubject,
        message: trimmedMessageContent
    };

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    //send the form data to the server using fetch or any other method (not implemented in this example)

    console.log("ABOUT TO SEND DATA TO BACKEND");
    console.log({
        name: trimmedName,
        email: trimmedEmail,
        phone: trimmedPhone,
        subject: trimmedSubject,
        message: trimmedMessageContent
    });

    const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(formDataToSend)
    });

    const result = await response.json();
    if (response.ok) {
        message.textContent = "Thank you for your message! We will get back to you soon.";
        message.style.color = "green";
        form.reset();
    } else {
        message.textContent = result.message || "There was an error sending your message. Please try again later.";
        message.style.color = "red";
    }

    //network failure or other errors can be handled here

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message"; 

    try {
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(formDataToSend)
    });

    const result = await response.json();
    if (response.ok) {
        message.textContent = "Thank you for your message! We will get back to you soon.";
        message.style.color = "green";
        form.reset();
    } else {
        message.textContent = result.message || "There was an error sending your message. Please try again later.";
        message.style.color = "red";
    }

    //network failure or other errors can be handled here

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message"; 

    } catch (error) {
        console.error('Error sending message:', error);
        message.textContent = "There was an error sending your message. Please try again later.";
    }

    finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message"; 
    }

    console.log(trimmedName);
    console.log(trimmedEmail);
    console.log(trimmedPhone);
    console.log(trimmedSubject);
    console.log(trimmedMessageContent);

    message.textContent = "Thank you for your message! We will get back to you soon.";
    message.style.color = "green";

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form submitted");
    });
   
});