export const gatheringNodes = [
  {
    title: "Sarkada Farm",
    description: "These gathering nodes are all located at the Sarkadian farm. To get there, simply come through the portal to the city, turn around and go back through the gates and take a right to the staircase. You’ll see all the nodes there.",
    nodes: [
      {
        title: "Corn Stalk",
        resources: [
          { title: "Corn" }
        ],
      },
      {
        title: "Hops",
        resources: [
          { title: "Hops" }
        ],
      },
      {
        title: "Cocoa Tree",
        resources: [
          { title: "Cocoa", requirement: "Level 5" }
        ],
      },
      {
        title: "Cotton Plant",
        resources: [
          { title: "Cotton Strands (5)" },
          { title: "Arcaellum", requirement: "Level 8" },
        ],
      },
      {
        title: "Grain",
        resources: [
          { title: "Wheat" },
          { title: "Rice" },
        ],
      },
      {
        title: "Saffron",
        resources: [
          { title: "Saffron", requirement: "Level 8" },
          { title: "Hemp Strands" },
        ],
      },
    ]
  },
  {
    title: "Crystal Veins and Caves",
    description: "This is in the middle of the crystal canyon, the big crystal right off the circular platform under the Bulwark.",
    nodes: [
      {
        title: "Crystal",
        resources: [
          { title: "Crystal Shards" },
          { title: "Flawless Crystal", requirement: "Level 8" },
        ],
      },
    ]
  },
  {
    title: "Silver Mountains",
    description: "These will be in a couple places, all in the mountain!",
    nodes: [   
      {
        title: "Iron Vein",
        resources: [
          { title: "Iron Scraps" },
          { title: "Carbon", requirement: "Level 5" },
          { title: "Sulfur", requirement: "Level 5" },
        ],
      },
      {
        title: "Gem Mine",
        resources: [
          { title: "Gem" },
          { title: "Quality Gem", requirement: "Level 5" },
          { title: "Perfect Gem", requirement: "Level 8" },
        ],
      },
      {
        title: "Stone",
        resources: [
          { title: "Flat Stone", requirement: "Level 5" },
        ],
      },
      {
        title: "Chicken Coop",
        resources: [
          { title: "Eggs" },
        ],
      },
      {
        title: "Herbs",
        resources: [
          { title: "Herb Blend", requirement: "Level 5" },
        ],
      },
    ]
  }, 
  {
    title: "Jungle of the Lost",
    description: "These are all located directly to the left of the bridge that you arrive on. Simply take a left when you arrive and walk on over",
    nodes: [
      {
        title: "Hunting Trap",
        resources: [
          { title: "Hide Scraps" },
          { title: "Meat", requirement: "Level 4" },
          { title: "Full Hide" },
          { title: "Flawless Hide" },
        ]
      },
      {
        title: "Tree",
        resources: [
          { title: "Hewn Wood", requirement: "Level 5" },
          { title: "Honey" },
          { title: "Apples" },
        ]
      },
      {
        title: "Stream/Water",
        resources: [
          { title: "Fish" }
        ]
      },
    ]
  },
];

const city = { 
  'title': 'Royal City', 
  subLocations: [
    { 
      'title': 'Sublocation 1', 
      'content': [], 
      'image': '/permia-carousel1.webp' 
    }, 
    { 
      'title': 'Sublocation 2', 
      'content': [], 
      'image': '/permia-carousel2.webp' 
    }, 
    { 
      'title': 'Sublocation 3', 
      'content': [], 
      'image': '/permia-carousel3.webp' 
    }, 
    { 
      'title': 'Sublocation 4', 
      'content': [], 
      'image': '/permia-carousel4.webp' 
    }, 
  ] 
};

const jungle = { 
  'title': 'Jungle of the Lost', 
  subLocations: [
    { 
      'title': 'Near the back of the jungle, above the slave pens.', 
      'content': [
        'Deep in the jungle is the home of it\'s denizens, guarded by the Horde itself and the foul creatures that roam the jungles. Tread cautiously as you step towards these homes, because each one may be the last free step you ever take. Trespassing within these homes could cost you your life, so it\'s best to stay out. If you\'re willing to brave the dangers, you\'ll reach these homes by going up the stairs behind the Black Horde\'s horrific slave pens.',
        '((OOC NOTE: These are rentals, please ask permission before going inside.))',
      ], 
      'image': 'https://cdn.discordapp.com/attachments/288900574903140353/922306248383270952/Jungle_rentals.jpg' 
    }, 
    { 
      'title': 'Black Horde camp itself, walk up and down the ramp', 
      'content': [
        'The Black Horde camp itself hosts the monsters, the afflicted who have struck out on their own and lived on their instincts. An evil abode, it is nonetheless beautiful in it\'s own way. On the left, the ritual tower looms, with an altar used for nefarious deeds, surrounded by crystals. Opposite, another ziggurat hosts the throne room itself, where the Chief of the Horde carries out their decrees. In the distance, you can see the entrance to the slave pens and hear the wails from within, while above them, a surprising clinic and a few homes rest.',
      ], 
      'image': 'https://cdn.discordapp.com/attachments/288900574903140353/922306248668491827/jungle.jpg' 
    }, 
    { 
      'title': 'On top of the slave pens, to the back.', 
      'content': [
        'Surprisingly, even the Horde bleed. When they need to rest, the Horde come here to get their wounds treated. Not the cleanest hospital in the world, but it could have been worse. Come here if you must, though if you aren\'t Horde and end up here... be worried.',
      ], 
      'image': 'https://cdn.discordapp.com/attachments/288900574903140353/922306248957919312/Jungle_medical.jpg' 
    }, 
    { 
      'title': 'At the back of the Black Horde\'s base, inside of cages.', 
      'content': [
        'Oh the slaves pens... where the truly wretched go to spend the rest of their days. If you find yourself here with a collar around your neck, give up the last of your hope as it has been stolen from you, and prepare yourself from the worst. If, for some reason, you wish to make your way here, you\'ll find a small entrance under a stone arch near the back of the Horde base. But be careful, or you might end up a permanent tenant.',
      ], 
      'image': 'https://cdn.discordapp.com/attachments/288900574903140353/922314392203300864/Jungle_Slave_pens.jpg' 
    }, 
    { 
      'title': 'Atop the left ziggurat as you come in to the jungle', 
      'content': [
        'The ritual stone has been used for things that would make even the most well versed warrior cringe. It\'s where the Horde do their forcible afflictions, where their slaves are made, and where even more eldritch abominations are created. Stay away unless you\'re wishing to join them, or you wish to become afflicted yourself.',
      ], 
      'image': 'https://cdn.discordapp.com/attachments/288900574903140353/922314392480141372/Horde_Altar.jpg' 
    },
    { 
      'title': 'In the right ziggurat, at the very top.', 
      'content': [
        'The Black Horde\'s throne room is where their chief makes their decrees and leads their troops. This is where the orders are given, where raids and enslavements are planned. Here, you\'ll see many stolen goods, from the Coalition and elsewhere. Tread careful in their seat of power, as it\'s strictly off limits to any outsiders.',
      ], 
      'image': 'https://cdn.discordapp.com/attachments/288900574903140353/922314392681476136/Horde_throne_room.jpg' 
    }, 
  ] 
};

const harbor = { 
  'title': 'Lantuga Harbor', 
  subLocations: [
    { 
      'title': 'Lantuga', 
      'content': [
        'A towering structure made of stone and wood stands as a monument to the determination of the coalition’s desires for profit and opportunities. It started with little more than some rickety docks made with the wood brought over on ships and turned into the sprawling structure that is Lantuga. The settlers working for the Coalition of The Compass dismantled their boats, deciding they would no longer need them, and built their new home. It wasn’t long after the mining really took off that the building started to change. The crystal fragments lodged in the wood and gave new life to the long dead creatures trapped in the grain. Coral and sea life found a new home atop the building, forever swimming in their ethereal sea.',
        'While the people of Lantuga own a lot in this area. They only lay claim to the building, the docks, and the bathhouse. The rest of the desert belongs to anyone who can brave the heat.'
      ],
      'image': '/permia-carousel1.webp' 
    }, 
    { 
      'title': 'Lantuga\'s Hold', 
      'content': [
        'Within the structure there are shops, a tavern, homes, and a beautiful cherry blossom tree in the center. A crystal had been planted there to see how it would grow, a test, amazingly the bit of rock managed to maintain its power and glowed faintly. Newcomers seeking to find their fortune may be hired to work there and will be fed by the kitchen inside and allowed to stay in the bunks. On the top floor there are rooms for rent and a large room hidden in the back, the governor’s quarters', 
        '((Tailor and enchanter can be found within))',
      ],
      'image': '/permia-carousel2.webp' 
    }, 
    { 
      'title': 'The Mines', 
      'content': [
        'The crystal fissure and the mining operation are overseen by a large bulwark. Powered by a massive crystal that had been blasted from the land when first opening the mine, the entire area is protected from the magical discharges that come from mining the crystals as well as keep the bulwark elevated so that the weaponry can defend the claim laid upon it. The vibrant crystals found in the fissure are some of the most potent in the land, close to a large mother crystal, they are perfect for all those who seek to use their power.', 
      ],
      'image': '/permia-carousel3.webp' 
    }, 
    { 
      'title': 'Lantuga Docks', 
      'content': [
        'Built with wood brought over on boats and from what little trees they were able to harvest from the jungle areas not closely defended by the Horde. Small shacks are all that remain from when this was the home of the workers who had come with the coalition. Boats still come in with shipments from other lands.', 
      ],
      'image': '/permia-carousel4.webp' 
    }, 
  ] 
};

const mountains = { 
  'title': 'Mount Silver', 
  subLocations: [
    { 
      'title': 'The Keep', 
      'content': [
        'The Silver Hold keep is the last bastion of the Silver Hold, a place for planning, for celebration, for meetings, for festivals, and everything in between. This is where Aida lives and works, and where the brass of the Silver Hold meet. Complete with a potions study area, researchers can also use this space for all sorts of experimentation.', 
      ],
      'image': '/permia-carousel1.webp' 
    }, 
    { 
      'title': 'The Tavern', 
      'content': [
        'The Lost Lamb tavern is home to a trio of owners, Thalia, Cherub, and Toril. It serves a variety of food and beverages, and features nightly entertainment of music and dancing. Come here for a good time and light, fun entertainment! Try the Honeyflock mead!', 
      ],
      'image': '/permia-carousel2.webp' 
    }, 
    { 
      'title': 'The Farm', 
      'content': [
        'The farm of the Silver Hold ensures that it\'s people are fed and well cared for during the harsher winter months. With a plethora of different, magically protected goods, the farm helps furnish both the Silver Hold\'s troops and the tavern as well. Recently security has been increased around the Silver Hold\'s farms, and nowadays, even with the extra muscle, it\'s an idyllic, lovely place to sit and relax.', 
      ],
      'image': '/permia-carousel3.webp' 
    }, 
    { 
      'title': 'Elder\'s Circle', 
      'content': [
        'Near the entrance of the Old Boughs Grove sits a ring of living thrones. This circle is where the Elder\'s of the Old Boughs meet to hold moots, discuss the problems of the land, and host delegates  of other factions. Though this is the meeting place for the Elder Council of the Old Boughs, all are welcome to seek an audience.', 
      ],
      'image': '/permia-carousel4.webp' 
    }, 
    { 
      'title': 'Infirmary', 
      'content': [
        'The Old Boughs efforts to heal the land extends out to its people as well. A hollow underneath an old tree serves as the clinic for this group of natural healers. Focused on mending bodies and minds of those hurt in this war.', 
      ],
      'image': '/permia-carousel4.webp' 
    }, 
    { 
      'title': 'Firefly Cave', 
      'content': [
        'The firefly cave is a place of peace. A place perfect for silent meditation, contemplation and relaxation. The natural bioluminescence of its residents only lend to its beauty. The cave is also home to one kind old forest troll, entrusted with inducting new members to the role of Sapling within the Old Boughs. Sit with him awhile and speak of your desires to become at one with nature to be welcome into the grove as a Sapling of the Old Boughs.', 
      ],
      'image': '/permia-carousel4.webp' 
    }, 
  ] 
};

const sewers = { 
  'title': 'City Sewers', 
  subLocations: [
    { 
      'title': 'Crow’s Nest', 
      'content': [
        'In the city of Sarkada, alcohol has been declared illegal to be possessed or to be used by the Royal Court of Sarkada. Now, how will the people in Sarkada be able to drink? The Crow’s Nest is a speakeasy, conceived by Ellie Cox, that’s secluded within the sewers - selling both drinks, food, and allowing you to rent accommodations.', 
      ],
      'image': '/permia-carousel1.webp' 
    }, 
    { 
      'title': 'Main', 
      'content': [
        'The Main Hall of the Court of Flies is where our black market is located. You can buy anything here ranging from food, supplies, weapons, armor, drugs, and of course alcohol. People sell their items here to avoid paying taxes to Sarkada or to offload their contraband. Anyone and everyone can sell their merchandise here.', 
      ],
      'image': '/permia-carousel2.webp' 
    }, 
    { 
      'title': 'Caves', 
      'content': [
        'A good place to rest up and bathe would be in the back of the Main Hall to where the springs are at. Once you’re done, you can use the clean towels to dry yourself off.', 
        'Further within the cave are for Court of Flies members only. There is a storage area to offload some of your gear you wish to keep or let other members of the Court of Flies use along with a meeting table for the members to gather and discuss.',
      ],
      'image': '/permia-carousel3.webp' 
    }, 
    { 
      'title': 'Treasury', 
      'content': [
        'Going deeper in the caves is our treasury! Gold, jewels, a throne we liberated from the nobles of Sarkada – this is where we keep all of our good stuff. There is a safe with gold in it to give you that one free EXP point, and a chest to access the faction’s bank to borrow some items, gold, or to make a contribution to the Court.', 
      ], 
      'image': '/permia-carousel4.webp' 
    }, 
    { 
      'title': 'Sewers', 
      'content': [
        'A dingy sewer underneath Sarkada. Waste goes through the waters, and it doesn’t particularly smell great. Court of Flies Can be accessed behind the residential area in Sarkada. Luckily, the Court of Flies has a magical barrier to block all the smells.', 
      ],
      'image': '/permia-carousel4.webp' 
    },
  ] 
};

const locations = {
  'royal-city': city,
  'jungle': jungle,
  'harbor': harbor,
  'mountains': mountains,
  'sewers': sewers,
}

export default locations;