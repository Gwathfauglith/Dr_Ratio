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
    facteur: number;
    bonus: number;

    constructor(name: string, base: number, facteur: number, bonus: number) {
        this.name = name;
        this.base = base;
        this.facteur = facteur;
        this.bonus = bonus;
    }

    /**
    * @returns Value of this stat with applied modifiers.
    */
    value() {
        return this.base * (1 + this.facteur / 100) + this.bonus;
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
        return ((this.base * (1 + this.facteur / 100) + this.bonus) / 100);
    }
}

export class Stat_Modifier {

    stat: string;
    modifier: number;
    facteur: number;

    constructor(stat: string, modifier: number) {
        this.stat = stat;
        this.modifier = modifier;
        this.facteur = modifier / 100;
    }

}