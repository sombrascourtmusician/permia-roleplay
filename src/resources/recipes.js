const armor = [
  {
    "name": "Novice Robes",
    "effects": "+4 Con, +1 Int/Wis, +2 Magic Defense",
    "crafter": "Tailor",
    "level": 2,
    "ingredients": [
      { name: "Spun Thread", count: 5 }
    ],
  },
  {
    "name": "Iron Armor",
    "effects": "+5 Con, 4 Physical defense",
    "crafter": "Blacksmith",
    "level": 2,
    "ingredients": [
      { name: "Smelt Iron", count: 5 }
    ],
  },
  {
    "name": "Leather Armor",
    "effects": "+4 Con, +1 Dex/Str, 2 Physical defense",
    "crafter": "Leatherworker",
    "level": 2,
    "ingredients": [
      { name: "Leather", count: 5 }
    ],
  },
  {
    "name": "Acolyte Robes",
    "effects": "+5 Con, +1 Int/Wis, +2 Magic Defense",
    "crafter": "Tailor",
    "level": 3,
    "ingredients": [
      { name: "Spun Thread", count: 5 },
      { name: "Arcane Powder", count: 1 }
    ],
  },
  {
    "name": "Fancy Suit",
    "effects": "+5 Con, +1 Chr, +2 Magic Defense",
    "crafter": "Tailor",
    "level": 3,
    "ingredients": [
      { name: "Spun Thread", count: 5 },
      { name: "Arcane Powder", count: 1 }
    ],
  },
  {
    "name": "Master's Robe",
    "effects": "+6 Con, +1 Int/Wis, +4 defenses. When at max hp, gain a 30 hp shield and +10 defenses.",
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
    "effects": "+6 Con, +1 Chr, +4 defenses. When at max hp, gain a 30 hp shield and +10 defenses.",
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
    "effects": "+6 Con, +3 defense",
    "crafter": "Blacksmith",
    "level": 7,
    "ingredients": [
      { name: "Smelt Steel", count: 3 },
      { name: "Etched Leather", count: 1 }
    ],
  },
  {
    "name": "Etched Leather Armor",
    "effects": "+5 Con, +1 Dex/Str, +3 physical defense",
    "crafter": "Leatherworker",
    "level": 7,
    "ingredients": [
      { name: "Etched Leather", count: 3 },
      { name: "Vitriol Oil", count: 2 }
    ],
  },
  {
    "name": "Mythril Armor",
    "effects": "+7 Con, +6 defenses. When dropping below 50% hp, gain a 20 health HOT for 3 turns.",
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
    "effects": "+6 Con, +1 Dex/Str, +4 defenses. When below 50% hp, gain 3000 dodge for 1 turn.",
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
    "effects": "70 damage spread across up to 2 targets",
    "crafter": "Alchemist",
    "level": 6,
    "ingredients": [
      { name: "Vitriol Oil", count: 2 },
      { name: "Arcane Powder", count: 1 }
    ],
  },
  {
    "name": "Rejuvenation Potion",
    "effects": "Medium + Strong HOT",
    "crafter": "Alchemist",
    "level": 7,
    "ingredients": [
      { name: "Vitriol Oil", count: 2 },
      { name: "Runestone", count: 1 }
    ],
  },
  {
    "name": "Potion of Weakness",
    "effects": "-5 to all stats",
    "crafter": "Alchemist",
    "level": 8,
    "ingredients": [
      { name: "Vitriol Oil", count: 3 },
      { name: "Arcane Powder", count: 1 },
    ],
  },
  {
    "name": "Love Potion",
    "effects": "-15 accuracy, -5 to all stats",
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
    "effects": "35 HP, Weak HOT for 4 turns, +2 Int/Wis for 30 minutes",
    "crafter": "Chef",
    "level": 3,
    "ingredients": [
      { name: "Fish", count: 1 },
      { name: "Rice", count: 1 }
    ],
  },
  {
    "name": "Lavash",
    "effects": "35 HP, Weak HOT for 4 turns, +2 Dex for 30 minutes",
    "crafter": "Chef",
    "level": 3,
    "ingredients": [
      { name: "Flour", count: 2 }
    ],
  },
  {
    "name": "Steak and Eggs",
    "effects": "40 HP, Weak HOT for 4 turns, +2 Str for 30 minutes",
    "crafter": "Chef",
    "level": 4,
    "ingredients": [
      { name: "Cooked Meat", count: 1 },
      { name: "Eggs", count: 1 }
    ],
  },
  {
    "name": "Falafel",
    "effects": "40 HP, Weak HOT for 4 turns, +2 Chr for 30 minutes",
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
    "effects": "40 HP, Medium HOT for 4 turns, +2 Dex for 30 minutes",
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
    "effects": "40 HP, Medium HOT for 4 turns, +2 Str for 30 minutes",
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
    "effects": "45 HP, Medium HOT for 4 turns, +2 Int/Wis for 30 minutes",
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
    "effects": "45 HP, Medium HOT for 4 turns, +2 Chr for 30 minutes",
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
    "effects": "45 HP, Medium HOT for 4 turns, +2 Dex for 30 minutes",
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
    "effects": "50 HP, Strong HOT for 4 turns, +3 Con for 30 minutes",
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
  {
    "name": "Infused Bandages",
    "effects": "Heals 40, removes all DOTS, and gives a weak HOT",
    "crafter": "Tailor",
    "level": 7,
    "ingredients": [
      { name: "Cotton Fiber", count: 6 },
      { name: "Arcane Bowder", count: 1 },
      { name: "Magic Beans", count: 1 },
    ],
  },
  {
    "name": "Encahnted Rope",
    "effects": "-5 Str/Dex on target, +2 charisma on user",
    "crafter": "Tailor",
    "level": 7,
    "ingredients": [
      { name: "Cotton Fiber", count: 6 },
      { name: "Arcane Bowder", count: 1 },
      { name: "Magic Beans", count: 1 },
    ],
  },
  {
    "name": "Armor Polish",
    "effects": "+20 to each defense for 2 hours",
    "crafter": "Blacksmith",
    "level": 6,
    "ingredients": [
      { name: "Sulfur", count: 4 },
      { name: "Carbon", count: 2 },
      { name: "Magic Beans", count: 1 },
    ],
  },
  {
    "name": "Weapon Oil",
    "effects": "+20 to accuracy and +2 dex/str for 2 hours",
    "crafter": "Blacksmith",
    "level": 6,
    "ingredients": [
      { name: "Sulfur", count: 4 },
      { name: "Carbon", count: 2 },
      { name: "Magic Beans", count: 1 },
    ],
  },
  {
    "name": "Prismatic Crystal",
    "effects": "+3 to all stats and +3 to defenses, weak HOT for 7 turns",
    "crafter": "Enchanter",
    "level": 7,
    "ingredients": [
      { name: "Runestone", count: 1 },
      { name: "Arcane Powder", count: 3 },
      { name: "Magic Beans", count: 1 },
    ],
  },
  {
    "name": "Aether Converter",
    "effects": "Restores 20 stamina and 30 mana per turn for 4 turns",
    "crafter": "Enchanter",
    "level": 7,
    "ingredients": [
      { name: "Flawless Crystal", count: 3 },
      { name: "Arcane Powder", count: 2 },
      { name: "Magic Beans", count: 1 },
    ],
  },
  {
    "name": "Crystalized Dagger",
    "effects": "Deals 10 flat damage, if user is reduced to 0 via this, they become afflicted over time (USER CONSENT REQUIRED)",
    "crafter": "Enchanter",
    "level": 7,
    "ingredients": [
      { name: "Flawless Crystal", count: 3 },
      { name: "Arcane Powder", count: 1 },
      { name: "Magic Beans", count: 1 },
    ],
  },
];

const other = [
  {
    "name": "Potion Belt",
    "effects": "+1 consumable slot",
    "crafter": "Leatherworker",
    "level": 3,
    "ingredients": [
      { name: "Leather", count: 3 },
    ],
  },
  {
    "name": "Gathering Gloves",
    "effects": "+1 to all gathers",
    "crafter": "Leatherworker",
    "level": 6,
    "ingredients": [
      { name: "Magic Beans", count: 3 },
      { name: "Etched Leather", count: 2 },
      { name: "Arcane Powder", count: 1 },
    ],
  },
  {
    "name": "Eyepatch",
    "effects": "+10 accuracy",
    "crafter": "Leatherworker",
    "level": 4,
    "ingredients": [
      { name: "Leather", count: 5 },
    ],
  },
  {
    "name": "Leather Vambraces",
    "effects": "+2 defenses",
    "crafter": "Leatherworker",
    "level": 5,
    "ingredients": [
      { name: "Leather", count: 5 },
    ],
  },
  {
    "name": "Iron Shield",
    "effects": "+3 physical defense, +1 magic defense",
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
    "name": "Utility Belt",
    "effects": "+3 to reagent inventory",
    "crafter": "Leatherworker",
    "level": 6,
    "ingredients": [
      { name: "Etched Leather", count: 2 },
      { name: "Arcane Thread", count: 1 }
    ],
  },
  {
    "name": "Steel Shield",
    "effects": "+1 Con, +3 physical defense, +2 magic defense",
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
    "name": "Bladed Bracers",
    "effects": "+4 Dex/Str, +4 physical defense, +2 magical defense",
    "crafter": "Leatherworker",
    "level": 9,
    "ingredients": [
      { name: "Enchanted Leather", count: 3 },
      { name: "Smelt Steel", count: 3 },
      { name: "Magic gem", count: 2 },
    ],
  },
  {
    "name": "Focus Shard",
    "effects": "+1 to all stats except constitution",
    "crafter": "Enchanter",
    "level": 3,
    "ingredients": [
      { name: "Arcane Powder", count: 5 },
    ],
  },
  {
    "name": "Healing Shard",
    "effects": "Adds a weak heal over time for 10 turns",
    "crafter": "Enchanter",
    "level": 4,
    "ingredients": [
      { name: "Arcane Powder", count: 7 },
    ],
  },
  {
    "name": "Shield Belt",
    "effects": "+3 magic defense",
    "crafter": "Enchanter",
    "level": 4,
    "ingredients": [
      { name: "Arcane Powder", count: 5 },
      { name: "Leather", count: 1 },
    ],
  },
  {
    "name": "Apex Crystal",
    "effects": "+2 defenses, +1 to all stats, permanent weak HOT",
    "crafter": "Enchanter",
    "level": 9,
    "ingredients": [
      { name: "Processed Crystal", count: 3 },
      { name: "Runestones", count: 2 },
      { name: "Magic Gem", count: 1 },
    ],
  },
  {
    "name": "Ring of Constitution",
    "effects": "+2 Con",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Dexterity",
    "effects": "+2 Dex",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Strength",
    "effects": "+2 Str",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Intelligence",
    "effects": "+2 Int",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Wisdom",
    "effects": "+2 Wis",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Ring of Charisma",
    "effects": "+2 Cha",
    "crafter": "Jeweler",
    "level": 2,
    "ingredients": [
      { name: "Cut Gem", count: 3 },
    ],
  },
  {
    "name": "Pendant of the Horde",
    "effects": "teleports you to the Black Horde",
    "crafter": "Jeweler",    
    "level": 3,
    "ingredients": [
      { name: "Cut Gem", count: 2 },
      { name: "Iron", count: 1 },
    ],
  },
  {
    "name": "Pendant of the Sarkada",
    "effects": "teleports you to the city",
    "crafter": "Jeweler",
    "level": 3,
    "ingredients": [
      { name: "Cut Gem", count: 2 },
      { name: "Iron", count: 1 },
    ],
  },
  {
    "name": "Pendant of the Hold",
    "effects": "teleports you to the Silver Hold",
    "crafter": "Jeweler",
    "level": 3,
    "ingredients": [
      { name: "Cut Gem", count: 2 },
      { name: "Iron", count: 1 },
    ],
  },
  {
    "name": "Pendant of the Coalition",
    "effects": "teleports you to the coalition",
    "crafter": "Jeweler",
    "level": 3,
    "ingredients": [
      { name: "Cut Gem", count: 2 },
      { name: "Iron", count: 1 },
    ],
  },
  {
    "name": "Pendant of Constitution",
    "effects": "+3 Con",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Smelt Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Dexterity",
    "effects": "+3 Dex",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Smelt Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Strength",
    "effects": "+3 Str",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Smelt Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Intelligence",
    "effects": "+3 Int",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Smelt Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Wisdom",
    "effects": "+3 Wis",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Smelt Steel", count: 1 },
    ],
  },
  {
    "name": "Pendant of Charisma",
    "effects": "+3 Cha",
    "crafter": "Jeweler",
    "level": 6,
    "ingredients": [
      { name: "Shaped Gem", count: 1 },
      { name: "Smelt Steel", count: 1 },
    ],
  },
  {
    "name": "Ring of Frailty",
    "effects": "-2 Con, +3 all other stats",
    "crafter": "Jeweler",
    "level": 7,
    "ingredients": [
      { name: "Shaped Gem", count: 3 },
      { name: "Smelt Steel", count: 2 }
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
      { name: "Leather", count: 2 },
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
];

const weapons = [
  {
    "name": "Enchanted Tome",
    "effects": "+2 Int/Wis, +2 accuracy",
    "crafter": "Enchanter",
    "level": 2,
    "ingredients": [
      { name: "Arcane Powder", count: 5 },
    ],
  },
  {
    "name": "Iron Dagger",
    "effects": "+2 Str/Dex, +2 accuracy",
    "crafter": "Blacksmith",
    "level": 3,
    "ingredients": [
      { name: "Smelt Iron", count: 5 }
    ],
  },
  {
    "name": "Bound Book",
    "effects": "+2 Int, +2 accuracy",
    "crafter": "Tailor",
    "level": 4,
    "ingredients": [
      { name: "Spun Thread", count: 4 },
    ],
  },
  {
    "name": "Steel Sword",
    "effects": "+4 Str/Dex, +5 accuracy",
    "crafter": "Blacksmith",
    "level": 6,
    "ingredients": [
      { name: "Smelt Steel", count: 2 },
      { name: "Shaped Gem", count: 1 },
    ],
  },
  {
    "name": "Book of Runes",
    "effects": "+4 Int/Wis, +5 accuracy",
    "crafter": "Enchanter",
    "level": 6,
    "ingredients": [
      { name: "Runestone", count: 2 },
      { name: "Etched Leather", count: 1 }
    ],
  },
  {
    "name": "Enchanted Violin",
    "effects": "+4 Chr, +5 accuracy",
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