import { diceEl } from './config.js';

/**
 * @description Renders the dice image to the screen
 * @author Rini Sarkar
 * @module view
 */

export const renderDice = function (dice, playing) {
  if (playing) {
    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./src/img/dice-${dice}.png`;
  }
};
