const weeklyDeliveries = [
  {
    title: "Delivery Supply",
    rewards: "1XP and 20 gold per week",
    steps: [
      {
        title: "",
        content: "Once a week (Resetting on Sunday) the Coalition of the Compass NPC will have a quest for you. The NPC resides in front of the Coalition’s building, which is the big building in the middle of the desert area. Once there, simply talk to the NPC with a quest marker above their head and select “Deliveries?”.",
        image: "/permia-carousel1.webp",
      },
      {
        title: "",
        content: "You will be given a package to deliver, with a choice of three places to deliver it. The city of Sarkada’s drop-box is just inside of the stable. The Silver Hold’s drop-point is directly inside the town’s walls. Lastly, the Black Horde’s box is just in front of their barracks in the jungle.",
        image: "/permia-carousel1.webp",
      },
      {
        title: "",
        content: "Whoever has the most deliveries on the 14th of each month will earn a buff (+2 to each stat) for the next month. If Sarkada wins, the Academy of Wonders will also earn the buff. If the Silver Hold wins, the Old Boughs will earn the buff as well.",
        image: "/permia-carousel1.webp",
      },
    ]
  }
];

const starterQuest = [
  {
    title: "Welcome to the World",
    rewards: "5XP, 30 gold, Light Armor (+4 con)",
    steps: [
      {
        title: "",
        content: "This is a one time quest that aims to introduce you to the world. It begins at the NPC on the docks in the desert region. If you choose the new player portal, it’ll deposit you right in front of the NPC. The NPC will give you the quest start and tell you where to go!",
        image: "/permia-carousel1.webp",
      },
      {
        title: "",
        content: "The next stop is to the Coalition building on the same level to talk to the NPC there. She’ll direct you to head towards the mountains, which can be reached by following the path to the wooden gate and going through it. From there, you’ll go talk to the Silver Hold NPC who will be right in front of the big, wooden keep in the mountain region.",
        image: "/permia-carousel1.webp",
      },
      {
        title: "",
        content: "They’ll give you more detail and tell you to head to the city. Backtrack back to the desert and go through the portal in the stone gate this time and head towards the palace that you can reach by going straight. The NPC you want to talk to will be right inside the palace. Once you have talked to them, they’ll send you to the jungle, which can be reached by going back to the desert and through the big, red cave.",
        image: "/permia-carousel1.webp",
      },
      {
        title: "",
        content: "Finally, you’ll meet a Black Horde NPC there who will direct you back to the Coalition NPC to finish the quest.",
        image: "/permia-carousel1.webp",
      },
    ],
  },
  {
    title: "Welcome to the World",
    rewards: "5XP, 30 gold, Light Armor (+4 con)",
    steps: [
      {
        title: "",
        content: "This is a one time quest that aims to introduce you to the world. It begins at the NPC on the docks in the desert region. If you choose the new player portal, it’ll deposit you right in front of the NPC. The NPC will give you the quest start and tell you where to go!",
        image: "/permia-carousel1.webp",
      },
      {
        title: "",
        content: "The next stop is to the Coalition building on the same level to talk to the NPC there. She’ll direct you to head towards the mountains, which can be reached by following the path to the wooden gate and going through it. From there, you’ll go talk to the Silver Hold NPC who will be right in front of the big, wooden keep in the mountain region.",
        image: "/permia-carousel1.webp",
      },
      {
        title: "",
        content: "They’ll give you more detail and tell you to head to the city. Backtrack back to the desert and go through the portal in the stone gate this time and head towards the palace that you can reach by going straight. The NPC you want to talk to will be right inside the palace. Once you have talked to them, they’ll send you to the jungle, which can be reached by going back to the desert and through the big, red cave.",
        image: "/permia-carousel1.webp",
      },
      {
        title: "",
        content: "Finally, you’ll meet a Black Horde NPC there who will direct you back to the Coalition NPC to finish the quest.",
        image: "/permia-carousel1.webp",
      },
    ],
  }
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