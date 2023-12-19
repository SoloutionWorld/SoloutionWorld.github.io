    const searchInput = document.querySelector('.search-input');
    const suggestionsContainer = document.querySelector('.suggestions');
    const cardsContainer = document.getElementById('cards-container');

    // Search cards based on input
    function searchCards(input) {
        const cards = cardsContainer.getElementsByClassName('card');
        const inputValue = input.toLowerCase();

        Array.from(cards).forEach(card => {
            const cardHeader = card.querySelector('.card-header').textContent.toLowerCase();
            const cardContent = card.querySelector('.left-side-heading').textContent.toLowerCase();

            if (cardHeader.includes(inputValue) || cardContent.includes(inputValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function filterCards(tag) {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (tag === 'all' || card.classList.contains(tag)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }






document.addEventListener('DOMContentLoaded', function () {
    // Get the card container
    var cardContainer = document.getElementById('cardContainer');

    // Function to move a card to the top
    function moveCardToTop(card) {
        cardContainer.prepend(card);
    }

    // Function to display a random card on top
    function displayRandomCardOnTop() {
        // Get all the card elements
        var cards = document.querySelectorAll('.card');

        // Choose a random card
        var randomIndex = Math.floor(Math.random() * cards.length);
        var randomCard = cards[randomIndex];

        // Move the random card to the top
        moveCardToTop(randomCard);
    }

    // Display a random card initially
    displayRandomCardOnTop();

    // Set interval to move a card to the top every 20 seconds
    setInterval(displayRandomCardOnTop, 20000);
});
