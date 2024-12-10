const cards = document.querySelectorAll('.card');
let hasFlipperCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;

    // Impedir que o usuário clique duas vezes na mesma carta
    if (this === firstCard) return;

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

// Verifica se as cartas clicadas são iguais
function ckeckForMath() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    else {
        unflipCards();
    }
}

// Retirar o listener do card, para ele não ser clicado duas vezes
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', firstCard);
}

// Descirar as cartas se elas não foram parecidas
function unflipCards() {
    // Definir o lockBoard como true, para que o usuário não consiga clicar em outras cartas enquando as animações acontecem
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('card-flip');
        secondCard.classList.remove('card-flip');

        // Definir o lockBoard como façse, para que o usuário consiga clicar em outras cartas
        lockBoard = false;
    }, 1500);
}

cards.forEach((card) => {
    // Para cada card clicado, será realizsada a função flipCard (Girar o card)
    card.addEventListener('click', flipCard)
});