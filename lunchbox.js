class LunchBox {
  constructor(lunchboxInfo) {
    this.owner = lunchboxInfo.owner;
    this.material = lunchboxInfo.madeOf;
    this.shape = lunchboxInfo.shape;
    this.color = lunchboxInfo.color;
    this.handle = true;
    this.snacks = [];

  }
  acquireSnack(fruitSnack){
    this.snacks.push(fruitSnack);
    fruitSnack.isInLunchBox = true;
  }
  findHealthySnacks(snacks){
    var fruitySnacks = [];
    for(var i = 0; i < this.snacks.length; i++) {
      if(this.snacks[i].healthy === true) {
        fruitySnacks.push(this.snacks[i]);
      }
    }
        return fruitySnacks;
  }
}

module.exports = LunchBox;
