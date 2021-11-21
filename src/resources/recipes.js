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
    "effects": "+1 Str/Dex, +4 Con, 2 Physical defense",
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
    "effects": "4 Con, 3 Int/Wis, +2 Magic Defense",
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
    "effects": "4 Con, 3 Chr, +2 Magic Defense",
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
    "effects": "6 Con, +3 defenses, 1 Str/Dex",
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

const other = [
  {
    "name": "Potion Belt (+1 consumable slot)",
    "crafter": "Leatherworker",
    "level": 3,
    "ingredients": [
      { name: "Leather", count: 3 },
    ],
  },
  {
    "name": "Eyepatch (+10 accuracy)",
    "crafter": "Leatherworker",
    "level": 4,
    "ingredients": [
      { name: "Leather", count: 5 },
    ],
  },
  {
    "name": "Leather Vambraces (+2 defenses)",
    "crafter": "Leatherworker",
    "level": 5,
    "ingredients": [
      { name: "Leather", count: 5 },
    ],
  },
  {
    "name": "Iron Shield (+3 physical defense, +1 magic defense)",
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

    ]
  },
  {
    "name": "Utility Belt (+3 to reagent inventory)",
    "crafter": "Leatherworker",
    "level": 6,
    "ingredients": [
      { name: "Etched Leather", count: 2 },
      { name: "Arcane Thread", count: 1 }
    ],
  },
  {
    "name": "Steel Shield (+1 Con, +3 physical defense, +2 magic defense)",
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
    "crafter": "Enchanter",
    "level": 3,
    "ingredients": [
      { name: "Arcane Powder", count: 5 },
    ],
  },
  {
    "name": "Healing Shard (Adds a weak heal over time for 10 turns)",
    "crafter": "Enchanter",
    "level": 4,
    "ingredients": [
      { name: "Arcane Powder", count: 7 },
    ],
  },
  {
    "name": "Shield Belt (+3 magic defense)",
    "crafter": "Enchanter",
    "level": 4,
    "ingredients": [
      { name: "Arcane Powder", count: 5 },
      { name: "Leather", count: 1 },
    ],
  },
  {
    "name": "Apex Crystal (+2 defenses, +1 to all stats, permanent weak HOT)",
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
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Dexterity (+2 Dex)",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Strength (+2 Str)",
    "crafter": "Jeweler",
    
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Intelligence (+2 Int)",
    "crafter": "Jeweler",
    
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Wisdom (+2 Wis)",
    "crafter": "Jeweler",
    
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Charisma (+2 Cha)",
    "crafter": "Jeweler",
    
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Pendant of the Horde (teleports you to the Black Horde)",
    "crafter": "Jeweler",
    
    "level": 3,
    "ingredients": [
      { name: "Cut Gem", count: 2 },
      { name: "Iron", count: 1 },
    ],
  },
  {
    "name": "Pendant of the Sarkada (teleports you to the city)",
    "crafter": "Jeweler",
    "level": 3,
    "ingredients": [
      { name: "Cut Gem", count: 2 },
      { name: "Iron", count: 1 },
    ],
  },
  {
    "name": "Pendant of the Hold (teleports you to the Silver Hold)",
    "crafter": "Jeweler",
    "level": 3,
    "ingredients": [
      { name: "Cut Gem", count: 2 },
      { name: "Iron", count: 1 },
    ],
  },
  {
    "name": "Pendant of the Coalition (teleports you to the coalition)",
    "crafter": "Jeweler",
    "level": 3,
    "ingredients": [
      { name: "Cut Gem", count: 2 },
      { name: "Iron", count: 1 },
    ],
  },
  {
    "name": "Pendant of Constitution (+3 Con)",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Dexterity (+3 Dex)",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Strength (+3 Str)",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Intelligence (+3 Int)",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Wisdom (+3 Wis)",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Charisma (+3 Cha)",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Steel", count: 1 },
    ],
  },
  {
    "name": "Ring of Frailty (-2 Con, +3 all other stats)",
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
    "type": "Reagent",
    "level": 1,
    "ingredients": [
      { name: "Iron Scraps", count: 2 }
    ],
  },
  {
    "name": "Smelt Steel",
    "type": "Reagent",
    "level": 5,
    "ingredients": [
      { name: "Iron Scraps", count: 2 },
      { name: "Carbon", count: 2 }
    ],
  },
  {
    "name": "Smelt Mythril",
    "type": "Reagent",
    "level": 8,
    "ingredients": [
      { name: "Smelt Steel", count: 3 },
      { name: "Flawless Crystal", count: 1 },
      { name: "Runestone", count: 2 },
    ],
  },
  {
    "name": "Leather",
    "type": "Reagent",
    "level": 1,
    "ingredients": [
      { name: "Hide Scrap", count: 2 }
    ],
  },
  {
    "name": "Etched Leather",
    "type": "Reagent",
    "level": 5,
    "ingredients": [
      { name: "Full Hide", count: 2 },
      { name: "Arcane Thread", count: 1 },
    ],
  },
  {
    "name": "Enchanted Leather",
    "type": "Reagent",
    "level": 8,
    "ingredients": [
      { name: "Flawless Hide", count: 2 },
      { name: "Refined Crystal", count: 1 },
    ],
  },
  {
    "name": "Arcane Powder",
    "type": "Reagent",
    "level": 1,
    "ingredients": [
      { name: "Crystal Shards", count: 2 }
    ],
  },
  {
    "name": "Runestone",
    "type": "Reagent",
    "level": 5,
    "ingredients": [
      { name: "Vitriol Oil", count: 1 },
      { name: "Arcane Powder", count: 1 },
    ],
  },
  {
    "name": "Processed Crystal",
    "type": "Reagent",
    "level": 8,
    "ingredients": [
      { name: "Flawless Crystal", count: 1 },
      { name: "Shaped Gem", count: 2 },
      { name: "Arcane Powder", count: 2 },
    ],
  },
  {
    "name": "Aqua Vitae",
    "type": "Reagent",
    "level": 1,
    "ingredients": [
      { name: "Corn", count: 2 }
    ],
  },
  {
    "name": "Vitriol Oil",
    "type": "Reagent",
    "level": 5,
    "ingredients": [
      { name: "Aqua Vitae", count: 2 },
      { name: "Sulfur", count: 2 },
    ],
  },
  {
    "name": "Refined Crystal",
    "type": "Reagent",
    "level": 8,
    "ingredients": [
      { name: "Flawless Crystal", count: 1 },
      { name: "Runestone", count: 1 },
      { name: "Vitriol Oil", count: 1 },
    ],
  },
  {
    "name": "Cut Gem",
    "type": "Reagent",
    "level": 1,
    "ingredients": [
      { name: "Gem", count: 2 }
    ],
  },
  {
    "name": "Shaped Gem",
    "type": "Reagent",
    "level": 5,
    "ingredients": [
      { name: "Vitriol Oil", count: 1 },
      { name: "Quality Gem", count: 2 },
    ],
  },
  {
    "name": "Magic Gem",
    "type": "Reagent",
    "level": 8,
    "ingredients": [
      { name: "Perfect Gem", count: 1 },
      { name: "Arcane Powder", count: 3 },
      { name: "Aqua Vitae", count: 2 },
    ],
  },
  {
    "name": "Flour",
    "type": "Reagent",
    "level": 1,
    "ingredients": [
      { name: "Wheat", count: 2 }
    ],
  },
  {
    "name": "Fish",
    "type": "Reagent",
    "level": 1,
    "ingredients": [
      { name: "Raw Fish", count: 2 }
    ],
  },
  {
    "name": "Fruits",
    "type": "Reagent",
    "level": 1,
    "ingredients": [
      { name: "Apples", count: 2 },
    ],
  },
  {
    "name": "Gathered Hops",
    "type": "Reagent",
    "level": 1,
    "ingredients": [
      { name: "Hops", count: 2 },
    ],
  },
  {
    "name": "Zap Honey",
    "type": "Reagent",
    "level": 2,
    "ingredients": [
      { name: "Honey", count: 1 },
      { name: "Aqua Vitae", count: 1 },
    ],
  },
  {
    "name": "Spices",
    "type": "Reagent",
    "level": 4,
    "ingredients": [
      { name: "Herb Blend", count: 2 },
    ],
  },
  {
    "name": "Cooked Meat",
    "type": "Reagent",
    "level": 4,
    "ingredients": [
      { name: "Meat", count: 2 }
    ],
  },
  {
    "name": "Chocolate",
    "type": "Reagent",
    "level": 6,
    "ingredients": [
      { name: "Cocoa", count: 2 },
    ],
  },
  {
    "name": "Spun Crystal",
    "type": "Reagent",
    "level": 8,
    "ingredients": [
      { name: "Flawless Crystal", count: 3 },
      { name: "Saffron", count: 1 },
    ],
  },
];

const weapons = [
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
    "name": "Iron Dagger",
    "effects": "+1 Str/Dex",
    "crafter": "Blacksmith",
    "level": 3,
    "ingredients": [
      { name: "Smelt Iron", count: 5 }
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
    "name": "Enchanted Tome",
    "effects": "+1 Int/Wis",
    "crafter": "Enchanter",
    "level": 2,
    "ingredients": [
      { name: "Arcane Powder", count: 5 },
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

const recipes = {
  'armor': { 'title': 'Armor', content: armor },
  'consumable': { 'title': 'Consumables', content: [] },
  'other': { 'title': 'Other', content: other },
  'reagent': { 'title': 'Reagents', content: [] },
  'weapon': { 'title': 'Weapons', content: weapons },
};

export default recipes;