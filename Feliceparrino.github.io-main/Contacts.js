// JavaScript per la gestione del modulo di contatto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Aggiungi qui la logica per inviare il modulo di contatto
    alert('Modulo di contatto inviato con successo!');
    this.reset(); // Resetta il modulo dopo l'invio
});