document.addEventListener('DOMContentLoaded', function() {
    // Elemento in cui visualizzare le informazioni
    const infoContainer = document.getElementById('info-container');

    // Funzione per aggiornare le informazioni
    function updateInfo() {
        // Data corrente
        const currentDate = new Date();

        // Formatta la data e l'ora esatte del giorno in cui siamo
        const currentDateFormatted = currentDate.toLocaleString('en-EN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        // Data in cui hai iniziato a programmare
        const startOfProgramming = new Date('2023-01-01');

        // Calcola la differenza in millisecondi tra la data corrente e la data di partenza
        const differenceInMilliseconds = currentDate - startOfProgramming;

        // Calcola i giorni, le ore, i minuti e i secondi trascorsi
        const totalSeconds = differenceInMilliseconds / 1000;
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        // Crea il testo da visualizzare
        const infoText = `
            <h1>Other Info</h1>
            Since I started programming have passed:<br>
            ${days} days, ${hours} hours, ${minutes} minutes ${seconds} seconds.<br>
            Current date & time: ${currentDateFormatted}<br>
        `;

        // Imposta il testo nell'elemento
        infoContainer.innerHTML = infoText;
    }

    // Aggiorna le informazioni una volta al secondo
    setInterval(updateInfo, 1000);

    // Chiama la funzione una volta all'avvio
    updateInfo();
});
