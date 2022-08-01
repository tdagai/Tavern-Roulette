type Mechanic = {
  name: string;
}

type CardObject = {
  'cardId': string;
  'dbfId': string;
  'name': string;
  'cardSet': string;
  'type': string;
  'rarity': string;
  'cost': string;
  'text': string;
  'flavor': string;
  'artist': string;
  'collectible': string;
  'playerClass': string;
  'img': string;
  'locale': string;
  'spellSchool'?: string;
  'attack'?: string;
  'health'?: string;
  'durability'?: string;
  'race'?: string;
  'mechanics'?: Mechanic[];
}