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
      'title': 'The City Itself', 
      'content': [
        "A beacon of prosperity in the harsh desert of Al-Sarkaria, Sarkada exists in opulence itself. Water features in the middle of the desert are the pinnacle of excess, made all the more eye-catching with the bright, colorful buildings. Home to the Academy of Wonders, Sarkada has seen itself become a powerhouse in magic and technology both. Come for the amenities, stay because you’ve been arrested."
      ], 
      'image': '/locations/city-map.jpg' 
    }, 
    { 
      'title': 'Bank', 
      'content': [
        "After one visits the Bank of Sarkada, one may see the rest of the city as decrepit and poor. The height of wealth, the bank deals in thousands upon thousands of gold every day, depositing and withdrawing, trading and facilitating the city’s many taxes. While the building itself may be small, the riches inside could not be more vast, all packaged together with a friendly clerk and kind people - that may be the biggest surprise of it all.",
        "((OOC Note: Inside the bank you can store your gold or buy titles!))"
      ], 
      'image': '/locations/city-bank.jpg' 
    }, 
    { 
      'title': 'Market', 
      'content': [
        "Never a dull moment in the market of Sarkada. You’ll have to travel hundreds and hundreds of miles to find anywhere as busy, and even further to find anywhere near the same breadth of goods. The smell of hookah and fresh baked goods fills the air, as does the sound of chatter and bartering on every side. If you’re looking for a good time, the market of Sarkada can provide that and leave you with a souvenir to take home with you."
      ], 
      'image': '/locations/city-market.png' 
    }, 
    { 
      'title': 'Palace', 
      'content': [
        "The seat of power itself, the palace of Sarkada looms above the rest of the city in it’s splendor and grandeur both. The throne room boasts thousands of gems on it’s own, with a throne that seems to radiate power from within. The Parthians rule from here, and every word they speak becomes the iron will of Sarkadian law. The guards share the palace as well, with a barracks and their prison on the other side from the noble’s quarters and throne room. Perhaps if you’re lucky, you’ll catch a glimpse of the King himself!"
      ], 
      'image': '/locations/city-palace.webp' 
    }, 
    { 
      'title': 'School', 
      'content': [
        "The Academy of Wonders plays host to all the great minds of Sarkada. Filled with amazing inventions and cutting edge magic, the Academy is the go-to destination for studious scholars of all types. With inventions such as refrigeration, modern golems, and more, there’s always something new to discovery at the Academy."
      ], 
      'image': '/locations/city-school.jpg' 
    }, 
    { 
      'title': 'Dorms', 
      'content': [
        "Even the brightest minds have to sleep sometimes, and the Dorms are perfect for that. With ample area to play and relax, as well as cook, the dorms are an all inclusive place to rest of any student climbing the ranks of the Academy. Featuring games and cooled air, the dorms are welcoming you in today!"
      ], 
      'image': '/locations/city-school-bunks.jpg' 
    }, 
    { 
      'title': 'Rentals', 
      'content': [
        "The residential sector of Sarkada is home to many of its citizens. While not all of them can afford such lavish and well positioned houses, the ones that can live life in the city and live it well. Each of them is home to a family or individual all on it’s own, with their own security systems and amenities.",
        "((OOC Note: These are rentals! Please make sure you have permission to enter or else you’ll be breaking a rule!))"
      ], 
      'image': '/locations/city-rentals.jpg' 
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
      'image': '/locations/jungle-rentals.jpg' 
    }, 
    { 
      'title': 'Black Horde camp itself, walk up and down the ramp', 
      'content': [
        'The Black Horde camp itself hosts the monsters, the afflicted who have struck out on their own and lived on their instincts. An evil abode, it is nonetheless beautiful in it\'s own way. On the left, the ritual tower looms, with an altar used for nefarious deeds, surrounded by crystals. Opposite, another ziggurat hosts the throne room itself, where the Chief of the Horde carries out their decrees. In the distance, you can see the entrance to the slave pens and hear the wails from within, while above them, a surprising clinic and a few homes rest.',
      ], 
      'image': '/locations/jungle.jpg' 
    }, 
    { 
      'title': 'On top of the slave pens, to the back.', 
      'content': [
        'Surprisingly, even the Horde bleed. When they need to rest, the Horde come here to get their wounds treated. Not the cleanest hospital in the world, but it could have been worse. Come here if you must, though if you aren\'t Horde and end up here... be worried.',
      ], 
      'image': '/locations/jungle-medical.jpg' 
    }, 
    { 
      'title': 'At the back of the Black Horde\'s base, inside of cages.', 
      'content': [
        'Oh the slaves pens... where the truly wretched go to spend the rest of their days. If you find yourself here with a collar around your neck, give up the last of your hope as it has been stolen from you, and prepare yourself from the worst. If, for some reason, you wish to make your way here, you\'ll find a small entrance under a stone arch near the back of the Horde base. But be careful, or you might end up a permanent tenant.',
      ], 
      'image': '/locations/jungle-slave-pens.jpg' 
    }, 
    { 
      'title': 'Atop the left ziggurat as you come in to the jungle', 
      'content': [
        'The ritual stone has been used for things that would make even the most well versed warrior cringe. It\'s where the Horde do their forcible afflictions, where their slaves are made, and where even more eldritch abominations are created. Stay away unless you\'re wishing to join them, or you wish to become afflicted yourself.',
      ], 
      'image': '/locations/jungle-altar.jpg' 
    },
    { 
      'title': 'In the right ziggurat, at the very top.', 
      'content': [
        'The Black Horde\'s throne room is where their chief makes their decrees and leads their troops. This is where the orders are given, where raids and enslavements are planned. Here, you\'ll see many stolen goods, from the Coalition and elsewhere. Tread careful in their seat of power, as it\'s strictly off limits to any outsiders.',
      ], 
      'image': '/locations/jungle-throne.jpg' 
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
      'image': '/locations/lantuga.jpg' 
    }, 
    { 
      'title': 'Lantuga\'s Hold', 
      'content': [
        'Within the structure there are shops, a tavern, homes, and a beautiful cherry blossom tree in the center. A crystal had been planted there to see how it would grow, a test, amazingly the bit of rock managed to maintain its power and glowed faintly. Newcomers seeking to find their fortune may be hired to work there and will be fed by the kitchen inside and allowed to stay in the bunks. On the top floor there are rooms for rent and a large room hidden in the back, the governor’s quarters', 
        '((Tailor and enchanter can be found within))',
      ],
      'image': '/locations/lantuga-hold.jpg' 
    }, 
    { 
      'title': 'The Mines', 
      'content': [
        'The crystal fissure and the mining operation are overseen by a large bulwark. Powered by a massive crystal that had been blasted from the land when first opening the mine, the entire area is protected from the magical discharges that come from mining the crystals as well as keep the bulwark elevated so that the weaponry can defend the claim laid upon it. The vibrant crystals found in the fissure are some of the most potent in the land, close to a large mother crystal, they are perfect for all those who seek to use their power.', 
      ],
      'image': '/locations/lantuga-mines.jpg' 
    }, 
    { 
      'title': 'Lantuga Docks', 
      'content': [
        'Built with wood brought over on boats and from what little trees they were able to harvest from the jungle areas not closely defended by the Horde. Small shacks are all that remain from when this was the home of the workers who had come with the coalition. Boats still come in with shipments from other lands.', 
      ],
      'image': '/locations/lantuga-docks.jpg' 
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
      'image': '/locations/keep-map.jpg' 
    }, 
    { 
      'title': 'The Tavern', 
      'content': [
        'The Lost Lamb tavern is home to a trio of owners, Thalia, Cherub, and Toril. It serves a variety of food and beverages, and features nightly entertainment of music and dancing. Come here for a good time and light, fun entertainment! Try the Honeyflock mead!', 
      ],
      'image': '/locations/keep-tavern.jpg' 
    }, 
    { 
      'title': 'The Farm', 
      'content': [
        'The farm of the Silver Hold ensures that it\'s people are fed and well cared for during the harsher winter months. With a plethora of different, magically protected goods, the farm helps furnish both the Silver Hold\'s troops and the tavern as well. Recently security has been increased around the Silver Hold\'s farms, and nowadays, even with the extra muscle, it\'s an idyllic, lovely place to sit and relax.', 
      ],
      'image': '' 
    }, 
    { 
      'title': 'Elder\'s Circle', 
      'content': [
        'Near the entrance of the Old Boughs Grove sits a ring of living thrones. This circle is where the Elder\'s of the Old Boughs meet to hold moots, discuss the problems of the land, and host delegates  of other factions. Though this is the meeting place for the Elder Council of the Old Boughs, all are welcome to seek an audience.', 
      ],
      'image': '/locations/keep-elders-circle.png' 
    }, 
    { 
      'title': 'Infirmary', 
      'content': [
        'The Old Boughs efforts to heal the land extends out to its people as well. A hollow underneath an old tree serves as the clinic for this group of natural healers. Focused on mending bodies and minds of those hurt in this war.', 
      ],
      'image': '/locations/keep-infirmary.png' 
    }, 
    { 
      'title': 'Firefly Cave', 
      'content': [
        'The firefly cave is a place of peace. A place perfect for silent meditation, contemplation and relaxation. The natural bioluminescence of its residents only lend to its beauty. The cave is also home to one kind old forest troll, entrusted with inducting new members to the role of Sapling within the Old Boughs. Sit with him awhile and speak of your desires to become at one with nature to be welcome into the grove as a Sapling of the Old Boughs.', 
      ],
      'image': '/locations/keep-firefly-cave.png' 
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
      'image': '/locations/sewers-crows-nest.jpg' 
    }, 
    { 
      'title': 'Main Hall', 
      'content': [
        'The Main Hall of the Court of Flies is where our black market is located. You can buy anything here ranging from food, supplies, weapons, armor, drugs, and of course alcohol. People sell their items here to avoid paying taxes to Sarkada or to offload their contraband. Anyone and everyone can sell their merchandise here.', 
      ],
      'image': '/locations/sewers-main-hall.jpg' 
    }, 
    { 
      'title': 'Caves', 
      'content': [
        'A good place to rest up and bathe would be in the back of the Main Hall to where the springs are at. Once you’re done, you can use the clean towels to dry yourself off.', 
        'Further within the cave are for Court of Flies members only. There is a storage area to offload some of your gear you wish to keep or let other members of the Court of Flies use along with a meeting table for the members to gather and discuss.',
      ],
      'image': '/locations/sewers-caves.jpg' 
    }, 
    { 
      'title': 'Treasury', 
      'content': [
        'Going deeper in the caves is our treasury! Gold, jewels, a throne we liberated from the nobles of Sarkada – this is where we keep all of our good stuff. There is a safe with gold in it to give you that one free EXP point, and a chest to access the faction’s bank to borrow some items, gold, or to make a contribution to the Court.', 
      ], 
      'image': '/locations/sewers-treasury.jpg' 
    }, 
    { 
      'title': 'Sewers', 
      'content': [
        'A dingy sewer underneath Sarkada. Waste goes through the waters, and it doesn’t particularly smell great. Court of Flies Can be accessed behind the residential area in Sarkada. Luckily, the Court of Flies has a magical barrier to block all the smells.', 
      ],
      'image': '' 
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