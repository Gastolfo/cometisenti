document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollIndicator = document.getElementById('scrollIndicator');
    const footerText = document.getElementById('footerText');

    const phrases = [
        "UN ABBRACCIO SILENZIOSO E SOFFOCANTE AVVOLGE L'ANIMA INQUIETANTE.",
        "CALORE DIFFUSO, OCCHI BRILLANTI, ANIMA DANZANTE: SENSAZIONI TRAVOLGENTI E SUBLIME.",
        "BRIVIDI IMPROVVISI, PELLE INCRESPATA, CORPO IMMOBILIZZATO: FREDDO INNATURALE AVVOLGE.",
        "CIELO PLUMBEO, NUVOLE GRAVI OSCURANO IL SOLE; VIOLINO SOLITARIO.",
        "SUSSURRO ACCAREZZA, BRIVIDO ECCITAZIONE, CUORE ACCELERA: ENERGIA PALPABILE NELL'ARIA.",
        "FORZA PRIMITIVA, VENE PULSANTI AL RITMO TRIBALE.",
        "MOVIMENTI LEGGERI, SUONI ALLEGRI DANZANO NELL'ARIA, RISATE CONTAGIOSE.",
        "UN ABBRACCIO INTIMO RENDE IL MONDO PIÙ LUMINOSO E ACCOGLIENTE."
    ];

    const updateScrollIndicator = () => {
        const totalCards = document.querySelectorAll('.card').length;
        const cardWidth = document.querySelector('.card').clientWidth + 32; // Include il margine
        const scrollLeft = scrollContainer.scrollLeft;
        const currentIndex = Math.round(scrollLeft / cardWidth);

        // Rimuove i puntini esistenti
        while (scrollIndicator.firstChild) {
            scrollIndicator.removeChild(scrollIndicator.firstChild);
        }

        // Aggiunge i nuovi puntini
        for (let i = 0; i < totalCards; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (i === currentIndex) {
                dot.classList.add('active');
            }
            scrollIndicator.appendChild(dot);
        }

        // Aggiorna il testo del footer
        footerText.textContent = phrases[currentIndex];
    };

    // Aggiorna i puntini inizialmente
    updateScrollIndicator();

    // Aggiorna i puntini al scroll
    scrollContainer.addEventListener('scroll', () => {
        updateScrollIndicator();
    });
});