export class DiceCheckResult{
  
  playerName: string;
  attribute: number;
  actionType: string;
  rolls: number[] = [];

  countSuccesses() {
    if (this.actionType === 'physical') {
      return this.rolls.filter( roll => roll < this.attribute).length;
    }
    else {
      return this.rolls.filter( roll => roll > this.attribute).length;
    }
  }

  countCritical(): number {
    return this.rolls.filter( roll => roll === this.attribute).length;
  }

}