class Stat {
    constructor(name, base, facteur, bonus) {
        this.name = name;
        this.base = base;
        this.facteur = facteur;
        this.bonus = bonus;
    }

    value() {
        return this.base * (1 + this.facteur / 100) + this.bonus;
    }
}

class Stat_Percentage extends Stat {
    value() {
        return ((this.base * (1 + this.facteur / 100) + this.bonus) / 100);
    }
}

class Stat_Modifier {
    constructor(stat, modifier) {
        this.stat = stat;
        this.modifier = modifier;
        this.facteur = modifier / 100;
    }

}

class Skill {
    constructor(stats_modifiers, flat, energy) {
        this.stats_modifiers = stats_modifiers;
        this.flat = flat;
        this.energy = energy;
    }
}

class Attaque extends Skill {
    constructor(stats_modifiers, flat, energy) {
        super(stats_modifiers, flat, energy);
        this.type = 'Attaque';
    }
}

class Damage_Buff extends Skill {
    constructor(stats_modifiers, flatMod, flat, energy, statBuffed) {
        super(stats_modifiers, flat, energy);
        this.flatMod = flatMod;
        this.statBuffed = statBuffed
        this.type = 'Damage_Buff';
    }
}

class passivBuff {
    constructor(stat, facteur, flat) {
        this.stat = stat;
        this.facteur = facteur;
        this.flat = flat;
    }
}



class Perso {

    constructor(perso) {
        this.name = perso.name;
        this.hp = perso.hp;
        this.atk = perso.atk;
        this.def = perso.def;
        this.spd = perso.spd;
        this.tc = perso.tc;
        this.dgc = perso.dgc;
        this.res = perso.res;
        this.pre = perso.pre;
        this.er = perso.er;
        this.ed = perso.ed;
        this.hb = perso.hb;
        this.be = perso.be;
        this.dmg = perso.dmg;
        this.max_energy = perso.max_energy;
        this.starting_energy = perso.starting_energy;
        this.auto_atk = perso.auto_atk;
        this.skill = perso.skill;
        this.ultimate = perso.ultimate;
        this.cycle = perso.cycle;
        this.passivBuffs = perso.passivBuffs;
        this.actionValue = 10000 / this.spd.value();
    }

    stats_value() {
        return ({
            hp: this.hp.value(),
            atk: this.atk.value(),
            def: this.def.value(),
            spd: this.spd.value(),
            tc: this.tc.value(),
            dgc: this.dgc.value(),
            res: this.res.value(),
            pre: this.pre.value(),
            er: this.er.value()
        })
    };

    actualiser_action_value() {
        this.actionValue = 10000 / this.spd.value();
    }

    change_speed(speed) {
        this.speed = speed;
        this.actualiser_action_value();
    }
}

class Set {
    constructor(casque, bottes, armure, gants, corde, sphere) {
        this.casque = casque;
        this.bottes = bottes;
        this.armure = armure;
        this.gants = gants;
        this.corde = corde;
        this.sphere = sphere;
    }
}

class Mainstat {

    constructor(name) {
        if (Mainstats_List.name == undefined) {
            this.name = name;
            this.value = Mainstats_List[name];
        }
        else throw new Error(name + 'n\'est pas une mainstat autorisée.');
    }
}

class Substat {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.value = Substats_List[name].high;
    }

    upgrade() {
        this.level += this.level;
        this.value += Substats_List[this.name].high;
    }
}

class Substats {
    constructor(substats) {
        this.sub1 = new Substat(substats[0], 0);
        this.sub2 = new Substat(substats[1], 0);
        this.sub3 = new Substat(substats[2], 0);
        this.sub4 = new Substat(substats[3], 0);
    }
}

class Artefact {

    constructor(mainstat, substats, type) {
        if (this.constructor === Artefact) throw new TypeError('Abstract class "AbstractConfig" cannot be instantiated directly');
        this.type = type;
        var list = [];
        this.mainstat = new Mainstat(mainstat);
        switch (this.type) {
            case 'Casque':
                list = ['hp'];
                break;
            case 'Bottes':
                list = ['hpp', 'atkp', 'defp', 'spd'];
                break;
            case 'Armure':
                list = ['hpp', 'atkp', 'defp', 'pre', 'hb', 'cr', 'dgc'];
                break;
            case 'Gants':
                list = ['atk'];
                break;
            case 'Corde':
                list = ['hpp', 'atkp', 'defp', 'be', 'er']
                break;
            case 'Sphere':
                list = ['hpp', 'atkp', 'defp', 'ed']
                break;
            default:
                throw new TypeError(this.className + ' n\'est pas un type d\'artefact possible.')
        }
        if (list.find((e) => e != this.mainstat.name)) throw new Error(mainstat + ' n\'est pas autorisée sur les artefacts de type' + this.type);

        console.log(substats);

        substats.forEach(element => {
            if (element == this.mainstat.name) throw new Error(element + ' est déjà utilisée en tant que mainstat et ne peut donc pas être une substat de cet artefact' + this.className);
        });

        this.substats = new Substats(substats);

    }

    upgrade(stat){

    }

}

class Casque extends Artefact {
    constructor(mainstat, substats) {
        super(mainstat, substats, 'Casque');
    }
}

class Bottes extends Artefact {
    constructor(mainstat, substats) {
        super(mainstat, substats, 'Bottes');
    }
}

class Armure extends Artefact {
    constructor(mainstat, substats) {
        super(mainstat, substats, 'Armure');
    }
}

class Gants extends Artefact {
    constructor(mainstat, substats) {
        super(mainstat, substats, 'Gants');
    }
}

class Corde extends Artefact {
    constructor(mainstat, substats) {
        super(mainstat, substats, 'Corde');
    }
}

class Sphere extends Artefact {
    constructor(mainstat, substats) {
        super(mainstat, substats, 'Sphere');
    }
}