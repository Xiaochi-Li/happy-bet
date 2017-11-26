import Chance from 'chance';

const chance = new Chance();
/*a Competitor object*/
export default class Competitor {
  constructor(ID) {
    this.name = this.getRandomName();
    this.weight = this.getRandomWeight();
    this.win = this.getRandomWin();
    this.ID = ID;
  }
  /* Generate a random name for competitor.
  * */
  getRandomName() {
    return chance.name();
  }

  /* Generate a random weight for competitor.
  * */
  getRandomWeight() {
    return chance.floating({min: 40, max: 100, fixed:1});
  }

  getRandomWin(){
    return chance.floating({min: 1, max: 10, fixed:3});
  }
}