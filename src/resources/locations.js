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
    title: "Jungle",
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

const jungle = { 
  'title': 'Jungle', 
  subLocations: [
    { 
      'title': 'Sublocation 1', 
      'content': 'Blah Blah Blah', 
      'image': '/permia-carousel1.webp' 
    }, 
    { 
      'title': 'Sublocation 2', 
      'content': 'Blah Blah Blah', 
      'image': '/permia-carousel2.webp' 
    }, 
    { 
      'title': 'Sublocation 3', 
      'content': 'Blah Blah Blah', 
      'image': '/permia-carousel3.webp' 
    }, 
    { 
      'title': 'Sublocation 4', 
      'content': 'Blah Blah Blah', 
      'image': '/permia-carousel4.webp' 
    }, 
  ] 
};

const bank = { 
  'title': 'City - Bank', 
  subLocations: [
    { 
      'title': 'BONK!', 
      'content': 'Blah Blah Blah', 
      'image': '/Bank.webp' 
    },
  ] 
};

const locations = {
  'jungle': jungle,
  'city-palace': { 'title': 'City - Palace', subLocations: [] },
  'city-school': { 'title': 'City - School', subLocations: [] },
  'city-dorm': { 'title': 'City - Dorm', subLocations: [] },
  'city-bank': bank,
  'city-sewer': { 'title': 'City - Sewer', subLocations: [] },
  'desert': { 'title': 'Desert', subLocations: [] },
  'mountains': { 'title': 'Mountains', subLocations: [] },
}

export default locations;