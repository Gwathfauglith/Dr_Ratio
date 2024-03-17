function DPT(temps) {
    switch (temps) {
        case 'pureFiction':
            return (450);
        case 'memoryOfChaos':
            return (550);
        case 'moyenne':
            return (10050);
        default:
            throw Error(temps + ' n\'est pas une valeur de paramètre autorisée pour la fonction DPT.')
    }
}

function Damage(perso, skill) {
    BaseDamage = 0;

    skill.stats_modifiers.forEach(element => {
        BaseDamage += perso[element.stat].value() * element.facteur;
    })

    BaseDamage += skill.flat;

    return BaseDamage * (1 + perso.tc.value() * perso.dgc.value()) * (1 + perso.ed.value() + perso.dmg.value());
}

function Simulation(periode, perso, cycle) {
    score = 0;
    tailleCycle = cycle.length;
    compteur = 0;
    energy = perso.starting_energy;
    actions = new Object;

    if (cycle.find((e) => e == 'auto_atk') != undefined) {
        actions.auto_atk = perso.auto_atk;
        actions.auto_atk.score = 0;
    }

    if (cycle.find((e) => e == 'skill') != undefined) {
        actions.skill = perso.skill;
        actions.skill.score = 0;
    }

    actions.ultimate = perso.ultimate;
    actions.ultimate.score = 0;


    Object.values(actions).forEach(element => {

        switch (element.type) {
            case 'Attaque':
                element.score = Damage(perso, element);
                break;

            case 'Damage_Buff':
                BuffedBase = new Perso(
                    {
                        name: 'BuffedBase',
                        hp: new Stat('hp', 3000, 80, 352),
                        atk: new Stat('atk', 1350, 80, 352),
                        def: new Stat('def', 1200, 80, 352),
                        spd: new Stat('spd', 100, 0, 0),
                        tc: new Stat_Percentage('tc', 5, 0, 65),
                        dgc: new Stat_Percentage('dgc', 50, 0, 90),
                        res: new Stat_Percentage('res', 0, 0, 10),
                        pre: new Stat_Percentage('pre', 0, 0, 0),
                        er: new Stat_Percentage('er', 0, 0, 0),
                        ed: new Stat_Percentage('ed', 0, 0, 38.8803),
                        hb: new Stat_Percentage('hb', 0, 0, 0),
                        be: new Stat_Percentage('be', 0, 0, 0),
                        dmg: new Stat_Percentage('dmg', 0, 0, 0),
                        skill: new Attaque([new Stat_Modifier("atk", 300)], 0, 30)

                    }
                );

                Bonus = 0;

                element.stats_modifiers.forEach(element => {
                    Bonus += perso[element.stat].value() * element.modifier;
                })

                Bonus += element.flatMod;

                BuffedBase[element.statBuffed].bonus = BuffedBase[element.statBuffed].bonus + Bonus;

                element.score = Damage(BuffedBase, Liste_Perso.BaseAtk.skill) - Damage(Liste_Perso.BaseAtk, Liste_Perso.BaseAtk.skill) + element.flat;

                break;

            default:
                throw Error(element.type + ' n\'est pas un type autorisé pour les compétences.');
        }
    });

    console.log('');
    console.log('Simulation : ');
    console.log('');


    while (periode >= perso.actionValue) {
        periode -= perso.actionValue;
        score += actions[cycle[compteur % tailleCycle]].score;
        energy += actions[cycle[compteur % tailleCycle]].energy * (1 + perso.er.value() / 100);
        console.log(cycle[compteur % tailleCycle] + ' used !');
        console.log('Energy : ' + energy);
        console.log('Score : ' + actions[cycle[compteur % tailleCycle]].score);
        console.log('');
        if (energy >= perso.max_energy) {
            score += actions.ultimate.score;
            energy = 5;
            console.log('ultimate used !');
            console.log('Score : ' + actions.ultimate.score);
            console.log('');
        }
        compteur++;
    }

    console.log('Score : ', score);
    return score;
}

function calcul_degats(perso, type, temps) {
    periode = DPT(temps);
    console.log('Démarrage de la simulation');
    console.log('Type : ' + type);
    console.log('Durée : ' + periode);
    console.log(perso);

    switch (type) {
        case 'onlyBaseAttack':
            return Simulation(periode, perso, ['auto_attack']);
        case 'onlySkill':
            return Simulation(periode, perso, ['skill']);
        case 'goodRotation':
            return Simulation(periode, perso, perso.cycle);
        default:
            throw Error(type + ' n\'est pas un type de calcul de dégats possible.');
    }
}

function calcul_substats() {

}

function calcul_mainstats(perso) {
    casque = new Casque('hp', ['tc', 'dgc', 'atkp', 'spd']);
    console.log(casque);
}

function optimiser_artefacts(perso) {
    calcul_mainstats(perso);
    calcul_substats(perso);
}

function optimiser(perso, type) {
    optimiser_artefacts(perso);
}