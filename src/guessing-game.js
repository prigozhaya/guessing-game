class GuessingGame {
    constructor() {}
    arrayOfGuessing = [];
    indexLeft = undefined;
    indexRight = undefined;
    indexMiddle = undefined;
  
    setRange(min, max) {
        this.indexLeft = min;
        this.indexRight = max;
      
    }
  
    guess() {
      this.indexMiddle = Math.ceil((this.indexLeft + this.indexRight) / 2);
      return this.indexMiddle;
    }
  
    lower() {
      this.indexRight = this.indexMiddle;
    }
  
    greater() {
        this.indexLeft = this.indexMiddle;
    }
  }

module.exports = GuessingGame;

