const monthlyEvents = [
  {
    title: "Rumble in the Valley",
    content: [
      "Once a month, a fight will be hosted at the canyon of crystals in the desert. The two main sides of the conflict, Houses of Sarkada and the Silver Hold, battle for control of the crystal mines at the base of the canyon. This event will be held on the first Saturday after the 15th of each month, with admins grouping players up as fairly as possible.",
      "Players not in these factions can join as a mercenary from the Coalition of the Compass NPC. Be aware, you can only change your Mercenary group on the 10th through the 12th of each month, so make sure you choose wisely!",
      "The event itself will be a pseudo round robin tournament to see which faction wins. Each side will be split into teams of two and three against other groups of two or three. The winner of those will fight the winner of the other battles and so on and so on until only one group is left standing. Their side then wins the battle.",
      "Whichever side wins, Sarkada, Silver Hold, or a wild card, will then receive a monthly reward tailored for their faction. If they win multiple months in a row, we’ll implement larger changes that may be reflected on the world in general."
    ]
  }
];

const oneTimeEvents = [
  {
    title: "Coalition Festival",
    content: [
      "This is a welcome to the sim special! Come and celebrate with the Coalition as they open their new bath house! The festival will feature games, feasts, dances, and all sorts of revelry for the citizens of Permia!",
      "Come on down to the Coalition’s main building where we’ll host a variety of fun activities -  a party for everyone to come and mingle, introductions to each of the factions and major players of the world in a nice, neutral space, and special deals on all bathhouse specials! Or, come and get yourself a job while you party. Find yourself a spot at the Coalition, or speak to any of the faction leaders in attendance to see what they’re all about, and possibly find a new home.", 
      "See you all there on the 18th of September!"
    ],
  }
];

const events = {
  "monthly": { 
    title: "Monthly Events",
    content: monthlyEvents
  },
  "one-time": {
    title: "One-time Events",
    content: oneTimeEvents
  }
}

export default events;