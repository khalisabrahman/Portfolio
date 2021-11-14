const email = document.getElementById('email');
const form = document.querySelector('.form');
const hireTrigger = document.getElementById('hire');
const hireModal = document.getElementById('hireModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');

hireTrigger.addEventListener('click', () => {
	hireModal.classList.add('is--visible');
})

modalCloseBtn.addEventListener('click', () => {
	hireModal.classList.remove('is--visible');
})

function checkEmail(input) {
	const emailValidation =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (emailValidation.test(input.value.trim())) {
		showSuccess(input);
        sendMail();
		hireModal.classList.remove('is--visible');
	} 
	// else {
	// 	showError(input, `Oops! That doesn't look like an email address`);
	// 	alert('invalid email');
	// }
}


function sendMail() {
    var emailObject = {
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    emailjs.send('service_06rbtmo', 'template_58loxda', emailObject).then(function(res) {
        console.log('Message sent', res.status);
		alert('Email has been sent. We will get in touch. Thank you.')
    })
}




function showError(input, message) {
	// const formControl = input.parentElement;
	// formControl.className = 'form-control error';

	// const small = formControl.querySelector('small');
	// small.innerText = message;

	email.classList.add('errorBorder');
}

function showSuccess(input) {
	const formControl = input.parentElement;
	// formControl.className = 'form-control success';
	// if (email.classList.contains('errorBorder')) {
	// 	email.classList.remove('errorBorder');
	// }
	console.log('success');
}

//Event Listeners
form.addEventListener('submit', function (e) {
	e.preventDefault();
	checkEmail(email);
});

