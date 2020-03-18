export class Player {

  name: string;
  attribute: PlayerAttribute;
  description: string;

  constructor(name: string, attribute: PlayerAttribute, description: string){
    this.name = name;
    this.attribute = attribute;
    this.description = description;
  }
}

export type PlayerAttribute = 2 | 3 | 4 | 5;