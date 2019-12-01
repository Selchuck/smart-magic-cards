const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonWrapper = document.querySelector('.btn-wrapper');

function createCards() {
  const cards = [];
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
    const positionFromLeft = i * 15;
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
  const mainButton = document.getElementById('start-game');
  mainButton.remove();

  const shuffle = document.createElement('BUTTON');
  shuffle.setAttribute('id', 'start-game');
  shuffle.setAttribute('class', 'btn btn-lg btn-secondary');
  const textNode = document.createTextNode('Shuffle');
  buttonWrapper.appendChild(shuffle).appendChild(textNode);

  const showOrHide = document.createElement('BUTTON');
  showOrHide.setAttribute('id', 'start-game');
  showOrHide.setAttribute('class', 'btn btn-lg btn-secondary');
  const textNode2 = document.createTextNode('Show/Hide');
  buttonWrapper.appendChild(showOrHide).appendChild(textNode2);
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
