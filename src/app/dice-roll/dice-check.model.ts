import { PlayerAttribute } from '../shared/player.model';
import { DiceCheckResult } from './dice-check-result.model';

export type DiceCheckType = 'physical' | 'not-physical';

export class DiceCheck {
  
  attribute: PlayerAttribute;
  checkType: DiceCheckType = "physical"
  rolls: number = 2;

  run(): DiceCheckResult {
    return new DiceCheckResult();
  }

}