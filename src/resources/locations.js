export const gatheringNodes = [
  {
    title: "Sarkada Farm",
    description: "These gathering nodes are all located at the Sarkadian farm. To get there, simply come through the portal to the city, turn around and go back through the gates and take a right to the staircase. You’ll see all the nodes there.",
    nodes: [
      "Corn Stalk (Gives Corn)",
      "Cocoa Tree (Gives Cocoa)",
      "Cotton Plant (Gives Cotton, Arcaellum Strands)",
      "Grain Plant (Gives Wheat, Rice)",
      "Planter (Gives Saffron, Hemp Strands)"
    ]
  },
  {
    title: "Crystal Canyon",
    description: "This is in the middle of the crystal canyon, the big crystal right off the circular platform under the Bulwark.",
    nodes: [
      "Crystal (Gives Crystal Shards, Flawless Crystal)",
    ]
  },
  {
    title: "Silver Mountains",
    description: "These will be in a couple places, all in the mountain!",
    nodes: [
      "Iron Vein (Gives Iron Scraps, Carbon, Sulfur)",
      "Gem Mine (Gives Gem, Quality Gem, Perfect Gem)",
      "Stone (Gives Flat Stone)",
      "Chicken Coop (Gives Eggs)",
      "Hops (Gives Hops)",
      "Herb Garden (Herb Blend)",
    ]
  }, 
  {
    title: "Jungle",
    description: "These are all located directly to the left of the bridge that you arrive on. Simply take a left when you arrive and walk on over",
    nodes: [
      "Bear Trap (Gives Hide Scraps, Meat, Full Hide, Flawless Hide)",
      "Tree (Gives Hewn Wood, Honey, Apples)",
      "Fishing Set (Gives Fish)",
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