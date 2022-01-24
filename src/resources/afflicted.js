const afflicted = { 
  title: "The Afflicted",
  summary: [
    "As a whole, the Afflicted can shift, changing between their afflicted form and their normal one. This isn’t always true, as some are stuck in one form or the other, and some can’t control their changing at all. This can lead to problems, deadly ones where one can end up on the end of a blade or exiled from the city entirely. Or it can lead to exaltation and worship fully depending on how exactly you become afflicted. The afflicted, as a whole, have gained their condition by use of the crystals, either by being exposed to them, using them for magic, mining them, or anything in between.",
    "Each of them have some sort of power among them, so be cautious when approaching no matter which they are.",
  ],
  subTypes: []
};

const corrupted = {
  title: "The Corrupted",
  summary: [
    "The corrupted are a subgroup of the afflicted. These are the less fortunate souls, the ones expelled from the city for good.",
    "Some of them exhibit simple mutations. Extra fingers. An extra tail. Eyes that look the wrong way. These are the ones who are affected most by their exile, torn from their families and ripped away from everything that they held dear. The majority of these and their sympathizers live in the caves beneath the Princess Aida’s mountain hold, propped up by food and supplies from them and the Commune of the Gods.",
    "Among these are those such as merfolk, and avians that previously didn’t have wings, being from mythology that were neither evil nor good in the end. A mostly peaceful life on their own lies in wait for these folk, though every so often they’re roused to battle just as any other.",
    "The other side of the Corrupted coin has it so much worse. These were the ones transformed into beasts, into monsters. Werewolves, vampires, shapeshifters and flesh eaters, all fall under this umbrella. Eldritch abominations galore, freakish things that the normal populace can’t stand to look like, every single one of them is driven out of the city.",
    "They rest now inside of a forest camp, amongst ruins, an outsider leading them and planning their next move…",
  ],
  subTypes: [
    {
      name: "Mutant",
      description: "Your appearance has changed, perhaps irrevocably. You may be able to hide it, or your change may have gone past what you can deal with.",
      stats: "-1 Con",
      skill: {
        name: "Mud Fling",
        cost: "15 stamina",
        scaling: "Strength",
        description: "Weak attack",
      }
    },
    {
      name: "Skintaker",
      description: "Your appearance may have changed, but worst of all, you have a hunger, a hunger for flesh, one that can't be sated no matter how hard you try.",
      stats: "-1 Con",
      skill: {
        name: "Devour",
        cost: "20 stamina, 40 mana",
        scaling: "Strength or Dexterity (higher of the two)",
        description: "Medium damage attack with a small heal based on damage dealt",
      },
    },
    {
      name: "Voidsent",
      description: "The Crystals let you see something you shouldn't have, something maddening, something wrong. It's increased your capacity to understand the world, but those around you can't comprehend your ramblings.",
      stats: "-1 Con",
      skill: {
        name: "Future Sight",
        cost: "20 stamina, 40 mana",
        description: "Gain +3 in all stats and heal 40 hp",
      },
    },
    {
      name: "Damned",
      description: "The crystals have warped your mind and damned you in the eyes of the state. Yet. your words are strangely hypnotic, able to lure poor, unsuspecting victims to your will.",
      stats: "-1 Con",
      skill: {
        name: "Seduce",
        cost: "20 mana",
        description: "Debuff enemy stats by -1 and chr by -3 and health by 20",
      },
    },
  ]
}

const blessed = {
  title: "The Blessed",
  summary: [
    "The Blessed as the other side of the Corrupted. Instead of gaining attributes worthy of scorn, they instead have been given things worth worship, in the city’s mind at least. Images of angel wings and halos abound, of blessed beings meting out affection and love wherever they go.",
    "The simple idea of an Angel isn’t the only one to be Blessed. Nature spirits from the sands and the forests now seemingly walk through the city, avatars of the gods and beatific individuals that one can hardly begin to appreciate. They may be enigmatic at times, but that doesn’t stop them from being near universally loved by all. There are even water spirits that show up, bringing enough for all to drink when normally it’s rationed and controlled.",
    "As a whole, these sorts are kind and charitable, sweet and willing to help keep things peaceful. They are welcome in Sarkada without question, and may go wherever they please - though the Horde may eye them with suspicion at first.",
  ],
  subTypes: [
    {
      name: "Hallowed",
      description: "You have been blessed with angelic features, to the point where some consider you a living saint.",
      stats: "-1 Con",
      skill: {
        name: "Invigorate",
        cost: "30 mana",
        scaling: "Wisdom or Intelligence (higher of the two)",
        description: "Buff a target with +1 to con and medium heal",
      },
    },
    {
      name: "Oracle",
      description: "Your mind has been expanded by the gods themselves! Told fortuitous portends of the future,  many seek you to tell their future.",
      stats: "-1 Con",
      skill: {
        name: "Future Sight",
        cost: "20 stamina, 40 mana",
        description: "Gain +3 in all stats and heal 40 hp",
      },
    },
    {
      name: "God's Blessed",
      description: "The gods have blessed your body! With Strength and Dexterity of no other!",
      stats: "-1 Con",
      skill: {
        name: "Overpower",
        cost: "15 stamina",
        scaling: "Strength",
        description: "Deals medium damage and debuffs str and dex by -3",
      },
    },
    {
      name: "Ascended",
      description: "You have already begun your ascension to the next realm, and as such as starting to lose your grip on others.",
      stats: "-1 Con",
      skill: {
        name: "Ascended Form",
        cost: "60 mana, 30 stamina",
        description: "Gain 10 defenses",
      },
    },
  ]
}

const shifters = {
  "afflicted": afflicted,
  "corrupted": corrupted,
  "blessed": blessed,
}

export default shifters;