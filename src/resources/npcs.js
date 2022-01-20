const general = [
  {
    title: "Alchemist/Potion Seller",
    image: "/npcs/general-alchemist.jpg",
    description: "Do you require the strongest potions? Find this seller behind the Blue Bank in Sarkada."
  },
  {
    title: "Food and Drink Seller",
    location: "",
    image: "/npcs/general-food-seller.jpg",
    description: "Thirsty? Hungry? Looking for small, short term buffs? This one can sort you out in the Sarkadian city market!"
  },
  {
    title: "Banker",
    image: "/npcs/general-banker.jpg",
    description: "Wanna open a bank account? Or get some starter titles? See the teller at the bank! Located inside of the Sarkadian bank (the blue building!)."
  },
  {
    title: "Coalition of the Compass NPC",
    image: "/npcs/faction-coalition.jpg",
    description: "The Coalition NPC stands in front of the Coalition building and is ready to get you set up in their faction as well as direct you on the starting quest!"
  },
  {
    title: "Docks NPC",
    image: "/npcs/docks-worker.webp",
    description: "The Docks NPC is here to help you get started in the world and give you your first quest. You can find them by going to the docks, or going through the “New Players start here” portal!"
  },
  {
    title: "Silver Hold NPC",
    image: "/npcs/faction-silver-hold.jpg",
    description: "The Silver Hold NPC lives in the mountains, right outside of the main keep. They’ll be part of the first quest and around to help you get set up inside of the Silver Hold."
  },
  {
    title: "Black Horde NPC",
    image: "/npcs/faction-horde.png",
    description: "The Black Horde NPC is at the entrance to the jungle, right across the bridge that leads you to it. This eccentric individual can teach you the Daggerspell class as well as get you into the Black Horde. They’ll also help you out on your first quest!"
  },
  {
    title: "Old Boughs NPC",
    image: "/npcs/faction-old-boughs.png",
    description: "The Old Boughs NPC is a kindly druid who wants you to live well and happy. Here, you can get the druid class as well as join the Old Boughs. He’s hiding in a cave in the Old Boughs territory!"
  },
  {
    title: "House of Sarkada NPC (Xerses)",
    image: "/npcs/faction-sarkada.jpg",
    description: "Wanna join the House of Sarkada? Or finish your first quest? See Aziza to get in all of it! They’ll be at the front of the palace waiting for you."
  },
  {
    title: "Blacksmith/Leatherworker/Armor NPC",
    image: "/npcs/general-blacksmith.jpg",
    description: "The blacksmith sells his wares in the Silver Hold’s territory, find his forge for some nice, starting armor and the Blacksmith crafting class."
  },
  {
    title: "Jeweler NPC",
    image: "/npcs/general-jeweler.jpg",
    description: "The jeweler has their precious wares in the city’s market, with the guards helping them protect it. Come on in and get the Jeweler class here!"
  },
  {
    title: "Enchanter/Tailor/Chef NPCs",
    image: "/npcs/general-tailor.jpg",
    description: "The two of these are both inside of the Coalition building inside of the market. The Chef is in the kitchen in the same building. Come get your classes here!"
  },

];

const classGivers = [
  {
    title: "Assassin/Poisoner/Rogue",
    image: "/npcs/giver-thief.webp",
    description: "Look for this skeezy man in a back alley of Sarkada. These types of folk never want to be noticed, but if you want these classes, find this one! (Requires 13 Dexterity)"
  },
  {
    title: "Warrior/Barbarian",
    image: "/npcs/giver-warrior.jpg",
    description: "Find a little cat hyping you up by the coalition’s building! Impress them and you can be a warrior and barbarian! (Requires 13 Strength)"
  },
  {
    title: "Cleric/Paladin",
    image: "/npcs/cleric.jpg",
    description: "Find this holy man in the midst of the deserts on a pilgrimage for his faith. Sit and pray with him to speak to your god and maybe earn their favor! (Requires 13 Wisdom)"
  }, 
  {
    title: "Bard",
    image: "/npcs/giver-bard.png",
    description: "The Silver Hold’s Lost Lamb tavern can give you the bard class. Get up on the stage and show your best! (13 Charisma required)"
  },
  {
    title: "Elementalist/Battlemage",
    image: "/npcs/giver-battlemage.png",
    description: "The Old Boughs bonfire holds many secrets of the world. If you think you’re ready, come and gaze into it and find what you can. (13 Intelligence required)"
  },
  {
    title: "Dancer",
    image: "/npcs/giver-dancer.png",
    description: "The Bath House has many pleasures, including dancers for their bathers. The dancers here have many skills, and if you show your worth, you can join them too! (13 Charisma required)"
  },
  {
    title: "Hunter",
    image: "/npcs/giver-hunter.png",
    description: "Sarkada’s training range is fit for royalty, and that includes their archery ranges. Find a bow here and you can join their elite ranks of archers! (13 Dexterity required)"
  },
  {
    title: "Druid",
    image: "/npcs/giver-druid.png",
    description: "Find the druid in the woods in the mountains. Search for the cave of fireflies and find a little friend waiting for you! (13 Wisdom required)"
  },
  {
    title: "Daggerspell",
    image: "/npcs/giver-daggerspell.png",
    description: "You can find the Daggerspell at the Black Horde NPC giver! This will be right at the front of the jungle. (13 Dexterity required)"
  },
  {
    title: "Hemomancer/Necromancer/Warlock",
    image: "/npcs/giver-warlock.png",
    description: "Find the Hemomancer giver inside of the dock's secret shack! Underneath the starting point will lead you astray. (13 Intelligence required)"
  },
];

const npcs = {
  "general-npcs": { title: "General NPCs", content: general },
  "class-givers": { title: "Class Givers", content: classGivers },
}

export default npcs;