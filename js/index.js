const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonWrapper = document.querySelector('.btn-wrapper');
const mainButton = document.getElementById('start-game');

const cards = [];
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

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 25;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to clear out the initial button and create new buttons to play the game.

function createButtons() {
  // Your Code
  mainButton.remove();

  const shuffle = document.createElement('BUTTON');
  shuffle.setAttribute('id', 'start-game');
  shuffle.setAttribute('class', 'btn btn-lg btn-secondary');
  shuffle.innerHTML = 'Shuffle';
  buttonWrapper.appendChild(shuffle);
  shuffle.addEventListener('click', shuffleCards);

  const showOrHide = document.createElement('BUTTON');
  showOrHide.setAttribute('id', 'start-game');
  showOrHide.setAttribute('class', 'btn btn-lg btn-secondary');
  showOrHide.innerHTML = 'Show/Hide';
  buttonWrapper.appendChild(showOrHide);

  const magic = document.createElement('BUTTON');
  magic.setAttribute('id', 'start-game');
  magic.setAttribute('class', 'btn btn-lg btn-secondary');
  magic.innerHTML = 'Magic';
  buttonWrapper.appendChild(magic);
  magic.addEventListener('click', hocusPocus);
}

function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  cards.forEach((card, i) => {
    const positionFromLeft = i * 25;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}
// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

function hocusPocus() {
  cards.length = 0;
  createCards();
}


mainButton.addEventListener('click', startGame);
