const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;

    // Impedir que o usuário clique duas vezes na mesma carta
    if (this === firstCard) return;

    // Adiciona a classe 'flip no card' para que o css vire a carta que foi selecionada
    this.classList.add('card-flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
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

    resetBoard();
}

// Descirar as cartas se elas não foram parecidas
function unflipCards() {
    // Definir o lockBoard como true, para que o usuário não consiga clicar em outras cartas enquando as animações acontecem
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('card-flip');
        secondCard.classList.remove('card-flip');

        // Definir o lockBoard como façse, para que o usuário consiga clicar em outras cartas
        resetBoard();
    }, 1500);
}

function resetBoard() {
    // Desetruturação - Criar um novo array com cada um dos elementos que estão sendo tratados  
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Embaralhas as cartas
// immediate invocation function
(function shuffle() {
    cards.forEach((card) => {
        // Sortear um número para mudar a posição dos cards
        // math.flooor arredonda o resultado da expressção
        let ramdomPosition = Math.floor(Math.random() * 12);

        // Sempre que o jogo começar a carta terá uma posição direfente
        card.style.order = ramdomPosition;
    });
})();


cards.forEach((card) => {
    // Para cada card clicado, será realizsada a função flipCard (Girar o card)
    card.addEventListener('click', flipCard)
});