equip_list_effects = [
    {
        "id": 0,
        "name": "None",
        "options": [
            { "id": 0, "name": "None", "stats": []}
        ],
        "requirement": false,
    },
    {
        "id": 82,
        "name": "Superconduct",
        "options": [
            { "id": 0, "name": "Debuff", "stats": [{ "stat": "enemyphysicalres", "value": -40 }] }
        ],
        "requirement": false,
    },
    {
        "id": 83,
        "name": "Viridescent Venerer",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - Cryo", "stats": [{ "stat": "enemycryores", "value": -40 }] },
            { "id": 1, "name": "4 Piece Bonus - Electro", "stats": [{ "stat": "enemyelectrores", "value": -40 }] },
            { "id": 2, "name": "4 Piece Bonus - Hydro", "stats": [{ "stat": "enemyhydrores", "value": -40 }] },
            { "id": 3, "name": "4 Piece Bonus - Pyro", "stats": [{ "stat": "enemypyrores", "value": -40 }] }
        ],
        "requirement": false,
    },
    {
        "id": 87,
        "name": "Archaic Petra",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - Cryo", "stats": [{ "stat": "cryo", "value": 35 }] },
            { "id": 1, "name": "4 Piece Bonus - Electro", "stats": [{ "stat": "electro", "value": 35 }] },
            { "id": 2, "name": "4 Piece Bonus - Hydro", "stats": [{ "stat": "hydro", "value": 35 }] },
            { "id": 3, "name": "4 Piece Bonus - Pyro", "stats": [{ "stat": "pyro", "value": 35 }] },
        ],
        "requirement": false
    },
    {
        "id": 93,
        "name": "Noblesse Oblige",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - After Elemental Burst", "stats": [{ "stat": "atk%", "value": 20 }] },
        ],
        "requirement": false
    },
    {
        "id": 94,
        "name": "Maiden Beloved",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - After Skill/Burst", "stats": [{ "stat": "healinginc", "value": 20 }] },
        ],
        "requirement": false
    },
    {
        "id": 99,
        "name": "Instructor",
        "options": [
            { "id": 0, "name": "4 Piece Bonus", "stats": [{ "stat": "elemastery", "value": 120 }] },
        ],
        "requirement": false
    },
    {
        "id": 379,
        "name": "Tenacity of the Millelith",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - After Elemental Skill Hit", "stats": [{ "stat": "atk%", "value": 20 }, { "stat": "shield", "value": 30 }] },
        ],
        "requirement": false
    },
    {
        "id": 583,
        "name": "Deepwood Memories",
        "options": [
            { "id": 0, "name": "4 Piece Bonus", "stats": [{ "stat": "enemydendrores", "value": -30 }] }
        ],
        "requirement": false,
    },
    {
        "id": 431,
        "name": "Thrilling Tales of Dragon Slayers",
        "options": [
            { "id": 0, "name": "Refine 5", "stats": [{ "stat": "atk%", "value": 48 }] },
            { "id": 1, "name": "Refine 4", "stats": [{ "stat": "atk%", "value": 42 }] },
            { "id": 2, "name": "Refine 3", "stats": [{ "stat": "atk%", "value": 36 }] },
            { "id": 3, "name": "Refine 2", "stats": [{ "stat": "atk%", "value": 30 }] },
            { "id": 4, "name": "Refine 1", "stats": [{ "stat": "atk%", "value": 24 }] }
        ],
        "requirement": false
    },
    {
        "id": 472,
        "name": "Wolf's Gravestone",
        "options": [
            { "id": 0, "name": "Refine 5", "stats": [{ "stat": "atk%", "value": 80 }] },
            { "id": 1, "name": "Refine 4", "stats": [{ "stat": "atk%", "value": 70 }] },
            { "id": 2, "name": "Refine 3", "stats": [{ "stat": "atk%", "value": 60 }] },
            { "id": 3, "name": "Refine 2", "stats": [{ "stat": "atk%", "value": 50 }] },
            { "id": 4, "name": "Refine 1", "stats": [{ "stat": "atk%", "value": 40 }] }
        ],
        "manual": true,
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 20, "refine": -1 }
    },
    {
        "id": 437,
        "name": "Hakushin Ring",
        "options": [
            { "id": 0, "name": "Refine 5", "stats": [{ "stat": "elemental", "value": 20 }] },
            { "id": 1, "name": "Refine 4", "stats": [{ "stat": "elemental", "value": 17.5 }] },
            { "id": 2, "name": "Refine 3", "stats": [{ "stat": "elemental", "value": 15 }] },
            { "id": 3, "name": "Refine 2", "stats": [{ "stat": "elemental", "value": 12.5 }] },
            { "id": 4, "name": "Refine 1", "stats": [{ "stat": "elemental", "value": 10 }] }
        ],
        "manual": true,
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 24, "refine": -1 }
    },
    {
        "id": 473,
        "name": "Millenial Movement",
        "options": [
            { "id": 0, "name": "Farewell Song - Refine 5", "stats": [{ "stat": "elemastery", "value": 200 }, { "stat": "atk%", "value": 40 }] },
            { "id": 1, "name": "Farewell Song - Refine 4", "stats": [{ "stat": "elemastery", "value": 175 }, { "stat": "atk%", "value": 35 }] },
            { "id": 2, "name": "Farewell Song - Refine 3", "stats": [{ "stat": "elemastery", "value": 150 }, { "stat": "atk%", "value": 30 }] },
            { "id": 3, "name": "Farewell Song - Refine 2", "stats": [{ "stat": "elemastery", "value": 125 }, { "stat": "atk%", "value": 25 }] },
            { "id": 4, "name": "Farewell Song - Refine 1", "stats": [{ "stat": "elemastery", "value": 100 }, { "stat": "atk%", "value": 20 }] },
            { "id": 5, "name": "Banner-Hymn - Refine 5", "stats": [{ "stat": "aspeed", "value": 24 }, { "stat": "atk%", "value": 40 }] },
            { "id": 6, "name": "Banner-Hymn - Refine 4", "stats": [{ "stat": "aspeed", "value": 21 }, { "stat": "atk%", "value": 35 }] },
            { "id": 7, "name": "Banner-Hymn - Refine 3", "stats": [{ "stat": "aspeed", "value": 18 }, { "stat": "atk%", "value": 30 }] },
            { "id": 8, "name": "Banner-Hymn - Refine 2", "stats": [{ "stat": "aspeed", "value": 15 }, { "stat": "atk%", "value": 25 }] },
            { "id": 9, "name": "Banner-Hymn - Refine 1", "stats": [{ "stat": "aspeed", "value": 12 }, { "stat": "atk%", "value": 20 }] },
            { "id": 10, "name": "Song of Resistance - Refine 5", "stats": [{ "stat": "normal", "value": 32 }, { "stat": "charged", "value": 32 }, { "stat": "plunge", "value": 32 }, { "stat": "atk%", "value": 40 }] },
            { "id": 11, "name": "Song of Resistance - Refine 4", "stats": [{ "stat": "normal", "value": 28 }, { "stat": "charged", "value": 28 }, { "stat": "plunge", "value": 28 }, { "stat": "atk%", "value": 35 }] },
            { "id": 12, "name": "Song of Resistance - Refine 3", "stats": [{ "stat": "normal", "value": 24 }, { "stat": "charged", "value": 24 }, { "stat": "plunge", "value": 24 }, { "stat": "atk%", "value": 30 }] },
            { "id": 13, "name": "Song of Resistance - Refine 2", "stats": [{ "stat": "normal", "value": 20 }, { "stat": "charged", "value": 20 }, { "stat": "plunge", "value": 20 }, { "stat": "atk%", "value": 25 }] },
            { "id": 14, "name": "Song of Resistance - Refine 1", "stats": [{ "stat": "normal", "value": 16 }, { "stat": "charged", "value": 16 }, { "stat": "plunge", "value": 16 }, { "stat": "atk%", "value": 20 }] }
        ],
        "manual": true,
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "bow", "id": 21, "refine": -1 }, { "type": "weapon", "subtype": "claymore", "id": 23, "refine": -1 }, { "type": "weapon", "subtype": "sword", "id": 25, "refine": -1 }]
    },
    {
        "id": 581,
        "name": "Leaf of Consciousness",
        "options": [
            { "id": 0, "name": "Refine 5", "stats": [{ "stat": "elemastery", "value": 120 }] },
            { "id": 1, "name": "Refine 4", "stats": [{ "stat": "elemastery", "value": 105 }] },
            { "id": 2, "name": "Refine 3", "stats": [{ "stat": "elemastery", "value": 90 }] },
            { "id": 3, "name": "Refine 2", "stats": [{ "stat": "elemastery", "value": 75 }] },
            { "id": 4, "name": "Refine 1", "stats": [{ "stat": "elemastery", "value": 60 }] }
        ],
        "manual": true,
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "claymore", "id": 30, "refine": -1 }, { "type": "weapon", "subtype": "sword", "id": 30, "refine": -1 }]
    },
    {
        "id": 582,
        "name": "Leaf of Revival",
        "options": [
            { "id": 0, "name": "Refine 5", "stats": [{ "stat": "atk%", "value": 32 }] },
            { "id": 1, "name": "Refine 4", "stats": [{ "stat": "atk%", "value": 28 }] },
            { "id": 2, "name": "Refine 3", "stats": [{ "stat": "atk%", "value": 24 }] },
            { "id": 3, "name": "Refine 2", "stats": [{ "stat": "atk%", "value": 20 }] },
            { "id": 4, "name": "Refine 1", "stats": [{ "stat": "atk%", "value": 16 }] }
        ],
        "manual": true,
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 25, "refine": -1 }
    }, 
    {
        "id": 474,
        "name": "Spiral Abyss Floors",
        "options": [
            { "id": 0, "name": "Floor 1", "stats": [{ "stat": "pyro", "value": 75 }, { "stat": "overload", "value": 200 }] },
            { "id": 1, "name": "Floor 2", "stats": [{ "stat": "cryo", "value": 75 }] },
            { "id": 2, "name": "Floor 3", "stats": [{ "stat": "anemo", "value": 75 }, { "stat": "swirl", "value": 300 }] },
            { "id": 3, "name": "Floor 4", "stats": [{ "stat": "electro", "value": 75 }, { "stat": "electrocharged", "value": 150 }] },
            { "id": 4, "name": "Floor 5", "stats": [{ "stat": "atk%", "value": 25 }, { "stat": "def%", "value": 25 }, { "stat": "aspeed", "value": 20 }, { "stat": "mspeed", "value": 20 }, { "stat": "crit", "value": 10 }, { "stat": "critdmg", "value": 20 }] },
            { "id": 5, "name": "Floor 6", "stats": [{ "stat": "atk%", "value": 60 }, { "stat": "aspeed", "value": 30 }, { "stat": "mspeed", "value": 30 }] },
            { "id": 6, "name": "Floor 7", "stats": [{ "stat": "critdmg", "value": 120 }] },
            { "id": 7, "name": "Floor 8", "stats": [{ "stat": "atk%", "value": 50 }, { "stat": "def%", "value": 50 }, { "stat": "aspeed", "value": 30 }, { "stat": "mspeed", "value": 30 }, { "stat": "crit", "value": 20 }, { "stat": "critdmg", "value": 40 }] },
        ],
        "requirement": false,
    },
    {
        "id": 475,
        "name": "Spiral Abyss Benediction - Floor (1)",
        "options": [
            { "id": 0, "name": "Character ATK +20%", "stats": [{ "stat": "atk%", "value": 20 }] },
            { "id": 1, "name": "Character CRIT Rate +8%, CRIT DMG +15%", "stats": [{ "stat": "crit", "value": 8 }, { "stat": "critdmg", "value": 15 }] },
            { "id": 2, "name": "Character DEF +30%", "stats": [{ "stat": "def%", "value": 30 }] },
            { "id": 3, "name": "Character DMG within 8s of sprint +20%. Can occur only once every 15s.", "stats": [{ "stat": "all", "value": 20 }] },
            { "id": 4, "name": "Character Elemental Burst DMG +20%", "stats": [{ "stat": "burst", "value": 20 }] },
            { "id": 5, "name": "Character Elemental Mastery +80", "stats": [{ "stat": "elemastery", "value": 80 }] },
            { "id": 6, "name": "Character Elemental Skill DMG +20%", "stats": [{ "stat": "skill", "value": 20 }] },
            { "id": 7, "name": "Character Energy Recharge +20%", "stats": [{ "stat": "recharge", "value": 20 }] },
            { "id": 8, "name": "Character Healing Effectiveness is increased by 20%.", "stats": [{ "stat": "healing", "value": 20 }] },
            { "id": 9, "name": "Character Max HP +25%", "stats": [{ "stat": "hp%", "value": 25 }] },
            { "id": 10, "name": "Character Normal and Charged Attack DMG +20%", "stats": [{ "stat": "normal", "value": 20 }, { "stat": "charged", "value": 20 }] },
            { "id": 11, "name": "Character Physical DMG +25%", "stats": [{ "stat": "physical", "value": 25 }] },
            { "id": 12, "name": "Increases Character DMG dealt to opponents' weak points by 30%.", "stats": [{ "stat": "all", "value": 30 }] },
        ],
        "requirement": false,
    },
    {
        "id": 476,
        "name": "Spiral Abyss Benediction - Floor (2)",
        "options": [
            { "id": 0, "name": "Character ATK +20%", "stats": [{ "stat": "atk%", "value": 20 }] },
            { "id": 1, "name": "Character CRIT Rate +8%, CRIT DMG +15%", "stats": [{ "stat": "crit", "value": 8 }, { "stat": "critdmg", "value": 15 }] },
            { "id": 2, "name": "Character DEF +30%", "stats": [{ "stat": "def%", "value": 30 }] },
            { "id": 3, "name": "Character DMG within 8s of sprint +20%. Can occur only once every 15s.", "stats": [{ "stat": "all", "value": 20 }] },
            { "id": 4, "name": "Character Elemental Burst DMG +20%", "stats": [{ "stat": "burst", "value": 20 }] },
            { "id": 5, "name": "Character Elemental Mastery +80", "stats": [{ "stat": "elemastery", "value": 80 }] },
            { "id": 6, "name": "Character Elemental Skill DMG +20%", "stats": [{ "stat": "skill", "value": 20 }] },
            { "id": 7, "name": "Character Energy Recharge +20%", "stats": [{ "stat": "recharge", "value": 20 }] },
            { "id": 8, "name": "Character Healing Effectiveness is increased by 20%.", "stats": [{ "stat": "healing", "value": 20 }] },
            { "id": 9, "name": "Character Max HP +25%", "stats": [{ "stat": "hp%", "value": 25 }] },
            { "id": 10, "name": "Character Normal and Charged Attack DMG +20%", "stats": [{ "stat": "normal", "value": 20 }, { "stat": "charged", "value": 20 }] },
            { "id": 11, "name": "Character Physical DMG +25%", "stats": [{ "stat": "physical", "value": 25 }] },
            { "id": 12, "name": "Increases Character DMG dealt to opponents' weak points by 30%.", "stats": [{ "stat": "all", "value": 30 }] },
        ],
        "requirement": false,
    },
    {
        "id": 477,
        "name": "Spiral Abyss Benediction - Floor (3)",
        "options": [
            { "id": 0, "name": "Character ATK +20%", "stats": [{ "stat": "atk%", "value": 20 }] },
            { "id": 1, "name": "Character CRIT Rate +8%, CRIT DMG +15%", "stats": [{ "stat": "crit", "value": 8 }, { "stat": "critdmg", "value": 15 }] },
            { "id": 2, "name": "Character DEF +30%", "stats": [{ "stat": "def%", "value": 30 }] },
            { "id": 3, "name": "Character DMG within 8s of sprint +20%. Can occur only once every 15s.", "stats": [{ "stat": "all", "value": 20 }] },
            { "id": 4, "name": "Character Elemental Burst DMG +20%", "stats": [{ "stat": "burst", "value": 20 }] },
            { "id": 5, "name": "Character Elemental Mastery +80", "stats": [{ "stat": "elemastery", "value": 80 }] },
            { "id": 6, "name": "Character Elemental Skill DMG +20%", "stats": [{ "stat": "skill", "value": 20 }] },
            { "id": 7, "name": "Character Energy Recharge +20%", "stats": [{ "stat": "recharge", "value": 20 }] },
            { "id": 8, "name": "Character Healing Effectiveness is increased by 20%.", "stats": [{ "stat": "healing", "value": 20 }] },
            { "id": 9, "name": "Character Max HP +25%", "stats": [{ "stat": "hp%", "value": 25 }] },
            { "id": 10, "name": "Character Normal and Charged Attack DMG +20%", "stats": [{ "stat": "normal", "value": 20 }, { "stat": "charged", "value": 20 }] },
            { "id": 11, "name": "Character Physical DMG +25%", "stats": [{ "stat": "physical", "value": 25 }] },
            { "id": 12, "name": "Increases Character DMG dealt to opponents' weak points by 30%.", "stats": [{ "stat": "all", "value": 30 }] },
        ],
        "requirement": false,
    },
    {
        "id": 478,
        "name": "Spiral Abyss Benediction - Chamber",
        "options": [
            { "id": 0, "name": "When Character HP is greater than 50%, ATK +30%", "stats": [{ "stat": "atk%", "value": 30 }] },
            { "id": 1, "name": "When Character HP is greater than 50%, DEF +40%", "stats": [{ "stat": "def%", "value": 40 }] },
            { "id": 2, "name": "When Character HP is less than 50%, ATK +60%", "stats": [{ "stat": "atk%", "value": 60 }] },
            { "id": 3, "name": "When Character HP is less than 50%, DEF +80%", "stats": [{ "stat": "def%", "value": 80 }] },
            { "id": 4, "name": "Character All Elemental RES +25%", "stats": [{ "stat": "elementalres", "value": 25 }] },
            { "id": 5, "name": "Character DEF -15%, ATK +40%", "stats": [{ "stat": "atk%", "value": 40 }, { "stat": "def%", "value": -15 }] },
            { "id": 6, "name": "Character Elemental Skill and Burst CD -20%", "stats": [{ "stat": "cdr", "value": 20 }] },
            { "id": 7, "name": "Character Movement SPD +30%", "stats": [{ "stat": "mspeed", "value": 30 }] },
            { "id": 8, "name": "Character Normal Attack SPD +25%", "stats": [{ "stat": "aspeed", "value": 25 }] },
            { "id": 9, "name": "Character Anemo RES +35%", "stats": [{ "stat": "anemores", "value": 35 }] },
            { "id": 10, "name": "Character Cryo RES +35%", "stats": [{ "stat": "cryres", "value": 35 }] },
            { "id": 11, "name": "Character Dendro RES +35%", "stats": [{ "stat": "dendrores", "value": 35 }] },
            { "id": 12, "name": "Character Electro RES +35%", "stats": [{ "stat": "electrores", "value": 35 }] },
            { "id": 13, "name": "Character Geo RES +35%", "stats": [{ "stat": "geores", "value": 35 }] },
            { "id": 14, "name": "Character Hydro RES +35%", "stats": [{ "stat": "hydrores", "value": 35 }] },
            { "id": 15, "name": "Character Physical DMG RES +30%", "stats": [{ "stat": "physicalres", "value": 30 }] },
            { "id": 16, "name": "Character Pyro RES +35%", "stats": [{ "stat": "pyrores", "value": 35 }] }

        ],
        "requirement": false,
    },
    {
        "id": 538,
        "name": "Food - Offensive",
        "options": [
            { "id": 0, "name": "ATK 5* - Delicious", "stats": [{ "stat": "atk", "value": 372 }, { "stat": "crit", "value": 12 }] },
            { "id": 1, "name": "ATK 5* - Normal", "stats": [{ "stat": "atk", "value": 316 }, { "stat": "crit", "value": 10 }] },
            { "id": 2, "name": "ATK 5* - Suspicious", "stats": [{ "stat": "atk", "value": 260 }, { "stat": "crit", "value": 8 }] },
            { "id": 3, "name": "ATK 4* - Delicious", "stats": [{ "stat": "atk", "value": 320 }, { "stat": "crit", "value": 10 }] },
            { "id": 4, "name": "ATK 4* - Normal", "stats": [{ "stat": "atk", "value": 272 }, { "stat": "crit", "value": 8 }] },
            { "id": 5, "name": "ATK 4* - Suspicious", "stats": [{ "stat": "atk", "value": 224 }, { "stat": "crit", "value": 6 }] },
            { "id": 6, "name": "Phys 4* - Delicious", "stats": [{ "stat": "physical", "value": 45 }, { "stat": "crit", "value": 10 }] },
            { "id": 7, "name": "Phys 4* - Normal", "stats": [{ "stat": "physical", "value": 30 }, { "stat": "crit", "value": 8 }] },
            { "id": 8, "name": "Phys 4* - Suspicious", "stats": [{ "stat": "physical", "value": 25 }, { "stat": "crit", "value": 6 }] },
            { "id": 9, "name": "ATK 3* - Delicious", "stats": [{ "stat": "atk", "value": 228 }] },
            { "id": 10, "name": "ATK 3* - Normal", "stats": [{ "stat": "atk", "value": 194 }] },
            { "id": 11, "name": "ATK 3* - Suspicious", "stats": [{ "stat": "atk", "value": 160 }] },
            { "id": 12, "name": "Phys 3* - Delicious", "stats": [{ "stat": "physical", "value": 40 }] },
            { "id": 13, "name": "Phys 3* - Normal", "stats": [{ "stat": "physical", "value": 30 }] },
            { "id": 14, "name": "Phys 3* - Suspicious", "stats": [{ "stat": "physical", "value": 20 }] },
            { "id": 15, "name": "Crit 3* - Delicious", "stats": [{ "stat": "crit", "value": 20 }] },
            { "id": 16, "name": "Crit 3* - Normal", "stats": [{ "stat": "crit", "value": 15 }] },
            { "id": 17, "name": "Crit 3* - Suspicious", "stats": [{ "stat": "crit", "value": 10 }] },
            { "id": 18, "name": "ATK 2* - Delicious", "stats": [{ "stat": "atk", "value": 95 }] },
            { "id": 19, "name": "ATK 2* - Normal", "stats": [{ "stat": "atk", "value": 81 }] },
            { "id": 20, "name": "ATK 2* - Suspicious", "stats": [{ "stat": "atk", "value": 66 }] },
            { "id": 21, "name": "Crit 2* - Delicious", "stats": [{ "stat": "crit", "value": 12 }] },
            { "id": 22, "name": "Crit 2* - Normal", "stats": [{ "stat": "crit", "value": 9 }] },
            { "id": 23, "name": "Crit 2* - Suspicious", "stats": [{ "stat": "crit", "value": 6 }] },
            { "id": 24, "name": "Speciality ATK 3*", "stats": [{ "stat": "atk", "value": 274 }] },
            { "id": 25, "name": "Speciality Phys 3*", "stats": [{ "stat": "phys", "value": 55 }] },
            { "id": 26, "name": "Speciality Crit 3*", "stats": [{ "stat": "crit", "value": 20 }, { "stat": "critdmg", "value": 20 }] },
            { "id": 27, "name": "Speciality ATK 2*", "stats": [{ "stat": "atk", "value": 114 }] },
            { "id": 28, "name": "Speciality Crit 2*", "stats": [{ "stat": "crit", "value": 16 }] }

        ],
        "requirement": false
    },
    {
        "id": 539,
        "name": "Food - Defensive",
        "options": [
            { "id": 0, "name": "Healing 4* - Delicious", "stats": [{ "stat": "def", "value": 308 }, { "stat": "healing", "value": 10 }] },
            { "id": 1, "name": "Healing 4* - Normal", "stats": [{ "stat": "def", "value": 261 }, { "stat": "healing", "value": 8 }] },
            { "id": 2, "name": "Healing 4* - Suspicious", "stats": [{ "stat": "def", "value": 215 }, { "stat": "healing", "value": 6 }] },
            { "id": 3, "name": "Shield 4* - Delicious", "stats": [{ "stat": "def", "value": 235 }, { "stat": "shield", "value": 35 }] },
            { "id": 4, "name": "Shield 4* - Normal", "stats": [{ "stat": "def", "value": 200 }, { "stat": "shield", "value": 30 }] },
            { "id": 5, "name": "Shield 4* - Suspicious", "stats": [{ "stat": "def", "value": 165 }, { "stat": "shield", "value": 25 }] },
            { "id": 6, "name": "DEF 3* - Delicious", "stats": [{ "stat": "def", "value": 235 }] },
            { "id": 7, "name": "DEF 3* - Normal", "stats": [{ "stat": "def", "value": 200 }] },
            { "id": 8, "name": "DEF 3* - Suspicious", "stats": [{ "stat": "def", "value": 165 }] },
            { "id": 9, "name": "HP 3* - Delicious", "stats": [{ "stat": "hp%", "value": 25 }] },
            { "id": 10, "name": "HP 3* - Normal", "stats": [{ "stat": "hp%", "value": 22 }] },
            { "id": 11, "name": "HP 3* - Suspicious", "stats": [{ "stat": "hp%", "value": 20 }] },
            { "id": 12, "name": "Healing 3* - Delicious", "stats": [{ "stat": "healing", "value": 20 }] },
            { "id": 13, "name": "Healing 3* - Normal", "stats": [{ "stat": "healing", "value": 17 }] },
            { "id": 14, "name": "Healing 3* - Suspicious", "stats": [{ "stat": "healing", "value": 15 }] },
            { "id": 15, "name": "Shield 3* - Delicious", "stats": [{ "stat": "shield", "value": 30 }] },
            { "id": 16, "name": "Shield 3* - Normal", "stats": [{ "stat": "shield", "value": 25 }] },
            { "id": 17, "name": "Shield 3* - Suspicious", "stats": [{ "stat": "shield", "value": 20 }] },
            { "id": 18, "name": "DEF 2* - Delicious", "stats": [{ "stat": "def", "value": 126 }] },
            { "id": 19, "name": "DEF 2* - Normal", "stats": [{ "stat": "def", "value": 107 }] },
            { "id": 20, "name": "DEF 2* - Suspicious", "stats": [{ "stat": "def", "value": 88 }] },
            { "id": 21, "name": "Speciality Shield 4*", "stats": [{ "stat": "def", "value": 282 }, { "stat": "shield", "value": 40 }] },
            { "id": 22, "name": "Speciality Shield 3*", "stats": [{ "stat": "shield", "value": 35 }] },
            { "id": 23, "name": "Speciality DEF 3*", "stats": [{ "stat": "def", "value": 282 }] },
            { "id": 24, "name": "Speciality DEF 2*", "stats": [{ "stat": "def", "value": 151 }] }

        ],
        "requirement": false
    },
    {
        "id": 540,
        "name": "Food - Elemental",
        "options": [
            { "id": 0, "name": "Flaming Essential Oil", "stats": [{ "stat": "pyro", "value": 25 }] },
            { "id": 1, "name": "Streaming Essential Oil", "stats": [{ "stat": "hydro", "value": 25 }] },
            { "id": 2, "name": "Frosting Essential Oil", "stats": [{ "stat": "cryo", "value": 25 }] },
            { "id": 3, "name": "Gushing Essential Oil", "stats": [{ "stat": "anemo", "value": 25 }] },
            { "id": 4, "name": "Shocking Essential Oil", "stats": [{ "stat": "electro", "value": 25 }] },
            { "id": 5, "name": "Unmoving Essential Oil", "stats": [{ "stat": "geo", "value": 25 }] },
            { "id": 6, "name": "Heatshield Potion", "stats": [{ "stat": "pyrores", "value": 25 }] },
            { "id": 7, "name": "Desiccant Potion", "stats": [{ "stat": "hydrores", "value": 25 }] },
            { "id": 8, "name": "Frostshield Potion", "stats": [{ "stat": "cryores", "value": 25 }] },
            { "id": 9, "name": "Windbarrier Potion", "stats": [{ "stat": "anemores", "value": 25 }] },
            { "id": 10, "name": "Insulation Potion", "stats": [{ "stat": "electrores", "value": 25 }] },
            { "id": 11, "name": "Dustproof Potion", "stats": [{ "stat": "geores", "value": 25 }] }
        ],
        "requirement": false
    },
    {
        "id": 1,
        "name": "Shattering Ice",
        "options": [
            { "id": 0, "name": "Against Cryo/Frozen", "stats": [{ "stat": "crit", "value": 15 }] }
        ],
        "requirement": { "type": "resonance", "id": "cryo", "count": 2},
    },
    {
        "id": 2,
        "name": "Enduring Rock",
        "options": [
            { "id": 0, "name": "While Shielded", "stats": [{ "stat": "all", "value": 15 }] }
        ],
        "requirement": { "type": "resonance", "id": "geo", "count":2 },
    },
    {
        "id": 3,
        "name": "Precise Shot",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 15 }] }
        ],
        "requirement": { "type": "character", "id": "amber" },
    },
    {
        "id": 4,
        "name": "Wildfire",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 15 }, { "stat": "mspeed", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "amber" },
    },
    {
        "id": 5,
        "name": "Glorious Season",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "stamina", "value": 12 }] }
        ],
        "requirement": { "type": "party", "id": "barbara" },
    },
    {
        "id": 6,
        "name": "Vitality Burst",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "hydro", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "barbara" },
    },
    {
        "id": 7,
        "name": "Lightning Storm",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "normal", "value": 15 }, { "stat": "charged", "value": 15 }, { "stat": "aspeed", "value": 15 }] }
        ],
        "requirement": { "type": "character", "id": "beidou" },
    },
    {
        "id": 8,
        "name": "Bane of Evil",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "enemyelectrores", "value": -15 }] }
        ],
        "requirement": { "type": "party", "id": "beidou" },
    },
    {
        "id": 9,
        "name": "Impasse Conqueror",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "recharge", "value": 30 }] }
        ],
        "requirement": { "type": "character", "id": "bennett" },
    },
    {
        "id": 10,
        "name": "Fire Ventures with Me - Infusion",
        "options": [
            { "id": 0, "name": "Buff", "overwrite": "pyro", "priority":0 }
        ],
        "requirement_type": "and",
        "requirement": [{ "type": "party", "id": "bennett" }, { "type": "weapon_type", "subtype": ["claymore", "polearm", "sword"] }],
    },
    {
        "id": 11,
        "name": "Steady Breathing",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "aspeed", "value": 8 }] }
        ],
        "requirement_type": "and",
        "requirement": [{ "type": "party", "id": "chongyun" }, { "type": "weapon_type", "subtype": ["claymore", "polearm", "sword"] }],
    },
    {
        "id": 12,
        "name": "Rimechaser Blade",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "enemycryores", "value": -10 }] }
        ],
        "requirement": { "type": "party", "id": "chongyun" },
    },
    {
        "id": 13,
        "name": "Blessing of Phoenix",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "pyro", "value": 20 }] }
        ],
        "requirement": { "type": "character", "id": "diluc" },
    },
    {
        "id": 14,
        "name": "Searing Ember",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 30 }, { "stat": "aspeed", "value": 15 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 20 }, { "stat": "aspeed", "value": 10 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 10 }, { "stat": "aspeed", "value": 5 }] }
        ],
        "requirement": { "type": "character", "id": "diluc" },
    },
    {
        "id": 15,
        "name": "Flowing Flame",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "skill", "value": 40 }] }
        ],
        "requirement": { "type": "character", "id": "diluc" },
    },
    {
        "id": 16,
        "name": "Flaming Sword, Nemesis of the Dark",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "normal", "value": 30 }, { "stat": "aspeed", "value": 30 }] }
        ],
        "requirement": { "type": "character", "id": "diluc" },
    },
    {
        "id": 17,
        "name": "Spiraling Tempest",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "skill", "value": 40 }] }
        ],
        "requirement": { "type": "character", "id": "jean" },
    },
    {
        "id": 18,
        "name": "People's Aegis",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "aspeed", "value": 15 }, { "stat": "mspeed", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "jean" },
    },
    {
        "id": 19,
        "name": "Lands of Dandelion",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "enemyanemores", "value": -40 }] }
        ],
        "requirement": { "type": "party", "id": "jean" },
    },
    {
        "id": 20,
        "name": "Excellent Blood",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "critnormal", "value": 15 }, { "stat": "critcharged", "value": 15 }] }
        ],
        "requirement": { "type": "character", "id": "kaeya" },
    },
    {
        "id": 21,
        "name": "Aristocratic Dignity",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "crit", "value": 15 }, { "stat": "recharge", "value": 15 }] }
        ],
        "requirement": { "type": "character", "id": "keqing" },
    },
    {
        "id": 22,
        "name": "Attunement",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 25 }] }
        ],
        "requirement": { "type": "character", "id": "keqing" },
    },
    {
        "id": 23,
        "name": "Tenacious Star",
        "options": [
            { "id": 0, "name": "4 Effects", "stats": [{ "stat": "electro", "value": 24 }] },
            { "id": 1, "name": "3 Effects", "stats": [{ "stat": "electro", "value": 18 }] },
            { "id": 2, "name": "2 Effects", "stats": [{ "stat": "electro", "value": 12 }] },
            { "id": 3, "name": "1 Effect", "stats": [{ "stat": "electro", "value": 6 }] }
        ],
        "requirement": { "type": "character", "id": "keqing" },
    },
    {
        "id": 24,
        "name": "Pounding Surprise",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "charged", "value": 25 }] }
        ],
        "requirement": { "type": "character", "id": "klee" },
    },
    {
        "id": 25,
        "name": "Explosive Frags",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "enemydef%", "value": -23 }] }
        ],
        "requirement": { "type": "party", "id": "klee" },
    },
    {
        "id": 26,
        "name": "Blazing Delight",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "pyro", "value": 10 }] }
        ],
        "requirement": { "type": "party", "id": "klee" },
    },
    {
        "id": 27,
        "name": "Static Electricity Field",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "enemydef%", "value": -15 }] }
        ],
        "requirement": { "type": "party", "id": "lisa" },
    },
    {
        "id": 28,
        "name": "Electromagnetic Field",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "def%", "value": 25 }] }
        ],
        "requirement": { "type": "character", "id": "lisa" },
    },
    {
        "id": 29,
        "name": "Prophecy of Submersion",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "electrocharged", "value": 15 }, { "stat": "vaporize", "value": 15 }, { "stat": "swirlhydro", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "mona" },
    },
    {
        "id": 30,
        "name": "Prophecy of Oblivion",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "crit", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "mona" },        
    },
    {
        "id": 31,
        "name": "Rhetorics of Calamitas",
        "options": [
            { "id": 0, "name": "3 Effects", "stats": [{ "stat": "charged", "value": 180 }] },
            { "id": 1, "name": "2 Effects", "stats": [{ "stat": "charged", "value": 120 }] },
            { "id": 2, "name": "1 Effect", "stats": [{ "stat": "charged", "value": 60 }] }
        ],
        "requirement": { "type": "character", "id": "mona" },
    },
    {
        "id": 32,
        "name": "Strategic Reserve",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "geo", "value": 12 }] }
        ],
        "requirement": { "type": "party", "id": "ningguang" },
    },
    {
        "id": 33,
        "name": "Exquisite be the Jade, Outshining All Beneath",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "elementalres", "value": 10 }] }
        ],
        "requirement": { "type": "party", "id": "ningguang" },
    },
    {
        "id": 34,
        "name": "Life-Prolonging Methods",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "healinginc", "value": 20 }] }
        ],
        "requirement": { "type": "party", "id": "qiqi" },
    },
    {
        "id": 35,
        "name": "Frozen to the Bone",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "normal", "value": 15 }, { "stat": "charged", "value": 15 }] }
        ],
        "requirement": { "type": "character", "id": "qiqi" },
    },
    {
        "id": 36,
        "name": "Hunger",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "recharge", "value": 15 }] }
        ],
        "requirement": { "type": "character", "id": "razor" },
    },
    {
        "id": 37,
        "name": "Wolf's Instinct",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "all", "value": 10 }] }
        ],
        "requirement": { "type": "character", "id": "razor" },
    },
    {
        "id": 38,
        "name": "Suppression",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "crit", "value": 10 }] }
        ],
        "requirement": { "type": "character", "id": "razor" },
    },
    {
        "id": 39,
        "name": "Bite",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "enemydef%", "value": -15 }] }
        ],
        "requirement": { "type": "party", "id": "razor" },
    },
    {
        "id": 40,
        "name": "Catalyst Conversion",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "elemastery", "value": 50 }] }
        ],
        "requirement": { "type": "party", "id": "sucrose" },
    },
    {
        "id": 41,
        "name": "Chaotic Entropy",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "elemental", "value": 20 }] }
        ],
        "requirement": { "type": "party", "id": "sucrose" },
    },
    {
        "id": 42,
        "name": "Intertwined Winds",
        "options": [
            { "id": 0, "name": "No Absorption", "stats": [{ "stat": "enemyanemores", "value": -20 }] },
            { "id": 1, "name": "Elemental Absorption - Cryo", "stats": [{ "stat": "enemyanemores", "value": -20 }, { "stat": "enemycryores", "value": -20 }] },
            { "id": 2, "name": "Elemental Absorption - Electro", "stats": [{ "stat": "enemyanemores", "value": -20 }, { "stat": "enemyelectrores", "value": -20 }] },
            { "id": 3, "name": "Elemental Absorption - Hydro", "stats": [{ "stat": "enemyanemores", "value": -20 }, { "stat": "enemyhydrores", "value": -20 }] },
            { "id": 4, "name": "Elemental Absorption - Pyro", "stats": [{ "stat": "enemyanemores", "value": -20 }, { "stat": "enemypyrores", "value": -20 }] }
        ],
        "requirement": { "type": "party", "id": "traveler_anemo" },
    },
    {
        "id": 43,
        "name": "Invincible Stonewall",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "crit", "value": 10 }] }
        ],
        "requirement": { "type": "party", "id": "traveler_geo" },
    },
    {
        "id": 44,
        "name": "Breeze of Reminiscence",
        "options": [
            { "id": 0, "name": "Debuff", "stats": [{ "stat": "enemyanemores", "value": -12 }, { "stat": "enemyphysicalres", "value": -12 }] },
            { "id": 1, "name": "While Airborne", "stats": [{ "stat": "enemyanemores", "value": -24 }, { "stat": "enemyphysicalres", "value": -24 }] }
        ],
        "requirement": { "type": "party", "id": "venti" },
    },
    {
        "id": 45,
        "name": "Hurricane of Freedom",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "anemo", "value": 25 }] }
        ],
        "requirement": { "type": "character", "id": "venti" },
    },
    {
        "id": 46,
        "name": "Storm of Defiance",
        "options": [
            { "id": 0, "name": "No Absorption", "stats": [{ "stat": "enemyanemores", "value": -20 }] },
            { "id": 1, "name": "Elemental Absorption - Cryo", "stats": [{ "stat": "enemyanemores", "value": -20 }, { "stat": "enemycryores", "value": -20 }] },
            { "id": 2, "name": "Elemental Absorption - Electro", "stats": [{ "stat": "enemyanemores", "value": -20 }, { "stat": "enemyelectrores", "value": -20 }] },
            { "id": 3, "name": "Elemental Absorption - Hydro", "stats": [{ "stat": "enemyanemores", "value": -20 }, { "stat": "enemyhydrores", "value": -20 }] },
            { "id": 4, "name": "Elemental Absorption - Pyro", "stats": [{ "stat": "enemyanemores", "value": -20 }, { "stat": "enemypyrores", "value": -20 }] }
        ],
        "requirement": { "type": "party", "id": "venti" },
    },
    {
        "id": 47,
        "name": "Crispy Outside, Tender Inside",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "enemypyrores", "value": -15 }] }
        ],
        "requirement": { "type": "party", "id": "xiangling" },
    },
    {
        "id": 48,
        "name": "Condensed Pyronado",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "pyro", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "xiangling" },
    },
    {
        "id": 49,
        "name": "Beware, It's Super Hot!",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 10 }] }
        ],
        "requirement": { "type": "party", "id": "xiangling" },
    },
    {
        "id": 50,
        "name": "Rainbow Upon the Azure Sky",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "enemyhydrores", "value": -15 }] }
        ],
        "requirement": { "type": "party", "id": "xingqiu" },
    },
    {
        "id": 51,
        "name": "Cat's Tail Secret Menu",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "mspeed", "value": 10 }, { "stat": "stamina", "value": 10 }] }
        ],
        "requirement": { "type": "party", "id": "diona" },
    },
    {
        "id": 52,
        "name": "Cat's Tail Closing Time",
        "options": [
            { "id": 0, "name": "Above 50% HP", "stats": [{ "stat": "elemastery", "value": 200 }] },
            { "id": 1, "name": "Below 50% HP", "stats": [{ "stat": "healinginc", "value": 30 }] }
        ],
        "requirement": { "type": "party", "id": "diona" },
    },
    {
        "id": 53,
        "name": "Master of Weaponry",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "levelnormal", "value": 1 }] }
        ],
        "requirement": { "type": "party", "id": "tartaglia" },
    },
    {
        "id": 54,
        "name": "Resonant Waves",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "shield", "value": 25 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "shield", "value": 20 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "shield", "value": 15 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "shield", "value": 10 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "shield", "value": 5 }] },
        ],
        "requirement": { "type": "party", "id": "zhongli" },
    },
    {
        "id": 55,
        "name": "...Now That's Rock 'N' Roll!",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "physical", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "xinyan" },
    },
    {
        "id": 56,
        "name": "Fatal Acceleration",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "aspeed", "value": 12 }] }
        ],
        "requirement": { "type": "character", "id": "xinyan" },
    },
    {
        "id": 57,
        "name": "Impromptu Opening",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "critburst", "value": 100 }] }
        ],
        "requirement": { "type": "character", "id": "xinyan" },
    },
    {
        "id": 58,
        "name": "Wildfire Rhythm",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "enemyphysicalres", "value": -15 }] }
        ],
        "requirement": { "type": "party", "id": "xinyan" },
    },
    {
        "id": 59,
        "name": "Waterborne Destiny",
        "options": [
            { "id": 0, "name": "Buff", "priority": 0 , "transform": {"source":"recharge", "target":"hydro", "ratio":0.2} }
        ],
        "requirement": { "type": "character", "id": "mona" },
    },
    {
        "id": 60,
        "name": "Must Be Spotless",
        "options": [
            { "id": 0, "name": "Buff", "priority": 0 , "transform": { "source": "def", "target": "atk", "ratio": 0.5 } }
        ],
        "requirement": { "type": "character", "id": "noelle" },
    },  
    {
        "id": 61,
        "name": "Sweeping Time",
        "options": [
            { "id": 0, "name": "Level 1", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.4 }, "overwrite": "geo", "priority": 0 },
            { "id": 1, "name": "Level 2", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.43 }, "overwrite": "geo", "priority": 0 },
            { "id": 2, "name": "Level 3", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.46 }, "overwrite": "geo", "priority": 0},
            { "id": 3, "name": "Level 4", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.5 }, "overwrite": "geo", "priority": 0},
            { "id": 4, "name": "Level 5", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.53 }, "overwrite": "geo", "priority": 0 },
            { "id": 5, "name": "Level 6", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.56 }, "overwrite": "geo", "priority": 0},
            { "id": 6, "name": "Level 7", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.6 }, "overwrite": "geo", "priority": 0},
            { "id": 7, "name": "Level 8", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.64 }, "overwrite": "geo", "priority": 0 },
            { "id": 8, "name": "Level 9", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.68 }, "overwrite": "geo", "priority": 0 },
            { "id": 9, "name": "Level 10", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.72 }, "overwrite": "geo", "priority": 0},
            { "id": 10, "name": "Level 11", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.76 }, "overwrite": "geo", "priority": 0 },
            { "id": 11, "name": "Level 12", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.8 }, "overwrite": "geo", "priority": 0},
            { "id": 12, "name": "Level 13", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.85 }, "overwrite": "geo", "priority": 0 },
            { "id": 13, "name": "Level 14", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.9 }, "overwrite": "geo", "priority": 0},
            { "id": 14, "name": "Level 15", "priority": 0, "transform": { "source": "def", "target": "atk", "ratio": 0.95 }, "overwrite": "geo", "priority": 0 },
        ],
        
        "requirement": { "type": "character", "id": "noelle" },
    },
    {
        "id": 62,
        "name": "Fantastic Voyage - Party",
        "options": [
            { "id": 0, "name": "Level 1", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 0.56 } },
            { "id": 1, "name": "Level 2", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 0.602 } },
            { "id": 2, "name": "Level 3", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 0.644 } },
            { "id": 3, "name": "Level 4", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 0.7 } },
            { "id": 4, "name": "Level 5", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 0.742 } },
            { "id": 5, "name": "Level 6", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 0.784 } },
            { "id": 6, "name": "Level 7", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 0.84 } },
            { "id": 7, "name": "Level 8", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 0.896 } },
            { "id": 8, "name": "Level 9", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 0.952 } },
            { "id": 9, "name": "Level 10", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 1.008 } },
            { "id": 10, "name": "Level 11", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 1.064 } },
            { "id": 11, "name": "Level 12", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 1.12 } },
            { "id": 12, "name": "Level 13", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 1.19 } },
            { "id": 13, "name": "Level 14", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 1.26 } },
            { "id": 14, "name": "Level 15", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 1.33 } },
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "bennett" }, { "type": "character", "id": "bennett" }]
    },
    {
        "id": 63,
        "name": "Grand Expectation - Party",
        "options": [
            { "id": 0, "name": "Buff", "priority": 0 , "transform": { "source": "bennettatk", "target": "atk", "ratio": 0.2 } },
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "bennett" }, { "type": "character", "id": "bennett" }]
    },
    {
        "id": 64,
        "name": "Fantastic Voyage - Self",
        "options": [
            { "id": 0, "name": "Level 1", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 0.56 } },
            { "id": 1, "name": "Level 2", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 0.602 } },
            { "id": 2, "name": "Level 3", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 0.644 } },
            { "id": 3, "name": "Level 4", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 0.7 } },
            { "id": 4, "name": "Level 5", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 0.742 } },
            { "id": 5, "name": "Level 6", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 0.784 } },
            { "id": 6, "name": "Level 7", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 0.84 } },
            { "id": 7, "name": "Level 8", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 0.896 } },
            { "id": 8, "name": "Level 9", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 0.952 } },
            { "id": 9, "name": "Level 10", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 1.008 } },
            { "id": 10, "name": "Level 11", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 1.064 } },
            { "id": 11, "name": "Level 12", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 1.12 } },
            { "id": 12, "name": "Level 13", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 1.19 } },
            { "id": 13, "name": "Level 14", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 1.26 } },
            { "id": 14, "name": "Level 15", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 1.33 } },
        ],
        "requirement": { "type": "character", "id": "bennett" }
    },
    {
        "id": 65,
        "name": "Grand Expectation - Self",
        "options": [
            { "id": 0, "name": "Buff", "priority": 0 , "transform": { "source": "atk_base", "target": "atk", "ratio": 0.2 } },
        ],
        "requirement": { "type": "character", "id": "bennett" }
    },
    {
        "id": 66,
        "name": "Mollis Favonius",
        "options": [
            { "id": 0, "name": "Buff", "priority": 0 , "transform": { "source": "sucroseelemastery", "target": "elemastery", "ratio": 0.2 } },
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "sucrose" }, { "type": "character", "id": "sucrose" }]
    },
    {
        "id": 67,
        "name": "Rally of Four Blades",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "burst", "value": 15 }] }
        ],
        "requirement": { "type": "character", "id": "chongyun" }
    },
    {
        "id": 68,
        "name": "Atmospheric Revolution",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "cdr", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "chongyun" }
    },
    {
        "id": 69,
        "name": "Conviction",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "all", "value": 15 }] }
        ],
        "requirement": { "type": "character", "id": "diluc" }
    },
    {
        "id": 70,
        "name": "Illusory Bubble",
        "options": [
            { "id": 0, "name": "Level 1", "stats": [{ "stat": "all", "value": 42 }] },
            { "id": 1, "name": "Level 2", "stats": [{ "stat": "all", "value": 44 }] },
            { "id": 2, "name": "Level 3", "stats": [{ "stat": "all", "value": 46 }] },
            { "id": 3, "name": "Level 4", "stats": [{ "stat": "all", "value": 48 }] },
            { "id": 4, "name": "Level 5", "stats": [{ "stat": "all", "value": 50 }] },
            { "id": 5, "name": "Level 6", "stats": [{ "stat": "all", "value": 52 }] },
            { "id": 6, "name": "Level 7", "stats": [{ "stat": "all", "value": 54 }] },
            { "id": 7, "name": "Level 8", "stats": [{ "stat": "all", "value": 56 }] },
            { "id": 8, "name": "Level 9", "stats": [{ "stat": "all", "value": 58 }] },
            { "id": 9, "name": "Level 10", "stats": [{ "stat": "all", "value":60 }] },
            { "id": 10, "name": "Level 11", "stats": [{ "stat": "all", "value": 60 }] },
            { "id": 11, "name": "Level 12", "stats": [{ "stat": "all", "value": 60 }] },
            { "id": 12, "name": "Level 13", "stats": [{ "stat": "all", "value": 60 }] },
            { "id": 13, "name": "Level 14", "stats": [{ "stat": "all", "value": 60 }] },
            { "id": 14, "name": "Level 15", "stats": [{ "stat": "all", "value": 60 }] },
        ],
        "requirement": { "type": "party", "id": "mona" }
    },
    {
        "id": 71,
        "name": "Stellar Restoration",
        "options": [
            { "id": 0, "name": "Buff", "overwrite": "electro", "priority": 0}
        ],
        "requirement": { "type": "character", "id": "keqing" }
    },
    {
        "id": 72,
        "name": "Dawn",
        "options": [
            { "id": 0, "name": "Buff", "overwrite": "pyro", "priority": 0 }
        ],
        "requirement": { "type": "character", "id": "diluc" }
    },
    {
        "id": 73,
        "name": "Spirit Blade - Chonghua's Layered Frost",
        "options": [
            { "id": 0, "name": "Buff", "overwrite": "cryo", "priority": 0 }
        ],
        "requirement_type": "and",
        "requirement": [{ "type": "party", "id": "chongyun" }, { "type": "weapon_type", "subtype": ["claymore", "polearm", "sword"] }],
    },
    {
        "id": 74,
        "name": "Dust of Purification",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "all", "value": 17 }] }
        ],
        "requirement": { "type": "party", "id": "albedo" }
    },
    {
        "id": 75,
        "name": "Descent of Divinity",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "plunge", "value": 30 }] }
        ],
        "requirement": { "type": "party", "id": "albedo" }
    },
    {
        "id": 76,
        "name": "Calcite Might",
        "options": [
            { "id": 0, "name": "Against <50%", "stats": [{ "stat": "skill", "value": 25 }] }
        ],
        "requirement": { "type": "character", "id": "albedo" }
    },
    {
        "id": 77,
        "name": "Homuncular Nature",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "elemastery", "value": 125 }] }
        ],
        "requirement": { "type": "party", "id": "albedo" }
    },
    {
        "id": 78,
        "name": "Dew-Drinker",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "enemycryores", "value": -15 }] }
        ],
        "requirement": { "type": "party", "id": "ganyu" }
    },
    {
        "id": 79,
        "name": "Westward Sojourn",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 25 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 20 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 15 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 10 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "all", "value": 5 }] },
        ],
        "requirement": { "type": "party", "id": "ganyu" }
    },
    {
        "id": 80,
        "name": "Heart of Depth",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - After Elemental Skill", "stats": [{ "stat": "normal", "value": 30 }, { "stat": "charged", "value": 30 }] },
        ],
        "requirement": { "type": "artifact_set", "id": 31, "count": 4 },
    },
    {
        "id": 81,
        "name": "Blizzard Strayer",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - Against Cryo", "stats": [{ "stat": "crit", "value": 20 }] },
            { "id": 1, "name": "4 Piece Bonus - Against Frozen", "stats": [{ "stat": "crit", "value": 40 }] }
        ],
        "requirement": { "type": "artifact_set", "id": 30, "count": 4 },
    },
    
    {
        "id": 84,
        "name": "Tiny Miracle",
        "options": [
            { "id": 0, "name": "4 Piece Bonus", "stats": [{ "stat": "elementalres", "value": 30 }] },
        ],
        "requirement": { "type": "artifact_set", "id": 10, "count": 4 }
    },
    {
        "id": 85,
        "name": "Defender's Will",
        "options": [
            { "id": 0, "name": "4 Piece Bonus", "stats": [{ "stat": "elementalres", "value": 30 }] },
        ],
        "requirement": { "type": "artifact_set", "id": 9, "count": 4 }
    },
    {
        "id": 86,
        "name": "Retracing Bolide",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - While Shielded", "stats": [{ "stat": "normal", "value": 40 }, { "stat": "charged", "value": 40 }] },
        ],
        "requirement": { "type": "artifact_set", "id": 25, "count": 4 }
    },
   
    {
        "id": 88,
        "name": "Lavawalker",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - Against Pyro", "stats": [{ "stat": "all", "value": 35 }] },
        ],
        "requirement": { "type": "artifact_set", "id": 23, "count": 4 }
    },
    {
        "id": 89,
        "name": "Crimson Witch of Flames",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - 3 Stacks", "stats": [{ "stat": "pyro", "value": 22.5 }] },
            { "id": 1, "name": "4 Piece Bonus - 2 Stacks", "stats": [{ "stat": "pyro", "value": 15 }] },
            { "id": 2, "name": "4 Piece Bonus - 1 Stack", "stats": [{ "stat": "pyro", "value": 7.5 }] }
        ],
        "requirement": { "type": "artifact_set", "id": 22, "count": 4 }
    },
    {
        "id": 90,
        "name": "Thundersoother",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - Against Electro", "stats": [{ "stat": "all", "value": 35 }] },
        ],
        "requirement": { "type": "artifact_set", "id": 21, "count": 4 }
    },
    {
        "id": 91,
        "name": "Wanderer's Troupe",
        "options": [
            { "id": 0, "name": "4 Piece Bonus", "stats": [{ "stat": "charged", "value": 35 }] },
        ],
        "requirement_type": "and",
        "requirement": [{ "type": "artifact_set", "id": 18, "count": 4 }, { "type": "weapon_type", "subtype": ["bow", "catalyst"] }]
    },
    {
        "id": 92,
        "name": "Bloodstained Chivalry",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - After Kill", "stats": [{ "stat": "charged", "value": 50 }] },
        ],
        "requirement": { "type": "artifact_set", "id": 17, "count": 4 }
    },
   
    {
        "id": 95,
        "name": "Gladiator's Finale",
        "options": [
            { "id": 0, "name": "4 Piece Bonus", "stats": [{ "stat": "normal", "value": 35 }] },
        ],
        "requirement_type":"and",
        "requirement": [{ "type": "artifact_set", "id": 14, "count": 4 }, { "type": "weapon_type", "subtype": ["claymore", "polearm", "sword"] }]
    },
    {
        "id": 96,
        "name": "Heart of Bravery",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - Enemy <50% HP", "stats": [{ "stat": "all", "value": 30 }] },
        ],
        "requirement": { "type": "artifact_set", "id": 11, "count": 4 }
    },
    {
        "id": 97,
        "name": "Martial Artist",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - After Elemental Skill", "stats": [{ "stat": "normal", "value": 25 }, { "stat": "charged", "value": 25 }] },
        ],
        "requirement": { "type": "artifact_set", "id": 8, "count": 4 }
    },
    {
        "id": 98,
        "name": "Berserker",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - <70% HP", "stats": [{ "stat": "crit", "value": 24 }] },
        ],
        "requirement": { "type": "artifact_set","id": 5, "count": 4 }
    },

    {
        "id": 100,
        "name": "Oppidan Ambush - Refine 1",
        "options": [
            { "id": 0, "name": "10 Stacks", "stats": [{ "stat": "all", "value": 20 }] },
            { "id": 1, "name": "9 Stacks", "stats": [{ "stat": "all", "value": 18 }] },
            { "id": 2, "name": "8 Stacks", "stats": [{ "stat": "all", "value": 16 }] },
            { "id": 3, "name": "7 Stacks", "stats": [{ "stat": "all", "value": 14 }] },
            { "id": 4, "name": "6 Stack", "stats": [{ "stat": "all", "value": 12 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 10 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 8 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 6 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 4 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "all", "value": 2 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 1, "refine": 0 }
    },
    {
        "id": 101,
        "name": "Oppidan Ambush - Refine 2",
        "options": [
            { "id": 0, "name": "10 Stacks", "stats": [{ "stat": "all", "value": 25 }] },
            { "id": 1, "name": "9 Stacks", "stats": [{ "stat": "all", "value": 22.5 }] },
            { "id": 2, "name": "8 Stacks", "stats": [{ "stat": "all", "value": 20 }] },
            { "id": 3, "name": "7 Stacks", "stats": [{ "stat": "all", "value": 17.5 }] },
            { "id": 4, "name": "6 Stack", "stats": [{ "stat": "all", "value": 15 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 12.5 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 10 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 7.5 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 5 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "all", "value": 2.5 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 1, "refine": 1 }
    },
    {
        "id": 102,
        "name": "Oppidan Ambush - Refine 3",
        "options": [
            { "id": 0, "name": "10 Stacks", "stats": [{ "stat": "all", "value": 30 }] },
            { "id": 1, "name": "9 Stacks", "stats": [{ "stat": "all", "value": 27 }] },
            { "id": 2, "name": "8 Stacks", "stats": [{ "stat": "all", "value": 24 }] },
            { "id": 3, "name": "7 Stacks", "stats": [{ "stat": "all", "value": 21 }] },
            { "id": 4, "name": "6 Stack", "stats": [{ "stat": "all", "value": 18 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 15 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 12 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 9 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 6 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "all", "value": 3 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 1, "refine": 2 }
    },
    {
        "id": 103,
        "name": "Oppidan Ambush - Refine 4",
        "options": [
            { "id": 0, "name": "10 Stacks", "stats": [{ "stat": "all", "value": 35 }] },
            { "id": 1, "name": "9 Stacks", "stats": [{ "stat": "all", "value": 31.5 }] },
            { "id": 2, "name": "8 Stacks", "stats": [{ "stat": "all", "value": 28 }] },
            { "id": 3, "name": "7 Stacks", "stats": [{ "stat": "all", "value": 24.5 }] },
            { "id": 4, "name": "6 Stack", "stats": [{ "stat": "all", "value": 21 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 17.5 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 14 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 10.5 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 7 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "all", "value": 3.5 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 1, "refine": 3 }
    },
    {
        "id": 104,
        "name": "Oppidan Ambush - Refine 5",
        "options": [
            { "id": 0, "name": "10 Stacks", "stats": [{ "stat": "all", "value": 40 }] },
            { "id": 1, "name": "9 Stacks", "stats": [{ "stat": "all", "value": 36 }] },
            { "id": 2, "name": "8 Stacks", "stats": [{ "stat": "all", "value": 32 }] },
            { "id": 3, "name": "7 Stacks", "stats": [{ "stat": "all", "value": 28 }] },
            { "id": 4, "name": "6 Stack", "stats": [{ "stat": "all", "value": 24 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 20 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 16 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 12 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 8 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "all", "value": 4 }] },
        ],
        "requirement": {"type": "weapon", "subtype": "bow", "id": 1, "refine": 4}
    },
    {
        "id": 105,
        "name": "Strong-Willed - Refine 1",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "normal", "value": 40 }, { "stat": "charged", "value": 40 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "normal", "value": 32 }, { "stat": "charged", "value": 32 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "normal", "value": 24 }, { "stat": "charged", "value": 24 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 16 }, { "stat": "charged", "value": 16 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 8 }, { "stat": "charged", "value": 8 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 2, "refine": 0 }
    },
    {
        "id": 106,
        "name": "Strong-Willed - Refine 2",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "normal", "value": 50 }, { "stat": "charged", "value": 50 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "normal", "value": 40 }, { "stat": "charged", "value": 40 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "normal", "value": 30 }, { "stat": "charged", "value": 30 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 20 }, { "stat": "charged", "value": 20 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 10 }, { "stat": "charged", "value": 10 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 2, "refine": 1 }
    },
    {
        "id": 107,
        "name": "Strong-Willed - Refine 3",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "normal", "value": 60 }, { "stat": "charged", "value": 60 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "normal", "value": 48 }, { "stat": "charged", "value": 48 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "normal", "value": 36 }, { "stat": "charged", "value": 36 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 24 }, { "stat": "charged", "value": 24 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 12 }, { "stat": "charged", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 2, "refine": 2 }
    },
    {
        "id": 108,
        "name": "Strong-Willed - Refine 4",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "normal", "value": 70 }, { "stat": "charged", "value": 70 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "normal", "value": 56 }, { "stat": "charged", "value": 56 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "normal", "value": 42 }, { "stat": "charged", "value": 42 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 28 }, { "stat": "charged", "value": 28 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 14 }, { "stat": "charged", "value": 14 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 2, "refine": 3 }
    },
    {
        "id": 109,
        "name": "Strong-Willed - Refine 5",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "normal", "value": 80 }, { "stat": "charged", "value": 80 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "normal", "value": 64 }, { "stat": "charged", "value": 64 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "normal", "value": 48 }, { "stat": "charged", "value": 48 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 32 }, { "stat": "charged", "value": 32 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 16 }, { "stat": "charged", "value": 16 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 2, "refine": 4 }
    },
    {
        "id": 110,
        "name": "Press the Advantage - Refine 1",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 36 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 24 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 12 }] },
        ],
        "requirement_type":"or",
        "requirement": [{ "type": "weapon", "subtype": "bow", "id": 3, "refine": 0 }, { "type": "weapon", "subtype": "catalyst", "id": 3, "refine": 0 }, { "type": "weapon", "subtype": "claymore", "id": 1, "refine": 0 }, { "type": "weapon", "subtype": "polearm", "id": 3, "refine": 0 }, { "type": "weapon", "subtype": "sword", "id": 2, "refine": 0 }]
    },
    {
        "id": 111,
        "name": "Press the Advantage - Refine 2",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 45 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 30 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 15 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "bow", "id": 3, "refine": 1 }, { "type": "weapon", "subtype": "catalyst", "id": 3, "refine": 1 }, { "type": "weapon", "subtype": "claymore", "id": 1, "refine": 1 }, { "type": "weapon", "subtype": "polearm", "id": 3, "refine": 1 }, { "type": "weapon", "subtype": "sword", "id": 2, "refine": 1 }]
    },
    {
        "id": 112,
        "name": "Press the Advantage - Refine 3",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 54 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 36 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 18 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "bow", "id": 3, "refine": 2 }, { "type": "weapon", "subtype": "catalyst", "id": 3, "refine": 2 }, { "type": "weapon", "subtype": "claymore", "id": 1, "refine": 2 }, { "type": "weapon", "subtype": "polearm", "id": 3, "refine": 2 }, { "type": "weapon", "subtype": "sword", "id": 2, "refine": 2 }]
    },
    {
        "id": 113,
        "name": "Press the Advantage - Refine 4",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 63 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 42 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 21 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "bow", "id": 3, "refine": 3 }, { "type": "weapon", "subtype": "catalyst", "id": 3, "refine": 3 }, { "type": "weapon", "subtype": "claymore", "id": 1, "refine": 3 }, { "type": "weapon", "subtype": "polearm", "id": 3, "refine": 3 }, { "type": "weapon", "subtype": "sword", "id": 2, "refine": 3 }]
    },
    {
        "id": 114,
        "name": "Press the Advantage - Refine 5",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 72 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 48 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 24 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "bow", "id": 3, "refine": 4 }, { "type": "weapon", "subtype": "catalyst", "id": 3, "refine": 4 }, { "type": "weapon", "subtype": "claymore", "id": 1, "refine": 4 }, { "type": "weapon", "subtype": "polearm", "id": 3, "refine": 4 }, { "type": "weapon", "subtype": "sword", "id": 2, "refine": 4 }]
    },
    {
        "id": 115,
        "name": "Infusion Arrow - Refine 1",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 16 }, { "stat": "aspeed", "value": 4.8 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 12 }, { "stat": "aspeed", "value": 3.6 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 8 }, { "stat": "aspeed", "value": 2.4 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 4 }, { "stat": "aspeed", "value": 1.2 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 4, "refine": 0 }
    },
    {
        "id": 116,
        "name": "Infusion Arrow - Refine 2",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 20 }, { "stat": "aspeed", "value": 6 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 15 }, { "stat": "aspeed", "value": 4.5 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 10 }, { "stat": "aspeed", "value": 3 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 5 }, { "stat": "aspeed", "value": 1.5 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 4, "refine": 1 }
    },
    {
        "id": 117,
        "name": "Infusion Arrow - Refine 3",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 24 }, { "stat": "aspeed", "value": 7.2 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 18 }, { "stat": "aspeed", "value": 5.4 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 12 }, { "stat": "aspeed", "value": 3.6 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 6 }, { "stat": "aspeed", "value": 1.8 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 4, "refine": 2 }
    },
    {
        "id": 118,
        "name": "Infusion Arrow - Refine 4",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 28 }, { "stat": "aspeed", "value": 8.4 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 21 }, { "stat": "aspeed", "value": 6.3 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 14 }, { "stat": "aspeed", "value": 4.2 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 7 }, { "stat": "aspeed", "value": 2.1 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 4, "refine": 3 }
    },
    {
        "id": 119,
        "name": "Infusion Arrow - Refine 5",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 32 }, { "stat": "aspeed", "value": 9.6 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 24 }, { "stat": "aspeed", "value": 7.2 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 16 }, { "stat": "aspeed", "value": 4.8 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 8 }, { "stat": "aspeed", "value": 2.4 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 4, "refine": 4 }
    },
    {
        "id": 120,
        "name": "Decimate - Refine 1",
        "options": [
            { "id": 0, "name": "Ruin Enemy", "stats": [{ "stat": "all", "value": 40 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 5, "refine": 0 }
    },
    {
        "id": 121,
        "name": "Decimate - Refine 2",
        "options": [
            { "id": 0, "name": "Ruin Enemy", "stats": [{ "stat": "all", "value": 50 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 5, "refine": 1 }
    },
    {
        "id": 122,
        "name": "Decimate - Refine 3",
        "options": [
            { "id": 0, "name": "Ruin Enemy", "stats": [{ "stat": "all", "value": 60 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 5, "refine": 2 }
    },
    {
        "id": 123,
        "name": "Decimate - Refine 4",
        "options": [
            { "id": 0, "name": "Ruin Enemy", "stats": [{ "stat": "all", "value": 70 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 5, "refine": 3 }
    },
    {
        "id": 124,
        "name": "Decimate - Refine 5",
        "options": [
            { "id": 0, "name": "Ruin Enemy", "stats": [{ "stat": "all", "value": 80 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 5, "refine": 4 }
    },
    {
        "id": 125,
        "name": "Archer's Message - Refine 1",
        "options": [
            { "id": 0, "name": "Weak Spot", "stats": [{ "stat": "charged", "value": 100 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 8, "refine": 0 }
    },
    {
        "id": 126,
        "name": "Archer's Message - Refine 2",
        "options": [
            { "id": 0, "name": "Weak Spot", "stats": [{ "stat": "charged", "value": 125 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 8, "refine": 1 }
    },
    {
        "id": 127,
        "name": "Archer's Message - Refine 3",
        "options": [
            { "id": 0, "name": "Weak Spot", "stats": [{ "stat": "charged", "value": 150 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 8, "refine": 2 }
    },
    {
        "id": 128,
        "name": "Archer's Message - Refine 4",
        "options": [
            { "id": 0, "name": "Weak Spot", "stats": [{ "stat": "charged", "value": 175 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 8, "refine": 3 }
    },
    {
        "id": 129,
        "name": "Archer's Message - Refine 5",
        "options": [
            { "id": 0, "name": "Weak Spot", "stats": [{ "stat": "charged", "value": 200 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 8, "refine": 4 }
    },
    {
        "id": 130,
        "name": "Unreturning - Refine 1",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "mspeed", "value": 10 }, { "stat": "atk%", "value": 36 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 9, "refine": 0 }
    },
    {
        "id": 131,
        "name": "Unreturning - Refine 2",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "mspeed", "value": 10 }, { "stat": "atk%", "value": 45 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 9, "refine": 1 }
    },
    {
        "id": 132,
        "name": "Unreturning - Refine 3",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "mspeed", "value": 10 }, { "stat": "atk%", "value": 54 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 9, "refine": 2 }
    },
    {
        "id": 133,
        "name": "Unreturning - Refine 4",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "mspeed", "value": 10 }, { "stat": "atk%", "value": 63 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 9, "refine": 3 }
    },
    {
        "id": 134,
        "name": "Unreturning - Refine 5",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "mspeed", "value": 10 }, { "stat": "atk%", "value": 72 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 9, "refine": 4 }
    },
    {
        "id": 135,
        "name": "Bane of Flame and Water - Refine 1",
        "options": [
            { "id": 0, "name": "Against Hydro or Pyro", "stats": [{ "stat": "all", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 10, "refine": 0 }
    },
    {
        "id": 136,
        "name": "Bane of Flame and Water - Refine 2",
        "options": [
            { "id": 0, "name": "Against Hydro or Pyro", "stats": [{ "stat": "all", "value": 15 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 10, "refine": 1 }
    },
    {
        "id": 137,
        "name": "Bane of Flame and Water - Refine 3",
        "options": [
            { "id": 0, "name": "Against Hydro or Pyro", "stats": [{ "stat": "all", "value": 18 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 10, "refine": 2 }
    },
    {
        "id": 138,
        "name": "Bane of Flame and Water - Refine 4",
        "options": [
            { "id": 0, "name": "Against Hydro or Pyro", "stats": [{ "stat": "all", "value": 21 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 10, "refine": 3 }
    },
    {
        "id": 139,
        "name": "Bane of Flame and Water - Refine 5",
        "options": [
            { "id": 0, "name": "Against Hydro or Pyro", "stats": [{ "stat": "all", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 10, "refine": 4 }
    },
    {
        "id": 140,
        "name": "Focus - Refine 1",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "crit", "value": 40 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "crit", "value": 32 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "crit", "value": 24 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "crit", "value": 16 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "crit", "value": 8 }] },
        ],
        "requirement_type":"or",
        "requirement": [{ "type": "weapon", "subtype": "bow", "id": 12, "refine": 0 }, { "type": "weapon", "subtype": "catalyst", "id": 13, "refine": 0 }, { "type": "weapon", "subtype": "claymore", "id": 11, "refine": 0 }, { "type": "weapon", "subtype": "sword", "id": 12, "refine": 0 }]
    },
    {
        "id": 141,
        "name": "Focus - Refine 2",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "crit", "value": 50 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "crit", "value": 40 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "crit", "value": 30 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "crit", "value": 20 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "crit", "value": 10 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "bow", "id": 12, "refine": 1 }, { "type": "weapon", "subtype": "catalyst", "id": 13, "refine": 1 }, { "type": "weapon", "subtype": "claymore", "id": 11, "refine": 1 }, { "type": "weapon", "subtype": "sword", "id": 12, "refine": 1 }]
    },
    {
        "id": 142,
        "name": "Focus - Refine 3",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "crit", "value": 60 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "crit", "value": 48 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "crit", "value": 36 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "crit", "value": 24 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "crit", "value": 12 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "bow", "id": 12, "refine": 2 }, { "type": "weapon", "subtype": "catalyst", "id": 13, "refine": 2 }, { "type": "weapon", "subtype": "claymore", "id": 11, "refine": 2 }, { "type": "weapon", "subtype": "sword", "id": 12, "refine": 2 }]
    },
    {
        "id": 143,
        "name": "Focus - Refine 4",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "crit", "value": 70 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "crit", "value": 56 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "crit", "value": 42 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "crit", "value": 28 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "crit", "value": 14 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "bow", "id": 12, "refine": 3 }, { "type": "weapon", "subtype": "catalyst", "id": 13, "refine": 3 }, { "type": "weapon", "subtype": "claymore", "id": 11, "refine": 3 }, { "type": "weapon", "subtype": "sword", "id": 12, "refine": 3 }]
    },
    {
        "id": 144,
        "name": "Focus - Refine 5",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "crit", "value": 80 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "crit", "value": 64 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "crit", "value": 48 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "crit", "value": 32 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "crit", "value": 16 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "bow", "id": 12, "refine": 4 }, { "type": "weapon", "subtype": "catalyst", "id": 13, "refine": 4 }, { "type": "weapon", "subtype": "claymore", "id": 11, "refine": 4 }, { "type": "weapon", "subtype": "sword", "id": 12, "refine": 4 }]
    },
    {
        "id": 145,
        "name": "Precise - Refine 1",
        "options": [
            { "id": 0, "name": "Weak Spot", "stats": [{ "stat": "charged", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 16, "refine": 0 }
    },
    {
        "id": 146,
        "name": "Precise - Refine 2",
        "options": [
            { "id": 0, "name": "Weak Spot", "stats": [{ "stat": "charged", "value": 30 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 16, "refine": 1 }
    },
    {
        "id": 147,
        "name": "Precise - Refine 3",
        "options": [
            { "id": 0, "name": "Weak Spot", "stats": [{ "stat": "charged", "value": 36 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 16, "refine": 2 }
    },
    {
        "id": 148,
        "name": "Precise - Refine 4",
        "options": [
            { "id": 0, "name": "Weak Spot", "stats": [{ "stat": "charged", "value": 42 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 16, "refine": 3 }
    },
    {
        "id": 149,
        "name": "Precise - Refine 5",
        "options": [
            { "id": 0, "name": "Weak Spot", "stats": [{ "stat": "charged", "value": 48 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 16, "refine": 4 }
    },
    {
        "id": 150,
        "name": "Slingshot - Refine 1",
        "options": [
            { "id": 0, "name": "Close", "stats": [{ "stat": "charged", "value": 36 }] },
            { "id": 1, "name": "Far", "stats": [{ "stat": "charged", "value": -10 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 18, "refine": 0 }
    },
    {
        "id": 151,
        "name": "Slingshot - Refine 2",
        "options": [
            { "id": 0, "name": "Close", "stats": [{ "stat": "charged", "value": 42 }] },
            { "id": 1, "name": "Far", "stats": [{ "stat": "charged", "value": -10 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 18, "refine": 1 }
    },
    {
        "id": 152,
        "name": "Slingshot - Refine 3",
        "options": [
            { "id": 0, "name": "Close", "stats": [{ "stat": "charged", "value": 48 }] },
            { "id": 1, "name": "Far", "stats": [{ "stat": "charged", "value": -10 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 18, "refine": 2 }
    },
    {
        "id": 153,
        "name": "Slingshot - Refine 4",
        "options": [
            { "id": 0, "name": "Close", "stats": [{ "stat": "charged", "value": 54 }] },
            { "id": 1, "name": "Far", "stats": [{ "stat": "charged", "value": -10 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 18, "refine": 3 }
    },
    {
        "id": 154,
        "name": "Slingshot - Refine 5",
        "options": [
            { "id": 0, "name": "Close", "stats": [{ "stat": "charged", "value": 60 }] },
            { "id": 1, "name": "Far", "stats": [{ "stat": "charged", "value": -10 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 18, "refine": 4 }
    },
    {
        "id": 155,
        "name": "Elemental Mastery - Refine 1",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 12 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 6 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 1, "refine": 0 }
    },
    {
        "id": 156,
        "name": "Elemental Mastery - Refine 2",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 15 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 7.5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 1, "refine": 1 }
    },
    {
        "id": 157,
        "name": "Elemental Mastery - Refine 3",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 18 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 9}] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 1, "refine": 2 }
    },
    {
        "id": 158,
        "name": "Elemental Mastery - Refine 4",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 21 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 10.5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 1, "refine": 3 }
    },
    {
        "id": 159,
        "name": "Elemental Mastery - Refine 5",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 24 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 12 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 1, "refine": 4 }
    },
    {
        "id": 160,
        "name": "Rapids - Refine 1",
        "options": [
            { "id": 0, "name": "Hydro Reaction", "stats": [{ "stat": "atk%", "value": 20 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 4, "refine": 0 }
    },
    {
        "id": 161,
        "name": "Rapids - Refine 2",
        "options": [
            { "id": 0, "name": "Hydro Reaction", "stats": [{ "stat": "atk%", "value": 25 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 4, "refine": 1 }
    },
    {
        "id": 162,
        "name": "Rapids - Refine 3",
        "options": [
            { "id": 0, "name": "Hydro Reaction", "stats": [{ "stat": "atk%", "value": 30 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 4, "refine": 2 }
    },
    {
        "id": 163,
        "name": "Rapids - Refine 4",
        "options": [
            { "id": 0, "name": "Hydro Reaction", "stats": [{ "stat": "atk%", "value": 35 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 4, "refine": 3 }
    },
    {
        "id": 164,
        "name": "Rapids - Refine 5",
        "options": [
            { "id": 0, "name": "Hydro Reaction", "stats": [{ "stat": "atk%", "value": 40 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 4, "refine": 4 }
    },
    {
        "id": 165,
        "name": "Bane of Storm and Tide - Refine 1",
        "options": [
            { "id": 0, "name": "Against Hydro or Electro", "stats": [{ "stat": "all", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 8, "refine": 0 }
    },
    {
        "id": 166,
        "name": "Bane of Storm and Tide - Refine 2",
        "options": [
            { "id": 0, "name": "Against Hydro or Electro", "stats": [{ "stat": "all", "value": 15 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 8, "refine": 1 }
    },
    {
        "id": 167,
        "name": "Bane of Storm and Tide - Refine 3",
        "options": [
            { "id": 0, "name": "Against Hydro or Electro", "stats": [{ "stat": "all", "value": 18 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 8, "refine": 2 }
    },
    {
        "id": 168,
        "name": "Bane of Storm and Tide - Refine 4",
        "options": [
            { "id": 0, "name": "Against Hydro or Electro", "stats": [{ "stat": "all", "value": 21 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 8, "refine": 3 }
    },
    {
        "id": 169,
        "name": "Bane of Storm and Tide - Refine 5",
        "options": [
            { "id": 0, "name": "Against Hydro or Electro", "stats": [{ "stat": "all", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 8, "refine": 4 }
    },
    {
        "id": 170,
        "name": "Infusion Scroll - Refine 1",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 16 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 8 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 9, "refine": 0 }
    },
    {
        "id": 171,
        "name": "Infusion Scroll - Refine 2",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 20 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 10 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 9, "refine": 1 }
    },
    {
        "id": 172,
        "name": "Infusion Scroll - Refine 3",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 24 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 12}] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 9, "refine": 2 }
    },
    {
        "id": 173,
        "name": "Infusion Scroll - Refine 4",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 28 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 14 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 9, "refine": 3 }
    },
    {
        "id": 174,
        "name": "Infusion Scroll - Refine 5",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 32 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 16 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 9, "refine": 4 }
    },
    {
        "id": 175,
        "name": "Solar Shine (Elemental) - Refine 1",
        "options": [
            { "id": 0, "name": "After Normal Attack", "stats": [{ "stat": "skill", "value": 20 }, { "stat": "burst", "value": 20 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 16, "refine": 0 }
    },
    {
        "id": 176,
        "name": "Solar Shine (Elemental) - Refine 2",
        "options": [
            { "id": 0, "name": "After Normal Attack", "stats": [{ "stat": "skill", "value": 25 }, { "stat": "burst", "value": 25 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 16, "refine": 1 }
    },
    {
        "id": 177,
        "name": "Solar Shine (Elemental) - Refine 3",
        "options": [
            { "id": 0, "name": "After Normal Attack", "stats": [{ "stat": "skill", "value": 30 }, { "stat": "burst", "value": 30 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 16, "refine": 2 }
    },
    {
        "id": 178,
        "name": "Solar Shine (Elemental) - Refine 4",
        "options": [
            { "id": 0, "name": "After Normal Attack", "stats": [{ "stat": "skill", "value": 35 }, { "stat": "burst", "value": 35 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 16, "refine": 3 }
    },
    {
        "id": 179,
        "name": "Solar Shine (Elemental) - Refine 5",
        "options": [
            { "id": 0, "name": "After Normal Attack", "stats": [{ "stat": "skill", "value": 40 }, { "stat": "burst", "value": 40 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 16, "refine": 4 }
    },
    {
        "id": 180,
        "name": "Solar Shine (Normal) - Refine 1",
        "options": [
            { "id": 0, "name": "After Elemental Skill/Burst", "stats": [{ "stat": "normal", "value": 20 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 16, "refine": 0 }
    },
    {
        "id": 181,
        "name": "Solar Shine (Normal) - Refine 2",
        "options": [
            { "id": 0, "name": "After Elemental Skill/Burst", "stats": [{ "stat": "normal", "value": 25 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 16, "refine": 1 }
    },
    {
        "id": 182,
        "name": "Solar Shine (Normal) - Refine 3",
        "options": [
            { "id": 0, "name": "After Elemental Skill/Burst", "stats": [{ "stat": "normal", "value": 30 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 16, "refine": 2 }
    },
    {
        "id": 183,
        "name": "Solar Shine (Normal) - Refine 4",
        "options": [
            { "id": 0, "name": "After Elemental Skill/Burst", "stats": [{ "stat": "normal", "value": 35 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 16, "refine": 3 }
    },
    {
        "id": 184,
        "name": "Solar Shine (Normal) - Refine 5",
        "options": [
            { "id": 0, "name": "After Elemental Skill/Burst", "stats": [{ "stat": "normal", "value": 40 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 16, "refine": 4 }
    },
    {
        "id": 185,
        "name": "Debut - Refine 1",
        "options": [
            { "id": 0, "name": "Recitative", "stats": [{ "stat": "atk%", "value": 60 }] },
            { "id": 1, "name": "Aria", "stats": [{ "stat": "elemental", "value": 48 }] },
            { "id": 2, "name": "Interlude", "stats": [{ "stat": "elemastery", "value": 240 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 17, "refine": 0 }
    },
    {
        "id": 186,
        "name": "Debut - Refine 2",
        "options": [
            { "id": 0, "name": "Recitative", "stats": [{ "stat": "atk%", "value": 75 }] },
            { "id": 1, "name": "Aria", "stats": [{ "stat": "elemental", "value": 60 }] },
            { "id": 2, "name": "Interlude", "stats": [{ "stat": "elemastery", "value": 300 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 17, "refine": 1 }
    },
    {
        "id": 187,
        "name": "Debut - Refine 3",
        "options": [
            { "id": 0, "name": "Recitative", "stats": [{ "stat": "atk%", "value": 90 }] },
            { "id": 1, "name": "Aria", "stats": [{ "stat": "elemental", "value": 72 }] },
            { "id": 2, "name": "Interlude", "stats": [{ "stat": "elemastery", "value": 360 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 17, "refine": 2 }
    },
    {
        "id": 188,
        "name": "Debut - Refine 4",
        "options": [
            { "id": 0, "name": "Recitative", "stats": [{ "stat": "atk%", "value": 105 }] },
            { "id": 1, "name": "Aria", "stats": [{ "stat": "elemental", "value": 84 }] },
            { "id": 2, "name": "Interlude", "stats": [{ "stat": "elemastery", "value": 420 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 17, "refine": 3 }
    },
    {
        "id": 189,
        "name": "Debut - Refine 5",
        "options": [
            { "id": 0, "name": "Recitative", "stats": [{ "stat": "atk%", "value": 120 }] },
            { "id": 1, "name": "Aria", "stats": [{ "stat": "elemental", "value": 96 }] },
            { "id": 2, "name": "Interlude", "stats": [{ "stat": "elemastery", "value": 480 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 17, "refine": 4 }
    },
    {
        "id": 190,
        "name": "Guerilla Tactic - Refine 1",
        "options": [
            { "id": 0, "name": "Defeating Enemy", "stats": [{ "stat": "mspeed", "value": 12 }, { "stat": "atk%", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 19, "refine": 0 }
    },
    {
        "id": 191,
        "name": "Guerilla Tactic - Refine 2",
        "options": [
            { "id": 0, "name": "Defeating Enemy", "stats": [{ "stat": "mspeed", "value": 14 }, { "stat": "atk%", "value": 14 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 19, "refine": 1 }
    },
    {
        "id": 192,
        "name": "Guerilla Tactic - Refine 3",
        "options": [
            { "id": 0, "name": "Defeating Enemy", "stats": [{ "stat": "mspeed", "value": 16 }, { "stat": "atk%", "value": 18 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 19, "refine": 2}
    },
    {
        "id": 193,
        "name": "Guerilla Tactic - Refine 4",
        "options": [
            { "id": 0, "name": "Defeating Enemy", "stats": [{ "stat": "mspeed", "value": 18 }, { "stat": "atk%", "value": 18 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 19, "refine": 3 }
    },
    {
        "id": 194,
        "name": "Guerilla Tactic - Refine 5",
        "options": [
            { "id": 0, "name": "Defeating Enemy", "stats": [{ "stat": "mspeed", "value": 20 }, { "stat": "atk%", "value": 20 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 19, "refine": 4 }
    },
    {
        "id": 195,
        "name": "Wind in the Square - Refine 1",
        "options": [
            { "id": 0, "name": "4 Characters", "stats": [{ "stat": "mspeed", "value": 12 }, { "stat": "atk%", "value": 32 }] },
            { "id": 1, "name": "3 Characters", "stats": [{ "stat": "mspeed", "value": 9 }, { "stat": "atk%", "value": 24 }] },
            { "id": 2, "name": "2 Characters", "stats": [{ "stat": "mspeed", "value": 6 }, { "stat": "atk%", "value": 16 }] },
            { "id": 3, "name": "1 Character", "stats": [{ "stat": "mspeed", "value": 3 }, { "stat": "atk%", "value": 8 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 20, "refine": 0 }
    },
    {
        "id": 196,
        "name": "Wind in the Square - Refine 2",
        "options": [
            { "id": 0, "name": "4 Characters", "stats": [{ "stat": "mspeed", "value": 14 }, { "stat": "atk%", "value": 40 }] },
            { "id": 1, "name": "3 Characters", "stats": [{ "stat": "mspeed", "value": 10.5 }, { "stat": "atk%", "value": 30 }] },
            { "id": 2, "name": "2 Characters", "stats": [{ "stat": "mspeed", "value": 7 }, { "stat": "atk%", "value": 20 }] },
            { "id": 3, "name": "1 Character", "stats": [{ "stat": "mspeed", "value": 3.5 }, { "stat": "atk%", "value": 10 }] },        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 20, "refine": 1 }
    },
    {
        "id": 197,
        "name": "Wind in the Square - Refine 3",
        "options": [
            { "id": 0, "name": "4 Characters", "stats": [{ "stat": "mspeed", "value": 16 }, { "stat": "atk%", "value": 48 }] },
            { "id": 1, "name": "3 Characters", "stats": [{ "stat": "mspeed", "value": 12 }, { "stat": "atk%", "value": 36 }] },
            { "id": 2, "name": "2 Characters", "stats": [{ "stat": "mspeed", "value": 8 }, { "stat": "atk%", "value": 24 }] },
            { "id": 3, "name": "1 Character", "stats": [{ "stat": "mspeed", "value": 4 }, { "stat": "atk%", "value": 12 }] },        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 20, "refine": 2 }
    },
    {
        "id": 198,
        "name": "Wind in the Square - Refine 4",
        "options": [
            { "id": 0, "name": "4 Characters", "stats": [{ "stat": "mspeed", "value": 18 }, { "stat": "atk%", "value": 56 }] },
            { "id": 1, "name": "3 Characters", "stats": [{ "stat": "mspeed", "value": 13.5 }, { "stat": "atk%", "value": 42 }] },
            { "id": 2, "name": "2 Characters", "stats": [{ "stat": "mspeed", "value": 9 }, { "stat": "atk%", "value": 28 }] },
            { "id": 3, "name": "1 Character", "stats": [{ "stat": "mspeed", "value": 4.5 }, { "stat": "atk%", "value": 14 }] },        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 20, "refine": 3 }
    },
    {
        "id": 199,
        "name": "Wind in the Square - Refine 5",
        "options": [
            { "id": 0, "name": "4 Characters", "stats": [{ "stat": "mspeed", "value": 20 }, { "stat": "atk%", "value": 64 }] },
            { "id": 1, "name": "3 Characters", "stats": [{ "stat": "mspeed", "value": 15 }, { "stat": "atk%", "value": 48 }] },
            { "id": 2, "name": "2 Characters", "stats": [{ "stat": "mspeed", "value": 10 }, { "stat": "atk%", "value": 32 }] },
            { "id": 3, "name": "1 Character", "stats": [{ "stat": "mspeed", "value": 5 }, { "stat": "atk%", "value": 16}] },        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 20, "refine": 4 }
    },
    {
        "id": 200,
        "name": "Bane of Fire and Thunder - Refine 1",
        "options": [
            { "id": 0, "name": "Against Pyro or Electro", "stats": [{ "stat": "all", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 2, "refine": 0 }
    },
    {
        "id": 201,
        "name": "Bane of Fire and Thunder - Refine 2",
        "options": [
            { "id": 0, "name": "Against Pyro or Electro", "stats": [{ "stat": "all", "value": 15 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 2, "refine": 1 }
    },
    {
        "id": 202,
        "name": "Bane of Fire and Thunder - Refine 3",
        "options": [
            { "id": 0, "name": "Against Pyro or Electro", "stats": [{ "stat": "all", "value": 18 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 2, "refine": 2 }
    },
    {
        "id": 203,
        "name": "Bane of Fire and Thunder - Refine 4",
        "options": [
            { "id": 0, "name": "Against Pyro or Electro", "stats": [{ "stat": "all", "value": 21 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 2, "refine": 3 }
    },
    {
        "id": 204,
        "name": "Bane of Fire and Thunder - Refine 5",
        "options": [
            { "id": 0, "name": "Against Pyro or Electro", "stats": [{ "stat": "all", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 2, "refine": 4 }
    },
    {
        "id": 205,
        "name": "Unbending - Refine 1",
        "options": [
            { "id": 0, "name": "HP below 70%", "stats": [{ "stat": "charged", "value": 30 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 5, "refine": 0 }
    },
    {
        "id": 206,
        "name": "Unbending - Refine 2",
        "options": [
            { "id": 0, "name": "HP below 75%", "stats": [{ "stat": "charged", "value": 35 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 5, "refine": 1 }
    },
    {
        "id": 207,
        "name": "Unbending - Refine 3",
        "options": [
            { "id": 0, "name": "HP below 80%", "stats": [{ "stat": "charged", "value": 40 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 5, "refine": 2 }
    },
    {
        "id": 208,
        "name": "Unbending - Refine 4",
        "options": [
            { "id": 0, "name": "HP below 85%", "stats": [{ "stat": "charged", "value": 45 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 5, "refine": 3 }
    },
    {
        "id": 209,
        "name": "Unbending - Refine 5",
        "options": [
            { "id": 0, "name": "HP below 90%", "stats": [{ "stat": "charged", "value": 50 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 5, "refine": 4 }
    },
    {
        "id": 210,
        "name": "Lithic Axiom - Unity - Refine 1",
        "options": [
            { "id": 0, "name": "4 Characters", "stats": [{ "stat": "crit", "value": 12 }, { "stat": "atk%", "value": 28 }] },
            { "id": 1, "name": "3 Characters", "stats": [{ "stat": "crit", "value": 9 }, { "stat": "atk%", "value": 21 }] },
            { "id": 2, "name": "2 Characters", "stats": [{ "stat": "crit", "value": 6 }, { "stat": "atk%", "value": 14 }] },
            { "id": 3, "name": "1 Character", "stats": [{ "stat": "crit", "value": 3 }, { "stat": "atk%", "value": 7 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "claymore", "id": 6, "refine": 0 }, { "type": "weapon", "subtype": "polearm", "id": 11, "refine": 0 }]
    },
    {
        "id": 211,
        "name": "Lithic Axiom - Unity - Refine 2",
        "options": [
            { "id": 0, "name": "4 Characters", "stats": [{ "stat": "crit", "value": 16 }, { "stat": "atk%", "value": 32 }] },
            { "id": 1, "name": "3 Characters", "stats": [{ "stat": "crit", "value": 12 }, { "stat": "atk%", "value": 24 }] },
            { "id": 2, "name": "2 Characters", "stats": [{ "stat": "crit", "value": 8 }, { "stat": "atk%", "value": 16 }] },
            { "id": 3, "name": "1 Character", "stats": [{ "stat": "crit", "value": 4 }, { "stat": "atk%", "value": 8 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "claymore", "id": 6, "refine": 1 }, { "type": "weapon", "subtype": "polearm", "id": 11, "refine": 1 }]
    },
    {
        "id": 212,
        "name": "Lithic Axiom - Unity - Refine 3",
        "options": [
            { "id": 0, "name": "4 Characters", "stats": [{ "stat": "crit", "value": 20 }, { "stat": "atk%", "value": 36 }] },
            { "id": 1, "name": "3 Characters", "stats": [{ "stat": "crit", "value": 15 }, { "stat": "atk%", "value": 27 }] },
            { "id": 2, "name": "2 Characters", "stats": [{ "stat": "crit", "value": 10 }, { "stat": "atk%", "value": 18 }] },
            { "id": 3, "name": "1 Character", "stats": [{ "stat": "crit", "value": 5 }, { "stat": "atk%", "value": 9 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "claymore", "id": 6, "refine": 2 }, { "type": "weapon", "subtype": "polearm", "id": 11, "refine": 2 }]
    },
    {
        "id": 213,
        "name": "Lithic Axiom - Unity - Refine 4",
        "options": [
            { "id": 0, "name": "4 Characters", "stats": [{ "stat": "crit", "value": 24 }, { "stat": "atk%", "value": 40 }] },
            { "id": 1, "name": "3 Characters", "stats": [{ "stat": "crit", "value": 18 }, { "stat": "atk%", "value": 30 }] },
            { "id": 2, "name": "2 Characters", "stats": [{ "stat": "crit", "value": 12 }, { "stat": "atk%", "value": 20 }] },
            { "id": 3, "name": "1 Character", "stats": [{ "stat": "crit", "value": 6 }, { "stat": "atk%", "value": 10 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "claymore", "id": 6, "refine": 3 }, { "type": "weapon", "subtype": "polearm", "id": 11, "refine": 3 }]
    },
    {
        "id": 214,
        "name": "Lithic Axiom - Unity - Refine 5",
        "options": [
            { "id": 0, "name": "4 Characters", "stats": [{ "stat": "crit", "value": 28 }, { "stat": "atk%", "value": 44 }] },
            { "id": 1, "name": "3 Characters", "stats": [{ "stat": "crit", "value": 21 }, { "stat": "atk%", "value": 33 }] },
            { "id": 2, "name": "2 Characters", "stats": [{ "stat": "crit", "value": 14 }, { "stat": "atk%", "value": 22 }] },
            { "id": 3, "name": "1 Character", "stats": [{ "stat": "crit", "value": 7 }, { "stat": "atk%", "value": 11 }] },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "claymore", "id": 6, "refine": 4 }, { "type": "weapon", "subtype": "polearm", "id": 11, "refine": 4 }]
    },
    {
        "id": 215,
        "name": "Residual Heat - Refine 1",
        "options": [
            { "id": 0, "name": "Pyro Reaction", "stats": [{ "stat": "atk%", "value": 12 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 9, "refine": 0 }
    },
    {
        "id": 216,
        "name": "Residual Heat - Refine 2",
        "options": [
            { "id": 0, "name": "Pyro Reaction", "stats": [{ "stat": "atk%", "value": 15 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 9, "refine": 1 }
    },
    {
        "id": 217,
        "name": "Residual Heat - Refine 3",
        "options": [
            { "id": 0, "name": "Pyro Reaction", "stats": [{ "stat": "atk%", "value": 18 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 9, "refine": 2 }
    },
    {
        "id": 218,
        "name": "Residual Heat - Refine 4",
        "options": [
            { "id": 0, "name": "Pyro Reaction", "stats": [{ "stat": "atk%", "value": 21 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 9, "refine": 3 }
    },
    {
        "id": 219,
        "name": "Residual Heat - Refine 5",
        "options": [
            { "id": 0, "name": "Pyro Reaction", "stats": [{ "stat": "atk%", "value": 24 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 9, "refine": 4 }
    },
    {
        "id": 220,
        "name": "Bane of Storm and Tide - Refine 1",
        "options": [
            { "id": 0, "name": "Against Hydro or Electro", "stats": [{ "stat": "all", "value": 20 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 10, "refine": 0 }
    },
    {
        "id": 221,
        "name": "Bane of Storm and Tide - Refine 2",
        "options": [
            { "id": 0, "name": "Against Hydro or Electro", "stats": [{ "stat": "all", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 10, "refine": 1 }
    },
    {
        "id": 222,
        "name": "Bane of Storm and Tide - Refine 3",
        "options": [
            { "id": 0, "name": "Against Hydro or Electro", "stats": [{ "stat": "all", "value": 28 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 10, "refine": 2 }
    },
    {
        "id": 223,
        "name": "Bane of Storm and Tide - Refine 4",
        "options": [
            { "id": 0, "name": "Against Hydro or Electro", "stats": [{ "stat": "all", "value": 32 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 10, "refine": 3 }
    },
    {
        "id": 224,
        "name": "Bane of Storm and Tide - Refine 5",
        "options": [
            { "id": 0, "name": "Against Hydro or Electro", "stats": [{ "stat": "all", "value": 36 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 10, "refine": 4 }
    },
    {
        "id": 225,
        "name": "Wavesplitter - Refine 1",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 30 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 24 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 18 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 12 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "all", "value": 6 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 13, "refine": 0 }
    },
    {
        "id": 226,
        "name": "Wavesplitter - Refine 2",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 35 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 28 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 21 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 14 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "all", "value": 7 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 13, "refine": 1 }
    },
    {
        "id": 227,
        "name": "Wavesplitter - Refine 3",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 40 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 32 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 24 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 16 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "all", "value": 8 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 13, "refine": 2 }
    },
    {
        "id": 228,
        "name": "Wavesplitter - Refine 4",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 45 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 36 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 27 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 18 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "all", "value": 9 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 13, "refine": 3 }
    },
    {
        "id": 229,
        "name": "Wavesplitter - Refine 5",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 50 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 40 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 30 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 20 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "all", "value": 10 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 13, "refine": 4 }
    },
    {
        "id": 230,
        "name": "Courage - Refine 1",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 24 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 18 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 12 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 6 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 14, "refine": 0 }
    },
    {
        "id": 231,
        "name": "Courage - Refine 2",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 28 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 21 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 14 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 7 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 14, "refine": 1 }
    },
    {
        "id": 232,
        "name": "Courage - Refine 3",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 32 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 24 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 16 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 8 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 14, "refine": 2 }
    },
    {
        "id": 233,
        "name": "Courage - Refine 4",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 36 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 27 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 18 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 9 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 14, "refine": 3 }
    },
    {
        "id": 234,
        "name": "Courage - Refine 5",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 40 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 30 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 20 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 10 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 14, "refine": 4 }
    },
    {
        "id": 235,
        "name": "Rebellious Guardian - Refine 1",
        "options": [
            { "id": 0, "name": "With Shield", "stats": [{ "stat": "all", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 16, "refine": 0 }
    },
    {
        "id": 236,
        "name": "Rebellious Guardian - Refine 2",
        "options": [
            { "id": 0, "name": "With Shield", "stats": [{ "stat": "all", "value": 15 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 16, "refine": 1 }
    },
    {
        "id": 237,
        "name": "Rebellious Guardian - Refine 3",
        "options": [
            { "id": 0, "name": "With Shield", "stats": [{ "stat": "all", "value": 18 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 16, "refine": 2 }
    },
    {
        "id": 238,
        "name": "Rebellious Guardian - Refine 4",
        "options": [
            { "id": 0, "name": "With Shield", "stats": [{ "stat": "all", "value": 21 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 16, "refine": 3 }
    },
    {
        "id": 239,
        "name": "Rebellious Guardian - Refine 5",
        "options": [
            { "id": 0, "name": "With Shield", "stats": [{ "stat": "all", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 16, "refine": 4 }
    },
    {
        "id": 240,
        "name": "Infusion Blade - Refine 1",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 24 }, { "stat": "def%", "value": 24 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 18 }, { "stat": "def%", "value": 18 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 12 }, { "stat": "def%", "value": 12 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 6 }, { "stat": "def%", "value": 6 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 19, "refine": 0 }
    },
    {
        "id": 241,
        "name": "Infusion Blade - Refine 2",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 30 }, { "stat": "def%", "value": 30 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 22.5 }, { "stat": "def%", "value": 22.5 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 15 }, { "stat": "def%", "value": 15 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 7.5 }, { "stat": "def%", "value": 7.5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 19, "refine": 1 }
    },
    {
        "id": 242,
        "name": "Infusion Blade - Refine 3",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 36 }, { "stat": "def%", "value": 36 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 27 }, { "stat": "def%", "value": 27 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 18 }, { "stat": "def%", "value": 18 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 9 }, { "stat": "def%", "value": 9 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 19, "refine": 2 }
    },
    {
        "id": 243,
        "name": "Infusion Blade - Refine 4",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 42 }, { "stat": "def%", "value": 42 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 31.5 }, { "stat": "def%", "value": 31.5 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 21 }, { "stat": "def%", "value": 21 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 10.5 }, { "stat": "def%", "value": 10.5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 19, "refine": 3 }
    },
    {
        "id": 244,
        "name": "Infusion Blade - Refine 5",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 48 }, { "stat": "def%", "value": 48 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 36 }, { "stat": "def%", "value": 36 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 24 }, { "stat": "def%", "value": 24 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 12 }, { "stat": "def%", "value": 12 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 19, "refine": 4 }
    },
    {
        "id": 245,
        "name": "Wolfish Tracker - Refine 1",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 40 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 20, "refine": 0 }
    },
    {
        "id": 246,
        "name": "Wolfish Tracker - Refine 2",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 50 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 20, "refine": 1 }
    },
    {
        "id": 247,
        "name": "Wolfish Tracker - Refine 3",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 60 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 20, "refine": 2 }
    },
    {
        "id": 248,
        "name": "Wolfish Tracker - Refine 4",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 70 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 20, "refine": 3 }
    },
    {
        "id": 249,
        "name": "Wolfish Tracker - Refine 5",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 80 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 20, "refine": 4 }
    },
    {
        "id": 250,
        "name": "Bane of the Soft - Refine 1",
        "options": [
            { "id": 0, "name": "Slime Enemy", "stats": [{ "stat": "all", "value": 40 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 2, "refine": 0 }
    },
    {
        "id": 251,
        "name": "Bane of the Soft - Refine 2",
        "options": [
            { "id": 0, "name": "Slime Enemy", "stats": [{ "stat": "all", "value": 50 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 2, "refine": 1 }
    },
    {
        "id": 252,
        "name": "Bane of the Soft - Refine 3",
        "options": [
            { "id": 0, "name": "Slime Enemy", "stats": [{ "stat": "all", "value": 60 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 2, "refine": 2}
    },
    {
        "id": 253,
        "name": "Bane of the Soft - Refine 4",
        "options": [
            { "id": 0, "name": "Slime Enemy", "stats": [{ "stat": "all", "value": 70 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 2, "refine": 3 }
    },
    {
        "id": 254,
        "name": "Bane of the Soft - Refine 5",
        "options": [
            { "id": 0, "name": "Slime Enemy", "stats": [{ "stat": "all", "value": 80 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 2, "refine": 4 }
    },
    {
        "id": 255,
        "name": "Gladiator - Refine 1",
        "options": [
            { "id": 0, "name": "2 Enemies or more", "stats": [{ "stat": "atk%", "value": 16 }, { "stat": "def%", "value": 16 }] },
            { "id": 1, "name": "2 Enemy or less", "stats": [{ "stat": "atk%", "value": 24 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 5, "refine": 0 }
    },
    {
        "id": 256,
        "name": "Gladiator - Refine 2",
        "options": [
            { "id": 0, "name": "2 Enemies or more", "stats": [{ "stat": "atk%", "value": 20 }, { "stat": "def%", "value": 20 }] },
            { "id": 1, "name": "2 Enemy or less", "stats": [{ "stat": "atk%", "value": 30 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 5, "refine": 1 }
    },
    {
        "id": 257,
        "name": "Gladiator - Refine 3",
        "options": [
            { "id": 0, "name": "2 Enemies or more", "stats": [{ "stat": "atk%", "value": 24 }, { "stat": "def%", "value": 24 }] },
            { "id": 1, "name": "2 Enemy or less", "stats": [{ "stat": "atk%", "value": 36 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 5, "refine": 2 }
    },
    {
        "id": 258,
        "name": "Gladiator - Refine 4",
        "options": [
            { "id": 0, "name": "2 Enemies or more", "stats": [{ "stat": "atk%", "value": 28 }, { "stat": "def%", "value": 28 }] },
            { "id": 1, "name": "2 Enemy or less", "stats": [{ "stat": "atk%", "value": 42 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 5, "refine": 3 }
    },
    {
        "id": 259,
        "name": "Gladiator - Refine 5",
        "options": [
            { "id": 0, "name": "2 Enemies or more", "stats": [{ "stat": "atk%", "value": 32 }, { "stat": "def%", "value": 32 }] },
            { "id": 1, "name": "2 Enemy or less", "stats": [{ "stat": "atk%", "value": 48 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 5, "refine": 4 }
    },
    {
        "id": 260,
        "name": "Bane of Flame and Water - Refine 1",
        "options": [
            { "id": 0, "name": "Against Hydro or Pyro", "stats": [{ "stat": "all", "value": 20 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 6, "refine": 0 }
    },
    {
        "id": 261,
        "name": "Bane of Flame and Water - Refine 2",
        "options": [
            { "id": 0, "name": "Against Hydro or Pyro", "stats": [{ "stat": "all", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 6, "refine": 1 }
    },
    {
        "id": 262,
        "name": "Bane of Flame and Water - Refine 3",
        "options": [
            { "id": 0, "name": "Against Hydro or Pyro", "stats": [{ "stat": "all", "value": 28 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 6, "refine": 2 }
    },
    {
        "id": 263,
        "name": "Bane of Flame and Water - Refine 4",
        "options": [
            { "id": 0, "name": "Against Hydro or Pyro", "stats": [{ "stat": "all", "value": 32 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 6, "refine": 3 }
    },
    {
        "id": 264,
        "name": "Bane of Flame and Water - Refine 5",
        "options": [
            { "id": 0, "name": "Against Hydro or Pyro", "stats": [{ "stat": "all", "value": 36 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 6, "refine": 4 }
    },
    {
        "id": 265,
        "name": "Rainbow-Piercing Stinger - Refine 1",
        "options": [
            { "id": 0, "name": "Against Any Element", "stats": [{ "stat": "all", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 10, "refine": 0 }
    },
    {
        "id": 266,
        "name": "Rainbow-Piercing Stinger - Refine 2",
        "options": [
            { "id": 0, "name": "Against Any Element", "stats": [{ "stat": "all", "value": 30 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 10, "refine": 1 }
    },
    {
        "id": 267,
        "name": "Rainbow-Piercing Stinger - Refine 3",
        "options": [
            { "id": 0, "name": "Against Any Element", "stats": [{ "stat": "all", "value": 36 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 10, "refine": 2 }
    },
    {
        "id": 268,
        "name": "Rainbow-Piercing Stinger - Refine 4",
        "options": [
            { "id": 0, "name": "Against Any Element", "stats": [{ "stat": "all", "value": 42 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 10, "refine": 3 }
    },
    {
        "id": 269,
        "name": "Rainbow-Piercing Stinger - Refine 5",
        "options": [
            { "id": 0, "name": "Against Any Element", "stats": [{ "stat": "all", "value": 48 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 10, "refine": 4 }
    },
    {
        "id": 270,
        "name": "Lithic Axiom - Subjugating Evil - Refine 1",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "charged", "value": 40 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 11, "refine": 0 }
    },
    {
        "id": 271,
        "name": "Lithic Axiom - Subjugating Evil - Refine 2",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "charged", "value": 50 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 11, "refine": 1 }
    },
    {
        "id": 272,
        "name": "Lithic Axiom - Subjugating Evil - Refine 3",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "charged", "value": 60 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 11, "refine": 2 }
    },
    {
        "id": 273,
        "name": "Lithic Axiom - Subjugating Evil - Refine 4",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "charged", "value": 70 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 11, "refine": 3 }
    },
    {
        "id": 274,
        "name": "Lithic Axiom - Subjugating Evil - Refine 5",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "charged", "value": 80 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 11, "refine": 4 }
    },
    {
        "id": 275,
        "name": "Eagle Spear of Justice - Refine 1",
        "options": [
            { "id": 0, "name": "7 Stacks", "stats": [{ "stat": "atk%", "value": 22.4 }, { "stat": "all", "value": 12 }] },
            { "id": 1, "name": "6 Stacks", "stats": [{ "stat": "atk%", "value": 19.2 }] },
            { "id": 2, "name": "5 Stacks", "stats": [{ "stat": "atk%", "value": 16 }] },
            { "id": 3, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 12.8 }] },
            { "id": 4, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 9.6 }] },
            { "id": 5, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 6.4 }] },
            { "id": 6, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 3.2 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 12, "refine": 0 }
    },
    {
        "id": 276,
        "name": "Eagle Spear of Justice - Refine 2",
        "options": [
            { "id": 0, "name": "7 Stacks", "stats": [{ "stat": "atk%", "value": 27.3 }, { "stat": "all", "value": 15 }] },
            { "id": 1, "name": "6 Stacks", "stats": [{ "stat": "atk%", "value": 23.4 }] },
            { "id": 2, "name": "5 Stacks", "stats": [{ "stat": "atk%", "value": 19.5 }] },
            { "id": 3, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 15.6 }] },
            { "id": 4, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 11.7 }] },
            { "id": 5, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 7.8 }] },
            { "id": 6, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 3.9 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 12, "refine": 1 }
    },
    {
        "id": 277,
        "name": "Eagle Spear of Justice - Refine 3",
        "options": [
            { "id": 0, "name": "7 Stacks", "stats": [{ "stat": "atk%", "value": 31.2 }, { "stat": "all", "value": 18 }] },
            { "id": 1, "name": "6 Stacks", "stats": [{ "stat": "atk%", "value": 27.6 }] },
            { "id": 2, "name": "5 Stacks", "stats": [{ "stat": "atk%", "value": 23 }] },
            { "id": 3, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 18.4 }] },
            { "id": 4, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 13.8 }] },
            { "id": 5, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 9.2 }] },
            { "id": 6, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 4.6 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 12, "refine": 2 }
    },
    {
        "id": 278,
        "name": "Eagle Spear of Justice - Refine 4",
        "options": [
            { "id": 0, "name": "7 Stacks", "stats": [{ "stat": "atk%", "value": 37.1 }, { "stat": "all", "value": 21 }] },
            { "id": 1, "name": "6 Stacks", "stats": [{ "stat": "atk%", "value": 31.8 }] },
            { "id": 2, "name": "5 Stacks", "stats": [{ "stat": "atk%", "value": 26.5 }] },
            { "id": 3, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 21.2 }] },
            { "id": 4, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 15.9 }] },
            { "id": 5, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 10.6 }] },
            { "id": 6, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 5.3 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 12, "refine": 3 }
    },
    {
        "id": 279,
        "name": "Eagle Spear of Justice - Refine 5",
        "options": [
            { "id": 0, "name": "7 Stacks", "stats": [{ "stat": "atk%", "value": 42 }, { "stat": "all", "value": 24 }] },
            { "id": 1, "name": "6 Stacks", "stats": [{ "stat": "atk%", "value": 36 }] },
            { "id": 2, "name": "5 Stacks", "stats": [{ "stat": "atk%", "value": 30 }] },
            { "id": 3, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 24 }] },
            { "id": 4, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 18 }] },
            { "id": 5, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 12 }] },
            { "id": 6, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 6 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 12, "refine": 4 }
    },
    {
        "id": 280,
        "name": "Magic Affinity - Refine 1",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 16 }, { "stat": "charged", "value": 16 }] },
            { "id": 0, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 8 }, { "stat": "charged", "value": 8 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 13, "refine": 0 }
    },
    {
        "id": 281,
        "name": "Magic Affinity - Refine 2",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 20 }, { "stat": "charged", "value": 20 }] },
            { "id": 0, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 10 }, { "stat": "charged", "value": 10 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 13, "refine": 1 }
    },
    {
        "id": 282,
        "name": "Magic Affinity - Refine 3",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 24 }, { "stat": "charged", "value": 24 }] },
            { "id": 0, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 12 }, { "stat": "charged", "value": 12 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 13, "refine": 2 }
    },
    {
        "id": 283,
        "name": "Magic Affinity - Refine 4",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 28 }, { "stat": "charged", "value": 28 }] },
            { "id": 0, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 14 }, { "stat": "charged", "value": 14 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 13, "refine": 3 }
    },
    {
        "id": 284,
        "name": "Magic Affinity - Refine 5",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 32 }, { "stat": "charged", "value": 32 }] },
            { "id": 0, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 16 }, { "stat": "charged", "value": 16 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 13, "refine": 4 }
    },
    {
        "id": 285,
        "name": "Bane of Water and Ice - Refine 1",
        "options": [
            { "id": 0, "name": "Against Hydro or Cryo", "stats": [{ "stat": "all", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 3, "refine": 0 }
    },
    {
        "id": 286,
        "name": "Bane of Water and Ice - Refine 2",
        "options": [
            { "id": 0, "name": "Against Hydro or Cryo", "stats": [{ "stat": "all", "value": 15 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 3, "refine": 1 }
    },
    {
        "id": 287,
        "name": "Bane of Water and Ice - Refine 3",
        "options": [
            { "id": 0, "name": "Against Hydro or Cryo", "stats": [{ "stat": "all", "value": 18 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 3, "refine": 2 }
    },
    {
        "id": 288,
        "name": "Bane of Water and Ice - Refine 4",
        "options": [
            { "id": 0, "name": "Against Hydro or Cryo", "stats": [{ "stat": "all", "value": 21 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 3, "refine": 3 }
    },
    {
        "id": 289,
        "name": "Bane of Water and Ice - Refine 5",
        "options": [
            { "id": 0, "name": "Against Hydro or Cryo", "stats": [{ "stat": "all", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 3, "refine": 4 }
    },
    {
        "id": 290,
        "name": "Overloaded - Refine 1",
        "options": [
            { "id": 0, "name": "Electro Reaction", "stats": [{ "stat": "atk%", "value": 12 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 4, "refine": 0 }
    },
    {
        "id": 291,
        "name": "Overloaded - Refine 2",
        "options": [
            { "id": 0, "name": "Electro Reaction", "stats": [{ "stat": "atk%", "value": 15 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 4, "refine": 1 }
    },
    {
        "id": 292,
        "name": "Overloaded - Refine 3",
        "options": [
            { "id": 0, "name": "Electro Reaction", "stats": [{ "stat": "atk%", "value": 18 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 4, "refine": 2 }
    },
    {
        "id": 293,
        "name": "Overloaded - Refine 4",
        "options": [
            { "id": 0, "name": "Electro Reaction", "stats": [{ "stat": "atk%", "value": 21 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 4, "refine": 3 }
    },
    {
        "id": 294,
        "name": "Overloaded - Refine 5",
        "options": [
            { "id": 0, "name": "Electro Reaction", "stats": [{ "stat": "atk%", "value": 24 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 4, "refine": 4 }
    },
    {
        "id": 295,
        "name": "Vigorous - Refine 1",
        "options": [
            { "id": 0, "name": "HP above 90%", "stats": [{ "stat": "crit", "value": 14 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 8, "refine": 0 }
    },
    {
        "id": 296,
        "name": "Vigorous - Refine 2",
        "options": [
            { "id": 0, "name": "HP above 90%", "stats": [{ "stat": "crit", "value": 17.5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 8, "refine": 1 }
    },
    {
        "id": 297,
        "name": "Vigorous - Refine 3",
        "options": [
            { "id": 0, "name": "HP above 90%", "stats": [{ "stat": "crit", "value": 21 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 8, "refine": 2 }
    },
    {
        "id": 298,
        "name": "Vigorous - Refine 4",
        "options": [
            { "id": 0, "name": "HP above 90%", "stats": [{ "stat": "crit", "value": 24.5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 8, "refine": 3 }
    },
    {
        "id": 299,
        "name": "Vigorous - Refine 5",
        "options": [
            { "id": 0, "name": "HP above 90%", "stats": [{ "stat": "crit", "value": 28 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 8, "refine": 4 }
    },
    {
        "id": 300,
        "name": "Infusion Stinger - Refine 1",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 12 }] },
            { "id": 0, "name": "1 Stack", "stats": [{ "stat": "all", "value": 6 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 9, "refine": 0 }
    },
    {
        "id": 301,
        "name": "Infusion Stinger - Refine 2",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 15 }] },
            { "id": 0, "name": "1 Stack", "stats": [{ "stat": "all", "value": 7.5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 9, "refine": 1 }
    },
    {
        "id": 302,
        "name": "Infusion Stinger - Refine 3",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 18 }] },
            { "id": 0, "name": "1 Stack", "stats": [{ "stat": "all", "value": 9 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 9, "refine": 2 }
    },
    {
        "id": 303,
        "name": "Infusion Stinger - Refine 4",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 21 }] },
            { "id": 0, "name": "1 Stack", "stats": [{ "stat": "all", "value": 10.5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 9, "refine": 3 }
    },
    {
        "id": 304,
        "name": "Infusion Stinger - Refine 5",
        "options": [
            { "id": 0, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 24 }] },
            { "id": 0, "name": "1 Stack", "stats": [{ "stat": "all", "value": 12 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 9, "refine": 4 }
    },
    {
        "id": 305,
        "name": "Bane of Fire and Thunder - Refine 1",
        "options": [
            { "id": 0, "name": "Against Pyro or Electro", "stats": [{ "stat": "all", "value": 20 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 10, "refine": 0 }
    },
    {
        "id": 306,
        "name": "Bane of Fire and Thunder - Refine 2",
        "options": [
            { "id": 0, "name": "Against Pyro or Electro", "stats": [{ "stat": "all", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 10, "refine": 1 }
    },
    {
        "id": 307,
        "name": "Bane of Fire and Thunder - Refine 3",
        "options": [
            { "id": 0, "name": "Against Pyro or Electro", "stats": [{ "stat": "all", "value": 28 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 10, "refine": 2 }
    },
    {
        "id": 308,
        "name": "Bane of Fire and Thunder - Refine 4",
        "options": [
            { "id": 0, "name": "Against Pyro or Electro", "stats": [{ "stat": "all", "value": 32 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 10, "refine": 3 }
    },
    {
        "id": 309,
        "name": "Bane of Fire and Thunder - Refine 5",
        "options": [
            { "id": 0, "name": "Against Pyro or Electro", "stats": [{ "stat": "all", "value": 36 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 10, "refine": 4 }
    },
    {
        "id": 310,
        "name": "Smashed Stone - Refine 1",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 16 }, { "stat": "def%", "value": 16 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 12 }, { "stat": "def%", "value": 12 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 8 }, { "stat": "def%", "value": 8 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 4 }, { "stat": "def%", "value": 4 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 11, "refine": 0 }
    },
    {
        "id": 311,
        "name": "Smashed Stone - Refine 2",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 20 }, { "stat": "def%", "value": 20 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 15 }, { "stat": "def%", "value": 15 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 10 }, { "stat": "def%", "value": 10 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 5 }, { "stat": "def%", "value": 5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 11, "refine": 1 }
    },
    {
        "id": 312,
        "name": "Smashed Stone - Refine 3",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 24 }, { "stat": "def%", "value": 24 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 18 }, { "stat": "def%", "value": 18 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 12 }, { "stat": "def%", "value": 12 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 6 }, { "stat": "def%", "value": 6 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 11, "refine": 2 }
    },
    {
        "id": 313,
        "name": "Smashed Stone - Refine 4",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 28 }, { "stat": "def%", "value": 28 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 21 }, { "stat": "def%", "value": 21 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 14 }, { "stat": "def%", "value": 14 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 7 }, { "stat": "def%", "value": 7 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 11, "refine": 3 }
    },
    {
        "id": 314,
        "name": "Smashed Stone - Refine 5",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 32 }, { "stat": "def%", "value": 32 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 24 }, { "stat": "def%", "value": 24 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 16 }, { "stat": "def%", "value": 16 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 8 }, { "stat": "def%", "value": 8 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 11, "refine": 4 }
    },
    {
        "id": 315,
        "name": "Determination - Refine 1",
        "options": [
            { "id": 0, "name": "After Elemental Burst", "stats": [{ "stat": "atk%", "value": 12 }, { "stat": "mspeed", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 15, "refine": 0 }
    },
    {
        "id": 316,
        "name": "Determination - Refine 2",
        "options": [
            { "id": 0, "name": "After Elemental Burst", "stats": [{ "stat": "atk%", "value": 15 }, { "stat": "mspeed", "value": 15 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 15, "refine": 1 }
    },
    {
        "id": 317,
        "name": "Determination - Refine 3",
        "options": [
            { "id": 0, "name": "After Elemental Burst", "stats": [{ "stat": "atk%", "value": 18 }, { "stat": "mspeed", "value": 18 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 15, "refine": 2 }
    },
    {
        "id": 318,
        "name": "Determination - Refine 4",
        "options": [
            { "id": 0, "name": "After Elemental Burst", "stats": [{ "stat": "atk%", "value": 21 }, { "stat": "mspeed", "value": 21 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 15, "refine": 3}
    },
    {
        "id": 319,
        "name": "Determination - Refine 5",
        "options": [
            { "id": 0, "name": "After Elemental Burst", "stats": [{ "stat": "atk%", "value": 24 }, { "stat": "mspeed", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 15, "refine": 4 }
    },
    {
        "id": 320,
        "name": "Sky-Piercing Fang - Refine 1",
        "options": [
            { "id": 0, "name": "After Elemental Burst", "stats": [{ "stat": "additional", "value": 20 }, { "stat": "aspeed", "value": 10 }, { "stat": "mspeed", "value": 10 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 16, "refine": 0 }
    },
    {
        "id": 321,
        "name": "Sky-Piercing Fang - Refine 2",
        "options": [
            { "id": 0, "name": "After Elemental Burst", "stats": [{ "stat": "additional", "value": 25 }, { "stat": "aspeed", "value": 10 }, { "stat": "mspeed", "value": 10 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 16, "refine": 1 }
    },
    {
        "id": 322,
        "name": "Sky-Piercing Fang - Refine 3",
        "options": [
            { "id": 0, "name": "After Elemental Burst", "stats": [{ "stat": "additional", "value": 30 }, { "stat": "aspeed", "value": 10 }, { "stat": "mspeed", "value": 10 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 16, "refine": 2 }
    },
    {
        "id": 323,
        "name": "Sky-Piercing Fang - Refine 4",
        "options": [
            { "id": 0, "name": "After Elemental Burst", "stats": [{ "stat": "additional", "value": 35 }, { "stat": "aspeed", "value": 10 }, { "stat": "mspeed", "value": 10 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 16, "refine": 3 }
    },
    {
        "id": 324,
        "name": "Sky-Piercing Fang - Refine 5",
        "options": [
            { "id": 0, "name": "After Elemental Burst", "stats": [{ "stat": "additional", "value": 40 }, { "stat": "aspeed", "value": 10 }, { "stat": "mspeed", "value": 10 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 16, "refine": 4 }
    },
    {
        "id": 325,
        "name": "Itinerant Hero - Refine 1",
        "options": [
            { "id": 0, "name": "Not taking DMG for 5s", "stats": [{ "stat": "all", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 18, "refine": 0 }
    },
    {
        "id": 326,
        "name": "Itinerant Hero - Refine 2",
        "options": [
            { "id": 0, "name": "Not taking DMG for 5s", "stats": [{ "stat": "all", "value": 15 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 17, "refine":1 }
    },
    {
        "id": 327,
        "name": "Itinerant Hero - Refine 3",
        "options": [
            { "id": 0, "name": "Not taking DMG for 5s", "stats": [{ "stat": "all", "value": 18 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 18, "refine": 2 }
    },
    {
        "id": 328,
        "name": "Itinerant Hero - Refine 4",
        "options": [
            { "id": 0, "name": "Not taking DMG for 5s", "stats": [{ "stat": "all", "value": 21 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 18, "refine": 3 }
    },
    {
        "id": 329,
        "name": "Itinerant Hero - Refine 5",
        "options": [
            { "id": 0, "name": "Not taking DMG for 5s", "stats": [{ "stat": "all", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 18, "refine": 4 }
    },
    {
        "id": 330,
        "name": "Golden Majesty - Refine 1",
        "options": [
            { "id": 0, "name": "5 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 40 }] },
            { "id": 1, "name": "4 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 32 }] },
            { "id": 2, "name": "3 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 24 }] },
            { "id": 3, "name": "2 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 16 }] },
            { "id": 4, "name": "1 Stack - Shielded", "stats": [{ "stat": "atk%", "value": 8 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "atk%", "value": 20 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 16 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 12 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 8 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 4 }] }
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "catalyst", "id": 21, "refine": 0 }, { "type": "weapon", "subtype": "polearm", "id": 16, "refine": 0 }, { "type": "weapon", "subtype": "sword", "id": 23, "refine": 0 }, { "type": "weapon", "subtype": "claymore", "id": 21, "refine": 0 }]
    },
    {
        "id": 331,
        "name": "Golden Majesty - Refine 2",
        "options": [
            { "id": 0, "name": "5 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 50 }] },
            { "id": 1, "name": "4 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 40 }] },
            { "id": 2, "name": "3 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 30 }] },
            { "id": 3, "name": "2 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 20 }] },
            { "id": 4, "name": "1 Stack - Shielded", "stats": [{ "stat": "atk%", "value": 10 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "atk%", "value": 25 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 20 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 15 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 10 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 5 }] }
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "catalyst", "id": 21, "refine": 1 }, { "type": "weapon", "subtype": "polearm", "id": 16, "refine": 1 }, { "type": "weapon", "subtype": "sword", "id": 23, "refine": 1 }, { "type": "weapon", "subtype": "claymore", "id": 21, "refine": 1 }]
    },
    {
        "id": 332,
        "name": "Golden Majesty - Refine 3",
        "options": [
            { "id": 0, "name": "5 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 64 }] },
            { "id": 1, "name": "4 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 48 }] },
            { "id": 2, "name": "3 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 36 }] },
            { "id": 3, "name": "2 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 24 }] },
            { "id": 4, "name": "1 Stack - Shielded", "stats": [{ "stat": "atk%", "value": 12 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "atk%", "value": 32 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 24 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 18 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 12 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 6 }] }
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "catalyst", "id": 21, "refine": 2 }, { "type": "weapon", "subtype": "polearm", "id": 16, "refine": 2 }, { "type": "weapon", "subtype": "sword", "id": 23, "refine": 2 }, { "type": "weapon", "subtype": "claymore", "id": 21, "refine": 2 }]
    },
    {
        "id": 333,
        "name": "Golden Majesty - Refine 4",
        "options": [
            { "id": 0, "name": "5 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 70 }] },
            { "id": 1, "name": "4 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 56 }] },
            { "id": 2, "name": "3 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 42 }] },
            { "id": 3, "name": "2 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 28 }] },
            { "id": 4, "name": "1 Stack - Shielded", "stats": [{ "stat": "atk%", "value": 14 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "atk%", "value": 35 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 28 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 21 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 14 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 7 }] }
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "catalyst", "id": 21, "refine": 3 }, { "type": "weapon", "subtype": "polearm", "id": 16, "refine": 3 }, { "type": "weapon", "subtype": "sword", "id": 23, "refine": 3 }, { "type": "weapon", "subtype": "claymore", "id": 21, "refine": 3 }]
    },
    {
        "id": 334,
        "name": "Golden Majesty - Refine 5",
        "options": [
            { "id": 0, "name": "5 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 80 }] },
            { "id": 1, "name": "4 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 64 }] },
            { "id": 2, "name": "3 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 48 }] },
            { "id": 3, "name": "2 Stacks - Shielded", "stats": [{ "stat": "atk%", "value": 32 }] },
            { "id": 4, "name": "1 Stack - Shielded", "stats": [{ "stat": "atk%", "value": 16 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "atk%", "value": 40 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 32 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 24 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 16 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 8 }] }
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "catalyst", "id": 21, "refine": 4 }, { "type": "weapon", "subtype": "polearm", "id": 16, "refine": 4 }, { "type": "weapon", "subtype": "sword", "id": 23, "refine": 4 }, { "type": "weapon", "subtype": "claymore", "id": 21, "refine": 4 }]
    },
    {
        "id": 335,
        "name": "Infusion Needle - Refine 1",
        "options": [
            { "id": 0, "name": "After Picking Orb/Particle", "stats": [{ "stat": "additional", "value": 20 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 4, "refine": 0 }
    },
    {
        "id": 336,
        "name": "Infusion Needle - Refine 2",
        "options": [
            { "id": 0, "name": "After Picking Orb/Particle", "stats": [{ "stat": "additional", "value": 25 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 4, "refine": 1 }
    },
    {
        "id": 337,
        "name": "Infusion Needle - Refine 3",
        "options": [
            { "id": 0, "name": "After Picking Orb/Particle", "stats": [{ "stat": "additional", "value": 30 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 4, "refine": 2 }
    },
    {
        "id": 338,
        "name": "Infusion Needle - Refine 4",
        "options": [
            { "id": 0, "name": "After Picking Orb/Particle", "stats": [{ "stat": "additional", "value": 35 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 4, "refine": 3 }
    },
    {
        "id": 339,
        "name": "Infusion Needle - Refine 5",
        "options": [
            { "id": 0, "name": "After Picking Orb/Particle", "stats": [{ "stat": "additional", "value": 40 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 4, "refine": 4 }
    },
    {
        "id": 340,
        "name": "Undivided Heart",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "critcharged", "value": 20 }] }
        ],
        "requirement": { "type": "character", "id": "ganyu" }
    },
    {
        "id": 341,
        "name": "Harmony between Heaven and Earth",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "cryo", "value": 20 }] }
        ],
        "requirement": { "type": "party", "id": "ganyu" }
    },
    {
        "id": 342,
        "name": "Protector's Virtue - Refine 1",
        "options": [
            { "id": 0, "name": "Permanent", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.012 } },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 24, "refine": 0 }
    },
    {
        "id": 343,
        "name": "Protector's Virtue - Refine 2",
        "options": [
            { "id": 0, "name": "Permanent", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.015 } },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 24, "refine": 1 }
    },
    {
        "id": 344,
        "name": "Protector's Virtue - Refine 3",
        "options": [
            { "id": 0, "name": "Permanent", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.018 } },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 24, "refine": 2 }
    },
    {
        "id": 345,
        "name": "Protector's Virtue - Refine 4",
        "options": [
            { "id": 0, "name": "Permanent", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.021 } },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 24, "refine": 3 }
    },
    {
        "id": 346,
        "name": "Protector's Virtue - Refine 5",
        "options": [
            { "id": 0, "name": "Permanent", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.024 } },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 24, "refine": 4 }
    },
    {
        "id": 347,
        "name": "Bane of All Evil",
        "options": [
            { "id": 0, "name": "Level 1", "stats": [{ "stat": "normal", "value": 58.45 }, { "stat": "charged", "value": 58.45 }, { "stat": "plunge", "value": 58.45 }], "overwrite": "anemo", "priority": 0 },
            { "id": 1, "name": "Level 2", "stats": [{ "stat": "normal", "value": 61.95 }, { "stat": "charged", "value": 61.95 }, { "stat": "plunge", "value": 61.95 }], "overwrite": "anemo", "priority": 0 },
            { "id": 2, "name": "Level 3", "stats": [{ "stat": "normal", "value": 65.45 }, { "stat": "charged", "value": 65.45 }, { "stat": "plunge", "value": 65.45 }], "overwrite": "anemo", "priority": 0},
            { "id": 3, "name": "Level 4", "stats": [{ "stat": "normal", "value": 70 }, { "stat": "charged", "value": 70 }, { "stat": "plunge", "value": 70 }], "overwrite": "anemo", "priority": 0},
            { "id": 4, "name": "Level 5", "stats": [{ "stat": "normal", "value": 73.5 }, { "stat": "charged", "value": 73.5 }, { "stat": "plunge", "value": 73.5 }], "overwrite": "anemo", "priority": 0},
            { "id": 5, "name": "Level 6", "stats": [{ "stat": "normal", "value": 77 }, { "stat": "charged", "value": 77 }, { "stat": "plunge", "value": 77 }], "overwrite": "anemo", "priority": 0 },
            { "id": 6, "name": "Level 7", "stats": [{ "stat": "normal", "value": 81.55 }, { "stat": "charged", "value": 81.55 }, { "stat": "plunge", "value": 81.55 }], "overwrite": "anemo", "priority": 0},
            { "id": 7, "name": "Level 8", "stats": [{ "stat": "normal", "value": 86.1 }, { "stat": "charged", "value": 86.1 }, { "stat": "plunge", "value": 86.1 }], "overwrite": "anemo", "priority": 0 },
            { "id": 8, "name": "Level 9", "stats": [{ "stat": "normal", "value": 90.65 }, { "stat": "charged", "value": 90.65 }, { "stat": "plunge", "value": 90.65 }], "overwrite": "anemo", "priority": 0 },
            { "id": 9, "name": "Level 10", "stats": [{ "stat": "normal", "value": 95.2 }, { "stat": "charged", "value": 95.2 }, { "stat": "plunge", "value": 95.2 }], "overwrite": "anemo", "priority": 0 },
            { "id": 10, "name": "Level 11", "stats": [{ "stat": "normal", "value": 99.75 }, { "stat": "charged", "value": 99.75 }, { "stat": "plunge", "value": 99.75 }], "overwrite": "anemo", "priority": 0},
            { "id": 11, "name": "Level 12", "stats": [{ "stat": "normal", "value": 104.3 }, { "stat": "charged", "value": 104.3 }, { "stat": "plunge", "value": 104.3 }], "overwrite": "anemo", "priority": 0},
            { "id": 12, "name": "Level 13", "stats": [{ "stat": "normal", "value": 108.85 }, { "stat": "charged", "value": 108.85 }, { "stat": "plunge", "value": 108.85 }], "overwrite": "anemo", "priority": 0},
            { "id": 13, "name": "Level 14", "stats": [{ "stat": "normal", "value": 113.4 }, { "stat": "charged", "value": 113.4 }, { "stat": "plunge", "value": 113.4 }], "overwrite": "anemo", "priority": 0},
            { "id": 14, "name": "Level 15", "stats": [{ "stat": "normal", "value": 117.95 }, { "stat": "charged", "value": 117.95 }, { "stat": "plunge", "value": 117.95 }], "overwrite": "anemo", "priority": 0 },
        ],
        "requirement": { "type": "character", "id": "xiao" }
    },
    {
        "id": 348,
        "name": "Transcension: Extinction of Suffering",
        "options": [
            { "id": 0, "name": "HP <50%", "stats": [{ "stat": "def%", "value": 100 }] },
        ],
        "requirement": { "type": "character", "id": "xiao" }
    },
    {
        "id": 349,
        "name": "Conqueror of Evil: Tamer of Demons",
        "options": [
            { "id": 1, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 25 }] },
            { "id": 2, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 20 }] },
            { "id": 3, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 15 }] },
            { "id": 4, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 10 }] },
            { "id": 5, "name": "1 Stack", "stats": [{ "stat": "all", "value": 5 }] },
        ],
        "requirement": { "type": "character", "id": "xiao" }
    },
    {
        "id": 350,
        "name": "Dissolution Eon: Heaven Fall",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "skill", "value": 45 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "skill", "value": 30 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "skill", "value": 15 }] },
        ],
        "requirement": { "type": "character", "id": "xiao" }
    },
    {
        "id": 351,
        "name": "Enduring Rock - Debuff",
        "options": [
            { "id": 0, "name": "Attack while Shielded", "stats": [{ "stat": "enemygeores", "value": -20 }] }
        ],
        "requirement": { "type": "resonance", "id": "geo", "count": 2 },
    },
    {
        "id": 352,
        "name": "Flutter By",
        "options": [
            { "id": 0, "name": "After Guide to Afterlife", "stats": [{ "stat": "crit", "value": 12 }] }
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "hutao" }, { "type": "character", "id": "hutao" }]
    },
    {
        "id": 353,
        "name": "Sanguine Rouge",
        "options": [
            { "id": 0, "name": "<50% HP", "stats": [{ "stat": "pyro", "value": 33 }] },
        ],
        "requirement": { "type": "character", "id": "hutao" }
    },
    {
        "id": 354,
        "name": "Garden of Eternal Rest",
        "options": [
            { "id": 0, "name": "After defeating Blood Blossom target", "stats": [{ "stat": "crit", "value": 12 }] }
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "hutao" }, { "type": "character", "id": "hutao" }]
    },
    {
        "id": 355,
        "name": "Butterfly's Embrace",
        "options": [
            { "id": 0, "name": "After lethal strike", "stats": [{ "stat": "crit", "value": 100 }, { "stat": "physicalres", "value": 200 }, { "stat": "elementalres", "value": 200 }] }
        ],
        "requirement": { "type": "character", "id": "hutao" }
    },
    {
        "id": 356,
        "name": "Guide to Afterlife - Paramita Papilio",
        "options": [
            { "id": 0, "name": "Level 1", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0384 }, "overwrite": "pyro", "priority": 0},
            { "id": 1, "name": "Level 2", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0407 }, "overwrite": "pyro", "priority": 0},
            { "id": 2, "name": "Level 3", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.043 }, "overwrite": "pyro", "priority": 0},
            { "id": 3, "name": "Level 4", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.046 }, "overwrite": "pyro", "priority": 0 },
            { "id": 4, "name": "Level 5", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0483 }, "overwrite": "pyro", "priority": 0},
            { "id": 5, "name": "Level 6", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0506 }, "overwrite": "pyro", "priority": 0},
            { "id": 6, "name": "Level 7", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0536 }, "overwrite": "pyro", "priority": 0},
            { "id": 7, "name": "Level 8", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0566 }, "overwrite": "pyro", "priority": 0 },
            { "id": 8, "name": "Level 9", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0596 }, "overwrite": "pyro", "priority": 0},
            { "id": 9, "name": "Level 10", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0626 }, "overwrite": "pyro", "priority": 0},
            { "id": 10, "name": "Level 11", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0656 }, "overwrite": "pyro", "priority": 0},
            { "id": 11, "name": "Level 12", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0685 }, "overwrite": "pyro", "priority": 0},
            { "id": 12, "name": "Level 13", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0715 }, "overwrite": "pyro", "priority": 0},
            { "id": 13, "name": "Level 14", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0745 }, "overwrite": "pyro", "priority": 0 },
            { "id": 14, "name": "Level 15", "priority": 0, "transform": { "source": "hp", "target": "atk", "ratio": 0.0775 }, "overwrite": "pyro", "priority": 0},
        ],
        "requirement": { "type": "character", "id": "hutao" }
    },
    {
        "id": 357,
        "name": "Reckless Cinnabar - Refine 1",
        "options": [
            { "id": 0, "name": ">50% HP", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.008 } },
            { "id": 1, "name": "<50% HP", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.018 } },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 19, "refine": 0 }
    },
    {
        "id": 358,
        "name": "Reckless Cinnabar - Refine 2",
        "options": [
            { "id": 0, "name": ">50% HP", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.01 } },
            { "id": 1, "name": "<50% HP", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.022 } },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 19, "refine": 1 }
    },
    {
        "id": 359,
        "name": "Reckless Cinnabar - Refine 3",
        "options": [
            { "id": 0, "name": ">50% HP", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.012 } },
            { "id": 1, "name": "<50% HP", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.026 } },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 19, "refine": 2 }
    },
    {
        "id": 360,
        "name": "Reckless Cinnabar - Refine 4",
        "options": [
            { "id": 0, "name": ">50% HP", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.014 } },
            { "id": 1, "name": "<50% HP", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.03 } },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 19, "refine": 3 }
    },
    {
        "id": 361,
        "name": "Reckless Cinnabar - Refine 5",
        "options": [
            { "id": 0, "name": ">50% HP", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.016 } },
            { "id": 1, "name": "<50% HP", "priority": 0 , "transform": { "source": "hp", "target": "atk", "ratio": 0.034 } },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 19, "refine": 4 }
    },
    {
        "id": 362,
        "name": "The Parting Refrain - Refine 1",
        "options": [
            { "id": 0, "name": "Millennial Movement: Farewell Song", "stats": [{ "stat": "elemastery", "value": 100 }, { "stat": "atk%", "value": 20 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 21, "refine": 0 }
    },
    {
        "id": 363,
        "name": "The Parting Refrain - Refine 2",
        "options": [
            { "id": 0, "name": "Millennial Movement: Farewell Song", "stats": [{ "stat": "elemastery", "value": 125 }, { "stat": "atk%", "value": 25 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 21, "refine": 1 }
    },
    {
        "id": 364,
        "name": "The Parting Refrain - Refine 3",
        "options": [
            { "id": 0, "name": "Millennial Movement: Farewell Song", "stats": [{ "stat": "elemastery", "value": 150 }, { "stat": "atk%", "value": 30 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 21, "refine": 2 }
    },
    {
        "id": 365,
        "name": "The Parting Refrain - Refine 4",
        "options": [
            { "id": 0, "name": "Millennial Movement: Farewell Song", "stats": [{ "stat": "elemastery", "value": 175 }, { "stat": "atk%", "value": 35 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 21, "refine": 3 }
    },
    {
        "id": 366,
        "name": "The Parting Refrain - Refine 5",
        "options": [
            { "id": 0, "name": "Millennial Movement: Farewell Song", "stats": [{ "stat": "elemastery", "value": 200 }, { "stat": "atk%", "value": 40 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 21, "refine": 4 }
    },
    {
        "id": 367,
        "name": "Windblume Wish - Refine 1",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "stats": [{ "stat": "atk%", "value": 16 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 22, "refine": 0 }
    },
    {
        "id": 368,
        "name": "Windblume Wish - Refine 2",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "stats": [{ "stat": "atk%", "value": 20 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 22, "refine": 1 }
    },
    {
        "id": 369,
        "name": "Windblume Wish - Refine 3",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "stats": [{ "stat": "atk%", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 22, "refine": 2 }
    },
    {
        "id": 370,
        "name": "Windblume Wish - Refine 4",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "stats": [{ "stat": "atk%", "value": 28 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 22, "refine": 3 }
    },
    {
        "id": 371,
        "name": "Windblume Wish - Refine 5",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "stats": [{ "stat": "atk%", "value": 32 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 22, "refine": 4 }
    },
    {
        "id": 372,
        "name": "Unholy Revelation",
        "options": [
            { "id": 0, "name": "After CRIT", "stats": [{ "stat": "aspeed", "value": 10 }, { "stat": "normal", "value": 10 }] }
        ],
        "requirement": { "type": "character", "id": "rosaria" }
    },
    {
        "id": 373,
        "name": "Divine Retribution",
        "options": [
            { "id": 0, "name": "After CRIT", "stats": [{ "stat": "enemyphysicalres", "value": -20 }] }
        ],
        "requirement": { "type": "party", "id": "rosaria" }
    },
    {
        "id": 374,
        "name": "Regina Probationum",
        "options": [
            { "id": 0, "name": "After striking behind with Ravaging Confession", "stats": [{ "stat": "crit", "value": 12 }] }
        ],
        "requirement": { "type": "character", "id": "rosaria" }
    },
    {
        "id": 375,
        "name": "Shadow Samaritan",
        "options": [
            { "id": 0, "name": "After casting Rites of Termination", "priority": 0 , "transform": { "source": "rosariacrit", "target": "crit", "ratio": 0.15, "max":15 } },
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "rosaria" }, { "type": "character", "id": "rosaria" }]
    },
    {
        "id": 376,
        "name": "Done Deal",
        "options": [
            { "id": 0, "name": "Level 1", "stats": [{ "stat": "charged", "value": 33.4 }] },
            { "id": 1, "name": "Level 2", "stats": [{ "stat": "charged", "value": 35.4 }] },
            { "id": 2, "name": "Level 3", "stats": [{ "stat": "charged", "value": 37.4 }] },
            { "id": 3, "name": "Level 4", "stats": [{ "stat": "charged", "value": 40 }] },
            { "id": 4, "name": "Level 5", "stats": [{ "stat": "charged", "value": 42 }] },
            { "id": 5, "name": "Level 6", "stats": [{ "stat": "charged", "value": 44 }] },
            { "id": 6, "name": "Level 7", "stats": [{ "stat": "charged", "value": 46.6 }] },
            { "id": 7, "name": "Level 8", "stats": [{ "stat": "charged", "value": 49.2 }] },
            { "id": 8, "name": "Level 9", "stats": [{ "stat": "charged", "value": 51.8 }] },
            { "id": 9, "name": "Level 10", "stats": [{ "stat": "charged", "value": 54.4 }] },
            { "id": 10, "name": "Level 11", "stats": [{ "stat": "charged", "value": 57 }] },
            { "id": 11, "name": "Level 12", "stats": [{ "stat": "charged", "value": 59.6 }] },
            { "id": 12, "name": "Level 13", "stats": [{ "stat": "charged", "value": 62.2 }] },
            { "id": 13, "name": "Level 14", "stats": [{ "stat": "charged", "value": 64.8 }] },
            { "id": 14, "name": "Level 15", "stats": [{ "stat": "charged", "value": 67.4 }] },
        ],
        "requirement": { "type": "character", "id": "yanfei" }
    },
    {
        "id": 377,
        "name": "Right of Final Interpretation",
        "options": [
            { "id": 0, "name": "Against <50%", "stats": [{ "stat": "critcharged", "value": 20 }] }
        ],
        "requirement": { "type": "character", "id": "yanfei" }
    },
    {
        "id": 378,
        "name": "Proviso",
        "options": [
            { "id": 0, "name": "After consuming 4 Scarlet Seals", "stats": [{ "stat": "pyro", "value": 20 }] },
            { "id": 1, "name": "After consuming 3 Scarlet Seals", "stats": [{ "stat": "pyro", "value": 15 }] },
            { "id": 2, "name": "After consuming 2 Scarlet Seals", "stats": [{ "stat": "pyro", "value": 10 }] },
            { "id": 3, "name": "After consuming 1 Scarlet Seals", "stats": [{ "stat": "pyro", "value": 5 }] },
        ],
        "requirement": { "type": "character", "id": "yanfei" }
    },
    {
        "id": 380,
        "name": "Pale Flame",
        "options": [
            { "id": 0, "name": "4 Piece Bonus - 2 Stacks", "stats": [{ "stat": "atk%", "value": 18 }, { "stat": "physical", "value": 25 }] },
            { "id": 1, "name": "4 Piece Bonus - 1 Stack", "stats": [{ "stat": "atk%", "value": 9 }] }
        ],
        "requirement": { "type": "artifact_set", "id": 32, "count": 4 }
    },
    {
        "id": 381,
        "name": "Icetide Vortex",
        "options": [
            { "id": 0, "name": "Level 1", "stats": [{ "stat": "enemyphysicalres", "value": -16 }, { "stat": "enemycryores", "value": -16 }] },
            { "id": 1, "name": "Level 2", "stats": [{ "stat": "enemyphysicalres", "value": -17 }, { "stat": "enemycryores", "value": -17 }] },
            { "id": 2, "name": "Level 3", "stats": [{ "stat": "enemyphysicalres", "value": -18 }, { "stat": "enemycryores", "value": -18 }] },
            { "id": 3, "name": "Level 4", "stats": [{ "stat": "enemyphysicalres", "value": -19 }, { "stat": "enemycryores", "value": -19 }] },
            { "id": 4, "name": "Level 5", "stats": [{ "stat": "enemyphysicalres", "value": -20 }, { "stat": "enemycryores", "value": -20 }] },
            { "id": 5, "name": "Level 6", "stats": [{ "stat": "enemyphysicalres", "value": -21 }, { "stat": "enemycryores", "value": -21 }] },
            { "id": 6, "name": "Level 7", "stats": [{ "stat": "enemyphysicalres", "value": -22 }, { "stat": "enemycryores", "value": -22 }] },
            { "id": 7, "name": "Level 8", "stats": [{ "stat": "enemyphysicalres", "value": -23 }, { "stat": "enemycryores", "value": -23 }] },
            { "id": 8, "name": "Level 9", "stats": [{ "stat": "enemyphysicalres", "value": -24 }, { "stat": "enemycryores", "value": -24 }] },
            { "id": 9, "name": "Level 10", "stats": [{ "stat": "enemyphysicalres", "value": -25 }, { "stat": "enemycryores", "value": -25 }] },
            { "id": 10, "name": "Level 11", "stats": [{ "stat": "enemyphysicalres", "value": -25 }, { "stat": "enemycryores", "value": -25 }] },
            { "id": 11, "name": "Level 12", "stats": [{ "stat": "enemyphysicalres", "value": -25 }, { "stat": "enemycryores", "value": -25 }] },
            { "id": 12, "name": "Level 13", "stats": [{ "stat": "enemyphysicalres", "value": -25 }, { "stat": "enemycryores", "value": -25 }] },
            { "id": 13, "name": "Level 14", "stats": [{ "stat": "enemyphysicalres", "value": -25 }, { "stat": "enemycryores", "value": -25 }] },
            { "id": 14, "name": "Level 15", "stats": [{ "stat": "enemyphysicalres", "value": -25 }, { "stat": "enemycryores", "value": -25 }] }
        ],
        "requirement": { "type": "party", "id": "eula" }
    },
    {
        "id": 382,
        "name": "Tidal Illusion",
        "options": [
            { "id": 0, "name": "After Grimheart stacks consumed", "stats": [{ "stat": "physical", "value": 30 }] }
        ],
        "requirement": { "type": "character", "id": "eula" }
    },
    {
        "id": 383,
        "name": "The Obstinacy of One's Inferiors",
        "options": [
            { "id": 0, "name": "Against <50% HP", "stats": [{ "stat": "burst", "value": 25 }] }
        ],
        "requirement": { "type": "character", "id": "eula" }
    },
    {
        "id": 384,
        "name": "Rebel's Banner-Hymn - Refine 1",
        "options": [
            { "id": 0, "name": "Millennial Movement: Banner-Hymn", "stats": [{ "stat": "aspeed", "value": 12 }, { "stat": "atk%", "value": 20 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 23, "refine": 0 }
    },
    {
        "id": 385,
        "name": "Rebel's Banner-Hymn - Refine 2",
        "options": [
            { "id": 0, "name": "Millennial Movement: Banner-Hymn", "stats": [{ "stat": "aspeed", "value": 15 }, { "stat": "atk%", "value": 25 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 23, "refine": 1 }
    },
    {
        "id": 386,
        "name": "Rebel's Banner-Hymn - Refine 3",
        "options": [
            { "id": 0, "name": "Millennial Movement: Banner-Hymn", "stats": [{ "stat": "aspeed", "value": 18 }, { "stat": "atk%", "value": 30 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 23, "refine": 2 }
    },
    {
        "id": 387,
        "name": "Rebel's Banner-Hymn - Refine 4",
        "options": [
            { "id": 0, "name": "Millennial Movement: Banner-Hymn", "stats": [{ "stat": "aspeed", "value": 21 }, { "stat": "atk%", "value": 35 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 23, "refine": 3 }
    },
    {
        "id": 388,
        "name": "Rebel's Banner-Hymn - Refine 5",
        "options": [
            { "id": 0, "name": "Millennial Movement: Banner-Hymn", "stats": [{ "stat": "aspeed", "value": 24 }, { "stat": "atk%", "value": 40 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "claymore", "id": 23, "refine": 4 }
    },
    {
        "id": 389,
        "name": "Yamaarashi Tailwind",
        "options": [
            { "id": 0, "name": "Inside Autumn Whirlwind field", "stats": [{ "stat": "elemastery", "value": 200 }] }
        ],
        "requirement": { "type": "party", "id": "kazuha" }
    },
    {
        "id": 390,
        "name": "Crimson Momiji",
        "options": [
            { "id": 0, "name": "After Skill or Burst", "priority": 0, "transform": [{ "source": "elemastery", "target": "normal", "ratio": 0.2 }, { "source": "elemastery", "target": "charged", "ratio": 0.2 }, { "source": "elemastery", "target": "plunge", "ratio": 0.2 }], "overwrite": "anemo", "priority": 0},
        ],
        "requirement": { "type": "character", "id": "kazuha" }
    },
    {
        "id": 391,
        "name": "Poetics of Fuubutsu",
        "options": [
            { "id": 0, "name": "Cryo Infusion", "priority": 0 , "transform": { "source": "kazuhaelemastery", "target": "cryo", "ratio": 0.04 } },
            { "id": 1, "name": "Electro Infusion", "priority": 0 , "transform": { "source": "kazuhaelemastery", "target": "electro", "ratio": 0.04 } },
            { "id": 2, "name": "Hydro Infusion", "priority": 0 , "transform": { "source": "kazuhaelemastery", "target": "hydro", "ratio": 0.04 } },
            { "id": 3, "name": "Pyro Infusion", "priority": 0 , "transform": { "source": "kazuhaelemastery", "target": "pyro", "ratio": 0.04 } },
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "kazuha" }, { "type": "character", "id": "kazuha" }]
    },
    {
        "id": 392,
        "name": "Revolutionary Chorale - Refine 1",
        "options": [
            { "id": 0, "name": "Millennial Movement: Song of Resistance", "stats": [{ "stat": "normal", "value": 16 }, { "stat": "charged", "value": 16 }, { "stat": "plunge", "value": 16 }, { "stat": "atk%", "value": 20 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 25, "refine": 0 }
    },
    {
        "id": 393,
        "name": "Revolutionary Chorale - Refine 2",
        "options": [
            { "id": 0, "name": "Millennial Movement: Song of Resistance", "stats": [{ "stat": "normal", "value": 20 }, { "stat": "charged", "value": 20 }, { "stat": "plunge", "value": 20 }, { "stat": "atk%", "value": 25 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 25, "refine": 1 }
    },
    {
        "id": 394,
        "name": "Revolutionary Chorale - Refine 3",
        "options": [
            { "id": 0, "name": "Millennial Movement: Song of Resistance", "stats": [{ "stat": "normal", "value": 24 }, { "stat": "charged", "value": 24 }, { "stat": "plunge", "value": 24 }, { "stat": "atk%", "value": 30 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 25, "refine": 2 }
    },
    {
        "id": 395,
        "name": "Revolutionary Chorale - Refine 4",
        "options": [
            { "id": 0, "name": "Millennial Movement: Song of Resistance", "stats": [{ "stat": "normal", "value": 28 }, { "stat": "charged", "value": 28 }, { "stat": "plunge", "value": 28 }, { "stat": "atk%", "value": 35 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 25, "refine": 3 }
    },
    {
        "id": 396,
        "name": "Revolutionary Chorale - Refine 5",
        "options": [
            { "id": 0, "name": "Millennial Movement: Song of Resistance", "stats": [{ "stat": "normal", "value": 32 }, { "stat": "charged", "value": 32 }, { "stat": "plunge", "value": 32 }, { "stat": "atk%", "value": 40 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 25, "refine": 4 }
    },
    {
        "id": 397,
        "name": "Evernight Duet - Refine 1",
        "options": [
            { "id": 0, "name": "Both", "stats": [{ "stat": "skill", "value": 20 }, { "stat": "normal", "value": 20 }] },
            { "id": 1, "name": "After Normal Attack", "stats": [{ "stat": "skill", "value": 20 }] },
            { "id": 2, "name": "After Elemental Skill", "stats": [{ "stat": "normal", "value": 20 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 23, "refine": 0 }
    },
    {
        "id": 398,
        "name": "Evernight Duet - Refine 2",
        "options": [
            { "id": 0, "name": "Both", "stats": [{ "stat": "skill", "value": 25 }, { "stat": "normal", "value": 25 }] },
            { "id": 1, "name": "After Normal Attack", "stats": [{ "stat": "skill", "value": 25 }] },
            { "id": 2, "name": "After Elemental Skill", "stats": [{ "stat": "normal", "value": 25 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 23, "refine": 1 }
    },
    {
        "id": 399,
        "name": "Evernight Duet - Refine 3",
        "options": [
            { "id": 0, "name": "Both", "stats": [{ "stat": "skill", "value": 30 }, { "stat": "normal", "value": 30 }] },
            { "id": 1, "name": "After Normal Attack", "stats": [{ "stat": "skill", "value": 30 }] },
            { "id": 2, "name": "After Elemental Skill", "stats": [{ "stat": "normal", "value": 30 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 23, "refine": 2 }
    },
    {
        "id": 400,
        "name": "Evernight Duet - Refine 4",
        "options": [
            { "id": 0, "name": "Both", "stats": [{ "stat": "skill", "value": 35 }, { "stat": "normal", "value": 35 }] },
            { "id": 1, "name": "After Normal Attack", "stats": [{ "stat": "skill", "value": 35 }] },
            { "id": 2, "name": "After Elemental Skill", "stats": [{ "stat": "normal", "value": 35 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 23, "refine": 3 }
    },
    {
        "id": 401,
        "name": "Evernight Duet - Refine 5",
        "options": [
            { "id": 0, "name": "Both", "stats": [{ "stat": "skill", "value": 40 }, { "stat": "normal", "value": 40 }] },
            { "id": 1, "name": "After Normal Attack", "stats": [{ "stat": "skill", "value": 40 }] },
            { "id": 2, "name": "After Elemental Skill", "stats": [{ "stat": "normal", "value": 40 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 23, "refine": 4 }
    },
    {
        "id": 402,
        "name": "Dodoventure! - Refine 1",
        "options": [
            { "id": 0, "name": "Both", "stats": [{ "stat": "charged", "value": 16 }, { "stat": "atk%", "value": 8 }] },
            { "id": 1, "name": "After Normal Attack", "stats": [{ "stat": "charged", "value": 16 }] },
            { "id": 2, "name": "After Charged Attack", "stats": [{ "stat": "atk%", "value": 8 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 23, "refine": 0 }
    },
    {
        "id": 403,
        "name": "Dodoventure! - Refine 2",
        "options": [
            { "id": 0, "name": "Both", "stats": [{ "stat": "charged", "value": 20 }, { "stat": "atk%", "value": 10 }] },
            { "id": 1, "name": "After Normal Attack", "stats": [{ "stat": "charged", "value": 20 }] },
            { "id": 2, "name": "After Charged Attack", "stats": [{ "stat": "atk%", "value": 10 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 23, "refine": 1 }
    },
    {
        "id": 404,
        "name": "Dodoventure! - Refine 3",
        "options": [
            { "id": 0, "name": "Both", "stats": [{ "stat": "charged", "value": 24 }, { "stat": "atk%", "value": 12 }] },
            { "id": 1, "name": "After Normal Attack", "stats": [{ "stat": "charged", "value": 24 }] },
            { "id": 2, "name": "After Charged Attack", "stats": [{ "stat": "atk%", "value": 12 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 23, "refine": 2 }
    },
    {
        "id": 405,
        "name": "Dodoventure! - Refine 4",
        "options": [
            { "id": 0, "name": "Both", "stats": [{ "stat": "charged", "value": 28 }, { "stat": "atk%", "value": 14 }] },
            { "id": 1, "name": "After Normal Attack", "stats": [{ "stat": "charged", "value": 28 }] },
            { "id": 2, "name": "After Charged Attack", "stats": [{ "stat": "atk%", "value": 14 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 23, "refine": 3 }
    },
    {
        "id": 406,
        "name": "Dodoventure! - Refine 5",
        "options": [
            { "id": 0, "name": "Both", "stats": [{ "stat": "charged", "value": 32 }, { "stat": "atk%", "value": 16 }] },
            { "id": 1, "name": "After Normal Attack", "stats": [{ "stat": "charged", "value": 32 }] },
            { "id": 2, "name": "After Charged Attack", "stats": [{ "stat": "atk%", "value": 16 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 23, "refine": 4 }
    },
    {
        "id": 407,
        "name": "Egress Prep",
        "options": [
            { "id": 0, "name": "Press", "stats": [{ "stat": "skill", "value": 3.3 }] },
            { "id": 1, "name": "Hold 0.5s", "stats": [{ "stat": "skill", "value": 6.6 }] },
            { "id": 2, "name": "Hold 1s", "stats": [{ "stat": "skill", "value": 9.9 }] },
            { "id": 3, "name": "Hold 1.5s", "stats": [{ "stat": "skill", "value": 13.2 }] },
            { "id": 4, "name": "Hold 2s", "stats": [{ "stat": "skill", "value": 16.5 }] },
            { "id": 5, "name": "Hold 2.5s", "stats": [{ "stat": "skill", "value": 19.8 }] },
            { "id": 6, "name": "Hold 3s", "stats": [{ "stat": "skill", "value": 23.1 }] },
            { "id": 7, "name": "Hold 3.5s", "stats": [{ "stat": "skill", "value": 26.4 }] },
            { "id": 8, "name": "Hold 4s", "stats": [{ "stat": "skill", "value": 29.7 }] },
            { "id": 9, "name": "Hold 4.5s", "stats": [{ "stat": "skill", "value": 33 }] },
            { "id": 10, "name": "Hold 5s", "stats": [{ "stat": "skill", "value": 36.3 }] },
            { "id": 11, "name": "Hold 5.5s", "stats": [{ "stat": "skill", "value": 39.6 }] },
            { "id": 12, "name": "Hold 6s", "stats": [{ "stat": "skill", "value": 42.9 }] },
            { "id": 13, "name": "Hold 6.5s", "stats": [{ "stat": "skill", "value": 46.2 }] },
            { "id": 14, "name": "Hold 7s", "stats": [{ "stat": "skill", "value": 49.5 }] },
            { "id": 15, "name": "Hold 7.5s", "stats": [{ "stat": "skill", "value": 52.8 }] },
            { "id": 16, "name": "Hold 8s", "stats": [{ "stat": "skill", "value": 56.1 }] },
            { "id": 17, "name": "Hold 8.5s", "stats": [{ "stat": "skill", "value": 59.4 }] },
            { "id": 18, "name": "Hold 9s", "stats": [{ "stat": "skill", "value": 62.7 }] },
            { "id": 19, "name": "Hold 9.5s", "stats": [{ "stat": "skill", "value": 66.0 }] }
        ],
        "requirement": { "type": "party", "id": "sayu" }
    },
    {
        "id": 408,
        "name": "Niwabi Fire-Dance",
        "options": [
            { "id": 0, "name": "Level 1", "stats": [{ "stat": "normal_mult", "value": 137.91 }], "overwrite": "pyro", "priority": 0},
            { "id": 1, "name": "Level 2", "stats": [{ "stat": "normal_mult", "value": 140.18 }], "overwrite": "pyro", "priority": 0 },
            { "id": 2, "name": "Level 3", "stats": [{ "stat": "normal_mult", "value": 142.45 }], "overwrite": "pyro", "priority": 0},
            { "id": 3, "name": "Level 4", "stats": [{ "stat": "normal_mult", "value": 145.4 }], "overwrite": "pyro", "priority": 0 },
            { "id": 4, "name": "Level 5", "stats": [{ "stat": "normal_mult", "value": 147.67 }], "overwrite": "pyro", "priority": 0},
            { "id": 5, "name": "Level 6", "stats": [{ "stat": "normal_mult", "value": 149.94 }], "overwrite": "pyro", "priority": 0},
            { "id": 6, "name": "Level 7", "stats": [{ "stat": "normal_mult", "value": 152.89 }], "overwrite": "pyro", "priority": 0},
            { "id": 7, "name": "Level 8", "stats": [{ "stat": "normal_mult", "value": 155.84 }], "overwrite": "pyro", "priority": 0},
            { "id": 8, "name": "Level 9", "stats": [{ "stat": "normal_mult", "value": 158.79 }], "overwrite": "pyro", "priority": 0},
            { "id": 9, "name": "Level 10", "stats": [{ "stat": "normal_mult", "value": 161.74 }], "overwrite": "pyro", "priority": 0},
            { "id": 10, "name": "Level 11", "stats": [{ "stat": "normal_mult", "value": 164.7 }], "overwrite": "pyro", "priority": 0 },
            { "id": 11, "name": "Level 12", "stats": [{ "stat": "normal_mult", "value": 167.65 }], "overwrite": "pyro", "priority": 0 },
            { "id": 12, "name": "Level 13", "stats": [{ "stat": "normal_mult", "value": 170.6 }], "overwrite": "pyro", "priority": 0 },
            { "id": 13, "name": "Level 14", "stats": [{ "stat": "normal_mult", "value": 173.55 }], "overwrite": "pyro", "priority": 0 },
            { "id": 14, "name": "Level 15", "stats": [{ "stat": "normal_mult", "value": 176.5 }], "overwrite": "pyro", "priority": 0 }
        ],
        "requirement": { "type": "character", "id": "yoimiya" }
    },
    {
        "id": 409,
        "name": "Agate Ryuukin",
        "options": [
            { "id": 0, "name": "After Aurous Blaze Defeat", "stats": [{ "stat": "atk%", "value": 20 }] }
        ],
        "requirement": { "type": "character", "id": "yoimiya" }
    },
    {
        "id": 410,
        "name": "A Procession of Bonfires",
        "options": [
            { "id": 0, "name": "After Crit", "stats": [{ "stat": "pyro", "value": 25 }] }
        ],
        "requirement": { "type": "character", "id": "yoimiya" }
    },
    {
        "id": 411,
        "name": "Tricks of the Trouble-Maker",
        "options": [
            { "id": 0, "name": "10 Stacks", "stats": [{ "stat": "pyro", "value": 20 }] },
            { "id": 1, "name": "9 Stacks", "stats": [{ "stat": "pyro", "value": 18 }] },
            { "id": 2, "name": "8 Stacks", "stats": [{ "stat": "pyro", "value": 16 }] },
            { "id": 3, "name": "7 Stacks", "stats": [{ "stat": "pyro", "value": 14 }] },
            { "id": 4, "name": "6 Stacks", "stats": [{ "stat": "pyro", "value": 12 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "pyro", "value": 10 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "pyro", "value": 8 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "pyro", "value": 6 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "pyro", "value": 4 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "pyro", "value": 2 }] }
        ],
        "requirement": { "type": "character", "id": "yoimiya" }
    },
    {
        "id": 412,
        "name": "Summer Night's Dawn",
        "options": [
            { "id": 0, "name": "10 Stacks", "stats": [{ "stat": "pyro", "value": 20 }] },
            { "id": 1, "name": "9 Stacks", "stats": [{ "stat": "pyro", "value": 19 }] },
            { "id": 2, "name": "8 Stacks", "stats": [{ "stat": "pyro", "value": 18 }] },
            { "id": 3, "name": "7 Stacks", "stats": [{ "stat": "pyro", "value": 17 }] },
            { "id": 4, "name": "6 Stacks", "stats": [{ "stat": "pyro", "value": 16 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "pyro", "value": 15 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "pyro", "value": 14 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "pyro", "value": 13 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "pyro", "value": 12 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "pyro", "value": 11 }] },
            { "id": 10, "name": "0 Stacks", "stats": [{ "stat": "pyro", "value": 10 }] },
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "yoimiya" }, { "type": "character", "id": "yoimiya" }]
    },
    {
        "id": 413,
        "name": "Kamisato Art: Senho",
        "options": [
            { "id": 0, "name": "After Kamisato Art: Senho", "overwrite": "cryo", "priority": 0 }
        ],
        "requirement": { "type": "character", "id": "ayaka" }
    },
    {
        "id": 414,
        "name": "Ebb and Flow",
        "options": [
            { "id": 0, "name": "Damaged by Kamisato Art: Soumetsu", "stats": [{ "stat": "enemydef%", "value": -30 }]}
        ],
        "requirement": { "type": "party", "id": "ayaka" }
    },
    {
        "id": 415,
        "name": "Dance of Suigetsu",
        "options": [
            { "id": 0, "name": "Every 10s", "stats": [{ "stat": "charged", "value": 298 }] }
        ],
        "requirement": { "type": "character", "id": "ayaka" }
    },
    {
        "id": 416,
        "name": "Amatsumi Kunitsumi Sanctification",
        "options": [
            { "id": 0, "name": "After Kamisato Art: Hyouka", "stats": [{ "stat": "normal", "value": 30 }, { "stat": "charged", "value": 30 }] }
        ],
        "requirement": { "type": "character", "id": "ayaka" }
    },
    {
        "id": 417,
        "name": "Kanten Senmyou Blessing",
        "options": [
            { "id": 0, "name": "After Kamisato Art: Senho", "stats": [{ "stat": "cryo", "value": 18 }] }
        ],
        "requirement": { "type": "character", "id": "ayaka" }
    },
    {
        "id": 418,
        "name": "Shimenawa's Reminiscence",
        "options": [
            { "id": 0, "name": "4 Piece Bonus", "stats": [{ "stat": "normal", "value": 50 }, { "stat": "charged", "value": 50 }, { "stat": "plunge", "value": 50 }] }
        ],
        "requirement": { "type": "artifact_set", "id": 34, "count": 4 }
    },
    {
        "id": 419,
        "name": "Emblem of Severed Fate",
        "options": [
            { "id": 0, "name": "4 Piece Bonus", "priority": 0 , "transform": { "source": "recharge", "target": "burst", "ratio": 0.25, "max":75 } }
        ],
        "requirement": { "type": "artifact_set", "id": 35, "count": 4 }
    },
    {
        "id": 420,
        "name": "Mistsplitter's Edge - Refine 1",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "elemental", "value": 28 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 16 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 8 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 26, "refine": 0 }
    },
    {
        "id": 421,
        "name": "Mistsplitter's Edge - Refine 2",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "elemental", "value": 35 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 20 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 10 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 26, "refine": 1 }
    },
    {
        "id": 422,
        "name": "Mistsplitter's Edge - Refine 3",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "elemental", "value": 42 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 24 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 26, "refine": 2 }
    },
    {
        "id": 423,
        "name": "Mistsplitter's Edge - Refine 4",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "elemental", "value": 49 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 28 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 14 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 26, "refine": 3 }
    },
    {
        "id": 424,
        "name": "Mistsplitter's Edge - Refine 5",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "elemental", "value": 56 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 32 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 16 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 26, "refine": 4 }
    },
    {
        "id": 425,
        "name": "Rule by Thunder - Refine 1",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "normal", "value": 40 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 24 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 24, "refine": 0 }
    },
    {
        "id": 426,
        "name": "Rule by Thunder - Refine 2",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "normal", "value": 50 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 30 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 15 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 24, "refine": 1 }
    },
    {
        "id": 427,
        "name": "Rule by Thunder - Refine 3",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "normal", "value": 60 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 36 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 18 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 24, "refine": 2 }
    },
    {
        "id": 428,
        "name": "Rule by Thunder - Refine 4",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "normal", "value": 70 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 42 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 21 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 24, "refine": 3 }
    },
    {
        "id": 429,
        "name": "Rule by Thunder - Refine 5",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "normal", "value": 80 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "normal", "value": 48 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 24, "refine": 4 }
    },
    {
        "id": 430,
        "name": "Jade Shield",
        "options": [
            { "id": 0, "name": "Around Protected Characters", "stats": [{ "stat": "enemyelementalres", "value": -20 }, { "stat": "enemyphysicalres", "value": -20 }]  }
        ],
        "requirement": { "type": "party", "id": "zhongli" }
    },
   
    {
        "id": 432,
        "name": "Full Draw",
        "options": [
            { "id": 0, "name": "At Full Energy", "stats": [{ "stat": "normal", "value": 16 }, { "stat": "charged", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 25, "refine": 0 }
    },
    {
        "id": 433,
        "name": "Full Draw",
        "options": [
            { "id": 0, "name": "At Full Energy", "stats": [{ "stat": "normal", "value": 20 }, { "stat": "charged", "value": 15 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 25, "refine": 1 }
    },
    {
        "id": 434,
        "name": "Full Draw",
        "options": [
            { "id": 0, "name": "At Full Energy", "stats": [{ "stat": "normal", "value": 24 }, { "stat": "charged", "value": 18 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 25, "refine": 2 }
    },
    {
        "id": 435,
        "name": "Full Draw",
        "options": [
            { "id": 0, "name": "At Full Energy", "stats": [{ "stat": "normal", "value": 28 }, { "stat": "charged", "value": 21 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 25, "refine": 3 }
    },
    {
        "id": 436,
        "name": "Full Draw",
        "options": [
            { "id": 0, "name": "At Full Energy", "stats": [{ "stat": "normal", "value": 32 }, { "stat": "charged", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 25, "refine": 4 }
    },
   
    {
        "id": 438,
        "name": "Lightning Blade",
        "options": [
            { "id": 0, "name": "After picking Abundance Amulet", "stats": [{ "stat": "recharge", "value": 20 }] }
        ],
        "requirement": { "type": "party", "id": "traveler_electro" }
    },
    {
        "id": 439,
        "name": "Resounding Roar - Self",
        "options": [
            { "id": 0, "name": "Abundance Amulet", "priority": 0 , "transform": { "source": "recharge", "target": "recharge", "ratio": 0.1 } }
        ],
        "requirement": { "type": "character", "id": "traveler_electro" }
    },
    {
        "id": 440,
        "name": "Resounding Roar - Party",
        "options": [
            { "id": 0, "name": "Abundance Amulet", "priority": 0 , "transform": { "source": "traveler_electrorecharge", "target": "recharge", "ratio": 0.1 } }
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "traveler_electro" }, { "type": "character", "id": "traveler_electro" }]
    },
    {
        "id": 441,
        "name": "Violet Vehemence",
        "options": [
            { "id": 0, "name": "Hit by Falling Thunder", "stats": [{ "stat": "enemyelectrores", "value": -15 }] }
        ],
        "requirement": { "type": "party", "id": "traveler_electro" }
    },
    {
        "id": 442,
        "name": "Transcendence: Baleful Light",
        "options": [
            { "id": 0, "name": "Level 1", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.22 } },
            { "id": 1, "name": "Level 2", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.23 } },
            { "id": 2, "name": "Level 3", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.24 } },
            { "id": 3, "name": "Level 4", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.25 } },
            { "id": 4, "name": "Level 5", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.26 } },
            { "id": 5, "name": "Level 6", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.27 } },
            { "id": 6, "name": "Level 7", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.28 } },
            { "id": 7, "name": "Level 8", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.29 } },
            { "id": 8, "name": "Level 9", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.3 } },
            { "id": 9, "name": "Level 10", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.3 } },
            { "id": 10, "name": "Level 11", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.3 } },
            { "id": 11, "name": "Level 12", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.3 } },
            { "id": 12, "name": "Level 13", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.3 } },
            { "id": 13, "name": "Level 14", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.3 } },
            { "id": 14, "name": "Level 15", "priority": 0 , "transform": { "source": "burst_energy", "target": "burst", "ratio": 0.3 } },
        ],
        "requirement": { "type": "party", "id": "raiden" }
    },
    {
        "id": 443,
        "name": "Steelbreaker",
        "options": [
            { "id": 0, "name": "During Musou Isshin", "stats": [{ "stat": "burstdefignore", "value": 60 }] }
        ],
        "requirement": { "type": "character", "id": "raiden" }
    },
    {
        "id": 444,
        "name": "Pledge of Propriety",
        "options": [
            { "id": 0, "name": "After Musou Isshin", "stats": [{ "stat": "atk%", "value": 30 }] }
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "raiden" }, { "type": "character", "id": "raiden" }]
    },
    {
        "id": 445,
        "name": "Enlightened One",
        "options": [
            { "id": 0, "name": "Buff", "priority": 0 , "transform": { "source": "recharge_bonus", "target": "electro", "ratio": 0.4 } }
        ],
        "requirement": { "type": "character", "id": "raiden" }
    },
    {
        "id": 446,
        "name": "Timeless Dream: Attack - Refine 1",
        "options": [
            { "id": 0, "name": "Conversion", "priority": 1 , "transform": { "source": "recharge_bonus", "target": "atk%", "ratio": 0.28, "max": 80 } },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 22, "refine": 0 }
    },
    {
        "id": 447,
        "name": "Timeless Dream: Attack - Refine 2",
        "options": [
            { "id": 0, "name": "Conversion", "priority": 1 , "transform": { "source": "recharge_bonus", "target": "atk%", "ratio": 0.35, "max": 90 } },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 22, "refine": 1 }
    },
    {
        "id": 448,
        "name": "Timeless Dream: Attack - Refine 3",
        "options": [
            { "id": 0, "name": "Conversion", "priority": 1 , "transform": { "source": "recharge_bonus", "target": "atk%", "ratio": 0.42, "max": 100 } },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 22, "refine": 2 }
    },
    {
        "id": 449,
        "name": "Timeless Dream: Attack - Refine 4",
        "options": [
            { "id": 0, "name": "Conversion", "priority": 1 , "transform": { "source": "recharge_bonus", "target": "atk%", "ratio": 0.49, "max": 110 } },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 22, "refine": 3 }
    },
    {
        "id": 450,
        "name": "Timeless Dream: Attack - Refine 5",
        "options": [
            { "id": 0, "name": "Conversion", "priority": 1 , "transform": { "source": "recharge_bonus", "target": "atk%", "ratio": 0.59, "max": 120 } },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 22, "refine": 4 }
    },
    {
        "id": 451,
        "name": "Timeless Dream: Recharge - Refine 1",
        "options": [
            { "id": 0, "name": "After Burst", "stats": [{ "stat": "recharge", "value": 30 }]  },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 22, "refine": 0 }
    },
    {
        "id": 452,
        "name": "Timeless Dream: Recharge - Refine 2",
        "options": [
            { "id": 0, "name": "After Burst", "stats": [{ "stat": "recharge", "value": 35 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 22, "refine": 1 }
    },
    {
        "id": 453,
        "name": "Timeless Dream: Recharge - Refine 3",
        "options": [
            { "id": 0, "name": "After Burst", "stats": [{ "stat": "recharge", "value": 40 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 22, "refine": 2 }
    },
    {
        "id": 454,
        "name": "Timeless Dream: Recharge - Refine 4",
        "options": [
            { "id": 0, "name": "After Burst", "stats": [{ "stat": "recharge", "value": 45 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 22, "refine": 3 }
    },
    {
        "id": 455,
        "name": "Timeless Dream: Recharge - Refine 5",
        "options": [
            { "id": 0, "name": "After Burst", "stats": [{ "stat": "recharge", "value": 50 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 22, "refine": 4 }
    },
    {
        "id": 456,
        "name": "Sin of Pride",
        "options": [
            { "id": 0, "name": "Electro Characters with Tengu Juurai", "stats": [{ "stat": "critdmgelectro", "value": 60 }] }
        ],
        "requirement": { "type": "party", "id": "sara" }
    },
    {
        "id": 457,
        "name": "Tengu Stormcall - Self",
        "options": [
            { "id": 0, "name": "Level 1", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.4296 } },
            { "id": 1, "name": "Level 2", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.4618 } },
            { "id": 2, "name": "Level 3", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.494 } },
            { "id": 3, "name": "Level 4", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.537 } },
            { "id": 4, "name": "Level 5", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.5692 } },
            { "id": 5, "name": "Level 6", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.6014 } },
            { "id": 6, "name": "Level 7", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.6444 } },
            { "id": 7, "name": "Level 8", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.6874 } },
            { "id": 8, "name": "Level 9", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.7303 } },
            { "id": 9, "name": "Level 10", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.7733 } },
            { "id": 10, "name": "Level 11", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.8162 } },
            { "id": 11, "name": "Level 12", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.8592 } },
            { "id": 12, "name": "Level 13", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.9129 } },
            { "id": 13, "name": "Level 14", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 0.9666 } },
            { "id": 14, "name": "Level 15", "priority": 0, "transform": { "source": "atk_base", "target": "atk", "ratio": 1.0203 } },
        ],
        "requirement": { "type": "character", "id": "sara" }
    },
    {
        "id": 458,
        "name": "Tengu Stormcall - Party",
        "options": [
            { "id": 0, "name": "Level 1", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.4296 } },
            { "id": 1, "name": "Level 2", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.4618 } },
            { "id": 2, "name": "Level 3", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.494 } },
            { "id": 3, "name": "Level 4", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.537 } },
            { "id": 4, "name": "Level 5", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.5692 } },
            { "id": 5, "name": "Level 6", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.6014 } },
            { "id": 6, "name": "Level 7", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.6444 } },
            { "id": 7, "name": "Level 8", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.6874 } },
            { "id": 8, "name": "Level 9", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.7303 } },
            { "id": 9, "name": "Level 10", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.7733 } },
            { "id": 10, "name": "Level 11", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.8162 } },
            { "id": 11, "name": "Level 12", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.8592 } },
            { "id": 12, "name": "Level 13", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.9129 } },
            { "id": 13, "name": "Level 14", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 0.9666 } },
            { "id": 14, "name": "Level 15", "priority": 0, "transform": { "source": "saraatk", "target": "atk", "ratio": 1.0203 } },
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "sara" }, { "type": "character", "id": "sara" }]
    },
    {
        "id": 459,
        "name": "Boundless Blessing - Refine 1",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "elemental", "value": 32 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "elemental", "value": 24 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 16 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 8 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 7, "refine": 0 }
    },
    {
        "id": 460,
        "name": "Boundless Blessing - Refine 2",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "elemental", "value": 40 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "elemental", "value": 30 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 20 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 10 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 7, "refine": 1 }
    },
    {
        "id": 461,
        "name": "Boundless Blessing - Refine 3",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "elemental", "value": 48 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "elemental", "value": 36 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 24 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 12 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 7, "refine": 2 }
    },
    {
        "id": 462,
        "name": "Boundless Blessing - Refine 4",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "elemental", "value": 56 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "elemental", "value": 42 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 28 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 14 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 7, "refine": 3 }
    },
    {
        "id": 463,
        "name": "Boundless Blessing - Refine 5",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "elemental", "value": 64 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "elemental", "value": 48 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "elemental", "value": 32 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "elemental", "value": 16 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 7, "refine": 4 }
    },
    {
        "id": 464,
        "name": "Rushing Ice",
            "options": [
                { "id": 0, "name": "Level 1", "stats": [{ "stat": "normal", "value": 29.23 }], "overwrite": "cryo", "priority": 0 },
                { "id": 1, "name": "Level 2", "stats": [{ "stat": "normal", "value": 30.98 }], "overwrite": "cryo", "priority": 0 },
                { "id": 2, "name": "Level 3", "stats": [{ "stat": "normal", "value": 32.73 }], "overwrite": "cryo", "priority": 0 },
                { "id": 3, "name": "Level 4", "stats": [{ "stat": "normal", "value": 35 }], "overwrite": "cryo", "priority": 0 },
                { "id": 4, "name": "Level 5", "stats": [{ "stat": "normal", "value": 36.75 }], "overwrite": "cryo", "priority": 0 },
                { "id": 5, "name": "Level 6", "stats": [{ "stat": "normal", "value": 38.5 }], "overwrite": "cryo", "priority": 0 },
                { "id": 6, "name": "Level 7", "stats": [{ "stat": "normal", "value": 40.78 }], "overwrite": "cryo", "priority": 0 },
                { "id": 7, "name": "Level 8", "stats": [{ "stat": "normal", "value": 43.05 }], "overwrite": "cryo", "priority": 0 },
                { "id": 8, "name": "Level 9", "stats": [{ "stat": "normal", "value": 45.33 }], "overwrite": "cryo", "priority": 0 },
                { "id": 9, "name": "Level 10", "stats": [{ "stat": "normal", "value": 47.6 }], "overwrite": "cryo", "priority": 0 },
                { "id": 10, "name": "Level 11", "stats": [{ "stat": "normal", "value": 49.88 }], "overwrite": "cryo", "priority": 0 },
                { "id": 11, "name": "Level 12", "stats": [{ "stat": "normal", "value": 52.15 }], "overwrite": "cryo", "priority": 0 },
                { "id": 12, "name": "Level 13", "stats": [{ "stat": "normal", "value": 54.43 }], "overwrite": "cryo", "priority": 0 },
                { "id": 13, "name": "Level 14", "stats": [{ "stat": "normal", "value": 56.7 }], "overwrite": "cryo", "priority": 0 },
                { "id": 14, "name": "Level 15", "stats": [{ "stat": "normal", "value": 58.98 }], "overwrite": "cryo", "priority": 0 },
                
            ],
        "requirement": { "type": "character", "id": "aloy" }
    },
    {
        "id": 465,
        "name": "Combat Override - Self",
        "options": [
            { "id": 0, "name": "After Coil", "stats": [{ "stat": "atk%", "value": 16 }] }
        ],
        "requirement": { "type": "character", "id": "aloy" }
    },
    {
        "id": 466,
        "name": "Combat Override - Party",
        "options": [
            { "id": 0, "name": "After Coil", "stats": [{ "stat": "atk%", "value": 8 }] }
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "aloy" }, { "type": "character", "id": "aloy" }]
    },
    {
        "id": 467,
        "name": "Strong Strike",
        "options": [
            { "id": 0, "name": "Rushing Ice - 10 Stacks", "stats": [{ "stat": "cryo", "value": 35 }] },
            { "id": 1, "name": "Rushing Ice - 9 Stacks", "stats": [{ "stat": "cryo", "value": 31.5 }] },
            { "id": 2, "name": "Rushing Ice - 8 Stacks", "stats": [{ "stat": "cryo", "value": 28 }] },
            { "id": 3, "name": "Rushing Ice - 7 Stacks", "stats": [{ "stat": "cryo", "value": 24.5 }] },
            { "id": 4, "name": "Rushing Ice - 6 Stacks", "stats": [{ "stat": "cryo", "value": 21 }] },
            { "id": 5, "name": "Rushing Ice - 5 Stacks", "stats": [{ "stat": "cryo", "value": 17.5 }] },
            { "id": 6, "name": "Rushing Ice - 4 Stacks", "stats": [{ "stat": "cryo", "value": 14 }] },
            { "id": 7, "name": "Rushing Ice - 3 Stacks", "stats": [{ "stat": "cryo", "value": 10.5 }] },
            { "id": 8, "name": "Rushing Ice - 2 Stacks", "stats": [{ "stat": "cryo", "value": 7 }] },
            { "id": 9, "name": "Rushing Ice - 1 Stacks", "stats": [{ "stat": "cryo", "value": 3.5 }] }
        ],
        "requirement": { "type": "character", "id": "aloy" }
    },
    {
        "id": 468,
        "name": "The Moon Overlooks the Waters",
        "options": [
            { "id": 0, "name": "During Ceremonial Garment", "stats": [{ "stat": "aspeed", "value": 10 }] }
        ],
        "requirement": { "type": "character", "id": "kokomi" }
    },
    {
        "id": 469,
        "name": "Sango Isshin",
        "options": [
            { "id": 0, "name": "During Ceremonial Garment", "stats": [{ "stat": "hydro", "value": 40 }] }
        ],
        "requirement": { "type": "character", "id": "kokomi" }
    },
    {
        "id": 470,
        "name": "Strong Strike",
        "options": [
            { "id": 0, "name": "Dealing Cryo", "stats": [{ "stat": "normal", "value": 10 }, { "stat": "charged", "value": 10 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 26, "refine": -1 }
    },
    {
        "id": 471,
        "name": "Strong Strike - Aloy",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk", "value": 66 }] }
        ],
        "requirement_type": "and",
        "requirement": [{ "type": "weapon", "subtype": "bow", "id": 26, "refine": -1 }, { "type": "character", "id": "aloy" }]
    },
   
    {
        "id": 479,
        "name": "Daylight's Augury - Refine 1",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 48 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 30 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 20 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 10 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 27, "refine": 0 }
    },
    {
        "id": 480,
        "name": "Daylight's Augury - Refine 2",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 60 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 37.5 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 25 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 12.5 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 27, "refine": 1 }
    },
    {
        "id": 481,
        "name": "Daylight's Augury - Refine 3",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 72 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 45 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 30 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 15 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 27, "refine": 2 }
    },
    {
        "id": 482,
        "name": "Daylight's Augury - Refine 4",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 84 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 52.5 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 35 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 17.5 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 27, "refine": 3 }
    },
    {
        "id": 483,
        "name": "Daylight's Augury - Refine 5",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 96 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 60 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 40 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 20 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 27, "refine": 4 }
    },
    {
        "id": 484,
        "name": "Imbricated Armor",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "shield", "value": 25 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "shield", "value": 20 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "shield", "value": 15 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "shield", "value": 10 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "shield", "value": 5 }] },
        ],
        "requirement": { "type": "party", "id": "thoma" }
    },
    {
        "id": 485,
        "name": "Burning Heart",
        "options": [
            { "id": 0, "name": "Blazing Barrier trigger", "stats": [{ "stat": "normal", "value": 15 }, { "stat": "charged", "value": 15 }, { "stat": "plunge", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "thoma" }
    },
    {
        "id": 486,
        "name": "Royal Descent: Behold, Itto the Evil!",
        "options": [
            { "id": 0, "name": "Level 1", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 0.576 }, "overwrite": "geo"},
            { "id": 1, "name": "Level 2", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 0.6192 }, "overwrite": "geo" },
            { "id": 2, "name": "Level 3", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 0.6624 }, "overwrite": "geo" },
            { "id": 3, "name": "Level 4", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 0.72 }, "overwrite": "geo" },
            { "id": 4, "name": "Level 5", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 0.7632 }, "overwrite": "geo" },
            { "id": 5, "name": "Level 6", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 0.8064 }, "overwrite": "geo" },
            { "id": 6, "name": "Level 7", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 0.864 }, "overwrite": "geo" },
            { "id": 7, "name": "Level 8", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 0.9216 }, "overwrite": "geo" },
            { "id": 8, "name": "Level 9", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 0.9792 }, "overwrite": "geo" },
            { "id": 9, "name": "Level 10", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 1.0368 }, "overwrite": "geo" },
            { "id": 10, "name": "Level 11", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 1.0944 }, "overwrite": "geo" },
            { "id": 11, "name": "Level 12", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 1.152 }, "overwrite": "geo" },
            { "id": 12, "name": "Level 13", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 1.224 }, "overwrite": "geo" },
            { "id": 13, "name": "Level 14", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 1.296 }, "overwrite": "geo" },
            { "id": 14, "name": "Level 15", "priority": 0, "stats": [{ "stat": "aspeed", "value": 10 }], "transform": { "source": "def", "target": "atk", "ratio": 1.368 }, "overwrite": "geo" },
        ],

        "requirement": { "type": "character", "id": "itto" },
    },
    {
        "id": 487,
        "name": "Jailhouse Bread and Butter",
        "options": [
            { "id": 0, "name": "After Royal Descent: Behold, Itto the Evil!", "stats": [{ "stat": "atk%", "value": 20 }, { "stat": "def%", "value": 20 }] }
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "itto" }, { "type": "character", "id": "itto" }]
    },
    {
        "id": 488,
        "name": "Arataki Ichiban",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "aspeed", "value": 30 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "aspeed", "value": 20 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "aspeed", "value": 10 }] },
        ],
        "requirement": { "type": "character", "id": "itto" }
    },
    {
        "id": 489,
        "name": "Jailhouse Bread and Butter",
        "options": [
            { "id": 0, "name": "During General's Glory", "stats": [{ "stat": "def%", "value": 25 }] }
        ],
        "requirement": { "type": "party", "id": "gorou" }
    },
    {
        "id": 490,
        "name": "General's War Banner - Standing Firm",
        "options": [
            { "id": 0, "name": "Level 1", "stats": [{ "stat": "def", "value": 206 }] },
            { "id": 1, "name": "Level 2", "stats": [{ "stat": "def", "value": 222 }] },
            { "id": 2, "name": "Level 3", "stats": [{ "stat": "def", "value": 237 }] },
            { "id": 3, "name": "Level 4", "stats": [{ "stat": "def", "value": 258 }] },
            { "id": 4, "name": "Level 5", "stats": [{ "stat": "def", "value": 273 }] },
            { "id": 5, "name": "Level 6", "stats": [{ "stat": "def", "value": 289 }] },
            { "id": 6, "name": "Level 7", "stats": [{ "stat": "def", "value": 309 }] },
            { "id": 7, "name": "Level 8", "stats": [{ "stat": "def", "value": 330 }] },
            { "id": 8, "name": "Level 9", "stats": [{ "stat": "def", "value": 350 }] },
            { "id": 9, "name": "Level 10", "stats": [{ "stat": "def", "value": 371 }] },
            { "id": 10, "name": "Level 11", "stats": [{ "stat": "def", "value": 392 }] },
            { "id": 11, "name": "Level 12", "stats": [{ "stat": "def", "value": 412 }] },
            { "id": 12, "name": "Level 13", "stats": [{ "stat": "def", "value": 438 }] },
            { "id": 13, "name": "Level 14", "stats": [{ "stat": "def", "value": 464 }] },
            { "id": 14, "name": "Level 15", "stats": [{ "stat": "def", "value": 490 }] },
        ],
        "requirement": { "type": "party", "id": "gorou" }
    },
    {
        "id": 491,
        "name": "General's War Banner - Shatter",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "geo", "value": 15 }] }
        ],
        "requirement_type": "and",
        "requirement": [{ "type": "party", "id": "gorou" }, { "type": "resonance", "id": "geo", "count": 3 }]
    },
    {
        "id": 492,
        "name": "Valiant Hound: Mountainous Fealty",
        "options": [
            { "id": 0, "name": "Standing Firm", "stats": [{ "stat": "critdmg", "value": 10 }] },
            { "id": 1, "name": "Impregnable", "stats": [{ "stat": "critdmg", "value": 20 }] },
            { "id": 2, "name": "Shatter", "stats": [{ "stat": "critdmg", "value": 40 }] },
        ],
        "requirement": { "type": "party", "id": "gorou" }
    },
    {
        "id": 493,
        "name": "Husk of Opulent Dreams",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "geo", "value": 24 }, { "stat": "def%", "value": 24 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "geo", "value": 18 }, { "stat": "def%", "value": 18 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "geo", "value": 12 }, { "stat": "def%", "value": 12 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "geo", "value": 6 }, { "stat": "def%", "value": 6 }] },
        ],
        "requirement": { "type": "artifact_set", "id": 36, "count": 4 }
    },
    {
        "id": 494,
        "name": "Watatsumi Wavewalker - Refine 1",
        "options": [
            { "id": 0, "name": "Permanent", "priority": 0,"transform": { "source": "burst_energy_party", "target": "burst", "ratio": 0.12, "max": 40 } },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "claymore", "id": 29, "refine": 0 }, { "type": "weapon", "subtype": "polearm", "id": 23, "refine": 0 }, { "type": "weapon", "subtype": "bow", "id": 28, "refine": 0 }]
    },
    {
        "id": 495,
        "name": "Watatsumi Wavewalker - Refine 2",
        "options": [
            { "id": 0, "name": "Permanent", "priority": 0,"transform": { "source": "burst_energy_party", "target": "burst", "ratio": 0.15, "max": 50 } },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "claymore", "id": 29, "refine": 1 }, { "type": "weapon", "subtype": "polearm", "id": 23, "refine": 1 }, { "type": "weapon", "subtype": "bow", "id": 28, "refine": 1 }]
    },
    {
        "id": 496,
        "name": "Watatsumi Wavewalker - Refine 3",
        "options": [
            { "id": 0, "name": "Permanent", "priority": 0,"transform": { "source": "burst_energy_party", "target": "burst", "ratio": 0.18, "max": 60 } },
        ],
        "requirement_type":"or",
        "requirement": [{ "type": "weapon", "subtype": "claymore", "id": 29, "refine": 2 }, { "type": "weapon", "subtype": "polearm", "id": 23, "refine": 2 }, { "type": "weapon", "subtype": "bow", "id": 28, "refine": 2 }]
    },
    {
        "id": 497,
        "name": "Watatsumi Wavewalker - Refine 4",
        "options": [
            { "id": 0, "name": "Permanent", "priority": 0, "transform": { "source": "burst_energy_party", "target": "burst", "ratio": 0.21, "max": 70 } },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "claymore", "id": 29, "refine": 3 }, { "type": "weapon", "subtype": "polearm", "id": 23, "refine": 3 }, { "type": "weapon", "subtype": "bow", "id": 28, "refine":3 }]
    },
    {
        "id": 498,
        "name": "Watatsumi Wavewalker - Refine 5",
        "options": [
            { "id": 0, "name": "Permanent", "priority": 0,"transform": { "source": "burst_energy_party", "target": "burst", "ratio": 0.24, "max": 80 } },
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "claymore", "id": 29, "refine": 4 }, { "type": "weapon", "subtype": "polearm", "id": 23, "refine": 4 }, { "type": "weapon", "subtype": "bow", "id": 28, "refine": 4 }]
    },
    {
        "id": 499,
        "name": "Opening of Phanerozoic",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "bonusburstdef", "value": 120 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "bonusburstdef", "value": 90 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "bonusburstdef", "value": 60 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "bonusburstdef", "value": 30 }] }
        ],
        "requirement": { "type": "character", "id": "albedo" }
    },
    {
        "id": 500,
        "name": "Spring Spirit Summoning",
        "options": [
            { "id": 0, "name": "Level 1", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 45.66 }] },
            { "id": 1, "name": "Level 2", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 49.08 }] },
            { "id": 2, "name": "Level 3", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 52.5 }] },
            { "id": 3, "name": "Level 4", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 57.07 }] },
            { "id": 4, "name": "Level 5", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 60.49 }] },
            { "id": 5, "name": "Level 6", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 63.92 }] },
            { "id": 6, "name": "Level 7", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 68.48 }] },
            { "id": 7, "name": "Level 8", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 73.05 }] },
            { "id": 8, "name": "Level 9", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 77.62 }] },
            { "id": 9, "name": "Level 10", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 82.18 }] },
            { "id": 10, "name": "Level 11", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 86.75 }] },
            { "id": 11, "name": "Level 12", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 91.31 }] },
            { "id": 12, "name": "Level 13", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 97.02 }] },
            { "id": 13, "name": "Level 14", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 102.73 }] },
            { "id": 14, "name": "Level 15", "stats": [{ "stat": "bonuscryoallshenheatk", "value": 108.43 }] },
        ],
        "requirement": { "type": "party", "id": "shenhe" }
    },
    {
        "id": 501,
        "name": "Divine Maiden's Deliverance",
        "options": [
            { "id": 0, "name": "Level 1", "stats": [{ "stat": "enemycryores", "value": -6 }, { "stat": "enemyphysicalres", "value": -6 }] },
            { "id": 1, "name": "Level 2", "stats": [{ "stat": "enemycryores", "value": -7 }, { "stat": "enemyphysicalres", "value": -7 }] },
            { "id": 2, "name": "Level 3", "stats": [{ "stat": "enemycryores", "value": -8 }, { "stat": "enemyphysicalres", "value": -8 }] },
            { "id": 3, "name": "Level 4", "stats": [{ "stat": "enemycryores", "value": -9 }, { "stat": "enemyphysicalres", "value": -9 }] },
            { "id": 4, "name": "Level 5", "stats": [{ "stat": "enemycryores", "value": -10 }, { "stat": "enemyphysicalres", "value": -10 }] },
            { "id": 5, "name": "Level 6", "stats": [{ "stat": "enemycryores", "value": -11 }, { "stat": "enemyphysicalres", "value": -11 }] },
            { "id": 6, "name": "Level 7", "stats": [{ "stat": "enemycryores", "value": -12 }, { "stat": "enemyphysicalres", "value": -12 }] },
            { "id": 7, "name": "Level 8", "stats": [{ "stat": "enemycryores", "value": -13 }, { "stat": "enemyphysicalres", "value": -13 }] },
            { "id": 8, "name": "Level 9", "stats": [{ "stat": "enemycryores", "value": -14 }, { "stat": "enemyphysicalres", "value": -14 }] },
            { "id": 9, "name": "Level 10", "stats": [{ "stat": "enemycryores", "value": -15 }, { "stat": "enemyphysicalres", "value": -15 }] },
            { "id": 10, "name": "Level 11", "stats": [{ "stat": "enemycryores", "value": -15 }, { "stat": "enemyphysicalres", "value": -15 }] },
            { "id": 11, "name": "Level 12", "stats": [{ "stat": "enemycryores", "value": -15 }, { "stat": "enemyphysicalres", "value": -15 }] },
            { "id": 12, "name": "Level 13", "stats": [{ "stat": "enemycryores", "value": -15 }, { "stat": "enemyphysicalres", "value": -15 }] },
            { "id": 13, "name": "Level 14", "stats": [{ "stat": "enemycryores", "value": -15 }, { "stat": "enemyphysicalres", "value": -15 }] },
            { "id": 14, "name": "Level 15", "stats": [{ "stat": "enemycryores", "value": -15 }, { "stat": "enemyphysicalres", "value": -15 }] },
        ],
        "requirement": { "type": "party", "id": "shenhe" }
    },
    {
        "id": 502,
        "name": "Centered Spirit",
        "options": [
            { "id": 0, "name": "Inside Divine Maiden's Deliverance", "stats": [{ "stat": "critdmgcryo", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "shenhe" }
    },
    {
        "id": 503,
        "name": "Deific Embrace",
        "options": [
            { "id": 0, "name": "Inside Divine Maiden's Deliverance", "stats": [{ "stat": "cryo", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "shenhe" }
    },
    {
        "id": 504,
        "name": "Spirit Communion Seal",
        "options": [
            { "id": 0, "name": "Press", "stats": [{ "stat": "skill", "value": 15 }, { "stat": "burst", "value": 15 }] },
            { "id": 1, "name": "Hold", "stats": [{ "stat": "normal", "value": 15 }, { "stat": "charged", "value": 15 }, { "stat": "plunge", "value": 15 }] },
            { "id": 2, "name": "Both", "stats": [{ "stat": "normal", "value": 15 }, { "stat": "charged", "value": 15 }, { "stat": "plunge", "value": 15 }, { "stat": "skill", "value": 15 }, { "stat": "burst", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "shenhe" }
    },
    {
        "id": 505,
        "name": "Cliffbreaker's Banner",
        "options": [
            { "id": 0, "name": "Level 1", "stats": [{ "stat": "bonusnormalyunjindef", "value": 32.16 }] },
            { "id": 1, "name": "Level 2", "stats": [{ "stat": "bonusnormalyunjindef", "value": 34.57 }] },
            { "id": 2, "name": "Level 3", "stats": [{ "stat": "bonusnormalyunjindef", "value": 36.98 }] },
            { "id": 3, "name": "Level 4", "stats": [{ "stat": "bonusnormalyunjindef", "value": 40.2 }] },
            { "id": 4, "name": "Level 5", "stats": [{ "stat": "bonusnormalyunjindef", "value": 42.61 }] },
            { "id": 5, "name": "Level 6", "stats": [{ "stat": "bonusnormalyunjindef", "value": 45.02 }] },
            { "id": 6, "name": "Level 7", "stats": [{ "stat": "bonusnormalyunjindef", "value": 48.24 }] },
            { "id": 7, "name": "Level 8", "stats": [{ "stat": "bonusnormalyunjindef", "value": 51.46 }] },
            { "id": 8, "name": "Level 9", "stats": [{ "stat": "bonusnormalyunjindef", "value": 54.67 }] },
            { "id": 9, "name": "Level 10", "stats": [{ "stat": "bonusnormalyunjindef", "value": 57.89 }] },
            { "id": 10, "name": "Level 11", "stats": [{ "stat": "bonusnormalyunjindef", "value": 61.1 }] },
            { "id": 11, "name": "Level 12", "stats": [{ "stat": "bonusnormalyunjindef", "value": 64.32 }] },
            { "id": 12, "name": "Level 13", "stats": [{ "stat": "bonusnormalyunjindef", "value": 68.34 }] },
            { "id": 13, "name": "Level 14", "stats": [{ "stat": "bonusnormalyunjindef", "value": 72.36 }] },
            { "id": 14, "name": "Level 15", "stats": [{ "stat": "bonusnormalyunjindef", "value": 76.38 }] },
        ],
        "requirement": { "type": "party", "id": "yunjin" }
    },
    {
        "id": 506,
        "name": "Myriad Mise-En-Scène",
        "options": [
            { "id": 0, "name": "After Cliffbreaker's Banner", "stats": [{ "stat": "normal", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "yunjin" }
    },
    {
        "id": 507,
        "name": "Flower and a Fighter",
        "options": [
            { "id": 0, "name": "After Crystallize", "stats": [{ "stat": "def%", "value": 20 }] }
        ],
        "requirement": { "type": "character", "id": "yunjin" }
    },
    {
        "id": 508,
        "name": "Decorous Harmony",
        "options": [
            { "id": 0, "name": "After Cliffbreaker's Banner", "stats": [{ "stat": "aspeed", "value": 12 }] }
        ],
        "requirement": { "type": "party", "id": "yunjin" }
    },
    {
        "id": 509,
        "name": "Breaking Conventions",
        "options": [
            { "id": 0, "name": "4 Elemental Types", "stats": [{ "stat": "bonusnormalyunjindef", "value": 11.5 }] },
            { "id": 1, "name": "3 Elemental Types", "stats": [{ "stat": "bonusnormalyunjindef", "value": 7.5 }] },
            { "id": 2, "name": "2 Elemental Types", "stats": [{ "stat": "bonusnormalyunjindef", "value": 5 }] },
            { "id": 3, "name": "1 Elemental Type", "stats": [{ "stat": "bonusnormalyunjindef", "value": 2.5 }] },
        ],
        "requirement": { "type": "party", "id": "yunjin" }
    },
    {
        "id": 510,
        "name": "Extinguishing Precept - Refine 1",
        "options": [
            { "id": 0, "name": "6 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 38.4 }] },
            { "id": 1, "name": "5 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 32 }] },
            { "id": 2, "name": "4 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 25.6 }] },
            { "id": 3, "name": "3 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 19.2 }] },
            { "id": 4, "name": "2 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 12.8 }] },
            { "id": 5, "name": "1 Stack - Off Field", "stats": [{ "stat": "atk%", "value": 6.4 }] },
            { "id": 6, "name": "6 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 19.2 }] },
            { "id": 7, "name": "5 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 16 }] },
            { "id": 8, "name": "4 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 12.8 }] },
            { "id": 9, "name": "3 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 9.6 }] },
            { "id": 10, "name": "2 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 6.4 }] },
            { "id": 11, "name": "1 Stack - On Field", "stats": [{ "stat": "atk%", "value": 3.2 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 24, "refine": 0 }
    },
    {
        "id": 511,
        "name": "Extinguishing Precept - Refine 2",
        "options": [
            { "id": 0, "name": "6 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 48 }] },
            { "id": 1, "name": "5 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 40 }] },
            { "id": 2, "name": "4 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 32 }] },
            { "id": 3, "name": "3 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 24 }] },
            { "id": 4, "name": "2 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 16 }] },
            { "id": 5, "name": "1 Stack - Off Field", "stats": [{ "stat": "atk%", "value": 8 }] },
            { "id": 6, "name": "6 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 24 }] },
            { "id": 7, "name": "5 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 20 }] },
            { "id": 8, "name": "4 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 16 }] },
            { "id": 9, "name": "3 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 12 }] },
            { "id": 10, "name": "2 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 8 }] },
            { "id": 11, "name": "1 Stack - On Field", "stats": [{ "stat": "atk%", "value": 4 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 24, "refine": 1 }
    },
    {
        "id": 512,
        "name": "Extinguishing Precept - Refine 3",
        "options": [
            { "id": 0, "name": "6 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 57.6 }] },
            { "id": 1, "name": "5 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 48 }] },
            { "id": 2, "name": "4 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 38.4 }] },
            { "id": 3, "name": "3 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 28.8 }] },
            { "id": 4, "name": "2 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 19.2 }] },
            { "id": 5, "name": "1 Stack - Off Field", "stats": [{ "stat": "atk%", "value": 9.6 }] },
            { "id": 6, "name": "6 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 28.8 }] },
            { "id": 7, "name": "5 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 24 }] },
            { "id": 8, "name": "4 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 19.2 }] },
            { "id": 9, "name": "3 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 14.4 }] },
            { "id": 10, "name": "2 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 9.6 }] },
            { "id": 11, "name": "1 Stack - On Field", "stats": [{ "stat": "atk%", "value": 4.8 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 24, "refine": 2 }
    },
    {
        "id": 513,
        "name": "Extinguishing Precept - Refine 4",
        "options": [
            { "id": 0, "name": "6 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 67.2 }] },
            { "id": 1, "name": "5 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 56 }] },
            { "id": 2, "name": "4 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 44.8 }] },
            { "id": 3, "name": "3 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 33.6 }] },
            { "id": 4, "name": "2 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 22.4 }] },
            { "id": 5, "name": "1 Stack - Off Field", "stats": [{ "stat": "atk%", "value": 11.2 }] },
            { "id": 6, "name": "6 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 33.6 }] },
            { "id": 7, "name": "5 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 28 }] },
            { "id": 8, "name": "4 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 22.4 }] },
            { "id": 9, "name": "3 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 16.8 }] },
            { "id": 10, "name": "2 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 11.2 }] },
            { "id": 11, "name": "1 Stack - On Field", "stats": [{ "stat": "atk%", "value": 5.6 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 24, "refine": 3 }
    },
    {
        "id": 514,
        "name": "Extinguishing Precept - Refine 5",
        "options": [
            { "id": 0, "name": "6 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 76.8 }] },
            { "id": 1, "name": "5 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 64 }] },
            { "id": 2, "name": "4 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 51.2 }] },
            { "id": 3, "name": "3 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 38.4 }] },
            { "id": 4, "name": "2 Stacks - Off Field", "stats": [{ "stat": "atk%", "value": 25.6 }] },
            { "id": 5, "name": "1 Stack - Off Field", "stats": [{ "stat": "atk%", "value": 12.8 }] },
            { "id": 6, "name": "6 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 38.4 }] },
            { "id": 7, "name": "5 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 32 }] },
            { "id": 8, "name": "4 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 25.6 }] },
            { "id": 9, "name": "3 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 19.2 }] },
            { "id": 10, "name": "2 Stacks - On Field", "stats": [{ "stat": "atk%", "value": 12.8 }] },
            { "id": 11, "name": "1 Stack - On Field", "stats": [{ "stat": "atk%", "value": 6.4 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 24, "refine": 4 }
    },
    {
        "id": 515,
        "name": "Sakura Channeling",
        "options": [
            { "id": 0, "name": "Sesshou Sakura hit", "stats": [{ "stat": "electro", "value": 20 }] }
        ],
        "requirement": { "type": "party", "id": "yaemiko" }
    },
    {
        "id": 516,
        "name": "Enlightened Blessing",
        "options": [
            { "id": 0, "name": "Permanent", "priority": 0, "transform": { "source": "elemastery", "target": "skill", "ratio": 0.15 } }
        ],
        "requirement": { "type": "character", "id": "yaemiko" }
    },
    {
        "id": 517,
        "name": "Kagura Dance - Refine 1",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "skill", "value": 36 }, { "stat": "elemental", "value": 12 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "skill", "value": 24 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "skill", "value": 12 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 26, "refine": 0 }
    },
    {
        "id": 518,
        "name": "Kagura Dance - Refine 2",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "skill", "value": 45 }, { "stat": "elemental", "value": 15 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "skill", "value": 30 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "skill", "value": 15 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 26, "refine": 1 }
    },
    {
        "id": 519,
        "name": "Kagura Dance - Refine 3",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "skill", "value": 54 }, { "stat": "elemental", "value": 18 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "skill", "value": 36 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "skill", "value": 18 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 26, "refine": 2 }
    },
    {
        "id": 520,
        "name": "Kagura Dance - Refine 4",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "skill", "value": 63 }, { "stat": "elemental", "value": 21 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "skill", "value": 42 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "skill", "value": 21 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 26, "refine": 3 }
    },
    {
        "id": 521,
        "name": "Kagura Dance - Refine 5",
        "options": [
            { "id": 0, "name": "3 Stacks", "stats": [{ "stat": "skill", "value": 72 }, { "stat": "elemental", "value": 24 }] },
            { "id": 1, "name": "2 Stacks", "stats": [{ "stat": "skill", "value": 48 }] },
            { "id": 2, "name": "1 Stack", "stats": [{ "stat": "skill", "value": 24 }] },
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 26, "refine": 4 }
    },
    {
        "id": 522,
        "name": "Forbidden Art: Daisesshou",
        "options": [
            { "id": 0, "name": "Permanent", "stats": [{ "stat": "skilldefignore", "value": 60 }] }
        ],
        "requirement": { "type": "character", "id": "yaemiko" }
    },
    {
        "id": 523,
        "name": "Kamisato Art: Suiyuu",
        "options": [
            { "id": 0, "name": "Level 1", "stats": [{ "stat": "normal", "value": 11 }] },
            { "id": 1, "name": "Level 2", "stats": [{ "stat": "normal", "value": 12 }] },
            { "id": 2, "name": "Level 3", "stats": [{ "stat": "normal", "value": 13 }] },
            { "id": 3, "name": "Level 4", "stats": [{ "stat": "normal", "value": 14 }] },
            { "id": 4, "name": "Level 5", "stats": [{ "stat": "normal", "value": 15 }] },
            { "id": 5, "name": "Level 6", "stats": [{ "stat": "normal", "value": 16 }] },
            { "id": 6, "name": "Level 7", "stats": [{ "stat": "normal", "value": 17 }] },
            { "id": 7, "name": "Level 8", "stats": [{ "stat": "normal", "value": 18 }] },
            { "id": 8, "name": "Level 9", "stats": [{ "stat": "normal", "value": 19 }] },
            { "id": 9, "name": "Level 10", "stats": [{ "stat": "normal", "value": 20 }] },
            { "id": 10, "name": "Level 11", "stats": [{ "stat": "normal", "value": 20 }] },
            { "id": 11, "name": "Level 12", "stats": [{ "stat": "normal", "value": 20 }] },
            { "id": 12, "name": "Level 13", "stats": [{ "stat": "normal", "value": 20 }] },
            { "id": 13, "name": "Level 14", "stats": [{ "stat": "normal", "value": 20 }] },
            { "id": 14, "name": "Level 15", "stats": [{ "stat": "normal", "value": 20 }] },
        ],
        "requirement": { "type": "party", "id": "ayato" }
    },
    {
        "id": 524,
        "name": "Endless Flow",
        "options": [
            { "id": 0, "name": "After using Kamisato Art: Suiyuu", "stats": [{ "stat": "aspeed", "value": 20 }] }
        ],
        "requirement": { "type": "party", "id": "ayato" }
    },
    {
        "id": 525,
        "name": "World Source",
        "options": [
            { "id": 0, "name": ">2 Wave Flash stacks", "stats": [{ "stat": "hp%", "value": 40 }] }
        ],
        "requirement": { "type": "character", "id": "ayato" }
    },
    {
        "id": 526,
        "name": "People of the Faltering Light - Refine 1",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "stats": [{ "stat": "recharge", "value": 24 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 27, "refine": 0 }
    },
    {
        "id": 527,
        "name": "People of the Faltering Light - Refine 2",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "stats": [{ "stat": "recharge", "value": 30 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 27, "refine": 1 }
    },
    {
        "id": 528,
        "name": "People of the Faltering Light - Refine 3",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "stats": [{ "stat": "recharge", "value": 36 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 27, "refine": 2 }
    },
    {
        "id": 529,
        "name": "People of the Faltering Light - Refine 4",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "stats": [{ "stat": "recharge", "value": 42 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 27, "refine": 3 }
    },
    {
        "id": 530,
        "name": "People of the Faltering Light - Refine 5",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "stats": [{ "stat": "recharge", "value": 48 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 27, "refine": 4 }
    },
    {
        "id": 531,
        "name": "Honed Flow - Refine 1",
        "options": [
            { "id": 0, "name": "2 Stack", "stats": [{ "stat": "normal", "value": 40 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 20 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 29, "refine": 0 }
    },
    {
        "id": 532,
        "name": "Honed Flow - Refine 2",
        "options": [
            { "id": 0, "name": "2 Stack", "stats": [{ "stat": "normal", "value": 50 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 25 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 29, "refine": 1 }
    },
    {
        "id": 533,
        "name": "Honed Flow - Refine 3",
        "options": [
            { "id": 0, "name": "2 Stack", "stats": [{ "stat": "normal", "value": 60 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 30 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 29, "refine": 2 }
    },
    {
        "id": 534,
        "name": "Honed Flow - Refine 4",
        "options": [
            { "id": 0, "name": "2 Stack", "stats": [{ "stat": "normal", "value": 70 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 35 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 29, "refine": 3 }
    },
    {
        "id": 535,
        "name": "Honed Flow - Refine 5",
        "options": [
            { "id": 0, "name": "2 Stack", "stats": [{ "stat": "normal", "value": 80 }] },
            { "id": 1, "name": "1 Stack", "stats": [{ "stat": "normal", "value": 40 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 29, "refine": 4 }
    },
    {
        "id": 536,
        "name": "Vermillion Hereafter",
        "options": [
            { "id": 0, "name": "4 Stacks", "stats": [{ "stat": "atk%", "value": 48 }] },
            { "id": 1, "name": "3 Stacks", "stats": [{ "stat": "atk%", "value": 38 }] },
            { "id": 2, "name": "2 Stacks", "stats": [{ "stat": "atk%", "value": 28 }] },
            { "id": 3, "name": "1 Stack", "stats": [{ "stat": "atk%", "value": 18 }] },
            { "id": 4, "name": "0 Stacks", "stats": [{ "stat": "atk%", "value": 8 }] },
        ],
        "requirement": { "type": "artifact_set", "id": 38, "count": 4 }
    },
    {
        "id": 537,
        "name": "Echoes of an Offering",
        "options": [
            { "id": 0, "name": "Hit", "stats": [{ "stat": "bonusnormalatk", "value": 60 }] },
            {
                "id": 1, "name": "Average (50.2% chance)", "stats": [{"stat": "bonusnormalatk", "value": 30.12218522 }] }
        ],
        "requirement": { "type": "artifact_set", "id": 39, "count": 4 }
    },
   
    {
        "id": 541,
        "name": "Turn Control",
        "options": [
            { "id": 0, "name": "4 Elemental Types", "stats": [{ "stat": "hp%", "value": 30 }] },
            { "id": 1, "name": "3 Elemental Types", "stats": [{ "stat": "hp%", "value": 18 }] },
            { "id": 2, "name": "2 Elemental Types", "stats": [{ "stat": "hp%", "value": 12 }] },
            { "id": 3, "name": "1 Elemental Type", "stats": [{ "stat": "hp%", "value": 6 }] },
        ],
        "requirement": { "type": "character", "id": "yelan" }
    },
    {
        "id": 542,
        "name": "Adapt With Ease",
        "options": [
            { "id": 0, "name": "Average", "stats": [{ "stat": "all", "value": 25.5 }] },
            { "id": 1, "name": "15 Stacks", "stats": [{ "stat": "all", "value": 50 }] },
            { "id": 2, "name": "14 Stacks", "stats": [{ "stat": "all", "value": 46.5 }] },
            { "id": 3, "name": "13 Stacks", "stats": [{ "stat": "all", "value": 43 }] },
            { "id": 4, "name": "12 Stacks", "stats": [{ "stat": "all", "value": 39.5 }] },
            { "id": 5, "name": "11 Stacks", "stats": [{ "stat": "all", "value": 36 }] },
            { "id": 6, "name": "10 Stacks", "stats": [{ "stat": "all", "value": 32.5 }] },
            { "id": 7, "name": "9 Stacks", "stats": [{ "stat": "all", "value": 29 }] },
            { "id": 8, "name": "8 Stacks", "stats": [{ "stat": "all", "value": 25.5 }] },
            { "id": 9, "name": "7 Stacks", "stats": [{ "stat": "all", "value": 22 }] },
            { "id": 10, "name": "6 Stacks", "stats": [{ "stat": "all", "value": 18.5 }] },
            { "id": 11, "name": "5 Stacks", "stats": [{ "stat": "all", "value": 15 }] },
            { "id": 12, "name": "4 Stacks", "stats": [{ "stat": "all", "value": 11.5 }] },
            { "id": 13, "name": "3 Stacks", "stats": [{ "stat": "all", "value": 8 }] },
            { "id": 14, "name": "2 Stacks", "stats": [{ "stat": "all", "value": 4.5 }] },
            { "id": 15, "name": "1 Stacks", "stats": [{ "stat": "all", "value": 1 }] }
        ],
        "requirement": { "type": "party", "id": "yelan" }
    },
    {
        "id": 543,
        "name": "Breaking Free",
        "options": [
            { "id": 0, "name": "HP < 50%", "stats": [{ "stat": "healing", "value": 15 }] }
        ],
        "requirement": { "type": "character", "id": "shinobu" }
    },
    {
        "id": 544,
        "name": "To Ward Weakness",
        "options": [
            { "id": 0, "name": "After lethal strike", "stats": [{ "stat": "elemastery", "value": 150 }] }
        ],
        "requirement": { "type": "character", "id": "shinobu" }
    },
    {
        "id": 545,
        "name": "Aqua Simulacra - Refine 1",
        "options": [
            { "id": 0, "name": "Near opponents", "stats": [{ "stat": "all", "value": 20 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 29, "refine": 0 }
    },
    {
        "id": 546,
        "name": "Aqua Simulacra - Refine 2",
        "options": [
            { "id": 0, "name": "Near opponents", "stats": [{ "stat": "all", "value": 25 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 29, "refine": 1 }
    },
    {
        "id": 547,
        "name": "Aqua Simulacra - Refine 3",
        "options": [
            { "id": 0, "name": "Near opponents", "stats": [{ "stat": "all", "value": 30 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 29, "refine": 2 }
    },
    {
        "id": 548,
        "name": "Aqua Simulacra - Refine 4",
        "options": [
            { "id": 0, "name": "Near opponents", "stats": [{ "stat": "all", "value": 35 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 29, "refine": 3 }
    },
    {
        "id": 549,
        "name": "Aqua Simulacra - Refine 5",
        "options": [
            { "id": 0, "name": "Near opponents", "stats": [{ "stat": "all", "value": 40 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 29, "refine": 4 }
    },
    {
        "id": 550,
        "name": "Buried Arrow - Refine 1",
        "options": [
            { "id": 0, "name": "1st Buff", "stats": [{ "stat": "all", "value": 6 }] },
            { "id": 1, "name": "2nd Buff", "stats": [{ "stat": "all", "value": 10 }] },
            { "id": 2, "name": "3rd Buff", "stats": [{ "stat": "all", "value": 14 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 30, "refine": 0 }
    },
    {
        "id": 551,
        "name": "Buried Arrow - Refine 2",
        "options": [
            { "id": 0, "name": "1st Buff", "stats": [{ "stat": "all", "value": 7.5 }] },
            { "id": 1, "name": "2nd Buff", "stats": [{ "stat": "all", "value": 12.5 }] },
            { "id": 2, "name": "3rd Buff", "stats": [{ "stat": "all", "value": 17.5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 30, "refine": 1 }
    },
    {
        "id": 552,
        "name": "Buried Arrow - Refine 3",
        "options": [
            { "id": 0, "name": "1st Buff", "stats": [{ "stat": "all", "value": 9 }] },
            { "id": 1, "name": "2nd Buff", "stats": [{ "stat": "all", "value": 15 }] },
            { "id": 2, "name": "3rd Buff", "stats": [{ "stat": "all", "value": 21 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 30, "refine": 2 }
    },
    {
        "id": 553,
        "name": "Buried Arrow - Refine 4",
        "options": [
            { "id": 0, "name": "1st Buff", "stats": [{ "stat": "all", "value": 10.5 }] },
            { "id": 1, "name": "2nd Buff", "stats": [{ "stat": "all", "value": 17.5 }] },
            { "id": 2, "name": "3rd Buff", "stats": [{ "stat": "all", "value": 24.5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 30, "refine": 3 }
    },
    {
        "id": 554,
        "name": "Buried Arrow - Refine 5",
        "options": [
            { "id": 0, "name": "1st Buff", "stats": [{ "stat": "all", "value": 12 }] },
            { "id": 1, "name": "2nd Buff", "stats": [{ "stat": "all", "value": 20 }] },
            { "id": 2, "name": "3rd Buff", "stats": [{ "stat": "all", "value": 28 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 30, "refine": 4 }
    },
    {
        "id": 555,
        "name": "Penetrative Reasoning",
        "options": [
            { "id": 0, "name": "After Heartstopper Strike", "stats": [{ "stat": "elemastery", "value": 80 }] }
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "heizou" }, { "type": "character", "id": "heizou" }]
    },
    {
        "id": 556,
        "name": "Named Juvenile Casebook",
        "options": [
            { "id": 0, "name": "After Taking Field", "stats": [{ "stat": "aspeed", "value": 15 }] }
        ],
        "requirement": { "type": "character", "id": "heizou" }
    },
    {
        "id": 557,
        "name": "Curious Casefiles",
        "options": [
            { "id": 0, "name": "Conviction", "stats": [{ "stat": "critskill", "value": 16 }, { "stat": "critdmgskill", "value": 32 }] },
            { "id": 1, "name": "Declension x3", "stats": [{ "stat": "critskill", "value": 12 }] },
            { "id": 2, "name": "Declension x2", "stats": [{ "stat": "critskill", "value": 8 }] },
            { "id": 3, "name": "Declension x1", "stats": [{ "stat": "critskill", "value": 4 }] },
        ],
        "requirement": { "type": "character", "id": "heizou" }
    },
    {
        "id": 558,
        "name": "Discretionary Supplement",
        "options": [
            { "id": 0, "name": "HP < 50% & Energy < 50%", "stats": [{ "stat": "healinginc", "value": 50 }, { "stat": "recharge", "value": 30 }] },
            { "id": 1, "name": "HP < 50% & Energy > 50%", "stats": [{ "stat": "healinginc", "value": 50 }] },
            { "id": 2, "name": "HP > 50% & Energy < 50%", "stats": [{ "stat": "recharge", "value": 30 }] }
        ],
        "requirement": { "type": "party", "id": "dori" }
    },
    {
        "id": 559,
        "name": "Sprinkling Weight",
        "options": [
            { "id": 0, "name": "Buff", "overwrite": "electro", "priority": 0 }
        ],
        "requirement": { "type": "character", "id": "dori" }
    },
    {
        "id": 560,
        "name": "Deepwood Patrol",
        "options": [
            { "id": 0, "name": "Off-field", "stats": [{ "stat": "recharge", "value": 20 }] }
        ],
        "requirement": { "type": "character", "id": "collei" }
    },
    {
        "id": 561,
        "name": "Gift of the Woods",
        "options": [
            { "id": 0, "name": "After Trump-Card Kitty", "stats": [{ "stat": "elemastery", "value": 60 }] }
        ],
        "requirement_type": "xor",
        "requirement": [{ "type": "party", "id": "collei" }, { "type": "character", "id": "collei" }]
    },
    {
        "id": 562,
        "name": "Origins Known From the Stem",
        "options": [
            { "id": 0, "name": " Vijnana-Khanda Field", "stats": [{ "stat": "dendro", "value": 20 }] }
        ],
        "requirement": { "type": "character", "id": "tighnari" }
    },
    {
        "id": 563,
        "name": "Keen Sight",
        "options": [
            { "id": 0, "name": "After Wreath Arrow", "stats": [{ "stat": "elemastery", "value": 50 }] }
        ],
        "requirement": { "type": "character", "id": "tighnari" }
    },
    {
        "id": 564,
        "name": "Withering Glimpsed in the Leaves",
        "options": [
            { "id": 0, "name": "After Fashioner’s Tanglevine Shaft", "stats": [{ "stat": "elemastery", "value": 60 }] },
            { "id": 1, "name": "Dendro reaction", "stats": [{ "stat": "elemastery", "value": 120 }] }
        ],
        "requirement": { "type": "party", "id": "tighnari" }
    },
    {
        "id": 565,
        "name": "Scholarly Blade",
        "options": [
            { "id": 0, "name": "Buff", "priority": 0, "transform": [{ "source": "elemastery", "target": "charged", "ratio": 0.06, "max": 60 }, { "source": "elemastery", "target": "burst", "ratio": 0.06, "max": 60 }] }
        ],
        "requirement": { "type": "character", "id": "tighnari" }
    },
    {
        "id": 566,
        "name": "At the End of the Beast-Paths - Refine 1",
        "options": [
            { "id": 0, "name": "After Charged Attack", "stats": [{ "stat": "bonuschargedelemastery", "value": 160 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 31, "refine": 0 }
    },
    {
        "id": 567,
        "name": "At the End of the Beast-Paths - Refine 2",
        "options": [
            { "id": 0, "name": "After Charged Attack", "stats": [{ "stat": "bonuschargedelemastery", "value": 200 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 31, "refine": 1 }
    },
    {
        "id": 568,
        "name": "At the End of the Beast-Paths - Refine 3",
        "options": [
            { "id": 0, "name": "After Charged Attack", "stats": [{ "stat": "bonuschargedelemastery", "value": 240 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 31, "refine": 2 }
    },
    {
        "id": 569,
        "name": "At the End of the Beast-Paths - Refine 4",
        "options": [
            { "id": 0, "name": "After Charged Attack", "stats": [{ "stat": "bonuschargedelemastery", "value": 280 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 31, "refine": 3 }
    },
    {
        "id": 570,
        "name": "At the End of the Beast-Paths - Refine 5",
        "options": [
            { "id": 0, "name": "After Charged Attack", "stats": [{ "stat": "bonuschargedelemastery", "value": 320 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 31, "refine": 4 }
    },
    {
        "id": 571,
        "name": "Labyrinth Lord’s Instruction - Refine 1",
        "options": [
            { "id": 0, "name": "After Elemental Skill/Burst", "stats": [{ "stat": "elemastery", "value": 60 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 33, "refine": 0 }
    },
    {
        "id": 572,
        "name": "Labyrinth Lord’s Instruction - Refine 2",
        "options": [
            { "id": 0, "name": "After Elemental Skill/Burst", "stats": [{ "stat": "elemastery", "value": 80 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 33, "refine": 0 }
    },
    {
        "id": 573,
        "name": "Labyrinth Lord’s Instruction - Refine 3",
        "options": [
            { "id": 0, "name": "After Elemental Skill/Burst", "stats": [{ "stat": "elemastery", "value": 100 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 33, "refine": 0 }
    },
    {
        "id": 574,
        "name": "Labyrinth Lord’s Instruction - Refine 4",
        "options": [
            { "id": 0, "name": "After Elemental Skill/Burst", "stats": [{ "stat": "elemastery", "value": 120 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 33, "refine": 0 }
    },
    {
        "id": 575,
        "name": "Labyrinth Lord’s Instruction - Refine 5",
        "options": [
            { "id": 0, "name": "After Elemental Skill/Burst", "stats": [{ "stat": "elemastery", "value": 140 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "bow", "id": 33, "refine": 0 }
    },
    {
        "id": 576,
        "name": "Full Circle - Refine 1",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "elemastery", "value": 120 }, { "stat": "atk%", "value": -5 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "elemastery", "value": 96 }, { "stat": "atk%", "value": -5 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "elemastery", "value": 72 }, { "stat": "atk%", "value": -5 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "elemastery", "value": 48 }, { "stat": "atk%", "value": -5 }] },
            { "id": 4, "name": "1 Stacks", "stats": [{ "stat": "elemastery", "value": 24 }, { "stat": "atk%", "value": -5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 28, "refine": 0 }
    },
    {
        "id": 577,
        "name": "Full Circle - Refine 2",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "elemastery", "value": 135 }, { "stat": "atk%", "value": -5 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "elemastery", "value": 108 }, { "stat": "atk%", "value": -5 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "elemastery", "value": 81 }, { "stat": "atk%", "value": -5 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "elemastery", "value": 54 }, { "stat": "atk%", "value": -5 }] },
            { "id": 4, "name": "1 Stacks", "stats": [{ "stat": "elemastery", "value": 27 }, { "stat": "atk%", "value": -5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 28, "refine": 1 }
    },
    {
        "id": 578,
        "name": "Full Circle - Refine 3",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "elemastery", "value": 150 }, { "stat": "atk%", "value": -5 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "elemastery", "value": 120 }, { "stat": "atk%", "value": -5 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "elemastery", "value": 90 }, { "stat": "atk%", "value": -5 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "elemastery", "value": 60 }, { "stat": "atk%", "value": -5 }] },
            { "id": 4, "name": "1 Stacks", "stats": [{ "stat": "elemastery", "value": 30 }, { "stat": "atk%", "value": -5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 28, "refine": 2 }
    },
    {
        "id": 579,
        "name": "Full Circle - Refine 4",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "elemastery", "value": 165 }, { "stat": "atk%", "value": -5 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "elemastery", "value": 132 }, { "stat": "atk%", "value": -5 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "elemastery", "value": 99 }, { "stat": "atk%", "value": -5 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "elemastery", "value": 66 }, { "stat": "atk%", "value": -5 }] },
            { "id": 4, "name": "1 Stacks", "stats": [{ "stat": "elemastery", "value": 33 }, { "stat": "atk%", "value": -5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 28, "refine": 3 }
    },
    {
        "id": 580,
        "name": "Full Circle - Refine 5",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "elemastery", "value": 180 }, { "stat": "atk%", "value": -5 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "elemastery", "value": 144 }, { "stat": "atk%", "value": -5 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "elemastery", "value": 108 }, { "stat": "atk%", "value": -5 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "elemastery", "value": 72 }, { "stat": "atk%", "value": -5 }] },
            { "id": 4, "name": "1 Stacks", "stats": [{ "stat": "elemastery", "value": 36 }, { "stat": "atk%", "value": -5 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "catalyst", "id": 28, "refine": 4 }
    },   
    {
        "id": 584,
        "name": "Gilded Dreams",
        "options": [
            { "id": 0, "name": "3 Same Elements", "stats": [{ "stat": "atk%", "value": 42 }] },
            { "id": 1, "name": "2 Same Elements", "stats": [{ "stat": "atk%", "value": 28 }, { "stat": "elemastery", "value": 50 }] },
            { "id": 2, "name": "1 Same Element", "stats": [{ "stat": "atk%", "value": 14 }, { "stat": "elemastery", "value": 100 }] },
            { "id": 3, "name": "0 Same Elements", "stats": [{ "stat": "elemastery", "value": 150 }] },
        ],
        "requirement": { "type": "artifact_set", "id": 41, "count": 4 }
    },
    {
        "id": 585,
        "name": "Sprawling Greenery - Stage 1",
        "options": [
            { "id": 0, "name": "Burning, Quicken, or Bloom", "stats": [{ "stat": "elemastery", "value": 30 }] }
        ],
        "requirement": { "type": "resonance", "id": "dendro", "count": 2 },
    },
    {
        "id": 586,
        "name": "Sprawling Greenery - Stage 2",
        "options": [
            { "id": 0, "name": "Aggravate, Spread, or Hyperbloom", "stats": [{ "stat": "elemastery", "value": 20 }] }
        ],
        "requirement": { "type": "resonance", "id": "dendro", "count": 2 },
    },
    {
        "id": 587,
        "name": "Withering Aggregation",
        "options": [
            { "id": 0, "name": "Not Infused", "stats": [{ "stat": "dendro", "value": 12 }] },
            { "id": 1, "name": "Hydro Infused", "stats": [{ "stat": "dendro", "value": 12 }, { "stat": "hydro", "value": 12 }] },
            { "id": 2, "name": "Electro Infused", "stats": [{ "stat": "dendro", "value": 12 }, { "stat": "electro", "value": 12 }] },
            { "id": 3, "name": "Pyro Infused", "stats": [{ "stat": "dendro", "value": 12 }, { "stat": "pyro", "value": 12 }] },
        ],
        "requirement": { "type": "party", "id": "traveler_dendro" }
    },
    {
        "id": 588,
        "name": "Verdant Overgrowth",
        "options": [
            { "id": 0, "name": "10 Stacks", "stats": [{ "stat": "elemastery", "value": 60 }] },
            { "id": 1, "name": "9 Stacks", "stats": [{ "stat": "elemastery", "value": 54 }] },
            { "id": 2, "name": "8 Stacks", "stats": [{ "stat": "elemastery", "value": 48 }] },
            { "id": 3, "name": "7 Stacks", "stats": [{ "stat": "elemastery", "value": 42 }] },
            { "id": 4, "name": "6 Stacks", "stats": [{ "stat": "elemastery", "value": 36 }] },
            { "id": 5, "name": "5 Stacks", "stats": [{ "stat": "elemastery", "value": 30 }] },
            { "id": 6, "name": "4 Stacks", "stats": [{ "stat": "elemastery", "value": 24 }] },
            { "id": 7, "name": "3 Stacks", "stats": [{ "stat": "elemastery", "value": 18 }] },
            { "id": 8, "name": "2 Stacks", "stats": [{ "stat": "elemastery", "value": 12 }] },
            { "id": 9, "name": "1 Stack", "stats": [{ "stat": "elemastery", "value": 6 }] },

        ],
        "requirement": { "type": "party", "id": "traveler_dendro" }
    },
    {
        "id": 589,
        "name": "Verdant Luxury",
        "options": [
            { "id": 0, "name": "Buff", "priority": 0, "transform": [{ "source": "elemastery", "target": "skill", "ratio": 0.15 }, { "source": "elemastery", "target": "burst", "ratio": 0.1 }] }
        ],
        "requirement": { "type": "character", "id": "traveler_dendro" }
    },
    {
        "id": 590,
        "name": "Bait-and-Switch",
        "options": [
            { "id": 0, "name": "4 Enemies Hit", "stats": [{ "stat": "hp%", "value": 40 }] },
            { "id": 1, "name": "3 Enemies Hit", "stats": [{ "stat": "hp%", "value": 30 }] },
            { "id": 2, "name": "2 Enemies Hit", "stats": [{ "stat": "hp%", "value": 20 }] },
            { "id": 3, "name": "1 Enemy Hit", "stats": [{ "stat": "hp%", "value": 10 }] },
        ],
        "requirement": { "type": "party", "id": "yelan" }
    },
    {
        "id": 591,
        "name": "The Starry Skies Their Flowers Rain",
        "options": [
            { "id": 0, "name": "Hydro + Bloom damage", "stats": [{ "stat": "enemyhydrores", "value": -35 }, { "stat": "enemydendrores", "value": -35 }] },
            { "id": 1, "name": "Hydro damage", "stats": [{ "stat": "enemyhydrores", "value": -35 }] },
            { "id": 2, "name": "Bloom damage", "stats": [{ "stat": "enemydendrores", "value": -35 }] },

        ],
        "requirement": { "type": "party", "id": "nilou" }
    },
    {
        "id": 592,
        "name": "Fricative Pulse",
        "options": [
            { "id": 0, "name": "After 3rd Pirouette", "stats": [{ "stat": "burst", "value": 50 }] },
        ],
        "requirement": { "type": "character", "id": "nilou" }
    },
    {
        "id": 593,
        "name": "Frostbreaker’s Melody",
        "options": [
            { "id": 0, "name": "Buff", "priority": 0, "transform": [{ "source": "hp", "target": "crit", "ratio": 0.0006, "max": 30 }, { "source": "hp", "target": "critdmg", "ratio": 0.0012, "max": 60 }] }
        ],
        "requirement": { "type": "character", "id": "nilou" }
    },
    {
        "id": 594,
        "name": "Court of Dancing Petals",
        "options": [
            { "id": 0, "name": "Hit by Dendro", "stats": [{ "stat": "elemastery", "value": 100 }] },
        ],
        "requirement": { "type": "party", "id": "nilou" }
    },
    {
        "id": 595,
        "name": "Dreamy Dance of Aeons",
        "options": [
            { "id": 0, "name": "Bountiful Core", "priority": 0, "transform": [{ "source": "nilouhp30k", "target": "rupture", "ratio": 0.009, "max": 400 }] }
        ],
        "requirement": { "type": "party", "id": "nilou" }
    },
    {
        "id": 596,
        "name": "Sacred Rite: Wolf’s Swiftness",
        "options": [
            { "id": 0, "name": "During Burst", "stats": [{ "stat": "elemastery", "value": 100 }] },
        ],
        "requirement": { "type": "character", "id": "cyno" }
    },
    {
        "id": 597,
        "name": "Ordinance: Unceasing Vigil",
        "options": [
            { "id": 0, "name": "During Burst", "stats": [{ "stat": "aspeed", "value": 20 }] },
        ],
        "requirement": { "type": "character", "id": "cyno" }
    },
    {
        "id": 598,
        "name": "Ceremony: Homecoming of Spirits",
        "options": [
            { "id": 0, "name": "5 Stacks", "stats": [{ "stat": "crit", "value": 15 }, { "stat": "critdmg", "value": 30 }] },
            { "id": 1, "name": "4 Stacks", "stats": [{ "stat": "crit", "value": 12 }, { "stat": "critdmg", "value": 24 }] },
            { "id": 2, "name": "3 Stacks", "stats": [{ "stat": "crit", "value": 9 }, { "stat": "critdmg", "value": 18 }] },
            { "id": 3, "name": "2 Stacks", "stats": [{ "stat": "crit", "value": 6 }, { "stat": "critdmg", "value": 12 }] },
            { "id": 4, "name": "1 Stack", "stats": [{ "stat": "crit", "value": 3 }, { "stat": "critdmg", "value": 6 }] },
        ],
        "requirement": { "type": "character", "id": "cyno" }
    },
    {
        "id": 599,
        "name": "Fire Ventures with Me - Pyro Bonus",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "pyro", "value": 15 }] }
        ],
        "requirement": { "type": "party", "id": "bennett" },
    },
    {
        "id": 600,
        "name": "Prayer of the Crimson Crown - Damage",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "normalelemental", "value": 20 }] }
        ],
        "requirement": { "type": "party", "id": "candace" },
    },
    {
        "id": 601,
        "name": "Prayer of the Crimson Crown - Infusion",
        "options": [
            { "id": 0, "name": "Buff", "overwrite": "hydro", "priority": 0 }
        ],
        "requirement_type": "and",
        "requirement": [{ "type": "party", "id": "candace" }, { "type": "weapon_type", "subtype": ["claymore", "polearm", "sword"] }],
    },
    {
        "id": 602,
        "name": "Sand Arch",
        "options": [
            { "id": 0, "name": "Prayer of the Crimson Crown", "priority": 0, "transform": [{ "source": "candacehp", "target": "normalelemental", "ratio": 0.0005 }] }
        ],
        "requirement": { "type": "party", "id": "candace" }
    },
    {
        "id": 603,
        "name": "Moon-Piercing Brilliance",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "hp%", "value": 20 }] }
        ],
        "requirement": { "type": "character", "id": "candace" },
    },
    {
        "id": 604,
        "name": "Nereid's Ascension",
        "options": [
            { "id": 0, "name": "Level 1", "stats": [{ "stat": "bonusnormalhp", "value": 4.84 }, { "stat": "bonuschargedhp", "value": 6.78 }, { "stat": "bonusskillhp", "value": 7.1 }] },
            { "id": 1, "name": "Level 2", "stats": [{ "stat": "bonusnormalhp", "value": 5.2 }, { "stat": "bonuschargedhp", "value": 7.28 }, { "stat": "bonusskillhp", "value": 7.63 }] },
            { "id": 2, "name": "Level 3", "stats": [{ "stat": "bonusnormalhp", "value": 5.57 }, { "stat": "bonuschargedhp", "value": 7.79 }, { "stat": "bonusskillhp", "value": 8.16 }] },
            { "id": 3, "name": "Level 4", "stats": [{ "stat": "bonusnormalhp", "value": 6.05 }, { "stat": "bonuschargedhp", "value": 8.47 }, { "stat": "bonusskillhp", "value": 8.87 }] },
            { "id": 4, "name": "Level 5", "stats": [{ "stat": "bonusnormalhp", "value": 6.41 }, { "stat": "bonuschargedhp", "value": 8.98 }, { "stat": "bonusskillhp", "value": 9.4 }] },
            { "id": 5, "name": "Level 6", "stats": [{ "stat": "bonusnormalhp", "value": 6.78 }, { "stat": "bonuschargedhp", "value": 9.49 }, { "stat": "bonusskillhp", "value": 9.93 }] },
            { "id": 6, "name": "Level 7", "stats": [{ "stat": "bonusnormalhp", "value": 7.26 }, { "stat": "bonuschargedhp", "value": 10.16 }, { "stat": "bonusskillhp", "value": 10.64 }] },
            { "id": 7, "name": "Level 8", "stats": [{ "stat": "bonusnormalhp", "value": 7.74 }, { "stat": "bonuschargedhp", "value": 10.84 }, { "stat": "bonusskillhp", "value": 11.35 }] },
            { "id": 8, "name": "Level 9", "stats": [{ "stat": "bonusnormalhp", "value": 8.23 }, { "stat": "bonuschargedhp", "value": 11.52 }, { "stat": "bonusskillhp", "value": 12.06 }] },
            { "id": 9, "name": "Level 10", "stats": [{ "stat": "bonusnormalhp", "value": 8.71 }, { "stat": "bonuschargedhp", "value": 12.2 }, { "stat": "bonusskillhp", "value": 12.77 }] },
            { "id": 10, "name": "Level 11", "stats": [{ "stat": "bonusnormalhp", "value": 9.2 }, { "stat": "bonuschargedhp", "value": 12.87 }, { "stat": "bonusskillhp", "value": 13.48 }] },
            { "id": 11, "name": "Level 12", "stats": [{ "stat": "bonusnormalhp", "value": 9.68 }, { "stat": "bonuschargedhp", "value": 13.55 }, { "stat": "bonusskillhp", "value": 14.19 }] },
            { "id": 12, "name": "Level 13", "stats": [{ "stat": "bonusnormalhp", "value": 10.28 }, { "stat": "bonuschargedhp", "value": 14.4 }, { "stat": "bonusskillhp", "value": 15.08 }] },
            { "id": 13, "name": "Level 14", "stats": [{ "stat": "bonusnormalhp", "value": 10.89 }, { "stat": "bonuschargedhp", "value": 15.25 }, { "stat": "bonusskillhp", "value": 15.97 }] },
            { "id": 14, "name": "Level 15", "stats": [{ "stat": "bonusnormalhp", "value": 11.5 }, { "stat": "bonuschargedhp", "value": 16.09 }, { "stat": "bonusskillhp", "value": 16.85 }] },
        ],
        "requirement": { "type": "character", "id": "kokomi" },
    },
    {
        "id": 605,
        "name": "Song of Pearls",
        "options": [
            { "id": 0, "name": "During Nereid's Ascension", "priority": 0, "transform": [{ "source": "healing", "target": "bonusnormalhp", "ratio": 0.15 }, { "source": "healing", "target": "bonuschargedhp", "ratio": 0.15 }, { "source": "healing", "target": "bonusskillhp", "ratio": 0.15 }] }
        ],
        "requirement": { "type": "character", "id": "kokomi" },
    },
    {
        "id": 606,
        "name": "Wildling Nightstar - Refine 1",
        "options": [
            { "id": 0, "name": "Active Character", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 0.32 } }
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "catalyst", "id": 29, "refine": 0 }, { "type": "weapon", "subtype": "claymore", "id": 31, "refine": 0 }]
    },
    {
        "id": 607,
        "name": "Wildling Nightstar - Refine 2",
        "options": [
            { "id": 0, "name": "Active Character", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 0.40 } }
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "catalyst", "id": 29, "refine": 1 }, { "type": "weapon", "subtype": "claymore", "id": 31, "refine": 1 }]
    },
    {
        "id": 608,
        "name": "Wildling Nightstar - Refine 3",
        "options": [
            { "id": 0, "name": "Active Character", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 0.48 } }
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "catalyst", "id": 29, "refine": 2 }, { "type": "weapon", "subtype": "claymore", "id": 31, "refine": 2 }]
    },
    {
        "id": 609,
        "name": "Wildling Nightstar - Refine 4",
        "options": [
            { "id": 0, "name": "Active Character", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 0.56 } }
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "catalyst", "id": 29, "refine": 3 }, { "type": "weapon", "subtype": "claymore", "id": 31, "refine": 3 }]
    },
    {
        "id": 610,
        "name": "Wildling Nightstar - Refine 5",
        "options": [
            { "id": 0, "name": "Active Character", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 0.64 } }
        ],
        "requirement_type": "or",
        "requirement": [{ "type": "weapon", "subtype": "catalyst", "id": 29, "refine": 4 }, { "type": "weapon", "subtype": "claymore", "id": 31, "refine": 4 }]
    },
    {
        "id": 611,
        "name": "The Wind Unattained - Refine 1",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 10 }, { "stat": "elemastery", "value": 40 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 26, "refine": 0 }
    },
    {
        "id": 612,
        "name": "The Wind Unattained - Refine 2",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 12.5 }, { "stat": "elemastery", "value": 50 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 26, "refine": 1 }
    },
    {
        "id": 613,
        "name": "The Wind Unattained - Refine 3",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 15 }, { "stat": "elemastery", "value": 60 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 26, "refine": 2 }
    },
    {
        "id": 614,
        "name": "The Wind Unattained - Refine 4",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 17.5 }, { "stat": "elemastery", "value": 70 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 26, "refine": 3 }
    },
    {
        "id": 615,
        "name": "The Wind Unattained - Refine 5",
        "options": [
            { "id": 0, "name": "Buff", "stats": [{ "stat": "atk%", "value": 20 }, { "stat": "elemastery", "value": 80 }] }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 26, "refine": 4 }
    },
    {
        "id": 616,
        "name": "Heat Haze at Horizon’s End - Refine 1",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 0.8 } },
            { "id": 1, "name": "Permanent", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 0.52 } }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 27, "refine": 0 }
    },
    {
        "id": 617,
        "name": "Heat Haze at Horizon’s End - Refine 2",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 1 } },
            { "id": 1, "name": "Permanent", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 0.65 } }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 27, "refine": 1 }
    },
    {
        "id": 618,
        "name": "Heat Haze at Horizon’s End - Refine 3",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 1.2 } },
            { "id": 1, "name": "Permanent", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 0.78 } }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 27, "refine":2 }
    },
    {
        "id": 619,
        "name": "Heat Haze at Horizon’s End - Refine 4",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 1.4 } },
            { "id": 1, "name": "Permanent", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 0.91 } }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 27, "refine": 3 }
    },
    {
        "id": 620,
        "name": "Heat Haze at Horizon’s End - Refine 5",
        "options": [
            { "id": 0, "name": "After Elemental Skill", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 1.6 } },
            { "id": 1, "name": "Permanent", "priority": 0, "transform": { "source": "elemastery", "target": "atk", "ratio": 1.04 } }
        ],
        "requirement": { "type": "weapon", "subtype": "polearm", "id": 27, "refine": 4 }
    },
    {
        "id": 621,
        "name": "Whisper of the Jinn - Refine 1",
        "options": [
            { "id": 0, "name": "Active Character", "priority": 0, "transform": { "source": "elemastery", "target": "recharge", "ratio": 0.052 } }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 31, "refine": 0 }
    },
    {
        "id": 622,
        "name": "Whisper of the Jinn - Refine 2",
        "options": [
            { "id": 0, "name": "Active Character", "priority": 0, "transform": { "source": "elemastery", "target": "recharge", "ratio": 0.065 } }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 31, "refine": 1 }
    },
    {
        "id": 623,
        "name": "Whisper of the Jinn - Refine 3",
        "options": [
            { "id": 0, "name": "Active Character", "priority": 0, "transform": { "source": "elemastery", "target": "recharge", "ratio": 0.078 } }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 31, "refine": 2 }
    },
    {
        "id": 624,
        "name": "Whisper of the Jinn - Refine 4",
        "options": [
            { "id": 0, "name": "Active Character", "priority": 0, "transform": { "source": "elemastery", "target": "recharge", "ratio": 0.091 } }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 31, "refine": 3 }
    },
    {
        "id": 625,
        "name": "Whisper of the Jinn - Refine 5",
        "options": [
            { "id": 0, "name": "Active Character", "priority": 0, "transform": { "source": "elemastery", "target": "recharge", "ratio": 0.104 } }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 31, "refine": 4 }
    },
    {
        "id": 626,
        "name": "Sunken Song of the Sands - Refine 1",
        "options": [
            { "id": 0, "name": "3 Stacks - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0056 } },
            { "id": 1, "name": "2 Stacks - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0024 } },
            { "id": 2, "name": "1 Stack - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0012 } }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 32, "refine": 0 }
    },
    {
        "id": 627,
        "name": "Sunken Song of the Sands - Refine 2",
        "options": [
            { "id": 0, "name": "3 Stacks - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0070 } },
            { "id": 1, "name": "2 Stacks - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0030 } },
            { "id": 2, "name": "1 Stack - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0015 } }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 32, "refine": 1 }
    },
    {
        "id": 628,
        "name": "Sunken Song of the Sands - Refine 3",
        "options": [
            { "id": 0, "name": "3 Stacks - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0084 } },
            { "id": 1, "name": "2 Stacks - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0036 } },
            { "id": 2, "name": "1 Stack - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0018 } }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 32, "refine": 2 }
    },
    {
        "id": 629,
        "name": "Sunken Song of the Sands - Refine 4",
        "options": [
            { "id": 0, "name": "3 Stacks - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0098 } },
            { "id": 1, "name": "2 Stacks - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0042 } },
            { "id": 2, "name": "1 Stack - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0021 } }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 32, "refine": 3 }
    },
    {
        "id": 630,
        "name": "Sunken Song of the Sands - Refine 5",
        "options": [
            { "id": 0, "name": "3 Stacks - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0112 } },
            { "id": 1, "name": "2 Stacks - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0048 } },
            { "id": 2, "name": "1 Stack - Active Character", "priority": 0, "transform": { "source": "hp", "target": "elemastery", "ratio": 0.0024 } }
        ],
        "requirement": { "type": "weapon", "subtype": "sword", "id": 32, "refine": 4 }
    },
]