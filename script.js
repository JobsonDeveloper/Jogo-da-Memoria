const cards = document.querySelectorAll('.card');

function flipCard() {
    // Adiciona a classe 'flip no card' para que o css vire a carta que foi selecionada
    // O método 'toggle' retira a classe se ela existir e adiciona se ela não existir 
    this.classList.toggle('flip');
}

cards.forEach((card) => {
    // Para cada card clicado, será realizsada a função flipCard (Girar o card)
    card.addEventListener('click', flipCard)
})