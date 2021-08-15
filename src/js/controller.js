import { btnRollEl, btnNewEl, btnHoldEl } from './config.js';

import { renderDice } from './view.js';
import { handleDiceRoll, initialize, handleHold } from './model.js';

/**
 * @description Controller for Pig Game resides in this module
 * @author Rini Sarkar
 * @module controller
 */

//Initial settings
initialize();

const controlDiceRoll = function () {
  const roll = handleDiceRoll();
  renderDice(roll[0], roll[1]);
};

btnNewEl.addEventListener('click', initialize);
btnHoldEl.addEventListener('click', handleHold);
btnRollEl.addEventListener('click', controlDiceRoll);
