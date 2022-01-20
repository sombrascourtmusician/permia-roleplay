const weeklyDeliveries = [
  {
    title: "Delivery Supply",
    rewards: "1XP and 20 gold per week",
    steps: [
      {
        title: "",
        content: "Once a week (Resetting on Sunday) the Coalition of the Compass NPC will have a quest for you. The NPC resides in front of the Coalition’s building, which is the big building in the middle of the desert area. Once there, simply talk to the NPC with a quest marker above their head and select “Deliveries?”.",
        image: "",
        dialogue: "",
      },
      {
        title: "",
        content: "You will be given a package to deliver, with a choice of three places to deliver it. The city of Sarkada’s drop-box is just inside of the stable. The Silver Hold’s drop-point is directly inside the town’s walls. Lastly, the Black Horde’s box is just in front of their barracks in the jungle.",
        image: "",
        dialogue: "",
      },
      {
        title: "",
        content: "Whoever has the most deliveries on the 14th of each month will earn a buff (+2 to each stat) for the next month. If Sarkada wins, the Academy of Wonders will also earn the buff. If the Silver Hold wins, the Old Boughs will earn the buff as well.",
        image: "",
        dialogue: "",
      },
    ]
  }
];

const starterQuest = [
  {
    title: "Welcome to the World",
    rewards: "5XP, 30 gold, Light Armor",
    steps: [
      {
        title: "",
        content: "This is a one time quest that aims to introduce you to the world. It begins at the NPC on the docks in the desert region. If you choose the new player portal, it’ll deposit you right in front of the NPC. The NPC will give you the quest start and tell you where to go!",
        dialogue: "I haven't seen you around, so that must mean you're new here! Wanna help a girl out for some coin and a bit of an introduction?",
        image: "/npcs/docks-worker.webp",
      },
      {
        title: "",
        content: "The next stop is to the Coalition building on the same level to talk to the NPC there. She’ll direct you to head towards the mountains, which can be reached by following the path to the wooden gate and going through it. From there, you’ll go talk to the Silver Hold NPC who will be right in front of the big, wooden keep in the mountain region.",
        dialogue: "Package? Oh. From the docks. Yes. Right. I'll take that. While you're at it, take this up to the Silver Hold, behind you towards the wooden gate, go straight up to the castle up in the mountains. Can't miss it.",
        image: "/npcs/faction-coalition.jpg",
      },
      {
        title: "",
        content: "They’ll give you more detail and tell you to head to the city. Backtrack back to the desert and go through the portal in the stone gate this time and head towards the palace that you can reach by going straight. The NPC you want to talk to will be right inside the palace. Once you have talked to them, they’ll send you to the jungle, which can be reached by going back to the desert and through the big, red cave.",
        dialogue: "A frustrated man stands before you, checking some document against the contents of crates of supplies. His eyes brighten as you approach, lingering on your hands.",
        image: "/npcs/faction-silver-hold.jpg",
      },
      {
        title: " ",
        content: " ",
        dialogue: "A man, a bailiff by his appearance, is monitoring the stockpile of goods behind the gate. He examines a piece of parchment in his hand, looks at you and speaks in a stern tone of voice. '...New here? You should join us, the Royal Sarkadian Guard. We're paid well and keep the rebels from returning us to starving to death in the desert. Give it a thought, yea? Anyways, what's your name?",
        image: "/npcs/faction-sarkada.jpg",
      },
      {
        title: "",
        content: "Finally, you’ll meet a Black Horde NPC there who will direct you back to the Coalition NPC to finish the quest.",
        dialogue: "Deep in the jungles of Permia, a beast spots you while you're searching. 'Lost little lamb, what brings you to the jungle, hmm? Haven't you heard that they're unsafe?",
        image: "/npcs/faction-horde.png",
      },
      {
        title: " ",
        content: " ",
        dialogue: "The woman seemed impatient after your long journey, staring at you with clear frustration. 'Finally you're back. Did you at least make the delivery?",
        image: "/npcs/docks-worker.webp",
      }
    ],
  },
];

const quests = {
  "starter": {
    title: "Starting Quest",
    content: starterQuest
  },
  "weekly-deliveries": { 
    title: "Weekly Deliveries",
    content: weeklyDeliveries
  },
}

export default quests;