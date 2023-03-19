export interface iWeaponDTO {
  name: string;
  attack: number;
  weight: number;
}

export interface iWeapon extends iWeaponDTO {
  id: number;
}

export interface iAllWeaponsDTO {
  weapons: iWeapon[];
  quantity: number;
  minWeight: number;
  maxWeight: number;
  minAttack: number;
  maxAttack: number;
}
