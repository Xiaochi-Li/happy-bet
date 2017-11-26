import Chance from 'chance';

const chance = new Chance(); // {object} a chance object generate random values.

/** Class representing a competitor */
export default class Competitor {
  /**
   * Create a competitor.
   * @param {number} ID - The competitor ID.
   */
  constructor(ID) {
    this.name = this.getRandomName(); // {string} The name of a competitor.
    this.weight = this.getRandomWeight(); // {number} The weight of a competitor.
    this.win = this.getRandomWin(); // {number} The win rate of a competitor.
    this.ID = ID; // {number} The ID of a competitor.
  }

  /**
   * Generate a random name for competitor.
   * @return {String} - The random name.
   */
  getRandomName() {
    return chance.name();
  }

  /**
   * Generate random weight ranged in 40 and 100 for competitor.
   * @returns {number} - The random weight.
   */
  getRandomWeight() {
    return chance.floating({min: 40, max: 100, fixed:1});
  }

  /**
   *Generate a random win rate ranged in 1 and 10 for competitor.
   * @returns {number} The random win rate.
   */
  getRandomWin(){
    return chance.floating({min: 1, max: 10, fixed:3});
  }
}