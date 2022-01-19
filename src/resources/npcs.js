const general = [
  {
    title: "Alchemist/Potion Seller",
    location: "Behind the Blue Bank in Sarkada",
    image: "",
    description: "Do you require the strongest potions?"
  },
  {
    title: "Food and Drink Seller",
    location: "",
    image: "",
    description: "Thirsty? Hungry? Looking for small, short term buffs? This one can sort you out in the Sarkadian city market!"
  },
  {
    title: "Banker",
    location: "",
    image: "",
    description: "Wanna open a bank account? Or get some starter titles? See the teller at the bank! Located inside of the Sarkadian bank (the blue building!)."
  },
  {
    title: "Coalition of the Compass NPC",
    location: "",
    image: "",
    description: "The Coalition NPC stands in front of the Coalition building and is ready to get you set up in their faction as well as direct you on the starting quest!"
  },
  {
    title: "Docks NPC",
    location: "",
    image: "",
    description: "The Docks NPC is here to help you get started in the world and give you your first quest. You can find them by going to the docks, or going through the “New Players start here” portal!"
  },
  {
    title: "Silver Hold NPC",
    location: "",
    image: "",
    description: "The Silver Hold NPC lives in the mountains, right outside of the main keep. They’ll be part of the first quest and around to help you get set up inside of the Silver Hold."
  },
  {
    title: "Black Horde NPC",
    location: "",
    image: "",
    description: "The Black Horde NPC is at the entrance to the jungle, right across the bridge that leads you to it. This eccentric individual can teach you the Daggerspell class as well as get you into the Black Horde. They’ll also help you out on your first quest!"
  },
  {
    title: "Old Boughs NPC",
    location: "",
    image: "",
    description: "The Old Boughs NPC is a kindly druid who wants you to live well and happy. Here, you can get the druid class as well as join the Old Boughs. He’s hiding in a cave in the Old Boughs territory!"
  },
  {
    title: "House of Sarkada NPC (Xerses)",
    location: "",
    image: "",
    description: "Wanna join the House of Sarkada? Or finish your first quest? See Aziza to get in all of it! They’ll be at the front of the palace waiting for you."
  },
  {
    title: "Blacksmith/Leatherworker/Armor NPC",
    location: "",
    image: "",
    description: "The blacksmith sells his wares in the Silver Hold’s territory, find his forge for some nice, starting armor and the Blacksmith crafting class."
  },
  {
    title: "Jeweler NPC",
    location: "",
    image: "",
    description: "The jeweler has their precious wares in the city’s market, with the guards helping them protect it. Come on in and get the Jeweler class here!"
  },
  {
    title: "Enchanter/Tailor/Chef NPCs",
    location: "",
    image: "",
    description: "The two of these are both inside of the Coalition building inside of the market. The Chef is in the kitchen in the same building. Come get your classes here!"
  },

];

const classGivers = [
  {
    title: "Assassin/Poisoner/Rogue",
    location: "",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/926637150433312788/Thief_Sarkada_001.png",
    description: "Look for this skeezy man in a back alley of Sarkada. These types of folk never want to be noticed, but if you want these classes, find this one! (Requires 13 Dexterity)"
  },
  {
    title: "Warrior/Barbarian",
    location: "",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/926637151058280468/Warrior_coalition_building_001.png",
    description: "Find a little cat hyping you up by the coalition’s building! Impress them and you can be a warrior and barbarian! (Requires 13 Strength)"
  },
  {
    title: "Cleric/Paladin",
    location: "",
    image: "",
    description: "Find this holy man in the midst of the deserts on a pilgrimage for his faith. Sit and pray with him to speak to your god and maybe earn their favor! (Requires 13 Wisdom)"
  }, 
  {
    title: "Bard",
    location: "",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/926637151255425074/Bard_Silverhold_Bar_001.png",
    description: "The Silver Hold’s Lost Lamb tavern can give you the bard class. Get up on the stage and show your best! (13 Charisma required)"
  },
  {
    title: "Elementalist/Battlemage",
    location: "",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/926637151528034304/Battlemage_old_boughs_camp_001.png",
    description: "The Old Boughs bonfire holds many secrets of the world. If you think you’re ready, come and gaze into it and find what you can. (13 Intelligence required)"
  },
  {
    title: "Dancer",
    location: "",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/926637149351182366/Dancer_Spa_001.png",
    description: "The Bath House has many pleasures, including dancers for their bathers. The dancers here have many skills, and if you show your worth, you can join them too! (13 Charisma required)"
  },
  {
    title: "Hunter",
    location: "",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/926637149925826570/Sampler_Archer_Sarkada2_001.png",
    description: "Sarkada’s training range is fit for royalty, and that includes their archery ranges. Find a bow here and you can join their elite ranks of archers! (13 Dexterity required)"
  },
  {
    title: "Druid",
    location: "",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/926637149615456266/Druid_old_bough_Cave_001.png",
    description: "Find the druid in the woods in the mountains. Search for the cave of fireflies and find a little friend waiting for you! (13 Wisdom required)"
  },
  {
    title: "Daggerspell",
    location: "",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/926637149061787679/daggerspell_jungle_001.png",
    description: "You can find the Daggerspell at the Black Horde NPC giver! This will be right at the front of the jungle. (13 Dexterity required)"
  },
  {
    title: "Hemomancer/Necromancer/Warlock",
    location: "",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/926637150823407687/Warlock_Pier_001.png",
    description: "Find the Hemomancer giver inside of the dock's secret shack! Underneath the starting point will lead you astray. (13 Intelligence required)"
  },
];

const etcGivers = [
  {
    title: "Coalition of the Compass XP Giver",
    location: "",
    image: "",
    description: "The crystal in the middle of the Coalition’s base will give you XP if you’re in the faction."
  },
  {
    title: "Silver Hold XP Giver",
    location: "",
    image: "",
    description: "The flag next to the throne in the Silver Hold’s keep will give you XP if you’re in the faction."
  },
  {
    title: "Houses of Sarkada XP Giver",
    location: "",
    image: "",
    description: "This XP giver is in one of the crystals right beside the throne in the throne room!"
  }, 
  {
    title: "Academy of Wonder XP Giver",
    location: "",
    image: "",
    description: "The great crystal chandelier in the entryway of the Academy will provide your XP here!"
  },
  {
    title: "The Black Horde XP Giver",
    location: "",
    image: "",
    description: "For the Black Horde, the ritual skull right in front of their barracks will give you XP!"
  },
  {
    title: "Affliction Giver",
    location: "",
    image: "",
    description: "This will give you the different afflicted statuses, both corrupted and blessed! It will be the big crystal off the circular platform at the bottom of the crystal mine in the desert!"
  },
];

const npcs = {
  "general-npcs": { title: "General NPCs", content: general },
  "class-givers": { title: "Class Givers", content: classGivers },
  "etc-givers": { title: "Etc Givers", content: etcGivers },
}

export default npcs;