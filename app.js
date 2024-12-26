(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.main-btn');

    downloadBtn.addEventListener('click', function(event) {
        event.preventDefault();
        window.open('Me-Stuff/CV-FatimaZahraSabri.pdf', '_blank');
        window.location.href = 'index.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('send-button').addEventListener('click', function(event) {
        event.preventDefault();

        const form = document.getElementById('contact-form');
        const formData = new FormData(form);

        const serviceID = 'service_go8435f';
        const templateID = 'template_8mjbbkn';

        emailjs.sendForm(serviceID, templateID, form)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message envoyé avec succès!');
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('Échec de l\'envoi du message.');
            });
    });
});