const faqs = [
  {
    question: "How do I get the starting piece of Armor (Light Armor) and how do I equip it?",
    answer: "Finish the first starting quest fully and you'll be awarding Light Armor! To equip it, hit the bottom left button on your HUD (the satchel) and go to inventory, then gear, then click on the gear piece."
  },
  {
    question: "How do I restore my mana, health, and stamina?",
    answer: "Once per day, you can restore all of these via the HUD using the HUD reset in the characters menu. Otherwise, you can go to any faction base and rest for free. If you're in the faction of the base you're sleeping in, you'll get an extra 1 con as a bonus! Furthermore, if you use the bath house to rest, you'll get +2 to all stats!"
  },
  {
    question: "Can I have a combat and a crafting class both?",
    answer: "You may have one crafting class and one combat class at a time! They also level independantly, with crafting leveling up every time you craft and combat classes ranking up by your XP!"
  },
  {
    question: "What are the titles available and where can I get them?",
    answer: `
Worldly: 1 Wisdom  <- Bank title, 20 gold<br/>
Charming: 1 Charisma  <- Bank title, 20 gold<br/>
Swift: 1 Dex  <- Bank title, 20 gold<br/>
Bright: 1 Int  <- Bank title, 20 gold<br/>
Powerful: 1 Str  <- Bank title, 20 gold<br/>
Traveler: 1 Con <- Bank title, 20 gold<br/>
Feral: 1 Str, Dex -1 Wis,Int <- from Black Horde NPC, need to be in the faction<br/>
Adventurous: 1 Charisma <- from Coalition NPC, , need to be in the faction<br/>
Studied: 1 Int <- From Academy of Wonders NPC, need to be in the faction<br/>
Orderly: 1 Int <- From Sarkadian Guard NPC, need to be in the faction<br/>
Sylvan: 1 Wis <- From Old Boughs NPC, currently unavailable<br/>
Virtuous: 1 Chr <- From Silver Hold NPC, need to be in the faction<br/>
<br/>
For NPC locations, check on the website under Features->NPCs/Givers!`
  },
  {
    question: "What are the item slots and what can be equipped?",
    answer: "You may have one armor piece, one weapon, and one 'other' piece. The crafting page has details about which is which."
  },
  {
    question: "What is the difference between the bank, the vault, and the faction bank?",
    answer: `The faction bank is a repository that factions can all access. This means if you put something in your faction bank, anyone else within your faction could possibly take it.
<br />
The bank itself is the bank inside of Sarkada where you can store your personal gold and buy titles.
<br />
Finally, the vault is your personal storage for all items. It has unlimited storage and can only be accessed in certain locations. See the below for more detail.`
  },
  {
    question: "How does the Vault work?",
    answer: "The Vault is an inventory that has unlimited storage. However, it can only be accessed in certain places - the bank of Sarkada and the Coalition of Compass Lantuga building. In these, you can move unlimited items into your fault and get as much as you can carry out. Think of it like a bank for your things that you can come back and visit whenever you want!"
  },
  {
    question: "How do crafting and gathering level and what do they give?",
    answer: `
Crafting is increased by crafting things and increases in increments of ten experience for a level. Different recipes give a different amount of experience, with higher level ones typically giving more experience. Leveling up lets you work on higher level crafts.
<br/>
Gathering is much the same with it's leveling in increments of ten, but everything gathered is one xp Leveling up lets you gather higher level reagents too!`
  },
];

const tags = [
  { title: "Bottom", description: "Denotes that in sexual or kink scenarios you wish to bottom rather than top." },
  { title: "Versatile", description: "Denotes flexibility in sexual and kink scenarios." },
  { title: "Top", description: "Denotes that in sexual or kink scenarios you wish to top rather than bottom." },
  { title: "Victim", description: "Denotes that you're a bottom who is also okay with non-consensual or harder kink scenes. Forfeits your right to choose what you lose in a fight and mechanically says you're open to fighting and losing." },
  { title: "Villain", description: "Denotes that you're a top looking for non-consensual or harder kink scenes." },
  { title: "Story-driven", description: "Denotes that you’re primarily looking for story driven roleplay." },
  { title: "Sex-driven", description: "Denotes that you’re primarily looking for sex." },
  { title: "Non-sexual", description: "Denotes that you will not do sex." },
  { title: "Approachable", description: "Denotes that you are open to/want people to approach you in character." },
];

const tutorials = {
  'hud': { title: "HUD" },
  'tags': { title: "Tags", content: tags },
  'faq': { title: "FAQ", content: faqs },
};

export default tutorials;