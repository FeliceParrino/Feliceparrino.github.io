// JavaScript per la gestione del modulo di contatto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Aggiungi qui la logica per inviare il modulo di contatto
    alert('Modulo di contatto inviato con successo!');
    this.reset(); // Resetta il modulo dopo l'invio
});


//Validazione del modulo di contatto
var form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill in all fields.');
        event.preventDefault();
    }
});
