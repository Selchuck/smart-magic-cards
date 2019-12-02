const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonWrapper = document.querySelector('.btn-wrapper');
const mainButton = document.getElementById('start-game');
const cards = [];

// For each dataObject, create a new card and append it to the DOM
function createCard() {
  cards.forEach((card, i) => {
    const positionFromLeft = i * 25;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

function createCards() {
  // Create an array with objects containing the value and the suit of each card
  suits.forEach((suit) => {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit,
      };
      cards.push(cardObject);
    }
  });
  createCard();
}

function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  createCard();
}

function hocusPocus() {
  cards.length = 0;
  createCards();
}

function hide() {
  cardsWrapper.classList.toggle('hidden');
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  mainButton.remove();

  const shuffle = document.createElement('BUTTON');
  shuffle.setAttribute('id', 'start-game');
  shuffle.setAttribute('class', 'btn btn-lg btn-secondary');
  buttonWrapper.appendChild(shuffle).innerHTML = 'Shuffle';
  shuffle.addEventListener('click', shuffleCards);

  const showOrHide = document.createElement('BUTTON');
  showOrHide.setAttribute('id', 'start-game');
  showOrHide.setAttribute('class', 'btn btn-lg btn-secondary');
  buttonWrapper.appendChild(showOrHide).innerHTML = 'Show/Hide';
  showOrHide.addEventListener('click', hide);

  const magic = document.createElement('BUTTON');
  magic.setAttribute('id', 'start-game');
  magic.setAttribute('class', 'btn btn-lg btn-secondary');
  buttonWrapper.appendChild(magic).innerHTML = 'Magic';
  magic.addEventListener('click', hocusPocus);
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

mainButton.addEventListener('click', startGame);
