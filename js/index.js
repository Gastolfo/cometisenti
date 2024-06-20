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
        const cardWidth = document.querySelector('.card').offsetWidth + 30; // Adjust for margin
        const scrollLeft = scrollContainer.scrollLeft;
        const currentIndex = Math.round(scrollLeft / cardWidth);

        // Clear existing dots
        while (scrollIndicator.firstChild) {
            scrollIndicator.removeChild(scrollIndicator.firstChild);
        }

        // Add new dots
        for (let i = 0; i < totalCards; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (i === currentIndex) {
                dot.classList.add('active');
            }
            scrollIndicator.appendChild(dot);
        }

        // Update footer text
        footerText.textContent = phrases[currentIndex];
    };

    scrollContainer.addEventListener('scroll', updateScrollIndicator);

    // Initial update
    updateScrollIndicator();
});