import { scoreEl, diceEl, currScoreEl } from './config.js';

/**
 * @description Main Application Logic for Pig Game resides in this module
 * @author Rini Sarkar
 * @module model
 */

let currScore, scorePlayer, activePlayer, playing;

/**
 * Initialize the game
 */
export const initialize = function () {
  //Initial settings
  for (let i = 0; i < scoreEl.length; i++) {
    scoreEl[i].textContent = 0;
    currScoreEl[i].textContent = 0;
  }

  scorePlayer = [0, 0];
  activePlayer = 0;
  currScore = 0;
  playing = true;

  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
};

export const handleHold = function () {
  if (playing) {
    document.getElementById(`score--${activePlayer}`).textContent =
      scorePlayer[`${activePlayer}`] + currScore;

    scorePlayer[`${activePlayer}`] = scorePlayer[`${activePlayer}`] + currScore;
    if (scorePlayer[`${activePlayer}`] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      playing = false;
      diceEl.classList.add('hidden');
    } else switchPlayer();
  }
};

/**
 * Sets the score for current
 * @param {Integer} dice The dice score thrown by the player
 */
export const setScore = function (dice) {
  if (playing) {
    currScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currScore;
  }
};

export const switchPlayer = function () {
  if (playing) {
    for (let i = 0; i < currScoreEl.length; i++) currScoreEl[i].textContent = 0;

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--active');
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--active');
    currScore = 0;
  }
};

export const handleDiceRoll = function () {
  //Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //Check for roll 1. If true, switch to next player
  if (dice === 1) {
    switchPlayer();
  } else {
    setScore(dice);
  }
  return [dice, playing];
};
