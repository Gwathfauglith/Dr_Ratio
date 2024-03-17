Liste_Perso = {
    Sparkle : new Perso (
        {
            name : 'Sparkle',
            hp : new Stat ('hp', 2561, 28, 0),
            atk : new Stat ('atk', 1053, 0, 0),
            def : new Stat ('def', 948, 0, 0),
            spd : new Stat ('spd', 101, 0, 0),
            tc : new Stat_Percentage ('tc', 5, 0, 0),
            dgc : new Stat_Percentage ('dgc', 50, 0, 56),
            res : new Stat_Percentage ('res', 0, 0, 10),
            pre : new Stat_Percentage ('pre', 0, 0, 0),
            er : new Stat_Percentage ('er', 0, 0, 0),
            ed : new Stat_Percentage ('ed', 0, 0, 0),
            hb : new Stat_Percentage ('hb', 0, 0, 0),
            be : new Stat_Percentage ('be', 0, 0, 0),
            dmg : new Stat_Percentage ('dmg', 0, 0, 0),
            max_energy : 110,
            starting_energy : 65,
            auto_atk : new Attaque([new Stat_Modifier('atk', 100)], 0, 30),
            skill : new Damage_Buff([new Stat_Modifier('dgc', 24)], 45, 0, 30, 'dgc'),
            ultimate : new Damage_Buff([], 43.2, 0, 5, 'dmg'),
            passivBuffs : [new passivBuff('atk',15,0),new passivBuff('tc',10,0),new passivBuff('dgc',28,0)],
            cycle : ['skill', 'auto_atk']
        }
    ),
    BaseAtk : new Perso(
        {
            name : 'Base',
            hp : new Stat ('hp', 3000, 80, 352),
            atk : new Stat ('atk', 1350, 80, 352),
            def : new Stat ('def', 1200, 80, 352),
            spd : new Stat ('spd', 100, 0, 0),
            tc : new Stat_Percentage ('tc', 5, 0, 65),
            dgc : new Stat_Percentage ('dgc', 50, 0, 90),
            res : new Stat_Percentage ('res', 0, 0, 10),
            pre : new Stat_Percentage ('pre', 0, 0, 0),
            er : new Stat_Percentage ('er', 0, 0, 0),
            ed : new Stat_Percentage ('ed', 0, 0, 38.8803),
            hb : new Stat_Percentage ('hb', 0, 0, 0),
            be : new Stat_Percentage ('be', 0, 0, 0),
            dmg : new Stat_Percentage ('dmg', 0, 0, 0),
            skill : new Attaque([new Stat_Modifier("atk",300)], 0, 30)              
        }
    )
}


