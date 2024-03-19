/**
 * This class describes a flat statistic such as Attack.
 * 
 * Methods :
 * 
 * value() : return the calculeted value with all modifiers.
 */
export class Stat {

    name: string;
    base: number;
    factor: number;
    bonus: number;

    constructor(name: string, base: number, factor: number, bonus: number) {
        this.name = name;
        this.base = base;
        this.factor = factor;
        this.bonus = bonus;
    }

    /**
    * @returns Value of this stat with applied modifiers.
    */
    value() {
        return this.base * (1 + this.factor / 100) + this.bonus;
    }
}

/**
 * This class describes a percentage statistic such as crit damage.
 * 
 * Methods :
 * 
 * value() : return the calculeted value with all modifiers and reduced to a factor.
 */
export class Stat_Percentage extends Stat {

    override value() {
        return ((this.base * (1 + this.factor / 100) + this.bonus) / 100);
    }
}

/**
 * This class is the full set of statistics owned by any character
 */
export class Stats_Collection {

    hp: Stat;
    attack: Stat;
    defense: Stat;
    speed: Stat;
    crit_rate: Stat_Percentage;
    crit_damage: Stat_Percentage;
    resistance: Stat_Percentage;
    effect_hit_rate: Stat_Percentage;
    energy_recharge: Stat_Percentage;
    elemental_damage: Stat_Percentage;
    healing_boost: Stat_Percentage;
    break_effect: Stat_Percentage;
    damage_boost: Stat_Percentage;

    constructor(hp: Stat, attack: Stat, defense: Stat, speed: Stat, crit_rate: Stat_Percentage, crit_damage: Stat_Percentage, resistance: Stat_Percentage, effect_hit_rate: Stat_Percentage, energy_recharge: Stat_Percentage, elemental_damage: Stat_Percentage, healing_boost: Stat_Percentage, break_effect: Stat_Percentage, damage_boost: Stat_Percentage,) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.crit_rate = crit_rate;
        this.crit_damage = crit_damage;
        this.resistance = resistance;
        this.effect_hit_rate = effect_hit_rate;
        this.energy_recharge = energy_recharge;
        this.elemental_damage = elemental_damage;
        this.healing_boost = healing_boost;
        this.break_effect = break_effect;
        this.damage_boost = damage_boost;
    }
}

export class Stat_Modifier {

    stat: string;
    modifier: number;
    factor: number;

    constructor(stat: string, modifier: number) {
        this.stat = stat;
        this.modifier = modifier;
        this.factor = modifier / 100;
    }

}