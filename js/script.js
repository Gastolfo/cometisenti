document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollIndicator = document.getElementById('scrollIndicator');

    const updateScrollIndicator = () => {
        const totalCards = document.querySelectorAll('.flip-card').length;
        const cardWidth = document.querySelector('.flip-card').clientWidth + 32; // Include il margine
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
    };

    // Aggiorna i puntini inizialmente
    updateScrollIndicator();

    // Aggiorna i puntini al scroll
    scrollContainer.addEventListener('scroll', () => {
        updateScrollIndicator();
    });
});