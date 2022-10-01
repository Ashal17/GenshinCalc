character_visions = ["anemo", "cryo", "dendro", "electro", "geo", "hydro", "pyro"];
party_resonance = [
    {
        "id": 0,
        "name": "Protective Canopy",
        "vision": false,
        "bonus": [
            {
                "stat": "elementalres",
                "value": 15
            }
        ],
    },
    {
        "id": 1,
        "name": "Impetuous Winds",
        "vision": "anemo",
        "req": 2,
        "bonus": [
            {
                "stat": "stamina",
                "value": 15
            },
            {
                "stat": "mspeed",
                "value": 10
            },
            {
                "stat": "cdr",
                "value": 5
            }
        ],
    },
    {
        "id": 2,
        "name": "Shattering Ice",
        "vision": "cryo",
        "req": 2,
        "bonus": [
            {
                "stat": "Affected by Electro for 40% less time.",
                "value": 0
            },
            {
                "stat": "Increases CRIT Rate against enemies that are Frozen or affected by Cryo by 15%.",
                "value": 0,
                "apply": { "id": 1, "option": 0 }
            }
        ],
    },
    {
        "id": 3,
        "name": "Sprawling Greenery",
        "vision": "dendro",
        "req": 2,
        "bonus": [
            {
                "stat": "elemastery",
                "value": 50
            },
            {
                "stat": "Triggering Burning, Quicken, or Bloom increases Elemental Mastery by 30.",
                "value": 0,
                "apply": { "id": 585, "option": 0 }
            },
            {
                "stat": "Triggering Aggravate, Spread, or Hyperbloom increases Elemental Mastery by 20.",
                "value": 0,
                "apply": { "id": 586, "option": 0 }
            }
        ],
    },
    {
        "id": 4,
        "name": "High Voltage",
        "vision": "electro",
        "req": 2,
        "bonus": [
            {
                "stat": "Affected by Hydro for 40% less time.",
                "value": 0
            },
            {
                "stat": "Superconduct, Overloaded, Electro-Charged, Quicken, Aggravate or Hyperbloom have a 100% chance to generate an Electro Elemental Particle (CD: 5s).",
                "value": 0
            }
        ],
    },
    {
        "id": 5,
        "name": "Enduring Rock",
        "vision": "geo",
        "req": 2,
        "bonus": [
            {
                "stat": "shield",
                "value": 15
            },
            {
                "stat": "When protected by a shield, increases DMG by 15%.",
                "value": 0,
                "apply": { "id": 2, "option": 0 }
            },
            {
                "stat": "When protected by a shield, dealing DMG to enemies will decrease their Geo RES by 20% for 15s",
                "value": 0,
                "apply": { "id": 351, "option": 0 }
            }
        ],
    },
    {
        "id": 6,
        "name": "Soothing Water",
        "vision": "hydro",
        "req": 2,
        "bonus": [
            {
                "stat": "Affected by Pyro for 40% less time.",
                "value": 0
            },
            {
                "stat": "hp%",
                "value": 25
            }
        ],
    },
    {
        "id": 7,
        "name": "Fervent Flames",
        "vision": "pyro",
        "req": 2,
        "bonus": [
            {
                "stat": "Affected by Cryo for 40% less time.",
                "value": 0
            },
            {
                "stat": "atk%",
                "value": 25
            }
        ],
    }
]
character_list = {
    "none": {
        "id": -1,
        "name": "None",
        "attacks": [
            {
                "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true,
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true,
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true,
                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true,
                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "charged", "stat": "atk", "crit": true,
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true,
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true,
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true,
                    }
                ]
            }, {
                "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "apply": { "id": 4, "option": 0 }
                    }
                ]
            }
        ],
        "const": [
            {
                "name": "",
                "desc": ""
            },
            {
                "name": "",
                "desc": ""
            },
            {
                "name": "",
                "desc": "",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "",
                "desc": ""
            },
            {
                "name": "",
                "desc": "",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "",
                "desc": ""
            }
            
        ],
        "passive": [
            {
                "name": "",
                "desc": "",
                "level": 0
            },
            {
                "name": "",
                "desc": "",
                "level": 2
            },
            {
                "name": "",
                "desc": "",
                "level": 8,
                "apply": { "id": 4, "option": 0 }
            }
        ],
    },
    "amber": {
        "id": 0,
        "name": "Amber",
        "weapon": "bow",
        "vision": "pyro",
        "stats": [
            { "stat": "hp_base", "values": [793, 2038, 2630, 3940, 4361, 5016, 5578, 6233, 6654, 7309, 7730, 8385, 8806, 9461] },
            { "stat": "atk_base", "values": [19, 48, 62, 93, 103, 118, 131, 147, 157, 172, 182, 198, 208, 223] },
            { "stat": "def_base", "values": [50, 129, 167, 250, 277, 318, 354, 396, 422, 464, 491, 532, 559, 601] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] },

        ],
        "attacks": [
            {
                "name": "Sharpshooter",
                "vision": "physical",
                "type":"normal",
                "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [36.12, 39.06, 42, 46.2, 49.14, 52.5, 57.12, 61.74, 66.36, 71.4, 76.44, 81.48, 86.52, 91.56, 96.6]
                  },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [36.12, 39.06, 42, 46.2, 49.14, 52.5, 57.12, 61.74, 66.36, 71.4, 76.44, 81.48, 86.52, 91.56, 96.6]
               },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [46.44, 50.22, 54, 59.4, 63.18, 67.5, 73.44, 79.38, 85.32, 91.8, 98.28, 104.76, 111.24, 117.72, 124.2]
          },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [47.3, 51.15, 55, 60.5, 64.35, 68.75, 74.8, 80.85, 86.9, 93.5, 100.1, 106.7, 113.3, 119.9, 126.5]
              },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [59.34, 64.17, 69, 75.9, 80.73, 86.25, 93.84, 101.43, 109.02, 117.3, 125.58, 133.86, 142.14, 150.42, 158.7]
              },
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 50, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3]
                    },
                    {
                        "name": "Aimed Shot - One Arrow to Rule Them All", "req": { "type": "const", "val": 1, "subtype": "min" }, "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [8.772, 9.486, 10.2, 11.22, 11.934, 12.75, 13.872, 14.994, 16.116, 17.34, 18.564, 19.788, 21.012, 22.236, 23.46]

                    },
                    {
                        "name": "Fully-Charged Aimed Shot", "type": "charged", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5]
                    },
                    {
                        "name": "Fully-Charged Aimed Shot - One Arrow to Rule Them All", "req": { "type": "const", "val": 1, "subtype": "min" }, "type": "charged", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [24.8, 26.66, 28.52, 31, 32.86, 34.72, 37.2, 39.68, 42.16, 44.64, 47.12, 49.6, 52.7, 55.8, 58.9]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
                    },
                ]
            },
            {
                "name": "Explosive Puppet", "type": "skill", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Inherited HP", "type": "", "vision": "physical", "stat": "hp", "crit": false, "scale": [41.36, 44.46, 47.56, 51.7, 54.8, 57.9, 62.04, 66.18, 70.31, 74.45, 78.58, 82.72, 87.89, 93.06, 98.23]
                    },
                    {
                        "name": "Explosion", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [123.2, 132.44, 141.68, 154, 163.24, 172.48, 184.8, 197.12, 209.44, 221.76, 234.08, 246.4, 261.8, 277.2, 292.6]
                    },
                    {
                        "name": "Explosion - Manual Detonation", "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [369.6, 397.32, 425.04, 462, 489.72, 517.44, 554.4, 591.36, 628.32, 665.28, 702.24, 739.2, 785.4, 831.6, 877.8]

                    },
                ]
            },
            {
                "name": "Fiery Rain", "type": "burst", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Per Wave", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [28.08, 30.19, 32.29, 35.1, 37.21, 39.31, 42.12, 44.93, 47.74, 50.54, 53.35, 56.16, 59.67, 63.18, 66.69]
                    },
                    {
                        "name": "Total ", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "hits":18, "scale": [28.08, 30.19, 32.29, 35.1, 37.21, 39.31, 42.12, 44.93, 47.74, 50.54, 53.35, 56.16, 59.67, 63.18, 66.69]
                    },
                ]
            }
        ],
        "const": [
            {
                "name": "One Arrow to Rule Them All",
                "desc": "Fires 2 arrows per Aimed Shot. The second arrow deals 20% of the first arrow's DMG."
            },
            {
                "name": "Bunny Triggered",
                "desc": "Baron Bunny, new and improved! Hitting Baron Bunny's foot with a fully-charged Aimed Shot manually detonates it. Explosion via manual detonation deals 200% additional DMG."
            },
            {
                "name": "It Burns!",
                "desc": "Increases the Level of Fiery Rain by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "It's Not Just Any Doll...",
                "desc": "Decreases Explosive Puppet's CD by 20%. Adds 1 additional charge."
            },
            {
                "name": "It's Baron Bunny!",
                "desc": "Increases the Level of Explosive Puppet by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Wildfire",
                "desc": "Fiery Rain increases all party members' Movement SPD by 15% and ATK by 15% for 10s.",
                "apply": { "id": 4, "option": 0 }
            },
        ],
        "passive": [
            {
                "name": "Gliding Champion",
                "desc": "Decreases gliding Stamina consumption for your own party members by 20%. Not stackable with Passive Talents that provide the exact same effects.",
                "level":0
            },
            {
                "name": "Every Arrow Finds Its Target",
                "desc": "Increases the CRIT Rate of Fiery Rain by 10% and widens its AoE by 30%.",
                "level": 2,
                "bonus": [{ "stat": "critburst", "value": 10 }],
            },
            {
                "name": "Precise Shot",
                "desc": "Aimed Shot hits on weak points increase ATK by 15% for 10s.",
                "level": 8,
                "apply": { "id": 3, "option": 0 }
            },
        ],
        "ascension": [{ "type": "item", "id": "everflame_seed" }, { "type": "group", "id": "arrowhead" }, { "type": "item", "id": "small_lamp_grass" }],
        "party_effects": [
            { "type": "apply", "id": 4, "option": 0, "desc": "Fiery Rain increases all party members' Movement SPD by 15% and ATK by 15% for 10s." }
        ]
    },
    "barbara": {
        "id": 1,
        "name": "Barbara",
        "weapon": "catalyst",
        "vision": "hydro",
        "stats": [
            { "stat": "hp_base", "values": [821, 2108, 2721, 4076, 4512, 5189, 5770, 6448, 6884, 7561, 7996, 8674, 9110, 9787] },
            { "stat": "atk_base", "values": [13, 34, 44, 66, 73, 84, 94, 105, 112, 123, 130, 141, 148, 159] },
            { "stat": "def_base", "values": [56, 144, 186, 279, 308, 355, 394, 441, 470, 517, 546, 593, 623, 669] },
            { "stat": "hp%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }
        ],
        "attacks": [
            {
                "name": "Whisper of Water", "type": "normal", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [37.84, 40.68, 43.52, 47.3, 50.14, 52.98, 56.76, 60.54, 64.33, 68.11, 72.05, 77.19, 82.34, 87.49, 92.63]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [35.52, 38.18, 40.85, 44.4, 47.06, 49.73, 53.28, 56.83, 60.38, 63.94, 67.63, 72.46, 77.29, 82.12, 86.95]
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [41.04, 44.12, 47.2, 51.3, 54.38, 57.46, 61.56, 65.66, 69.77, 73.87, 78.14, 83.72, 89.3, 94.88, 100.47]
                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [55.2, 59.34, 63.48, 69, 73.14, 77.28, 82.8, 88.32, 93.84, 99.36, 105.1, 112.61, 120.12, 127.62, 135.13]
                 },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [166.24, 178.71, 191.18, 207.8, 220.27, 232.74, 249.36, 265.98, 282.61, 299.23, 316.52, 339.13, 361.74, 384.35, 406.96]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
                    }
                ]
            },
            {
                "name": "Let the Show Begin", "type": "skill", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "HP Regeneration", "type": "healing", "vision": "hydro", "stat": "hp", "crit": false, "scale": [0.75, 0.81, 0.86, 0.94, 0.99, 1.05, 1.13, 1.2, 1.27, 1.35, 1.43, 1.5, 1.59, 1.69, 1.78], "flat": [72, 79, 87, 96, 105, 114, 125, 135, 147, 159, 172, 185, 199, 213, 228]
                    },
                    {
                        "name": "Continuous Regeneration", "type": "healing", "vision": "hydro", "stat": "hp", "crit": false, "scale": [4, 4.3, 4.6, 5, 5.3, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.5, 9, 9.5], "flat": [385, 424, 465, 510, 559, 610, 664, 722, 783, 847, 915, 986, 1059, 1136, 1217]
                    },
                    {
                        "name": "Droplet", "type": "skill", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [58.4, 62.78, 67.16, 0, 7, 77.38, 81.76, 87.6, 93.44, 99.28, 105.12, 110.96, 116.8, 124.1, 131.4, 138.7]
                    },
                ]
            },
            {
                "name": "Shining Miracle", "type": "burst", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "HP Regeneration", "type": "healing", "vision": "hydro", "stat": "hp", "crit": false, "scale": [17.6, 18.92, 20.24, 22, 23.32, 24.64, 26.4, 28.16, 29.92, 31.68, 33.44, 35.2, 37.4, 39.6, 41.8], "flat": [1694, 1864, 2047, 2245, 2457, 2683, 2923, 3177, 3445, 3728, 4024, 4335, 4660, 4999, 5352]
                    },
                ]
            }
        ],
        "const": [
            {
                "name": "Gleeful Songs",
                "desc": "Barbara regenerates 1 Energy every 10s."
            },
            {
                "name": "Vitality Burst",
                "desc": "Decreases the CD of Let the Show Begin by 15%. During the ability's duration, your active character gains a 15% Hydro DMG Bonus.",
                "apply": { "id": 6, "option": 0 }
            },
            {
                "name": "Star of Tomorrow",
                "desc": "Increases the Level of Shining Miracle by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Attentiveness be My Power",
                "desc": "Every enemy Barbara hits with her Charged Attack regenerates 1 Energy for her. A maximum of 5 energy can be regenerated in this manner with any one Charged Attack."
            },
            {
                "name": "The Purest Companionship",
                "desc": "Increases the Level of Let the Show Begin by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Dedicating Everything to You",
                "desc": "When Barbara is in the party but not on the field, and one of your own party members falls:<br>Automatically revives the fallen character.<br>Fully restores the revived character's HP to 100%.<br>This effect can only occur once every 15 mins."
            }

        ],
        "passive": [
            {
                "name": "With My Whole Heart",
                "desc": "When a Perfect Cooking is achieved on a dish with restorative effects, there is a 12% chance to obtain double the product.",
                "level": 0
            },
            {
                "name": "Glorious Season",
                "desc": "The Stamina Consumption of characters within Let the Show Begin's Melody Loop is reduced by 12%.",
                "level": 2,
                "apply": { "id": 5, "option": 0 }
            },
            {
                "name": "Encore",
                "desc": "When your active character gains an Elemental Orb/Particle, the duration of the Melody Loop of Let the Show Begin♪ is extended by 1s. The maximum extension is 5s.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "cleansing_heart" }, { "type": "group", "id": "scroll" }, { "type": "item", "id": "philanemo_mushroom" }],
        "party_effects": [
            { "type": "apply", "id": 5, "option": 0, "desc": "The Stamina Consumption of characters within Let the Show Begin's Melody Loop is reduced by 12%." },
            { "type": "apply", "id": 6, "option": 0, "desc": "Decreases the CD of Let the Show Begin by 15%. During the ability's duration, your active character gains a 15% Hydro DMG Bonus." }
        ]
    },
    "beidou": {
        "id": 2,
        "name": "Beidou",
        "weapon": "claymore",
        "vision": "electro",
        "stats": [
            { "stat": "hp_base", "values": [1094, 2811, 3628, 5435, 6015, 6919, 7694, 8597, 9178, 10081, 10662, 11565, 12146, 13050] },
            { "stat": "atk_base", "values": [19, 48, 63, 94, 104, 119, 133, 148, 158, 174, 184, 200, 210, 225] },
            { "stat": "def_base", "values": [54, 140, 180, 270, 299, 344, 382, 427, 456, 501, 530, 575, 603, 648] },
            { "stat": "electro", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Oceanborne", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [71.12, 76.91, 82.7, 90.97, 96.76, 103.38, 112.47, 121.57, 130.67, 140.59, 151.96, 165.33, 178.71, 192.08, 206.67]
                    },
                    {
                        "name": "1-Hit - Stunning Revenge", "req": { "type": "const", "val": 999, "subtype": "min" }, "type": "normal", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [14.224, 15.382, 16.54, 18.194, 19.352, 20.676, 22.494, 24.314, 26.134, 28.118, 30.392, 33.066, 35.742, 38.416, 41.334]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [70.86, 76.63, 82.4, 90.64, 96.41, 103, 112.06, 121.13, 130.19, 140.08, 151.41, 164.73, 178.06, 191.38, 205.92]
                    },
                    {
                        "name": "2-Hit - Stunning Revenge", "req": { "type": "const", "val": 999, "subtype": "min" }, "type": "normal", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [14.172, 15.326, 16.48, 18.128, 19.282, 20.6, 22.412, 24.226, 26.038, 28.016, 30.282, 32.946, 35.612, 38.276, 41.184]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [88.32, 95.51, 102.7, 112.97, 120.16, 128.38, 139.67, 150.97, 162.27, 174.59, 188.71, 205.32, 221.92, 238.53, 256.65]
                    },
                    {
                        "name": "3-Hit - Stunning Revenge", "req": { "type": "const", "val": 999, "subtype": "min" }, "type": "normal", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [17.664, 19.102, 20.54, 22.594, 24.032, 25.676, 27.934, 30.194, 32.454, 34.918, 37.742, 41.064, 44.384, 47.706, 51.33]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [86.52, 93.56, 100.6, 110.66, 117.7, 125.75, 136.82, 147.88, 158.95, 171.02, 184.85, 201.12, 217.39, 233.65, 251.4]
                    },
                    {
                        "name": "4-Hit - Stunning Revenge", "req": { "type": "const", "val": 999, "subtype": "min" }, "type": "normal", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [17.304, 18.712, 20.12, 22.132, 23.54, 25.15, 27.364, 29.576, 31.79, 34.204, 36.97, 40.224, 43.478, 46.73, 50.28]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [112.14, 121.27, 130.4, 143.44, 152.57, 163, 177.34, 191.69, 206.03, 221.68, 239.61, 260.7, 281.78, 302.87, 325.87]
                    },
                    {
                        "name": "5-Hit - Stunning Revenge", "req": { "type": "const", "val": 999, "subtype": "min" }, "type": "normal", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [22.428, 24.254, 26.08, 28.688, 30.514, 32.6, 35.468, 38.338, 41.206, 44.336, 47.922, 52.14, 56.356, 60.574, 65.174]

                    },
                    {
                        "name": "Charged Attack Spinning", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.24, 60.82, 65.4, 71.94, 76.52, 81.75, 88.94, 96.14, 103.33, 111.18, 120.17, 130.75, 141.32, 151.9, 163.43]
                    },
                    {
                        "name": "Charged Attack Final", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [101.82, 110.11, 118.4, 130.24, 138.53, 148, 161.02, 174.05, 187.07, 201.28, 217.56, 236.71, 255.85, 275, 295.88]
           },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21]
                    },
                    {
                        "name": "Stunning Revenge", "req": { "type": "const", "val": 4, "subtype": "min" }, "type": false, "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]

                    },
                ]
            },
            {
                "name": "Tidecaller", "type": "skill", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Base", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [121.6, 130.72, 139.84, 152, 161.12, 170.24, 182.4, 194.56, 206.72, 218.88, 231.04, 243.2, 258.4, 273.6, 288.8]
                    },
                    {
                        "name": "On Hit Taken", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [316.16, 355.5584, 397.1456, 456, 502.6944, 551.5776, 620.16, 692.6336, 768.9984, 849.2544, 933.4016, 1021.44, 1136.96, 1258.56, 1386.24]
                    },
                    {
                        "name": "Shield", "type": "shield", "vision": "electro", "stat": "hp", "crit": false, "scale": [14.4, 15.48, 16.56, 18, 19.08, 20.16, 21.6, 23.04, 24.48, 25.92, 27.36, 28.8, 30.6, 32.4, 34.2], "flat": [1386, 1525, 1675, 1837, 2010, 2195, 2392, 2600, 2819, 3050, 3293, 3547, 3813, 4090, 4379]
                    },
                ]
            },
            {
                "name": "Stormbreaker", "type": "burst", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [121.6, 130.72, 139.84, 152, 161.12, 170.24, 182.4, 194.56, 206.72, 218.88, 231.04, 243.2, 258.4, 273.6, 288.8]
           },
                    {
                        "name": "Lightning", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [96.0, 103.2, 110.4, 120.0, 127.2, 134.4, 144.0, 153.6, 163.2, 172.8, 182.4, 192.0, 204.0, 216.0, 228.0]
                    },
                    {
                        "name": "Sea Beast's Scourge Shield Absorption", "req": { "type": "const", "val": 1, "subtype": "min" }, "type": "shield", "vision": "electro", "stat": "hp", "crit": false, "scale": [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
                    },
                ]
            }
        ],
        "const": [
            {
                "name": "Sea Beast's Scourge",
                "desc": "When Stormbreaker is used: Creates a shield that absorbs up to 16% of Beidou's Max HP for 15s. This shield absorbs Electro DMG 250% more effectively."
            },
            {
                "name": "Upon the Turbulent Sea, the Thunder Arises",
                "desc": "Stormbreaker's arc lightning can jump to 2 additional targets."
            },
            {
                "name": "Summoner of Storm",
                "desc": "Increases the Level of Tidecaller by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Stunning Revenge",
                "desc": "Within 10s of taking DMG, Beidou's Normal Attacks gain 20% additional Electro DMG."
            },
            {
                "name": "Crimson Tidewalker",
                "desc": "Increases the Level of Stormbreaker by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Bane of Evil",
                "desc": "During the duration of Stormbreaker, the Electro RES of surrounding enemies is decreased by 15%.",
                "apply": { "id": 8, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Conqueror of Tides",
                "desc": "Decreases swimming Stamina consumption for your own party members by 20%. Not stackable with Passive Talents that provide the exact same effects.",
                "level": 0
            },
            {
                "name": "Retribution",
                "desc": "Counterattacking with Tidecaller at the precise moment when the character is hit grants the maximum DMG Bonus.",
                "level": 2
            },
            {
                "name": "Lightning Storm",
                "desc": "Gain the following effects for 10s after unleashing Tidecaller with its maximum DMG Bonus:<br>DMG dealt by Normal and Charged Attacks is increased by 15%. ATK SPD of Normal and Charged Attacks is increased by 15%.<br>Greatly reduced delay before unleashing Charged Attacks.",
                "level": 8,
                "apply": { "id": 7, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "lightning_prism" }, { "type": "group", "id": "treasure_insignia" }, { "type": "item", "id": "noctilous_jade" }],
        "party_effects": [
            { "type": "apply", "id": 8, "option": 0, "desc": "During the duration of Stormbreaker, the Electro RES of surrounding enemies is decreased by 15%." }
        ]
    },
    "bennett": {
        "id": 3,
        "name": "Bennett",
        "weapon": "sword",
        "vision": "pyro",
        "stats": [
            { "stat": "hp_base", "values": [1039, 2670, 3447, 5163, 5715, 6573, 7309, 8168, 8719, 9577, 10129, 10987, 11539, 12397] },
            { "stat": "atk_base", "values": [16, 41, 53, 80, 88, 101, 113, 126, 134, 148, 156, 169, 178, 191] },
            { "stat": "def_base", "values": [65, 166, 214, 321, 356, 409, 455, 508, 542, 596, 630, 684, 718, 771] },
            { "stat": "recharge", "values": [0, 0, 0, 0, 6.7, 6.7, 13.3, 13.3, 13.3, 13.3, 20, 20, 26.7, 26.7] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Strike of Fortune", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [44.55, 48.17, 51.8, 56.98, 60.61, 64.75, 70.45, 76.15, 81.84, 88.06, 94.28, 100.49, 106.71, 112.92, 119.14]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [42.74, 46.22, 49.7, 54.67, 58.15, 62.13, 67.59, 73.06, 78.53, 84.49, 90.45, 96.42, 102.38, 108.35, 114.31]
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [54.61, 59.06, 63.5, 69.85, 74.3, 79.38, 86.36, 93.35, 100.33, 107.95, 115.57, 123.19, 130.81, 138.43, 146.05]
                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [59.68, 64.54, 69.4, 76.34, 81.2, 86.75, 94.38, 102.02, 109.65, 117.98, 126.31, 134.64, 142.96, 151.29, 159.62]
                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [71.9, 77.75, 83.6, 91.96, 97.81, 104.5, 113.7, 122.89, 132.09, 142.12, 152.15, 162.18, 172.22, 182.25, 192.28]
                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[55.9, 60.72], [60.45, 65.66], [65, 70.6], [71.5, 77.66], [76.05, 82.6], [81.25, 88.25], [88.4, 96.02], [95.55, 103.78], [102.7, 111.55], [110.5, 120.02], [118.3, 128.49], [126.1, 136.96], [133.9, 145.44], [141.7, 153.91], [149.5, 162.38]]
             },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ]
            },
            {
                "name": "Passion Overload", "type": "skill", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "No Charge", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [137.6, 147.92, 158.24, 172, 182.32, 192.64, 206.4, 220.16, 233.92, 247.68, 261.44, 275.2, 292.4, 309.6, 326.8]
                    },
                    {
                        "name": "Charge Level 1", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [[84, 92], [90.3, 98.9], [96.6, 105.8], [105, 115], [111.3, 121.9], [117.6, 128.8], [126, 138], [134.4, 147.2], [142.8, 156.4], [151.2, 165.6], [159.6, 174.8], [168, 184], [178.5, 195.5], [189, 207], [199.5, 218.5]]
          },
                    {
                        "name": "Charge Level 2", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [[88, 96], [94.6, 103.2], [101.2, 110.4], [110, 120], [116.6, 127.2], [123.2, 134.4], [132, 144], [140.8, 153.6], [149.6, 163.2], [158.4, 172.8], [167.2, 182.4], [176, 192], [187, 204], [198, 216], [209, 228]]
            },
                    {
                        "name": "Explosion", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [132, 141.9, 151.8, 165, 174.9, 184.8, 198, 211.2, 224.4, 237.6, 250.8, 264, 280.5, 297, 313.5]
                    },
                    {
                        "name": "Unexpected Odyssey", "req": { "type": "const", "val": 4, "subtype": "min" }, "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [124.2, 133.515, 142.83, 155.25, 164.565, 173.88, 186.3, 198.72, 211.14, 223.56, 235.98, 248.4, 263.925, 279.45, 294.975]

                    }
                ]
            },
            {
                "name": "Fantastic Voyage", "type": "burst", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [232.8, 250.26, 267.72, 291, 308.46, 325.92, 349.2, 372.48, 395.76, 419.04, 442.32, 465.6, 494.7, 523.8, 552.9]
                    },
                    {
                        "name": "Continuous Regeneration", "type": "healing", "vision": "pyro", "stat": "hp", "crit": false, "scale": [6, 6.45, 6.9, 7.5, 7.95, 8.4, 9, 9.6, 10.2, 10.8, 11.4, 12, 12.75, 13.5, 14.25], "flat": [577, 635, 698, 765, 837, 914, 996, 1083, 1174, 1270, 1371, 1477, 1588, 1703, 1824]
                    }
                ],
                "apply": { "id": 64 }
            }
        ],
        "const": [
            {
                "name": "Grand Expectation",
                "desc": "Fantastic Voyage's ATK increase no longer has an HP restriction, and gains an additional 20% of Bennett's Base ATK.",
                "apply": { "id": 65, "option": 0 }
            },
            {
                "name": "Impasse Conqueror",
                "desc": "When Bennett's HP falls below 70%, his Energy Recharge is increased by 30%.",
                "apply": { "id": 9, "option": 0 }
            },
            {
                "name": "Unstoppable Fervor",
                "desc": "Increases the Level of Passion Overload by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Unexpected Odyssey",
                "desc": "Using a Normal Attack when executing the second attack of Passion Overload's Charge Level 1 allows an additional attack to be performed. This additional attack does 135% of the second attack's DMG."
            },
            {
                "name": "True Explorer",
                "desc": "Increases the Level of Fantastic Voyage by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Fire Ventures with Me",
                "desc": "Sword, Claymore or Polearm-wielding characters inside Fantastic Voyage's radius gain a 15% Pyro DMG Bonus and are imbued Pyro.",
                "apply": { "id": [10, 599], "option": [0,0] }
            }

        ],
        "passive": [
            {
                "name": "It Should Be Safe...",
                "desc": "When dispatched on an expedition in Mondstadt, time consumed is reduced by 25%.",
                "level": 0
            },
            {
                "name": "Rekindle",
                "desc": "Decreases Passion Overload's CD by 20%.",
                "level": 2
            },
            {
                "name": "Fearnaught",
                "desc": "Within the area created by Fantastic Voyage, Passion Overload takes on the following effects:<br>CD is reduced by 50%.<br>Bennett will not be launched by the effects of Charge Level 2.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "everflame_seed" }, { "type": "group", "id": "treasure_insignia" }, { "type": "item", "id": "windwheel_aster" }],
        "party_effects": [
            { "type": "stat", "id": "bennettatk" },
            { "type": "apply", "id": 62, "option": 0, "desc": "Increases Party ATK by % of Bennett's Base ATK." },
            { "type": "apply", "id": 63, "option": 0, "desc": "Fantastic Voyage's ATK increase no longer has an HP restriction, and gains an additional 20% of Bennett's Base ATK." },
            { "type": "apply", "id": 10, "option": 0, "desc": "Sword, Claymore or Polearm-wielding characters inside Fantastic Voyage's radius are imbued Pyro." },
            { "type": "apply", "id": 599, "option": 0, "desc": "Characters inside Fantastic Voyage's radius gain a 15% Pyro DMG Bonus" }
        ]
    },
    "chongyun": {
        "id": 4,
        "name": "Chongyun",
        "weapon": "claymore",
        "vision": "cryo",
        "stats": [
            { "stat": "hp_base", "values": [921, 2366, 3054, 4574, 5063, 5824, 6475, 7236, 7725, 8485, 8974, 9734, 10223, 10984] },
            { "stat": "atk_base", "values": [19, 48, 62, 93, 103, 118, 131, 147, 157, 172, 182, 198, 208, 223] },
            { "stat": "def_base", "values": [54, 140, 180, 270, 299, 344, 382, 427, 456, 501, 530, 575, 603, 648] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [70, 75.7, 81.4, 89.54, 95.24, 101.75, 110.7, 119.66, 128.61, 138.38, 148.15, 157.92, 167.68, 177.45, 187.22]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.12, 68.26, 73.4, 80.74, 85.88, 91.75, 99.82, 107.9, 115.97, 124.78, 133.59, 142.4, 151.2, 160.01, 168.82]
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [80.32, 86.86, 93.4, 102.74, 109.28, 116.75, 127.02, 137.3, 147.57, 158.78, 169.99, 181.2, 192.4, 203.61, 214.82]
                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [101.22, 109.46, 117.7, 129.47, 137.71, 147.13, 160.07, 173.02, 185.97, 200.09, 214.21, 228.34, 242.46, 256.59, 270.71]
                    },
                    {
                        "name": "Ice Unleashed", "req": { "type": "const", "val": 1, "subtype": "min" }, "vision": "cryo", "stat": "atk", "crit": true, "scale": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
            },
                    {
                        "name": "Charged Attack Spinning", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.29, 60.87, 65.45, 71.99, 76.57, 81.81, 89.01, 96.21, 103.41, 111.26, 119.12, 126.97, 134.82, 142.68, 150.53]
                    },
                    {
                        "name": "Charged Attack Final", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [101.78, 110.07, 118.35, 130.19, 138.47, 147.94, 160.96, 173.97, 186.99, 201.2, 215.4, 229.6, 243.8, 258, 272.21]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21]
                    }
                ]
            },
            {
                "name": "Spirit Blade - Chonghua's Layered Frost", "type": "skill", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [172.04, 184.94, 197.85, 215.05, 227.95, 240.86, 258.06, 275.26, 292.47, 309.67, 326.88, 344.08, 365.59, 387.09, 408.6]
                    }
                ],
                "apply": { "id": 73, "option": 0 }
            },
            {
                "name": "Spirit Blade - Cloud-parting Star", "type": "burst", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Skill", "req": { "type": "const", "val": 5, "subtype": "max" }, "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "hits": 3, "scale": [142.4, 153.08, 163.76, 178, 188.68, 199.36, 213.6, 227.84, 242.08, 256.32, 270.56, 284.8, 302.6, 320.4, 338.2]
                    },
                    {
                        "name": "Skill", "req": { "type": "const", "val": 6, "subtype": "min" }, "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "hits": 4, "scale": [142.4, 153.08, 163.76, 178, 188.68, 199.36, 213.6, 227.84, 242.08, 256.32, 270.56, 284.8, 302.6, 320.4, 338.2]
                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Ice Unleashed",
                "desc": "The last attack of Chongyun's Normal Attack combo releases 3 ice blades. Each blade deals 50% of Chongyun's ATK as Cryo DMG to all enemies in its path."
            },
            {
                "name": "Atmospheric Revolution",
                "desc": "Elemental Skills and Elemental Bursts cast within the Frost Field created by Spirit Blade: Chonghua's Layered Frost have their CD time decreased by 15%.",
                "apply": { "id": 68, "option": 0 }
            },
            {
                "name": "Cloudburst",
                "desc": "Increases the Level of Spirit Blade: Cloud-parting Star by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Frozen Skies",
                "desc": "Chongyun regenerates 1 Energy every time he hits an enemy affected by Cryo. This effect can only occur once every 2s."
            },
            {
                "name": "The True Path",
                "desc": "Increases the Level of Spirit Blade: Chongyun's Layered Frost by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Rally of Four Blades",
                "desc": "Spirit Blade: Cloud-parting Star deals 15% more DMG to enemies with a lower percentage of their Max HP remaining than Chongyun. This skill will also summon 1 additional spirit blade.",
                "apply": { "id": 67, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Gallant Journey",
                "desc": "When dispatched on an expedition in Liyue, time consumed is reduced by 25%.",
                "level": 0
            },
            {
                "name": "Steady Breathing",
                "desc": "Sword, Claymore, or Polearm-wielding characters within the field created by Spirit Blade: Chonghua's Layered Frost have their Normal ATK SPD increased by 8%.",
                "level": 2,
                "apply": { "id": 11, "option": 0 }
            },
            {
                "name": "Rimechaser Blade",
                "desc": "When the field created by Spirit Blade: Chonghua's Layered Frost disappears, another spirit blade will be summoned to strike nearby enemies, dealing 100% of Chonghua's Layered Frost's Skill DMG as AoE Cryo DMG. Enemies hit by this blade will have their Cryo RES decreased by 10% for 8s.",
                "level": 8,
                "apply": { "id": 12, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "hoarfrost_core" },{ "type": "group", "id": "mask" }, { "type": "item", "id": "cor_lapis" }],
        "party_effects": [
            { "type": "apply", "id": 73, "option": 0, "desc": "After a short delay, the cold air created by the Cryo explosion will coalesce into a Chonghua Frost Field, within which all Sword, Claymore and Polearm-wielding characters' weapons will be infused with Cryo." },
            { "type": "apply", "id": 11, "option": 0, "desc": "Sword, Claymore, or Polearm-wielding characters within the field created by Spirit Blade: Chonghua's Layered Frost have their Normal ATK SPD increased by 8%." },
            { "type": "apply", "id": 12, "option": 0, "desc": "When the field created by Spirit Blade: Chonghua's Layered Frost disappears, another spirit blade will be summoned to strike nearby enemies, dealing 100% of Chonghua's Layered Frost's Skill DMG as AoE Cryo DMG. Enemies hit by this blade will have their Cryo RES decreased by 10% for 8s." },
            { "type": "apply", "id": 68, "option": 0, "desc": "Elemental Skills and Elemental Bursts cast within the Frost Field created by Spirit Blade: Chonghua's Layered Frost have their CD time decreased by 15%." }
        ]
    },
    "diluc": {
        "id": 5,
        "name": "Diluc",
        "weapon": "claymore",
        "vision": "pyro",
        "stats": [
            { "stat": "hp_base", "values": [1011, 2621, 3488, 5219, 5834, 6712, 7533, 8421, 9036, 9932, 10547, 11453, 12068, 12981] },
            { "stat": "atk_base", "values": [26, 68, 90, 135, 151, 173, 194, 217, 233, 256, 272, 295, 311, 335] },
            { "stat": "def_base", "values": [61, 158, 211, 315, 352, 405, 455, 509, 546, 600, 637, 692, 729, 784] },
            { "stat": "crit", "values": [0, 0, 0, 0, 4.8, 4.8, 9.6, 9.6, 9.6, 9.6, 14.4, 14.4, 19.2, 19.2] },
            { "stat": "burst_energy", "values": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [89.7, 97, 104.3, 114.73, 122.03, 130.38, 141.85, 153.32, 164.79, 177.31, 191.65, 208.52, 225.38, 242.25, 260.65]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [87.63, 94.77, 101.9, 112.09, 119.22, 127.38, 138.58, 149.79, 161, 173.23, 187.24, 203.72, 220.2, 236.67, 254.65]
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [98.81, 106.86, 114.9, 126.39, 134.43, 143.63, 156.26, 168.9, 181.54, 195.33, 211.13, 229.71, 248.29, 266.87, 287.14]
                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [133.99, 144.89, 155.8, 171.38, 182.29, 194.75, 211.89, 229.03, 246.16, 264.86, 286.28, 311.48, 336.67, 361.86, 389.34]
                    },
                    {
                        "name": "Charged Attack Spinning", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [68.8, 74.4, 80, 88, 93.6, 100, 108.8, 117.6, 126.4, 136, 147, 159.94, 172.87, 185.81, 199.92]
                    },
                    {
                        "name": "Charged Attack Final", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [124.7, 134.85, 145, 159.5, 169.65, 181.25, 197.2, 213.15, 229.1, 246.5, 266.44, 289.88, 313.33, 336.78, 362.36]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [89.51, 96.79, 104.08, 114.48, 121.77, 130.1, 141.54, 152.99, 164.44, 176.93, 189.42, 201.91, 214.4, 226.89, 239.37]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [178.97, 193.54, 208.11, 228.92, 243.49, 260.13, 283.03, 305.92, 328.81, 353.78, 378.76, 403.73, 428.7, 453.68, 478.65]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [223.55, 241.74, 259.94, 285.93, 304.13, 324.92, 353.52, 382.11, 410.7, 441.89, 473.09, 504.28, 535.47, 566.66, 597.86]
                    }
                ]
            },
            {
                "name": "Searing Onslaught", "type": "skill", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "1-Hit", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [94.4, 101.48, 108.56, 118, 125.08, 132.16, 141.6, 151.04, 160.48, 169.92, 179.36, 188.8, 200.6, 212.4, 224.2]
                    },
                    {
                        "name": "2-Hit", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [97.6, 104.92, 112.24, 122, 129.32, 136.64, 146.4, 156.16, 165.92, 175.68, 185.44, 195.2, 207.4, 219.6, 231.8]
                    },
                    {
                        "name": "3-Hit", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [128.8, 138.46, 148.12, 161, 170.66, 180.32, 193.2, 206.08, 218.96, 231.84, 244.72, 257.6, 273.7, 289.8, 305.9]
                    }
                ]
            },
            {
                "name": "Dawn", "type": "burst", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Slashing", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [204, 219.3, 234.6, 255, 270.3, 285.6, 306, 326.4, 346.8, 367.2, 387.6, 408, 433.5, 459, 484.5]
                    },
                    {
                        "name": "DoT", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [60, 64.5, 69, 75, 79.5, 84, 90, 96, 102, 108, 114, 120, 127.5, 135, 142.5]
                    },
                    {
                        "name": "Explosion", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [204, 219.3, 234.6, 255, 270.3, 285.6, 306, 326.4, 346.8, 367.2, 387.6, 408, 433.5, 459, 484.5]
                    }
                ],
                "apply": { "id": 72, "option": 0 }
            }
        ],
        "const": [
            {
                "name": "Conviction",
                "desc": "Diluc deals 15% more DMG to enemies whose HP is above 50%.",
                "apply": { "id": 69, "option": 0 }
            },
            {
                "name": "Searing Ember",
                "desc": "When Diluc takes DMG, his ATK increases by 10% and his ATK SPD increases by 5%. Lasts for 10s. This effect can stack up to 3 times and can only occur once every 1.5s.",
                "apply": { "id": 14, "option": 0 }
            },
            {
                "name": "Fire and Steel",
                "desc": "Increases the Level of Searing Onslaught by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Flowing Flame",
                "desc": "Casting Searing Onslaught in sequence greatly increases damage dealt. Within 2s of using Searing Onslaught, casting the next Searing Onslaught in the combo deals 40% additional DMG. This effect lasts for the next 2s.",
                "apply": { "id": 15, "option": 0 }
            },
            {
                "name": "Phoenix, Harbinger of Dawn",
                "desc": "Increases the Level of Dawn by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Flaming Sword, Nemesis of the Dark",
                "desc": "After casting Searing Onslaught, the next 2 Normal Attacks within the next 6s will have their DMG and ATK SPD increased by 30%. Additionally, Searing Onslaught will not interrupt the Normal Attack combo.",
                "apply": { "id": 16, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Tradition of the Dawn Knight",
                "desc": "Refunds 15% of the ores used when crafting Claymore-type weapons.",
                "level": 0
            },
            {
                "name": "Relentless",
                "desc": "Diluc's Charged Attack Stamina Cost is decreased by 50%, and its duration is increased by 3s.",
                "level": 2
            },
            {
                "name": "Blessing of Phoenix",
                "desc": "The Pyro Enchantment provided by Dawn lasts for 4s longer. Additionally, Diluc gains 20% Pyro DMG Bonus during the duration of this effect.",
                "level": 8,
                "apply": { "id": 13, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "everflame_seed" },{ "type": "group", "id": "fatui_insignia" }, { "type": "item", "id": "small_lamp_grass" }]
    },
    "fischl": {
        "id": 6,
        "name": "Fischl",
        "weapon": "bow",
        "vision": "electro",
        "stats": [
            { "stat": "hp_base", "values": [770, 1979, 2555, 3827, 4236, 4872, 5418, 6054, 6463, 7099, 7508, 8144, 8553, 9189] },
            { "stat": "atk_base", "values": [20, 53, 68, 102, 113, 130, 144, 161, 172, 189, 200, 216, 227, 244] },
            { "stat": "def_base", "values": [50, 128, 165, 247, 274, 315, 350, 391, 418, 459, 485, 526, 553, 594] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [44.12, 47.71, 51.3, 56.43, 60.02, 64.13, 69.77, 75.41, 81.05, 87.21, 93.37, 99.52, 105.68, 111.83, 117.99]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [46.78, 50.59, 54.4, 59.84, 63.65, 68, 73.98, 79.97, 85.95, 92.48, 99.01, 105.54, 112.06, 118.59, 125.12]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [58.14, 62.87, 67.6, 74.36, 79.09, 84.5, 91.94, 99.37, 106.81, 114.92, 123.03, 131.14, 139.26, 147.37, 155.48]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [57.71, 62.4, 67.1, 73.81, 78.51, 83.88, 91.26, 98.64, 106.02, 114.07, 122.12, 130.17, 138.23, 146.28, 154.33]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [72.07, 77.93, 83.8, 92.18, 98.05, 104.75, 113.97, 123.19, 132.4, 142.46, 152.52, 162.57, 172.63, 182.68, 192.74]

                    },
                    {
                        "name": "Gaze of the Deep", "req": { "type": "const", "val": 1, "subtype": "min" }, "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]

                    },
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3]

                    },
                    {
                        "name": "Fully-Charged Aimed Shot", "type": "charged", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5]

                    },
                    {
                        "name": "Stellar Predator", "req": { "type": "level", "val": 2, "subtype": "min" }, "type": "charged", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [189.348, 203.5491, 217.7502, 236.685, 250.8861, 265.0872, 284.022, 302.9568, 321.8916, 340.8264, 359.7612, 378.696, 402.3645, 426.033, 449.7015]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]

                    },
                ] },
            {
                "name": "Nightrider", "type": "skill", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Oz", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [88.8, 95.46, 102.12, 111, 117.66, 124.32, 133.2, 142.08, 150.96, 159.84, 168.72, 177.6, 188.7, 199.8, 210.9]

                    },
                    {
                        "name": "Summoning", "req": { "type": "const", "val": 1, "subtype": "max" }, "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [115.44, 124.1, 132.76, 144.3, 152.96, 161.62, 173.16, 184.7, 196.25, 207.79, 219.34, 230.88, 245.31, 259.74, 274.17]

                    },
                    {
                        "name": "Summoning", "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [315.44, 324.1, 332.76, 344.3, 352.96, 361.62, 373.16, 384.7, 396.25, 407.79, 419.34, 430.88, 445.31, 459.74, 474.17]

                    },
                    {
                        "name": "Evernight Raven", "req": { "type": "const", "val": 6, "subtype": "min" }, "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]

                    },
                    {
                        "name": "Undone Be Thy Sinful Hex", "req": { "type": "level", "val": 8, "subtype": "min" }, "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]

                    }
                ] },
            {
                "name": "Midnight Phantasmagoria", "type": "burst", "damage": true, "vision": "electro", "parts": [

                    {
                        "name": "Falling Thunder", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [208, 223.6, 239.2, 260, 275.6, 291.2, 312, 332.8, 353.6, 374.4, 395.2, 416, 442, 468, 494]


                    },
                    {
                        "name": "Her Pilgrimage of Bleak", "req": { "type": "const", "val": 4, "subtype": "min" }, "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [222, 222, 222, 222, 222, 222, 222, 222, 222, 222, 222, 222, 222, 222, 222]

                    }
                ] }
        ],
        "const": [
            {
                "name": "Gaze of the Deep",
                "desc": "Even when Oz is not present in combat, he can still watch over Fischl through his raven eyes. When Fischl attacks an enemy, Oz fires a joint attack, dealing 22% of ATK DMG."
            },
            {
                "name": "Devourer of All Sins",
                "desc": "When Nightrider is used, it deals an additional 200% ATK as DMG, and its AoE is increased by 50%."
            },
            {
                "name": "Wings of Nightmare",
                "desc": "Increases the Level of Nightrider by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Her Pilgrimage of Bleak",
                "desc": "When Midnight Phantasmagoria is used, it deals 222% of ATK as Electro DMG to the surrounding enemies. When the skill duration ends, Fischl regenerates 20% of her HP."
            },
            {
                "name": "Against the Fleeing Light",
                "desc": "Increases the Level of Midnight Phantasmagoria by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Evernight Raven",
                "desc": "Extends the duration of Oz's presence on the field by 2s. Additionally, Oz attacks with your active character when present, dealing 30% of Fischl's ATK as Electro DMG."
            }

        ],
        "passive": [
            {
                "name": "Mein Hausgarten",
                "desc": "When dispatched on an expedition in Mondstadt, time consumed is reduced by 25%.",
                "level": 0
            },
            {
                "name": "Stellar Predator",
                "desc": "When Fischl hits Oz with a fully-charged Aimed Shot, Oz brings down Thundering Retribution, dealing AoE Electro DMG equal to 152.7% of the arrow's DMG.",
                "level": 2
            },
            {
                "name": "Undone Be Thy Sinful Hex",
                "desc": "If your active character triggers an Electro-related Elemental Reaction when Oz is on the field, the opponent shall be stricken with Thundering Retribution, dealing Electro DMG equal to 80% of Fischl's ATK.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "lightning_prism" },{ "type": "group", "id": "arrowhead" }, { "type": "item", "id": "small_lamp_grass" }]
    },
    "jean": {
        "id": 7,
        "name": "Jean",
        "weapon": "sword",
        "vision": "anemo",
        "stats": [
            { "stat": "hp_base", "values": [1144, 2967, 3948, 5908, 6605, 7599, 8528, 9533, 10230, 11243, 11940, 12965, 13662, 14695] },
            { "stat": "atk_base", "values": [19, 48, 64, 96, 108, 124, 139, 155, 166, 183, 194, 211, 222, 239] },
            { "stat": "def_base", "values": [60, 155, 206, 309, 345, 397, 446, 499, 535, 588, 624, 678, 715, 769] },
            { "stat": "healing", "values": [0, 0, 0, 0, 5.5, 5.5, 11.1, 11.1, 11.1, 11.1, 16.6, 16.6, 22.2, 22.2] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [48.33, 52.27, 56.2, 61.82, 65.75, 70.25, 76.43, 82.61, 88.8, 95.54, 103.27, 112.36, 121.44, 130.53, 140.44]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [45.58, 49.29, 53, 58.3, 62.01, 66.25, 72.08, 77.91, 83.74, 90.1, 97.39, 105.96, 114.53, 123.1, 132.45]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [60.29, 65.19, 70.1, 77.11, 82.02, 87.63, 95.34, 103.05, 110.76, 119.17, 128.81, 140.14, 151.48, 162.81, 175.18]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [65.88, 71.24, 76.6, 84.26, 89.62, 95.75, 104.18, 112.6, 121.03, 130.22, 140.75, 153.14, 165.52, 177.91, 191.42]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [79.21, 85.65, 92.1, 101.31, 107.76, 115.13, 125.26, 135.39, 145.52, 156.57, 169.23, 184.13, 199.02, 213.91, 230.16]
},
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [162.02, 175.21, 188.4, 207.24, 220.43, 235.5, 256.22, 276.95, 297.67, 320.28, 346.19, 376.65, 407.11, 437.58, 470.81]
},
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    },
                    {
                        "name": "Wind Companion", "req": { "type": "level", "val": 2, "subtype": "min" }, "type": "healing", "vision": "anemo", "stat": "atk", "crit": false, "scale": [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
          }
                ] },
            {
                "name": "Gale Blade", "type": "skill", "damage": true, "vision": "anemo","parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [292, 313.9, 335.8, 365, 386.9, 408.8, 438, 467.2, 496.4, 525.6, 554.8, 584, 620.5, 657, 693.5]

                    }] },
            {
                "name": "Dandelion Breeze", "type": "burst", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "Initial", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [424.8, 456.66, 488.52, 531, 562.86, 594.72, 637.2, 679.68, 722.16, 764.64, 807.12, 849.6, 902.7, 955.8, 1008.9]

                    },
                    {
                        "name": "Field Entering/Leaving", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [78.4, 84.28, 90.16, 98, 103.88, 109.76, 117.6, 125.44, 133.28, 141.12, 148.96, 156.8, 166.6, 176.4, 186.2]

                    },
                    {
                        "name": "Field Activation Healing", "type": "healing", "vision": "anemo", "stat": "atk", "crit": false, "scale": [251.2, 270.04, 288.88, 314, 332.84, 351.68, 376.8, 401.92, 427.04, 452.16, 477.28, 502.4, 533.8, 565.2, 596.6], "flat": [1540, 1694, 1861, 2041, 2234, 2439, 2657, 2888, 3132, 3389, 3659, 3941, 4236, 4544, 4865]
                    },
                    {
                        "name": "Continuous Regeneration", "type": "healing", "vision": "anemo", "stat": "atk", "crit": false, "scale": [25.12, 27, 28.89, 31.4, 33.28, 35.17, 37.68, 40.19, 42.7, 45.22, 47.73, 50.24, 53.38, 56.52, 59.66], "flat": [154, 169, 186, 204, 223, 244, 266, 289, 313, 339, 366, 394, 424, 454, 487]
                    }

                ]
            }
        ],
        "const": [
            {
                "name": "Spiraling Tempest",
                "desc": "Increases the pulling speed of Gale Blade after holding for more than 1s, and increases the DMG dealt by 40%.",
                "apply": { "id": 17, "option": 0 }
            },
            {
                "name": "People's Aegis",
                "desc": "When Jean picks up an Elemental Orb/Particle, all party members have their Movement SPD and ATK SPD increased by 15% for 15s.",
                "apply": { "id": 18, "option": 0 }
            },
            {
                "name": "When the West Wind Arises",
                "desc": "Increases the Level of Dandelion Breeze by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Lands of Dandelion",
                "desc": "Within the Field created by Dandelion Breeze, all enemies have their Anemo RES decreased by 40%.",
                "apply": { "id": 19, "option": 0 }
            },
            {
                "name": "Outbursting Gust",
                "desc": "Increases the Level of Gale Blade by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Lion's Fang, Fair Protector of Mondstadt",
                "desc": "Incoming DMG is decreased by 35% within the Field created by Dandelion Breeze. Upon leaving the Dandelion Field, this effect lasts for 3 attacks or 10s."
            }

        ],
        "passive": [
            {
                "name": "Guiding Breeze",
                "desc": "When a Perfect Cooking is achieved on a dish with restorative effects, there is a 12% chance to obtain double the product.",
                "level": 0
            },
            {
                "name": "Wind Companion",
                "desc": "On hit, Jean's Normal Attacks have a 50% chance to regenerate HP equal to 15% of Jean's ATK for all party members.",
                "level": 2
            },
            {
                "name": "Let the Wind Lead",
                "desc": "Using Dandelion Breeze will regenerate 20% of its Energy.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "hurricane_seed" },{ "type": "group", "id": "mask" }, { "type": "item", "id": "dandelion_seed" }],
        "party_effects": [
            { "type": "apply", "id": 18, "option": 0, "desc": "When Jean picks up an Elemental Orb/Particle, all party members have their Movement SPD and ATK SPD increased by 15% for 15s." },
            { "type": "apply", "id": 19, "option": 0, "desc": "Within the Field created by Dandelion Breeze, all enemies have their Anemo RES decreased by 40%." }
        ]
    },
    "kaeya": {
        "id": 8,
        "name": "Kaeya",
        "weapon": "sword",
        "vision": "cryo",
        "stats": [
            { "stat": "hp_base", "values": [976, 2506, 3235, 4846, 5364, 6170, 6860, 7666, 8184, 8989, 9507, 10312, 10830, 11636] },
            { "stat": "atk_base", "values": [19, 48, 62, 93, 103, 118, 131, 147, 157, 172, 182, 198, 208, 223] },
            { "stat": "def_base", "values": [66, 171, 220, 330, 365, 420, 467, 522, 557, 612, 647, 702, 737, 792] },
            { "stat": "recharge", "values": [0, 0, 0, 0, 6.7, 6.7, 13.3, 13.3, 13.3, 13.3, 20, 20, 26.7, 26.7] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [53.75, 58.13, 62.5, 68.75, 73.13, 78.13, 85, 91.88, 98.75, 106.25, 114.84, 124.95, 135.06, 145.16, 156.19]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [51.69, 55.89, 60.1, 66.11, 70.32, 75.13, 81.74, 88.35, 94.96, 102.17, 110.43, 120.15, 129.87, 139.59, 150.19]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [65.27, 70.59, 75.9, 83.49, 88.8, 94.88, 103.22, 111.57, 119.92, 129.03, 139.47, 151.74, 164.01, 176.29, 189.67]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [70.86, 76.63, 82.4, 90.64, 96.41, 103, 112.06, 121.13, 130.19, 140.08, 151.41, 164.73, 178.06, 191.38, 205.92]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [88.24, 95.42, 102.6, 112.86, 120.04, 128.25, 139.54, 150.82, 162.11, 174.42, 188.53, 205.12, 221.71, 238.3, 256.4]
                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[55.04, 73.1], [59.52, 79.05], [64, 85], [70.4, 93.5], [74.88, 99.45], [80, 106.25], [87.04, 115.6], [94.08, 124.95], [101.12, 134.3], [108.8, 144.5], [117.6, 156.19], [127.95, 169.93], [138.3, 183.68], [148.65, 197.42], [159.94, 212.42]]
       },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
               },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
               },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
       }
                ] },
            {
                "name": "Frostgnaw", "type": "skill", "damage": true, "vision": "cryo","parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [191.2, 205.54, 219.88, 239, 253.34, 267.68, 286.8, 305.92, 325.04, 344.16, 363.28, 382.4, 406.3, 430.2, 454.1]

                    }
                ]
            },
            {
                "name": "Glacial Waltz", "type": "burst", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [77.6, 83.42, 89.24, 97, 102.82, 108.64, 116.4, 124.16, 131.92, 139.68, 147.44, 155.2, 164.9, 174.6, 184.3]

                    },
                    {
                        "name": "Cold-Blooded Strike", "req": { "type": "level", "val": 2, "subtype": "min" }, "type": "healing", "vision": "cryo", "stat": "atk", "crit": false, "scale": [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
                    }
                ]
            },
            {
                "name": "Frozen Kiss", "req": { "type": "const", "val": 4, "subtype": "min" }, "vision": "cryo", "parts": [
                    {
                        "name": "Shield", "type": "shield", "vision": "cryo", "stat": "hp", "crit": false, "scale": [30]
                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Excellent Blood",
                "desc": "The CRIT Rate of Kaeya's Normal and Charge Attacks against enemies affected by Cryo is increased by 15%.",
                "apply": { "id": 20, "option": 0 }
            },
            {
                "name": "Never-Ending Performance",
                "desc": "Every time Glacial Waltz defeats an enemy during its duration, its duration is increased by 2.5s, up to a maximum of 15s."
            },
            {
                "name": "Dance of Frost",
                "desc": "Increases the Level of Frostgnaw by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Frozen Kiss",
                "desc": "Triggers automatically when Kaeya's HP falls below 20%:<br>Creates a shield that absorbs damage equal to 30% of Kaeya's Max HP. Lasts for 20s.<br>This shield absorbs Cryo DMG with 250 % efficiency.<br>Can only occur once every 60s."
            },
            {
                "name": "Frostbiting Embrace",
                "desc": "Increases the Level of Glacial Waltz by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Glacial Whirlwind",
                "desc": "Glacial Waltz will generate 1 additional icicle, and will regenerate 15 Energy when cast."
            }

        ],
        "passive": [
            {
                "name": "Hidden Strength",
                "desc": "Decreases sprinting Stamina consumption for your own party members by 20%. Not stackable with Passive Talents that provide the exact same effects.",
                "level": 0
            },
            {
                "name": "Cold-Blooded Strike",
                "desc": "Every hit with Frostgnaw regenerates HP for Kaeya equal to 15% of his ATK.",
                "level": 2
            },
            {
                "name": "Glacial Heart",
                "desc": "Enemies Frozen by Frostgnaw will drop additional Elemental Particles. Frostgnaw may only produce a maximum of 2 additional Elemental Particles per use.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "hoarfrost_core" },{ "type": "group", "id": "treasure_insignia" }, { "type": "item", "id": "calla_lily" }]
    },
    "keqing": {
        "id": 9,
        "name": "Keqing",
        "weapon": "sword",
        "vision": "electro",
        "stats": [
            { "stat": "hp_base", "values": [1020, 2646, 3521, 5268, 5889, 6776, 7604, 8500, 9121, 10025, 10647, 11561, 12182, 13103] },
            { "stat": "atk_base", "values": [25, 65, 87, 130, 145, 167, 187, 209, 225, 247, 262, 285, 300, 323] },
            { "stat": "def_base", "values": [62, 161, 215, 321, 359, 413, 464, 519, 556, 612, 649, 705, 743, 799] },
            { "stat": "critdmg", "values": [0, 0, 0, 0, 9.6, 9.6, 19.2, 19.2, 19.2, 19.2, 28.8, 28.8, 38.4, 38.4] },
            { "stat": "burst_energy", "values": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [41.02, 44.36, 47.7, 52.47, 55.81, 59.62, 64.87, 70.12, 75.37, 81.09, 86.81, 92.54, 98.26, 103.99, 109.71]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [41.02, 44.36, 47.7, 52.47, 55.81, 59.62, 64.87, 70.12, 75.37, 81.09, 86.81, 92.54, 98.26, 103.99, 109.71]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [54.44, 58.87, 63.3, 69.63, 74.06, 79.13, 86.09, 93.05, 100.01, 107.61, 115.21, 122.8, 130.4, 137.99, 145.59]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[31.48, 34.4], [34.04, 37.2], [36.6, 40], [40.26, 44], [42.82, 46.8], [45.75, 50], [49.78, 54.4], [53.8, 58.8], [57.83, 63.2], [62.22, 68], [66.61, 72.8], [71, 77.6], [75.4, 82.4], [79.79, 87.2], [84.18, 92]]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [66.99, 72.45, 77.9, 85.69, 91.14, 97.38, 105.94, 114.51, 123.08, 132.43, 141.78, 151.13, 160.47, 169.82, 179.17]
                },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[76.8, 86], [83.05, 93], [89.3, 100], [98.23, 110], [104.48, 117], [111.63, 125], [121.45, 136], [131.27, 147], [141.09, 158], [151.81, 170], [162.53, 182], [173.24, 194], [183.96, 206], [194.67, 218], [205.39, 230]]
   },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
               },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
               },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                  }
                ] },
            {
                "name": "Stellar Restoration", "type": "skill", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Lightning Stiletto", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [50.4, 54.18, 57.96, 63, 66.78, 70.56, 75.6, 80.64, 85.68, 90.72, 95.76, 100.8, 107.1, 113.4, 119.7]

                    },
                    {
                        "name": "Slashing", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [168, 180.6, 193.2, 210, 222.6, 235.2, 252, 268.8, 285.6, 302.4, 319.2, 336, 357, 378, 399]

                    },
                    {
                        "name": "Thunderclap Slash", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "hits":2, "scale": [84, 90.3, 96.6, 105, 111.3, 117.6, 126, 134.4, 142.8, 151.2, 159.6, 168, 178.5, 189, 199.5]

                    },
                    {
                        "name": "Thundering Might", "req": { "type": "const", "val": 1, "subtype": "min" }, "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]

                    }


                ],
                "apply": { "id": 71, "option": 0 }
            },
            {
                "name": "Starward Sword", "type": "burst", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [88, 94.6, 101.2, 110, 116.6, 123.2, 132, 140.8, 149.6, 158.4, 167.2, 176, 187, 198, 209]

                    },
                    {
                        "name": "Consecutive Slash", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "hits":8, "scale": [24, 25.8, 27.6, 30, 31.8, 33.6, 36, 38.4, 40.8, 43.2, 45.6, 48, 51, 54, 57]

                    },
                    {
                        "name": "Last Attack", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [188.8, 202.96, 217.12, 236, 250.16, 264.32, 283.2, 302.08, 320.96, 339.84, 358.72, 377.6, 401.2, 424.8, 448.4]

                    }

                ]
            }
        ],
        "const": [
            {
                "name": "Thundering Might",
                "desc": "Recasting Stellar Restoration while a Lightning Stiletto is present causes Keqing to deal 50% of her ATK as AoE Electro DMG at the start point and terminus of her Blink."
            },
            {
                "name": "Keen Extraction",
                "desc": "When Keqing's Normal and Charged Attack's hit enemies affected by Electro, they have a 50% chance of producing an Elemental Particle. This effect can only occur once every 5s."
            },
            {
                "name": "Foreseen Reformation",
                "desc": "Increases the Level of Starward Sword by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Attunement",
                "desc": "For 10s after Keqing triggers an Electro-related Elemental Reaction, her ATK is increased by 25%.",
                "apply": { "id": 22, "option": 0 }
            },
            {
                "name": "Beckoning Stars",
                "desc": "Increases the Level of Stellar Restoration by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Tenacious Star",
                "desc": "When initiating a Normal Attack, a Charged Attack, Elemental Skill or Elemental Burst, Keqing gains a 6% Electro DMG Bonus for 8s. Effects triggered by Normal Attacks, Charged Attacks, Elemental Skills and Elemental Bursts are considered independent entities.",
                "apply": { "id": 23, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Land's Overseer",
                "desc": "When dispatched on an expedition in Liyue, time consumed is reduced by 25%.",
                "level": 0
            },
            {
                "name": "Thundering Penance",
                "desc": "After recasting Stellar Restoration while a Lightning Stiletto is present, Keqing gains Electro Enchantment for 5s.",
                "level": 2
            },
            {
                "name": "Aristocratic Dignity",
                "desc": "When casting Starward Sword, Keqing's CRIT Rate is increased by 15%, and her Energy Recharge is increased by 15%. This effect lasts for 8s.",
                "level": 8,
                "apply": { "id": 21, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "lightning_prism" },{ "type": "group", "id": "nectar" }, { "type": "item", "id": "cor_lapis" }]
    },
    "klee": {
        "id": 10,
        "name": "Klee",
        "weapon": "catalyst",
        "vision": "pyro",
        "stats": [
            { "stat": "hp_base", "values": [801, 2077, 2764, 4136, 4623, 5319, 5970, 6673, 7161, 7870, 8358, 9076, 9563, 10287] },
            { "stat": "atk_base", "values": [24, 63, 84, 125, 140, 161, 180, 202, 216, 238, 253, 274, 289, 311] },
            { "stat": "def_base", "values": [48, 124, 165, 247, 276, 318, 357, 399, 428, 470, 500, 542, 572, 615] },
            { "stat": "pyro", "values": [0, 0, 0, 0, 7.2, 7.2, 14.4, 14.4, 14.4, 14.4, 21.6, 21.6, 28.8, 28.8] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [72.16, 77.57, 82.98, 90.2, 95.61, 101.02, 108.24, 115.46, 122.67, 129.89, 137.39, 147.21, 157.02, 166.83, 176.65]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [62.4, 67.08, 71.76, 78, 82.68, 87.36, 93.6, 99.84, 106.08, 112.32, 118.81, 127.3, 135.78, 144.27, 152.76]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [89.92, 96.66, 103.41, 112.4, 119.14, 125.89, 134.88, 143.87, 152.86, 161.86, 171.21, 183.44, 195.67, 207.9, 220.12]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [157.36, 169.16, 180.96, 196.7, 208.5, 220.3, 236.04, 251.78, 267.51, 283.25, 299.61, 321.01, 342.42, 363.82, 385.22]
           },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
              },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
          },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
              }
                ] },
            {
                "name": "Jumpy Dumpty", "type": "skill", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Jumpy Dumpty", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [95.2, 102.34, 109.48, 119, 126.14, 133.28, 142.8, 152.32, 161.84, 171.36, 180.88, 190.4, 202.3, 214.2, 226.1]

                    },
                    {
                        "name": "Mine", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [32.8, 35.26, 37.72, 41, 43.46, 45.92, 49.2, 52.48, 55.76, 59.04, 62.32, 65.6, 69.7, 73.8, 77.9]

                    }
                ]
            },
            {
                "name": "Sparks 'n' Splash", "type": "burst", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Sparks 'n' Splash", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [42.64, 45.84, 49.04, 53.3, 56.5, 59.7, 63.96, 68.22, 72.49, 76.75, 81.02, 85.28, 90.61, 95.94, 101.27]

                    },
                    {
                        "name": "Chained Reactions", "req": { "type": "const", "val": 1, "subtype": "min" }, "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [51.168, 55.008, 58.848, 63.96, 67.8, 71.64, 76.752, 81.864, 86.988, 92.1, 97.224, 102.336, 108.732, 115.128, 121.524]

                    },
                    {
                        "name": "Sparkly Explosion", "req": { "type": "const", "val": 4, "subtype": "min" }, "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555]

                    }

                ]
            }
        ],
        "const": [
            {
                "name": "Chained Reactions",
                "desc": "Attacks and Skills have a certain chance to summon sparks that bombard enemies, dealing DMG equal to 120% of Sparks 'n' Splash's DMG."
            },
            {
                "name": "Explosive Frags",
                "desc": "Being hit by Jumpy Dumpty's mines decreases enemy DEF by 23% for 10s.",
                "apply": { "id": 25, "option": 0 }
            },
            {
                "name": "Exquisite Compound",
                "desc": "Increases the Level of Jumpy Dumpty by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Sparkly Explosion",
                "desc": "If Klee leaves the field during the duration of Sparks 'n' Splash, her departure triggers an explosion that deals 555% of her ATK as AoE Pyro DMG."
            },
            {
                "name": "Nova Burst",
                "desc": "Increases the Level of Sparks 'n' Splash by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Blazing Delight",
                "desc": "While under the effects of Sparks 'n' Splash, Klee will regenerate 3 Energy for all members of the party (excluding Klee) every 3s. When Sparks 'n' Splash is used, all party members will gain a 10% Pyro DMG Bonus for 25s.",
                "apply": { "id": 26, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "All Of My Treasures!",
                "desc": "Displays the location of nearby resources unique to Mondstadt on the mini-map.",
                "level": 0
            },
            {
                "name": "Pounding Surprise",
                "desc": "When Jumpy Dumpty and Normal Attacks deal DMG, Klee has a 50% chance to obtain an Explosive Spark. This Explosive Spark is consumed by the next Charged Attack, which costs no Stamina and deals 50% increased DMG.",
                "level": 2,
                "apply": { "id": 24, "option": 0 }
            },
            {
                "name": "Sparkling Burst",
                "desc": "When Klee's Charged Attack results in a CRIT, all party members gain 2 Elemental Energy.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "everflame_seed" },{ "type": "group", "id": "scroll" }, { "type": "item", "id": "philanemo_mushroom" }],
        "party_effects": [
            { "type": "apply", "id": 25, "option": 0, "desc": "Being hit by Jumpy Dumpty's mines decreases enemy DEF by 23% for 10s." },
            { "type": "apply", "id": 26, "option": 0, "desc": "While under the effects of Sparks 'n' Splash, Klee will regenerate 3 Energy for all members of the party (excluding Klee) every 3s. When Sparks 'n' Splash is used, all party members will gain a 10% Pyro DMG Bonus for 25s." }
        ]
    },
    "lisa": {
        "id": 11,
        "name": "Lisa",
        "weapon": "catalyst",
        "vision": "electro",
        "stats": [
            { "stat": "hp_base", "values": [802, 2061, 2661, 3985, 4411, 5074, 5642, 6305, 6731, 7393, 7818, 8481, 8907, 9570] },
            { "stat": "atk_base", "values": [19, 50, 64, 96, 107, 123, 136, 153, 163, 179, 189, 205, 215, 232] },
            { "stat": "def_base", "values": [48, 123, 159, 239, 264, 304, 338, 378, 403, 443, 468, 508, 534, 573] },
            { "stat": "elemastery", "values": [0, 0, 0, 0, 24, 24, 48, 48, 48, 48, 72, 72, 96, 96] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [39.6, 42.57, 45.54, 49.5, 52.47, 55.44, 59.4, 63.36, 67.32, 71.28, 75.4, 80.78, 86.17, 91.56, 96.94]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [35.92, 38.61, 41.31, 44.9, 47.59, 50.29, 53.88, 57.47, 61.06, 64.66, 68.39, 73.28, 78.16, 83.05, 87.93]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [42.8, 46.01, 49.22, 53.5, 56.71, 59.92, 64.2, 68.48, 72.76, 77.04, 81.49, 87.31, 93.13, 98.95, 104.77]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [54.96, 59.08, 63.2, 68.7, 72.82, 76.94, 82.44, 87.94, 93.43, 98.93, 104.64, 112.12, 119.59, 127.07, 134.54]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [177.12, 190.4, 203.69, 221.4, 234.68, 247.97, 265.68, 283.39, 301.1, 318.82, 337.24, 361.32, 385.41, 409.5, 433.59]
             },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
             },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
           },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
          }
                ]},
            {
                "name": "Violet Arc", "type": "skill", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Press", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [80, 86, 92, 100, 106, 112, 120, 128, 136, 144, 152, 160, 170, 180, 190]

                    },
                    {
                        "name": "Non-Conductive Hold", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [320, 344, 368, 400, 424, 448, 480, 512, 544, 576, 608, 640, 680, 720, 760]

                    },
                    {
                        "name": "Stack 1 Conductive Hold", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [368, 395.6, 423.2, 460, 487.6, 515.2, 552, 588.8, 625.6, 662.4, 699.2, 736, 782, 828, 874]

                    },
                    {
                        "name": "Stack 2 Conductive Hold", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [424, 455.8, 487.6, 530, 561.8, 593.6, 636, 678.4, 720.8, 763.2, 805.6, 848, 901, 954, 1007]

                    },
                    {
                        "name": "Stack 3 Conductive Hold", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [487.2, 523.74, 560.28, 609, 645.54, 682.08, 730.8, 779.52, 828.24, 876.96, 925.68, 974.4, 1035.3, 1096.2, 1157.1]

                    }
                ]
            },
            {
                "name": "Lightning Rose", "type": "burst", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Discharge", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [36.56, 39.3, 42.04, 45.7, 48.44, 51.18, 54.84, 58.5, 62.15, 65.81, 69.46, 73.12, 77.69, 82.26, 86.83]

                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Infinite Circuit",
                "desc": "Lisa regenerates 2 Energy for every opponent hit while holding Violet Arc. A maximum of 10 Energy can be regenerated in this manner at any one time."
            },
            {
                "name": "Electromagnetic Field",
                "desc": "Holding Violet Arc has the following effects:<br>Increases DEF by 25%.<br>Increases Lisa's resistance to interruption.",
                "apply": { "id": 28, "option": 0 }
            },
            {
                "name": "Resonant Thunder",
                "desc": "Increases the Level of Lightning Rose by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Plasma Eruption",
                "desc": "Increases the number of lightning bolts released by Lightning Rose by 1-3."
            },
            {
                "name": "Electrocute",
                "desc": "Increases the Level of Violet Arc by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Pulsating Witch",
                "desc": "When Lisa takes the field, she applies 3 stacks of Violet Arc's Conductive status onto nearby enemies. This effect can only occur once every 5s."
            }

        ],
        "passive": [
            {
                "name": "General Pharmaceutics",
                "desc": "When Lisa crafts a potion, she has a 20% chance to refund a portion of the crafting materials used.",
                "level": 0
            },
            {
                "name": "Induced Aftershock",
                "desc": "Hits by charged Attacks apply Violet Arc's Conductive status to enemies.",
                "level": 2
            },
            {
                "name": "Static Electricity Field",
                "desc": "Enemies hit by Lightning Rose have their DEF decreased by 15% for 10s.",
                "level": 8,
                "apply": { "id": 27, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "lightning_prism" },{ "type": "group", "id": "slime" }, { "type": "item", "id": "valberry" }],
        "party_effects": [
            { "type": "apply", "id": 27, "option": 0, "desc": "Enemies hit by Lightning Rose have their DEF decreased by 15% for 10s." }
        ]
    },
    "mona": {
        "id": 12,
        "name": "Mona",
        "weapon": "catalyst",
        "vision": "hydro",
        "stats": [
            { "stat": "hp_base", "values": [810, 2102, 2797, 4185, 4678, 5383, 6041, 6752, 7246, 7964, 8458, 9184, 9677, 10409] },
            { "stat": "atk_base", "values": [22, 58, 77, 115, 129, 148, 167, 186, 200, 220, 233, 253, 267, 287] },
            { "stat": "def_base", "values": [51, 132, 176, 263, 294, 338, 379, 424, 455, 500, 531, 576, 607, 653] },
            { "stat": "recharge", "values": [0, 0, 0, 0, 8, 8, 16, 16, 16, 16, 24, 24, 32, 32] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [37.6, 40.42, 43.24, 47, 49.82, 52.64, 56.4, 60.16, 63.92, 67.68, 71.44, 75.2, 79.9, 84.6, 89.3]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [36, 38.7, 41.4, 45, 47.7, 50.4, 54, 57.6, 61.2, 64.8, 68.4, 72, 76.5, 81, 85.5]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [44.8, 48.16, 51.52, 56, 59.36, 62.72, 67.2, 71.68, 76.16, 80.64, 85.12, 89.6, 95.2, 100.8, 106.4]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [56.16, 60.37, 64.58, 70.2, 74.41, 78.62, 84.24, 89.86, 95.47, 101.09, 106.7, 112.32, 119.34, 126.36, 133.38]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [149.72, 160.95, 172.18, 187.15, 198.38, 209.61, 224.58, 239.55, 254.52, 269.5, 285.07, 305.43, 325.79, 346.15, 366.51]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]

                    }
                ] },
            {
                "name": "Mirror Reflection of Doom", "type": "skill", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "DoT", "type": "skill", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [32, 34.4, 36.8, 40, 42.4, 44.8, 48, 51.2, 54.4, 57.6, 60.8, 64, 68, 72, 76]

                    },
                    {
                        "name": "Explosion", "type": "skill", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [132.8, 142.76, 152.72, 166, 175.96, 185.92, 199.2, 212.48, 225.76, 239.04, 252.32, 265.6, 282.2, 298.8, 315.4]

                    },
                    {
                        "name": "Come 'n' Get Me, Hag!", "req": { "type": "level", "val": 2, "subtype": "min" }, "type": "skill", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [66.4, 71.38, 76.36, 83, 87.98, 92.96, 99.6, 106.24, 112.88, 119.52, 126.16, 132.8, 141.1, 149.4, 157.7]

                    }]
                    },
            {
                "name": "Stellaris Phantasm", "type": "burst", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Illusory Bubble Explosion", "type": "burst", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [442.4, 475.58, 508.76, 553, 586.18, 619.36, 663.6, 707.84, 752.08, 796.32, 840.56, 884.8, 940.1, 995.4, 1050.7]

                    }

                ],
                "apply": { "id": 70 }
            }
        ],
        "const": [
            {
                "name": "Prophecy of Submersion",
                "desc": "When any of your own party members hits an opponent affected by an Omen, the effects of Hydro-related Elemental Reactions are enhanced for 8s:<br>Electro-Charged DMG increases by 15 %.<br>Vaporize DMG increases by 15 %.<br>Hydro Swirl DMG increases by 15 %.<br>Frozen duration is extended by 15 %.",
                "apply": { "id": 29, "option": 0 }
            },
            {
                "name": "Lunar Chain",
                "desc": "When a Normal Attack hits, there is a 20% chance that it will be automatically followed by a Charged Attack. This effect can only occur once every 5s."
            },
            {
                "name": "Restless Revolution",
                "desc": "Increases the Level of Stellaris Phantasm by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Prophecy of Oblivion",
                "desc": "When any party member attacks an opponent affected by an Omen, their CRIT Rate is increased by 15%.",
                "apply": { "id": 30, "option": 0 }
            },
            {
                "name": "Mockery of Fortuna",
                "desc": "Increases the Level of Mirror Reflection of Doom by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Rhetorics of Calamitas",
                "desc": "Upon entering Illusory Torrent, Mona gains a 60% increase to the DMG of her next Charged Attack per second of movement. A maximum DMG Bonus of 180% can be achieved in this manner.The effect lasts for no more than 8s.",
                "apply": { "id": 31, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Principium of Astrology",
                "desc": "When Mona crafts Weapon Ascension Materials, she has a 25% chance to refund a portion of the crafting materials used.",
                "level": 0
            },
            {
                "name": "Come 'n' Get Me, Hag!",
                "desc": "After she has used Illusory Torrent for 2s, if there are any enemies nearby, Mona will automatically create a Phantom. A Phantom created in this manner lasts for 2s, and its explosion DMG is equal to 50% of Mirror Reflection of Doom.",
                "level": 2
            },
            {
                "name": "Waterborne Destiny",
                "desc": "Increases Mona's Hydro DMG Bonus by a degree equivalent to 20% of her Energy Recharge rate.",
                "level": 8,
                "apply": { "id": 59, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "cleansing_heart" },{ "type": "group", "id": "nectar" }, { "type": "item", "id": "philanemo_mushroom" }],
        "party_effects": [
            { "type": "apply", "id": 70, "option": 0, "desc": "Stellaris Phantasm applies Omen, during its duration, increases DMG taken by opponents." },
            { "type": "apply", "id": 29, "option": 0, "desc": "When any of your own party members hits an opponent affected by an Omen, the effects of Hydro-related Elemental Reactions are enhanced for 8s:<br>Electro-Charged DMG increases by 15 %.<br>Vaporize DMG increases by 15 %.<br>Hydro Swirl DMG increases by 15 %.<br>Frozen duration is extended by 15 %." },
            { "type": "apply", "id": 30, "option": 0, "desc": "When any party member attacks an opponent affected by an Omen, their CRIT Rate is increased by 15%." }
        ]
    },
    "ningguang": {
        "id": 13,
        "name": "Ningguang",
        "weapon": "catalyst",
        "vision": "geo",
        "stats": [
            { "stat": "hp_base", "values": [821, 2108, 2721, 4076, 4512, 5189, 5770, 6448, 6884, 7561, 7996, 8674, 9110, 9787] },
            { "stat": "atk_base", "values": [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212] },
            { "stat": "def_base", "values": [48, 123, 159, 239, 264, 304, 338, 378, 403, 443, 468, 508, 534, 573] },
            { "stat": "geo", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Normal", "type": "normal", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [28, 30.1, 32.2, 35, 37.1, 39.2, 42, 44.8, 47.6, 50.4, 53.31, 57.12, 60.93, 64.74, 68.54]

                    },

                    
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [174.08, 187.14, 200.19, 217.6, 230.66, 243.71, 261.12, 278.53, 295.94, 313.34, 331.45, 355.12, 378.8, 402.47, 426.15]

                    },
                    {
                        "name": "Star Jade", "type": "normal", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [49.6, 53.32, 57.04, 62, 65.72, 69.44, 74.4, 79.36, 84.32, 89.28, 94.44, 101.18, 107.93, 114.68, 121.42]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]

                    }
                ] },
            {
                "name": "Jade Screen", "type": "skill", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Inherited HP", "type": "", "vision": "physical", "stat": "hp", "crit": false, "scale": [50.1, 53.1, 56.1, 60, 63, 66, 69.9, 73.8, 77.7, 81.6, 85.5, 89.4, 93.3, 97.2, 101.1]

                    },
                    {
                        "name": "Normal", "type": "skill", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [230.4, 247.68, 264.96, 288, 305.28, 322.56, 345.6, 368.64, 391.68, 414.72, 437.76, 460.8, 489.6, 518.4, 547.2]

                    }

                ]
            },
            {
                "name": "Starshatter", "type": "burst", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Per Gem", "type": "burst", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [86.96, 93.48, 100, 108.7, 115.22, 121.74, 130.44, 139.14, 147.83, 156.53, 165.22, 173.92, 184.79, 195.66, 206.53]

                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Piercing Fragments",
                "desc": "When a Normal Attack hits, it deals AoE DMG."
            },
            {
                "name": "Shock Effect",
                "desc": "When Jade Screen is shattered, its CD will reset. Can occur once every 6s."
            },
            {
                "name": "Majesty be the Array of Stars",
                "desc": "Increases the Level of Starshatter by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Exquisite be the Jade, Outshining All Beneath",
                "desc": "Jade Screen increases nearby characters' Elemental RES by 10%.",
                "apply": { "id": 33, "option": 0 }
            },
            {
                "name": "Invincible be the Jade Screen",
                "desc": "Increases the Level of Jade Screen by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Grandeur be the Seven Stars",
                "desc": "When Starshatter is used, Ningguang gains 7 Star Jades."
            }

        ],
        "passive": [
            {
                "name": "Trove of Marvelous Treasures",
                "desc": "Displays the location of nearby ore veins (Iron Ore, White Iron Ore, Crystal Ore, and Magical Crystal Ore) on the mini-map.",
                "level": 0
            },
            {
                "name": "Backup Plan",
                "desc": "When Ningguang is in possession of Star Jades, her Charged Attack does not consume Stamina.",
                "level": 2
            },
            {
                "name": "Strategic Reserve",
                "desc": "A character that passes through the Jade Screen will gain a 12% Geo DMG Bonus for 10s.",
                "level": 8,
                "apply": { "id": 32, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "basalt_pillar" },{ "type": "group", "id": "fatui_insignia" }, { "type": "item", "id": "glaze_lily" }],
        "party_effects": [
            { "type": "apply", "id": 32, "option": 0, "desc": "A character that passes through the Jade Screen will gain a 12% Geo DMG Bonus for 10s."},
            { "type": "apply", "id": 33, "option": 0, "desc": "Jade Screen increases nearby characters' Elemental RES by 10%." }
        ]
    },
    "noelle": {
        "id": 14,
        "name": "Noelle",
        "weapon": "claymore",
        "vision": "geo",
        "stats": [
            { "stat": "hp_base", "values": [1012, 2600, 3356, 5027, 5564, 6400, 7117, 7953, 8490, 9325, 9862, 10698, 11235, 12071] },
            { "stat": "atk_base", "values": [16, 41, 53, 80, 88, 101, 113, 126, 134, 148, 156, 169, 178, 191] },
            { "stat": "def_base", "values": [67, 172, 222, 333, 368, 423, 471, 526, 562, 617, 652, 708, 743, 799] },
            { "stat": "def%", "values": [0, 0, 0, 0, 7.5, 7.5, 15, 15, 15, 15, 22.5, 22.5, 30, 30] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [79.12, 85.56, 92, 101.2, 107.64, 115, 125.12, 135.24, 145.36, 156.4, 167.44, 178.48, 189.52, 200.56, 211.6]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [73.36, 79.33, 85.3, 93.83, 99.8, 106.63, 116.01, 125.39, 134.77, 145.01, 155.25, 165.48, 175.72, 185.95, 196.19]
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [86.26, 93.28, 100.3, 110.33, 117.35, 125.38, 136.41, 147.44, 158.47, 170.51, 182.55, 194.58, 206.62, 218.65, 230.69]
                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.43, 122.67, 131.9, 145.09, 154.32, 164.88, 179.38, 193.89, 208.4, 224.23, 240.06, 255.89, 271.71, 287.54, 303.37]
                    },
                    {
                        "name": "Charged Attack Spinning", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [50.74, 54.87, 59, 64.9, 69.03, 73.75, 80.24, 86.73, 93.22, 100.3, 107.38, 114.46, 121.54, 128.62, 135.7]
                    },
                    {
                        "name": "Charged Attack Final", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [90.47, 97.84, 105.2, 115.72, 123.08, 131.5, 143.07, 154.64, 166.22, 178.84, 191.46, 204.09, 216.71, 229.34, 241.96]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21]
                    }
                ] },
            {
                "name": "Breastplate", "type": "skill", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "geo", "stat": "def", "crit": true, "scale": [120, 129, 138, 150, 159, 168, 180, 192, 204, 216, 228, 240, 255, 270, 285]

                    },
                    {
                        "name": "Absorption", "type": "shield", "damage": false, "vision": "geo", "stat": "def", "crit": false, "scale": [160, 172, 184, 200, 212, 224, 240, 256, 272, 288, 304, 320, 340, 360, 380], "flat": [770, 847, 930, 1020, 1116, 1219, 1328, 1443, 1565, 1694, 1828, 1970, 2117, 2271, 2431]

                    },
                    {
                        "name": "Healing", "type": "healing", "damage": false, "vision": "geo", "stat": "def", "crit": false, "scale": [21.28, 22.88, 24.47, 26.6, 28.2, 29.79, 31.92, 34.05, 36.18, 38.3, 40.43, 42.56, 45.22, 47.88, 50.54], "flat": [103, 113, 124, 136, 149, 163, 177, 193, 209, 226, 244, 263, 282, 303, 324]


                    },
                    {
                        "name": "To Be Cleaned", "req": { "type": "const", "val": 4, "subtype": "min" }, "type": "skill", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400]

                    },

                ] },
            {
                "name": "Sweeping Time", "type": "burst", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Burst", "type": "burst", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [67.2, 72.24, 77.28, 84, 89.04, 94.08, 100.8, 107.52, 114.24, 120.96, 127.68, 134.4, 142.8, 151.2, 159.6],

                    },
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [92.8, 99.76, 106.72, 116, 122.96, 129.92, 139.2, 148.48, 157.76, 167.04, 176.32, 185.6, 197.2, 208.8, 220.4]

                    }],
                "apply": { "id": 61 }
            },
            {
                "name": "Devotion", "req": { "type": "level", "val": 2, "subtype": "min" }, "vision": "geo", "parts": [
                    {
                        "name": "Shield", "type": "shield", "damage": false, "vision": "geo", "stat": "def", "crit": false, "scale": [400]

                    }
                ]
            }
        ],
        "const": [
            {
                "name": "I Got Your Back",
                "desc": "While Sweeping Time and Breastplate are both in effect, the chance of Breastplate's healing effects activating is increased to 100%."
            },
            {
                "name": "Combat Maid",
                "desc": "Decreases the Stamina Consumption of Noelle's Charged Attacks by 20% and increases her Charged Attack DMG by 15%.",
                "bonus": [{ "stat": "charged", "value": 15 }]
            },
            {
                "name": "Invulnerable Maid",
                "desc": "Increases the Level of Breastplate by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "To Be Cleaned",
                "desc": "When Breastplate's duration expires or it is destroyed by DMG, it will deal 400% ATK of Geo DMG to surrounding enemies."
            },
            {
                "name": "Favonius Sweeper Master",
                "desc": "Increases the Level of Sweeping Time by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Must Be Spotless",
                "desc": "Sweeping Time increases Noelle's ATK by an additional 50% of her DEF. Additionally, every enemy defeated during the skill's duration adds 1s to the duration, up to 10s.",
                "apply": { "id": 60, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Maid's Knighthood",
                "desc": "When a Perfect Cooking is achieved on an DEF-boosting dish, Noelle has a 12% chance to obtain double the product.",
                "level": 0
            },
            {
                "name": "Devotion",
                "desc": "When Noelle is in the party but not on the field, this ability triggers automatically when your active character's HP falls below 30%:<br>Creates a shield for your active character that lasts for 20s and absorbs DMG equal to 400% of Noelle's DEF.<br>The shield has a 250% DMG Absorption effectiveness against Geo DMG.<br>This effect can only occur once every 60s.",
                "level": 2
            },
            {
                "name": "Nice and Clean",
                "desc": "Every 4 Normal or Charged Attack hits will decrease the CD of Breastplate by 1s. Hitting multiple enemies with a single attack is only counted as 1 hit.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "basalt_pillar" },{ "type": "group", "id": "mask" }, { "type": "item", "id": "valberry" }]
    },
    "qiqi": {
        "id": 15,
        "name": "Qiqi",
        "weapon": "sword",
        "vision": "cryo",
        "stats": [
            { "stat": "hp_base", "values": [963, 2498, 3323, 4973, 5559, 6396, 7178, 8023, 8610, 9463, 10050, 10912, 11499, 12368] },
            { "stat": "atk_base", "values": [22, 58, 77, 115, 129, 148, 167, 186, 200, 220, 233, 253, 267, 287] },
            { "stat": "def_base", "values": [72, 186, 248, 371, 415, 477, 535, 598, 642, 706, 749, 814, 857, 922] },
            { "stat": "healing", "values": [0, 0, 0, 0, 5.5, 5.5, 11.1, 11.1, 11.1, 11.1, 16.6, 16.6, 22.2, 22.2] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [37.75, 40.83, 43.9, 48.29, 51.36, 54.88, 59.7, 64.53, 69.36, 74.63, 79.9, 85.17, 90.43, 95.7, 100.97]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [38.87, 42.04, 45.2, 49.72, 52.88, 56.5, 61.47, 66.44, 71.42, 76.84, 82.26, 87.69, 93.11, 98.54, 103.96]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":2, "scale": [24.17, 26.13, 28.1, 30.91, 32.88, 35.13, 38.22, 41.31, 44.4, 47.77, 51.14, 54.51, 57.89, 61.26, 64.63]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":2,"scale": [24.68, 26.69, 28.7, 31.57, 33.58, 35.88, 39.03, 42.19, 45.35, 48.79, 52.23, 55.68, 59.12, 62.57, 66.01]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.04, 68.17, 73.3, 80.63, 85.76, 91.63, 99.69, 107.75, 115.81, 124.61, 133.41, 142.2, 151, 159.79, 168.59]
           },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":2, "scale": [64.33, 69.56, 74.8, 82.28, 87.52, 93.5, 101.73, 109.96, 118.18, 127.16, 136.14, 145.11, 154.09, 163.06, 172.04]
      },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
     },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
              },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
           }
                ]},
            {
                "name": "Adeptus Art - Herald of Frost", "type": "skill", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [96, 103.2, 110.4, 120, 127.2, 134.4, 144, 153.6, 163.2, 172.8, 182.4, 192, 204, 216, 228]

                    },
                    {
                        "name": "Regeneration on Hit", "type": "healing", "vision": "cryo", "stat": "atk", "crit": false, "scale": [10.56, 11.35, 12.14, 13.2, 13.99, 14.78, 15.84, 16.9, 17.95, 19.01, 20.06, 21.12, 22.44, 23.76, 25.08], "flat": [67, 74, 81, 89, 98, 107, 116, 126, 137, 148, 160, 172, 185, 199, 213]



                    },
                    {
                        "name": "Continuous Regeneration", "type": "healing", "vision": "cryo", "stat": "atk", "crit": false, "scale": [69.6, 74.82, 80.04, 87, 92.22, 97.44, 104.4, 111.36, 118.32, 125.28, 132.24, 139.2, 147.9, 156.6, 165.3], "flat": [451, 496, 544, 597, 653, 713, 777, 845, 916, 991, 1070, 1153, 1239, 1329, 1423]


                    },
                    {
                        "name": "Herald of Frost ", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [36, 38.7, 41.4, 45, 47.7, 50.4, 54, 57.6, 61.2, 64.8, 68.4, 72, 76.5, 81, 85.5]

                    }

                ]
            },
            {
                "name": "Adeptus Art - Preserver of Fortune", "type": "burst", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [284.8, 306.16, 327.52, 356, 377.36, 398.72, 427.2, 455.68, 484.16, 512.64, 541.12, 569.6, 605.2, 640.8, 676.4]

                    },
                    {
                        "name": "Regeneration on Hit", "type": "healing", "vision": "cryo", "stat": "atk", "crit": false, "scale": [90, 96.75, 103.5, 112.5, 119.25, 126, 135, 144, 153, 162, 171, 180, 191.25, 202.5, 213.75], "flat": [577, 635, 698, 765, 837, 914, 996, 1083, 1174, 1270, 1371, 1477, 1588, 1703, 1824]


                    }] }
        ],
        "const": [
            {
                "name": "Ascetics of Frost",
                "desc": "When the Herald of Frost hits an enemy marked by a Fortune-Preserving Talisman, Qiqi regenerates 2 Energy."
            },
            {
                "name": "Frozen to the Bone",
                "desc": "Qiqi's Normal and Charge Attack DMG against enemies affected by Cryo is increased by 15%.",
                "apply": { "id": 35, "option": 0 }
            },
            {
                "name": "Ascendant Praise",
                "desc": "Increases the Level of Adeptus Art: Preserver of Fortune by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Divine Suppression",
                "desc": "Targets marked by the Fortune-Preserving Talisman have their ATK decreased by 20%."
            },
            {
                "name": "Crimson Lotus Bloom",
                "desc": "Increases the Level of Adeptus Art: Herald of Frost by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Rite of Resurrection",
                "desc": "Using Adeptus Art: Preserver of Fortune revives all fallen party members nearby and regenerates 50% of their HP. This effect can only occur once every 15 mins."
            }

        ],
        "passive": [
            {
                "name": "Former Life Memories",
                "desc": "Displays the location of nearby resources unique to Liyue on the mini-map.",
                "level": 0
            },
            {
                "name": "Life-Prolonging Methods",
                "desc": "When a character under the effects of Adeptus Art: Herald of Frost triggers an Elemental Reaction, their Incoming Healing Bonus is increased by 20% for 8s.",
                "level": 2,
                "apply": { "id": 34, "option": 0 }
            },
            {
                "name": "A Glimpse into Arcanum",
                "desc": "When Qiqi hits enemies with her Normal and Charged Attacks, she has a 50% chance to apply a Fortune-Preserving Talisman to them for 6s. This effect can only occur once every 30s.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "hoarfrost_core" },{ "type": "group", "id": "scroll" }, { "type": "item", "id": "violetgrass" }],
        "party_effects": [
            { "type": "apply", "id": 34, "option": 0, "desc": "When a character under the effects of Adeptus Art: Herald of Frost triggers an Elemental Reaction, their Incoming Healing Bonus is increased by 20% for 8s." }
        ]
    },
    "razor": {
        "id": 16,
        "name": "Razor",
        "weapon": "claymore",
        "vision": "electro",
        "stats": [
            { "stat": "hp_base", "values": [1003, 2577, 3326, 4982, 5514, 6343, 7052, 7881, 8413, 9241, 9773, 10602, 11134, 11962] },
            { "stat": "atk_base", "values": [20, 50, 65, 97, 108, 124, 138, 154, 164, 180, 191, 207, 217, 234] },
            { "stat": "def_base", "values": [63, 162, 209, 313, 346, 398, 443, 495, 528, 580, 613, 665, 699, 751] },
            { "stat": "physical", "values": [0, 0, 0, 0, 7.5, 7.5, 15, 15, 15, 15, 22.5, 22.5, 30, 30] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [79.12, 85.56, 92, 101.2, 107.64, 115, 125.12, 135.24, 145.36, 156.4, 167.44, 178.48, 189.52, 200.56, 211.6]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [73.36, 79.33, 85.3, 93.83, 99.8, 106.63, 116.01, 125.39, 134.77, 145.01, 155.25, 165.48, 175.72, 185.95, 196.19]
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [86.26, 93.28, 100.3, 110.33, 117.35, 125.38, 136.41, 147.44, 158.47, 170.51, 182.55, 194.58, 206.62, 218.65, 230.69]
                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.43, 122.67, 131.9, 145.09, 154.32, 164.88, 179.38, 193.89, 208.4, 224.23, 240.06, 255.89, 271.71, 287.54, 303.37]
                    },
                    {
                        "name": "Lupus Fulguris", "req": { "type": "const", "val": 6, "subtype": "min" }, "type": false, "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
       },
                    {
                        "name": "Charged Attack Spinning", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [50.74, 54.87, 59, 64.9, 69.03, 73.75, 80.24, 86.73, 93.22, 100.3, 107.38, 114.46, 121.54, 128.62, 135.7]
                    },
                    {
                        "name": "Charged Attack Final", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [90.47, 97.84, 105.2, 115.72, 123.08, 131.5, 143.07, 154.64, 166.22, 178.84, 191.46, 204.09, 216.71, 229.34, 241.96]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21]
                    }
                ] },
            {
                "name": "Claw and Thunder", "type": "skill", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Press", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [199.2, 214.14, 229.08, 249, 263.94, 278.88, 298.8, 318.72, 338.64, 358.56, 378.48, 398.4, 423.3, 448.2, 473.1]

                    },
                    {
                        "name": "Hold", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [295.2, 317.34, 339.48, 369, 391.14, 413.28, 442.8, 472.32, 501.84, 531.36, 560.88, 590.4, 627.3, 664.2, 701.1]

                    }
                ]
            },
            {
                "name": "Lightning Fang", "type": "burst", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Activation", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [160, 172, 184, 200, 212, 224, 240, 256, 272, 288, 304, 320, 340, 360, 380]

                    }] }
        ],
        "const": [
            {
                "name": "Wolf's Instinct",
                "desc": "Picking up an Elemental Orb or Particle increases Razor's DMG by 10% for 8s.",
                "apply": { "id": 37, "option": 0 }
            },
            {
                "name": "Suppression",
                "desc": "Increases CRIT Rate against enemies with less than 30% HP by 10%.",
                "apply": { "id": 38, "option": 0 }
            },
            {
                "name": "Soul Companion",
                "desc": "Increases the Level of Lightning Fang by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Bite",
                "desc": "When casting Claw and Thunder (Press), enemies hit will have their DEF decreased by 15% for 7s.",
                "apply": { "id": 39, "option": 0 }
            },
            {
                "name": "Sharpened Claws",
                "desc": "Increases the Level of Claw and Thunder by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Lupus Fulguris",
                "desc": "Every 10s, Razor's sword charges up, causing the next Normal Attack to release lightning that deals 100% of Razor's ATK as Electro DMG. When Razor is not using Lightning Fang, a lightning strike on an enemy will grant Razor an Electro Sigil for Claw and Thunder."
            }

        ],
        "passive": [
            {
                "name": "Wolvensprint",
                "desc": "Decreases sprinting Stamina consumption for your own party members by 20%. Not stackable with Passive Talents that provide the exact same effects.",
                "level": 0
            },
            {
                "name": "Awakening",
                "desc": "Decreases Claw and Thunder's CD by 18%. Using Lightning Fang resets the CD of Claw and Thunder.",
                "level": 2
            },
            {
                "name": "Hunger",
                "desc": "When Razor's Energy is below 50%, increases Energy Recharge by 30%.",
                "level": 8,
                "apply": { "id": 36, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "lightning_prism" },{ "type": "group", "id": "mask" }, { "type": "item", "id": "wolfhook" }],
        "party_effects": [
            { "type": "apply", "id": 39, "option": 0, "desc": "When casting Claw and Thunder (Press), enemies hit will have their DEF decreased by 15% for 7s." }
        ]
    },
    "sucrose": {
        "id": 17,
        "name": "Sucrose",
        "weapon": "catalyst",
        "vision": "anemo",
        "stats": [
            { "stat": "hp_base", "values": [775, 1991, 2570, 3850, 4261, 4901, 5450, 6090, 6501, 7141, 7552, 8192, 8604, 9244] },
            { "stat": "atk_base", "values": [14, 37, 47, 71, 78, 90, 100, 112, 120, 131, 139, 151, 158, 170] },
            { "stat": "def_base", "values": [59, 151, 195, 293, 324, 373, 414, 463, 494, 543, 574, 623, 654, 703] },
            { "stat": "anemo", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [33.46, 35.97, 38.48, 41.83, 44.34, 46.85, 50.2, 53.54, 56.89, 60.24, 63.58, 66.93, 71.11, 75.29, 79.48]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [30.62, 32.91, 35.21, 38.27, 40.57, 42.86, 45.92, 48.99, 52.05, 55.11, 58.17, 61.23, 65.06, 68.89, 72.71]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [38.45, 41.33, 44.22, 48.06, 50.94, 53.83, 57.67, 61.52, 65.36, 69.21, 73.05, 76.9, 81.7, 86.51, 91.31]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [47.92, 51.51, 55.11, 59.9, 63.49, 67.08, 71.88, 76.67, 81.46, 86.25, 91.04, 95.84, 101.82, 107.81, 113.8]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [120.16, 129.17, 138.18, 150.2, 159.21, 168.22, 180.24, 192.26, 204.27, 216.29, 228.3, 240.32, 255.34, 270.36, 285.38]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]

                    }
                ]},
            {
                "name": "Astable Anemohypostasis Creation - 6308", "type": "skill", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [211.2, 227.04, 242.88, 264, 279.84, 295.68, 316.8, 337.92, 359.04, 380.16, 401.28, 422.4, 448.8, 475.2, 501.6]

                    }

                ]
            },
            {
                "name": "Forbidden Creation - Isomer 75 / Type II", "type": "burst", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "DoT", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [148, 159.1, 170.2, 185, 196.1, 207.2, 222, 236.8, 251.6, 266.4, 281.2, 296, 314.5, 333, 351.5]

                    },
                    {
                        "name": "Additional Elemental", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [44, 47.3, 50.6, 55, 58.3, 61.6, 66, 70.4, 74.8, 79.2, 83.6, 88, 93.5, 99, 104.5]

                    }

                ] }
        ],
        "const": [
            {
                "name": "Clustered Vacuum Field",
                "desc": "Astable Anemohypostasis Creation - 6308 gains 1 additional charge."
            },
            {
                "name": "Beth: Unbound Form",
                "desc": "The duration of Forbidden Creation - Isomer 75 / Type II is increased by 2s."
            },
            {
                "name": "Flawless Alchemistress",
                "desc": "Increases the Level of Astable Anemohypostasis Creation - 6308 by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Alchemania",
                "desc": "Every 7 Normal and Charged Attacks, Sucrose will reduce the CD of Astable Anemohypostasis Creation - 6308 by 1-7s."
            },
            {
                "name": "Caution: Standard Flask",
                "desc": "Increases the Level of Forbidden Creation - Isomer 75 / Type II by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Chaotic Entropy",
                "desc": "If Forbidden Creation - Isomer 75 / Type II triggers an Elemental Absorption, all party members gain a 20% Elemental DMG Bonus for the corresponding absorbed element during its duration.",
                "apply": { "id": 41, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Astable Invention",
                "desc": "When Sucrose crafts Character and Weapon Enhancement Materials, she has a 10% to obtain double the product.",
                "level": 0
            },
            {
                "name": "Catalyst Conversion",
                "desc": "When Sucrose triggers a Swirl reaction, all characters in the party with the matching element (excluding Sucrose) have their Elemental Mastery increased by 50 for 8s.",
                "level": 2,
                "apply": { "id": 40, "option": 0 }
            },
            {
                "name": "Mollis Favonius",
                "desc": "When Astable Anemohypostasis Creation - 6308 or Forbidden Creation - Isomer 75 / Type II hit an opponent, increases all party members' (excluding Sucrose) Elemental Mastery by an amount equal to 20% of Sucrose's Elemental Mastery for 8s.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "hurricane_seed" },{ "type": "group", "id": "nectar" }, { "type": "item", "id": "windwheel_aster" }],
        "party_effects": [
            {"type":"stat", "id":"sucroseelemastery"},
            { "type": "apply", "id": 66, "option": 0, "desc": "When Astable Anemohypostasis Creation - 6308 or Forbidden Creation - Isomer 75 / Type II hit an opponent, increases all party members' (excluding Sucrose) Elemental Mastery by an amount equal to 20% of Sucrose's Elemental Mastery for 8s." },
            { "type": "apply", "id": 40, "option": 0, "desc": "When Sucrose triggers a Swirl reaction, all characters in the party with the matching element (excluding Sucrose) have their Elemental Mastery increased by 50 for 8s." },
            { "type": "apply", "id": 41, "option": 0, "desc": "If Forbidden Creation - Isomer 75 / Type II triggers an Elemental Absorption, all party members gain a 20% Elemental DMG Bonus for the corresponding absorbed element during its duration." }
        ]
    },
    "traveler_anemo": {
        "id": 18,
        "name": "Traveler (Anemo)",
        "short_name": "Traveler",
        "weapon": "sword",
        "vision": "anemo",
        "stats": [
            { "stat": "hp_base", "values": [912, 2342, 3024, 4529, 5013, 5766, 6411, 7164, 7648, 8401, 8885, 9638, 10122, 10875] },
            { "stat": "atk_base", "values": [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212] },
            { "stat": "def_base", "values": [57, 147, 190, 284, 315, 362, 402, 450, 480, 527, 558, 605, 635, 683] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [44.46, 48.08, 51.7, 56.87, 60.49, 64.63, 70.31, 76, 81.69, 87.89, 94.09, 100.3, 106.5, 112.71, 118.91]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.43, 46.97, 50.5, 55.55, 59.09, 63.13, 68.68, 74.23, 79.79, 85.85, 91.91, 97.97, 104.03, 110.09, 116.15]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [52.98, 57.29, 61.6, 67.76, 72.07, 77, 83.78, 90.55, 97.33, 104.72, 112.11, 119.5, 126.9, 134.29, 141.68]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [58.31, 63.05, 67.8, 74.58, 79.33, 84.75, 92.21, 99.67, 107.12, 115.26, 123.4, 131.53, 139.67, 147.8, 155.94]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [70.78, 76.54, 82.3, 90.53, 96.29, 102.88, 111.93, 120.98, 130.03, 139.91, 149.79, 159.66, 169.54, 179.41, 189.29]

                    },
                    {
                        "name": "Slitting Wind", "req": { "type": "level", "val": 2, "subtype": "min" }, "type": "normal", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [116.62, 126.11, 135.6, 149.16, 158.65, 169.5, 184.42, 199.33, 214.25, 230.52, 246.79, 263.06, 279.34, 295.61, 311.88]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
         },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ] },
            {
                "name": "Palm Vortex", "type": "skill", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "Initial Cutting", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [12, 12.9, 13.8, 15, 15.9, 16.8, 18, 19.2, 20.4, 21.6, 22.8, 24, 25.5, 27, 28.5]

                    },
                    {
                        "name": "Max Cutting", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [16.8, 18.06, 19.32, 21, 22.26, 23.52, 25.2, 26.88, 28.56, 30.24, 31.92, 33.6, 35.7, 37.8, 39.9]

                    },
                    {
                        "name": "Initial Storm", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [176, 189.2, 202.4, 220, 233.2, 246.4, 264, 281.6, 299.2, 316.8, 334.4, 352, 374, 396, 418]

                    },
                    {
                        "name": "Max Storm", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [192, 206.4, 220.8, 240, 254.4, 268.8, 288, 307.2, 326.4, 345.6, 364.8, 384, 408, 432, 456]

                    },

                ] },
            {
                "name": "Gust Surge", "type": "burst", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "Tornado", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [80.8, 86.86, 92.92, 101, 107.06, 113.12, 121.2, 129.28, 137.36, 145.44, 153.52, 161.6, 171.7, 181.8, 191.9]

                    },
                    {
                        "name": "Additional Elemental", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [24.8, 26.66, 28.52, 31, 32.86, 34.72, 37.2, 39.68, 42.16, 44.64, 47.12, 49.6, 52.7, 55.8, 58.9]

                    }

                ]}
        ],
        "const": [
            {
                "name": "Raging Vortex",
                "desc": "Palm Vortex pulls in enemies within a 5m radius."
            },
            {
                "name": "Uprising Whirlwind",
                "desc": "Increases Energy Recharge by 16%.",
                "bonus": [{ "stat": "recharge", "value": 16 }]
            },
            {
                "name": "Sweeping Gust",
                "desc": "Increases the Level of Gust Surge by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Cherishing Breezes",
                "desc": "Reduces DMG taken while casting Palm Vortex by 10%."
            },
            {
                "name": "Vortex Stellaris",
                "desc": "Increases the Level of Palm Vortex by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Intertwined Winds",
                "desc": "Targets who take DMG from Gust Surge have their Anemo RES decreased by 20%. If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.",
                "apply": { "id": 42, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Slitting Wind",
                "desc": "The last hit of a Normal Attack combo unleashes a wind blade, dealing 60% of ATK as Anemo DMG to all opponents in its path.",
                "level": 2
            },
            {
                "name": "Second Wind",
                "desc": "Palm Vortex kills regenerate 2% HP for 5s. This effect can only occur once every 5s.",
                "level": 8
            }
        ],
        "ascension_special": true,
        "ascension": [{ "type": "group", "id": "brilliant_diamond" }, { "type": "blank" }, { "type": "group", "id": "mask" }, { "type": "item", "id": "windwheel_aster" }],
        "party_effects": [
            { "type": "apply", "id": 42, "option": 0, "desc": "Targets who take DMG from Gust Surge have their Anemo RES decreased by 20%. If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%." }
        ]
    },
    "traveler_geo": {
        "id": 19,
        "name": "Traveler (Geo)",
        "short_name": "Traveler",
        "weapon": "sword",
        "vision": "geo",
        "stats": [
            { "stat": "hp_base", "values": [912, 2342, 3024, 4529, 5013, 5766, 6411, 7164, 7648, 8401, 8885, 9638, 10122, 10875] },
            { "stat": "atk_base", "values": [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212] },
            { "stat": "def_base", "values": [57, 147, 190, 284, 315, 362, 402, 450, 480, 527, 558, 605, 635, 683] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [44.46, 48.08, 51.7, 56.87, 60.49, 64.63, 70.31, 76, 81.69, 87.89, 94.09, 100.3, 106.5, 112.71, 118.91]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.43, 46.97, 50.5, 55.55, 59.09, 63.13, 68.68, 74.23, 79.79, 85.85, 91.91, 97.97, 104.03, 110.09, 116.15]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [52.98, 57.29, 61.6, 67.76, 72.07, 77, 83.78, 90.55, 97.33, 104.72, 112.11, 119.5, 126.9, 134.29, 141.68]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [58.31, 63.05, 67.8, 74.58, 79.33, 84.75, 92.21, 99.67, 107.12, 115.26, 123.4, 131.53, 139.67, 147.8, 155.94]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [70.78, 76.54, 82.3, 90.53, 96.29, 102.88, 111.93, 120.98, 130.03, 139.91, 149.79, 159.66, 169.54, 179.41, 189.29]

                    },
                    {
                        "name": "Frenzied Rockslide", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "normal", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [116.62, 126.11, 135.6, 149.16, 158.65, 169.5, 184.42, 199.33, 214.25, 230.52, 246.79, 263.06, 279.34, 295.61, 311.88]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ]},
            {
                "name": "Starfell Sword", "type": "skill", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [248, 266.6, 285.2, 310, 328.6, 347.2, 372, 396.8, 421.6, 446.4, 471.2, 496, 527, 558, 589]

                    }] },
            {
                "name": "Wake of Earth", "type": "burst", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Per Shockwave", "type": "burst", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [148, 159.1, 170.2, 185, 196.1, 207.2, 222, 236.8, 251.6, 266.4, 281.2, 296, 314.5, 333, 351.5]

                    }] }
        ],
        "const": [
            {
                "name": "Invincible Stonewall",
                "desc": "Allies within the radius of Wake of Earth have their CRIT Rate increased by 10% and have increased resistance against interruption.",
                "apply": { "id": 43, "option": 0 }
            },
            {
                "name": "Rockcore Meltdown",
                "desc": "When the meteorite created by Starfell Sword is destroyed, it will also explode, dealing additional AoE Geo DMG equal to the amount of damage dealt by Starfell Sword."
            },
            {
                "name": "Will of the Rock",
                "desc": "Increases the Level of Wake of Earth by 3. ",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Reaction Force",
                "desc": "The shockwave triggered by Wake of Earth regenerates 5 Energy for every enemy hit. A maximum of 25 Energy can be regenerated in this manner at any one time."
            },
            {
                "name": "Meteorite Impact",
                "desc": "Increases the Level of Starfell Sword by 3. ",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Everlasting Boulder",
                "desc": "The barrier created by Wake of Earth lasts 5s longer. The meteorite created by Starfell Sword lasts 10s longer."
            }

        ],
        "passive": [
            {
                "name": "Shattered Darkrock",
                "desc": "Reduces Starfell Sword's CD by 2s.",
                "level": 2
            },
            {
                "name": "Frenzied Rockslide",
                "desc": "The final hit of a Normal Attack combo triggers a collapse, dealing 60% of ATK as AoE Geo DMG.",
                "level": 8
            }
        ],
        "ascension_special": true,
        "ascension": [{ "type": "group", "id": "brilliant_diamond" }, { "type": "blank" }, { "type": "group", "id": "mask" }, { "type": "item", "id": "windwheel_aster" }],
        "party_effects": [
            { "type": "apply", "id": 43, "option": 0, "desc": "Allies within the radius of Wake of Earth have their CRIT Rate increased by 10% and have increased resistance against interruption." }
        ]
    },
    "venti": {
        "id": 20,
        "name": "Venti",
        "weapon": "bow",
        "vision": "anemo",
        "stats": [
            { "stat": "hp_base", "values": [820, 2127, 2830, 4234, 4734, 5446, 6112, 6832, 7331, 8058, 8557, 9292, 9791, 10531] },
            { "stat": "atk_base", "values": [20, 53, 71, 106, 118, 136, 153, 171, 183, 201, 214, 232, 245, 263] },
            { "stat": "def_base", "values": [52, 135, 180, 269, 301, 346, 388, 434, 465, 512, 543, 590, 622, 669] },
            { "stat": "recharge", "values": [0, 0, 0, 0, 8, 8, 16, 16, 16, 16, 24, 24, 32, 32] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical",
                "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":2, "scale": [20.38, 22.04, 23.7, 26.07, 27.73, 29.63, 32.23, 34.84, 37.45, 40.29, 43.55, 47.38, 51.21, 55.05, 59.23]
  },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [44.38, 47.99, 51.6, 56.76, 60.37, 64.5, 70.18, 75.85, 81.53, 87.72, 94.82, 103.16, 111.5, 119.85, 128.95]
            },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [52.37, 56.64, 60.9, 66.99, 71.25, 76.13, 82.82, 89.52, 96.22, 103.53, 111.9, 121.75, 131.6, 141.45, 152.19]
        },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":2, "scale": [26.06, 28.18, 30.3, 33.33, 35.45, 37.87, 41.21, 44.54, 47.87, 51.51, 55.68, 60.58, 65.48, 70.37, 75.72]
      },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [50.65, 54.78, 58.9, 64.79, 68.91, 73.63, 80.1, 86.58, 93.06, 100.13, 108.23, 117.75, 127.28, 136.8, 147.19]
       },
                    {
                        "name": "6-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [70.95, 76.73, 82.5, 90.75, 96.53, 103.13, 112.2, 121.28, 130.35, 140.25, 151.59, 164.93, 178.27, 191.61, 206.17]
            },
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 93.71, 101.96, 110.21, 118.45, 127.45]
                    },
                    {
                        "name": "Aimed Shot - Splitting Gales", "req": { "type": "const", "val": 1, "subtype": "min" }, "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits": 2, "scale": [14.4738, 15.6519, 16.83, 18.513, 19.6911, 21.0375, 22.8888, 24.7401, 26.5914, 28.611, 30.9243, 33.6468, 36.3693, 39.0885, 42.0585]
           },
                    {
                        "name": "Fully-Charged Aimed Shot", "type": "charged", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 236.1, 252.96, 269.82, 286.69, 303.55]
                    },
                    {
                        "name": "Fully-Charged Aimed Shot - Splitting Gales", "req": { "type": "const", "val": 1, "subtype": "min" }, "type": "charged", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "hits": 2, "scale": [40.92, 43.989, 47.058, 51.15, 54.219, 57.288, 61.38, 65.472, 69.564, 73.656, 77.913, 83.4768, 89.0406, 94.6077, 100.1715]
       },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
                    },
                ]},
            {
                "name": "Skyward Sonnet", "type": "skill", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "Press", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [276, 296.7, 317.4, 345, 365.7, 386.4, 414, 441.6, 469.2, 496.8, 524.4, 552, 586.5, 621, 655.5]

                    },
                    {
                        "name": "Hold", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [380, 408.5, 437, 475, 503.5, 532, 570, 608, 646, 684, 722, 760, 807.5, 855, 902.5]

                    }]
            },
            {
                "name": "Wind's Grand Ode", "type": "burst", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "DoT", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [37.6, 40.42, 43.24, 47, 49.82, 52.64, 56.4, 60.16, 63.92, 67.68, 71.44, 75.2, 79.9, 84.6, 89.3]

                    },
                    {
                        "name": "Additional Elemental", "burst": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [18.8, 20.21, 21.62, 23.5, 24.91, 26.32, 28.2, 30.08, 31.96, 33.84, 35.72, 37.6, 39.95, 42.3, 44.65]

                    }

                ] }
        ],
        "const": [
            {
                "name": "Splitting Gales",
                "desc": "Fires 2 additional arrows per Aimed Shot, each dealing 33% of the original arrow's DMG."
            },
            {
                "name": "Breeze of Reminiscence",
                "desc": "Skyward Sonnet decreases enemy Anemo RES and Physical RES by 12% for 10s. Enemies launched by Skyward Sonnet suffer an additional 12% Anemo RES and Physical RES decrease while airborne.",
                "apply": { "id": 44, "option": 0 }
            },
            {
                "name": "Ode to Thousand Winds",
                "desc": "Increases the Level of Wind's Grand Ode by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Hurricane of Freedom",
                "desc": "When Venti picks up an Elemental Orb or Particle, he receives a 25% Anemo DMG Bonus for 10s.",
                "apply": { "id": 45, "option": 0 }
            },
            {
                "name": "Concerto dal Cielo",
                "desc": "Increases the Level of Skyward Sonnet by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Storm of Defiance",
                "desc": "Targets who take DMG from Wind's Grand Ode have their Anemo RES decreased by 20%. If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.",
                "apply": { "id": 46, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Windrider",
                "desc": "Decreases gliding Stamina consumption for your own party members by 20%. Not stackable with Passive Talents that provide the exact same effects.",
                "level": 0
            },
            {
                "name": "Embrace of Winds",
                "desc": "Holding Skyward Sonnet creates an upcurrent that lasts for 20s.",
                "level": 2
            },
            {
                "name": "Stormeye",
                "desc": "Regenerates 15 Energy for Venti after the effects of Wind's Grand Ode end. If an Elemental Absorption occurred, this also restores 15 Energy to all characters of that corresponding element in the party.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "hurricane_seed" },{ "type": "group", "id": "slime" }, { "type": "item", "id": "cecilia" }],
        "party_effects": [
            { "type": "apply", "id": 44, "option": 0, "desc": "Skyward Sonnet decreases enemy Anemo RES and Physical RES by 12% for 10s. Enemies launched by Skyward Sonnet suffer an additional 12% Anemo RES and Physical RES decrease while airborne." },
            { "type": "apply", "id": 46, "option": 0, "desc": "Targets who take DMG from Wind's Grand Ode have their Anemo RES decreased by 20%. If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%." }
        ]
    },
    "xiangling": {
        "id": 21,
        "name": "Xiangling",
        "weapon": "polearm",
        "vision": "pyro",
        "stats": [
            { "stat": "hp_base", "values": [912, 2342, 3024, 4529, 5013, 5766, 6411, 7164, 7648, 8401, 8885, 9638, 10122, 10875] },
            { "stat": "atk_base", "values": [19, 48, 63, 94, 104, 119, 133, 148, 158, 174, 184, 200, 210, 225] },
            { "stat": "def_base", "values": [56, 144, 186, 279, 308, 355, 394, 441, 470, 517, 546, 593, 623, 669] },
            { "stat": "elemastery", "values": [0, 0, 0, 0, 24, 24, 48, 48, 48, 48, 72, 72, 96, 96] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [42.05, 45.48, 48.9, 53.79, 57.21, 61.13, 66.5, 71.88, 77.26, 83.13, 89.85, 97.76, 105.67, 113.58, 122.2]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [42.14, 45.57, 49, 53.9, 57.33, 61.25, 66.64, 72.03, 77.42, 83.3, 90.04, 97.96, 105.88, 113.81, 122.45]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":2,"scale": [26.06, 28.18, 30.3, 33.33, 35.45, 37.87, 41.21, 44.54, 47.87, 51.51, 55.68, 60.58, 65.48, 70.37, 75.72]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":4,"scale": [14.1, 15.25, 16.4, 18.04, 19.19, 20.5, 22.3, 24.11, 25.91, 27.88, 30.14, 32.79, 35.44, 38.09, 40.98]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [71.04, 76.82, 82.6, 90.86, 96.64, 103.25, 112.34, 121.42, 130.51, 140.42, 151.78, 165.13, 178.49, 191.85, 206.42]

                    },
                    {
                        "name": "Oil Meets Fire", "req": { "type": "const", "val": 2, "subtype": "min" }, "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [121.69, 131.6, 141.5, 155.65, 165.56, 176.88, 192.44, 208.01, 223.57, 240.55, 260.01, 282.89, 305.77, 328.65, 353.61]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true,  "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
        },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
         },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ] },
            {
                "name": "Guoba Attack", "type": "skill", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Flame", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [111.28, 119.63, 127.97, 139.1, 147.45, 155.79, 166.92, 178.05, 189.18, 200.3, 211.43, 222.56, 236.47, 250.38, 264.29]

                    }] },
            {
                "name": "Pyronado", "type": "burst", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "1-Hit Swing", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [72, 77.4, 82.8, 90, 95.4, 100.8, 108, 115.2, 122.4, 129.6, 136.8, 144, 153, 162, 171]

                    },
                    {
                        "name": "2-Hit Swing", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [88, 94.6, 101.2, 110, 116.6, 123.2, 132, 140.8, 149.6, 158.4, 167.2, 176, 187, 198, 209]

                    },
                    {
                        "name": "3-Hit Swing", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [109.6, 117.82, 126.04, 137, 145.22, 153.44, 164.4, 175.36, 186.32, 197.28, 208.24, 219.2, 232.9, 246.6, 260.3]

                    },
                    {
                        "name": "Pyronado", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [112, 120.4, 128.8, 140, 148.4, 156.8, 168, 179.2, 190.4, 201.6, 212.8, 224, 238, 252, 266]

                    }

                ]
            }
        ],
        "const": [
            {
                "name": "Crispy Outside, Tender Inside",
                "desc": "Enemies hit by Guoba's attacks have their Pyro RES reduced by 15% for 6s.",
                "apply": { "id": 47, "option": 0 }
            },
            {
                "name": "Oil Meets Fire",
                "desc": "The last attack in a Normal Attack sequence applies the Implode status onto the enemy for 2s. An explosion will occur once this duration ends, dealing 75% of Xiangling's ATK as AoE Pyro DMG."
            },
            {
                "name": "Deepfry",
                "desc": "Increases the Level of Pyronado by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Slowbake",
                "desc": "Pyronado's duration is increased by 40%."
            },
            {
                "name": "Guoba Mad",
                "desc": "Increases the Level of Guoba Attack by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Condensed Pyronado",
                "desc": "For the duration of Pyronado, all party members receive a 15% Pyro DMG Bonus.",
                "apply": { "id": 48, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Chef de Cuisine",
                "desc": "When Xiangling cooks an ATK-boosting dish perfectly, she has a 12% chance to receive double the product.",
                "level": 0
            },
            {
                "name": "Crossfire",
                "desc": "Increases the flame range of Guoba by 20%.",
                "level": 2
            },
            {
                "name": "Beware, It's Super Hot!",
                "desc": "When Guoba Attack's effect ends, Guoba leaves a chili pepper on the spot where it disappeared. Picking up a chili pepper increases ATK by 10% for 10s.",
                "level": 8,
                "apply": { "id": 49, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "everflame_seed" },{ "type": "group", "id": "slime" }, { "type": "item", "id": "jueyun_chili" }],
        "party_effects": [
            { "type": "apply", "id": 47, "option": 0, "desc": "Enemies hit by Guoba's attacks have their Pyro RES reduced by 15% for 6s." },
            { "type": "apply", "id": 48, "option": 0, "desc": "For the duration of Pyronado, all party members receive a 15% Pyro DMG Bonus." },
            { "type": "apply", "id": 49, "option": 0, "desc": "When Guoba Attack's effect ends, Guoba leaves a chili pepper on the spot where it disappeared. Picking up a chili pepper increases ATK by 10% for 10s." }
        ]
    },
    "xingqiu": {
        "id": 22,
        "name": "Xingqiu",
        "weapon": "sword",
        "vision": "hydro",
        "stats": [
            { "stat": "hp_base", "values": [857, 2202, 2842, 4257, 4712, 5420, 6027, 6735, 7190, 7897, 8352, 9060, 9514, 10222] },
            { "stat": "atk_base", "values": [17, 43, 56, 84, 93, 107, 119, 133, 142, 156, 165, 179, 188, 202] },
            { "stat": "def_base", "values": [64, 163, 211, 316, 349, 402, 447, 499, 533, 585, 619, 671, 705, 758] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [46.61, 50.41, 54.2, 59.62, 63.41, 67.75, 73.71, 79.67, 85.64, 92.14, 99.59, 108.36, 117.12, 125.88, 135.45]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [47.64, 51.52, 55.4, 60.94, 64.82, 69.25, 75.34, 81.44, 87.53, 94.18, 101.8, 110.76, 119.71, 128.67, 138.44]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":2, "scale": [28.55, 30.88, 33.2, 36.52, 38.84, 41.5, 45.15, 48.8, 52.46, 56.44, 61.01, 66.37, 71.74, 77.11, 82.97]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [55.99, 60.54, 65.1, 71.61, 76.17, 81.38, 88.54, 95.7, 102.86, 110.67, 119.62, 130.15, 140.67, 151.2, 162.68]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":2,"scale": [35.86, 38.78, 41.7, 45.87, 48.79, 52.13, 56.71, 61.3, 65.89, 70.89, 76.62, 83.37, 90.11, 96.85, 104.21]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[47.3, 56.16], [51.15, 60.73], [55, 65.3], [60.5, 71.83], [64.35, 76.4], [68.75, 81.63], [74.8, 88.81], [80.85, 95.99], [86.9, 103.17], [93.5, 111.01], [101.06, 119.99], [109.96, 130.55], [118.85, 141.11], [127.74, 151.67], [137.45, 163.18]]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ] },
            {
                "name": "Guhua Sword - Fatal Rainscreen", "type": "skill", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [[168, 191.2], [180.6, 205.54], [193.2, 219.88], [210, 239], [222.6, 253.34], [235.2, 267.68], [252, 286.8], [268.8, 305.92], [285.6, 325.04], [302.4, 344.16], [319.2, 363.28], [336, 382.4], [357, 406.3], [378, 430.2], [399, 454.1]]

                    },
                    {
                        "name": "Evilsoother", "req": { "type": "const", "val": 4, "subtype": "min" }, "type": "skill", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [[252, 286.8], [270.9, 308.31], [289.8, 329.82], [315, 358.5], [333.9, 380.01], [352.8, 401.52], [378, 430.2], [403.2, 458.88], [428.4, 487.56], [453.6, 516.24], [478.8, 544.92], [504, 573.6], [535.5, 609.45], [567, 645.3], [598.5, 681.15]]

                    }

                ]
            },
            {
                "name": "Guhua Sword - Raincutter", "type": "burst", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Sword Rain", "type": "burst", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [54.27, 58.34, 62.41, 67.84, 71.91, 75.98, 81.41, 86.84, 92.26, 97.69, 103.12, 108.54, 115.33, 122.11, 128.9]

                    },
                    {
                        "name": "Hydropathic", "req": { "type": "level", "val": 2, "subtype": "min" }, "type": "healing", "vision": "hydro", "stat": "hp", "crit": false, "scale": [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]

                    }
                ]
            }
        ],
        "const": [
            {
                "name": "The Scent Remained",
                "desc": "Increases the maximum number of Rain Swords by 1."
            },
            {
                "name": "Rainbow Upon the Azure Sky",
                "desc": "Extends the duration of Guhua Sword: Raincutter by 3s. Decreases the Hydro RES of enemies hit by sword rain attacks by 15% for 4s.",
                "apply": { "id": 50, "option": 0 }
            },
            {
                "name": "Weaver of Verses",
                "desc": "Increases the Level of Guhua Sword: Raincutter by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Evilsoother",
                "desc": "Throughout the duration of Guhua Sword: Raincutter, the DMG dealt by Guhua Sword: Fatal Rainscreen is increased by 50%."
            },
            {
                "name": "Embrace of Rain",
                "desc": "Increases the Level of Guhua Sword: Fatal Rainscreen by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Hence, Call Them My Own Verses",
                "desc": "Activating 2 of Guhua Sword: Raincutter's sword rain attacks greatly increases the DMG of the third. Xingqiu regenerates 3 Energy when sword rain attacks hit enemies."
            }

        ],
        "passive": [
            {
                "name": "Flash of Genius",
                "desc": "When Xingqiu crafts Character Talent Materials, he has a 25% chance to refund a portion of the crafting materials used.",
                "level": 0
            },
            {
                "name": "Hydropathic",
                "desc": "When a Rain Sword is shattered or when its duration expires, it regenerates the current character's HP based on 6% of Xingqiu's Max HP.",
                "level": 2
            },
            {
                "name": "Blades Amidst Raindrops",
                "desc": "Xingqiu gains a 20% Hydro DMG Bonus.",
                "level": 8,
                "bonus": [{ "stat": "hydro", "value": 20 }]
            }
        ],
        "ascension": [{ "type": "item", "id": "cleansing_heart" },{ "type": "group", "id": "mask" }, { "type": "item", "id": "silk_flower" }],
        "party_effects": [
            { "type": "apply", "id": 50, "option": 0, "desc": "Extends the duration of Guhua Sword: Raincutter by 3s. Decreases the Hydro RES of enemies hit by sword rain attacks by 15% for 4s." }
        ]
    },
    "diona": {
        "id": 23,
        "name": "Diona",
        "weapon": "bow",
        "vision": "cryo",
        "stats": [
            { "stat": "hp_base", "values": [802, 2061, 2661, 3985, 4411, 5074, 5642, 6305, 6731, 7393, 7818, 8481, 8907, 9570] },
            { "stat": "atk_base", "values": [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212] },
            { "stat": "def_base", "values": [50, 129, 167, 250, 277, 318, 354, 396, 422, 464, 491, 532, 559, 601] },
            { "stat": "cryo", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical",
                "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [36.12, 39.06, 42, 46.2, 49.14, 52.5, 57.12, 61.74, 66.36, 71.4, 77.18, 83.97, 90.76, 97.55, 104.96]
      },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [33.54, 36.27, 39, 42.9, 45.63, 48.75, 53.04, 57.33, 61.62, 66.3, 71.66, 77.97, 84.28, 90.58, 97.46]
               },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [45.58, 49.29, 53, 58.3, 62.01, 66.25, 72.08, 77.91, 83.74, 90.1, 97.39, 105.96, 114.53, 123.1, 132.45]
             },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43, 46.5, 50, 55, 58.5, 62.5, 68, 73.5, 79, 85, 91.88, 99.96, 108.05, 116.13, 124.95]
           },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [53.75, 58.13, 62.5, 68.75, 73.13, 78.13, 85, 91.88, 98.75, 106.25, 114.84, 124.95, 135.06, 145.16, 156.19]
           },
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 93.71, 101.96, 110.21, 118.45, 127.45]
             },
                    {
                        "name": "Fully-Charged Aimed Shot", "type": "charged", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 236.1, 252.96, 269.82, 286.69, 303.55]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
                    },
                ] },
            {
                "name": "Icy Paws", "type": "skill", "damage": true, "vision": "cryo",
                "parts": [
                    {
                        "name": "Icy Paw", "req": { "type": "const", "val": 1, "subtype": "max" }, "req": { "type": "const", "val": 1, "subtype": "max" }, "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [41.92, 45.06, 48.21, 52.4, 55.54, 58.69, 62.88, 67.07, 71.26, 75.46, 79.65, 83.84, 89.08, 94.32, 99.56]
                    },
                    {
                        "name": "Base Shield Absorption - Press", "req": { "type": "const", "val": 1, "subtype": "max" }, "req": { "type": "const", "val": 1, "subtype": "max" }, "type": "shield", "vision": "cryo", "stat": "hp", "crit": false, "scale": [7.2, 7.74, 8.28, 9, 9.54, 10.08, 10.8, 11.52, 12.24, 12.96, 13.68, 14.4, 15.3, 16.2, 17.1], "flat": [693, 762, 837, 918, 1005, 1097, 1195, 1299, 1409, 1524, 1646, 1773, 1905, 2044, 2188]


                    },
                    {
                        "name": "Base Shield Absorption - Hold", "req": { "type": "const", "val": 1, "subtype": "max" }, "req": { "type": "const", "val": 1, "subtype": "max" }, "type": "shield", "vision": "cryo", "stat": "hp", "crit": false, "scale": [12.6, 13.545, 14.49, 15.75, 16.695, 17.64, 18.9, 20.16, 21.42, 22.68, 23.94, 25.2, 26.775, 28.35, 29.925], "flat": [1212.75, 1333.5, 1464.75, 1606.5, 1758.75, 1919.75, 2091.25, 2273.25, 2465.75, 2667, 2880.5, 3102.75, 3333.75, 3577, 3829]



                    },
                    {
                        "name": "Icy Paw - Shaken, Not Purred", "req": { "type": "const", "val": 2, "subtype": "min" }, "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [48.208, 51.819, 55.4415, 60.26, 63.871, 67.4935, 72.312, 77.1305, 81.949, 86.779, 91.5975, 96.416, 102.442, 108.468, 114.494]
      },
                    {
                        "name": "Base Shield Absorption - Press - Shaken, Not Purred", "req": { "type": "const", "val": 2, "subtype": "min" }, "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "shield", "vision": "cryo", "stat": "hp", "crit": false, "scale": [8.28, 8.901, 9.522, 10.35, 10.971, 11.592, 12.42, 13.248, 14.076, 14.904, 15.732, 16.56, 17.595, 18.63, 19.665], "flat": [796.95, 876.3, 962.55, 1055.7, 1155.75, 1261.55, 1374.25, 1493.85, 1620.35, 1752.6, 1892.9, 2038.95, 2190.75, 2350.6, 2516.2]


                    },
                    {
                        "name": "Base Shield Absorption - Hold - Shaken, Not Purred", "req": { "type": "const", "val": 2, "subtype": "min" }, "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "shield", "vision": "cryo", "stat": "hp", "crit": false, "scale": [14.49, 15.57675, 16.6635, 18.1125, 19.19925, 20.286, 21.735, 23.184, 24.633, 26.082, 27.531, 28.98, 30.79125, 32.6025, 34.41375], "flat": [1394.6625, 1533.525, 1684.4625, 1847.475, 2022.5625, 2207.7125, 2404.9375, 2614.2375, 2835.6125, 3067.05, 3312.575, 3568.1625, 3833.8125, 4113.55, 4403.35]



                    },

                ]
            },
            {
                "name": "Signature Mix", "type": "burst", "damage": true, "vision": "cryo",
                "parts": [
                    {
                        "name": "Field Activation", "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [80, 86, 92, 100, 106, 112, 120, 128, 136, 144, 152, 160, 170, 180, 190]

                    },
                    {
                        "name": "Continuous Field", "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [52.64, 56.59, 60.54, 65.8, 69.75, 73.7, 78.96, 84.22, 89.49, 94.75, 100.02, 105.28, 111.86, 118.44, 125.02]

                    },
                    {
                        "name": "HP Regeneration Over Time", "type": "healing", "vision": "cryo", "stat": "hp", "crit": false, "scale": [5.34, 5.74, 6.14, 6.67, 7.07, 7.47, 8, 8.54, 9.07, 9.6, 10.14, 10.67, 11.34, 12.01, 12.67], "flat": [513, 565, 620, 680, 744, 813, 885, 962, 1044, 1129, 1219, 1313, 1411, 1514, 1621]

                    },

                ]}
        ],
        "const": [
            {
                "name": "A Lingering Flavor",
                "desc": "Regenerates 15 Energy for Diona after the effects of Signature Mix end."
            },
            {
                "name": "Shaken, Not Purred",
                "desc": "Increases Icy Paws' DMG by 15%, and increases its shield's DMG Absorption by 15%. Additionally, when paws hit their targets, creates a shield for other nearby characters on the field with 50 % of the Icy Paws shield's DMG Absorption for 5s."
            },
            {
                "name": "A—Another Round?",
                "desc": "Increases the Level of Signature Mix by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Wine Industry Slayer",
                "desc": "Within the radius of Signature Mix, Diona's charge time for aimed shots is reduced by 60%."
            },
            {
                "name": "Double Shot, On The Rocks",
                "desc": "Increases the Level of Icy Paws by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Cat's Tail Closing Time",
                "desc": "Characters within Signature Mix's radius will gain the following effects based on their HP amounts:<br>Increases Incoming Healing Bonus by 30% when HP falls below or is equal to 50%.<br>Elemental Mastery increased by 200 when HP is above 50%.",
                "apply": { "id": 52, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Complimentary Bar Food",
                "desc": "When a Perfect Cooking is achieved on a dish with restorative effects, there is a 12% chance to obtain double the product.",
                "level": 0
            },
            {
                "name": "Cat's Tail Secret Menu",
                "desc": "Characters shielded by Icy Paws have their Movement SPD increased by 10% and their Stamina Consumption decreased by 10%.",
                "level": 2,
                "apply": { "id": 51, "option": 0 }
            },
            {
                "name": "Drunkards' Farce",
                "desc": "Opponents who enter the AoE of Signature Mix have 10% decreased ATK for 15s.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "hoarfrost_core" },{ "type": "group", "id": "arrowhead" }, { "type": "item", "id": "calla_lily" }],
        "party_effects": [
            { "type": "apply", "id": 51, "option": 0, "desc": "Characters shielded by Icy Paws have their Movement SPD increased by 10% and their Stamina Consumption decreased by 10%." },
            { "type": "apply", "id": 52, "option": 0, "desc": "Characters within Signature Mix's radius will gain the following effects based on their HP amounts:<br>Increases Incoming Healing Bonus by 30% when HP falls below or is equal to 50%.<br>Elemental Mastery increased by 200 when HP is above 50%." }
        ]
    },
    "tartaglia": {
        "id": 24,
        "name": "Tartaglia",
        "weapon": "bow",
        "vision": "hydro",
        "stats": [
            { "stat": "hp_base", "values": [1020, 2646, 3521, 5268, 5889, 6776, 7604, 8500, 9121, 10025, 10647, 11561, 12182, 13103] },
            { "stat": "atk_base", "values": [23, 61, 81, 121, 135, 156, 175, 195, 210, 231, 245, 266, 280, 301] },
            { "stat": "def_base", "values": [63, 165, 219, 328, 366, 421, 473, 528, 567, 623, 662, 719, 757, 815] },
            { "stat": "hydro", "values": [0, 0, 0, 0, 7.2, 7.2, 14.4, 14.4, 14.4, 14.4, 21.6, 21.6, 28.8, 28.8] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical",
                "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [41.28, 44.64, 48, 52.8, 56.16, 60, 65.28, 70.56, 75.84, 81.6, 87.36, 93.12, 98.88, 104.64, 110.4]
          },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [46.27, 50.03, 53.8, 59.18, 62.95, 67.25, 73.17, 79.09, 85, 91.46, 97.92, 104.37, 110.83, 117.28, 123.74]
          },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [55.38, 59.89, 64.4, 70.84, 75.35, 80.5, 87.58, 94.67, 101.75, 109.48, 117.21, 124.94, 132.66, 140.39, 148.12]
         },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [57.02, 61.66, 66.3, 72.93, 77.57, 82.88, 90.17, 97.46, 104.75, 112.71, 120.67, 128.62, 136.58, 144.53, 152.49]
           },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [60.89, 65.84, 70.8, 77.88, 82.84, 88.5, 96.29, 104.08, 111.86, 120.36, 128.86, 137.35, 145.85, 154.34, 162.84]
                    },
                    {
                        "name": "6-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [72.76, 78.68, 84.6, 93.06, 98.98, 105.75, 115.06, 124.36, 133.67, 143.82, 153.97, 164.12, 174.28, 184.43, 194.58]
           },
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 93.71, 101.96, 110.21, 118.45, 127.45]
                    },
                    {
                        "name": "Fully-Charged Aimed Shot", "type": "charged", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 236.1, 252.96, 269.82, 286.69, 303.55]
                    },
                    {
                        "name": "Riptide Flash", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [12.4, 13.33, 14.26, 15.5, 16.43, 17.36, 18.6, 19.84, 21.08, 22.32, 23.56, 24.8, 26.35, 27.9, 29.45]
       },
                    {
                        "name": "Riptide Burst", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [62, 66.65, 71.3, 77.5, 82.15, 86.8, 93, 99.2, 105.4, 111.6, 117.8, 124, 131.75, 139.5, 147.25]
            },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
      },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
        },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
          },
                ] },
            {
                "name": "Foul Legacy: Raging Tide - Riptide Slash", "type": "skill", "damage": true, "vision": "hydro",
                "parts": [
                    {
                        "name": "Stance Change", "type": "skill", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [72, 77.4, 82.8, 90, 95.4, 100.8, 108, 115.2, 122.4, 129.6, 136.8, 144, 153, 162, 171]
            },
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [38.87, 42.04, 45.2, 49.72, 52.88, 56.5, 61.47, 66.44, 71.42, 76.84, 82.26, 87.69, 93.11, 98.54, 103.96]
          },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [41.62, 45.01, 48.4, 53.24, 56.63, 60.5, 65.82, 71.15, 76.47, 82.28, 88.09, 93.9, 99.7, 105.51, 111.32]
            },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [56.33, 60.92, 65.5, 72.05, 76.64, 81.88, 89.08, 96.29, 103.49, 111.35, 119.21, 127.07, 134.93, 142.79, 150.65]
             },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [59.94, 64.82, 69.7, 76.67, 81.55, 87.13, 94.79, 102.46, 110.13, 118.49, 126.85, 135.22, 143.58, 151.95, 160.31]
       },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [55.3, 59.8, 64.3, 70.73, 75.23, 80.38, 87.45, 94.52, 101.59, 109.31, 117.03, 124.74, 132.46, 140.17, 147.89]
           },
                    {
                        "name": "6-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [73.1, 79.05, 85, 93.5, 99.45, 106.25, 115.6, 124.95, 134.3, 144.5, 154.7, 164.9, 175.1, 185.3, 195.5]
            },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [132.18, 142.94, 153.7, 169.07, 179.83, 192.12, 209.03, 225.94, 242.85, 261.29, 279.73, 298.18, 316.62, 335.07, 353.51]
        },
                    {
                        "name": "Riptide Slash", "type": "skill", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [60.2, 65.1, 70, 77, 81.9, 87.5, 95.2, 102.9, 110.6, 119, 127.4, 135.8, 144.2, 152.6, 161]
         },
 
                ] },
            {
                "name": "Havoc: Obliteration", "type": "burst", "damage": true, "vision": "hydro",
                "parts": [
                    {
                        "name": "Melee", "type": "burst", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [464, 498.8, 533.6, 580, 614.8, 649.6, 696, 742.4, 788.8, 835.2, 881.6, 928, 986, 1044, 1102]
        },
                    {
                        "name": "Ranged", "type": "burst", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [378.4, 406.78, 435.16, 473, 501.38, 529.76, 567.6, 605.44, 643.28, 681.12, 718.96, 756.8, 804.1, 851.4, 898.7]
           },
                    {    
                        "name": "Riptide Blast", "type": "burst", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [120, 129, 138, 150, 159, 168, 180, 192, 204, 216, 228, 240, 255, 270, 285]
           }

                ]
            }
        ],
        "const": [
            {
                "name": "Foul Legacy: Tide Withholder",
                "desc": "Decreases the CD of Foul Legacy: Raging Tide by 20%"
            },
            {
                "name": "Foul Legacy: Understream",
                "desc": "When opponents affected by Riptide are defeated, Tartaglia regenerates 4 Elemental Energy."
            },
            {
                "name": "Abyssal Mayhem: Vortex of Turmoil",
                "desc": "Increases the Level of Foul Legacy: Raging Tide by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Abyssal Mayhem: Hydrospout",
                "desc": "If Tartaglia is in Foul Legacy: Raging Tide's Melee Stance, triggers Riptide Slash against opponents on the field affected by Riptide every 4s, otherwise, triggers Riptide Flash. Riptide Slashes and Riptide Flashes triggered by this Constellation effect are not subject to the time intervals that would typically apply to these two Riptide effects, nor do they have any effect on those time intervals."
            },
            {
                "name": "Havoc: Formless Blade",
                "desc": "Increases the Level of Havoc: Obliteration by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Havoc: Annihilation",
                "desc": "When Havoc: Obliteration is cast in Melee Stance, the CD of Foul Legacy: Raging Tide is reset. This effect will only take place once Tartaglia returns to his Ranged Stance."
            }

        ],
        "passive": [
            {
                "name": "Master of Weaponry",
                "desc": "Increases your own party members' Normal Attack Level by 1.",
                "level": 0,
                "apply": { "id": 53, "option": 0 }
            },
            {
                "name": "Never Ending",
                "desc": "Extends Riptide duration by 8s.",
                "level": 2
            },
            {
                "name": "Sword of Torrents",
                "desc": "When Tartaglia is in Foul Legacy: Raging Tide's Melee Stance, or if his Normal and Charged Attacks do CRIT DMG, they will apply the Riptide status effect on the hit enemy.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "cleansing_heart" },{ "type": "group", "id": "fatui_insignia" }, { "type": "item", "id": "starconch" }],
        "party_effects": [
            { "type": "apply", "id": 53, "option": 0, "desc": "Increases your own party members' Normal Attack Level by 1." }
        ]
    },
    "zhongli": {
        "id": 25,
        "name": "Zhongli",
        "weapon": "polearm",
        "vision": "geo",
        "stats": [
            { "stat": "hp_base", "values": [1144, 2967, 3948, 5908, 6605, 7599, 8528, 9533, 10230, 11243, 11940, 12965, 13662, 14695] },
            { "stat": "atk_base", "values": [20, 51, 67, 101, 113, 130, 146, 163, 175, 192, 204, 222, 233, 251] },
            { "stat": "def_base", "values": [57, 149, 198, 297, 332, 382, 428, 479, 514, 564, 599, 651, 686, 738] },
            { "stat": "geo", "values": [0, 0, 0, 0, 7.2, 7.2, 14.4, 14.4, 14.4, 14.4, 21.6, 21.6, 28.8, 28.8] },
            { "stat": "burst_energy", "values": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [30.77, 33.27, 35.78, 39.36, 41.86, 44.72, 48.66, 52.59, 56.53, 60.82, 65.74, 71.53, 77.31, 83.1, 89.41]

                    },
                    {
                        "name": "2-Hit", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [31.15, 33.69, 36.22, 39.85, 42.38, 45.28, 49.26, 53.25, 57.23, 61.58, 66.56, 72.42, 78.27, 84.13, 90.52]

                    },
                    {
                        "name": "3-Hit", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [38.58, 41.72, 44.86, 49.34, 52.48, 56.07, 61, 65.94, 70.87, 76.26, 82.42, 89.68, 96.93, 104.18, 112.1]

                    },
                    {
                        "name": "4-Hit", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [42.94, 46.43, 49.93, 54.92, 58.42, 62.41, 67.9, 73.4, 78.89, 84.88, 91.74, 99.82, 107.89, 115.97, 124.77]

                    },
                    {
                        "name": "5-Hit", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":4, "scale": [10.75, 11.63, 12.5, 13.75, 14.63, 15.63, 17, 18.38, 19.75, 21.25, 22.97, 24.99, 27.01, 29.03, 31.24]

                    },
                    {
                        "name": "6-Hit", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [54.5, 58.93, 63.37, 69.7, 74.14, 79.21, 86.18, 93.15, 100.12, 107.73, 116.44, 126.69, 136.93, 147.18, 158.36]

                    },
                    {
                        "name": "Charged", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [111.03, 120.06, 129.1, 142.01, 151.05, 161.38, 175.58, 189.78, 203.98, 219.47, 237.22, 258.1, 278.97, 299.85, 322.62]

                    },
                    {
                        "name": "Plunge", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    },
                    {
                        "name": "1-Hit + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "normal", "damage": true, "vision": "physical", "stat": ["atk", "hp"], "crit": true, "scale": [[30.77, 33.27, 35.78, 39.36, 41.86, 44.72, 48.66, 52.59, 56.53, 60.82, 65.74, 71.53, 77.31, 83.1, 89.41], [1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39]]

                    },
                    {
                        "name": "2-Hit + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "normal", "damage": true, "vision": "physical", "stat": ["atk", "hp"], "crit": true, "scale": [[31.15, 33.69, 36.22, 39.85, 42.38, 45.28, 49.26, 53.25, 57.23, 61.58, 66.56, 72.42, 78.27, 84.13, 90.52], [1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39]]

                    },
                    {
                        "name": "3-Hit + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "normal", "damage": true, "vision": "physical", "stat": ["atk", "hp"], "crit": true, "scale": [[38.58, 41.72, 44.86, 49.34, 52.48, 56.07, 61, 65.94, 70.87, 76.26, 82.42, 89.68, 96.93, 104.18, 112.1], [1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39]]

                    },
                    {
                        "name": "4-Hit + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "normal", "damage": true, "vision": "physical", "stat": ["atk", "hp"], "crit": true, "scale": [[42.94, 46.43, 49.93, 54.92, 58.42, 62.41, 67.9, 73.4, 78.89, 84.88, 91.74, 99.82, 107.89, 115.97, 124.77], [1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39]]

                    },
                    {
                        "name": "5-Hit + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "normal", "damage": true, "vision": "physical", "stat": ["atk", "hp"], "crit": true, "hits": 4, "scale": [[10.75, 11.63, 12.5, 13.75, 14.63, 15.63, 17, 18.38, 19.75, 21.25, 22.97, 24.99, 27.01, 29.03, 31.24], [1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39]]

                    },
                    {
                        "name": "6-Hit + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "normal", "damage": true, "vision": "physical", "stat": ["atk", "hp"], "crit": true, "scale": [[54.5, 58.93, 63.37, 69.7, 74.14, 79.21, 86.18, 93.15, 100.12, 107.73, 116.44, 126.69, 136.93, 147.18, 158.36], [1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39]]

                    },
                    {
                        "name": "Charged + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "charged", "damage": true, "vision": "physical", "stat": ["atk", "hp"], "crit": true, "scale": [[111.03, 120.06, 129.1, 142.01, 151.05, 161.38, 175.58, 189.78, 203.98, 219.47, 237.22, 258.1, 278.97, 299.85, 322.62], [1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39]]

                    },
                    {
                        "name": "Plunge + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "plunge", "damage": true, "vision": "physical", "stat": ["atk", "hp"], "crit": true, "scale": [[63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98], [1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39]]
                    },
                    {
                        "name": "Low Plunge + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "plunge", "damage": true, "vision": "physical", "stat": ["atk", "hp"], "crit": true, "scale": [[127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89], [1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39]]
                    },
                    {
                        "name": "High Plunge + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "plunge", "damage": true, "vision": "physical", "stat": ["atk", "hp"], "crit": true, "scale": [[159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04], [1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39, 1.39]]
                    }
                ]
            },
            {
                "name": "Dominus Lapidis", "type": "skill", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Stone Stele", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "skill", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [16, 17.2, 18.4, 20, 21.2, 22.4, 24, 25.6, 27.2, 28.8, 30.4, 32, 34, 36, 38]

                    },
                    {
                        "name": "Resonance", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "skill", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [32, 34.4, 36.8, 40, 42.4, 44.8, 48, 51.2, 54.4, 57.6, 60.8, 64, 68, 72, 76]

                    },
                    {
                        "name": "Hold", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "skill", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [80, 86, 92, 100, 106, 112, 120, 128, 136, 144, 152, 160, 170, 180, 190]

                    },
                    {
                        "name": "Stone Stele + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "skill", "damage": true, "vision": "geo", "stat": ["atk", "hp"], "crit": true, "scale": [[16, 17.2, 18.4, 20, 21.2, 22.4, 24, 25.6, 27.2, 28.8, 30.4, 32, 34, 36, 38], [1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9]]

                    },
                    {
                        "name": "Resonance + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "skill", "damage": true, "vision": "geo", "stat": ["atk", "hp"], "crit": true, "scale": [[32, 34.4, 36.8, 40, 42.4, 44.8, 48, 51.2, 54.4, 57.6, 60.8, 64, 68, 72, 76], [1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9]]

                    },
                    {
                        "name": "Hold + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "skill", "damage": true, "vision": "geo", "stat": ["atk", "hp"], "crit": true, "scale": [[80, 86, 92, 100, 106, 112, 120, 128, 136, 144, 152, 160, 170, 180, 190], [1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9]]

                    },
                    {
                        "name": "Shield Absorption", "type": "shield", "vision": "geo", "stat": "hp", "crit": false, "scale": [12.8, 13.76, 14.72, 16, 16.96, 17.92, 19.2, 20.48, 21.76, 23.04, 24.32, 25.6, 27.2, 28.8, 30.4], "flat": [1232, 1356, 1489, 1633, 1787, 1951, 2126, 2311, 2506, 2712, 2927, 3153, 3389, 3636, 3893]


                    }],
                "apply": { "id": 430, "option": 0 }
            },
            {
                "name": "Planet Befall", "type": "burst", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Skill", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "burst", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [401.08, 444.44, 487.8, 542, 590.78, 639.56, 704.6, 769.64, 834.68, 899.72, 964.76, 1029.8, 1084, 1138.2, 1192.4]

                    },
                    {
                        "name": "Skill + Dominance of Earth", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "burst", "damage": true, "vision": "geo", "stat": ["atk", "hp"], "crit": true, "scale": [[401.08, 444.44, 487.8, 542, 590.78, 639.56, 704.6, 769.64, 834.68, 899.72, 964.76, 1029.8, 1084, 1138.2, 1192.4], [33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33]]

                    }

                ]
            }
        ],
        "const": [
            {
                "name": "Rock, the Backbone of Earth",
                "desc": "Increases the maximum number of Stone Steles created by Dominus Lapidis that may exist simultaneously to 2."
            },
            {
                "name": "Stone, the Cradle of Jade",
                "desc": "Planet Befall grants nearby characters on the field a Jade Shield when it descends."
            },
            {
                "name": "Jade, Shimmering through Darkness",
                "desc": "Increases the Level of Dominus Lapidis by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Topaz, Unbreakable and Fearless",
                "desc": "Increases Planet Befall's AoE by 20% and increases the duration of Planet Befall's Petrification effect by 2s."
            },
            {
                "name": "Lazuli, Herald of the Order",
                "desc": "Increases the Level of Planet Befall by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Chrysos, Bounty of Dominator",
                "desc": "When the Jade Shield takes DMG, 40% of that incoming DMG is converted to HP for the current character. A single instance of regeneration cannot exceed 8% of that character's Max HP."
            }

        ],
        "passive": [
            {
                "name": "Arcanum of Crystal",
                "desc": "Refunds 15% of the ores used when crafting Polearm-type weapons.",
                "level": 0
            },
            {
                "name": "Resonant Waves",
                "desc": "When the Jade Shield takes DMG, it will Fortify:<br>Fortified characters have 5% increased Shield Strength.<br>Can stack up to 5 times, and lasts until the Jade Shield disappears.",
                "level": 2,
                "apply": { "id": 54, "option": 0 }
            },
            {
                "name": "Dominance of Earth",
                "desc": "Zhongli deals bonus DMG based on his Max HP:<br>Normal Attack, Charged Attack, and Plunging Attack DMG is increased by 1.39% of Max HP.<br>Dominus Lapidis' Stone Stele, resonance, and hold DMG is increased by 1.9% of Max HP.<br>Planet Befall's DMG is increased by 33% of Max HP.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "basalt_pillar" },{ "type": "group", "id": "slime" }, { "type": "item", "id": "cor_lapis" }],
        "party_effects": [
            { "type": "apply", "id": 430, "option": 0, "desc": "Characters protected by the Jade Shield will decrease the Elemental RES and Physical RES of opponents in a small AoE by 20%" },
            { "type": "apply", "id": 54, "option": 0, "desc": "When the Jade Shield takes DMG, it will Fortify:<br>Fortified characters have 5% increased Shield Strength.<br>Can stack up to 5 times, and lasts until the Jade Shield disappears." }
        ]
    },
    "xinyan": {
        "id": 26,
        "name": "Xinyan",
        "weapon": "claymore",
        "vision": "pyro",
        "stats": [
            { "stat": "hp_base", "values": [939, 2413, 3114, 4665, 5163, 5939, 6604, 7379, 7878, 8653, 9151, 9927, 10425, 11201] },
            { "stat": "atk_base", "values": [21, 54, 69, 103, 115, 132, 147, 164, 175, 192, 203, 220, 231, 249] },
            { "stat": "def_base", "values": [67, 172, 222, 333, 368, 423, 471, 526, 562, 617, 652, 708, 743, 799] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [76.54, 82.77, 89, 97.9, 104.13, 111.25, 121.04, 130.83, 140.62, 151.3, 161.98, 172.66, 183.34, 194.02, 204.7]
           },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [73.96, 79.98, 86, 94.6, 100.62, 107.5, 116.96, 126.42, 135.88, 146.2, 156.52, 166.84, 177.16, 187.48, 197.8]
                },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [95.46, 103.23, 111, 122.1, 129.87, 138.75, 150.96, 163.17, 175.38, 188.7, 202.02, 215.34, 228.66, 241.98, 255.3]
            },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [115.84, 125.27, 134.7, 148.17, 157.6, 168.38, 183.19, 198.01, 212.83, 228.99, 245.15, 261.32, 277.48, 293.65, 309.81]
         },
                    {
                        "name": "Charged Attack Spinning", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [62.55, 67.64, 72.73, 80, 85.09, 90.91, 98.91, 106.91, 114.91, 123.64, 132.36, 141.09, 149.82, 158.55, 167.27]
          },
                    {
                        "name": "Charged Attack Final", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.09, 122.3, 131.5, 144.65, 153.86, 164.38, 178.84, 193.31, 207.77, 223.55, 239.33, 255.11, 270.89, 286.67, 302.45]
          },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21]
                    }
                ]
            },
            {
                "name": "Sweeping Fervor", "type": "skill", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Swing", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [169.6, 182.32, 195.04, 212, 224.72, 237.44, 254.4, 271.36, 288.32, 305.28, 322.24, 339.2, 360.4, 381.6, 402.8]

                    },
                    {
                        "name": "Shield Level 1 Absorption", "type": "shield", "vision": "pyro", "stat": "def", "crit": false, "scale": [104.04, 111.84, 119.65, 130.05, 137.85, 145.66, 156.06, 166.46, 176.87, 187.27, 197.68, 208.08, 221.09, 234.09, 247.1], "flat": [501, 551, 605, 663, 726, 793, 864, 939, 1018, 1101, 1189, 1281, 1377, 1477, 1581]


                    },
                    {
                        "name": "Shield Level 2 Absorption", "type": "shield", "vision": "pyro", "stat": "def", "crit": false, "scale": [122.4, 131.58, 140.76, 153, 162.18, 171.36, 183.6, 195.84, 208.08, 220.32, 232.56, 244.8, 260.1, 275.4, 290.7], "flat": [589, 648, 712, 780, 854, 932, 1016, 1104, 1197, 1296, 1399, 1507, 1620, 1737, 1860]


                    },
                    {
                        "name": "Shield Level 3 Absorption", "type": "shield", "vision": "pyro", "stat": "def", "crit": false, "scale": [144, 154.8, 165.6, 180, 190.8, 201.6, 216, 230.4, 244.8, 259.2, 273.6, 288, 306, 324, 342], "flat": [693, 762, 837, 918, 1005, 1097, 1195, 1299, 1409, 1524, 1646, 1773, 1905, 2044, 2188]


                    },
                    {
                        "name": "DoT", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [33.6, 36.12, 38.64, 42, 44.52, 47.04, 50.4, 53.76, 57.12, 60.48, 63.84, 67.2, 71.4, 75.6, 79.8]

                    }
                ]
            },
            {
                "name": "Riff Revolution", "type": "burst", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [340.8, 366.36, 391.92, 426, 451.56, 477.12, 511.2, 545.28, 579.36, 613.44, 647.52, 681.6, 724.2, 766.8, 809.4]

                    },
                    {
                        "name": "DoT", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [40, 43, 46, 50, 53, 56, 60, 64, 68, 72, 76, 80, 85, 90, 95]

                    }]
            }
        ],
        "const": [
            {
                "name": "Fatal Acceleration",
                "desc": "Upon scoring a CRIT Hit, increases ATK SPD of Xinyan's Normal and Charged Attacks by 12% for 5s. Can only occur once every 5s.",
                "apply": { "id": 56, "option": 0 }
            },
            {
                "name": "Impromptu Opening",
                "desc": "Riff Revolution's Physical DMG has its Crit Rate increased by 100%, and will form a shield at Shield Level 3: Rave when cast.",
                "apply": { "id": 57, "option": 0 }
            },
            {
                "name": "Double-Stop",
                "desc": "Increases the Level of Sweeping Fervor by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Wildfire Rhythm",
                "desc": "Sweeping Fervor's swing DMG decreases opponent's Physical RES by 15% for 12s.",
                "apply": { "id": 58, "option": 0 }
            },
            {
                "name": "Screamin' for an Encore",
                "desc": "Increases the Level of Riff Revolution by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Rockin' in a Flaming World",
                "desc": "Decreases the Stamina Consumption of Xinyan's Charged Attacks by 30%. Additionally, Xinyan's Charged Attacks gain an ATK Bonus equal to 50% of her DEF."
            }

        ],
        "passive": [
            {
                "name": "A Rad Recipe",
                "desc": "When a Perfect Cooking is achieved on an DEF-boosting dish, Xinyan has a 12% chance to obtain double the product.",
                "level": 0
            },
            {
                "name": "The Show Goes On, Even Without An Audience...",
                "desc": "Decreases the number of enemies Sweeping Fervor must hit to trigger each level of shielding.<br>Shield Level 2: Lead - In requirement reduced to 1 enemy hit.<br>Shield Level 3: Rave requirement reduced to 2 enemies hit or more.",
                "level": 2
            },
            {
                "name": "...Now That's Rock 'N' Roll!",
                "desc": "Characters shielded by Sweeping Fervor deal 15% increased Physical DMG.",
                "level": 8,
                "apply": { "id": 55, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "everflame_seed" },{ "type": "group", "id": "treasure_insignia" }, { "type": "item", "id": "violetgrass" }],
        "party_effects": [
            { "type": "apply", "id": 55, "option": 0, "desc": "Characters shielded by Sweeping Fervor deal 15% increased Physical DMG." },
            { "type": "apply", "id": 58, "option": 0, "desc": "Sweeping Fervor's swing DMG decreases opponent's Physical RES by 15% for 12s." }
        ]
    },
    "albedo": {
        "id": 27,
        "name": "Albedo",
        "weapon": "sword",
        "vision": "geo",
        "stats": [
            { "stat": "hp_base", "values": [1030,2671,3554,5317,5944,6839,7675,8579,9207,10119,10746,11669,12296,13226] },
            { "stat": "atk_base", "values": [20,51,67,101,113,130,146,163,175,192,204,222,233,251] },
            { "stat": "def_base", "values": [68,177,235,352,394,453,508,568,610,670,712,773,815,876] },
            { "stat": "geo", "values": [0, 0, 0, 0, 7.2, 7.2, 14.4, 14.4, 14.4, 14.4, 21.6, 21.6, 28.8, 28.8] },
            { "stat": "burst_energy", "values": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [36.74, 39.73, 42.72, 46.99, 49.98, 53.4, 58.1, 62.8, 67.5, 72.62, 78.5, 85.41, 92.31, 99.22, 106.76]
           },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [36.74, 39.73, 42.72, 46.99, 49.98, 53.4, 58.1, 62.8, 67.5, 72.62, 78.5, 85.41, 92.31, 99.22, 106.76]
                },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [47.45, 51.32, 55.18, 60.7, 64.56, 68.98, 75.04, 81.11, 87.18, 93.81, 101.39, 110.32, 119.24, 128.16, 137.89]
            },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [49.75, 53.8, 57.85, 63.64, 67.68, 72.31, 78.68, 85.04, 91.4, 98.35, 106.3, 115.65, 125.01, 134.36, 144.57]
         },
         {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [62.07, 67.13, 72.18, 79.4, 84.45, 90.22, 98.16, 106.1, 114.04, 122.7, 132.63, 144.3, 155.97, 167.64, 180.38]
         },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[47.3, 60.2], [51.15, 65.1] ,[55, 70], [60.5, 77], [64.35,81.9], [68.75, 87.5], [74.8, 95.2], [80.85, 102.9], [86.9, 110.6], [93.5, 119], [101.06,128.62], [109.96, 139.94], [118.85, 151.26], [127.74, 162.58], [137.45, 174.93]]
          },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ]
            },
            {
                "name": "Abiogenesis: Solar Isotoma", "type": "skill", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [130.4, 140.18, 149.96, 163, 172.78, 182.56, 195.6, 208.64, 221.68, 234.72, 247.76, 260.8, 277.1, 293.4, 309.7]
                    },
                    {
                        "name": "Transient Blossom", "type": "skill", "damage": true, "vision": "geo", "stat": "def", "crit": true, "scale": [133.6, 143.62, 153.64, 167, 177.02, 187.04, 200.4, 213.76, 227.12, 240.48, 253.84, 267.2, 283.9, 300.6, 317.3]


                    },
                ]
            },
            {
                "name": "Rite of Progeniture: Tectonic Tide", "type": "burst", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [367.2, 394.74, 422.28, 459, 486.54, 514.08, 550.8, 587.52, 624.24, 660.96, 697.68, 734.4, 780.3, 826.2, 872.1]

                    },
                    {
                        "name": "Fatal Blossom", "type": "burst", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [72, 77.4, 82.8, 90, 95.4, 100.8, 108, 115.2, 122.4, 129.6, 136.8, 144, 153, 162, 171]

                    }]
            }
        ],
        "const": [
            {
                "name": "Flower of Eden",
                "desc": "Transient Blossoms generated by Albedo's Abiogenesis: Solar Isotoma regenerate 1.2 Energy for Albedo."
            },
            {
                "name": "Opening of Phanerozoic",
                "desc": "Transient Blossoms generated by Abiogenesis: Solar Isotoma grant Albedo Fatal Reckoning for 30s:<br>Unleashing Rite of Progeniture: Tectonic Tide consumes all stacks of Fatal Reckoning. Each stack of Fatal Reckoning consumed increases the DMG dealt by Fatal Blossoms and Rite of Progeniture: Tectonic Tide's burst DMG by 30% of Albedo's DEF.<br>This effect stacks up to 4 times.",
                "apply": { "id": 499, "option": 0 }
            },
            {
                "name": "Grace of Helios",
                "desc": "Increases the Level of Abiogenesis: Solar Isotoma by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Descent of Divinity",
                "desc": "Solar Isotoma increases Plunging Attack DMG by 30% for active party members within the AoE.",
                "apply": { "id": 75, "option": 0 }
            },
            {
                "name": "Tide of Hadean",
                "desc": "Increases the Level of Rite of Progeniture: Tectonic Tide by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Dust of Purification",
                "desc": "Active party members within the Solar Isotoma field who are protected by a shield created by Crystallize have their DMG increased by 17%.",
                "apply": { "id": 74, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Flash of Genius",
                "desc": "When Albedo crafts Weapon Ascension Materials, he has a 10% chance to receive double the product.",
                "level": 0
            },
            {
                "name": "Calcite Might",
                "desc": "Transient Blossoms generated by Abiogenesis: Solar Isotoma deal 25% more DMG to opponents whose HP is below 50%.",
                "level": 2,
                "apply": { "id": 76, "option": 0 }
            },
            {
                "name": "Homuncular Nature",
                "desc": "Using Rite of Progeniture: Tectonic Tide increases the Elemental Mastery of nearby party members by 125 for 10s.",
                "level": 8,
                "apply": { "id": 77, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "basalt_pillar" },{ "type": "group", "id": "scroll" }, { "type": "item", "id": "cecilia" }],
        "party_effects": [
            { "type": "apply", "id": 75, "option": 0, "desc": "Solar Isotoma increases Plunging Attack DMG by 30% for active party members within the AoE." },
            { "type": "apply", "id": 77, "option": 0, "desc": "Using Rite of Progeniture: Tectonic Tide increases the Elemental Mastery of nearby party members by 125 for 10s." },
            { "type": "apply", "id": 74, "option": 0, "desc": "Active party members within the Solar Isotoma field who are protected by a shield created by Crystallize have their DMG increased by 17%." },
        ]
    },
    "ganyu": {
        "id": 28,
        "name": "Ganyu",
        "weapon": "bow",
        "vision": "cryo",
        "stats": [
            { "stat": "hp_base", "values": [763, 1978, 2632, 3939, 4403, 5066, 5686, 6355, 6820, 7495, 7960, 8643, 9108, 9797] },
            { "stat": "atk_base", "values": [26, 68, 90, 135, 151, 173, 194, 217, 233, 256, 272, 295, 311, 335] },
            { "stat": "def_base", "values": [49, 127, 169, 253, 283, 326, 366, 409, 439, 482, 512, 556, 586, 630] },
            { "stat": "critdmg", "values": [0, 0, 0, 0, 9.6, 9.6, 19.2, 19.2, 19.2, 19.2, 28.8, 28.8, 38.4, 38.4] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }
        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical",
                "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [31.73, 34.32, 36.9, 40.59, 43.17, 46.13, 50.18, 54.24, 58.3, 62.73, 67.8, 73.77, 79.74, 85.7, 92.21]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [35.6, 38.5, 41.4, 45.54, 48.44, 51.75, 56.3, 60.86, 65.41, 70.38, 76.07, 82.77, 89.46, 96.16, 103.46]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [45.49, 49.2, 52.9, 58.19, 61.89, 66.13, 71.94, 77.76, 83.58, 89.93, 97.2, 105.76, 114.31, 122.87, 132.2]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [45.49, 49.2, 52.9, 58.19, 61.89, 66.13, 71.94, 77.76, 83.58, 89.93, 97.2, 105.76, 114.31, 122.87, 132.2]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [48.25, 52.17, 56.1, 61.71, 65.64, 70.13, 76.3, 82.47, 88.64, 95.37, 103.08, 112.16, 121.23, 130.3, 140.19]
                    },
                    {
                        "name": "6-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [57.62, 62.31, 67, 73.7, 78.39, 83.75, 91.12, 98.49, 105.86, 113.9, 123.11, 133.95, 144.78, 155.61, 167.43]
                    },
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3]
                    },
                    {
                        "name": "Aimed Shot Charge Level 1", "type": "charged", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5]
                    },
                    {
                        "name": "Frostflake Arrow", "type": "charged", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [128, 137.6, 147.2, 160, 169.6, 179.2, 192, 204.8, 217.6, 230.4, 243.2, 256, 272, 288, 304]
                    },
                    {
                        "name": "Frostflake Arrow Bloom", "type": "charged", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [217.6, 233.92, 250.24, 272, 288.32, 304.64, 326.4, 348.16, 369.92, 391.68, 413.44, 435.2, 462.4, 489.6, 516.8]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
                    },
                ]
            },
            {
                "name": "Trail of the Qilin", "type": "skill", "damage": true, "vision": "cryo",
                "parts": [
                    {
                        "name": "Inherited HP", "type": "", "vision": "physical", "stat": "hp", "crit": false, "scale": [120, 129, 138, 150, 159, 168, 180, 192, 204, 216, 228, 240, 255, 270, 285]
                    },
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [132, 141.9, 151.8, 165, 174.9, 184.8, 198, 211.2, 224.4, 237.6, 250.8, 264, 280.5, 297, 313.5]
                    },


                ]
            },
            {
                "name": "Celestial Shower", "type": "burst", "damage": true, "vision": "cryo",
                "parts": [
                    {
                        "name": "Icy Shard", "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [70.27, 75.54, 80.81, 87.84, 93.11, 98.38, 105.41, 112.44, 119.46, 126.49, 133.52, 140.54, 149.33, 158.11, 166.9]

                    },

                ]
            }
        ],
        "const": [
            {
                "name": "Dew-Drinker",
                "desc": "Taking DMG from a Charge Level 2 Frostflake Arrow or Frostflake Arrow Bloom decreases opponents' Cryo RES by 15% for 6s. A hit regenerates 2 Energy for Ganyu. This effect can only occur once per Charge Level 2 Frostflake Arrow, regardless if Frostflake Arrow itself or its Bloom hit the target.",
                "apply": { "id": 78, "option": 0 }
            },
            {
                "name": "The Auspicious",
                "desc": "Trail of the Qilin gains 1 additional charge."
            },
            {
                "name": "Cloud-Strider",
                "desc": "Increases the Level of Celestial Shower by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Westward Sojourn",
                "desc": "Opponents standing within the AoE of Celestial Shower take increased DMG. This effect strengthens over time. Increased DMG taken begins at 5% and increases by 5% every 3s, up to a maximum of 25%. The effect lingers for 3s after the opponent leaves the AoE.",
                "apply": { "id": 79, "option": 0 }
            },
            {
                "name": "The Merciful",
                "desc": "Increases the Level of Trail of the Qilin by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "The Clement",
                "desc": "Using Trail of the Qilin causes the next Frostflake Arrow shot within 30s to not require charging."
            }

        ],
        "passive": [
            {
                "name": "Preserved for the Hunt",
                "desc": "Refunds 15% of the ore used when crafting Bow-type weapons.",
                "level": 0
            },
            {
                "name": "Undivided Heart",
                "desc": "After firing a Frostflake Arrow, the CRIT Rate of subsequent Frostflake Arrows and their resulting bloom effects is increased by 20% for 5s.",
                "level": 2,
                "apply": { "id": 340, "option": 0 }
            },
            {
                "name": "Harmony between Heaven and Earth",
                "desc": "Celestial Shower grants a 20% Cryo DMG Bonus to active party members in the AoE.",
                "level": 8,
                "apply": { "id": 341, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "hoarfrost_core" },{ "type": "group", "id": "nectar" }, { "type": "item", "id": "qingxin" }],
        "party_effects": [
            { "type": "apply", "id": 78, "option": 0, "desc": "Taking DMG from a Charge Level 2 Frostflake Arrow or Frostflake Arrow Bloom decreases opponents' Cryo RES by 15% for 6s. A hit regenerates 2 Energy for Ganyu. This effect can only occur once per Charge Level 2 Frostflake Arrow, regardless if Frostflake Arrow itself or its Bloom hit the target." },
            { "type": "apply", "id": 79, "option": 0, "desc": "Opponents standing within the AoE of Celestial Shower take increased DMG. This effect strengthens over time. Increased DMG taken begins at 5% and increases by 5% every 3s, up to a maximum of 25%. The effect lingers for 3s after the opponent leaves the AoE." },
            { "type": "apply", "id": 341, "option": 0, "desc": "Celestial Shower grants a 20% Cryo DMG Bonus to active party members in the AoE." }

        ]
    },
    "xiao": {
        "id": 29,
        "name": "Xiao",
        "weapon": "polearm",
        "vision": "anemo",
        "stats": [
            { "stat": "hp_base", "values": [991, 2572, 3422, 5120, 5724, 6586, 7391, 8262, 8866, 9744, 10348, 11236, 11840, 12736] },
            { "stat": "atk_base", "values": [27, 71, 94, 140, 157, 181, 203, 227, 243, 267, 284, 308, 325, 349] },
            { "stat": "def_base", "values": [62, 161, 215, 321, 359, 413, 464, 519, 556, 612, 649, 705, 743, 799] },
            { "stat": "crit", "values": [0, 0, 0, 0, 4.8, 4.8, 9.6, 9.6, 9.6, 9.6, 14.4, 14.4, 19.2, 19.2] },
            { "stat": "burst_energy", "values": [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "hits":2, "crit": true, "scale": [27.54, 29.42, 31.3, 33.8, 35.68, 37.87, 40.69, 43.51, 46.32, 49.14, 51.96, 54.78, 57.59, 60.41, 63.23]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true,  "scale": [56.94, 60.82, 64.7, 69.88, 73.76, 78.29, 84.11, 89.93, 95.76, 101.58, 107.4, 113.23, 119.05, 124.87, 130.69]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [68.55, 73.23, 77.9, 84.13, 88.81, 94.26, 101.27, 108.28, 115.29, 122.3, 129.31, 136.33, 143.34, 150.35, 157.36]


                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "hits":2, "crit": true, "scale": [37.66, 40.23, 42.8, 46.22, 48.79, 51.79, 55.64, 59.49, 63.34, 67.2, 71.05, 74.9, 78.75, 82.6, 86.46]


                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [71.54, 76.42, 81.3, 87.8, 92.68, 98.37, 105.69, 113.01, 120.32, 127.64, 134.96, 142.28, 149.59, 156.91, 164.23]


                    },
                    {
                        "name": "6-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [95.83, 102.37, 108.9, 117.61, 124.15, 131.77, 141.57, 151.37, 161.17, 170.97, 180.77, 190.58, 200.38, 210.18, 219.98]


                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [121.09, 129.34, 137.6, 148.61, 156.86, 166.5, 178.88, 191.26, 203.65, 216.03, 228.42, 240.8, 253.18, 265.57, 277.95]


                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [81.83, 88.49, 95.16, 104.67, 111.33, 118.94, 129.41, 139.88, 150.35, 161.76, 173.18, 184.6, 196.02, 207.44, 218.86]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [163.63, 176.95, 190.27, 209.3, 222.62, 237.84, 258.77, 279.7, 300.63, 323.46, 346.29, 369.12, 391.96, 414.79, 437.62]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [204.39, 221.02, 237.66, 261.42, 278.06, 297.07, 323.21, 349.36, 375.5, 404.02, 432.54, 461.06, 489.57, 518.09, 546.61]

                    }
                ]
            },
            {
                "name": "Lemniscatic Wind Cycling", "type": "skill", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "anemo",  "stat": "atk", "crit": true, "scale": [252.8, 271.76, 290.72, 316, 334.96, 353.92, 379.2, 404.48, 429.76, 455.04, 480.32, 505.6, 537.2, 568.8, 600.4]

                    }]
            },
            {
                "name": "Bane of All Evil", "type": "burst", "damage": false, "vision": "anemo", "parts": [


                ],
                "apply": { "id": 347 }
            }
        ],
        "const": [
            {
                "name": "Dissolution Eon: Destroyer of Worlds",
                "desc": "Increases Lemniscatic Wind Cycling's charges by 1."
            },
            {
                "name": "Annihilation Eon: Blossom of Kaleidos",
                "desc": "When in the party and not on the field, Xiao's Energy Recharge is increased by 25%."
            },
            {
                "name": "Conqueror of Evil: Wrath Deity",
                "desc": "Increases the Level of Lemniscatic Wind Cycling by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Transcension: Extinction of Suffering",
                "desc": "When Xiao's HP falls below 50%, he gains a 100% DEF Bonus.",
                "apply": { "id": 348, "option": 0 }
            },
            {
                "name": "Evolution Eon: Origin of Ignorance",
                "desc": "Increases the Level of Bane of All Evil by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Conqueror of Evil: Guardian Yaksha",
                "desc": "While under the effects of Bane of All Evil, hitting at least 2 opponents with Xiao's Plunging Attack will immediately grant him 1 charge of Lemniscatic Wind Cycling, and for the next 1s, he may use Lemniscatic Wind Cycling while ignoring its CD."
            }

        ],
        "passive": [
            {
                "name": "Transcension: Gravity Defier",
                "desc": "Decreases climbing Stamina consumption for your own party members by 20%. Not stackable with Passive Talents that provide the exact same effects.",
                "level": 0
            },
            {
                "name": "Conqueror of Evil: Tamer of Demons",
                "desc": "While under the effects of Bane of All Evil, all DMG dealt by Xiao increases by 5%. DMG increases by a further 5% for every 3s the ability persists. The maximum DMG Bonus is 25%.",
                "level": 2,
                "apply": { "id": 349, "option": 3 }
            },
            {
                "name": "Dissolution Eon: Heaven Fall",
                "desc": "Using Lemniscatic Wind Cycling increases the DMG of subsequent uses of Lemniscatic Wind Cycling by 15%. This effect lasts for 7s, and has a maximum of 3 stacks.Gaining a new stack refreshes the effect's duration.",
                "level": 8,
                "apply": { "id": 350, "option": 2 }
            }
        ],
        "ascension": [{ "type": "item", "id": "juvenile_jade" },{ "type": "group", "id": "slime" }, { "type": "item", "id": "qingxin" }]
    },
    "hutao": {
        "id": 30,
        "name": "Hu Tao",
        "weapon": "polearm",
        "vision": "pyro",
        "stats": [
            { "stat": "hp_base", "values": [1211, 3141, 4179, 6253, 6990, 8042, 9026, 10089, 10826, 11899, 12637, 13721, 14459, 15552] },
            { "stat": "atk_base", "values": [8, 21, 29, 43, 48, 55, 62, 69, 74, 81, 86, 94, 99, 106] },
            { "stat": "def_base", "values": [68, 177, 235, 352, 394, 453, 508, 568, 610, 670, 712, 773, 815, 876] },
            { "stat": "critdmg", "values": [0, 0, 0, 0, 9.6, 9.6, 19.2, 19.2, 19.2, 19.2, 28.8, 28.8, 38.4, 38.4] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }
        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [46.89, 50.08, 53.28, 57.54, 60.74, 64.47, 69.26, 74.06, 78.85, 83.65, 88.44, 93.24, 98.04, 102.83, 107.63]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [48.25, 51.54, 54.83, 59.22, 62.51, 66.35, 71.28, 76.22, 81.15, 86.09, 91.02, 95.96, 100.89, 105.83, 110.76]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [61.05, 65.21, 69.38, 74.93, 79.09, 83.94, 90.19, 96.43, 102.68, 108.92, 115.16, 121.41, 127.65, 133.89, 140.14]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [65.64, 70.12, 74.59, 80.56, 85.03, 90.26, 96.97, 103.68, 110.4, 117.11, 123.82, 130.54, 137.25, 143.96, 150.68]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[33.27, 35.2], [35.54, 37.6], [37.81, 40], [40.84, 43.2], [43.1, 45.6], [45.75, 48.4], [49.15, 52], [52.56, 55.6], [55.96, 59.2], [59.36, 62.8], [62.77, 66.4], [66.17, 70], [69.57, 73.6], [72.98, 77.2], [76.38, 80.8]]

                    },
                    {
                        "name": "6-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [85.96, 91.82, 97.68, 105.49, 111.36, 118.19, 126.98, 135.78, 144.57, 153.36, 162.15, 170.94, 179.73, 188.52, 197.31]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [135.96, 145.23, 154.5, 166.86, 176.13, 186.95, 200.85, 214.76, 228.66, 242.57, 256.47, 270.38, 284.28, 298.19, 312.09]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [65.42, 69.88, 74.34, 80.29, 84.75, 89.95, 96.64, 103.33, 110.02, 116.71, 123.4, 130.1, 136.79, 143.48, 150.17]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [130.81, 139.73, 148.65, 160.54, 169.46, 179.86, 193.24, 206.62, 220, 233.38, 246.76, 260.13, 273.51, 286.89, 300.27]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [163.39, 174.53, 185.67, 200.52, 211.66, 224.66, 241.37, 258.08, 274.79, 291.5, 308.21, 324.92, 341.63, 358.34, 375.05]
                    }
                ]
            },
            {
                "name": "Guide to Afterlife", "type": "skill", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Blood Blossom", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "hits":2, "scale": [64, 68.8, 73.6, 80, 84.8, 89.6, 96, 102.4, 108.8, 115.2, 121.6, 128, 136, 144, 152]

                    },
                    {
                        "name": "Ominous Rainfall", "type": "skill", "req": { "type": "const", "val": 2, "subtype": "min" }, "damage": true, "vision": "pyro", "stat": "hp", "crit": true, "scale": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

                    }
                ],
                "apply": { "id": 356 }
            },
            {
                "name": "Spirit Soother", "type": "burst", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [303.27, 321.43, 339.59, 363.2, 381.36, 399.52, 423.13, 446.74, 470.34, 493.95, 517.56, 541.17, 564.78, 588.38, 611.99]
                    },
                    {
                        "name": "Low HP Skill", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [379.09, 401.79, 424.49, 454, 476.7, 499.4, 528.91, 558.42, 587.93, 617.44, 646.95, 676.46, 705.97, 735.48, 764.99]
                    },
                    {
                        "name": "HP Regeneration", "type": "healing", "damage": false, "vision": "pyro", "stat": "hp", "crit": false, "scale": [6.26, 6.64, 7.01, 7.5, 7.88, 8.25, 8.74, 9.23, 9.71, 10.2, 10.69, 11.18, 11.66, 12.15, 12.64]
                    },
                    {
                        "name": "Low HP Regeneration", "type": "healing", "damage": false, "vision": "pyro", "stat": "hp", "crit": false, "scale": [8.35, 8.85, 9.35, 10, 10.5, 11, 11.65, 12.3, 12.95, 13.6, 14.25, 14.9, 15.55, 16.2, 16.85]
                    }

                ]
            }
        ],
        "const": [
            {
                "name": "Crimson Bouquet",
                "desc": "While in Paramita Papilio state activated by Guide to Afterlife, Hu Tao's Charge Attacks do not consume Stamina.",
            },
            {
                "name": "Ominous Rainfall",
                "desc": "Increases the Blood Blossom DMG by the amount equal to 10% of Hu Tao's Max HP at the time the effect is applied. Additionally, Spirit Soother will also apply the Blood Blossom effect."
            },
            {
                "name": "Lingering Carmine",
                "desc": "Increases the Level of Guide to Afterlife by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Garden of Eternal Rest",
                "desc": "Upon defeating an enemy affected by Blood Blossom that Hu Tao applied herself, all nearby allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 15s."
            },
            {
                "name": "Floral Incense",
                "desc": "Increases the Level of Spirit Soother by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Butterfly's Embrace",
                "desc": "Triggers when Hu Tao's HP drops below 25%, or when she suffers a lethal strike:<br>Hu Tao will not fall as a result of the DMG sustained. Additionally, for the next 10s, all of her Elemental and Physical RES is increased by 200%, her CRIT Rate is increased by 100%, and her resistance to interruption is greatly increased.<br>This effect triggers automatically when Hu Tao has 1 HP left.< br >Can only occur once every 60s.",
                "apply": { "id": 355, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "The More the Merrier",
                "desc": "When Hu Tao cooks a dish perfectly, she has a 18% chance to receive an additional \"Suspicious\" dish of the same type.",
                "level": 0
            },
            {
                "name": "Flutter By",
                "desc": "When Paramita Papilio state activated by Guide to Afterlife is over, all allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 8s.",
                "level": 2
            },
            {
                "name": "Sanguine Rouge",
                "desc": "When Hu Tao's HP is equal to or less than 50%, her Pyro DMG Bonus is increased by 33%.",
                "level": 8,
                "apply": { "id": 353, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "juvenile_jade" },{ "type": "group", "id": "nectar" }, { "type": "item", "id": "silk_flower" }],
        "party_effects": [
            { "type": "apply", "id": 352, "option": 0, "desc": "When Paramita Papilio state activated by Guide to Afterlife is over, all allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 8s." },
            { "type": "apply", "id": 354, "option": 0, "desc": "Upon defeating an enemy affected by Blood Blossom that Hu Tao applied herself, all nearby allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 15s." },
        ]
    },
    "rosaria": {
        "id": 31,
        "name": "Rosaria",
        "weapon": "polearm",
        "vision": "cryo",
        "stats": [
            { "stat": "hp_base", "values": [1030, 2647, 3417, 5118, 5665, 6516, 7245, 8096, 8643, 9493, 10040, 10891, 11438, 12289] },
            { "stat": "atk_base", "values": [20, 52, 67, 100, 111, 127, 141, 158, 169, 185, 196, 213, 223, 240] },
            { "stat": "def_base", "values": [60, 153, 197, 296, 327, 376, 418, 468, 499, 548, 580, 629, 661, 710] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }
        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [52.46, 56.73, 61, 67.1, 71.37, 76.25, 82.96, 89.67, 96.38, 103.7, 111.02, 118.34, 125.66, 132.98, 140.3]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [51.6, 55.8, 60, 66, 70.2, 75, 81.6, 88.2, 94.8, 102, 109.2, 116.4, 123.6, 130.8, 138]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits": 2, "scale": [31.82, 34.41, 37, 40.7, 43.29, 46.25, 50.32, 54.39, 58.46, 62.9, 67.34, 71.78, 76.22, 80.66, 85.1]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [69.66, 75.33, 81, 89.1, 94.77, 101.25, 110.16, 119.07, 127.98, 137.7, 147.42, 157.14, 166.86, 176.58, 186.3]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[41.62, 43], [45.01, 46.5], [48.4, 50], [53.24, 55], [56.63, 58.5], [60.5, 62.5], [65.82, 68], [71.15, 73.5], [76.47, 79], [82.28, 85], [88.09, 91], [93.9, 97], [99.7, 103], [105.51, 109], [111.32, 115]]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [136.74, 147.87, 159, 174.9, 186.03, 198.75, 216.24, 233.73, 251.22, 270.3, 289.38, 308.46, 327.54, 346.62, 365.7]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]

                    }
                ]
            },
            {
                "name": "Ravaging Confession", "type": "skill", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [[58.4, 136], [62.78, 146.2], [67.16, 156.4], [73, 170], [77.38, 180.2], [81.76, 190.4], [87.6, 204], [93.44, 217.6], [99.28, 231.2], [105.12, 244.8], [110.96, 258.4], [116.8, 272], [124.1, 289], [131.4, 306], [138.7, 323]]

                    }
                ]
            },
            {
                "name": "Rites of Termination", "type": "burst", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [[104, 152], [111.8, 163.4], [119.6, 174.8], [130, 190], [137.8, 201.4], [145.6, 212.8], [156, 228], [166.4, 243.2], [176.8, 258.4], [187.2, 273.6], [197.6, 288.8], [208, 304], [221, 323], [234, 342], [247, 361]]
               },
                    {
                        "name": "Ice Lance DoT", "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [132, 141.9, 151.8, 165, 174.9, 184.8, 198, 211.2, 224.4, 237.6, 250.8, 264, 280.5, 297, 313.5]
                 }
                ]
            }
        ],
        "const": [
            {
                "name": "Unholy Revelation",
                "desc": "When Rosaria deals a CRIT Hit, her ATK SPD increases by 10% and her Normal Attack DMG increases by 10% for 4s.",
                "apply": { "id": 372, "option": 0 }
            },
            {
                "name": "Land Without Promise",
                "desc": "The duration of the Ice Lance created by Rites of Termination is increased by 4s."
            },
            {
                "name": "The Wages of Sin",
                "desc": "Increases the Level of Ravaging Confession by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Painful Grace",
                "desc": "Ravaging Confession's CRIT Hits regenerate 5 Energy for Rosaria.<br>Can only be triggered once each time Ravaging Confession is cast."
            },
            {
                "name": "Last Rites",
                "desc": "Increases the Level of Rites of Termination by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Divine Retribution",
                "desc": "Rites of Termination's attack decreases opponents' Physical RES by 20% for 10s.",
                "apply": { "id": 373, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Night Walk",
                "desc": "At night (18:00–6:00), increases the Movement SPD of your own party members by 10%.<br>Does not take effect in Domains, Trounce Domains, or Spiral Abyss.Not stackable with Passive Talents that provide the exact same effects.",
                "level": 0
            },
            {
                "name": "Regina Probationum",
                "desc": "When Rosaria strikes an opponent from behind using Ravaging Confession, Rosaria's CRIT Rate increases by 12% for 5s.",
                "level": 2,
                "apply": { "id": 374, "option": 0 }
            },
            {
                "name": "Shadow Samaritan",
                "desc": "Casting Rites of Termination increases CRIT Rate of all nearby party members (except Rosaria herself) by 15% of Rosaria's CRIT Rate for 10s.<br>CRIT Rate Bonus gained this way cannot exceed 15%.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "hoarfrost_core" },{ "type": "group", "id": "fatui_insignia" }, { "type": "item", "id": "valberry" }],
        "party_effects": [
            { "type": "stat", "id": "rosariacrit" },
            { "type": "apply", "id": 373, "option": 0, "desc": "Rites of Termination's attack decreases opponents' Physical RES by 20% for 10s." },
            { "type": "apply", "id": 375, "option": 0, "desc": "Casting Rites of Termination increases CRIT Rate of all nearby party members (except Rosaria herself) by 15% of Rosaria's CRIT Rate for 10s.<br>CRIT Rate Bonus gained this way cannot exceed 15%." },

         ]
    },
    "yanfei": {
        "id": 32,
        "name": "Yanfei",
        "weapon": "catalyst",
        "vision": "pyro",
        "stats": [
            { "stat": "hp_base", "values": [784, 2014, 2600, 3895, 4311, 4959, 5514, 6161, 6578, 7225, 7641, 8289, 8705, 9352] },
            { "stat": "atk_base", "values": [20, 52, 67, 100, 111, 127, 141, 158, 169, 185, 196, 213, 223, 240] },
            { "stat": "def_base", "values": [49, 126, 163, 244, 271, 311, 346, 387, 413, 453, 480, 520, 546, 587] },
            { "stat": "pyro", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }
        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [58.34, 62.72, 67.09, 72.93, 77.3, 81.68, 87.51, 93.35, 99.18, 105.01, 110.85, 116.68, 123.98, 131.27, 138.56]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [52.13, 56.04, 59.94, 65.16, 69.07, 72.98, 78.19, 83.4, 88.61, 93.83, 99.04, 104.25, 110.77, 117.28, 123.8]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [76.01, 81.71, 87.41, 95.02, 100.72, 106.42, 114.02, 121.62, 129.22, 136.82, 144.42, 152.03, 161.53, 171.03, 180.53]

                    },
                    {
                        "name": "Charged - 0 Seals", "type": "charged", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [98.23, 104.11, 109.99, 117.64, 123.52, 129.4, 137.05, 144.7, 152.34, 159.99, 167.64, 175.28, 182.93, 190.58, 198.22]
                    },
                    {
                        "name": "Charged - 1 Seal", "type": "charged", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [115.56, 122.48, 129.4, 138.4, 145.32, 152.24, 161.24, 170.23, 179.23, 188.22, 197.22, 206.22, 215.21, 224.21, 233.2]
                    },
                    {
                        "name": "Charged - 2 Seals", "type": "charged", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [132.9, 140.86, 148.81, 159.16, 167.12, 175.08, 185.42, 195.77, 206.11, 216.46, 226.8, 237.15, 247.49, 257.84, 268.18]
                    },
                    {
                        "name": "Charged - 3 Seals", "type": "charged", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [150.23, 159.23, 168.23, 179.92, 188.92, 197.91, 209.61, 221.3, 233, 244.69, 256.39, 268.08, 279.78, 291.47, 303.17]
                    },
                    {
                        "name": "Charged - 4 Seals", "type": "charged", "damage": true, "req": { "type": "const", "val": 6, "subtype": "min" }, "vision": "pyro", "stat": "atk", "crit": true, "scale": [167.57, 177.6, 187.64, 200.68, 210.71, 220.75, 233.79, 246.84, 259.88, 272.92, 285.97, 299.01, 312.06, 325.1, 338.15]
                    },
                    {
                        "name": "Blazing Eye", "type": "charged", "damage": true, "req": { "type": "level", "val": 8, "subtype": "min" }, "vision": "pyro", "stat": "atk", "crit": true, "scale": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
                    }
                ]
            },
            {
                "name": "Signed Edict", "type": "skill", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [169.6, 182.32, 195.04, 212, 224.72, 237.44, 254.4, 271.36, 288.32, 305.28, 322.24, 339.2, 360.4, 381.6, 402.8]

                    }
                ]
            },
            {
                "name": "Done Deal", "type": "burst", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [182.4, 196.08, 209.76, 228, 241.68, 255.36, 273.6, 291.84, 310.08, 328.32, 346.56, 364.8, 387.6, 410.4, 433.2]
                    },
                    {
                        "name": "Supreme Amnesty", "type": "shield", "damage": false, "req": { "type": "const", "val": 4, "subtype": "min" },"vision": "pyro", "stat": "hp", "crit": false, "scale": [45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45]
                    }

                ],
                "apply": { "id": 376 }
            }
        ],
        "const": [
            {
                "name": "The Law Knows No Kindness",
                "desc": "When Yanfei uses her Charged Attack, each existing Scarlet Seal additionally reduces the stamina cost of this Charged Attack by 10% and increases resistance against interruption during its release.",
            },
            {
                "name": "Right of Final Interpretation",
                "desc": "Increases Yanfei's Charged Attack CRIT Rate by 20% against enemies below 50% HP.",
                "apply": { "id": 377, "option": 0 }
            },
            {
                "name": "Samadhi Fire-Forged",
                "desc": "Increases the Level of Signed Edict by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Supreme Amnesty",
                "desc": "When Done Deal is used:<br>Creates a shield that absorbs up to 45% of Yanfei's Max HP for 15s. This shield absorbs Pyro DMG 250% more effectively."
            },
            {
                "name": "Abiding Affidavit",
                "desc": "Increases the Level of Done Deal by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Extra Clause",
                "desc": "Increases the maximum number of Scarlet Seals by 1."
            }

        ],
        "passive": [
            {
                "name": "Encyclopedic Expertise",
                "desc": "Displays the location of nearby resources unique to Liyue on the mini-map.",
                "level": 0
            },
            {
                "name": "Proviso",
                "desc": "When Yanfei consumes Scarlet Seals by using a Charged Attack, each Scarlet Seal will increase Yanfei's Pyro DMG Bonus by 5%. This effects lasts for 6s. When a Charged Attack is used again during the effect's duration, it will dispel the previous effect.",
                "level": 2,
                "apply": { "id": 378, "option": 1 }
            },
            {
                "name": "Blazing Eye",
                "desc": "When Yanfei's Charged Attack deals a CRIT Hit to opponents, she will deal an additional instance of AoE Pyro DMG equal to 80% of her ATK. This DMG counts as Charged Attack DMG.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "juvenile_jade" },{ "type": "group", "id": "treasure_insignia" }, { "type": "item", "id": "noctilous_jade" }],
        "party_effects": []
    },
    "eula": {
        "id": 33,
        "name": "Eula",
        "weapon": "claymore",
        "vision": "cryo",
        "stats": [
            { "stat": "hp_base", "values": [1030, 2671, 3554, 5317, 5944, 6839, 7675, 8579, 9207, 10119, 10746, 11669, 12296, 13226] },
            { "stat": "atk_base", "values": [27, 69, 92, 138, 154, 177, 198, 222, 238, 262, 278, 302, 318, 342] },
            { "stat": "def_base", "values": [58, 152, 202, 302, 337, 388, 436, 487, 523, 574, 610, 662, 698, 751] },
            { "stat": "critdmg", "values": [0, 0, 0, 0, 9.6, 9.6, 19.2, 19.2, 19.2, 19.2, 28.8, 28.8, 38.4, 38.4] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [89.73, 97.04, 104.34, 114.77, 122.08, 130.43, 141.9, 153.38, 164.86, 177.38, 191.72, 208.6, 225.47, 242.34, 260.75]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [93.55, 101.17, 108.78, 119.66, 127.27, 135.98, 147.94, 159.91, 171.87, 184.93, 199.88, 217.47, 235.06, 252.65, 271.84]
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":2, "scale": [56.8, 61.42, 66.05, 72.65, 77.27, 82.56, 89.82, 97.09, 104.35, 112.28, 121.36, 132.04, 142.72, 153.4, 165.05]
                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [112.64, 121.81, 130.98, 144.08, 153.25, 163.73, 178.13, 192.54, 206.95, 222.67, 240.68, 261.86, 283.03, 304.21, 327.32]
                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits": 2, "scale": [71.83, 77.68, 83.53, 91.88, 97.73, 104.41, 113.6, 122.79, 131.97, 142, 153.48, 166.99, 180.49, 194, 208.74]
                    },
                    {
                        "name": "Charged Attack Spinning", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [68.8, 74.4, 80, 88, 93.6, 100, 108.8, 117.6, 126.4, 136, 147, 159.94, 172.87, 185.81, 199.92]
                    },
                    {
                        "name": "Charged Attack Final", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [124.4, 134.52, 144.65, 159.12, 169.24, 180.81, 196.72, 212.64, 228.55, 245.91, 265.79, 289.18, 312.57, 335.96, 361.48]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 159.37, 173.39, 187.41, 201.44, 216.74]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21]
                    }
                ]
            },
            {
                "name": "Icetide Vortex", "type": "skill", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Press", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [146.4, 157.38, 168.36, 183, 193.98, 204.96, 219.6, 234.24, 248.88, 263.52, 278.16, 292.8, 311.1, 329.4, 347.7]

                    },
                    {
                        "name": "Hold", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [245.6, 264.02, 282.44, 307, 325.42, 343.84, 368.4, 392.96, 417.52, 442.08, 466.64, 491.2, 521.9, 552.6, 583.3]

                    },
                    {
                        "name": "Icewhirl Brand", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [96, 103.2, 110.4, 120, 127.2, 134.4, 144, 153.6, 163.2, 172.8, 182.4, 192, 204, 216, 228]

                    }

                ],
                "apply": {"id":381}
            },
            {
                "name": "Glacial Illumination", "type": "burst", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [245.6, 264.02, 282.44, 307, 325.42, 343.84, 368.4, 392.96, 417.52, 442.08, 466.64, 491.2, 521.9, 552.6, 583.3]

                    },
                    {
                        "name": "Lightfall Sword Base", "type": "burst", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [367.05, 396.92, 426.8, 469.48, 499.36, 533.5, 580.45, 627.4, 674.34, 725.56, 784.25, 853.26, 922.27, 991.29, 1066.57]

                    },
                    {
                        "name": "Lightfall Sword per Stack", "type": "burst", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [74.99, 81.1, 87.2, 95.92, 102.02, 109, 118.59, 128.18, 137.78, 148.24, 160.23, 174.33, 188.43, 202.53, 217.91]

                    },
                    {
                        "name": "Lightfall Sword - Roiling Rime", "req": { "type": "level", "val": 2, "subtype": "min" }, "type": "burst", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [183.525, 198.46, 213.4, 234.74, 249.68, 266.75, 290.225, 313.7, 337.17, 362.78, 392.125, 426.63, 461.135, 495.645, 533.285]

                    }]
            }
        ],
        "const": [
            {
                "name": "Tidal Illusion",
                "desc": "Every time Icetide Vortex's Grimheart stacks are consumed, Eula's Physical DMG is increased by 30% for 6s.<br>Each stack consumed will increase the duration of this effect by 6s up to a maximum of 18s.",
                "apply": { "id": 382, "option": 0 }
            },
            {
                "name": "Lady of Seafoam",
                "desc": "Decreases the CD of Icetide Vortex's Holding Mode, rendering it identical to Press CD"
            },
            {
                "name": "Lawrence Pedigree",
                "desc": "Increases the Level of Glacial Illumination by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "The Obstinacy of One's Inferiors",
                "desc": "Lightfall Swords deal 25% increased DMG against opponents with less than 50% HP.",
                "apply": { "id": 383, "option": 0 }
            },
            {
                "name": "Chivalric Quality",
                "desc": "Increases the Level of Icetide Vortex by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Noble Obligation",
                "desc": "Lightfall Swords created by Glacial Illumination start with 5 stacks of energy. Normal Attacks, Elemental Skills, and Elemental Bursts have a 50% chance to grant the Lightfall Sword an additional stack of energy."
            }

        ],
        "passive": [
            {
                "name": "Aristocratic Introspection",
                "desc": "When Eula crafts Character Talent Materials, she has a 10% chance to receive double the product.",
                "level": 0
            },
            {
                "name": "Roiling Rime",
                "desc": "If 2 stacks of Grimheart are consumed upon unleashing the Holding Mode of Icetide Vortex, a Shattered Lightfall Sword will be created that will explode immediately, dealing 50% of the basic Physical DMG dealt by a Lightfall Sword created by Glacial Illumination.",
                "level": 2
            },
            {
                "name": "Wellspring of War-Lust",
                "desc": "When Glacial Illumination is cast, the CD of Icetide Vortex is reset and Eula gains 1 stack of Grimheart.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "crystalline_bloom" },{ "type": "group", "id": "mask" }, { "type": "item", "id": "dandelion_seed" }],
        "party_effects": [
            { "type": "apply", "id": 381, "option": 0, "desc": "If Grimheart stacks are consumed, surrounding opponents will have their Physical RES and Cryo RES decreased." }
        ]
    },
    "kazuha": {
        "id": 34,
        "name": "Kaedahera Kazuha",
        "short_name": "Kazuha",
        "weapon": "sword",
        "vision": "anemo",
        "stats": [
            { "stat": "hp_base", "values": [1039, 2695, 3586, 5366, 5999, 6902, 7747, 8659, 9292, 10213, 10846, 11777, 12410, 13348] },
            { "stat": "atk_base", "values": [23, 60, 80, 119, 133, 153, 172, 192, 206, 227, 241, 262, 276, 297] },
            { "stat": "def_base", "values": [63, 163, 217, 324, 363, 417, 468, 523, 562, 617, 656, 712, 750, 807] },
            { "stat": "elemastery", "values": [0, 0, 0, 0, 28.8, 28.8, 57.6, 57.6, 57.6, 57.6, 86.4, 86.4, 115.2, 115.2] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }
        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [44.98, 48.64, 52.3, 57.53, 61.19, 65.38, 71.13, 76.88, 82.63, 88.91, 96.1, 104.56, 113.02, 121.47, 130.7]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [45.24, 48.92, 52.6, 57.86, 61.54, 65.75, 71.54, 77.32, 83.11, 89.42, 96.65, 105.16, 113.66, 122.17, 131.45]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[25.8, 30.96], [27.9, 33.48], [30, 36], [33, 39.6], [35.1, 42.12], [37.5, 45], [40.8, 48.96], [44.1, 52.92], [47.4, 56.88], [51, 61.2], [55.13, 66.15], [59.98, 71.97], [64.83, 77.79], [69.68, 83.61], [74.97, 89.96]]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [60.72, 65.66, 70.6, 77.66, 82.6, 88.25, 96.02, 103.78, 111.55, 120.02, 129.73, 141.14, 152.56, 163.98, 176.43]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "hits": 3, "crit": true, "scale": [25.37, 27.44, 29.5, 32.45, 34.52, 36.88, 40.12, 43.37, 46.61, 50.15, 54.21, 58.98, 63.75, 68.52, 73.72]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[43, 74.65], [46.5, 80.72], [50, 86.8], [55, 95.48], [58.5, 101.56], [62.5, 108.5], [68, 118.05], [73.5, 127.6], [79, 137.14], [85, 147.56], [91.88, 159.5], [99.96, 173.53], [108.05, 187.57], [116.13, 201.6], [124.95, 216.91]]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [81.83, 88.49, 95.16, 104.67, 111.33, 118.94, 129.41, 139.88, 150.35, 161.76, 173.18, 184.6, 196.02, 207.44, 218.86]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [163.63, 176.95, 190.27, 209.3, 222.62, 237.84, 258.77, 279.7, 300.63, 323.46, 346.29, 369.12, 391.96, 414.79, 437.62]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [204.39, 221.02, 237.66, 261.42, 278.06, 297.07, 323.21, 349.36, 375.5, 404.02, 432.54, 461.06, 489.57, 518.09, 546.61]

                    }
                ]
            },
            {
                "name": "Chihayaburu", "type": "skill", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "Press", "type": "skill", "damage": true, "vision": "anemo",  "stat": "atk", "crit": true, "scale": [192, 206.4, 220.8, 240, 254.4, 268.8, 288, 307.2, 326.4, 345.6, 364.8, 384, 408, 432, 456]

                    },
                    {
                        "name": "Hold", "type": "skill", "damage": true, "vision": "anemo","stat": "atk", "crit": true, "scale": [260.8, 280.36, 299.92, 326, 345.56, 365.12, 391.2, 417.28, 443.36, 469.44, 495.52, 521.6, 554.2, 586.8, 619.4]

                    }]
            },
            {
                "name": "Kazuha Slash", "type": "burst", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "Slashing", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [262.4, 282.08, 301.76, 328, 347.68, 367.36, 393.6, 419.84, 446.08, 472.32, 498.56, 524.8, 557.6, 590.4, 623.2]

                    },
                    {
                        "name": "DoT", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [120, 129, 138, 150, 159, 168, 180, 192, 204, 216, 228, 240, 255, 270, 285]

                    },
                    {
                        "name": "Additional Elemental", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [36, 38.7, 41.4, 45, 47.7, 50.4, 54, 57.6, 61.2, 64.8, 68.4, 72, 76.5, 81, 85.5]

                    }

                ]
            }
        ],
        "const": [
            {
                "name": "Scarlet Hills",
                "desc": "Decreases Chihayaburu's CD by 10%. Using Kazuha Slash resets the CD of Chihayaburu."
            },
            {
                "name": "Yamaarashi Tailwind",
                "desc": "The Autumn Whirlwind field created by Kazuha Slash has the following effects:<br>Increases Kaedehara Kazuha's own Elemental Mastery by 200.<br>Increases the Elemental Mastery of characters within the field by 200.<br>The Elemental Mastery- increasing effects of this Constellation do not stack.",
                "apply": { "id": 389, "option": 0 }
            },
            {
                "name": "Maple Monogatari",
                "desc": "Increases the Level of Chihayaburu by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Oozora Genpou",
                "desc": "When Kaedehara Kazuha's Energy is lower than 45, he obtains the following effects:<br>Pressing or Holding Chihayaburu regenerates 3 or 4 Energy for Kaedehara Kazuha, respectively.<br>When gliding, Kaedehara Kazuha regenerates 2 Energy per second.."
            },
            {
                "name": "Wisdom of Bansei",
                "desc": "Increases the Level of Kazuha Slash by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Crimson Momiji",
                "desc": "After using Chihayaburu or Kazuha Slash, Kaedehara Kazuha gains an Anemo Infusion for 5s. Additionally, each point of Elemental Mastery will increase the DMG dealt by Kaedehara Kazuha's Normal, Charged, and Plunging Attack by 0.2%.",
                "apply": { "id": 390, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Cloud Strider",
                "desc": "Decreases sprinting Stamina consumption for your own party members by 20%. Not stackable with Passive Talents that provide the exact same effects.",
                "level": 0
            },
            {
                "name": "Soumon Swordsmanship",
                "desc": "If Chihayaburu comes into contact with Hydro/Pyro/Cryo/Electro when cast, Chihayaburu will absorb that element and if Plunging Attack: Midare Ranzan is used before the effect expires, it will deal an additional 200% ATK of the absorbed elemental type as DMG. This will be considered Plunging Attack DMG.Elemental Absorption may only occur once per use of Chihayaburu.",
                "level": 2
            },
            {
                "name": "Poetics of Fuubutsu",
                "desc": "Upon triggering a Swirl reaction, Kaedehara Kazuha will grant teammates a 0.04% Elemental DMG Bonus to their corresponding Element for every point of Elemental Mastery he has for 8s. Bonuses for different elements obtained through this method can co-exist.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "maguu_kishin" },{ "type": "group", "id": "treasure_insignia" }, { "type": "item", "id": "sea_ganoderma" }],
        "party_effects": [
        { "type": "stat", "id": "kazuhaelemastery" },
        { "type": "apply", "id": 391, "option": 0, "desc": "Upon triggering a Swirl reaction, Kaedehara Kazuha will grant teammates a 0.04% Elemental DMG Bonus to their corresponding Element for every point of Elemental Mastery he has for 8s." },
        { "type": "apply", "id": 389, "option": 0, "desc": "The Autumn Whirlwind field created by Kazuha Slash increases the Elemental Mastery of characters within the field by 200." }
    ]
    },
    "sayu": {
        "id": 35,
        "name": "Sayu",
        "weapon": "claymore",
        "vision": "anemo",
        "stats": [
            { "stat": "hp_base", "values": [994, 2553, 3296, 4937, 5464, 6285, 6988, 7809, 8337, 9157, 9684, 10505, 11033, 11854] },
            { "stat": "atk_base", "values": [20, 53, 68, 102, 113, 130, 144, 161, 172, 189, 200, 216, 227, 244] },
            { "stat": "def_base", "values": [62, 160, 207, 310, 343, 395, 439, 491, 524, 575, 608, 660, 693, 745] },
            { "stat": "elemastery", "values": [0, 0, 0, 0, 24, 24, 48, 48, 48, 48, 72, 72, 96, 96] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }
        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [72.24, 78.12, 84, 92.4, 98.28, 105, 114.24, 123.48, 132.72, 142.8, 154.35, 167.93, 181.52, 195.1, 209.92]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [71.38, 77.19, 83, 91.3, 97.11, 103.75, 112.88, 122.01, 131.14, 141.1, 152.51, 165.93, 179.35, 192.78, 207.42]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":2, "scale": [43.43, 46.97, 50.5, 55.55, 59.09, 63.13, 68.68, 74.23, 79.79, 85.85, 92.79, 100.96, 109.13, 117.29, 126.2]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [98.13, 106.11, 114.1, 125.51, 133.5, 142.63, 155.18, 167.73, 180.28, 193.97, 209.66, 228.11, 246.56, 265.01, 285.14]

                    },
                    {
                        "name": "Charged Attack Spinning", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [62.55, 67.64, 72.73, 80, 85.09, 90.91, 98.91, 106.91, 114.91, 123.64, 133.64, 145.4, 157.16, 168.92, 181.75]

                    },
                    {
                        "name": "Charged Attack Final", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.09, 122.3, 131.5, 144.65, 153.86, 164.38, 178.84, 193.31, 207.77, 223.55, 241.63, 262.89, 284.16, 305.42, 328.62]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21]

                    },
                    {
                        "name": "Someone More Capable", "req": { "type": "passive", "val": 2, "subtype": "min" }, "type": "healing", "vision": "anemo", "stat": "elemastery", "crit": false, "scale": [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120], "flat": [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]

                    }
                ]
            },
            {
                "name": "Yoohoo Art: Fuuin Dash", "type": "skill", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "Fuufuu Windwheel", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [36, 38.7, 41.4, 45, 47.7, 50.4, 54, 57.6, 61.2, 64.8, 68.4, 72, 76.5, 81, 85.5]

                    },
                    {
                        "name": "Fuufuu Whirlwind Kick Press", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [158.4, 170.28, 182.16, 198, 209.88, 221.76, 237.6, 253.44, 269.28, 285.12, 300.96, 316.8, 336.6, 356.4, 376.2]

                    },
                    {
                        "name": "Fuufuu Whirlwind Kick Hold", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [217.6, 233.92, 250.24, 272, 288.32, 304.64, 326.4, 348.16, 369.92, 391.68, 413.44, 435.2, 462.4, 489.6, 516.8]

                    },
                    {
                        "name": "Fuufuu Windwheel Elemental", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [16.8, 18.06, 19.32, 21, 22.26, 23.52, 25.2, 26.88, 28.56, 30.24, 31.92, 33.6, 35.7, 37.8, 39.9]

                    },
                    {
                        "name": "Fuufuu Whirlwind Kick Elemental", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [76.16, 81.87, 87.58, 95.2, 100.91, 106.62, 114.24, 121.86, 129.47, 137.09, 144.7, 152.32, 161.84, 171.36, 180.88]

                    },
                ]
            },
            {
                "name": "Yoohoo Art: Mujina Flurry", "type": "burst", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "Activation", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [116.8, 125.56, 134.32, 146, 154.76, 163.52, 175.2, 186.88, 198.56, 210.24, 221.92, 233.6, 248.2, 262.8, 277.4]

                    },
                    {
                        "name": "Muji Muji Daruma",  "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [52, 55.9, 59.8, 65, 68.9, 72.8, 78, 83.2, 88.4, 93.6, 98.8, 104, 110.5, 117, 123.5]

                    },
                    {
                        "name": "Muji Muji Daruma - Sleep O'Clock", "req": { "type": "const", "val": 6, "subtype": "min" }, "type": "burst", "damage": true, "vision": "anemo", "stat": ["atk", "elemastery"], "multiplication": true, "crit": true, "scale": [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]

                    },
                    {
                        "name": "Activation Healing", "type": "healing", "vision": "anemo", "stat": "atk", "crit": false, "scale": [92.16, 99.07, 105.98, 115.2, 122.11, 129.02, 138.24, 147.46, 156.67, 165.89, 175.1, 184.32, 195.84, 207.36, 218.88], "flat": [577, 635, 698, 765, 837, 914, 996, 1083, 1174, 1270, 1371, 1477, 1588, 1703, 1824]

                    },
                    {
                        "name": "Muji Muji Daruma Regeneration", "req": { "type": "const", "val": 5, "subtype": "max" }, "type": "healing", "vision": "anemo", "stat": "atk", "crit": false, "scale": [79.87, 85.86, 91.85, 99.84, 105.83, 111.82, 119.81, 127.8, 135.78, 143.77, 151.76, 159.74, 169.73, 179.71, 189.7], "flat": [500, 550, 605, 663, 726, 792, 863, 938, 1017, 1101, 1188, 1280, 1376, 1476, 1580]

                    },
                    {
                        "name": "Muji Muji Daruma Regeneration", "req": { "type": "const", "val": 6, "subtype": "min" }, "type": "healing", "vision": "anemo", "stat": ["atk", "elemastery"], "crit": false, "scale": [[79.87, 85.86, 91.85, 99.84, 105.83, 111.82, 119.81, 127.8, 135.78, 143.77, 151.76, 159.74, 169.73, 179.71, 189.7], [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]], "flat": [500, 550, 605, 663, 726, 792, 863, 938, 1017, 1101, 1188, 1280, 1376, 1476, 1580]

                    }

                ]
            }
        ],
        "const": [
            {
                "name": "Multi-Task no Jutsu",
                "desc": "The Muji-Muji Daruma created by Yoohoo Art: Mujina Flurry will ignore HP limits and can simultaneously attack nearby opponents and heal characters."
            },
            {
                "name": "Egress Prep",
                "desc": "Yoohoo Art: Fuuin Dash gains the following effects:<br>DMG of Fuufuu Whirlwind Kick in Press Mode increased by 3.3%.<br>Every 0.5s in the Fuufuu Windwheel state will increase the DMG of this Fuufuu Whirlwind Kick by 3.3%.The maximum DMG increase possible through this method is 66%.",
                "apply": { "id": 407, "option": 0 }
            },
            {
                "name": "Eh, the Bunshin Can Handle It",
                "desc": "Increases the Level of Yoohoo Art: Mujina Flurry by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Skiving: New and Improved",
                "desc": "Sayu recovers 1.2 Energy when she triggers a Swirl reaction. This effect occurs once every 2s."
            },
            {
                "name": "Speed Comes First",
                "desc": "Increases the Level of Yoohoo Art: Fuuin Dash by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Sleep O'Clock",
                "desc": "The Muji-Muji Daruma created by Sayu's Yoohoo Art: Mujina Flurry will now also benefit from her Elemental Mastery. Each point of Sayu's Elemental Mastery will produce the following effects:<br>Increases the damage dealt by the Muji- Muji Daruma's attacks by 0.2% ATK. A maximum of 400% ATK can be gained via this method.<br>Increases the HP restored by the Muji - Muji Daruma by 3. A maximum of 6 000 additional HP can be restored in this manner."
            }

        ],
        "passive": [
            {
                "name": "Yoohoo Art: Silencer's Secret",
                "desc": "When Sayu is in the party, your characters will not startle Crystalflies and certain other animals when getting near them. Check the \"Other\" sub - category of the \"Living Beings / Wildlife\" section in the Archive for creatures this skill works on.",
                "level": 0
            },
            {
                "name": "Someone More Capable",
                "desc": "When Sayu triggers a Swirl reaction while active, she heals all your characters and nearby allies for 300 HP. She will also heal an additional 1.2 HP for every point of Elemental Mastery she has. This effect can be triggered once every 2s.",
                "level": 2
            },
            {
                "name": "No Work Today!",
                "desc": "The Muji-Muji Daruma created by Yoohoo Art: Mujina Flurry gains the following effects:<br>When healing a character, it will also heal characters near that healed character for 20% the amount of HP.<br>Increases the AoE of its attack against opponents.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "maguu_kishin" },{ "type": "group", "id": "nectar" }, { "type": "item", "id": "crystal_marrow" }]
    },
    "yoimiya": {
        "id": 36,
        "name": "Yoimiya",
        "weapon": "bow",
        "vision": "pyro",
        "stats": [
            { "stat": "hp_base", "values": [791, 2053, 2731, 4086, 4568, 5256, 5899, 6593, 7075, 7777, 8259, 8968, 9450, 10164] },
            { "stat": "atk_base", "values": [25, 65, 87, 130, 145, 167, 187, 209, 225, 247, 262, 285, 300, 323] },
            { "stat": "def_base", "values": [48, 124, 165, 247, 276, 318, 357, 399, 428, 470, 500, 542, 572, 615] },
            { "stat": "crit", "values": [0, 0, 0, 0, 4.8, 4.8, 9.6, 9.6, 9.6, 9.6, 14.4, 14.4, 19.2, 19.2] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }
        ],
        "attacks": [
            {
                "name": "Normal",
                "vision": "physical",
                "type": "normal",
                "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":2, "scale": [35.64, 38.07, 40.5, 43.74, 46.17, 49.01, 52.65, 56.29, 59.94, 63.59, 67.23, 70.88, 74.52, 78.17, 81.81]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [68.38, 73.04, 77.7, 83.92, 88.58, 94.02, 101.01, 108, 115, 121.99, 128.98, 135.98, 142.97, 149.96, 156.95]
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [88.89, 94.95, 101.01, 109.09, 115.15, 122.22, 131.31, 140.4, 149.49, 158.59, 167.68, 176.77, 185.86, 194.95, 204.04]
                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits": 2, "scale": [46.42, 49.59, 52.75, 56.97, 60.14, 63.83, 68.58, 73.32, 78.07, 82.82, 87.57, 92.31, 97.06, 101.81, 106.56]
                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [105.86, 113.08, 120.3, 129.92, 137.14, 145.56, 156.39, 167.22, 178.04, 188.87, 199.7, 210.53, 221.35, 232.18, 243.01]
                    },
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3]
                    },
                    {
                        "name": "Fully-Charged Aimed Shot", "type": "charged", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5]
                    },
                    {
                        "name": "Kindling Arrow", "type": "charged", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [16.4, 17.63, 18.86, 20.5, 21.73, 22.96, 24.6, 26.24, 27.88, 29.52, 31.16, 32.8, 34.85, 36.9, 38.95]
                    },
                    {
                        "name": "Naganohara Meteor Swarm", "req": { "type": "const", "val": 999, "subtype": "min" }, "type": "normal", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [9.84, 10.578, 11.316, 12.3, 13.038, 13.776, 14.76, 15.744, 16.728, 17.712, 18.696, 19.68, 20.91, 22.14, 23.37]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
                    },
                ]
            },
            {
                "name": "Niwabi Fire-Dance", "type": "skill", "damage": true, "vision": "pyro", "parts": [
                ],
                "apply": { "id": 408 }
            },
            {
                "name": "Ryuukin Saxifrage", "type": "burst", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [127.2, 136.74, 146.28, 159, 168.54, 178.08, 190.8, 203.52, 216.24, 228.96, 241.68, 254.4, 270.3, 286.2, 302.1]
                    },
                    {
                        "name": "Aurous Blaze Explosion", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [122, 131.15, 140.3, 152.5, 161.65, 170.8, 183, 195.2, 207.4, 219.6, 231.8, 244, 259.25, 274.5, 289.75]
                    },
                ]
            }
        ],
        "const": [
            {
                "name": "Agate Ryuukin",
                "desc": "The Aurous Blaze created by Ryuukin Saxifrage lasts for an extra 4s. Additionally, when an opponent affected by Aurous Blaze is defeated within its duration, Yoimiya's ATK is increased by 20% for 20s.",
                "apply": { "id": 409, "option": 0 }
            },
            {
                "name": "A Procession of Bonfires",
                "desc": "When Yoimiya's Pyro DMG scores a CRIT Hit, Yoimiya will gain a 25% Pyro DMG Bonus for 6s. This effect can be triggered even when Yoimiya is not the active character.",
                "apply": { "id": 410, "option": 0 }
            },
            {
                "name": "Trickster's Flare",
                "desc": "Increases the Level of Niwabi Fire-Dance by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Pyrotechnic Professional",
                "desc": "When Yoimiya's own Aurous Blaze triggers an explosion, Niwabi Fire-Dance's CD is decreased by 1.2s."
            },
            {
                "name": "A Summer Festival's Eve",
                "desc": "Increases the Level of Ryuukin Saxifrage by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Naganohara Meteor Swarm",
                "desc": "During Niwabi Fire-Dance, Yoimiya's Normal Attacks have a 50% chance of firing an extra Kindling Arrow that deals 60% of its original DMG. This DMG is considered Normal Attack DMG."
            },
        ],
        "passive": [
            {
                "name": "Blazing Match",
                "desc": "When Yoimiya crafts Decoration, Ornament, and Landscape-type Furnishings, she has a 100% chance to refund a portion of the materials used.",
                "level": 0
            },
            {
                "name": "Tricks of the Trouble-Maker",
                "desc": "During Niwabi Fire-Dance, shots from Yoimiya's Normal Attack will increase her Pyro DMG Bonus by 2% on hit. This effect lasts for 3s and can have a maximum of 10 stacks.",
                "level": 2,
                "apply": { "id": 411, "option": 0 }
            },
            {
                "name": "Summer Night's Dawn",
                "desc": "Using Ryuukin Saxifrage causes nearby party members (not including Yoimiya) to gain a 10% ATK increase for 15s. Additionally, a further ATK Bonus will be added on based on the number of \"Tricks of the Trouble- Maker\" stacks Yoimiya possesses when using Ryuukin Saxifrage. Each stack increases this ATK Bonus by 1%.",
                "level": 8
            },
        ],
        "ascension": [{ "type": "item", "id": "smoldering_pearl" },{ "type": "group", "id": "scroll" }, { "type": "item", "id": "naku_weed" }],
        "party_effects": [
            { "type": "apply", "id": 412, "option": 0, "desc": "Using Ryuukin Saxifrage causes nearby party members (not including Yoimiya) to gain a 10% ATK increase for 15s. Additionally, a further ATK Bonus will be added on based on the number of \"Tricks of the Trouble- Maker\" stacks Yoimiya possesses when using Ryuukin Saxifrage. Each stack increases this ATK Bonus by 1%." }
        ]
    },
    "ayaka": {
        "id": 37,
        "name": "Kamisato Ayaka",
        "short_name":"Ayaka",
        "weapon": "sword",
        "vision": "cryo",
        "stats": [
            { "stat": "hp_base", "values": [1001, 2597, 3455, 5170, 5779, 6649, 7462, 8341, 8951, 9838, 10448, 11345, 11954, 12858] },
            { "stat": "atk_base", "values": [27, 69, 92, 138, 154, 177, 198, 222, 238, 262, 278, 302, 318, 342] },
            { "stat": "def_base", "values": [61, 158, 211, 315, 352, 405, 455, 509, 546, 600, 637, 692, 729, 784] },
            { "stat": "critdmg", "values": [0, 0, 0, 0, 9.6, 9.6, 19.2, 19.2, 19.2, 19.2, 28.8, 28.8, 38.4, 38.4] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] },

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [45.73, 49.45, 53.17, 58.49, 62.21, 66.46, 72.31, 78.16, 84.01, 90.39, 96.77, 103.15, 109.53, 115.91, 122.29]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [48.68, 52.65, 56.61, 62.27, 66.23, 70.76, 76.99, 83.22, 89.44, 96.24, 103.03, 109.82, 116.62, 123.41, 130.2]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [62.62, 67.72, 72.82, 80.1, 85.19, 91.02, 99.03, 107.04, 115.05, 123.79, 132.53, 141.26, 150, 158.74, 167.48]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true,"hits":3, "scale": [22.65, 24.49, 26.33, 28.97, 30.81, 32.92, 35.81, 38.71, 41.61, 44.77, 47.93, 51.09, 54.25, 57.41, 60.57]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [78.18, 84.55, 90.91, 100, 106.36, 113.64, 123.64, 133.64, 143.64, 154.55, 165.45, 176.36, 187.27, 198.18, 209.09]
                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits": 3, "scale": [55.13, 59.61, 64.1, 70.51, 75, 80.13, 87.18, 94.23, 101.28, 108.97, 116.66, 124.35, 132.05, 139.74, 147.43]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ]
            },
            {
                "name": "Kamisato Art: Hyouka", "type": "skill", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [239.2, 257.14, 275.08, 299, 316.94, 334.88, 358.8, 382.72, 406.64, 430.56, 454.48, 478.4, 508.3, 538.2, 568.1]

                    }
                ]
            },
            {
                "name": "Kamisato Art: Senho", "vision": "cryo", "parts": [],
                "apply": { "id": 413, "option": 0 }
            },
            {
                "name": "Kamisato Art: Soumetsu", "type": "burst", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Cutting", "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [112.3, 120.72, 129.15, 140.38, 148.8, 157.22, 168.45, 179.68, 190.91, 202.14, 213.37, 224.6, 238.64, 252.68, 266.71]

                    },
                    {
                        "name": "Bloom", "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [168.45, 181.08, 193.72, 210.56, 223.2, 235.83, 252.68, 269.52, 286.36, 303.21, 320.05, 336.9, 357.96, 379.01, 400.07]

                    },
                    {
                        "name": "Cutting - Blizzard Blade Seki no To", "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true,"hits":2, "scale": [22.46, 24.144, 25.83, 28.076, 29.76, 31.444, 33.69, 35.936, 38.182, 40.428, 42.674, 44.92, 47.728, 50.536, 53.342]

                    },
                    {
                        "name": "Bloom - Blizzard Blade Seki no To", "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "hits": 2, "scale": [33.69, 36.216, 38.744, 42.112, 44.64, 47.166, 50.536, 53.904, 57.272, 60.642, 64.01, 67.38, 71.592, 75.802, 80.014]

                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Snowswept Sakura",
                "desc": "When Kamisato Ayaka's Normal or Charged Attacks deal Cryo DMG to opponents, it has a 50% chance of decreasing the CD of Kamisato Art: Hyouka by 0.3s. This effect can occur once every 0.1s."
            },
            {
                "name": "Blizzard Blade Seki no To",
                "desc": "When casting Kamisato Art: Soumetsu, unleashes 2 smaller additional Frostflake Seki no To, each dealing 20% of the original storm's DMG."
            },
            {
                "name": "Frostbloom Kamifubuki",
                "desc": "Increases the Level of Kamisato Art: Soumetsu by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Ebb and Flow",
                "desc": "Opponents damaged by Kamisato Art: Soumetsu's Frostflake Seki no To will have their DEF decreased by 30% for 6s.",
                "apply": { "id": 414, "option": 0 }
            },
            {
                "name": "Blossom Cloud Irutsuki",
                "desc": "Increases the Level of Kamisato Art: Hyouka by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Dance of Suigetsu",
                "desc": "Kamisato Ayaka gains Usurahi Butou every 10s, increasing her Charged Attack DMG by 298%. This buff will be cleared 0.5s after Ayaka's Charged ATK hits an opponent, after which the timer for this ability will restart.",
                "apply": { "id": 415, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Fruits of Shinsa",
                "desc": "When Ayaka crafts Weapon Ascension Materials, she has a 10% chance to receive double the product.",
                "level": 0
            },
            {
                "name": "Amatsumi Kunitsumi Sanctification",
                "desc": "After using Kamisato Art: Hyouka, Kamisato Ayaka's Normal and Charged Attacks deal 30% increased DMG for 6s.",
                "level": 2,
                "apply": { "id": 416, "option": 0 }
            },
            {
                "name": "Kanten Senmyou Blessing",
                "desc": "When the Cryo application at the end of Kamisato Art: Senho hits an opponent, Kamisato Ayaka gains the following effects:<br>Restores 10 Stamina<br>Gains 18% Cryo DMG Bonus for 10s.",
                "level": 8,
                "apply": { "id": 417, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "perpetual_heart" },{ "type": "group", "id": "handguard" }, { "type": "item", "id": "sakura_bloom" }],
        "party_effects": [
            { "type": "apply", "id": 414, "option": 0, "desc": "Opponents damaged by Kamisato Art: Soumetsu's Frostflake Seki no To will have their DEF decreased by 30% for 6s." }
        ]
    },
    "traveler_electro": {
        "id": 38,
        "name": "Traveler (Electro)",
        "short_name": "Traveler",
        "weapon": "sword",
        "vision": "electro",
        "stats": [
            { "stat": "hp_base", "values": [912, 2342, 3024, 4529, 5013, 5766, 6411, 7164, 7648, 8401, 8885, 9638, 10122, 10875] },
            { "stat": "atk_base", "values": [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212] },
            { "stat": "def_base", "values": [57, 147, 190, 284, 315, 362, 402, 450, 480, 527, 558, 605, 635, 683] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [44.46, 48.08, 51.7, 56.87, 60.49, 64.63, 70.31, 76, 81.69, 87.89, 94.09, 100.3, 106.5, 112.71, 118.91]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.43, 46.97, 50.5, 55.55, 59.09, 63.13, 68.68, 74.23, 79.79, 85.85, 91.91, 97.97, 104.03, 110.09, 116.15]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [52.98, 57.29, 61.6, 67.76, 72.07, 77, 83.78, 90.55, 97.33, 104.72, 112.11, 119.5, 126.9, 134.29, 141.68]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [58.31, 63.05, 67.8, 74.58, 79.33, 84.75, 92.21, 99.67, 107.12, 115.26, 123.4, 131.53, 139.67, 147.8, 155.94]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [70.78, 76.54, 82.3, 90.53, 96.29, 102.88, 111.93, 120.98, 130.03, 139.91, 149.79, 159.66, 169.54, 179.41, 189.29]

                    },
                    {
                        "name": "Slitting Wind", "req": { "type": "level", "val": 999, "subtype": "min" }, "type": "normal", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [116.62, 126.11, 135.6, 149.16, 158.65, 169.5, 184.42, 199.33, 214.25, 230.52, 246.79, 263.06, 279.34, 295.61, 311.88]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ]
            },
            {
                "name": "Lightning Blade", "type": "skill", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [78.66, 84.56, 90.46, 98.33, 104.23, 110.13, 118, 125.86, 133.73, 141.6, 149.46, 157.33, 167.16, 176.99, 186.83]

                    }

                ],
                "apply": { "id": 438, "option": 0 }
            },
            {
                "name": "Bellowing Thunder", "type": "burst", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [114.4, 122.98, 131.56, 143, 151.58, 160.16, 171.6, 183.04, 194.48, 205.92, 217.36, 228.8, 243.1, 257.4, 271.7]

                    },
                    {
                        "name": "Falling Thunder", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [32.8, 35.26, 37.72, 41, 43.46, 45.92, 49.2, 52.48, 55.76, 59.04, 62.32, 65.6, 69.7, 73.8, 77.9]

                    }

                ]
            }
        ],
        "const": [
            {
                "name": "Spring Thunder of Fertility",
                "desc": "The number of Abundance Amulets that can be generated using Lightning Blade is increased to 3."
            },
            {
                "name": "Violet Vehemence",
                "desc": "When Falling Thunder created by Bellowing Thunder hits an opponent, it will decrease their Electro RES by 15% for 8s.",
                "apply": { "id": 441, "option": 0 }
            },
            {
                "name": "Distant Crackling",
                "desc": "Increases the Level of Bellowing Thunder by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Fickle Cloudstrike",
                "desc": "When a character obtains Abundance Amulets generated by Lightning Blade, if this character's Energy is less than 35%, the Energy restored by the Abundance Amulets is increased by 100%."
            },
            {
                "name": "Clamor in the Wilds",
                "desc": "Increases the Level of Lightning Blade by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "World-Shaker",
                "desc": "Every 2 Falling Thunder attacks triggered by Bellowing Thunder will increase the DMG dealt by the next Falling Thunder by 100%, and will restore an additional 1 Energy to the current character."
            }

        ],
        "passive": [
            {
                "name": "Thunderflash",
                "desc": "When another nearby character in the party obtains an Abundance Amulet created by Lightning Blade, Lightning Blade's CD is decreased by 1.5s.",
                "level": 2
            },
            {
                "name": "Resounding Roar",
                "desc": "Increases the Energy Recharge effect granted by Lightning Blade's Abundance Amulet by 10% of the Traveler's Energy Recharge.",
                "level": 8,
                "apply": { "id": 439, "option": 0 }
            }
        ],
        "ascension_special": true,
        "ascension": [{ "type": "group", "id": "brilliant_diamond" }, { "type": "blank" }, { "type": "group", "id": "mask" }, { "type": "item", "id": "windwheel_aster" }],
        "party_effects": [
            { "type": "stat", "id": "traveler_electrorecharge" },
            { "type": "apply", "id": 438, "option": 0, "desc": "Increases Energy Recharge during the Abundance Amulet's duration." },
            { "type": "apply", "id": 440, "option": 0, "desc": "Increases the Energy Recharge effect granted by Lightning Blade's Abundance Amulet by 10% of the Traveler's Energy Recharge." },
            { "type": "apply", "id": 441, "option": 0, "desc": "When Falling Thunder created by Bellowing Thunder hits an opponent, it will decrease their Electro RES by 15% for 8s." }
        ]
    },
    "raiden": {
        "id": 39,
        "name": "Raiden Shogun",
        "short_name": "Raiden",
        "weapon": "polearm",
        "vision": "electro",
        "stats": [
            { "stat": "hp_base", "values": [1005, 2606, 3468, 5189, 5801, 6675, 7491, 8373, 8985, 9875, 10487, 11388, 12000, 12907] },
            { "stat": "atk_base", "values": [26, 68, 91, 136, 152, 174, 196, 219, 235, 258, 274, 298, 314, 337] },
            { "stat": "def_base", "values": [61, 159, 212, 317, 355, 408, 458, 512, 549, 604, 641, 696, 734, 789] },
            { "stat": "recharge", "values": [0, 0, 0, 0, 8, 8, 16, 16, 16, 16, 24, 24, 32, 32] },
            { "stat": "burst_energy", "values": [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [39.65, 42.87, 46.1, 50.71, 53.94, 57.63, 62.7, 67.77, 72.84, 78.37, 84.71, 92.16, 99.62, 107.07, 115.2]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [39.73, 42.97, 46.2, 50.82, 54.05, 57.75, 62.83, 67.91, 73, 78.54, 84.89, 92.36, 99.83, 107.3, 115.45]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [49.88, 53.94, 58, 63.8, 67.86, 72.5, 78.88, 85.26, 91.64, 98.6, 106.58, 115.95, 125.33, 134.71, 144.94]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "hits": 2, "crit": true, "scale": [28.98, 31.34, 33., 37.07, 39.43, 42.13, 45.83, 49.54, 53.25, 57.29, 61.92, 67.37, 72.82, 78.27, 84.22]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [65.45, 70.77, 76.1, 83.71, 89.04, 95.13, 103.5, 111.87, 120.24, 129.37, 139.83, 152.14, 164.44, 176.75, 190.17]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [99.59, 107.69, 115.8, 127.38, 135.49, 144.75, 157.49, 170.23, 182.96, 196.86, 212.78, 231.51, 250.23, 268.96, 289.38]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.3, 306.22, 324.05, 341.89]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]

                    }
                ]
            },
            {
                "name": "Transcendence: Baleful Light", "type": "skill", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [117.2, 125.99, 134.78, 146.5, 155.29, 164.08, 175.8, 187.52, 199.24, 210.96, 222.68, 234.4, 249.05, 263.7, 278.35]

                    },
                    {
                        "name": "Coordinated Attack", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [42, 45.15, 48.3, 52.5, 55.65, 58.8, 63, 67.2, 71.4, 75.6, 79.8, 84, 89.25, 94.5, 99.75]

                    }],
                "apply": { "id": 442 }
            },
            {
                "name": "Secret Art: Musou Shinsetsu", "type": "burst", "damage": false, "vision": "electro", "parts": [
                    {
                        "name": "Musou no Hitotachi", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [400.8, 430.86, 460.92, 501, 531.06, 561.12, 601.2, 641.28, 681.36, 721.44, 761.52, 801.6, 851.7, 901.8, 951.9]

                    },
                    {
                        "name": "1-Hit", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [44.74, 47.79, 50.84, 54.91, 57.96, 61.51, 66.09, 70.66, 75.24, 79.82, 84.39, 88.97, 93.54, 98.12, 102.69]

                    },
                    {
                        "name": "2-Hit", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [43.96, 46.95, 49.95, 53.95, 56.94, 60.44, 64.94, 69.43, 73.93, 78.42, 82.92, 87.41, 91.91, 96.4, 100.9]

                    },
                    {
                        "name": "3-Hit", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [53.82, 57.49, 61.16, 66.05, 69.72, 74, 79.51, 85.01, 90.52, 96.02, 101.53, 107.03, 112.54, 118.04, 123.55]

                    },
                    {
                        "name": "4-Hit", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "hits":2, "scale": [30.89, 32.99, 35., 37.91, 40.01, 42.47, 45.63, 48.79, 51.9, 55.11, 58.27, 61.4, 64.58, 67.74, 70.]

                    },
                    {
                        "name": "5-Hit", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [73.94, 78.99, 84.03, 90.75, 95.79, 101.67, 109.24, 116.8, 124.36, 131.92, 139.48, 147.05, 154.61, 162.17, 169.73]

                    },
                    {
                        "name": "Charged", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [[61.6, 74.36], [65.8, 79.43], [70.0, 84.5], [75.6, 91.26], [79.8, 96.33], [84.7, 102.245], [91.0, 109.85], [97.3, 117.455], [103.6, 125.06], [109.9, 132.665], [116.2, 140.27], [122.5, 147.875], [128.8, 155.48], [135.1, 163.085], [141.4, 170.69]]

                    },
                    {
                        "name": "Plunge", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]

                    },
                    {
                        "name": "Low Plunge", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]

                    },
                    {
                        "name": "High Plunge", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]

                    },
                    {
                        "name": "Musou no Hitotachi - 60 Resolve", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [634.2, 681.66, 729.12, 792.6, 840.06, 887.52, 951, 1014.48, 1077.96, 1141.44, 1204.92, 1268.4, 1347.3, 1426.8, 1505.7]

                    },
                    {
                        "name": "1-Hit - 60 Resolve", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [88.54, 94.59, 101.24, 109.51, 115.56, 122.71, 131.49, 140.26, 149.04, 158.42, 167.19, 175.97, 185.94, 195.92, 205.89]

                    },
                    {
                        "name": "2-Hit - 60 Resolve", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [87.76, 93.75, 100.35, 108.55, 114.54, 121.64, 130.34, 139.03, 147.73, 157.02, 165.72, 174.41, 184.31, 194.2, 204.1]

                    },
                    {
                        "name": "3-Hit - 60 Resolve", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [97.62, 104.29, 111.56, 120.65, 127.32, 135.2, 144.91, 154.61, 164.32, 174.62, 184.33, 194.03, 204.94, 215.84, 226.75]

                    },
                    {
                        "name": "4-Hit - 60 Resolve", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "hits": 2, "scale": [74.69, 79.79, 50.751, 92.51, 97.61, 103.67, 111.03, 118.39, 125.75, 133.71, 141.07, 148.43, 156.98, 165.54, 174.1]

                    },
                    {
                        "name": "5-Hit - 60 Resolve", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [117.74, 125.79, 134.43, 145.35, 153.39, 162.87, 174.64, 186.4, 198.16, 210.52, 222.28, 234.05, 247.01, 259.97, 272.93]

                    },
                    {
                        "name": "Charged - 60 Resolve", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [[105.4, 118.16], [112.6, 126.23], [120.4, 134.9], [130.2, 145.86], [137.4, 153.93], [145.9, 63.45], [66.31, 75.25], [166.9, 87.06], [176.8, 98.86], [187.6, 111.27], [198.8, 123.07], [209, 134.88], [220.4, 147.88], [232.8, 160.89], [244.2, 173.89]]

                    },
                    {
                        "name": "Plunge - 60 Resolve", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [107.73, 115.94, 124.74, 136.37, 144.58, 154.13, 166.5, 178.88, 191.26, 204.98, 218.1, 231.22, 245.54, 259.86, 274.18]

                    },
                    {
                        "name": "Low Plunge - 60 Resolve", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [171.64, 185.04, 199.05, 218.11, 231.52, 247.01, 267.56, 288.11, 308.66, 81.127, 353.34, 375.38, 398.62, 421.85, 445.09]

                    },
                    {
                        "name": "High Plunge - 60 Resolve", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [203.48, 219.47, 236.07, 258.84, 274.83, 293.29, 317.91, 342.53, 367.16, 394.24, 420.72, 447.2, 474.88, 502.56, 530.24]

                    },

                ]
            }
        ],
        "const": [
            {
                "name": "Ominous Inscription",
                "desc": "Shogan Byakugen no Rin will gather Resolve even faster. When Electro characters use their Elemental Bursts, the Resolve gained is increased by 80%. When characters of other Elemental Types use their Elemental Bursts, the Resolve gained is increased by 20%."
            },
            {
                "name": "Steelbreaker",
                "desc": "While in the Musou Isshin state applied by Secret Art: Musou Shinsetsu, the Raiden Shogun's attacks ignore 60% of opponents' DEF.",
                "apply": { "id": 443, "option": 0 }
            },
            {
                "name": "Shinkage Bygones",
                "desc": "Increases the Level of Secret Art: Musou Shinsetsu by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Pledge of Propriety",
                "desc": "When the Musou Isshin state applied by Secret Art: Musou Shinsetsu expires, all nearby party members (excluding the Raiden Shogun) gain 30% bonus ATK for 10s."
            },
            {
                "name": "Shogun's Descent",
                "desc": "Increases the Level of Transcendence: Baleful Light by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Wishbearer",
                "desc": "While in the Musou Isshin state applied by Secret Art: Musou Shinsetsu, the Raiden Shogun's Normal, Charged, and Plunging Attacks will decrease all nearby party members' (but not including the Raiden Shogun herself) Elemental Burst CD by 1s when they hit opponents. This effect can trigger once every 1s, and can trigger a total of 5 times during the state's duration."
            }

        ],
        "passive": [
            {
                "name": "All-Preserver",
                "desc": "Mora expended when ascending Swords and Polearms is decreased by 50%.",
                "level": 0
            },
            {
                "name": "Enlightened One",
                "desc": "When nearby party members gain Elemental Orbs or Particles, Shogan Byakugen no Rin gains 2 Resolve stacks. This effect can occur once every 3s.",
                "level": 2
            },
            {
                "name": "Enlightened One",
                "desc": "Each 1% above 100% Energy Recharge that the Raiden Shogun possesses grants her:<br>0.6% greater Energy restoration from Musou Isshin<br>0.4% Electro DMG Bonus.",
                "level": 8,
                "apply": { "id": 445, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "storm_beads" }, { "type": "group", "id": "handguard" }, { "type": "item", "id": "amakumo_fruit" }],
        "party_effects": [
            { "type": "apply", "id": 442, "option": 0, "desc": "The Raiden Shogun unveils a shard of her Euthymia, dealing Electro DMG to nearby opponents, and granting nearby party members the Eye of Stormy Judgment." },
            { "type": "apply", "id": 444, "option": 0, "desc": "When the Musou Isshin state applied by Secret Art: Musou Shinsetsu expires, all nearby party members (excluding the Raiden Shogun) gain 30% bonus ATK for 10s." }
        ]
    },
    "sara": {
        "id": 40,
        "name": "Kujou Sara",
        "short_name": "Sara",
        "weapon": "bow",
        "vision": "electro",
        "stats": [
            { "stat": "hp_base", "values": [802, 2061, 2661, 3985, 4411, 5074, 5642, 6305, 6731, 7393, 7818, 8481, 8907, 9570] },
            { "stat": "atk_base", "values": [16, 42, 54, 81, 90, 104, 115, 129, 137, 151, 160, 173, 182, 195] },
            { "stat": "def_base", "values": [53, 135, 175, 262, 289, 333, 370, 414, 442, 485, 513, 556, 584, 628] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
             { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [36.89, 39.9, 42.9, 47.19, 50.19, 53.63, 58.34, 63.06, 67.78, 72.93, 78.08, 83.23, 88.37, 93.52, 98.67]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [38.7, 41.85, 45, 49.5, 52.65, 56.25, 61.2, 66.15, 71.1, 76.5, 81.9, 87.3, 92.7, 98.1, 103.5]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [48.5, 52.45, 56.4, 62.04, 65.99, 70.5, 76.7, 82.91, 89.11, 95.88, 102.65, 109.42, 116.18, 122.95, 129.72]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [50.4, 54.5, 58.6, 64.46, 68.56, 73.25, 79.7, 86.14, 92.59, 99.62, 106.65, 113.68, 120.72, 127.75, 134.78]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [58.05, 62.78, 67.5, 74.25, 78.98, 84.38, 91.8, 99.23, 106.65, 114.75, 122.85, 130.95, 139.05, 147.15, 155.25]

                    },
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3]

                    },
                    {
                        "name": "Fully-Charged Aimed Shot", "type": "charged", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]

                    },
                ]
            },
            {
                "name": "Tengu Stormcall", "type": "skill", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Tengu Juurai: Ambush", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [125.76, 135.19, 144.62, 157.2, 166.63, 176.06, 188.64, 201.22, 213.79, 226.37, 238.94, 251.52, 267.24, 282.96, 298.68]

                    },
                    
                ],
                "apply": { "id": 457 }
            },
            {
                "name": "Subjugation: Koukou Sendou", "type": "burst", "damage": true, "vision": "electro", "parts": [

                    {
                        "name": "Tengu Juurai: Titanbreaker", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [409.6, 440.32, 471.04, 512, 542.72, 573.44, 614.4, 655.36, 696.32, 737.28, 778.24, 819.2, 870.4, 921.6, 972.8]

                    },
                    {
                        "name": "Tengu Juurai: Stormcluster", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [34.12, 36.68, 39.24, 42.65, 45.21, 47.77, 51.18, 54.59, 58, 61.42, 64.83, 68.24, 72.51, 76.77, 81.04]

                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Crow's Eye",
                "desc": "When Tengu Juurai grant characters ATK Bonuses or hits opponents, the CD of Tengu Stormcall is decreased by 1s. This effect can be triggered once every 3s."
            },
            {
                "name": "Dark Wings",
                "desc": "Unleashing Tengu Stormcall will leave a weaker Crowfeather at Kujou Sara's original position that will deal 30% of its original DMG."
            },
            {
                "name": "The War Within",
                "desc": "Increases the Level of Subjugation: Koukou Sendou by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Conclusive Proof",
                "desc": "The number of Tengu Juurai: Stormcluster released by Subjugation: Koukou Sendou is increased to 6."
            },
            {
                "name": "Spellsinger",
                "desc": "Increases the Level of Tengu Stormcall by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Sin of Pride",
                "desc": "The Electro DMG of characters who have had their ATK increased by Tengu Juurai has its Crit DMG increased by 60%.",
                "apply": { "id": 456, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Land Survey",
                "desc": "When dispatched on an expedition in Inazuma, time consumed is reduced by 25%.",
                "level": 0
            },
            {
                "name": "Immovable Will",
                "desc": "While in the Crowfeather Cover state provided by Tengu Stormcall, Aimed Shot charge times are decreased by 60%.",
                "level": 2
            },
            {
                "name": "Decorum",
                "desc": "When Tengu Juurai: Ambush hits opponents, Kujou Sara will restore 1.2 Energy to all party members for every 100% Energy Recharge she has. This effect can be triggered once every 3s.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "storm_beads" }, { "type": "group", "id": "mask" }, { "type": "item", "id": "dendrobium" }],
        "party_effects": [
            { "type": "stat", "id": "saraatk" },
            { "type": "apply", "id": 458, "option": 0, "desc": "Crowfeathers grant the active character within its AoE an ATK Bonus based on Kujou Sara's Base ATK." },
            { "type": "apply", "id": 456, "option": 0, "desc": "The Electro DMG of characters who have had their ATK increased by Tengu Juurai has its Crit DMG increased by 60%." }
        ]
    },
    "aloy": {
        "id": 41,
        "name": "Aloy",
        "weapon": "bow",
        "vision": "cryo",
        "stats": [
            { "stat": "hp_base", "values": [848, 2201, 2928, 4382, 4899, 5636, 6325, 7070, 7587, 8339, 8856, 9616, 10133, 10899] },
            { "stat": "atk_base", "values": [18, 47, 63, 94, 105, 121, 136, 152, 163, 179, 190, 206, 217, 234] },
            { "stat": "def_base", "values": [53, 137, 182, 272, 304, 350, 393, 439, 471, 517, 550, 597, 629, 676] },
            { "stat": "cryo", "values": [0, 0, 0, 0, 7.2, 7.2, 14.4, 14.4, 14.4, 14.4, 21.6, 21.6, 28.8, 28.8] },
            { "stat": "burst_energy", "values": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[21.12, 23.76], [22.56, 25.38], [24, 27], [25.92, 29.16], [27.36, 30.78], [29.04, 32.67], [31.2, 35.1], [33.36, 37.53], [35.52, 39.96], [37.68, 42.39], [39.84, 44.82], [42, 47.25], [44.16, 49.68], [46.32, 52.11], [48.48, 54.54]]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.12, 46.06, 49, 52.92, 55.86, 59.29, 63.7, 68.11, 72.52, 76.93, 81.34, 85.75, 90.16, 94.57, 98.98]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [52.8, 56.4, 60, 64.8, 68.4, 72.6, 78, 83.4, 88.8, 94.2, 99.6, 105, 110.4, 115.8, 121.2]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [65.65, 70.12, 74.6, 80.57, 85.04, 90.27, 96.98, 103.69, 110.41, 117.12, 123.84, 130.55, 137.26, 143.98, 150.69]

                    },
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3]

                    },
                    {
                        "name": "Fully-Charged Aimed Shot", "type": "charged", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]

                    },
                ]
            },
            {
                "name": "Frozen Wilds", "type": "skill", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Freeze Bomb", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [177.6, 190.92, 204.24, 222, 235.32, 248.64, 266.4, 284.16, 301.92, 319.68, 337.44, 355.2, 377.4, 399.6, 421.8]

                    },
                    {
                        "name": "Chillwater Bomblets", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [40, 43, 46, 50, 53, 56, 60, 64, 68, 72, 76, 80, 85, 90, 95]

                    }

                ],
                "apply": { "id": 464 }
            },
            {
                "name": "Prophecies of Dawn", "type": "burst", "damage": true, "vision": "cryo", "parts": [

                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [359.2, 386.14, 413.08, 449, 475.94, 502.88, 538.8, 574.72, 610.64, 646.56, 682.48, 718.4, 763.3, 808.2, 853.1]

                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Star of Another World",
                "desc": "The time has not yet come for this person's corner of the night sky to light up."
            },
            {
                "name": "Star of Another World",
                "desc": "The time has not yet come for this person's corner of the night sky to light up."
            },
            {
                "name": "Star of Another World",
                "desc": "The time has not yet come for this person's corner of the night sky to light up."
            },
            {
                "name": "Star of Another World",
                "desc": "The time has not yet come for this person's corner of the night sky to light up."
            },
            {
                "name": "Star of Another World",
                "desc": "The time has not yet come for this person's corner of the night sky to light up."
            },
            {
                "name": "Star of Another World",
                "desc": "The time has not yet come for this person's corner of the night sky to light up."
            }

        ],
        "passive": [
            {
                "name": "Easy Does It",
                "desc": "When Aloy is in the party, animals who produce Fowl, Raw Meat, or Chilled Meat will not be startled when party members approach them.",
                "level": 0
            },
            {
                "name": "Combat Override",
                "desc": "When Aloy receives the Coil effect from Frozen Wilds, her ATK is increased by 16%, while nearby party members' ATK is increased by 8%. This effect lasts 10s.",
                "level": 2,
                "apply": { "id": 465, "option": 0 }
            },
            {
                "name": "Strong Strike",
                "desc": "When Aloy is in the Rushing Ice state conferred by Frozen Wilds, her Cryo DMG Bonus increases by 3.5% every 1s. A maximum Cryo DMG Bonus increase of 35% can be gained in this way.",
                "level": 8,
                "apply": { "id": 467, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "crystalline_bloom" }, { "type": "group", "id": "spectral" }, { "type": "item", "id": "crystal_marrow" }],
        "party_effects": [
            { "type": "apply", "id": 466, "option": 0, "desc": "When Aloy receives the Coil effect from Frozen Wilds, nearby party members' ATK is increased by 8%. This effect lasts 10s." }
        ]
    },
    "kokomi": {
        "id": 42,
        "name": "Sanganomiya Kokomi",
        "short_name": "Kokomi",
        "weapon": "catalyst",
        "vision": "hydro",
        "stats": [
            { "stat": "hp_base", "values": [1049, 2720, 3619, 5416, 6055, 6966, 7818, 8738, 9377, 10306, 10945, 11885, 12524, 13471] },
            { "stat": "atk_base", "values": [18, 47, 63, 94, 105, 121, 136, 152, 163, 179, 190, 207, 218, 234] },
            { "stat": "def_base", "values": [51, 133, 177, 264, 295, 340, 381, 426, 457, 503, 534, 580, 611, 657] },
            { "stat": "hydro", "values": [0, 0, 0, 0, 7.2, 7.2, 14.4, 14.4, 14.4, 14.4, 21.6, 21.6, 28.8, 28.8] },
            { "stat": "burst_energy", "values": [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [68.38, 73.5, 78.63, 85.47, 90.6, 95.73, 102.56, 109.4, 116.24, 123.08, 129.91, 136.75, 145.3, 153.85, 162.39]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [61.54, 66.15, 70.77, 76.92, 81.54, 86.15, 92.31, 98.46, 104.62, 110.77, 116.92, 123.08, 130.77, 138.46, 146.15]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [94.31, 101.38, 108.45, 117.88, 124.95, 132.03, 141.46, 150.89, 160.32, 169.75, 179.18, 188.61, 200.4, 212.19, 223.98]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [148.32, 159.44, 170.57, 185.4, 196.52, 207.65, 222.48, 237.31, 252.14, 266.98, 281.81, 296.64, 315.18, 333.72, 352.26]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]

                    },
                    {
                        "name": "At Water's Edge", "req": { "type": "const", "val": 1, "subtype": "min" }, "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]

                    }
                ]
            },
            {
                "name": "Kurage's Oath", "type": "skill", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Ripple", "type": "skill", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [109.19, 117.38, 125.57, 136.49, 144.68, 152.87, 163.79, 174.7, 185.62, 196.54, 207.46, 218.38, 232.03, 245.68, 259.33]

                    },
                    {
                        "name": "Regeneration", "type": "healing", "damage": false, "vision": "hydro", "stat": "hp", "crit": false, "scale": [4.4, 4.73, 5.06, 5.5, 5.83, 6.16, 6.6, 7.04, 7.48, 7.92, 8.36, 8.8, 9.35, 9.9, 10.45], "flat": [424, 466, 512, 561, 614, 671, 731, 795, 862, 932, 1006, 1084, 1165, 1250, 1338]
                    },
                    {
                        "name": "Regeneration + The Clouds Like Waves Rippling", "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "healing", "damage": false, "vision": "hydro", "stat": "hp", "crit": false, "scale": [4.4 + 4.5, 4.73 + 4.5, 5.06 + 4.5, 5.5 + 4.5, 5.83 + 4.5, 6.16 + 4.5, 6.6 + 4.5, 7.04 + 4.5, 7.48 + 4.5, 7.92 + 4.5, 8.36 + 4.5, 8.8 + 4.5, 9.35 + 4.5, 9.9 + 4.5, 10.45 + 4.5], "flat": [424, 466, 512, 561, 614, 671, 731, 795, 862, 932, 1006, 1084, 1165, 1250, 1338]
                    }

                ]
            },
            {
                "name": "Nereid's Ascension", "type": "burst", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [10.42, 11.2, 11.98, 13.02, 13.8, 14.58, 15.62, 16.67, 17.71, 18.75, 19.79, 20.83, 22.13, 23.44, 24.74]

                    },
                    {
                        "name": "Normal Attack Bonus", "req": { "type": "level", "val": 999, "subtype": "min" }, "type": false, "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [4.84, 5.2, 5.57, 6.05, 6.41, 6.78, 7.26, 7.74, 8.23, 8.71, 9.2, 9.68, 10.29, 10.89, 11.5]

                    },
                    {
                        "name": "Charged Attack Bonus", "req": { "type": "level", "val": 999, "subtype": "min" }, "type": false, "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [6.78, 7.28, 7.79, 8.47, 8.98, 9.49, 10.16, 10.84, 11.52, 12.2, 12.87, 13.55, 14.4, 15.25, 16.09]

                    },
                    {
                        "name": "Bake-Kurage Bonus", "req": { "type": "level", "val": 999, "subtype": "min" }, "type": false, "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [7.1, 7.63, 8.16, 8.87, 9.4, 9.93, 10.64, 11.35, 12.06, 12.77, 13.48, 14.19, 15.08, 15.97, 16.85]

                    },
                    {
                        "name": "Regeneration", "type": "healing", "damage": false, "vision": "hydro", "stat": "hp", "crit": false, "scale": [0.81, 0.87, 0.93, 1.01, 1.07, 1.13, 1.21, 1.29, 1.37, 1.45, 1.54, 1.62, 1.72, 1.82, 1.92], "flat": [77, 85, 93, 102, 112, 122, 133, 144, 157, 169, 183, 197, 212, 227, 243]
                    },
                    {
                        "name": "Regeneration + The Clouds Like Waves Rippling", "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "healing", "damage": false, "vision": "hydro", "stat": "hp", "crit": false, "scale": [0.81 + 0.6, 0.87 + 0.6, 0.93 + 0.6, 1.01 + 0.6, 1.07 + 0.6, 1.13 + 0.6, 1.21 + 0.6, 1.29 + 0.6, 1.37 + 0.6, 1.45 + 0.6, 1.54 + 0.6, 1.62 + 0.6, 1.72 + 0.6, 1.82 + 0.6, 1.92 + 0.6], "flat": [77, 85, 93, 102, 112, 122, 133, 144, 157, 169, 183, 197, 212, 227, 243]
                    },
                    {
                        "name": "Song of Pearls", "req": { "type": "level", "val": 999, "subtype": "min" }, "type": false, "damage": true, "vision": "hydro", "stat": ["hp", "healing"], "multiplication": true, "crit": true, "scale": [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15]

                    },


                ],
                "apply": { "id": 604 }
            }
        ],
        "const": [
            {
                "name": "At Water's Edge",
                "desc": "While donning the Ceremonial Garment created by Nereid's Ascension, the final Normal Attack in Sangonomiya Kokomi's combo will unleash a swimming fish to deal 30% of her Max HP as Hydro DMG.<br>This DMG is not considered Normal Attack DMG."
            },
            {
                "name": "The Clouds Like Waves Rippling",
                "desc": "Sangonomiya Kokomi gains the following Healing Bonuses with regard to characters with 50% or less HP via the following methods:<br>Kurage's Oath Bake-Kurage: 4.5% of Kokomi's Max HP.<br>Nereid's Ascension Normal and Charged Attacks: 0.6% of Kokomi's Max HP."
            },
            {
                "name": "The Moon, A Ship O'er the Seas",
                "desc": "Increases the Level of Nereid's Ascension by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "The Moon Overlooks the Waters",
                "desc": "While donning the Ceremonial Garment created by Nereid's Ascension, Sangonomiya Kokomi's Normal Attack SPD is increased by 10%, and Normal Attacks that hit opponents will restore 0.8 Energy for her. This effect can occur once every 0.2s.",
                "apply": { "id": 468, "option": 0 }
            },
            {
                "name": "All Streams Flow to the Sea",
                "desc": "Increases the Level of Kurage's Oath by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Sango Isshin",
                "desc": "While donning the Ceremonial Garment created by Nereid's Ascension, Sangonomiya Kokomi gains a 40% Hydro DMG Bonus for 4s after her Normal and Charged Attacks heal a character with 80% or more HP.",
                "apply": { "id": 469, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Princess of Watatsumi",
                "desc": "Decreases swimming Stamina consumption for your own party members by 20%. Not stackable with Passive Talents that provide the exact same effects.",
                "level": 0
            },
            {
                "name": "Flawless Strategy",
                "desc": "Sangonomiya Kokomi has a 25% Healing Bonus, but a 100% decrease in CRIT Rate.",
                "level": 0,
                "bonus": [{ "stat": "healing", "value": 25 }, { "stat": "crit", "value": -100 }]
            },
            {
                "name": "Tamanooya's Casket",
                "desc": "If Sangonomiya Kokomi's own Bake-Kurage are on the field when she uses Nereid's Ascension, the Bake-Kurage's duration will be refreshed.",
                "level": 2
            },
            {
                "name": "Song of Pearls",
                "desc": "While donning the Ceremonial Garment created by Nereid's Ascension, the Normal and Charged Attack DMG Bonus Sangonomiya Kokomi gains based on her Max HP will receive a further increase based on 15% of her Healing Bonus.",
                "level": 8,
                "apply": { "id": 605, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "dew_of_repudiation" },{ "type": "group", "id": "spectral" }, { "type": "item", "id": "sango_pearl" }]
    },
    "thoma": {
        "id": 43,
        "name": "Thoma",
        "weapon": "polearm",
        "vision": "pyro",
        "stats": [
            { "stat": "hp_base", "values": [866, 2225, 2872, 4302, 4762, 5478, 6091, 6806, 7266, 7981, 8440, 9156, 9616, 10331] },
            { "stat": "atk_base", "values": [17, 43, 56, 84, 93, 107, 119, 133, 142, 156, 165, 179, 188, 202] },
            { "stat": "def_base", "values": [63, 162, 209, 313, 346, 398, 443, 495, 528, 580, 613, 665, 699, 751] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [44.39, 48.01, 51.62, 56.78, 60.4, 64.53, 70.2, 75.88, 81.56, 87.75, 93.95, 100.14, 106.34, 112.53, 118.73]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.63, 47.18, 50.73, 55.8, 59.35, 63.41, 68.99, 74.57, 80.15, 86.24, 92.33, 98.42, 104.5, 110.59, 116.68]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits": 2, "scale": [26.79, 28.97, 31.15, 34.27, 36.45, 38.94, 42.36, 45.79, 49.22, 52.96, 56.69, 60.43, 64.17, 67.91, 71.65]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [67.36, 72.84, 78.32, 86.15, 91.63, 97.9, 106.52, 115.13, 123.75, 133.14, 142.54, 151.94, 161.34, 170.74, 180.14]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [112.75, 121.92, 131.1, 144.21, 153.39, 163.88, 178.3, 192.72, 207.14, 222.87, 238.6, 254.33, 270.07, 285.8, 301.53]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ]
            },
            {
                "name": "Blazing Blessing", "type": "skill", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [146.4, 157.38, 168.36, 183, 193.98, 204.96, 219.6, 234.24, 248.88, 263.52, 278.16, 292.8, 311.1, 329.4, 347.7]

                    },
                    {
                        "name": "Shield Absorption", "type": "shield", "vision": "pyro", "stat": "hp", "crit": false, "scale": [7.2, 7.74, 8.28, 9, 9.54, 10.08, 10.8, 11.52, 12.24, 12.96, 13.68, 14.4, 15.3, 16.2, 17.1], "flat": [693, 763, 838, 919, 1005, 1098, 1196, 1300, 1410, 1525, 1647, 1774, 1907, 2046, 2190]

                    },
                    {
                        "name": "Max Shield Absorption", "type": "shield", "vision": "pyro", "stat": "hp", "crit": false, "scale": [19.6, 21.07, 22.54, 24.5, 25.97, 27.44, 29.4, 31.36, 33.32, 35.28, 37.24, 39.2, 41.65, 44.1, 46.55], "flat": [1887, 2076, 2281, 2501, 2737, 2989, 3256, 3539, 3838, 4153, 4483, 4829, 5191, 5568, 5962]

                    },]
            },
            {
                "name": "Crimson Ooyoroi", "type": "burst", "damage": true, "vision": "pyro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [88, 94.6, 101.2, 110, 116.6, 123.2, 132, 140.8, 149.6, 158.4, 167.2, 176, 187, 198, 209]

                    },
                    {
                        "name": "Fiery Collapse", "req": { "type": "level", "val": 7, "subtype": "max" },"type": "burst", "damage": true, "vision": "pyro", "stat": "atk", "crit": true, "scale": [58, 62.35, 66.7, 72.5, 76.85, 81.2, 87, 92.8, 98.6, 104.4, 110.2, 116, 123.25, 130.5, 137.75]

                    },
                    {
                        "name": "Fiery Collapse + Flaming Assault", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "burst", "damage": true, "vision": "pyro", "stat": ["atk", "hp"], "crit": true, "scale": [[58, 62.35, 66.7, 72.5, 76.85, 81.2, 87, 92.8, 98.6, 104.4, 110.2, 116, 123.25, 130.5, 137.75], [2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2, 2.2]]

                    },
                    {
                        "name": "Shield Absorption", "type": "shield", "vision": "pyro", "stat": "hp", "crit": false, "scale": [1.14, 1.23, 1.32, 1.43, 1.52, 1.6, 1.72, 1.83, 1.94, 2.06, 2.17, 2.29, 2.43, 2.57, 2.72], "flat": [110, 121, 133, 146, 160, 174, 190, 206, 224, 242, 261, 282, 303, 325, 348]
                    },

                ]
            }
        ],
        "const": [
            {
                "name": "A Comrade's Duty",
                "desc": "When a character protected by Thoma's own Blazing Barrier (Thoma excluded) is attacked, Thoma's own Blazing Blessing CD is decreased by 3s, while his own Crimson Ooyoroi's CD is decreased by 3s. This effect can be triggered once every 20s."
            },
            {
                "name": "A Subordinate's Skills",
                "desc": "Crimson Ooyoroi's duration is increased by 3s."
            },
            {
                "name": "Fortified Resolve",
                "desc": "Increases the Level of Blazing Blessing by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Long-Term Planning",
                "desc": "After using Crimson Ooyoroi, 15 Energy will be restored to Thoma."
            },
            {
                "name": "Raging Wildfire",
                "desc": "Increases the Level of Crimson Ooyoroi by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Burning Heart",
                "desc": "When a Blazing Barrier is obtained or refreshed, the DMG dealt by all party members' Normal, Charged, and Plunging Attacks is increased by 15% for 6s.",
                "apply": { "id": 485, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Snap and Swing",
                "desc": "When you fish successfully in Inazuma, Thoma's help grants a 20% chance of scoring a double catch.",
                "level": 0
            },
            {
                "name": "Imbricated Armor",
                "desc": "When your current active character obtains or refreshes a Blazing Barrier, this character's Shield Strength will increase by 5% for 6s. This effect can be triggered once every 0.3s seconds.Max 5 stacks.",
                "level": 2,
                "apply": { "id": 484, "option": 0 }
            },
            {
                "name": "Flaming Assault",
                "desc": "DMG dealt by Crimson Ooyoroi's Fiery Collapse is increased by 2.2% of Thoma's Max HP.",
                "level": 8,
            }
        ],
        "ascension": [{ "type": "item", "id": "smoldering_pearl" }, { "type": "group", "id": "treasure_insignia" }, { "type": "item", "id": "fluorescent_fungus" }],
        "party_effects": [
            { "type": "apply", "id": 484, "option": 0, "desc": "When your current active character obtains or refreshes a Blazing Barrier, this character's Shield Strength will increase by 5% for 6s." },
            { "type": "apply", "id": 485, "option": 0, "desc": "When a Blazing Barrier is obtained or refreshed, the DMG dealt by all party members' Normal, Charged, and Plunging Attacks is increased by 15% for 6s." },
        ]
    },
    "itto": {
        "id": 44,
        "name": "Arataki Itto",
        "short_name": "Itto",
        "weapon": "claymore",
        "vision": "geo",
        "stats": [
            { "stat": "hp_base", "values": [1001, 2597, 3455, 5170, 5779, 6649, 7462, 8341, 8951, 9838, 10448, 11345, 11954, 12858] },
            { "stat": "atk_base", "values": [18, 46, 61, 91, 102, 117, 132, 147, 158, 174, 185, 200, 211, 227] },
            { "stat": "def_base", "values": [75, 194, 258, 386, 431, 496, 557, 622, 668, 734, 779, 846, 892, 959] },
            { "stat": "crit", "values": [0, 0, 0, 0, 4.8, 4.8, 9.6, 9.6, 9.6, 9.6, 14.4, 14.4, 19.2, 19.2] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [79.23, 85.68, 92.13, 101.34, 107.79, 115.16, 125.3, 135.43, 145.57, 156.62, 169.29, 184.19, 199.08, 213.98, 230.23]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [76.37, 82.58, 88.8, 97.68, 103.9, 111, 120.77, 130.54, 140.3, 150.96, 163.17, 177.53, 191.89, 206.25, 221.91]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [91.64, 99.1, 106.56, 117.22, 124.68, 133.2, 144.92, 156.64, 168.36, 181.15, 195.8, 213.03, 230.27, 247.5, 266.29]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [117.22, 126.77, 136.31, 149.94, 159.48, 170.39, 185.38, 200.37, 215.37, 231.72, 250.47, 272.51, 294.55, 316.59, 340.63]
                    },
                    {
                        "name": "Arataki Kesagiri Combo Slash", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [91.16, 98.58, 106, 116.6, 124.02, 132.5, 144.16, 155.82, 167.48, 180.2, 194.78, 211.92, 229.06, 246.2, 264.89]
                    },
                    {
                        "name": "Arataki Kesagiri Final Slash", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [190.92, 206.46, 222, 244.2, 259.74, 277.5, 301.92, 326.34, 350.76, 377.4, 407.93, 443.82, 479.72, 515.62, 554.78]
                    },
                    {
                        "name": "Arataki Kesagiri Combo Slash + Bloodline of the Crimson Oni", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "charged", "damage": true, "vision": "physical", "stat": ["atk", "def"], "crit": true, "scale": [[91.16, 98.58, 106, 116.6, 124.02, 132.5, 144.16, 155.82, 167.48, 180.2, 194.78, 211.92, 229.06, 246.2, 264.89], [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35]]
                    },
                    {
                        "name": "Arataki Kesagiri Final Slash + Bloodline of the Crimson Oni", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "charged", "damage": true, "vision": "physical", "stat": ["atk", "def"], "crit": true, "scale": [[190.92, 206.46, 222, 244.2, 259.74, 277.5, 301.92, 326.34, 350.76, 377.4, 407.93, 443.82, 479.72, 515.62, 554.78], [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35]]
                    },
                    {
                        "name": "Saichimonji Slash", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [90.47, 97.84, 105.2, 115.72, 123.08, 131.5, 143.07, 154.64, 166.22, 178.84, 193.31, 210.32, 227.33, 244.34, 262.89]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [81.83, 88.49, 95.16, 104.67, 111.33, 118.94, 129.41, 139.88, 150.35, 161.76, 173.18, 184.6, 196.02, 207.44, 218.86]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [163.63, 176.95, 190.27, 209.3, 222.62, 237.84, 258.77, 279.7, 300.63, 323.46, 346.29, 369.12, 391.96, 414.79, 437.62]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [204.39, 221.02, 237.66, 261.42, 278.06, 297.07, 323.21, 349.36, 375.5, 404.02, 432.54, 461.06, 489.57, 518.09, 546.61]

                    }
                ]
            },
            {
                "name": "Masatsu Zetsugi: Akaushi Burst!", "type": "skill", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [307.2, 330.24, 353.28, 384, 407.04, 430.08, 460.8, 491.52, 522.24, 552.96, 583.68, 614.4, 652.8, 691.2, 729.6]

                    }

                ]
            },
            {
                "name": "Royal Descent: Behold, Itto the Evil!", "type": "burst", "damage": true, "vision": "geo", "parts": [],
                "apply": { "id": 486 }
            }
        ],
        "const": [
            {
                "name": "Stay a While and Listen Up",
                "desc": "After using Royal Descent: Behold, Itto the Evil!, Arataki Itto gains 2 stacks of Superlative Superstrength. After 1s, Itto will gain 1 stack of Superlative Superstrength every 0.5s for 1.5s."
            },
            {
                "name": "Gather 'Round, It's a Brawl!",
                "desc": "After using Royal Descent: Behold, Itto the Evil!, each party member whose Element is Geo will decrease that skill's CD by 1.5s and restore 6 Energy to Arataki Itto. A maximum of 4.5s CD can be decreased and 18 Energy restored in this manner."
            },
            {
                "name": "Horns Lowered, Coming Through",
                "desc": "Increases the Level of Masatsu Zetsugi: Akaushi Burst! by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Jailhouse Bread and Butter",
                "desc": "When the Raging Oni King state caused by Royal Descent: Behold, Itto the Evil! ends, all nearby party members gain 20% DEF and 20% ATK for 10s."
            },
            {
                "name": "10 Years of Hanamizaka Fame",
                "desc": "Increases the Level of Royal Descent: Behold, Itto the Evil! by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Arataki Itto, Present!",
                "desc": "Arataki Itto's Charged Attacks deal 70% increased Crit DMG. Additionally, when he uses Arataki Kesagiri, he has a 50% chance to not consume stacks of Superlative Superstrength.",
                "bonus": [{ "stat": "critdmgcharged", "value": 70 }]
            }

        ],
        "passive": [
            {
                "name": "Woodchuck Chucked",
                "desc": "When a party member uses attacks to obtain wood from a tree, they have a 25% chance to get an additional log of wood.",
                "level": 0
            },
            {
                "name": "Arataki Ichiban",
                "desc": "When Arataki Itto uses consecutive Arataki Kesagiri, he obtains the following effects:<br>Each slash causes the subsequent slash to have 10% more ATK SPD.Max ATK SPD increase is 30%.<br>Greatly increases his resistance to interruption.<br>These effects will be cleared once he stops performing consecutive slashes.",
                "level": 2,
                "apply": { "id": 488, "option": 0 }
            },
            {
                "name": "Bloodline of the Crimson Oni",
                "desc": "Arataki Kesagiri DMG is increased by 35% of Arataki Itto's DEF.",
                "level": 8
            }
        ],
        "party_effects": [
            { "type": "apply", "id": 487, "option": 0, "desc": "When the Raging Oni King state caused by Royal Descent: Behold, Itto the Evil! ends, all nearby party members gain 20% DEF and 20% ATK for 10s." },
        ],
        "ascension": [{ "type": "item", "id": "riftborn_regalia" },{ "type": "group", "id": "slime" }, { "type": "item", "id": "onikabuto" }]
    },
    "gorou": {
        "id": 45,
        "name": "Gorou",
        "weapon": "bow",
        "vision": "geo",
        "stats": [
            { "stat": "hp_base", "values": [802, 2061, 2661, 3985, 4411, 5074, 5642, 6305, 6731, 7393, 7818, 8481, 8907, 9570] },
            { "stat": "atk_base", "values": [15, 39, 51, 76, 84, 97, 108, 120, 128, 141, 149, 162, 170, 183] },
            { "stat": "def_base", "values": [54, 140, 180, 270, 299, 344, 382, 427, 456, 501, 530, 575, 603, 648] },
            { "stat": "geo", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [37.75, 40.83, 43.9, 48.29, 51.36, 54.88, 59.7, 64.53, 69.36, 74.63, 79.9, 85.17, 90.43, 95.7, 100.97]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [37.15, 40.18, 43.2, 47.52, 50.54, 54, 58.75, 63.5, 68.26, 73.44, 78.62, 83.81, 88.99, 94.18, 99.36]
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [49.45, 53.48, 57.5, 63.25, 67.28, 71.88, 78.2, 84.53, 90.85, 97.75, 104.65, 111.55, 118.45, 125.35, 132.25]
                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [59, 63.8, 68.6, 75.46, 80.26, 85.75, 93.3, 100.84, 108.39, 116.62, 124.85, 133.08, 141.32, 149.55, 157.78]
                    },
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3]
                    },
                    {
                        "name": "Fully Charged Aimed Shot", "type": "charged", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
                    }
                ]
            },
            {
                "name": "Inuzaka All-Round Defense", "type": "skill", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Skill", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "skill", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [107.2, 115.24, 123.28, 134, 142.04, 150.08, 160.8, 171.52, 182.24, 192.96, 203.68, 214.4, 227.8, 241.2, 254.6]
                    },
                    {
                        "name": "Skill + A Favor Repaid", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "skill", "damage": true, "vision": "geo", "stat": ["atk", "def"], "crit": true, "scale": [[107.2, 115.24, 123.28, 134, 142.04, 150.08, 160.8, 171.52, 182.24, 192.96, 203.68, 214.4, 227.8, 241.2, 254.6], [156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156]]
                    }
                ],
                "apply": [{ "id": 490 }, { "id": 491, "option": 0 }]
            },
            {
                "name": "Juuga: Forward Unto Victory", "type": "burst", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Skill", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "burst", "damage": true, "vision": "geo", "stat": "def", "crit": true, "scale": [98.22, 105.58, 112.95, 122.77, 130.14, 137.5, 147.32, 157.15, 166.97, 176.79, 186.61, 196.43, 208.71, 220.99, 233.26]
                    },
                    {
                        "name": "Spinning", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "burst", "damage": true, "vision": "geo", "stat": "def", "crit": true, "scale": [61.3, 65.9, 70.5, 76.63, 81.22, 85.82, 91.95, 98.08, 104.21, 110.34, 116.47, 122.6, 130.26, 137.93, 145.59]
                    },
                    {
                        "name": "Skill + A Favor Repaid", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "burst", "damage": true, "vision": "geo", "stat": "def", "crit": true, "scale": [113.82, 121.18, 128.55, 138.37, 145.74, 153.1, 162.92, 172.75, 182.57, 192.39, 202.21, 212.03, 224.31, 236.59, 248.86]
                    },
                    {
                        "name": "Spinning + A Favor Repaid", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "burst", "damage": true, "vision": "geo", "stat": "def", "crit": true, "scale": [76.9, 81.5, 86.1, 92.23, 96.82, 101.42, 107.55, 113.68, 119.81, 125.94, 132.07, 138.2, 145.86, 153.53, 161.19]
                    },
                    {
                        "name": "Lapping Hound: Warm as Water", "req": { "type": "const", "val": 4, "subtype": "min" }, "type": "healing", "damage": false, "vision": "geo", "stat": "def", "crit": false, "scale": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
                    },
                ]
            }
        ],
        "const": [
            {
                "name": "Rushing Hound: Swift as the Wind",
                "desc": "When characters (other than Gorou himself) within the AoE of a General's War-Banner or General's Glory created by Gorou himself deal Geo DMG to opponents, the CD of Gorou's Inuzaka All-Round Defense is decreased by 2s. This effect can occur once every 10s."
            },
            {
                "name": "Sitting Hound: Steady as a Clock",
                "desc": "When an active character within the AoE of General's Glory obtains an Elemental Shard from a Crystallize Reaction, Gorou's own General's Glory duration is increased by 1s. Its duration can be increased by a maximum of 3s."
            },
            {
                "name": "Mauling Hound: Fierce as Fire",
                "desc": "Increases the Level of Inuzaka All-Round Defense by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Lapping Hound: Warm as Water",
                "desc": "When General's Glory is in the \"Impregnable\" or \"Shatter\" states, it will also heal the active character within its AoE every 1.5s for 50% of Gorou's own DEF."
            },
            {
                "name": "Striking Hound: Thunderous Force",
                "desc": "Increases the Level of Juuga: Forward Unto Victory by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Valiant Hound: Mountainous Fealty",
                "desc": "When the General's War-Banner or General's Glory are currently providing buffs of the \"Standing Firm\", \"Impregnable\" or \"Shatter\" levels, the Crit DMG of Geo DMG dealt by all party members is increased by 10%/20%/40% respectively.",
                "apply": { "id": 492, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Seeker of Shinies",
                "desc": "Displays the location of nearby resources unique to Inazuma on the mini-map.",
                "level": 0
            },
            {
                "name": "Heedless of the Wind and Weather",
                "desc": "When using Juuga: Forward Unto Victory, all party members' DEF is increased by 25% until the duration of General's Glory ends.",
                "level": 2,
                "apply": { "id": 489, "option": 0 }
            },
            {
                "name": "A Favor Repaid",
                "desc": "Gorou receives the following DMG Bonuses to his attacks based on his DEF:<br>Inuzaka All- Round Defense's Skill DMG is increased by 156% of his DEF.<br>Juuga: Forward Unto Victory's Skill DMG and Crystal Collapse DMG is increased by 15.6% of DEF.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "perpetual_heart" },{ "type": "group", "id": "spectral" }, { "type": "item", "id": "sango_pearl" }],
        "party_effects": [
            { "type": "apply", "id": 489, "option": 0, "desc": "When using Juuga: Forward Unto Victory, all party members' DEF is increased by 25% until the duration of General's Glory ends." },
            { "type": "apply", "id": 490, "option": 0, "desc": "General's War banner grants DEF bonus while having 1 Geo party member." },
            { "type": "apply", "id": 491, "option": 0, "desc": "General's War banner grants Geo DMG bonus while having 3 Geo party members." },
            { "type": "apply", "id": 492, "option": 0, "desc": "When the General's War-Banner or General's Glory are currently providing buffs of the \"Standing Firm\", \"Impregnable\" or \"Shatter\" levels, the Crit DMG of Geo DMG dealt by all party members is increased by 10%/20%/40% respectively." }
        ]
    },
    "shenhe": {
        "id": 46,
        "name": "Shenhe",
        "weapon": "polearm",
        "vision": "cryo",
        "stats": [
            { "stat": "hp_base", "values": [1011, 2624, 3491, 5224, 5840, 6719, 7540, 8429, 9045, 9941, 10557, 11463, 12080, 12993] },
            { "stat": "atk_base", "values": [24, 61, 82, 122, 137, 157, 176, 197, 211, 232, 247, 268, 282, 304] },
            { "stat": "def_base", "values": [65, 168, 223, 334, 373, 429, 482, 538, 578, 635, 674, 732, 772, 830] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 7.2, 7.2, 14.4, 14.4, 14.4, 14.4, 21.6, 21.6, 28.8, 28.8] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.26, 46.78, 50.3, 55.33, 58.85, 62.88, 68.41, 73.94, 79.47, 85.51, 91.55, 97.58, 103.62, 109.65, 115.69]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [40.25, 43.52, 46.8, 51.48, 54.76, 58.5, 63.65, 68.8, 73.94, 79.56, 85.18, 90.79, 96.41, 102.02, 107.64]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [53.32, 57.66, 62, 68.2, 72.54, 77.5, 84.32, 91.14, 97.96, 105.4, 112.84, 120.28, 127.72, 135.16, 142.6]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits": 2, "scale": [26.32, 28.46, 30., 33.66, 35., 38.25, 41.62, 44.98, 48.35, 52.02, 55.69, 59.36, 63.04, 66.71, 70.38]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [65.62, 70.96, 76.3, 83.93, 89.27, 95.38, 103.77, 112.16, 120.55, 129.71, 138.87, 148.02, 157.18, 166.33, 175.49]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [110.67, 119.68, 128.69, 141.56, 150.57, 160.86, 175.02, 189.17, 203.33, 218.77, 234.22, 249.66, 265.1, 280.54, 295.99]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]

                    }
                ]
            },
            {
                "name": "Spring Spirit Summoning", "type": "skill", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Press", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [139.2, 149.64, 160.08, 174, 184.44, 194.88, 208.8, 222.72, 236.64, 250.56, 264.48, 278.4, 295.8, 313.2, 330.6]

                    },
                    {
                        "name": "Hold", "type": "skill", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [188.8, 202.96, 217.12, 236, 250.16, 264.32, 283.2, 302.08, 320.96, 339.84, 358.72, 377.6, 401.2, 424.8, 448.4]

                    }
                ],
                "apply": { "id": 500 }
            },
            {
                "name": "Divine Maiden's Deliverance", "type": "burst", "damage": true, "vision": "cryo", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "cryo", "stat": "atk", "crit": true, "scale": [100.8, 108.36, 115.92, 126, 133.56, 141.12, 151.2, 161.28, 171.36, 181.44, 191.52, 201.6, 214.2, 226.8, 239.4]

                    }
                ],
                "apply": { "id": 501 }
            }
        ],
        "const": [
            {
                "name": "Clarity of Heart",
                "desc": "Spring Spirit Summoning can be used 1 more time."
            },
            {
                "name": "Centered Spirit",
                "desc": "Divine Maiden's Deliverance lasts for 6 seconds longer. Active characters within the skill's field deals 15% increased Cryo CRIT DMG.",
                "apply": { "id": 502, "option": 0 }
            },
            {
                "name": "Seclusion",
                "desc": "Increases the Level of Spring Spirit Summoning by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Insight",
                "desc": "When characters under the effect of Icy Quill applied by Shenhe trigger its DMG Bonus effects, Shenhe will gain a Skyfrost Mantra stack:<br>When Shenhe uses Spring Spirit Summoning, she will consume all stacks of Skyfrost Mantra, increasing the DMG of that Spring Spirit Summoning by 5% for each stack consumed.<br>Max 50 stacks.Stacks last for 60s."
            },
            {
                "name": "Divine Attainment",
                "desc": "Increases the Level of Divine Maiden's Deliverance by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Mystical Abandon",
                "desc": "When characters trigger Icy Quill's effects using Normal and Charged Attack DMG, it does not count toward the Trigger Quota."
            }

        ],
        "passive": [
            {
                "name": "Precise Comings and Goings",
                "desc": "Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.",
                "level": 0
            },
            {
                "name": "Deific Embrace",
                "desc": "An active character within the field created by Divine Maiden's Deliverance gains 15% Cryo DMG Bonus.",
                "level": 2,
                "apply": { "id": 503, "option": 0 }
            },
            {
                "name": "Spirit Communion Seal",
                "desc": "After Shenhe uses Spring Spirit Summoning, she will grant all nearby party members the following effects:<br>Press: Elemental Skill and Elemental Burst DMG increased by 15% for 10s.<br>Hold: Normal, Charged, and Plunging Attack DMG increased by 15% for 15s.",
                "level": 8,
                "apply": { "id": 504, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "dragonheir_false_fin" }, { "type": "group", "id": "nectar" }, { "type": "item", "id": "qingxin" }],
        "party_effects": [
            { "type": "stat", "id": "shenheatk" },
            { "type": "apply", "id": 500, "option": 0, "desc": "Icy Quill - When Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts deal Cryo DMG to opponents, the DMG dealt is increased based on Shenhe's current ATK." },
            { "type": "apply", "id": 501, "option": 0, "desc": "Divine Maiden's Deliverance creates a field that decreases the Cryo RES and Physical RES of opponents within it. It also deals periodic Cryo DMG to opponents within the field." },
            { "type": "apply", "id": 503, "option": 0, "desc": "An active character within the field created by Divine Maiden's Deliverance gains 15% Cryo DMG Bonus." },
            { "type": "apply", "id": 504, "option": 0, "desc": "After Shenhe uses Spring Spirit Summoning, she will grant all nearby party members the following effects: Press: Elemental Skill and Elemental Burst DMG increased by 15% for 10s. Hold: Normal, Charged, and Plunging Attack DMG increased by 15% for 15s." },
            { "type": "apply", "id": 502, "option": 0, "desc": "Active characters within the Divine Maiden's Deliverance's field deals 15% increased Cryo CRIT DMG." }

        ]
    },
    "yunjin": {
        "id": 47,
        "name": "Yun Jin",
        "weapon": "polearm",
        "vision": "geo",
        "stats": [
            { "stat": "hp_base", "values": [894, 2296, 2963, 4438, 4913, 5651, 6283, 7021, 7495, 8233, 8707, 9445, 9919, 10657] },
            { "stat": "atk_base", "values": [16, 41, 53, 80, 88, 101, 113, 126, 134, 148, 156, 169, 178, 191] },
            { "stat": "def_base", "values": [62, 158, 204, 306, 339, 389, 433, 484, 517, 567, 600, 651, 684, 734] },
            { "stat": "recharge", "values": [0, 0, 0, 0, 6.7, 6.7, 13.3, 13.3, 13.3, 13.3, 20, 20, 26.7, 26.7] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [40.51, 43.8, 47.1, 51.81, 55.11, 58.88, 64.06, 69.24, 74.42, 80.07, 85.72, 91.37, 97.03, 102.68, 108.33]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [40.25, 43.52, 46.8, 51.48, 54.76, 58.5, 63.65, 68.8, 73.94, 79.56, 85.18, 90.79, 96.41, 102.02, 107.64]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[22.96, 27.52], [24.83, 29.76], [26.7, 32], [29.37, 35.2], [31.24, 37.44], [33.38, 40], [36.31, 43.52], [39.25, 47.04], [42.19, 50.56], [45.39, 54.4], [48.59, 58.24], [51.8, 62.08], [55, 65.92], [58.21, 69.76], [61.41, 73.6]]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[23.99, 28.81], [25.95, 31.16], [27.9, 33.5], [30.69, 36.85], [32.64, 39.2], [34.88, 41.88], [37.94, 45.56], [41.01, 49.25], [44.08, 52.93], [47.43, 56.95], [50.78, 60.97], [54.13, 64.99], [57.47, 69.01], [60.82, 73.03], [64.17, 77.05]]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [67.34, 72.82, 78.3, 86.13, 91.61, 97.88, 106.49, 115.1, 123.71, 133.11, 142.51, 151.9, 161.3, 170.69, 180.09]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [121.69, 131.6, 141.5, 155.65, 165.56, 176.88, 192.44, 208.01, 223.57, 240.55, 260.01, 282.89, 305.77, 328.65, 353.61]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]

                    }
                ]
            },
            {
                "name": "Opening Flourish", "type": "skill", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Press", "type": "skill", "damage": true, "vision": "geo", "stat": "def", "crit": true, "scale": [149.12, 160.3, 171.49, 186.4, 197.58, 208.77, 223.68, 238.59, 253.5, 268.42, 283.33, 298.24, 316.88, 335.52, 354.16]

                    },
                    {
                        "name": "Charge Level 1", "type": "skill", "damage": true, "vision": "geo", "stat": "def", "crit": true, "scale": [260.96, 280.53, 300.1, 326.2, 345.77, 365.34, 391.44, 417.54, 443.63, 469.73, 495.82, 521.92, 554.54, 587.16, 619.78]

                    },
                    {
                        "name": "Charge Level 2", "type": "skill", "damage": true, "vision": "geo", "stat": "def", "crit": true, "scale": [372.8, 400.76, 428.72, 466, 493.96, 521.92, 559.2, 596.48, 633.76, 671.04, 708.32, 745.6, 792.2, 838.8, 885.4]

                    },
                    {
                        "name": "Shield", "type": "shield", "vision": "geo", "stat": "hp", "crit": false, "scale": [12, 12.9, 13.8, 15, 15.9, 16.8, 18, 19.2, 20.4, 21.6, 22.8, 24, 25.5, 27, 28.5], "flat": [1155, 1271, 1396, 1531, 1675, 1830, 1993, 2167, 2350, 2542, 2744, 2956, 3178, 3409, 3650]

                    },
                ]
            },
            {
                "name": "Cliffbreaker's Banner", "type": "burst", "damage": true, "vision": "geo", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "geo", "stat": "atk", "crit": true, "scale": [244, 262.3, 280.6, 305, 323.3, 341.6, 366, 390.4, 414.8, 439.2, 463.6, 488, 518.5, 549, 579.5]

                    }
                ],
                "apply": { "id": 505 }
            }
        ],
        "const": [
            {
                "name": "Thespian Gallop",
                "desc": "Opening Flourish's CD is decreased by 18%."
            },
            {
                "name": "Myriad Mise-En-Scène",
                "desc": "After Cliffbreaker's Banner is unleashed, all nearby party members' Normal Attack DMG is increased by 15% for 12s.",
                "apply": { "id": 506, "option": 0 }
            },
            {
                "name": "Seafaring General",
                "desc": "Increases the Level of Cliffbreaker's Banner by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Flower and a Fighter",
                "desc": "When Yun Jin triggers the Crystallize Reaction, her DEF is increased by 20% for 12s.",
                "apply": { "id": 507, "option": 0 }
            },
            {
                "name": "Famed Throughout the Land",
                "desc": "Increases the Level of Opening Flourish by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Decorous Harmony",
                "desc": "Characters under the effects of the Flying Cloud Flag Formation have their Normal ATK SPD increased by 12%.",
                "apply": { "id": 508, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Light Nourishment",
                "desc": "When Perfect Cooking is achieved on Food with Adventure-related effects, there is a 12% chance to obtain double the product.",
                "level": 0
            },
            {
                "name": "True to Oneself",
                "desc": "Using Opening Flourish at the precise moment when Yun Jin is attacked will unleash its Level 2 Charged (Hold) form.",
                "level": 2
            },
            {
                "name": "Breaking Conventions",
                "desc": "The Normal Attack DMG Bonus granted by Flying Cloud Flag Formation is further increased by 2.5%/5%/7.5%/11.5% of Yun Jin's DEF when the party contains characters of 1/2/3/4 Elemental Types, respectively.",
                "level": 8,
                "apply": { "id": 509, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "dragonheir_false_fin" }, { "type": "group", "id": "mask" }, { "type": "item", "id": "glaze_lily" }],
        "party_effects": [
            { "type": "stat", "id": "yunjindef" },
            { "type": "apply", "id": 505, "option": 0, "desc": "Flying Cloud Flag Formation - When Normal Attack DMG is dealt to opponents, Bonus DMG will be dealt based on Yun Jin's current DEF." },
            { "type": "apply", "id": 509, "option": 0, "desc": "The Normal Attack DMG Bonus granted by Flying Cloud Flag Formation is further increased by 2.5%/5%/7.5%/11.5% of Yun Jin's DEF when the party contains characters of 1/2/3/4 Elemental Types, respectively." },
            { "type": "apply", "id": 506, "option": 0, "desc": "After Cliffbreaker's Banner is unleashed, all nearby party members' Normal Attack DMG is increased by 15% for 12s." },
            { "type": "apply", "id": 508, "option": 0, "desc": "Characters under the effects of the Flying Cloud Flag Formation have their Normal ATK SPD increased by 12%." }

        ]
    },
    "yaemiko": {
        "id": 48,
        "name": "Yae Miko",
        "weapon": "catalyst",
        "vision": "electro",
        "stats": [
            { "stat": "hp_base", "values": [807, 2095, 2787, 4170, 4662, 5364, 6020, 6729, 7220, 7936, 8428, 9151, 9643, 10372] },
            { "stat": "atk_base", "values": [26, 69, 91, 137, 153, 176, 197, 220, 236, 260, 276, 300, 316, 340] },
            { "stat": "def_base", "values": [44, 115, 153, 229, 256, 294, 330, 369, 396, 435, 462, 502, 529, 569] },
            { "stat": "crit", "values": [0, 0, 0, 0, 4.8, 4.8, 9.6, 9.6, 9.6, 9.6, 14.4, 14.4, 19.2, 19.2] },
            { "stat": "burst_energy", "values": [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90] }


        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [39.66, 42.63, 45.61, 49.57, 52.55, 55.52, 59.49, 63.45, 67.42, 71.39, 75.35, 79.32, 84.27, 89.23, 94.19]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [38.52, 41.41, 44.3, 48.15, 51.04, 53.93, 57.78, 61.63, 65.48, 69.33, 73.19, 77.04, 81.85, 86.67, 91.48]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [56.89, 61.16, 65.42, 71.11, 75.38, 79.64, 85.33, 91.02, 96.71, 102.4, 108.09, 113.78, 120.89, 128, 135.11]

                    },
                    
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [142.89, 153.61, 164.33, 178.62, 189.34, 200.05, 214.34, 228.63, 242.92, 257.21, 271.5, 285.79, 303.65, 321.51, 339.38]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
                    }
                ]
            },
            {
                "name": "Yakan Evocation: Sesshou Sakura", "type": "skill", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Level 1", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [60.67, 65.22, 69.77, 75.84, 80.39, 84.94, 91.01, 97.08, 103.14, 109.21, 115.28, 121.34, 128.93, 136.51, 144.1]

                    },
                    {
                        "name": "Level 2", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [75.84, 81.53, 87.22, 94.8, 100.49, 106.18, 113.76, 121.34, 128.93, 136.51, 144.1, 151.68, 161.16, 170.64, 180.12]

                    },
                    {
                        "name": "Level 3", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [94.8, 101.91, 109.02, 118.5, 125.61, 132.72, 142.2, 151.68, 161.16, 170.64, 180.12, 189.6, 201.45, 213.3, 225.15]

                    },
                    {
                        "name": "Level 4", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [118.5, 127.39, 136.28, 148.13, 157.01, 165.9, 177.75, 189.6, 201.45, 213.3, 225.15, 237, 251.81, 266.63, 281.44]

                    }
                ]
            },
            {
                "name": "Great Secret Art: Tenko Kenshin", "type": "burst", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [260, 279.5, 299, 325, 344.5, 364, 390, 416, 442, 468, 494, 520, 552.5, 585, 617.5]

                    },
                    {
                        "name": "Sky Kitsune Thunderbolt", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [333.82, 358.85, 383.89, 417.27, 442.31, 467.34, 500.72, 534.11, 567.49, 600.87, 634.25, 667.63, 709.36, 751.09, 792.81]

                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Chronicles of the Kitsune Cohort",
                "desc": "Each time Great Secret Art: Tenko Kenshin activates a Sky Kitsune Thunderbolt, Yae Miko will restore 8 Elemental Energy for herself."
            },
            {
                "name": "Fox's Mooncall",
                "desc": "Sesshou Sakura start at Level 2 when created, their max level is increased to 4, and its attack range is increased by 60%."
            },
            {
                "name": "The Seven Glamours",
                "desc": "Increases the Level of Yakan Evocation: Sesshou Sakura by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Sakura Channeling",
                "desc": "When Sesshou Sakura thunderbolts hit opponents, the Electro DMG Bonus of all nearby party members is increased by 20% for 5s.",
                "apply": { "id": 515, "option": 0 }
            },
            {
                "name": "Mischievous Teasing",
                "desc": "Increases the Level of Great Secret Art: Tenko Kenshin by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Forbidden Art: Daisesshou",
                "desc": "The Sesshou Sakura's attacks will ignore 60% of the opponents' DEF.",
                "apply": { "id": 522, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Meditations of a Wild Kitsune",
                "desc": "When Yae Miko crafts Character Talent Materials, she has a 25% chance to create an extra Talent Material from the same region of a random type. The rarity of this material will be the same as the materials consumed during crafting.",
                "level": 0
            },
            {
                "name": "The Shrine's Sacred Shade",
                "desc": "When casting Great Secret Art: Tenko Kenshin, each Sesshou Sakura destroyed resets the cooldown for 1 charge of Yakan Evocation: Sesshou Sakura.",
                "level": 2
            },
            {
                "name": "Enlightened Blessing",
                "desc": "Every point of Elemental Mastery Yae Miko possesses will increase Sesshou Sakura DMG by 0.15%.",
                "level": 8,
                "apply": { "id": 516, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "dragonheir_false_fin" }, { "type": "group", "id": "slime" }, { "type": "item", "id": "valberry" }],
        "party_effects": [
            { "type": "apply", "id": 515, "option": 0, "desc": "When Sesshou Sakura thunderbolts hit opponents, the Electro DMG Bonus of all nearby party members is increased by 20% for 5s." }
        ]
    },
    "ayato": {
        "id": 49,
        "name": "Kamisato Ayato",
        "short_name": "Ayato",
        "weapon": "sword",
        "vision": "hydro",
        "stats": [
            { "stat": "hp_base", "values": [1068, 2770, 3685, 5514, 6165, 7092, 7960, 8897, 9548, 10494, 11144, 12101, 12751, 13715] },
            { "stat": "atk_base", "values": [23, 60, 80, 120, 134, 155, 174, 194, 208, 229, 243, 264, 278, 299] },
            { "stat": "def_base", "values": [60, 155, 206, 309, 345, 397, 446, 499, 535, 588, 624, 678, 715, 769] },
            { "stat": "critdmg", "values": [0, 0, 0, 0, 9.6, 9.6, 19.2, 19.2, 19.2, 19.2, 28.8, 28.8, 38.4, 38.4] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [44.96, 48.62, 52.28, 57.51, 61.17, 65.35, 71.1, 76.85, 82.6, 88.88, 95.15, 101.43, 107.7, 113.97, 120.25]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [47.16, 51, 54.83, 60.32, 64.16, 68.54, 74.57, 80.61, 86.64, 93.22, 99.8, 106.38, 112.96, 119.54, 126.12]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [58.61, 63.38, 68.15, 74.97, 79.74, 85.19, 92.69, 100.19, 107.68, 115.86, 124.04, 132.22, 140.4, 148.58, 156.75]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits": 2, "scale": [29.45, 31.85, 34.24, 37.67, 40.06, 42.8, 46.57, 50.34, 54.1, 58.21, 62.32, 66.43, 70.54, 74.65, 78.76]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [75.6, 81.76, 87.91, 96.7, 102.86, 109.89, 119.56, 129.23, 138.9, 149.45, 160, 170.55, 181.1, 191.65, 202.2]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [129.53, 140.07, 150.62, 165.68, 176.22, 188.27, 204.84, 221.41, 237.97, 256.05, 274.12, 292.19, 310.27, 328.34, 346.42]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ]
            },
            {
                "name": "Kamisato Art: Kyouka", "type": "skill", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Water Illusion", "type": "skill", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [101.48, 109.74, 118, 129.8, 138.06, 147.5, 160.48, 173.46, 186.44, 200.6, 214.76, 228.92, 243.08, 257.24, 271.4]

                    },
                    {
                        "name": "Shunsuiken 1-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [52.89, 57.2, 61.5, 67.65, 71.96, 76.88, 83.64, 90.41, 97.17, 104.55, 111.93, 119.31, 126.69, 134.07, 141.45]

                    },                                      
                    {
                        "name": "Shunsuiken 1-Hit + Namisen 1", "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[52.89, 57.2, 61.5, 67.65, 71.96, 76.88, 83.64, 90.41, 97.17, 104.55, 111.93, 119.31, 126.69, 134.07, 141.45], [0.56, 0.61, 0.65, 0.72, 0.76, 0.82, 0.89, 0.96, 1.03, 1.11, 1.19, 1.27, 1.34, 1.42, 1.5]]

                    },
                    {
                        "name": "Shunsuiken 1-Hit + Namisen 2", "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[52.89, 57.2, 61.5, 67.65, 71.96, 76.88, 83.64, 90.41, 97.17, 104.55, 111.93, 119.31, 126.69, 134.07, 141.45], [1.12, 1.22, 1.3, 1.44, 1.52, 1.64, 1.78, 1.92, 2.06, 2.22, 2.38, 2.54, 2.68, 2.84, 3]]

                    },
                    {
                        "name": "Shunsuiken 1-Hit + Namisen 3", "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[52.89, 57.2, 61.5, 67.65, 71.96, 76.88, 83.64, 90.41, 97.17, 104.55, 111.93, 119.31, 126.69, 134.07, 141.45], [1.68, 1.83, 1.95, 2.16, 2.28, 2.46, 2.67, 2.88, 3.09, 3.33, 3.57, 3.81, 4.02, 4.26, 4.5]]

                    },
                    {
                        "name": "Shunsuiken 1-Hit + Namisen 4", "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[52.89, 57.2, 61.5, 67.65, 71.96, 76.88, 83.64, 90.41, 97.17, 104.55, 111.93, 119.31, 126.69, 134.07, 141.45], [2.24, 2.44, 2.6, 2.88, 3.04, 3.28, 3.56, 3.84, 4.12, 4.44, 4.76, 5.08, 5.36, 5.68, 6]]

                    },
                    {
                        "name": "Shunsuiken 1-Hit + Namisen 5", "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[52.89, 57.2, 61.5, 67.65, 71.96, 76.88, 83.64, 90.41, 97.17, 104.55, 111.93, 119.31, 126.69, 134.07, 141.45], [2.8, 3.05, 3.25, 3.6, 3.8, 4.1, 4.45, 4.8, 5.15, 5.55, 5.95, 6.35, 6.7, 7.1, 7.5]]

                    },
                    {
                        "name": "Shunsuiken 2-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [58.91, 63.71, 68.5, 75.35, 80.15, 85.63, 93.16, 100.7, 108.23, 116.45, 124.67, 132.89, 141.11, 149.33, 157.55]

                    },
                    {
                        "name": "Shunsuiken 2-Hit + Namisen 1", "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[58.91, 63.71, 68.5, 75.35, 80.15, 85.63, 93.16, 100.7, 108.23, 116.45, 124.67, 132.89, 141.11, 149.33, 157.55], [0.56, 0.61, 0.65, 0.72, 0.76, 0.82, 0.89, 0.96, 1.03, 1.11, 1.19, 1.27, 1.34, 1.42, 1.5]]

                    },
                    {
                        "name": "Shunsuiken 2-Hit + Namisen 2", "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[58.91, 63.71, 68.5, 75.35, 80.15, 85.63, 93.16, 100.7, 108.23, 116.45, 124.67, 132.89, 141.11, 149.33, 157.55], [1.12, 1.22, 1.3, 1.44, 1.52, 1.64, 1.78, 1.92, 2.06, 2.22, 2.38, 2.54, 2.68, 2.84, 3]]

                    },
                    {
                        "name": "Shunsuiken 2-Hit + Namisen 3", "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[58.91, 63.71, 68.5, 75.35, 80.15, 85.63, 93.16, 100.7, 108.23, 116.45, 124.67, 132.89, 141.11, 149.33, 157.55], [1.68, 1.83, 1.95, 2.16, 2.28, 2.46, 2.67, 2.88, 3.09, 3.33, 3.57, 3.81, 4.02, 4.26, 4.5]]

                    },
                    {
                        "name": "Shunsuiken 2-Hit + Namisen 4", "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[58.91, 63.71, 68.5, 75.35, 80.15, 85.63, 93.16, 100.7, 108.23, 116.45, 124.67, 132.89, 141.11, 149.33, 157.55], [2.24, 2.44, 2.6, 2.88, 3.04, 3.28, 3.56, 3.84, 4.12, 4.44, 4.76, 5.08, 5.36, 5.68, 6]]

                    },
                    {
                        "name": "Shunsuiken 2-Hit + Namisen 5", "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[58.91, 63.71, 68.5, 75.35, 80.15, 85.63, 93.16, 100.7, 108.23, 116.45, 124.67, 132.89, 141.11, 149.33, 157.55], [2.8, 3.05, 3.25, 3.6, 3.8, 4.1, 4.45, 4.8, 5.15, 5.55, 5.95, 6.35, 6.7, 7.1, 7.5]]

                    },
                    {
                        "name": "Shunsuiken 3-Hit", "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [64.93, 70.22, 75.5, 83.05, 88.34, 94.38, 102.68, 110.99, 119.29, 128.35, 137.41, 146.47, 155.53, 164.59, 173.65]

                    },
                    {
                        "name": "Shunsuiken 3-Hit + Namisen 1", "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[64.93, 70.22, 75.5, 83.05, 88.34, 94.38, 102.68, 110.99, 119.29, 128.35, 137.41, 146.47, 155.53, 164.59, 173.65], [0.56, 0.61, 0.65, 0.72, 0.76, 0.82, 0.89, 0.96, 1.03, 1.11, 1.19, 1.27, 1.34, 1.42, 1.5]]

                    },
                    {
                        "name": "Shunsuiken 3-Hit + Namisen 2", "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[64.93, 70.22, 75.5, 83.05, 88.34, 94.38, 102.68, 110.99, 119.29, 128.35, 137.41, 146.47, 155.53, 164.59, 173.65], [1.12, 1.22, 1.3, 1.44, 1.52, 1.64, 1.78, 1.92, 2.06, 2.22, 2.38, 2.54, 2.68, 2.84, 3]]

                    },
                    {
                        "name": "Shunsuiken 3-Hit + Namisen 3", "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[64.93, 70.22, 75.5, 83.05, 88.34, 94.38, 102.68, 110.99, 119.29, 128.35, 137.41, 146.47, 155.53, 164.59, 173.65], [1.68, 1.83, 1.95, 2.16, 2.28, 2.46, 2.67, 2.88, 3.09, 3.33, 3.57, 3.81, 4.02, 4.26, 4.5]]

                    },
                    {
                        "name": "Shunsuiken 3-Hit + Namisen 4", "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[64.93, 70.22, 75.5, 83.05, 88.34, 94.38, 102.68, 110.99, 119.29, 128.35, 137.41, 146.47, 155.53, 164.59, 173.65], [2.24, 2.44, 2.6, 2.88, 3.04, 3.28, 3.56, 3.84, 4.12, 4.44, 4.76, 5.08, 5.36, 5.68, 6]]

                    },
                    {
                        "name": "Shunsuiken 3-Hit + Namisen 5", "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "normal", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[64.93, 70.22, 75.5, 83.05, 88.34, 94.38, 102.68, 110.99, 119.29, 128.35, 137.41, 146.47, 155.53, 164.59, 173.65], [2.8, 3.05, 3.25, 3.6, 3.8, 4.1, 4.45, 4.8, 5.15, 5.55, 5.95, 6.35, 6.7, 7.1, 7.5]]

                    },
                    {
                        "name": "Boundless Origin", "req": { "type": "const", "val": 6, "subtype": "min" }, "type": "normal", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "hits": 2, "scale": [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]

                    },

                ]
            },
            {
                "name": "Kamisato Art: Suiyuu", "type": "burst", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Bloomwater Blade", "type": "burst", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [66.46, 71.44, 76.42, 83.07, 88.05, 93.04, 99.68, 106.33, 112.98, 119.62, 126.27, 132.91, 141.22, 149.53, 157.83]

                    },
                    //{
                    //    "name": "Bloomwater Blade + Kamisato Art: Katsusui Senkoku", "type": "burst", "damage": true, "vision": "hydro", "stat": ["atk", "hp"], "crit": true, "scale": [[55.02, 59.14, 63.27, 68.77, 72.9, 77.02, 82.53, 88.03, 93.53, 99.03, 104.53, 110.04, 116.91, 123.79, 130.67], [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]]

                    //}
                ],
                "apply": { "id": 523}
            }
        ],
        "const": [
            {
                "name": "Kyouka Fushi",
                "desc": "Shunsuiken DMG is increased by 30% against opponents with 50% HP or less."
            },
            {
                "name": "World Source",
                "desc": "Namisen's maximum stack count is increased to 5. When Kamisato Ayato has at least 3 Namisen stacks, his Max HP is increased by 40%.",
                "apply": { "id": 525, "option": 0 }
            },
            {
                "name": "Gensui Ichiro",
                "desc": "Increases the Level of Kamisato Art: Suiyuu by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Endless Flow",
                "desc": "After using Kamisato Art: Suiyuu, all nearby party members will have 20% increased Normal Attack SPD for 12s."
            },
            {
                "name": "To Admire the Flowers",
                "desc": "Increases the Level of Kamisato Art: Kyouka by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Boundless Origin",
                "desc": "After using Kamisato Art: Kyouka, Ayato's next Shunsuiken attack will create 2 extra Shunsuiken strikes when they hit opponents, each one dealing 300% of Ayato's ATK as DMG. Both these Shunsuiken attacks will not be affected by Namisen."
            }

        ],
        "passive": [
            {
                "name": "Kamisato Art: Daily Cooking",
                "desc": "When Ayato cooks a dish perfectly, he has a 18% chance to receive an additional \"Suspicious\" dish of the same type.",
                "level": 0
            },
            {
                "name": "Kamisato Art: Kiyotaki Jouhou",
                "desc": "Kamisato Art: Kyouka has the following properties:<br>After it is used, Kamisato Ayato will gain 2 Namisen stacks.<br>When the water illusion explodes due to being attacked, Ayato will gain a Namisen effect equal to the maximum number of stacks possible.",
                "level": 2
            },
            {
                "name": "Kamisato Art: Katsusui Senkoku",
                "desc": "If Kamisato Ayato is not on the field and his Energy is less than 40, he will regenerate 1.5 Energy for himself every second.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "dew_of_repudiation" }, { "type": "group", "id": "handguard" }, { "type": "item", "id": "sakura_bloom" }],
        "party_effects": [
            { "type": "apply", "id": 523, "option": 0, "desc": "Kamisato Art: Suiyuu increases Normal Attack DMG of characters within." },
            { "type": "apply", "id": 524, "option": 0, "desc": "After using Kamisato Art: Suiyuu, all nearby party members will have 20% increased Normal Attack SPD for 12s." }
        ]
    },
    "yelan": {
        "id": 50,
        "name": "Yelan",
        "weapon": "bow",
        "vision": "hydro",
        "stats": [
            { "stat": "hp_base", "values": [1125, 2918, 3883, 5810, 6495, 7472, 8386, 9374, 10059, 11056, 11741, 12749, 13434, 14450] },
            { "stat": "atk_base", "values": [19, 49, 66, 98, 110, 126, 142, 158, 170, 187, 198, 215, 227, 244] },
            { "stat": "def_base", "values": [43, 111, 147, 220, 246, 283, 318, 355, 381, 419, 445, 483, 509, 548] },
            { "stat": "crit", "values": [0, 0, 0, 0, 4.8, 4.8, 9.6, 9.6, 9.6, 9.6, 14.4, 14.4, 19.2, 19.2] },
            { "stat": "burst_energy", "values": [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [40.68, 43.99, 47.3, 52.03, 55.34, 59.13, 64.33, 69.53, 74.73, 80.41, 86.09, 91.76, 97.44, 103.11, 108.79]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [39.04, 42.22, 45.4, 49.94, 53.12, 56.75, 61.74, 66.74, 71.73, 77.18, 82.63, 88.08, 93.52, 98.97, 104.42]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [51.6, 55.8, 60, 66, 70.2, 75, 81.6, 88.2, 94.8, 102, 109.2, 116.4, 123.6, 130.8, 138]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "hits":3, "scale": [21.67, 23.44, 25.2, 27.72, 29.48, 31.5, 34.27, 37.04, 39.82, 42.84, 45.86, 48.89, 51.91, 54.94, 57.96]

                    },                    
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3]
                    },
                    {
                        "name": "Fully-Charged Aimed Shot", "type": "charged", "damage": true, "vision": "hydro", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5]
                    },
                    {
                        "name": "Breakthrough Barb", "type": false, "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [11.58, 12.44, 13.31, 14.47, 15.34, 16.21, 17.36, 18.52, 19.68, 20.84, 21.99, 23.15, 24.6, 26.05, 27.49]
                    },
                    {
                        "name": "Breakthrough Barb - Mastermind", "req": { "type": "const", "val": 6, "subtype": "min" }, "type": "charged", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [18.0648, 19.4064, 20.7636, 22.5732, 23.9304, 25.2876, 27.0816, 28.8912, 30.7008, 32.5104, 34.3044, 36.114, 38.376, 40.638, 42.8844]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
                    },
                ] },
            {
                "name": "Lingering Lifeline", "type": "skill", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [22.61, 24.31, 26.01, 28.27, 29.96, 31.66, 33.92, 36.18, 38.44, 40.7, 42.97, 45.23, 48.05, 50.88, 53.71]

                    }

                ]
            },
            {
                "name": "Depth-Clarion Dice", "type": "burst", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [7.31, 7.86, 8.4, 9.14, 9.68, 10.23, 10.96, 11.69, 12.42, 13.15, 13.89, 14.62, 15.53, 16.44, 17.36]

                    },
                    {
                        "name": "Exquisite Throw", "type": "burst", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "hits":3, "scale": [4.87, 5.24, 5.6, 6.09, 6.46, 6.82, 7.31, 7.8, 8.28, 8.77, 9.26, 9.74, 10.35, 10.96, 11.57]

                    },
                    {
                        "name": "Exquisite Throw - Taking All Comers", "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "burst", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14]

                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Enter the Plotters",
                "desc": "Lingering Lifeline gains 1 additional charge."
            },
            {
                "name": "Taking All Comers",
                "desc": "When Exquisite Throw conducts a coordinated attack, it will fire an additional water arrow that will deal 14% of Yelan’s Max HP as Hydro DMG. <br>This effect can trigger once every 1.8s."
            },
            {
                "name": "Beware the Trickster's Dice",
                "desc": "Increases the Level of Depth-Clarion Dice by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            
            {
                "name": "Bait-and-Switch",
                "desc": "Increases all party members’ Max HP by 10% for 25s for every opponent marked by Lifeline when the Lifeline explodes. A maximum increase of 40% Max HP can be attained in this manner.",
                "apply": { "id": 590, "option": 0 }
            },
            {
                "name": "Dealer's Sleight",
                "desc": "Increases the Level of Lingering Lifeline by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Winner Take All",
                "desc": "After using Depth-Clarion Dice, Yelan will enter the Mastermind state.<br>In this state, all of Yelan's Normal Attacks will be the stronger Breakthrough Barbs. These Breakthrough Barbs will have all its normal abilities and the DMG dealt will be considered Charged Attack DMG, dealing 156% of their normal DMG.<br>The Mastermind state lasts 20s and will be cleared after Yelan fires 6 arrows."
            }

        ],
        "passive": [
            {
                "name": "Passive 1",
                "desc": "Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.",
                "level": 0
            },
            {
                "name": "Turn Control",
                "desc": "When the party has 1/2/3/4 Elemental Types, Yelan's Max HP is increased by 6%/12%/18%/30%.",
                "level": 2,
                "apply": { "id": 541, "option": 0 }
            },
            {
                "name": "Adapt With Ease",
                "desc": "So long as an Exquisite Throw is in play, your own active character deals 1% more DMG. This increases by a further 3.5% DMG every second. The maximum increase to DMG dealt is 50%.",
                "level": 8,
                "apply": { "id": 542, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "runic_fang" }, { "type": "group", "id": "fatui_insignia" }, { "type": "item", "id": "starconch" }],
        "party_effects": [
            { "type": "apply", "id": 542, "option": 0, "desc": "Exquisite Throw increases DMG of active character by 1%, increases by a further 3.5% DMG every second." },
            { "type": "apply", "id": 590, "option": 0, "desc": "Increases all party members’ Max HP by 10% for 25s for every opponent (Max 4) marked by Lifeline when the Lifeline explodes." }

        ]
    },
    "shinobu": {
        "id": 51,
        "name": "Kuki Shinobu",
        "short_name":"Shinobu",
        "weapon": "sword",
        "vision": "electro",
        "stats": [
            { "stat": "hp_base", "values": [1030, 2647, 3417, 5118, 5665, 6516, 7245, 8096, 8643, 9493, 10040, 10891, 11438, 12289] },
            { "stat": "atk_base", "values": [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212] },
            { "stat": "def_base", "values": [63, 162, 209, 313, 346, 398, 443, 495, 528, 580, 613, 665, 699, 751] },
            { "stat": "hp%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [48.76, 52.73, 56.7, 62.37, 66.34, 70.88, 77.11, 83.35, 89.59, 96.39, 103.19, 110, 116.8, 123.61, 130.41]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [44.55, 48.17, 51.8, 56.98, 60.61, 64.75, 70.45, 76.15, 81.84, 88.06, 94.28, 100.49, 106.71, 112.92, 119.14]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [59.34, 64.17, 69, 75.9, 80.73, 86.25, 93.84, 101.43, 109.02, 117.3, 125.58, 133.86, 142.14, 150.42, 158.7]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [76.11, 82.31, 88.5, 97.35, 103.55, 110.63, 120.36, 130.1, 139.83, 150.45, 161.07, 171.69, 182.31, 192.93, 203.55]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[55.63, 66.77], [60.16, 72.2], [64.69, 77.63], [71.16, 85.4], [75.69, 90.83], [80.86, 97.04], [87.98, 5.58], [95.09, 14.12], [102.21, 22.66], [109.97, 31.98], [117.74, 41.29], [125.5, 50.61], [133.26, 59.93], [141.02, 69.24], [148.79, 78.56]]
                   },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ]
            },
            {
                "name": "Sanctifying Ring", "type": "skill", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [75.71, 81.39, 87.07, 94.64, 100.32, 106, 113.57, 121.14, 128.71, 136.28, 143.85, 151.42, 160.89, 170.35, 179.82]

                    },
                    {
                        "name": "Grass Ring of Sanctification Healing", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "healing", "damage": false, "vision": "electro", "stat": "hp", "crit": false, "scale": [3, 3.23, 3.45, 3.75, 3.98, 4.2, 4.5, 4.8, 5.1, 5.4, 5.7, 6, 6.38, 6.75, 7.13], "flat": [289, 318, 349, 383, 419, 457, 498, 542, 587, 636, 686, 739, 795, 852, 913]


                    },
                    {
                        "name": "Grass Ring of Sanctification Healing + Heart's Repose", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "healing", "damage": false, "vision": "electro", "stat": ["hp", "elemastery"], "crit": false, "scale": [[3, 3.23, 3.45, 3.75, 3.98, 4.2, 4.5, 4.8, 5.1, 5.4, 5.7, 6, 6.38, 6.75, 7.13], [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75]], "flat": [289, 318, 349, 383, 419, 457, 498, 542, 587, 636, 686, 739, 795, 852, 913]


                    },
                    {
                        "name": "Grass Ring of Sanctification", "req": { "type": "level", "val": 7, "subtype": "max" }, "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [25.24, 27.13, 29.03, 31.55, 33.44, 35.34, 37.86, 40.38, 42.91, 45.43, 47.96, 50.48, 53.64, 56.79, 59.95]

                    },
                    {
                        "name": "Grass Ring of Sanctification + Heart's Repose", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "skill", "damage": true, "vision": "electro", "stat": ["atk", "elemastery"], "crit": true, "scale": [[25.24, 27.13, 29.03, 31.55, 33.44, 35.34, 37.86, 40.38, 42.91, 45.43, 47.96, 50.48, 53.64, 56.79, 59.95], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]]

                    },
                    {
                        "name": "Thundergrass Mark", "req": { "type": "const", "val": 4, "subtype": "min" }, "type": false, "damage": true, "vision": "electro", "stat": "hp", "crit": true, "scale": [9.7, 9.7, 9.7, 9.7, 9.7, 9.7, 9.7, 9.7, 9.7, 9.7, 9.7, 9.7, 9.7, 9.7, 9.7]

                    }
                ]
            },
            {
                "name": "Goei Narukami Kariyama Rite", "type": "burst", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "electro", "stat": "hp", "crit": true, "scale": [3.6, 3.88, 4.15, 4.51, 4.78, 5.05, 5.41, 5.77, 6.13, 6.49, 6.85, 7.21, 7.66, 8.11, 8.56]

                    },
                    {
                        "name": "Total >50% HP", "type": "burst", "damage": true, "vision": "electro", "stat": "hp", "crit": true, "hits":7, "scale": [3.6, 3.88, 4.15, 4.51, 4.78, 5.05, 5.41, 5.77, 6.13, 6.49, 6.85, 7.21, 7.66, 8.11, 8.56]

                    },
                    {
                        "name": "Total <50% HP", "type": "burst", "damage": true, "vision": "electro", "stat": "hp", "crit": true, "hits": 12, "scale": [3.6, 3.88, 4.15, 4.51, 4.78, 5.05, 5.41, 5.77, 6.13, 6.49, 6.85, 7.21, 7.66, 8.11, 8.56]

                    }

                ]
            }
        ],
        "const": [
            {
                "name": "To Cloister Compassion",
                "desc": "Goei Narukami Kariyama Rite's AoE is increased by 50%."
            },
            {
                "name": "To Forsake Fortune",
                "desc": "Grass Ring of Santification's duration is increased by 3s."
            },
            {
                "name": "To Sequester Sorrow",
                "desc": "Increases the Level of Sanctifying Ring by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "To Sever Sealing",
                "desc": "When the Normal, Charged, or Plunging Attacks of characters affected by Shinobu's Grass Ring of Sanctification hit opponents, a Thundergrass Mark will land on the opponent's position and deal AoE Electro DMG based on 9.7% of Shinobu's Max HP.This effect can occur once every 5s."
            },
            {
                "name": "To Cease Courtesies",
                "desc": "Increases the Level of Goei Narukami Kariyama Rite by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "To Ward Weakness",
                "desc": "When Kuki Shinobu's HP drops to 25% or below, or when she takes lethal DMG:<br>Shinobu will not fall as a result of the DMG sustained this time.She will gain 150 Elemental Mastery for 15s.<br>This effect will automatically activate when her HP reaches 1.<br>This effect can be triggered once every 60s.",
                "apply": { "id": 544, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Talent for Daily Life",
                "desc": "Gains 25% more rewards when dispatched on an Inazuma Expedition for 20 hours.",
                "level": 0
            },
            {
                "name": "Breaking Free",
                "desc": "When Shinobu's HP is not higher than 50%, her Healing Bonus is increased by 15%.",
                "level": 2,
                "apply": { "id": 543, "option": 0 }
            },
            {
                "name": "Heart's Repose",
                "desc": "Sanctifying Ring's abilities will be boosted based on Shinobu's Elemental Mastery:<br>Healing amount will be increased by 75% of Elemental Mastery.<br>DMG dealt is increased by 25% of Elemental Mastery.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "runic_fang" }, { "type": "group", "id": "spectral" }, { "type": "item", "id": "naku_weed" }]
    },
    "heizou": {
        "id": 52,
        "name": "Shikanoin Heizou",
        "short_name": "Heizou",
        "weapon": "catalyst",
        "vision": "anemo",
        "stats": [
            { "stat": "hp_base", "values": [894, 2296, 2963, 4438, 4913, 5651, 6283, 7021, 7495, 8233, 8707, 9445, 9919, 10657] },
            { "stat": "atk_base", "values": [19, 48, 63, 94, 104, 119, 133, 148, 158, 174, 184, 200, 210, 225] },
            { "stat": "def_base", "values": [57, 147, 190, 285, 315, 363, 403, 451, 481, 528, 559, 606, 637, 684] },
            { "stat": "anemo", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [37.47, 40.28, 43.09, 46.84, 49.65, 52.46, 56.21, 59.96, 63.71, 67.45, 71.2, 74.95, 79.63, 84.32, 89]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [36.85, 39.62, 42.38, 46.07, 48.83, 51.59, 55.28, 58.96, 62.65, 66.33, 70.02, 73.7, 78.31, 82.92, 87.52]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [51.06, 54.89, 58.72, 63.83, 67.65, 71.48, 76.59, 81.7, 86.8, 91.91, 97.01, 102.12, 108.5, 114.89, 121.27]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [[14.78, 16.26, 19.22], [15.89, 17.48, 20.66], [17, 18.7, 22.1], [18.48, 20.33, 24.02], [19.59, 21.55, 25.46], [20.7, 22.77, 26.9], [22.17, 24.39, 28.83], [23.65, 26.02, 30.75], [25.13, 27.64, 32.67], [26.61, 29.27, 34.59], [28.09, 30.9, 36.51], [29.56, 32.52, 38.44], [31.41, 34.55, 40.84], [33.26, 36.59, 43.24], [35.11, 38.62, 45.64]]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [61.45, 66.06, 70.67, 76.81, 81.42, 86.03, 92.17, 98.32, 104.46, 110.61, 116.75, 122.9, 130.58, 138.26, 145.94]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [73, 78.48, 83.95, 91.25, 96.73, 102.2, 109.5, 116.8, 124.1, 131.4, 138.7, 146, 155.13, 164.25, 173.38]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]

                    }
                ]
            },
            {
                "name": "Heartstopper Strike", "type": "skill", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [227.52, 244.58, 261.65, 284.4, 301.46, 318.53, 341.28, 364.03, 386.78, 409.54, 432.29, 455.04, 483.48, 511.92, 540.36]

                    },
                    {
                        "name": "Skill + Declension x1", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [284.4, 305.73, 327.06, 355.5, 376.83, 398.16, 426.6, 455.04, 483.48, 511.92, 540.36, 568.8, 604.35, 639.9, 675.45]

                    },
                    {
                        "name": "Skill + Declension x2", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [341.28, 366.88, 392.47, 426.6, 452.2, 477.79, 511.92, 546.05, 580.18, 614.3, 648.43, 682.56, 725.22, 767.88, 810.54]

                    },
                    {
                        "name": "Skill + Declension x3", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [398.16, 428.03, 457.88, 497.7, 527.57, 557.42, 597.24, 637.06, 676.88, 716.68, 756.5, 796.32, 846.09, 895.86, 945.63]

                    },
                    {
                        "name": "Skill + Declension x4 + Conviction", "type": "skill", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [568.8, 611.47, 654.11, 711, 753.67, 796.31, 853.2, 910.09, 966.97, 1023.83, 1080.71, 1137.6, 1208.7, 1279.8, 1350.9]

                    }

                ]
            },
            {
                "name": "Windmuster Kick", "type": "burst", "damage": true, "vision": "anemo", "parts": [
                    {
                        "name": "Fudou Style Vacuum Slugger", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [314.69, 338.29, 361.89, 393.36, 416.96, 440.56, 472.03, 503.5, 534.97, 566.44, 597.91, 629.38, 668.71, 708.05, 747.38]

                    },
                    {
                        "name": "Windmuster Iris", "type": "burst", "damage": true, "vision": "anemo", "stat": "atk", "crit": true, "scale": [21.46, 23.07, 24.67, 26.82, 28.43, 30.04, 32.18, 34.33, 36.48, 38.62, 40.77, 42.91, 45.59, 48.28, 50.96]

                    }

                ]
            }
        ],
        "const": [
            {
                "name": "Named Juvenile Casebook",
                "desc": "For 5s after Shikanoin Heizou takes the field, his Normal Attack SPD is increased by 15%. He also gains 1 Declension stack for Heartstopper Strike. This effect can be triggered once every 10s.",
                "apply": { "id": 556, "option": 0 }
            },
            {
                "name": "Investigative Collection",
                "desc": "When the Fudou Style Vacuum Slugger created by Windmuster Kick explodes, it will pull nearby opponents in."
            },
            {
                "name": "Esoteric Puzzle Book",
                "desc": "Increases the Level of Heartstopper Strike by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Tome of Lies",
                "desc": "The first Windmuster Iris explosion in each Windmuster Kick will regenerate 9 Elemental Energy for Shikanoin Heizou. Every subsequent explosion in that Windmuster Kick will each regenerate an additional 1.5 Energy for Heizou.<br>One Windmuster Kick can regenerate a total of 13.5 Energy for Heizou in this manner."
            },
            {
                "name": "Secret Archive",
                "desc": "Increases the Level of Windmuster Kick by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Curious Casefiles",
                "desc": "Each Declension stack will increase the CRIT Rate of the Heartstopper Strike unleashed by 4%. When Heizou possesses Conviction, this Heartstoppper Strike's CRIT DMG is increased by 32%.",
                "apply": { "id": 557, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Pre-Existing Guilt",
                "desc": "Decreases sprinting Stamina consumption for your own party members by 20%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                "level": 0
            },
            {
                "name": "Paradoxical Practice",
                "desc": "When Shikanoin Heizou activates a Swirl reaction while on the field, he will gain 1 Declension stack for Heartstopper Strike. This effect can be triggered once every 0.1s.",
                "level": 2
            },
            {
                "name": "Penetrative Reasoning",
                "desc": "After Shikanoin Heizou's Heartstopper Strike hits an opponent, increases all party members' (excluding Shikanoin Heizou) Elemental Mastery by 80 for 10s.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "runic_fang" }, { "type": "group", "id": "treasure_insignia" }, { "type": "item", "id": "onikabuto" }],
        "party_effects": [
            { "type": "apply", "id": 555, "option": 0, "desc": "After Shikanoin Heizou's Heartstopper Strike hits an opponent, increases all party members' (excluding Shikanoin Heizou) Elemental Mastery by 80 for 10s." }
        ]
    },
    "dori": {
        "id": 53,
        "name": "Dori",
        "weapon": "claymore",
        "vision": "electro",
        "stats": [
            { "stat": "hp_base", "values": [1039.44, 2670.33, 3446.84, 5162.96, 5714.7, 6573.27, 7308.92, 8167.5, 8719.24, 9576.78, 10128.51, 10987.09, 11538.82, 12397.4] },
            { "stat": "atk_base", "values": [18.7, 48.04, 62.01, 92.88, 102.8, 118.25, 131.48, 146.93, 156.85, 172.28, 182.2, 197.65, 207.57, 223.02] },
            { "stat": "def_base", "values": [60.66, 155.83, 201.15, 301.29, 333.49, 383.6, 426.53, 476.63, 508.83, 558.87, 591.07, 641.17, 673.37, 723.47] },
            { "stat": "hp%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }
        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [90.21, 97.56, 104.9, 115.39, 122.73, 131.12, 142.66, 154.2, 165.74, 178.33, 190.92, 203.51, 216.09, 228.68, 241.27]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[41.07, 43.12], [44.42, 46.63], [47.76, 50.14], [52.54, 55.15], [55.88, 58.66], [59.7, 62.67], [64.95, 68.19], [70.21, 73.71], [75.46, 79.22], [81.19, 85.24], [86.92, 91.25], [92.65, 97.27], [98.39, 103.29], [104.12, 109.31], [109.85, 115.32]]
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [128.4, 138.85, 149.3, 164.23, 174.68, 186.63, 203.05, 219.47, 235.89, 253.81, 271.73, 289.64, 307.56, 325.47, 343.39]
                    },
                    {
                        "name": "Charged Attack Spinning", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [62.55, 67.64, 72.73, 80, 85.09, 90.91, 98.91, 106.91, 114.91, 123.64, 133.64, 145.4, 157.16, 168.92, 181.75]
                    },
                    {
                        "name": "Charged Attack Final", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.09, 122.29, 131.5, 144.65, 153.86, 164.37, 178.84, 193.31, 207.77, 223.55, 241.63, 262.89, 284.16, 305.42, 328.62]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21]
                    }
                ]
            },
            {
                "name": "Spirit-Warding Lamp: Troubleshooter Cannon", "type": "skill", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Troubleshooter Shot", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [147.28, 158.33, 169.37, 184.1, 195.15, 206.19, 220.92, 235.65, 250.38, 265.1, 279.83, 294.56, 312.97, 331.38, 349.79]

                    },
                    {
                        "name": "After-Sales Service Round", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [31.56, 33.93, 36.29, 39.45, 41.82, 44.18, 47.34, 50.5, 53.65, 56.81, 59.96, 63.12, 67.07, 71.01, 74.95]
                    },
                    {
                        "name": "Jinni Toop", "req": { "type": "const", "val": 2, "subtype": "min" }, "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [73.64, 79.165, 84.685, 92.05, 97.575, 103.095, 110.46, 117.825, 125.19, 132.55, 139.915, 147.28, 156.485, 165.69, 174.895]

                    },
                    {
                        "name": "Sprinkling Weight", "req": { "type": "const", "val": 6, "subtype": "min" }, "type": "healing", "vision": "electro", "stat": "hp", "crit": false, "scale": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
                    }
                    
                ]
            },
            {
                "name": "Alcazarzaray’s Exactitude", "type": "burst", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Connector", "type": "burst", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [15.88, 17.07, 18.26, 19.85, 21.04, 22.24, 23.82, 25.41, 27, 28.59, 30.18, 31.76, 33.75, 35.74, 37.72]

                    },
                    {
                        "name": "Continuous Healing", "type": "healing", "vision": "electro", "stat": "hp", "crit": false, "scale": [6.67, 7.17, 7.67, 8.34, 8.84, 9.34, 10.01, 10.67, 11.34, 12.01, 12.67, 13.34, 14.17, 15.01, 15.84], "flat": [641.98, 706.19, 775.74, 850.65, 930.91, 1016.52, 1107.48, 1203.79, 1305.45, 1412.46, 1524.82, 1642.54, 1765.6, 1894.01, 2027.78]
                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Additional Investment",
                "desc": "The number of After-Sales Service Rounds created by Troubleshooter Shots is increased by 1."
            },
            {
                "name": "Special Franchise",
                "desc": "When you are in combat and the Jinni heals the character it is connected to, it will fire a Jinni Toop from that character’s position that deals 50% of Troubleshooter Shot’s DMG."
            },
            {
                "name": "Wonders Never Cease",
                "desc": "Increases the Level of Alcazarzaray’s Exactitude by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Discretionary Supplement",
                "desc": "The character connected to the Jinni will obtain the following buffs based on their current HP and Energy:<br>When their HP is lower than 50%, they gain 50% Incoming Healing Bonus.<br>When their Energy is less than 50%, they gain 30% Energy Recharge.",
                "apply": { "id": 558, "option": 0 }
            },
            {
                "name": "Value for Mora",
                "desc": "Increases the Level of Spirit- Warding Lamp: Troubleshooter Cannon by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Sprinkling Weight",
                "desc": "ori gains the following effects for 3s after using Spirit-Warding Lamp: Troubleshooter Cannon:<br>Electro Infusion.<br>When Normal Attacks hit opponents, all nearby party members will heal HP equivalent to 4% of Dori’s Max HP.This type of healing can occur once every 0.1s.",
                "apply": { "id": 559, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Unexpected Order",
                "desc": "Has a 25% chance to recover some of the materials used when crafting Character and Weapon Materials.",
                "level": 0
            },
            {
                "name": "An Eye for Gold",
                "desc": "After a character connected to the Jinni triggers an Electro-Charged, Superconduct, Overloaded, Quicken, Aggravate, Hyperbloom, or an Electro Swirl or Crystallize reaction, the CD of Spirit-Warding Lamp: Troubleshooter Cannon is decreased by 1s.This effect can be triggered once every 3s.",
                "level": 2
            },
            {
                "name": "Compound Interest",
                "desc": "When Troubleshooter Shots from Spirit-Warding Lamp: Troubleshooter Cannon hit opponents, Dori will restore 5 Elemental Energy for every 100% Energy Recharge possessed.<br>A maximum of 15 Energy can be restored this way per Spirit- Warding Lamp: Troubleshooter Cannon.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "lightning_prism" }, { "type": "group", "id": "mask" }, { "type": "item", "id": "wolfhook" }],
        "party_effects": [
            { "type": "apply", "id": 558, "option": 0, "desc": "The character connected to the Jinni will obtain the buffs based on their current HP and Energy" }
        ]
    },
    "collei": {
        "id": 54,
        "name": "Collei",
        "weapon": "bow",
        "vision": "dendro",
        "stats": [
            { "stat": "hp_base", "values": [821, 2108, 2721, 4076, 4512, 5189, 5770, 6448, 6884, 7561, 7996, 8674, 9110, 9787] },
            { "stat": "atk_base", "values": [16.74, 43, 55.51, 83.15, 92.03, 105.86, 117.71, 131.53, 140.42, 154.23, 163.11, 176.94, 185.83, 199.65] },
            { "stat": "def_base", "values": [50.36, 129.37, 166.99, 250.13, 276.86, 318.46, 354.1, 395.69, 422.42, 463.97, 490.7, 532.29, 559.02, 600.62] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }
        ],
        "attacks": [
            {
                "name": "Normal",
                "vision": "physical",
                "type": "normal",
                "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.6, 47.15, 50.7, 55.77, 59.32, 63.38, 68.95, 74.53, 80.11, 86.19, 92.27, 98.36, 104.44, 110.53, 116.61]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [42.66, 46.13, 49.6, 54.56, 58.03, 62, 67.46, 72.91, 78.37, 84.32, 90.27, 96.22, 102.18, 108.13, 114.08]
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [54.09, 58.5, 62.9, 69.19, 73.59, 78.62, 85.54, 92.46, 99.38, 106.93, 114.48, 122.03, 129.57, 137.12, 144.67]
                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [68.03, 73.56, 79.1, 87.01, 92.55, 98.87, 107.58, 116.28, 124.98, 134.47, 143.96, 153.45, 162.95, 172.44, 181.93]
                    },
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3]
                    },
                    {
                        "name": "Fully-Charged Aimed Shot", "type": "charged", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
                    },
                ]
            },
            {
                "name": "Floral Brush", "type": "skill", "damage": true, "vision": "dendro", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [151.2, 162.54, 173.88, 189, 200.34, 211.68, 226.8, 241.92, 257.04, 272.16, 287.28, 302.4, 321.3, 340.2, 359.1]
                    },
                    {
                        "name": "Floral Sidewinder", "req": { "type": "level", "val": 2, "subtype": "min" }, "type": "skill", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]
                    }
                ]
            },
            {
                "name": "Trump-Card Kitty", "type": "burst", "damage": true, "vision": "dendro", "parts": [
                    {
                        "name": "Explosion", "type": "burst", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [201.82, 216.96, 232.1, 252.28, 267.42, 282.55, 302.74, 322.92, 343.1, 363.28, 383.47, 403.65, 428.88, 454.1, 479.33]
                    },
                    {
                        "name": "Leap", "type": "burst", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [43.25, 46.49, 49.74, 54.06, 57.3, 60.55, 64.87, 69.2, 73.52, 77.85, 82.17, 86.5, 91.9, 97.31, 102.71]
                    },
                    {
                        "name": "Forest of Falling Arrows", "req": { "type": "const", "val": 6, "subtype": "min" }, "type": "burst", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200]
                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Deepwood Patrol",
                "desc": "When in the party and not on the field, Collei’s Energy Recharge is increased by 20%.",
                "apply": { "id": 560, "option": 0 }
            },
            {
                "name": "Through Hill and Copse",
                "desc": "The Passive Talent Floral Sidewinder is changed to this:<br>The Floral Ring will grant the character the Sprout effect from Floral Sidewinder upon return, dealing 40% of Collei’s ATK as Dendro DMG to nearby opponents for 3s.< br >From the moment of using Floral Brush to the moment when this instance of Sprout effect ends, if any of your party members triggers Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon reactions, the Sprout effect will be extended by 3s.<br>The Sprout effect can only be extended this way once.If another Sprout effect is triggered during its initial duration, the initial effect will be removed.<br>Requires you to have unlocked the Floral Sidewinder Passive Talent."
            },
            {
                "name": "Scent of Summer",
                "desc": "Increases the Level of Floral Brush by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Gift of the Woods",
                "desc": "Using Trump-Card Kitty will increase all nearby characters’ Elemental Mastery by 60 for 12s (not including Collei herself)."
            },
            {
                "name": "All Embers",
                "desc": "Increases the Level of Trump-Card Kitty by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Forest of Falling Arrows",
                "desc": "When the Floral Ring hits, it will create a miniature Cuilein-Anbar that will deal 200% of Collei’s ATK as Dendro DMG.<br>Each Floral Brush can only create one such miniature Cuilein-Anbar."
            },
        ],
        "passive": [
            {
                "name": "Gliding Champion of Sumeru",
                "desc": "Decreases gliding Stamina consumption for your own party members by 20%. Not stackable with Passive Talents that provide the exact same effects.",
                "level": 0
            },
            {
                "name": "Floral Sidewinder",
                "desc": "If one of your party members has triggered Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon reactions before the Floral Ring returns, it will grant the character the Sprout effect upon return, which will continuously deal Dendro DMG equivalent to 40% of Collei’s ATK to nearby opponents for 3s.If another Sprout effect is triggered during its initial duration, the initial effect will be removed.DMG dealt by Sprout is considered Elemental Skill DMG.",
                "level": 2
            },
            {
                "name": "Precise Shot",
                "desc": "When a character within the Cuilein-Anbar Zone triggers Burning, Quicken, Aggravate, Spread, Bloom, Hyperbloom, or Burgeon reactions, the Zone’s duration will be increased by 1s.<br>A single Trump- Card Kitty can be extended by up to 3s.",
                "level": 8
            },
        ],
        "ascension": [{ "type": "item", "id": "everflame_seed" }, { "type": "group", "id": "arrowhead" }, { "type": "item", "id": "small_lamp_grass" }],
        "party_effects": [
            { "type": "apply", "id": 561, "option": 0, "desc": "Using Trump-Card Kitty will increase all nearby characters’ Elemental Mastery by 60 for 12s (not including Collei herself)." }
        ]
    },
    "tighnari": {
        "id": 55,
        "name": "Tighnari",
        "weapon": "bow",
        "vision": "dendro",
        "stats": [
            { "stat": "hp_base", "values": [845, 2191, 2915, 4362, 4877, 5611, 6297, 7038, 7553, 8301, 8816, 9573, 10087, 10850] },
            { "stat": "atk_base", "values": [20.85, 54.1, 71.98, 107.7, 120.4, 138.53, 155.46, 173.77, 186.48, 204.96, 217.66, 236.34, 249.05, 267.88] },
            { "stat": "def_base", "values": [49.06, 127.26, 169.33, 253.37, 283.26, 325.89, 365.74, 408.82, 438.71, 482.18, 512.07, 556.02, 585.91, 630.21] },
            { "stat": "dendro", "values": [0, 0, 0, 0, 7.2, 7.2, 14.4, 14.4, 14.4, 14.4, 21.6, 21.6, 28.8, 28.8] },
            { "stat": "burst_energy", "values": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] }
        ],
        "attacks": [
            {
                "name": "Normal",
                "vision": "physical",
                "type": "normal",
                "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [44.63, 48.27, 51.9, 57.09, 60.72, 64.88, 70.58, 76.29, 82, 88.23, 94.46, 100.69, 106.91, 113.14, 119.37]
                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [41.97, 45.38, 48.8, 53.68, 57.1, 61, 66.37, 71.74, 77.1, 82.96, 88.82, 94.67, 100.53, 106.38, 112.24]
                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "hits": 2, "stat": "atk", "crit": true, "scale": [26.45, 28.6, 30.75, 33.83, 35.98, 38.44, 41.82, 45.2, 48.59, 52.28, 55.97, 59.65, 63.34, 67.04, 70.72]
                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [68.63, 74.21, 79.8, 87.78, 93.37, 99.75, 108.53, 117.31, 126.08, 135.66, 145.24, 154.81, 164.39, 173.96, 183.54]
                    },
                    {
                        "name": "Aimed Shot", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3]
                    },
                    {
                        "name": "Level 1 Aimed Shot", "type": "charged", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5]
                    },
                    {
                        "name": "Wreath Arrow", "type": "charged", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [87.2, 93.74, 100.28, 109, 115.54, 122.08, 130.8, 139.52, 148.24, 156.96, 165.68, 174.4, 185.3, 196.2, 207.1]
                    },
                    {
                        "name": "Clusterbloom Arrow", "type": "charged", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [38.6, 41.5, 44.39, 48.25, 51.14, 54.04, 57.9, 61.76, 65.62, 69.48, 73.34, 77.2, 82.02, 86.85, 91.68]
                    },
                    {
                        "name": "Karma Adjudged From the Leaden Fruit", "req": { "type": "const", "val": 6, "subtype": "min" }, "type": "charged", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150]
                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59]
                    },
                ]
            },
            {
                "name": "Vijnana-Phala Mine", "type": "skill", "damage": true, "vision": "dendro", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [149.6, 160.82, 172.04, 187, 198.22, 209.44, 224.4, 239.36, 254.32, 269.28, 284.24, 299.2, 317.9, 336.6, 355.3]
                    }
                ]
            },
            {
                "name": "Fashioner’s Tanglevine Shaft", "type": "burst", "damage": true, "vision": "dendro", "parts": [
                    {
                        "name": "Tanglevine Shaft", "type": "burst", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [55.62, 59.79, 63.96, 69.52, 73.7, 77.87, 83.43, 88.99, 94.55, 100.12, 105.68, 111.24, 118.19, 125.14, 132.1]
                    },
                    {
                        "name": "Secondary Tanglevine Shaft", "type": "burst", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [67.98, 73.08, 78.18, 84.97, 90.07, 95.17, 101.97, 108.77, 115.57, 122.36, 129.16, 135.96, 144.46, 152.95, 161.45]
                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Beginnings Determined at the Roots",
                "desc": "Tighnari’s Charged Attack CRIT Rate is increased by 15%.",
                "bonus": [{ "stat": "critcharged", "value": 15 }]
            },
            {
                "name": "Origins Known From the Stem",
                "desc": "When there are opponents within the Vijnana-Khanda Field created by Vijnana-Phala Mine, Tighnari gains 20% Dendro DMG Bonus.<br>The effect will last up to 6s if the field’s duration ends or if it no longer has opponents within it.",
                "apply": { "id": 562, "option": 0 }
            },
            {
                "name": "Fortunes Read Amongst the Branches",
                "desc": "Increases the Level of Fashioner’s Tanglevine Shaft by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Withering Glimpsed in the Leaves",
                "desc": "When Fashioner’s Tanglevine Shaft is unleashed, all nearby party members gain 60 Elemental Mastery for 8s. If the Fashioner’s Tanglevine Shaft triggers a Burning, Bloom, Aggravate, or Spread reaction, their Elemental Mastery will be further increased by 60. This latter case will also refresh the buff state’s duration.",
                "apply": { "id": 564, "option": 0 }
            },
            {
                "name": "Comprehension Amidst the Flowers",
                "desc": "Increases the Level of Vijnana-Phala Mine by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Karma Adjudged From the Leaden Fruit",
                "desc": "Wreath Arrow‘s charging time is decreased by 0.9s, and will produce 1 additional Clusterbloom Arrow upon hit. This arrow deals 150% of Tighnari’s ATK as DMG."
            },
        ],
        "passive": [
            {
                "name": "Encyclopedic Knowledge",
                "desc": "Displays the location of nearby resources unique to Sumeru on the mini-map.",
                "level": 0
            },
            {
                "name": "Keen Sight",
                "desc": "After Tighnari fires a Wreath Arrow, his Elemental Mastery is increased by 50 for 4s.",
                "level": 2,
                "apply": { "id": 563, "option": 0 }
            },
            {
                "name": "Scholarly Blade",
                "desc": "For every point of Elemental Mastery Tighnari possesses, his Charged Attack and Fashioner’s Tanglevine Shaft DMG are increased by 0.06%.<br>The maximum DMG Bonus obtainable this way is 60%.",
                "level": 8,
                "apply": { "id": 565, "option": 0 }
            },
        ],
        "ascension": [{ "type": "item", "id": "everflame_seed" }, { "type": "group", "id": "arrowhead" }, { "type": "item", "id": "small_lamp_grass" }],
        "party_effects": [
            { "type": "apply", "id": 564, "option": 0, "desc": "When Fashioner’s Tanglevine Shaft is unleashed, all nearby party members gain 60 Elemental Mastery for 8s. Doubled if it trigger's Dendro reaction." }
        ]
    },
    "traveler_dendro": {
        "id": 56,
        "name": "Traveler (Dendro)",
        "short_name": "Traveler",
        "weapon": "sword",
        "vision": "dendro",
        "stats": [
            { "stat": "hp_base", "values": [912, 2342, 3024, 4529, 5013, 5766, 6411, 7164, 7648, 8401, 8885, 9638, 10122, 10875] },
            { "stat": "atk_base", "values": [18, 46, 59, 88, 98, 113, 125, 140, 149, 164, 174, 188, 198, 212] },
            { "stat": "def_base", "values": [57, 147, 190, 284, 315, 362, 402, 450, 480, 527, 558, 605, 635, 683] },
            { "stat": "atk%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }


        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [44.46, 48.08, 51.7, 56.87, 60.49, 64.63, 70.31, 76, 81.69, 87.89, 94.09, 100.3, 106.5, 112.71, 118.91]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [43.43, 46.97, 50.5, 55.55, 59.09, 63.13, 68.68, 74.23, 79.79, 85.85, 91.91, 97.97, 104.03, 110.09, 116.15]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [52.98, 57.29, 61.6, 67.76, 72.07, 77, 83.78, 90.55, 97.33, 104.72, 112.11, 119.5, 126.9, 134.29, 141.68]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [58.31, 63.05, 67.8, 74.58, 79.33, 84.75, 92.21, 99.67, 107.12, 115.26, 123.4, 131.53, 139.67, 147.8, 155.94]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [70.78, 76.54, 82.3, 90.53, 96.29, 102.88, 111.93, 120.98, 130.03, 139.91, 149.79, 159.66, 169.54, 179.41, 189.29]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [116.62, 126.11, 135.6, 149.16, 158.65, 169.5, 184.42, 199.33, 214.25, 230.52, 246.79, 263.06, 279.34, 295.61, 311.88]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ]
            },
            {
                "name": "Razorgrass Blade", "type": "skill", "damage": true, "vision": "dendro", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [230.4, 247.68, 264.96, 288, 305.28, 322.56, 345.6, 368.64, 391.68, 414.72, 437.76, 460.8, 489.6, 518.4, 547.2]

                    }

                ]
            },
            {
                "name": "Surgent Manifestation", "type": "burst", "damage": true, "vision": "dendro", "parts": [
                    {
                        "name": "Lea Lotus Lamp", "type": "burst", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [80.16, 86.17, 92.18, 100.2, 106.21, 112.22, 120.24, 128.26, 136.27, 144.29, 152.3, 160.32, 170.34, 180.36, 190.38]

                    },
                    {
                        "name": "Explosion", "type": "burst", "damage": true, "vision": "dendro", "stat": "atk", "crit": true, "scale": [400.8, 430.86, 460.92, 501, 531.06, 561.12, 601.2, 641.28, 681.36, 721.44, 761.52, 801.6, 851.7, 901.8, 951.9]

                    }

                ]
            }
        ],
        "const": [
            {
                "name": "Symbiotic Creeper",
                "desc": "After Razorgrass Blade hits an opponent, it will regenerate 3.5 Energy for the Traveler."
            },
            {
                "name": "Green Resilience",
                "desc": "Lea Lotus Lamp‘s duration is increased by 3s."
            },
            {
                "name": "Whirling Weeds",
                "desc": "Increases the Level of Razorgrass Blade by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Treacle Grass",
                "desc": "After the Lea Lotus Lamp triggers a Lotuslight Transfiguration, it will obtain 5 stacks of the Overflowing Lotuslight effect from the Passive Talent 'Verdant Overgrowth'."
            },
            {
                "name": "Viridian Transience",
                "desc": "Increases the Level of Surgent Manifestation by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Withering Aggregation",
                "desc": "The Dendro DMG Bonus of the character under the effect of Overflowing Lotuslight as created by the Lea Lotus Lamp is increased by 12%. If the Lamp has experienced a Lotuslight Transfiguration previously, the character will also gain 12% DMG Bonus for the corresponding element.",
                "apply": { "id": 587, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "Verdant Overgrowth",
                "desc": "Lea Lotus Lamp will obtain one level of Overflowing Lotuslight every second it is on the field, increasing the Elemental Mastery of active character(s) within its AoE by 6. Overflowing Lotuslight has a maximum of 10 stacks.",
                "level": 2,
                "apply": { "id": 588, "option": 0 }
            },
            {
                "name": "Verdant Luxury",
                "desc": "Every point of Elemental Mastery the Traveler possesses increases the DMG dealt by Razorgrass Blade by 0.15% and the DMG dealt by Surgent Manifestation by 0.1%.",
                "level": 8,
                "apply": { "id": 589, "option": 0 }
            }
        ],
        "ascension_special": true,
        "ascension": [{ "type": "group", "id": "brilliant_diamond" }, { "type": "blank" }, { "type": "group", "id": "mask" }, { "type": "item", "id": "windwheel_aster" }],
        "party_effects": [
            { "type": "apply", "id": 588, "option": 0, "desc": "Lea Lotus Lamp will obtain one level of Overflowing Lotuslight every second it is on the field, increasing the Elemental Mastery of active character(s) within its AoE by 6. Overflowing Lotuslight has a maximum of 10 stacks." },
            { "type": "apply", "id": 587, "option": 0, "desc": "The Dendro DMG Bonus of the character under the effect of Overflowing Lotuslight as created by the Lea Lotus Lamp is increased by 12%. If the Lamp has experienced a Lotuslight Transfiguration previously, the character will also gain 12% DMG Bonus for the corresponding element." }

        ]
    },
    "nilou": {
        "id": 57,
        "name": "Nilou",
        "weapon": "sword",
        "vision": "hydro",
        "unreleased":true,
        "stats": [
            { "stat": "hp_base", "values": [1182, 3066, 4080, 6105, 6825, 7852, 8813, 9850, 10571, 11618, 12338, 13397, 14117, 15185] },
            { "stat": "atk_base", "values": [17.88, 46.37, 61.69, 92.31, 103.2, 118.74, 133.25, 148.95, 159.84, 175.68, 186.56, 202.58, 213.47, 229.61] },
            { "stat": "def_base", "values": [56.72, 147.13, 195.76, 292.92, 327.48, 376.76, 422.84, 472.64, 507.19, 557.44, 592, 642.82, 677.37, 728.59] },
            { "stat": "hp%", "values": [0, 0, 0, 0, 7.2, 7.2, 14.4, 14.4, 14.4, 14.4, 21.6, 21.6, 28.8, 28.8] },
            { "stat": "burst_energy", "values": [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [50.31, 54.4, 58.5, 64.35, 68.44, 73.12, 79.56, 85.99, 92.43, 99.44, 106.46, 113.48, 120.5, 127.52, 134.54]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [45.44, 49.14, 52.84, 58.12, 61.82, 66.04, 71.86, 77.67, 83.48, 89.82, 96.16, 102.5, 108.84, 115.18, 121.52]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [70.35, 76.08, 81.81, 89.99, 95.71, 102.26, 111.26, 120.26, 129.26, 139.07, 148.89, 158.71, 168.52, 178.34, 188.16]

                    },                    
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[50.22, 54.44], [54.31, 58.87], [58.4, 63.3], [64.24, 69.63], [68.33, 74.06], [73, 79.12], [79.42, 86.09], [85.85, 93.05], [92.27, 100.01], [99.28, 107.61], [106.29, 115.21], [113.3, 122.8], [120.3, 130.4], [127.31, 137.99], [134.32, 145.59]]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ]
            },
            {
                "name": "Dance of the Seven Realms", "type": "skill", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [3.34, 3.59, 3.84, 4.17, 4.42, 4.67, 5.01, 5.34, 5.68, 6.01, 6.34, 6.68, 7.1, 7.51, 7.93]

                    },
                    {
                        "name": "Sword Dance 1-Hit", "type": "skill", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [4.55, 4.89, 5.24, 5.69, 6.03, 6.37, 6.83, 7.28, 7.74, 8.19, 8.65, 9.1, 9.67, 10.24, 10.81]

                    },
                    {
                        "name": "Sword Dance 2-Hit", "type": "skill", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [5.14, 5.53, 5.92, 6.43, 6.82, 7.2, 7.72, 8.23, 8.75, 9.26, 9.77, 10.29, 10.93, 11.58, 12.22]

                    },
                    {
                        "name": "Whirling Steps 1-Hit", "type": "skill", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [3.26, 3.51, 3.75, 4.08, 4.32, 4.57, 4.89, 5.22, 5.55, 5.87, 6.2, 6.52, 6.93, 7.34, 7.75]

                    },
                    {
                        "name": "Whirling Steps 2-Hit", "type": "skill", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [3.96, 4.26, 4.55, 4.95, 5.25, 5.54, 5.94, 6.34, 6.73, 7.13, 7.52, 7.92, 8.42, 8.91, 9.41]

                    },
                    {
                        "name": "Luminous Illusion", "type": "skill", "damage": true, "req": { "type": "const", "val": 0, "subtype": "max" }, "vision": "hydro", "stat": "hp", "crit": true, "scale": [7.17, 7.71, 8.24, 8.96, 9.5, 10.04, 10.75, 11.47, 12.19, 12.9, 13.62, 14.34, 15.23, 16.13, 17.03]

                    },
                    {
                        "name": "Luminous Illusion - Dance of the Waning Moon", "type": "skill", "damage": true, "req": { "type": "const", "val": 1, "subtype": "min" }, "vision": "hydro", "stat": "hp", "crit": true, "scale": [11.8305, 12.7215, 13.596, 14.784, 15.675, 16.566, 17.7375, 18.9255, 20.1135, 21.285, 22.473, 23.661, 25.1295, 26.6145, 28.0995]

                    },
                    {
                        "name": "Water Wheel", "type": "skill", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [5.06, 5.44, 5.82, 6.33, 6.71, 7.09, 7.59, 8.1, 8.6, 9.11, 9.62, 10.12, 10.76, 11.39, 12.02]

                    },

                ]
            },
            {
                "name": "Dance of the Lotus: Distant Dreams, Listening Spring", "type": "burst", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [18.43, 19.81, 21.2, 23.04, 24.42, 25.8, 27.65, 29.49, 31.33, 33.18, 35.02, 36.86, 39.17, 41.47, 43.78]

                    },
                    {
                        "name": "Lingering Aeon", "type": "burst", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [22.53, 24.22, 25.91, 28.16, 29.85, 31.54, 33.79, 36.04, 38.3, 40.55, 42.8, 45.06, 47.87, 50.69, 53.5]

                    }
                ]
            }
        ],
        "const": [
            {
                "name": "Dance of the Waning Moon",
                "desc": "Dance of the Seven Realms will be enhanced as follows:<brLuminous Illusion DMG is increased by 65%.<br>The Tranquility Aura’s duration is extended by 6s."
            },
            {
                "name": "The Starry Skies Their Flowers Rain",
                "desc": "After characters affected by the Golden Chalice’s Bounty deal Hydro DMG to opponents, that opponent’s Hydro RES will be decreased by 35% for 10s. After a triggered Bloom reaction deals DMG to opponents, their Dendro RES will be decreased by 35% for 10s.<br>You need to have unlocked the “Court of Dancing Petals” Talent.",
                "apply": { "id": 591, "option": 0 }
            },
            {
                "name": "Beguiling Shadowstep",
                "desc": "Increases the Level of Dance of the Lotus: Distant Dreams, Listening Spring by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Fricative Pulse",
                "desc": "After the third dance step of Dance of the Seven Realms‘ Pirouette hits opponents, Nilou will gain 15 Elemental Energy, and DMG from her Dance of the Lotus: Distant Dreams, Listening Spring will be increased by 50% for 8s.",
                "apply": { "id": 592, "option": 0 }
            },
            {
                "name": "Twirling Light",
                "desc": "Increases the Level of Dance of the Seven Realms by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Frostbreaker’s Melody",
                "desc": "For every 1,000 points of Max HP, Nilou’s CRIT Rate and CRIT DMG will increase by 0.6% and 1.2% respectively.<br>The maximum increase in CRIT Rate and CRIT DMG is 30% and 60% respectively.",
                "apply": { "id": 593, "option": 0 }
            }

        ],
        "passive": [
            {
                "name": "White Jade Lotus",
                "desc": "When Perfect Cooking is achieved on Food with Adventure-related effects, there is a 12% chance to obtain double the product.",
                "level": 0
            },
            {
                "name": "Court of Dancing Petals",
                "desc": "When all characters in the party are either Dendro or Hydro, and there is at least one Dendro and Hydro character, the flowery steps of Nilou’s Dance of the Seven Realms will grant all nearby characters the Golden Chalice’s Bounty for 30s.<br>Characters under the effect of Golden Chalice’s Bounty will have their Elemental Mastery increased by 100 for 10s whenever they are hit by Dendro attacks.Also, triggering the Bloom reaction will create Bountiful Cores instead of Dendro Cores.<br>Such Cores will burst very quickly after being created, and they have larger AoEs.<br>Bountiful Cores cannot trigger Hyperbloom or Burgeon, and they share a upper numerical limit with Dendro Cores.Bountiful Core DMG is considered DMG dealt by Dendro Cores produced by Bloom.",
                "level": 2,
                "apply": { "id": 594, "option": 0 }
            },
            {
                "name": "Dreamy Dance of Aeons",
                "desc": "Each 1,000 points of Max HP above 30,000 will cause the DMG dealt by Bountiful Cores created by characters affected by Golden Chalice’s Bounty to increase by 9%.<br>The maximum increase in Bountiful Core DMG that can be achieved this way is 400%.",
                "level": 8,
                "apply": { "id": 595, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "cleansing_heart" }, { "type": "group", "id": "mask" }, { "type": "item", "id": "silk_flower" }],
        "party_effects": [
            { "type": "stat", "id": "nilouhp" },
            { "type": "apply", "id": 594, "option": 0, "desc": "Characters under the effect of Golden Chalice’s Bounty will have their Elemental Mastery increased by 100 for 10s whenever they are hit by Dendro attacks." },
            { "type": "apply", "id": 595, "option": 0, "desc": "Each 1,000 points of Max HP above 30,000 will cause the DMG dealt by Bountiful Cores created by characters affected by Golden Chalice’s Bounty to increase by 9%. (Max 400%)" },
            { "type": "apply", "id": 591, "option": 0, "desc": "Dealing Hydro DMG decreases Hydro RES by 35% for 10s. Bloom reaction decreases Dendro RES by 35% for 10s." },

        ]
    },
    "cyno": {
        "id": 58,
        "name": "Cyno",
        "weapon": "polearm",
        "vision": "electro",
        "unreleased":true,
        "stats": [
            { "stat": "hp_base", "values": [972, 2522, 3356, 5022, 5614, 6459, 7249, 8103, 8695, 9557, 10149, 11020, 11613, 12491] },
            { "stat": "atk_base", "values": [24.76, 64.24, 85.47, 127.89, 142.98, 164.5, 184.61, 206.36, 221.44, 243.38, 258.47, 280.66, 295.74, 318.11] },
            { "stat": "def_base", "values": [66.89, 173.51, 230.87, 345.45, 386.2, 444.33, 498.66, 557.39, 598.14, 657.41, 698.16, 758.09, 798.84, 859.24] },
            { "stat": "critdmg", "values": [0, 0, 0, 0, 9.6, 9.6, 19.2, 19.2, 19.2, 19.2, 28.8, 28.8, 38.4, 38.4] },
            { "stat": "burst_energy", "values": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80] }

        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [49.26, 53.27, 57.28, 63, 67.01, 71.6, 77.9, 84.2, 90.5, 97.37, 104.24, 111.12, 117.99, 124.86, 131.73]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [47.92, 51.82, 55.72, 61.29, 65.19, 69.65, 75.78, 81.91, 88.04, 94.73, 101.41, 108.1, 114.79, 121.47, 128.16]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "hits": 2, "crit": true, "scale": [29.31, 31.69, 34.08, 37.48, 39.87, 42.6, 46.34, 50.09, 53.84, 57.93, 62.02, 66.11, 70.2, 74.29, 78.38]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [75.89, 82.07, 88.24, 97.07, 103.25, 110.31, 120.01, 129.72, 139.43, 150.02, 160.61, 171.2, 181.78, 192.37, 202.96]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [122.38, 132.34, 142.3, 156.53, 166.49, 177.87, 193.53, 209.18, 224.83, 241.91, 258.99, 276.06, 293.14, 310.21, 327.29]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.3, 306.22, 324.05, 341.89]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]

                    }
                ]
            },
            {
                "name": "Secret Rite: Chasmic Soulfarer", "type": "skill", "damage": true, "vision": "electro", "parts": [
                    {
                        "name": "Skill", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [130.4, 140.18, 149.96, 163, 172.78, 182.56, 195.6, 208.64, 221.68, 234.72, 247.76, 260.8, 277.1, 293.4, 309.7]

                    },
                    {
                        "name": "Mortuary Rite", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [156.8, 168.56, 180.32, 196, 207.76, 219.52, 235.2, 250.88, 266.56, 282.24, 297.92, 313.6, 333.2, 352.8, 372.4]

                    },
                    {
                        "name": "Mortuary Rite - Judication", "type": "skill", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [211.68, 227.556, 243.432, 264.6, 280.476, 296.352, 317.52, 338.688, 359.856, 381.024, 402.192, 423.36, 449.82, 476.28, 502.74]

                    },
                    {
                        "name": "Duststalker Bolt", "type": "skill", "damage": true, "req": { "type": "level", "val": 7, "subtype": "max" }, "vision": "electro", "stat": "atk", "crit": true, "scale": [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]

                    },
                    {
                        "name": "Duststalker Bolt - Authority", "type": "skill", "damage": true, "req": { "type": "level", "val": 8, "subtype": "min" }, "vision": "electro", "stat": ["atk", "elemastery"], "crit": true, "scale": [[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], [250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250]]

                    }
                ]
            }, 
            {
                "name": "Sacred Rite: Wolf’s Swiftness", "type": "burst", "damage": false, "vision": "electro", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "req": { "type": "level", "val": 7, "subtype": "max" }, "vision": "electro", "stat": "atk", "crit": true, "scale": [78.28, 84.66, 91.03, 100.13, 106.5, 113.78, 123.8, 133.81, 143.82, 154.75, 165.67, 176.59, 187.52, 198.44, 209.36]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "req": { "type": "level", "val": 7, "subtype": "max" }, "vision": "electro", "stat": "atk", "crit": true, "scale": [82.47, 89.18, 95.89, 105.48, 112.2, 119.87, 130.42, 140.96, 151.51, 163.02, 174.53, 186.03, 197.54, 209.05, 220.56]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "req": { "type": "level", "val": 7, "subtype": "max" }, "vision": "electro", "stat": "atk", "crit": true, "scale": [104.63, 113.15, 121.67, 133.83, 142.35, 152.08, 165.47, 178.85, 192.23, 206.83, 221.43, 236.03, 250.63, 265.23, 279.83]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "req": { "type": "level", "val": 7, "subtype": "max" }, "vision": "electro", "stat": "atk", "crit": true, "hits": 2, "scale": [51.69, 55.9, 60.11, 66.12, 70.33, 75.14, 81.75, 88.36, 94.97, 102.19, 109.4, 116.61, 123.83, 131.04, 138.25]

                    },
                    {
                        "name": "5-Hit", "type": "normal", "damage": true, "req": { "type": "level", "val": 7, "subtype": "max" }, "vision": "electro", "stat": "atk", "crit": true, "scale": [130.84, 141.49, 152.15, 167.36, 178.01, 190.18, 206.92, 223.65, 240.39, 258.65, 276.9, 295.16, 313.42, 331.68, 349.93]

                    },
                    {
                        "name": "1-Hit - Authority", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "normal", "damage": true, "vision": "electro", "stat": ["atk", "elemastery"], "crit": true, "scale": [[78.28, 84.66, 91.03, 100.13, 106.5, 113.78, 123.8, 133.81, 143.82, 154.75, 165.67, 176.59, 187.52, 198.44, 209.36], [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150]]

                    },
                    {
                        "name": "2-Hit - Authority", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "normal", "damage": true, "vision": "electro", "stat": ["atk", "elemastery"], "crit": true, "scale": [[82.47, 89.18, 95.89, 105.48, 112.2, 119.87, 130.42, 140.96, 151.51, 163.02, 174.53, 186.03, 197.54, 209.05, 220.56], [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150]]

                    },
                    {
                        "name": "3-Hit - Authority", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "normal", "damage": true, "vision": "electro", "stat": ["atk", "elemastery"], "crit": true, "scale": [[104.63, 113.15, 121.67, 133.83, 142.35, 152.08, 165.47, 178.85, 192.23, 206.83, 221.43, 236.03, 250.63, 265.23, 279.83], [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150]]

                    },
                    {
                        "name": "4-Hit - Authority", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "normal", "damage": true, "vision": "electro", "stat": ["atk", "elemastery"], "crit": true, "hits": 2, "scale": [[51.69, 55.9, 60.11, 66.12, 70.33, 75.14, 81.75, 88.36, 94.97, 102.19, 109.4, 116.61, 123.83, 131.04, 138.25], [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150]]

                    },
                    {
                        "name": "5-Hit - Authority", "req": { "type": "level", "val": 8, "subtype": "min" }, "type": "normal", "damage": true, "vision": "electro", "stat": ["atk", "elemastery"], "crit": true, "scale": [[130.84, 141.49, 152.15, 167.36, 178.01, 190.18, 206.92, 223.65, 240.39, 258.65, 276.9, 295.16, 313.42, 331.68, 349.93], [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150]]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [101.05, 109.27, 117.5, 129.25, 137.48, 146.88, 159.8, 172.72, 185.65, 199.75, 213.85, 227.95, 242.05, 256.15, 270.25]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]

                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]

                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "electro", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]

                    }
                ],
                "apply": { "id": 596, "option": 0 }
            }
        ],
        "const": [
            {
                "name": "Ordinance: Unceasing Vigil",
                "desc": "After using Sacred Rite: Wolf’s Swiftness, Cyno’s Normal Attack SPD will be increased by 20% for 10s. If the Judication effect of the Ascension Talent Featherfall Judgment is triggered during Secret Rite: Chasmic Soulfarer, the duration of this increase will be refreshed.<br>You need to unlock the Passive Talent “Featherfall Judgment.”",
                "apply": { "id": 597, "option": 0 }
            },
            {
                "name": "Ceremony: Homecoming of Spirits",
                "desc": "When Cyno’s Normal Attacks hit opponents, his Normal Attack CRIT Rate and CRIT DMG will be increased by 3% and 6% respectively for 4s. This effect can be triggered once every 0.1s. Max 5 stacks. Each stack’s duration is counted independently.",
                "apply": { "id": 598, "option": 0 }
            },
            {
                "name": "Precept: Lawful Enforcer",
                "desc": "Increases the Level of Sacred Rite: Wolf’s Swiftness by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Austerity: Forbidding Guard",
                "desc": "When Cyno is in the Pactsworn Pathclearer state triggered by Sacred Rite: Wolf’s Swiftness, after he triggers Electro-Charged, Overloaded, Quicken, Hyperbloom, an Electro Swirl or an Electro Crystallization reaction, he will restore 3 Elemental Energy for all nearby party members (except himself.)<br>This effect can occur 5 times within one use of Sacred Rite: Wolf’s Swiftness."
            },
            {
                "name": "Funerary Rite: The Passing of Starlight",
                "desc": "Increases the Level of Secret Rite: Chasmic Soulfarer by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "Raiment: Just Scales",
                "desc": "After using Sacred Rite: Wolf’s Swiftness or triggering Judication, Cyno will gain 4 stacks of the “Day of the Jackal” effect. When he hits opponents with Normal Attacks, he will consume 1 stack of “Day of the Jackal” to trigger one Duststalker Bolt. Day of the Jackal lasts for 8s. Max 8 stacks. 1 stack can be consumed every 0.4s. This effect will be canceled once Pactsworn Pathclearer ends.<br>You must unlock the Passive Talent “Featherfall Judgment.”"
            }

        ],
        "passive": [
            {
                "name": "The Gift of Silence",
                "desc": "Gains 25% more rewards when dispatched on a Sumeru Expedition for 20 hours.",
                "level": 0
            },
            {
                "name": "Featherfall Judgment",
                "desc": "When Cyno is in the Pactsworn Pathclearer state activated by Sacred Rite: Wolf’s Swiftness, Cyno will enter the Endseer stance at intervals. If he activates Secret Rite: Chasmic Soulfarer whle affected by this stance, he will activate the Judication effect, increasing the DMG of this Secret Rite: Chasmic Soulfarer by 35%, and firing off 3 Duststalker Bolts that deal 100% of Cyno’s ATK as Electro DMG.<br>Duststalker Bolt DMG is considered Elemental Skill DMG.",
                "level": 2
            },
            {
                "name": "Authority Over the Nine Bows",
                "desc": "Cyno’s DMG values will be increased based on his Elemental Mastery as follows:<br>Pactsworn Pathclearer’s Normal Attack DMG is increased by 150% of his Elemental Mastery.<br>Duststalker Bolt DMG from his Ascension Talent Featherfall Judgment is increased by 250% of his Elemental Mastery.",
                "level": 8
            }
        ],
        "ascension": [{ "type": "item", "id": "storm_beads" }, { "type": "group", "id": "handguard" }, { "type": "item", "id": "amakumo_fruit" }],
        "party_effects": []
    },
    "candace": {
        "id": 59,
        "name": "Candace",
        "weapon": "polearm",
        "vision": "hydro",
        "unreleased": true,
        "stats": [
            { "stat": "hp_base", "values": [912, 2342, 3024, 4529, 5013, 5766, 6411, 7164, 7648, 8401, 8885, 9638, 10122, 10875] },
            { "stat": "atk_base", "values": [17.81, 45.75, 59.05, 88.45, 97.91, 112.62, 125.22, 139.93, 149.38, 164.07, 173.53, 188.24, 197.69, 212.4] },
            { "stat": "def_base", "values": [57.22, 147.01, 189.76, 284.24, 314.61, 361.88, 402.38, 449.65, 480.03, 527.24, 557.61, 604.88, 635.25, 682.52] },
            { "stat": "hp%", "values": [0, 0, 0, 0, 6, 6, 12, 12, 12, 12, 18, 18, 24, 24] },
            { "stat": "burst_energy", "values": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60] }
        ],
        "attacks": [
            {
                "name": "Normal", "type": "normal", "damage": true, "vision": "physical", "parts": [
                    {
                        "name": "1-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [60.8, 65.75, 70.7, 77.77, 82.72, 88.38, 96.15, 103.93, 111.71, 120.19, 128.67, 137.16, 145.64, 154.13, 162.61]

                    },
                    {
                        "name": "2-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [61.15, 66.12, 71.1, 78.21, 83.19, 88.88, 96.7, 104.52, 112.34, 120.87, 129.4, 137.93, 146.47, 155, 163.53]

                    },
                    {
                        "name": "3-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [[35.49, 43.37], [38.38, 46.9], [41.26, 50.44], [45.39, 55.48], [48.28, 59.01], [51.58, 63.04], [56.12, 68.59], [60.66, 74.14], [65.2, 79.69], [70.15, 85.74], [75.1, 91.79], [80.05, 97.84], [85.01, 103.9], [89.96, 109.95], [94.91, 116]]

                    },
                    {
                        "name": "4-Hit", "type": "normal", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [94.94, 102.67, 110.4, 121.44, 129.17, 138, 150.14, 162.29, 174.43, 187.68, 200.93, 214.18, 227.42, 240.67, 253.92]

                    },
                    {
                        "name": "Charged", "type": "charged", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [124.18, 134.29, 144.4, 158.84, 168.95, 180.5, 196.38, 212.27, 228.15, 245.48, 262.81, 280.14, 297.46, 314.79, 332.12]

                    },
                    {
                        "name": "Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98]
                    },
                    {
                        "name": "Low Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89]
                    },
                    {
                        "name": "High Plunge", "type": "plunge", "damage": true, "vision": "physical", "stat": "atk", "crit": true, "scale": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04]
                    }
                ]
            },
            {
                "name": "Sacred Rite: Heron’s Sanctum", "type": "skill", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Shield", "type": "shield", "vision": "hydro", "stat": "hp", "crit": false, "scale": [12, 12.9, 13.8, 15, 15.9, 16.8, 18, 19.2, 20.4, 21.6, 22.8, 24, 25.5, 27, 28.5], "flat": [1155.56, 1271.14, 1396.34, 1531.17, 1675.64, 1829.73, 1993.46, 2166.82, 2349.81, 2542.43, 2744.68, 2956.57, 3178.08, 3409.22, 3650]

                    },
                    {
                        "name": "Basic", "type": "skill", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [12, 12.9, 13.8, 15, 15.9, 16.8, 18, 19.2, 20.4, 21.6, 22.8, 24, 25.5, 27, 28.5]

                    },
                    {
                        "name": "Charged", "type": "skill", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [19.04, 20.47, 21.9, 23.8, 25.23, 26.66, 28.56, 30.46, 32.37, 34.27, 36.18, 38.08, 40.46, 42.84, 45.22]

                    }

                ]
            },
            {
                "name": "Sacred Rite: Wagtail’s Tide", "type": "burst", "damage": true, "vision": "hydro", "parts": [
                    {
                        "name": "Skill", "type": "burst", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [6.61, 7.11, 8.26, 8.26, 8.76, 9.25, 9.92, 10.58, 11.24, 11.9, 12.56, 13.22, 14.05, 14.87, 15.7]

                    },
                    {
                        "name": "Wave Impact", "type": "burst", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [6.61, 7.11, 8.26, 8.26, 8.76, 9.25, 9.92, 10.58, 11.24, 11.9, 12.56, 13.22, 14.05, 14.87, 15.7]

                    },
                    {
                        "name": "The Overflow", "req": { "type": "level", "const": 6, "subtype": "min" }, "type": "burst", "damage": true, "vision": "hydro", "stat": "hp", "crit": true, "scale": [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]

                    }
                ],
                "apply": [{ "id": 600, "option": 0 }, { "id": 601, "option": 0 }]
            }
        ],
        "const": [
            {
                "name": "Returning Heir of the Scarlet Sands",
                "desc": "The duration of Prayer of the Crimson Crown effect triggered by Sacred Rite: Wagtail’s Tide is increased by 3s."
            },
            {
                "name": "Moon-Piercing Brilliance",
                "desc": "When Sacred Rite: Heron’s Guard hits opponents, Candace’s Max HP will be increased by 20% for 15s.",
                "apply": { "id": 603, "option": 0 }
            },
            {
                "name": "Hunter’s Supplication",
                "desc": "Increases the Level of Sacred Rite: Wagtail’s Tide by 3.",
                "bonus": [{ "stat": "levelburst", "value": 3 }]
            },
            {
                "name": "Sentinel Oath",
                "desc": "Shortens the Hold CD of Sacred Rite: Heron’s Guard to be the same as that of the Tapping CD."
            },
            {
                "name": "Golden Eye",
                "desc": "Increases the Level of Sacred Rite: Heron’s Guard by 3.",
                "bonus": [{ "stat": "levelskill", "value": 3 }]
            },
            {
                "name": "The Overflow",
                "desc": "When characters (excluding Candace herself) affected by the Prayer of the Crimson Crown caused by Sacred Rite: Wagtail’s Tide deal Elemental DMG to opponents using normal Attacks, it will unleash the wave attack from Wagtail’s Tide.<br>This effect can trigger once every 2.3s, and triggering this will not consume the base Wave instances granted by Prayer of the Crimson Crown."
            }

        ],
        "passive": [
            {
                "name": "To Dawn’s First Light",
                "desc": "Decreases climbing Stamina consumption for your own party members by 20%.<br>Not stackable with Passive Talents that provide the exact same effects.",
                "level": 0
            },
            {
                "name": "Featherflow Guard",
                "desc": "If Candace is hit by an attack in the Hold duration of Sacred Rite: Heron’s Sanctum, that skill will finish charging instantly.",
                "level": 2
            },
            {
                "name": "Sand Arch",
                "desc": "Characters affected by the Prayer of the Crimson Crown caused by Sacred Rite: Wagtail’s Tide will deal 0.5% increased DMG to opponents for every 1,000 points of Candace’s Max HP when they deal Elemental DMG with their Normal Attacks.",
                "level": 8,
                "apply": { "id": 602, "option": 0 }
            }
        ],
        "ascension": [{ "type": "item", "id": "cleansing_heart" }, { "type": "group", "id": "mask" }, { "type": "item", "id": "silk_flower" }],
        "party_effects": [
            { "type": "stat", "id": "candacehp" },
            { "type": "apply", "id": 600, "option": 0, "desc": "Character under the effect of Prayer of the Crimson Crown deal increased Elemental DMG with Normal Attacks by 20%." },
            { "type": "apply", "id": 601, "option": 0, "desc": "Sword, Claymore, and Polearm-wielding character(s) under the effect of Prayer of the Crimson Crown obtain a Hydro Infusion." },
            { "type": "apply", "id": 602, "option": 0, "desc": "Characters affected by the Prayer of the Crimson Crown caused by Sacred Rite: Wagtail’s Tide will deal 0.5% increased DMG to opponents for every 1,000 points of Candace’s Max HP when they deal Elemental DMG with their Normal Attacks." },

        ]
    },
}
