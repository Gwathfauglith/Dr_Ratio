import { Stat, Stat_Percentage, Stats_Collection } from "./stat.model";

/**
 * This class represent a full Star Rail character with all his statistics equipments skills image etc...
 */
export class Character {
    // Informations : 

    name: string;
    imageUrl: string;

    // Statistics : 

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

    // Skills

    max_energy: number;
    starting_energy: number;
    basic_attack : Combat_Skill;
    skill: Combat_Skill;
    ultimate: Combat_Skill;
    passives: Passive_Skill[];

    // Lightcone

    lightcone: Lightcone;

    // Relics

    relics_set: Relics_Set;

    constructor(
        name: string,
        imageUrl: string,

        hp: Stat,
        attack: Stat,
        defense: Stat,
        speed: Stat,
        crit_rate: Stat_Percentage,
        crit_damage: Stat_Percentage,
        resistance: Stat_Percentage,
        effect_hit_rate: Stat_Percentage,
        energy_recharge: Stat_Percentage,
        elemental_damage: Stat_Percentage,
        healing_boost: Stat_Percentage,
        break_effect: Stat_Percentage,
        damage_boost: Stat_Percentage,

        max_energy: number,
        starting_energy: number,
        basic_attack : Combat_Skill,
        skill: Combat_Skill,
        ultimate: Combat_Skill,
        passives: Passive_Skill[],

        lightcone: Lightcone,

        relics_set: Relics_Set
        ) {

        this.name = name;
        this.imageUrl = imageUrl;


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

        this.max_energy = max_energy;
        this.starting_energy = starting_energy;
        this.basic_attack = basic_attack;
        this.skill = skill;
        this.ultimate = ultimate;
        this.passives = passives;

        this.lightcone = lightcone;

        this.relics_set = relics_set;
    }
}
