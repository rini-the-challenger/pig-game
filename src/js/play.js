import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

/**
 * @description Dummy module for testing CloneDeep, module.hot
 * @author Rini Sarkar
 * @module play
 */

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,

      product: 'butter',
      quantity: 1,
    },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);

const stateCloneDeep = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateCloneDeep);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const rini = new Person('Rini');

export default state;
