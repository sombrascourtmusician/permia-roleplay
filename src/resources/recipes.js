const armor = [
  {
    "name": "Novice Robes",
    "effects": "+3 Con, +2 Int/Wis, +1 Magic Defense",
    "crafter": "Tailor",
    "level": 2,
    "ingredients": [
      { name: "Spun Thread", count: 5 }
    ],
  },
  {
    "name": "Iron Armor",
    "effects": "+1 Str/Dex, +4 Con, +2 Physical defense",
    "crafter": "Blacksmith",
    "level": 2,
    "ingredients": [
      { name: "Smelt Iron", count: 5 }
    ],
  },
  {
    "name": "Leather Armor",
    "effects": "+3 Con, +2 Dex/Str, 1 Physical defense",
    "crafter": "Leatherworker",
    "level": 2,
    "ingredients": [
      { name: "Leather", count: 5 }
    ],
  },
  {
    "name": "Acolyte Robes",
    "effects": "+2 Con, +3 Int/Wis, +1 Magic Defense",
    "crafter": "Tailor",
    "level": 3,
    "ingredients": [
      { name: "Spun Thread", count: 5 },
      { name: "Arcane Powder", count: 1 }
    ],
  },
  {
    "name": "Fancy Suit",
    "effects": "+2 Con, +3 Chr, +1 Magic Defense",
    "crafter": "Tailor",
    "level": 3,
    "ingredients": [
      { name: "Spun Thread", count: 5 },
      { name: "Arcane Powder", count: 1 }
    ],
  },
  {
    "name": "Master's Robe",
    "effects": "+4 Con, +3 Int/Wis, +2 Magic Defense",
    "crafter": "Tailor",
    "level": 7,
    "ingredients": [
      { name: "Arcane Thread", count: 5 },
      { name: "Arcane Powder", count: 1 },
      { name: "Vitriol Oil", count: 1 },
    ],
  },
  {
    "name": "Noble's Attire",
    "effects": "+4 Con, +3 Chr, +2 Magic Defense",
    "crafter": "Tailor",
    "level": 7,
    "ingredients": [
      { name: "Arcane Thread", count: 5 },
      { name: "Arcane Powder", count: 1 },
      { name: "Vitriol Oil", count: 1 },
    ],
  },
  {
    "name": "Steel Plate",
    "effects": "+1 Str/Dex, +5 Con, +3 physical defense",
    "crafter": "Blacksmith",
    "level": 7,
    "ingredients": [
      { name: "Smelt Steel", count: 3 },
      { name: "Etched Leather", count: 1 }
    ],
  },
  {
    "name": "Etched Leather Armor",
    "effects": "+3 Con/Dex/Str, +1 defense",
    "crafter": "Leatherworker",
    "level": 7,
    "ingredients": [
      { name: "Etched Leather", count: 3 },
      { name: "Vitriol Oil", count: 2 }
    ],
  },
  {
    "name": "Mythril Armor",
    "effects": "+6 Con, +3 defenses, +1 Str/Dex",
    "crafter": "Blacksmith",
    "level": 9,
    "ingredients": [
      { name: "Smelt Mythril", count: 3 },
      { name: "Runestones", count: 2 },
      { name: "Processed Crystal", count: 1 },
    ],
  },
  {
    "name": "Enchanted Leather Armor",
    "effects": "+4 Con, +3 Dex/Str, +1 defenses",
    "crafter": "Leatherworker",
    "level": 9,
    "ingredients": [
      { name: "Enchanted Leather", count: 3 },
      { name: "Runestones", count: 2 },
      { name: "Processed Crystal", count: 1 },
    ],
  },

];

const consumable = [
  {
    "name": "Yellow Potion",
    "effects": "Heals 40 Stamina",
    "crafter": "Alchemist",
    "level": 2,
    "ingredients": [
      { name: "Aqua Vitae", count: 2 },
    ],
  },
  {
    "name": "Health Potion",
    "effects": "Heals 60 hp",
    "crafter": "Alchemist",
    "level": 2,
    "ingredients": [
      { name: "Aqua Vitae", count: 2 },
    ],
  },
  {
    "name": "Blue Potion",
    "effects": "Heals 80 Mana",
    "crafter": "Alchemist",
    "level": 2,
    "ingredients": [
      { name: "Aqua Vitae", count: 2 },
    ],
  },
  {
    "name": "Green Potion",
    "effects": "Heals 30 stamina and 60 mana",
    "crafter": "Alchemist",
    "level": 2,
    "ingredients": [
      { name: "Aqua Vitae", count: 2 },
    ],
  },
  {
    "name": "Purple Potion",
    "effects": "Heals 30 hp and 60 Mana",
    "crafter": "Alchemist",
    "level": 2,
    "ingredients": [
      { name: "Aqua Vitae", count: 2 },
    ],
  },
  {
    "name": "Orange Potion",
    "effects": "Heals 30 HP and 30 Stamina",
    "crafter": "Alchemist",
    "level": 2,
    "ingredients": [
      { name: "Aqua Vitae", count: 2 },
    ],
  },
  {
    "name": "Antivenom",
    "effects": "Removes all poisons from the target",
    "crafter": "Alchemist",
    "level": 2,
    "ingredients": [
      { name: "Aqua Vitae", count: 2 },
    ],
  },
  {
    "name": "Cleaner",
    "effects": "Removes all buffs and debuffs",
    "crafter": "Alchemist",
    "level": 2,
    "ingredients": [
      { name: "Aqua Vitae", count: 2 },
    ],
  },
  {
    "name": "Explosive Potion",
    "effects": "Deals 40 damage",
    "crafter": "Alchemist",
    "level": 6,
    "ingredients": [
      { name: "Vitriol Oil", count: 2 },
      { name: "Arcane Powder", count: 1 }
    ],
  },
  {
    "name": "Rejuvenation Potion",
    "effects": "Medium heal + Strong HOT",
    "crafter": "Alchemist",
    "level": 7,
    "ingredients": [
      { name: "Vitriol Oil", count: 2 },
      { name: "Runestone", count: 1 }
    ],
  },
  {
    "name": "Potion of Weakness",
    "effects": "-2 to all stats",
    "crafter": "Alchemist",
    "level": 8,
    "ingredients": [
      { name: "Vitriol Oil", count: 3 },
      { name: "Arcane Powder", count: 1 },
    ],
  },
  {
    "name": "Love Potion",
    "effects": "-15 accuracy, -2 to all stats",
    "crafter": "Alchemist",
    "level": 9,
    "ingredients": [
      { name: "Refined Crystal", count: 1 },
      { name: "Arcane Powder", count: 1 },
    ],
  },
  {
    "name": "Apple Pie",
    "effects": "30 HP, +2 to Str for 30 minutes",
    "crafter": "Chef",
    "level": 2,
    "ingredients": [
      { name: "Fruits", count: 1 },
      { name: "Flour", count: 2 },
    ],
  },
  {
    "name": "Brain Food",
    "effects": "30 HP, +2 to Int/Wis for 30 minutes",
    "crafter": "Chef",
    "level": 2,
    "ingredients": [
      { name: "Fish", count: 1 },
      { name: "Fruits", count: 2 }
    ],
  },
  {
    "name": "Lightning Brew",
    "effects": "30 HP, +2 to Dex for 30 minutes",
    "crafter": "Chef",
    "level": 2,
    "ingredients": [
      { name: "Zap Honey", count: 1 },
      { name: "Aqua Vitae", count: 1 }
    ],
  },
  {
    "name": "Mead",
    "effects": "30 HP, +2 to Chr for 30 minutes",
    "crafter": "Chef",
    "level": 2,
    "ingredients": [
      { name: "Aqua Vitae", count: 1 },
      { name: "Gathered Hops", count: 1 }
    ],
  },
  {
    "name": "Nigiri",
    "effects": "30 HP, Weak HOT, +2 Int/Wis for 30 minutes",
    "crafter": "Chef",
    "level": 3,
    "ingredients": [
      { name: "Fish", count: 1 },
      { name: "Rice", count: 1 }
    ],
  },
  {
    "name": "Lavash",
    "effects": "30 HP, Weak HOT, +2 Dex for 30 minutes",
    "crafter": "Chef",
    "level": 3,
    "ingredients": [
      { name: "Flour", count: 2 }
    ],
  },
  {
    "name": "Steak and Eggs",
    "effects": "35 HP, Weak HOT, +2 Str for 30 minutes",
    "crafter": "Chef",
    "level": 4,
    "ingredients": [
      { name: "Cooked Meat", count: 1 },
      { name: "Eggs", count: 1 }
    ],
  },
  {
    "name": "Falafel",
    "effects": "35 HP, Weak HOT, +2 Chr for 30 minutes",
    "crafter": "Chef",
    "level": 4,
    "ingredients": [
      { name: "Flour", count: 1 },
      { name: "Herb Blend", count: 1 },
      { name: "Rice", count: 1 },
    ],
  },
  {
    "name": "Grilled Fish",
    "effects": "35 HP, Medium HOT, +2 Dex for 30 minutes",
    "crafter": "Chef",
    "level": 5,
    "ingredients": [
      { name: "Fish", count: 1 },
      { name: "Spices", count: 1 },
      { name: "Rice", count: 1 },
    ],
  },
  {
    "name": "Pilaf",
    "effects": "35 HP, Medium HOT, +2 Str for 30 minutes",
    "crafter": "Chef",
    "level": 5,
    "ingredients": [
      { name: "Cooked Meat", count: 1 },
      { name: "Spice", count: 1 },
      { name: "Rice", count: 1 },
    ],
  },
  {
    "name": "Sweet Roll",
    "effects": "40 HP, Medium HOT, +2 Int/Wis for 30 minutes",
    "crafter": "Chef",
    "level": 7,
    "ingredients": [
      { name: "Fruits", count: 1 },
      { name: "Spices", count: 1 },
      { name: "Flour", count: 3 },
    ],
  },
  {
    "name": "Chocolate Cake",
    "effects": "40 HP, Medium HOT, +2 Chr for 30 minutes",
    "crafter": "Chef",
    "level": 7,
    "ingredients": [
      { name: "Chocolate", count: 2 },
      { name: "Flour", count: 2 },
      { name: "Zap Honey", count: 1 },
    ],
  },
  {
    "name": "Baklava",
    "effects": "40 HP, Medium HOT, +2 Dex for 30 minutes",
    "crafter": "Chef",
    "level": 7,
    "ingredients": [
      { name: "Zap Honey", count: 1 },
      { name: "Spices", count: 1 },
      { name: "Lavash", count: 1 },
    ],
  },
  {
    "name": "Royal Feast",
    "effects": "40 HP, Strong HOT, +3 Con for 30 minutes",
    "crafter": "Chef",
    "level": 9,
    "ingredients": [
      { name: "Spun Crystal", count: 1 },
      { name: "Cooked Meat", count: 1 },
      { name: "Rice", count: 1 },
      { name: "Fish", count: 1 },
      { name: "Aqua Vitae", count: 1 },
    ],
  },
];

const other = [
  {
    "name": "Potion Belt (+1 consumable slot)",
    "effects": "",
    "crafter": "Leatherworker",
    "level": 3,
    "ingredients": [
      { name: "Leather", count: 3 },
    ],
  },
  {
    "name": "Eyepatch (+10 accuracy)",
    "effects": "",
    "crafter": "Leatherworker",
    "level": 4,
    "ingredients": [
      { name: "Leather", count: 5 },
    ],
  },
  {
    "name": "Leather Vambraces (+2 defenses)",
    "effects": "",
    "crafter": "Leatherworker",
    "level": 5,
    "ingredients": [
      { name: "Leather", count: 5 },
    ],
  },
  {
    "name": "Iron Shield (+3 physical defense, +1 magic defense)",
    "effects": "",
    "crafter": "Blacksmith",
    "level": 4,
    "ingredients": [
      { name: "Smelt Iron", count: 5 },
      { name: "Arcane Powder", count: 1 }
    ],
  },
  {
    "name": "Seer's Circlet",
    "effects": "+1 Int/Wis",
    "crafter": "Tailor",
    "level": 5,
    "ingredients": [
      { name: "Arcane Thread", count: 3 },
      { name: "Cut Gem", count: 1 }
    ]
  },
  {
    "name": "Utility Belt (+3 to reagent inventory)",
    "effects": "",
    "crafter": "Leatherworker",
    "level": 6,
    "ingredients": [
      { name: "Etched Leather", count: 2 },
      { name: "Arcane Thread", count: 1 }
    ],
  },
  {
    "name": "Steel Shield (+1 Con, +3 physical defense, +2 magic defense)",
    "effects": "",
    "crafter": "Blacksmith",
    "level": 7,
    "ingredients": [
      { name: "Smelt Steel", count: 4 },
      { name: "Shaped Gem", count: 1 }
    ],
  },
  {
    "name": "Sage's Crown",
    "effects": "+4 Int/Wis, +4 magical defense, +2 physical defense",
    "crafter": "Tailor",
    "level": 9,
    "ingredients": [
      { name: "Runic Thread", count: 3 },
      { name: "Shaped Gem", count: 2 },
      { name: "Refined Crystal", count: 1 },
    ],
  },
  {
    "name": "Bladed Bracers (+4 Dex/Str, +4 physical defense, +2 magical defense)",
    "effects": "",
    "crafter": "Leatherworker",
    "level": 9,
    "ingredients": [
      { name: "Enchanted Leather", count: 3 },
      { name: "Steel", count: 3 },
      { name: "Magic gem", count: 2 },
    ],
  },
  {
    "name": "Focus Shard (+1 to all stats except constitution)",
    "effects": "",
    "crafter": "Enchanter",
    "level": 3,
    "ingredients": [
      { name: "Arcane Powder", count: 5 },
    ],
  },
  {
    "name": "Healing Shard (Adds a weak heal over time for 10 turns)",
    "effects": "",
    "crafter": "Enchanter",
    "level": 4,
    "ingredients": [
      { name: "Arcane Powder", count: 7 },
    ],
  },
  {
    "name": "Shield Belt (+3 magic defense)",
    "effects": "",
    "crafter": "Enchanter",
    "level": 4,
    "ingredients": [
      { name: "Arcane Powder", count: 5 },
      { name: "Leather", count: 1 },
    ],
  },
  {
    "name": "Apex Crystal (+2 defenses, +1 to all stats, permanent weak HOT)",
    "effects": "",
    "crafter": "Enchanter",
    "level": 9,
    "ingredients": [
      { name: "Processed Crystal", count: 3 },
      { name: "Runestones", count: 2 },
      { name: "Magic Gem", count: 1 },
    ],
  },
  {
    "name": "Ring of Constitution (+2 Con)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Dexterity (+2 Dex)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Strength (+2 Str)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Intelligence (+2 Int)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Wisdom (+2 Wis)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Charisma (+2 Cha)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Pendant of the Horde (teleports you to the Black Horde)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 3,
    "ingredients": [
      { name: "Cut Gem", count: 2 },
      { name: "Iron", count: 1 },
    ],
  },
  {
    "name": "Pendant of the Sarkada (teleports you to the city)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 3,
    "ingredients": [
      { name: "Cut Gem", count: 2 },
      { name: "Iron", count: 1 },
    ],
  },
  {
    "name": "Pendant of the Hold (teleports you to the Silver Hold)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 3,
    "ingredients": [
      { name: "Cut Gem", count: 2 },
      { name: "Iron", count: 1 },
    ],
  },
  {
    "name": "Pendant of the Coalition (teleports you to the coalition)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 3,
    "ingredients": [
      { name: "Cut Gem", count: 2 },
      { name: "Iron", count: 1 },
    ],
  },
  {
    "name": "Pendant of Constitution (+3 Con)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Dexterity (+3 Dex)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Strength (+3 Str)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Intelligence (+3 Int)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Wisdom (+3 Wis)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Charisma (+3 Cha)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Steel", count: 1 },
    ],
  },
  {
    "name": "Ring of Frailty (-2 Con, +3 all other stats)",
    "effects": "",
    "crafter": "Jeweler",
    "level": 7,
    "ingredients": [
      { name: "Shaped Gem", count: 3 },
      { name: "Steel", count: 2 }
    ],
  },
  {
    "name": "Star Pendant",
    "effects": "+10 accuracy, teleport to any of the four, +2 to all stats",
    "crafter": "Jeweler",
    "level": 9,
    "ingredients": [
      { name: "Magic Gem", count: 3 },
      { name: "Mythril", count: 1 },
    ],
  },

];

const reagent = [
  {
    "name": "Spun Thread",
    "crafter": "Tailor",
    "level": 1,
    "ingredients": [
      { name: "Hemp Strands", count: 2 }
    ],
  },
  {
    "name": "Flour",
    "crafter": "Chef",
    "level": 1,
    "ingredients": [
      { name: "Wheat", count: 2 }
    ],
  },
  {
    "name": "Fish",
    "crafter": "Chef",
    "level": 1,
    "ingredients": [
      { name: "Raw Fish", count: 2 }
    ],
  },
  {
    "name": "Fruits",
    "crafter": "Chef",
    "level": 1,
    "ingredients": [
      { name: "Apples", count: 2 },
    ],
  },
  {
    "name": "Gathered Hops",
    "crafter": "Chef",
    "level": 1,
    "ingredients": [
      { name: "Hops", count: 2 },
    ],
  },
  {
    "name": "Zap Honey",
    "crafter": "Chef",
    "level": 2,
    "ingredients": [
      { name: "Honey", count: 1 },
      { name: "Aqua Vitae", count: 1 },
    ],
  },
  {
    "name": "Spices",
    "crafter": "Chef",
    "level": 4,
    "ingredients": [
      { name: "Herb Blend", count: 2 },
    ],
  },
  {
    "name": "Cooked Meat",
    "crafter": "Chef",
    "level": 4,
    "ingredients": [
      { name: "Meat", count: 2 }
    ],
  },
  {
    "name": "Chocolate",
    "crafter": "Chef",
    "level": 6,
    "ingredients": [
      { name: "Cocoa", count: 2 },
    ],
  },
  {
    "name": "Spun Crystal",
    "crafter": "Chef",
    "level": 8,
    "ingredients": [
      { name: "Flawless Crystal", count: 3 },
      { name: "Saffron", count: 1 },
    ],
  },
  {
    "name": "Runic Thread",
    "crafter": "Tailor",
    "level": 8,
    "ingredients": [
      { name: "Arcane Thread", count: 2 },
      { name: "Vitriol Oil", count: 2 },
      { name: "Runestone", count: 1 },
    ],
  },
  {
    "name": "Smelt Iron",
    "crafter": "Blacksmith",
    "level": 1,
    "ingredients": [
      { name: "Iron Scraps", count: 2 }
    ],
  },
  {
    "name": "Smelt Steel",
    "crafter": "Blacksmith",
    "level": 5,
    "ingredients": [
      { name: "Iron Scraps", count: 2 },
      { name: "Carbon", count: 2 }
    ],
  },
  {
    "name": "Smelt Mythril",
    "crafter": "Blacksmith",
    "level": 8,
    "ingredients": [
      { name: "Smelt Steel", count: 3 },
      { name: "Flawless Crystal", count: 1 },
      { name: "Runestone", count: 2 },
    ],
  },
  {
    "name": "Leather",
    "crafter": "Leatherworker",
    "level": 1,
    "ingredients": [
      { name: "Hide Scrap", count: 2 }
    ],
  },
  {
    "name": "Etched Leather",
    "crafter": "Leatherworker",
    "level": 5,
    "ingredients": [
      { name: "Full Hide", count: 2 },
      { name: "Arcane Thread", count: 1 },
    ],
  },
  {
    "name": "Enchanted Leather",
    "crafter": "Leatherworker",
    "level": 8,
    "ingredients": [
      { name: "Flawless Hide", count: 2 },
      { name: "Refined Crystal", count: 1 },
    ],
  },
  {
    "name": "Arcane Powder",
    "crafter": "Enchanter",
    "level": 1,
    "ingredients": [
      { name: "Crystal Shards", count: 2 }
    ],
  },
  {
    "name": "Runestone",
    "crafter": "Enchanter",
    "level": 5,
    "ingredients": [
      { name: "Vitriol Oil", count: 1 },
      { name: "Arcane Powder", count: 1 },
    ],
  },
  {
    "name": "Processed Crystal",
    "crafter": "Enchanter",
    "level": 8,
    "ingredients": [
      { name: "Flawless Crystal", count: 1 },
      { name: "Shaped Gem", count: 2 },
      { name: "Arcane Powder", count: 2 },
    ],
  },
  {
    "name": "Aqua Vitae",
    "crafter": "Alchemist",
    "level": 1,
    "ingredients": [
      { name: "Corn", count: 2 }
    ],
  },
  {
    "name": "Vitriol Oil",
    "crafter": "Alchemist",
    "level": 5,
    "ingredients": [
      { name: "Aqua Vitae", count: 2 },
      { name: "Sulfur", count: 2 },
    ],
  },
  {
    "name": "Refined Crystal",
    "crafter": "Alchemist",
    "level": 8,
    "ingredients": [
      { name: "Flawless Crystal", count: 1 },
      { name: "Runestone", count: 1 },
      { name: "Vitriol Oil", count: 1 },
    ],
  },
  {
    "name": "Cut Gem",
    "crafter": "Jeweler",
    "level": 1,
    "ingredients": [
      { name: "Gem", count: 2 }
    ],
  },
  {
    "name": "Shaped Gem",
    "crafter": "Jeweler",
    "level": 5,
    "ingredients": [
      { name: "Vitriol Oil", count: 1 },
      { name: "Quality Gem", count: 2 },
    ],
  },
  {
    "name": "Magic Gem",
    "crafter": "Jeweler",
    "level": 8,
    "ingredients": [
      { name: "Perfect Gem", count: 1 },
      { name: "Arcane Powder", count: 3 },
      { name: "Aqua Vitae", count: 2 },
    ],
  },
];

const weapons = [
  {
    "name": "Enchanted Tome",
    "effects": "+1 Int/Wis",
    "crafter": "Enchanter",
    "level": 2,
    "ingredients": [
      { name: "Arcane Powder", count: 5 },
    ],
  },
  {
    "name": "Iron Dagger",
    "effects": "+1 Str/Dex",
    "crafter": "Blacksmith",
    "level": 3,
    "ingredients": [
      { name: "Smelt Iron", count: 5 }
    ],
  },
  {
    "name": "Bound Book",
    "effects": "+1 Int",
    "crafter": "Tailor",
    "level": 4,
    "ingredients": [
      { name: "Spun Thread", count: 4 },
    ],
  },
  {
    "name": "Steel Sword",
    "effects": "+2 Str/Dex",
    "crafter": "Blacksmith",
    "level": 6,
    "ingredients": [
      { name: "Smelt Steel", count: 2 },
      { name: "Shaped Gem", count: 1 },
    ],
  },
  {
    "name": "Book of Runes",
    "effects": "+2 Int/Wis",
    "crafter": "Enchanter",
    "level": 6,
    "ingredients": [
      { name: "Runestone", count: 2 },
      { name: "Etched Leather", count: 1 }
    ],
  },
  {
    "name": "Enchanted Violin",
    "effects": "+2 Chr",
    "crafter": "Enchanter",
    "level": 7,
    "ingredients": [
      { name: "Runestone", count: 2 },
      { name: "Hewn Wood", count: 2 }
    ],
  },
];

const recipes = [
  { 'title': 'Armor', content: armor },
  { 'title': 'Consumables', content: consumable },
  { 'title': 'Other', content: other },
  { 'title': 'Reagents', content: reagent },
  { 'title': 'Weapons', content: weapons },
];

export default recipes;