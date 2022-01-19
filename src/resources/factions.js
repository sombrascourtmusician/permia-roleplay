const academy = {
  otherNames: "The Academy, Mages' Guild, Sorcerers' Guild, the Magi",
  image: "",
  brief: "The premier educational and research facility in Permia. They seek to understand the magic in the world around them and cultivate it to invent new and better ways of life for the city of Sarkada. However, their goals cover a darkness within.",
  descriptions: [
    "The Academy of Wonders is both an institute of learning and a research center for all aspects of magic, but with special focus on Permian Crystals and their effects.  Founded by an aspiring Magus of the name Zu'ban shortly after the crystals were first discovered, the Academy is a free realm for wizards of all, where no form of magic is forbidden. After all, there is no bad magic - only bad practitioners. By the success borne of this dubious axiom not only has the Academy brought great wealth and fortune to Sarkada as a byproduct of it's own search for power, those of the Academy also consider themselves the best chance Permia has of overcoming the current plague of corruption. This has led them to consider themselves above reproach and become insufferably justified in their actions, for the ends justify the means. Hidden in secret laboratories, they conduct cruel experiments on the Afflicted in search of ways to cure them or destroy them.",
  ], 
  alignment: "A largely lawful-evil faction, though some good (albeit misguided) souls might still find themselves pulled into the institution.",
  perceptions: [
    {
      title: "The Black Horde",
      link: "black-horde",
      body: "The only good use for a living member of the horde is in a cage with their mind enthralled by a geas, and the better use for one is already deceased and on a dissection table."
    },
    {
      title: "Coalition of the Compass",
      link: "coalition-of-the-compass",
      body: "Similarly minded people to ourselves, the Coalition are on the forefront of a new era, expansion, growth and rational approaches to problems. Moreover, the Coalition is keen on buying the products of our research and selling much needed exotic supplies to aid their research."
    },
    {
      title: "Court of Flies",
      link: "court-of-flies",
      body: "It’s useful to have friends in low places. Some avenues of research need unorthodox components, things that good people shouldn’t ever worry about. A body part here, an unspeakable reagent there; the Court is a door to this world."
    },
    {
      title: "The Old Boughs",
      link: "old-boughs",
      body: "Their knowledge of magic is of great interest to the Academy, but their backwards ways are an affront to progress."
    },
    {
      title: "Houses of Sarkada",
      link: "houses-of-sarkada",
      body: "While the Academy cares not for the political scuffle over rulers, the Guard are our protectors, our guardians, and keep the Academy safe during our critical research. They are reliable allies, and they too work for the betterment of the kingdom."
    },
    {
      title: "Silver Hold",
      link: "silver-hold",
      body: "The princess has supporters among the academy, those who still hold she is the rightful ruler of the kingdom, though this support is vanishing rapidly. Her desire to stop the Academy’s research is an affront to progress, and if her people have their way, Sarkada will be back in tents herding goats in the desert."
    },
  ],
  giver: {
    title: "Academy of Wonders XP Giver",
    location: "The glowing crystals dangling in the main entrance are not just for decoration. Click these each Sunday to gain your faction XP.",
    image: "",
  },
  bank: {
    title: "Academy of Wonders Bank",
    location: "Sharing resources and knowledge between scholars helps progress our understanding of our world. To share your crafted items with others, go to the book shelf in the dorms and deposit or pick up something you need.",
    image: "/locations/faction-academy-bank.webp",
  },
  reset: {
    title: "Academy of Wonders Reset Point",
    location: "Neatly tucked inside of the luxurious dorm rooms you will find the reset point for your faction. A simple table to click on.",
    image: "/locations/faction-academy-reset.webp",
  },
  joiner: {
    title: "Academy of Wonders Faction Joiner",
    location: "A well dressed man outside of the building is eager to let you sign up for courses or bring your knowledge to the school.",
    image: ""
  }
}

const blackHorde = {
  otherNames: "The Horde, Furies, Monsters, Devourers",
  image: "",
  brief: "Vicious rebels who chose violence and force as their way. Bringing chaos and fear to the land that shunned them. Be they misunderstood creatures or vile beasts, they keep to their tribe of afflicted, attacking or enslaving those who are misfortune enough to cross them.",
  descriptions: [
    "The Black Horde is a collection of afflicted deviants, warriors, and outcasts. Formed originally of the outcasts from Sarkada, they were rejected and feared for their corruption. They are a close community but wary of the world outside the Jungle and its visitors. While many refer to them as monsters, and uncultured beasts, they see themselves as the mighty claws of revolution and evolution. They will stop at nothing to avenge those that have been wronged. Their sole mission is to crush those who cast them out, the Houses of Sarkada. They will bring violence and force slavery upon those foolish to stand against them and believe that affliction is the higher form of being, to be of their kin, you must be afflicted or you will be enslaved.",
  ], 
  alignment: "With their violent and destructive ways, the Black Horde is best described as chaotic evil. While not all within will enact such barbaric practices, their culture is one of cruelty and domination.",
  perceptions: [
    {
      title: "Academy of Wonders",
      link: "academy-of-wonders",
      body: "The Academy are to be considered exploiters of the world, the holders of the methods of reproduction, they aim to keep using the cursed crystals, and worse, to develop new methods of exploiting those crystals. They are absolutely foes."
    },
    {
      title: "Coalition of the Compass",
      link: "coalition-of-the-compass",
      body: "While their supplies are useful, the Horde does not necessarily find it beneficial to make enemies of the Coalition. Still, their caravans are not uncommon targets for raiding and many of us think the Coalition’s actions would not be very different from Sarkada if they were given the chance. They are perhaps less discriminating against the Corrupted, but no less damaging to the world."
    },
    {
      title: "Court of Flies",
      link: "court-of-flies",
      body: "Unlike most of Sarkada, the Black Horde does not necessarily despise the Court, though it would be a stretch to consider them friends. The unscrupulous court can be used for our gain. whether to hide our people, help them locate targets, or to even purchase food for some more of our exotic hungers."
    },
    {
      title: "The Old Boughs",
      link: "old-boughs",
      body: "The Horde is aware the druids of the Bough are wary of our existence, but their beliefs at least tend to align with ours. Nature must be protected and many of the Horde aim to learn from the Boughs traditions and ways."
    },
    {
      title: "Houses of Sarkada",
      link: "houses-of-sarkada",
      body: "The Black Horde considers the Royal Guard to be little more than obstacles, defenders of our sworn enemies, protectors of an unjust order and weak fools hiding behind armor and walls."
    },
    {
      title: "Silver Hold",
      link: "silver-hold",
      body: "The Hold are not the Horde’s enemies. Though the sentiment is not likely returned. The Hold giving aid only to the well behaved and ‘safer’ afflicted is a particularly sour point."
    },
  ],
  giver: {
    title: "Black Horde XP Giver",
    location: "A grim totem placed before the ruined barracks is the place you will gain your weekly faction XP. It’s not sticky anymore, promise.",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/922279534777225226/Faction_bank_Horde.png",
  },
  bank: {
    title: "Black Horde Bank",
    location: "A chest in the kitchen is perfect for storing the items you wish to share with your tribe or see if there is anything useful to you. Sure this respectfully, don’t take advantage of your tribe or you might find yourself without one.",
    image: "/locations/faction-academy-bank.webp",
  },
  reset: {
    title: "Black Horde Reset Point",
    location: "Within the barracks you will find a lonely bed with a chest, take time to breath and rest yourself here when you are in need.",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/922279583208857670/Faction_reset_Horde.jpg",
  },
  joiner: {
    title: "Black Horde Faction Joiner",
    location: "A great beast waits by the stairs to the ruins to throw out enemies and accept those who wish to lend their claw.",
    image: ""
  }
}

const coalition = {
  otherNames: "Coalition, Traders, Adventurers",
  image: "",
  brief: "Entrepreneurs out to make money in a strange new land. They hail from all over the world and unite along this traderout to seek adventure, money, and power. Merchant or mercenary, you can belong here.",
  descriptions: [
    "The adventurist trade organization came chasing wealth and opportunity and found just that. In a realm at its boiling point, they aimed to profit both from the conflict and the rare and exotic magical creations of Permia. Moreover, it would create a market of its own, a settlement to expand its own diverse culture and to pay for the grand expedition in this foreign realm. While some hold that they're underhanded, amoral, they hold that they are at the forefront of progress, with the wind of adventure at their back. Any and all can have a future with the coalition, no matter their origin. Those seeking to join The Coalition may do so to sell their sword to the war raging in the land, being a mercenary for hire, others might join the crafting guild to sell their goods, and some might just be looking for a simple job at the bathhouse.",
  ], 
  alignment: "We care only for gold! This faction is true neutral. With a mighty navy to protect our investments, we fear no one and have the luxury of neutrality.",
  perceptions: [
    {
      title: "Academy of Wonders",
      link: "academy-of-wonders",
      body: "The Coalition’s diverse membership may hold varied views of magic, but the Academy’s mystical goods and magical wonders are in many ways the primary reason for the Coalition to put so much effort into this realm in the first place. They are our most reliable allies in this realm."
    },
    {
      title: "The Black Horde",
      link: "black-horde",
      body: "Pests, and worst, pests that are hard to be rid of. Their presence brings guards, disaster, sabotage and ruin, and it’d be ideal to keep them from the baths and markets. We are stuck with them for now, they can at least be directed as a blunt instrument and are certainly in the market for useful intelligence."
    },
    {
      title: "Court of Flies",
      link: "court-of-flies",
      body: "The Coalition considers the Court a useful group of people, perhaps not the most affluent customers, but they can move goods and manipulate actions that we do not want our name associated with."
    },
    {
      title: "The Old Boughs",
      link: "old-boughs",
      body: "Their trade is welcome, but in all honesty, they’re not that interesting to the Coalition. Self sufficient pacifist isolationists are generally not remarkable trading partners."
    },
    {
      title: "Houses of Sarkada",
      link: "houses-of-sarkada",
      body: "Their desire to control trade is frustrating and annoying, and their patrols for ‘order’ and to prevent banditry are as helpful as they are harmful. Still, they are ensuring trade happens and are a necessary evil, and are massive consumers of weaponry. The Coalition would simply prefer to direct their less profitable actions elsewhere."
    },
    {
      title: "Silver Hold",
      link: "silver-hold",
      body: "While the Coalition sells the Hold weaponry and service, we are somewhat wary of the idea of them winning, as their goals would dry up a good deal of the profitability of the region. Still, as long as neither side gains a notable advantage, they will remain an incredibly valuable business partner."
    },
  ],
  giver: {
    title: "Coalition XP Giver",
    location: "?????????",
    image: "",
  },
  bank: {
    title: "Coalition Bank",
    location: "In the back room, hidden away from prying eyes, there is a secret vault behind a decorative flag. Click this to drop off your loot you want to share with your comrades.",
    image: "/locations/faction-academy-bank.webp",
  },
  reset: {
    title: "Coalition Reset Point",
    location: "In one of the warmly lit rooms off to the side of the main hall is a room full of comfortable beds and a glowing lamp. Click the lamp to rest yourself.",
    image: "/locations/faction-academy-reset.webp",
  },
  joiner: {
    title: "Coalition Faction Joiner",
    location: "One of the cat people of the coalition waits by the front doors of Lantuga to offer contracts.",
    image: ""
  }
}

const courtOfFlies = {
  otherNames: "Courtiers, The Court of the Queen in Yellow",
  image: "",
  brief: "Sneaks, cheats, gamblers, and grifters, they are the underbelly of the city and are here to take your coin, your secrets, and your resources. It’s all fair game among them and they will bleed you dry and still pick your pocket. Need a loan?",
  descriptions: [
    "The Court of Flies first started off as a group of vagrants who were pushed deep down into the sewers of Sarkada. Without food or fresh water, those poor souls did what they had to do to survive. They taught themselves how to steal, hide in the shadows, keep an ear out for information, and fend for themselves. Only so they can accumulate their wealth to make sure their community does not plunge into darkness.",
  ], 
  alignment: "The Court of Flies are considered to be a Chaotic-Neutral faction. As they are thieves and brigands, they don’t follow rules or traditions, rather they value their own freedom. Morality of good and evil is none of their concerns. Money is, though.",
  perceptions: [
    {
      title: "Academy of Wonders",
      link: "academy-of-wonders",
      body: "Sometimes, it’s good to have friends in high places. Occasionally, when the scholars require wetwork or other less-litigious activities done, they contract the Court for their services and pay handsomely for the privilege."
    },
    {
      title: "The Black Horde",
      link: "black-horde",
      body: "These dangerous mutants are usually just that: Violent and harmful. But they may act as a good distraction sometimes, and their attacks and ambushes can be used to further our own goals."
    },
    {
      title: "Coalition of the Compass",
      link: "coalition-of-the-compass",
      body: "Wayward traders will buy anything without asking too many questions and the Coalition are no exception. The drunken sailors make for easy targets of pick-pocketings, though the more battle hardened pirates aren’t quite as easy for proper muggings."
    },
    {
      title: "The Old Boughs",
      link: "old-boughs",
      body: "What use do we have of druids? They seem to not hate us due to our infection, but they still distrust us for our secrecy and actions."
    },
    {
      title: "Houses of Sarkada",
      link: "houses-of-sarkada",
      body: "The thief’s greatest enemy is the police. Not only do they hate the Court for their extra-legal activities, their Corrupted state makes them vilified. Rare deals do happen that help both sides, but only because of proximity do these little trysts occur."
    },
    {
      title: "Silver Hold",
      link: "silver-hold",
      body: "Rebels aren’t always the greatest of allies, but their raids certainly make for great distractions."
    },
  ],
  giver: {
    title: "Court of Flies XP Giver",
    location: "You can get a that sweet-sweet free experience point to help level your character up! Located in the treasury room, there is a safe with gold bars in it. Click it and you shall get your free Faction EXP Point!",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/922279534777225226/Faction_bank_Horde.png",
  },
  bank: {
    title: "Court of Flies Bank",
    location: "In the treasury room, there is a chest that you can click on to gain access to the bank. With the bank you can make your contribution of gold for the group and store items and gear to help your fellow members of the Court of Flies.",
    image: "/locations/faction-academy-bank.webp",
  },
  reset: {
    title: "Court of Flies Reset Point",
    location: "Tired? Low stamina? Need to regenerate your mana? Perhaps you need to lick your wounds? There is a closet you may click on in one of the bedrooms inside the main hall of the court. It’ll reset your HP/Stamina/Mana.",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/922279583208857670/Faction_reset_Horde.jpg",
  },
  joiner: {
    title: "Court of Flies Faction Joiner",
    location: "A man stands by one of the pillars within, armed and sly, he might just let you join the court.",
    image: ""
  }
}

const oldBoughs = {
  otherNames: "Druids, The Children of the Leaf",
  image: "",
  brief: "Peaceful people of the mountains who seek to be one with nature. Their way of life has been threatened by the war and the use of the crystals so they have joined the Silver Hold in protecting the land while encouraging others to learn and commune with it.",
  descriptions: [
    "The Old Boughs are an ancient order of Druids, committed to protecting the natural landscape of Permia and aiding those in need. Staunchly opposed to the abuse of the crystal's powers taking place in the City, especially by the Academy of Wonders, they have taken in the Silver Hold on their mountain top hope and pledge to aid them in the current civil war. The faction skirts the lines between neutral good and true neutral in its acts and intentions.",
  ], 
  alignment: "??????????",
  perceptions: [
    {
      title: "Academy of Wonders",
      link: "academy-of-wonders",
      body: "The Old Boughs cannot hate the Academy more than they already do. Knowledge and advancement for the sake of it stands against our beliefs to the very core, and they must be stopped."
    },
    {
      title: "The Black Horde",
      link: "black-horde",
      body: "The Black Horde are mongrels and violent savages. Their infection, again, earns them some sympathy from our order, but their violence does not. They’ve chosen the ways of hate and terrorism, and thus, they will never be allies of ours."
    },
    {
      title: "Court of Flies",
      link: "court-of-flies",
      body: "The Boughs have sympathy for their plight, but little for their methods. Cloak and dagger operations may be under their purview, but thievery, assassinations, and general chaos-bringing are not."
    },
    {
      title: "Coalition of the Compass",
      link: "coalition-of-the-compass",
      body: "The Coalition are simple interlopers and meddlers in the affairs of an ancient and wounded land. We believe their trade in crystals and artifacts from the Academy to be dangerous to the outside world and potentially corrupt more than just Permia itself."
    },
    {
      title: "Houses of Sarkada",
      link: "houses-of-sarkada",
      body: "While the Old Boughs may have little stake in the fight between the Silver Hold and the Immortals, we abhor their treatment of the Corrupted; especially while they beatify the so-called “Blessed”. With Aida showing allegiance to the land, her and her allies have our support, and her enemies, our condemnation."
    },
    {
      title: "Silver Hold",
      link: "silver-hold",
      body: "The Princess has the full support of the Boughs. They feel for the Corrupted and the Blessed alike, and their attempts to bring balance and peace back to the land are greatly appreciated."
    },
  ],
  giver: {
    title: "Old Boughs XP Giver",
    location: "Standing Stones near the Bonfire, in the shape of l o l. Click these once a week to get 1 exp towards your next level. Resets every Sunday!",
    image: "",
  },
  bank: {
    title: "Old Boughs Bank",
    location: "Sharing is caring and the Old Boughs have a place to pool their resources together. Leave your unwanted goodies, trinkets, food and coin near the glowing rune monolith outside a hollowed out tree acting as the Old Boughs Infirmary unit Faction",
    image: "/locations/faction-academy-bank.webp",
  },
  reset: {
    title: "Old Boughs Reset Point",
    location: "For those that wish to lay their head down and rest, to regain the strength from a long and hard day, another glowing monolith awaits just outside of the firefly cave. Bask in its warmth and rest your weary head in the beds of flowers beneath it.",
    image: "/locations/faction-academy-reset.webp",
  },
  joiner: {
    title: "Old Boughs Faction Joiner",
    location: "There is a kind old Troll trusted by the Elders of the Old Boughs, hermitting himself away in the fire fly cave.",
    image: ""
  }
}

const housesOfSarkada = {
  otherNames: "City Guards, the Immortals, Pigs",
  image: "",
  brief: "The might of Sarkada and the nobles they serve enforce the strict laws of the city, seeking to abolish the corrupted being, maintain their power and progress, and use the crystals to preserve their way of life.",
  descriptions: [
    "The houses of Sarkada are the heart of the city. They make up the Royal Army and the great houses of the nobles! Strict and authoritarian, they protect the wealth and power of the ruling figures of the city, enforcing laws and curating new ones to keep their citizens in line.",
    "The Royal Army acts as both local law enforcement and the foot soldiers of the royal court. They enforce the laws of the land and seek out the corrupted within their walls to destroy or capture for the Academy’s experiments. With a strict hierarchy, you may climb the ranks.",
    "The Nobles are civil servants, political figures, or investors looking to feed the royal court updated bureaucracy to enforce their power within the city."
  ], 
  alignment: "??????????",
  perceptions: [
    {
      title: "Academy of Wonders",
      link: "academy-of-wonders",
      body: "The Guard gratefully accepts the Academy of Wonders. They’re a force for progress, and their magics work to make the modern marvels that allow Sarkada to exist. Without them, the Guard and the city itself would still be in the stone age that the Silver Hold wishes to return us to."
    },
    {
      title: "The Black Horde",
      link: "black-horde",
      body: "Rapists, murderers, slavers; worst of all, Corrupted. They deserve extermination and nothing more, and have signed their death warrants in the blood of our citizens."
    },
    {
      title: "Court of Flies",
      link: "court-of-flies",
      body: "Beggars, cutpurses, thieves, and murderers. The ‘Courtiers’ are filth that should be cast from the city with the rest of the garbage -and not given proper graves. While sometimes dealing with them is necessary, it should be limited as much as absolutely possible."
    },
    {
      title: "Coalition of the Compass",
      link: "coalition-of-the-compass",
      body: "A true necessary evil. They take crystals away, and bring back money. Their sailors tend to be troublemakers within the city and are often treated harsher than normal visitors, though better than corrupted."
    },
    {
      title: "The Old Boughs",
      link: "old-boughs",
      body: "Treat the Old Boughs the same as the Silver Hold. They are allied with Aida and her ilk and are guilty by association. Their feuding with the Academy of Wonders puts them at odds with the Guard and all of our conveniences."
    },
    {
      title: "Silver Hold",
      link: "silver-hold",
      body: "The Silver Hold are those under the Princess-In-Exile’s enthrallment. They are slaves to her will, and act as saboteurs, raiders, and enemies of the city. They are the truest enemy of the King and his Immortals."
    },
  ],
  giver: {
    title: "Houses of Sarkada XP Giver",
    location: "Experience the opulence of the palace and find within two crystals, the one on the left gives you your XP. This resets every Sunday.",
    image: "",
  },
  bank: {
    title: "Houses of Sarkada Bank",
    location: "The crystal to the right is the faction bank, share items with your fellow citizens should you feel generous. Take only what you need from the city coffers.",
    image: "/locations/faction-academy-bank.webp",
  },
  reset: {
    title: "Houses of Sarkada Reset Point",
    location: "In the bunks atop the guard house, there is a table against the wall. Here is where you may rest yourself and reset all your stats.",
    image: "/locations/faction-academy-reset.webp",
  },
  joiner: {
    title: "Houses of Sarkada Faction Joiner",
    location: "An golden armored soldier waits my the palace to induct all those who will serve the city.",
    image: ""
  }
}

const silverHold = {
  otherNames: "The Princess’ Court, The Hold, Rebels, Exiles",
  image: "",
  brief: "Rebels seeking to bring an end to the evil ways of the city and the land, they are accepting of all those in need and extend offerings of kindness and tolerance. They protect their own fiercely and defend those in need with their mighty swords.",
  descriptions: [
    "The silver hold was founded by those driven from the city by the royal guard. They built their home in the valley of the mountain to be safe from those in the city. Decades later as the afflicted crisis grew worse, Princess Aida left the city and joined the hold. Today the hold is led by princess Aida, growing into a true rebellion against the tyranny of the Sarkadians, with a strong moral backing. The hold defends the weak, protects the innocent, and fights against oppression and prejudice. No afflicted is judged for being afflicted, whether blessed or corrupted. The strong moral code, but rebellious nature of the Silver Hold lends toward Neutral-Good alignments, while lawful and chaotic good alignments may also find a home here.",
  ], 
  alignment: "?????????",
  perceptions: [
    {
      title: "Academy of Wonders",
      link: "academy-of-wonders",
      body: "The cause of so much pain in this world, moreover, many see them still as the best solution to this afflicted crisis they may well be the cause of. As it stands they must change their ways if they wish to be spared the sword of damocles."
    },
    {
      title: "The Black Horde",
      link: "black-horde",
      body: "A rebellion without organization, rules, unity of purpose and culture will fail. The Black Horde abandons our traditions, turns from our history, and replaces it with anger. They are allies of sorts and we share purposes, but they need to learn restraint."
    },
    {
      title: "Coalition of the Compass",
      link: "coalition-of-the-compass",
      body: "Traders profiting off of this war. We know they are not our friends, but we need their goods to fuel our rebellion. Without them, our victory would be much more difficult, though we should perhaps try to turn them to our cause or at least make their dealings with the Guard more unpleasant."
    },
    {
      title: "Court of Flies",
      link: "court-of-flies",
      body: "The poor, the downtrodden, but not the innocent. While many turn to crime and misery out of need, others do it out of a desire to become the heirs to the evils of Sarkada. They are not our friends, but there are better targets for our agents."
    },
    {
      title: "The Old Boughs",
      link: "old-boughs",
      body: "When denied the holy places of our home we turned to the holy places of this new realm. Their ways are in many ways similar to those of the old magi and wisemen of the days of the Shemu’s wandering. They help guide our people, and many of our people are among them. Even a rebellion needs a spiritual backing."
    },
    {
      title: "Houses of Sarkada",
      link: "houses-of-sarkada",
      body: "Our mortal enemies, foes who cannot be reasoned with. Whilst not all of their number may be evil, perhaps few in fact, they are our foes and the enemies of Aida and her rebellion. For us to win, they must fall."
    },
  ],
  giver: {
    title: "Silver Hold XP Giver",
    location: "Inside the great hall there are two flags, the flag to the left is the XP giver, the symbol of new hope to hopefully reclaim their home. This inspiring symbol is where you will gain your XP.",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/922279534777225226/Faction_bank_Horde.png",
  },
  bank: {
    title: "Silver Hold Bank",
    location: "Inside the great hall there are two flags, the flag to the right is where the faction bank is hidden. Behind this is stored a little vault for those generous souls who wish to share their resources.",
    image: "/locations/faction-academy-bank.webp",
  },
  reset: {
    title: "Silver Hold Reset Point",
    location: "Inside the safety of the barracks, beside the keep, there is a table full of helpful items. You may rest here and regain your strength within the Hold.",
    image: "https://cdn.discordapp.com/attachments/322561050941718528/922279583208857670/Faction_reset_Horde.jpg",
  },
  joiner: {
    title: "Silver Hold Faction Joiner",
    location: "A soldier waits outside the keep, his sword at the ready, he will ask your loyalty.",
    image: ""
  }
}

const playerFactionApplicationUrl = "https://docs.google.com/forms/d/1BF4RM9rBSo1AYkbgSxzF2j6E8p6Ej9BzqxvBJZcNMzU/edit"
const playerFactions = {
  descriptions: [
    "Player factions are absolutely accepted here at Permia, and we have a way forward for you to get access to certain things. Furthermore, we also absolutely support sub factions within factions. You want to play a good aligned, afflicted sympathizing band of mages? A subfaction in the Silver Hold may be perfect for you! If you don't want to go that route, we still won't stop you from becoming a player faction, and with enough player activity shown, you can earn official discord channels, HUD access to experience points and the faction system within it, and even a faction base and a path to official status! See below for the break points!",
    "5 active players shown for a month: Once you reach this benchmark and tell us the player names, we'll set you up with discord access and tags in the Permia discord server!",
    "10 active players shown for a month (must reach first tier first): Once you reach this benchmnark, we'll get you set up in the HUD so you can earn that sweet weekly faction experience, have your faction in the faction spot in your titler, as well as lets your leader give out experience points for members going above and beyond!",
    "15 active players shown for a month (must reach second tier first): Once you reach this, you'll be allowed a faction base via a large rental. The admins will also reach out to you about POSSIBLE officialization. Please note, if you do become official, your build will be free on the build and part of the established lore!",
    "With these steps, player factions can slowly grow and become more established within the sim and have a path forward with clear expectations from both sides! If there's any questions, please feel free to ask any admin about it!",
    `To apply as a player faction, <a href='${playerFactionApplicationUrl}' rel='noopener noreferrer' target='_blank'>look here</a>!`
  ]
}

const factions = {
  "academy-of-wonders": {
    "title": "Academy of Wonders",
    ...academy,
  },
  "black-horde": {
    "title": "Black Horde",
    ...blackHorde,
  },
  "coalition-of-the-compass": {
    "title": "Coalition of the Compass",
    ...coalition,
  },
  "court-of-flies": {
    "title": "Court of Flies",
    ...courtOfFlies,
  },
  "old-boughs": {
    "title": "Old Boughs",
    ...oldBoughs,
  },
  "houses-of-sarkada": {
    "title": "Houses of Sarkada",
    ...housesOfSarkada,
  },
  "silver-hold": {
    "title": "Silver Hold",
    ...silverHold,
  },
  "player-factions": {
    "title": "Player Factions",
    ...playerFactions,
  }
}

export default factions; 
