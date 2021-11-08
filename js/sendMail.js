function sendMail() {
    var emailObject = {
        from_name: document.getElementById('from_name').value,
        message: document.getElementById('message').value
    }

    emailjs.send('service_06rbtmo', 'template_58loxda', emailObject).then(function(res) {
        console.log('message sent', res.status);
    })
}
