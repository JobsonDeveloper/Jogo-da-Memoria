const cards = document.querySelectorAll('.card');
let hasFlipperCard = false;
let firstCard, secondCard;

function flipCard() {
    // Adiciona a classe 'flip no card' para que o css vire a carta que foi selecionada
    this.classList.add('card-flip');
 
    if (!hasFlipperCard) {
        hasFlipperCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlipperCard = false;
    ckeckForMath()
}

function ckeckForMath() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    else {
        unflipCards();
    }
}

cards.forEach((card) => {
    // Para cada card clicado, será realizsada a função flipCard (Girar o card)
    card.addEventListener('click', flipCard)
});