var insignia = {
    A: "Crescent",
    B: "Regal",
    C: "Barbed",
    D: "Illuminated",
    E: "Enlightened",
    U: "Universal",
    "?": "FIXME"
};
var bonuses = [
    { itemName: "-- bonuses --", slots: "", description: "" },
    { itemName: "-- mounts --", slots: "", description: "" },
    { itemName: "Vampire's Craving", slots: "AAB", description: "Whenever you perform a Lifesteal, you are healed for 3% of your maximum Hit Points over 4 seconds." },
    { itemName: "Survivor's Blessing", slots: "AAC", description: "Whenever you Deflect an attack, you are healed for 3% of your maximum Hit Points over 4 seconds." },
    { itemName: "Slayer's Redemption", slots: "AAE", description: "Whenever you kill a target, you are healed for 10% of your maximum Hit Points over 5 seconds." },
    { itemName: "Oppressor's Reprieve", slots: "ADD", description: "Whenever you are Stunned, Knocked, or Immobilized, you are healed for 4% of your maximum Hit Points over 4 seconds." },
    { itemName: "Barbarian's Revelry", slots: "AEE", description: "Whenever you perform a Critical Strike, you are healed for 1.5% of your maximum Hit Points. This effect can only occur once every 2 seconds." },
    { itemName: "Protector's Camaraderie", slots: "BBC", description: "Whenever your summoned Companion attacks, you gain 3% of your Power and Defense for 10 seconds. This effect can stack up to 4 times." },
    { itemName: "Combatant's Maneuver", slots: "BBD", description: "Whenever you control an enemy, you gain 5% Combat Advantage damage for 10 seconds." },
    { itemName: "Warlord's Inspiration", slots: "BBE", description: "Your summoned Companion does 20% more damage." },
    { itemName: "Alchemist's Invigoration", slots: "BDD", description: "Whenever you drink a Healing Potion, you are granted 5% more Power and Defense for 10 seconds." },
    { itemName: "Victim's Preservation", slots: "ACC", description: "Whenever you take greater than 35% of your Maximum Hit Points in pre-mitigated damage from a single blow, you are healed for 10% of your maximum Hit Points over 5 seconds. This effect can occur once every 10 seconds." },
    { itemName: "Artificer's Persuasion", slots: "CCD", description: "Whenever you use an Artifact power, your Recovery, Movement, Action Point Gain, and Stamina Gain are increased by 10% of your Power for 15 seconds." },
    { itemName: "Magistrate's Patience", slots: "CCE", description: "Whenever you perform a Critical Strike, your target will gain a stack of Magistrate's Consideration. Enemies affected by Magistrate's Consideration take Psychic Damage equal to 10% of your Power over 4 seconds. Allies affected by Magistrate's Consideration are healed for 3% of your maximum Hit Points over 4 seconds." },
    { itemName: "Berserker's Rage", slots: "CDD", description: "While you have full Action Points, you gain 10% of your Armor Penetration as Power." },
    { itemName: "Champion's Return", slots: "DEE", description: "Whenever you are reduced to 50% Hit Points, you instantly recover 20% of your Stamina and are healed for 20% of your maximum Hit Points over 10 seconds. This effect can only occur once every 60 seconds." },
    { itemName: "Assassin's Covenant", slots: "BEE", description: "You lose 10% of your Defense, Deflection, and Life Steal, and gain the combination of lost stats as Power." },
    { itemName: "Wanderer's Fortune", slots: "ABD", description: "You have a 4% chance after killing a foe to find a Refining Stone at your feet." },
    { itemName: "Cavalry's Warning", slots: "ACE", description: "Whenever you activate a Mount Combat Power, you gain an increase of 10% to your Power, Recovery, Armor Penetration, Critical Strike, Defense, Deflection, Regeneration, and Life Steal." },
    { itemName: "Shepherd's Devotion", slots: "BCD", description: "Whenever you use a Daily power, your teammates Defense, Deflection, and Movement are increased by 5% of your Power for 10 seconds." },
    { itemName: "Gladiator's Guile", slots: "BDE", description: "When your Stamina is above 75%, you move 15% faster. When your Stamina is below 25%, gain 15% of your Power as Stamina Gain." },
    { itemName: "Vampire's Thirst", slots: "AB", description: "Whenever you perform a Lifesteal, you are healed for 1.2% of your maximum Hit Points over 4 seconds." },
    { itemName: "Survivor's Gift", slots: "AC", description: "Whenever you Deflect an attack, you are healed for 1.2% of your maximum Hit Points over 4 seconds." },
    { itemName: "Oppressor's Respite", slots: "AD", description: "Whenever you are Stunned, Knocked, or Immobilized, you are healed for 1% of your maximum Hit Points over 4 seconds." },
    { itemName: "Barbarian's Delight", slots: "AE", description: "Whenever you perform a Critical Strike, you are healed for 0.5% of your maximum Hit Points. This effect can only occur once every 2 seconds." },
    { itemName: "Protector's Friendship", slots: "BC", description: "Whenever your summoned Companion attacks, you gain 1% of your Power and Defense for 10 seconds. This effect can stack up to 4 times." },
    { itemName: "Warlord's Encouragement", slots: "BE", description: "Your summoned Companion does 10% more damage." },
    { itemName: "Alchemist's Refresher", slots: "BD", description: "Whenever you drink a Healing Potion, you are granted 2% more Power and Defense for 10 seconds." },
    { itemName: "Artificer's Influence", slots: "CD", description: "Whenever you use an Artifact power, your Recovery, Movement, Action Point Gain, and Stamina Gain are increased by 5% of your Power for 15 seconds." },
    { itemName: "Magistrate's Restraint", slots: "CE", description: "Whenever you perform a Critical Strike, your target will gain a stack of Magistrate's Consideration. Enemies affected by Magistrate's Consideration take Psychic Damage equal to 10% of your Power over 4 seconds. Allies affected by Magistrate's Consideration are healed for 3% of your maximum Hit Points over 4 seconds." },
    { itemName: "Champion's Struggle", slots: "DE", description: "Whenever you are reduced to 50% Hit Points, you instantly recover 10% of your Stamina and are healed for 10% of your maximum Hit Points over 10 seconds. This effect can only occur once every 60 seconds." }
];
var mounts = [
    { itemName: "Arcane Whirlwind", slots: "CUU", quality: "legendary" },
    { itemName: "Armored Axe Beak", slots: "AUU", quality: "legendary" },
    { itemName: "Armored Bulette", slots: "AUU", quality: "legendary" },
    { itemName: "Armored Giant Strider", slots: "DUU", quality: "legendary" },
    { itemName: "Armored Griffon", slots: "AUU", quality: "legendary" },
    { itemName: "Beholder Personal Tank", slots: "EUU", quality: "legendary" },
    { itemName: "Black Ice Warhorse", slots: "CUU", quality: "legendary" },
    { itemName: "Celestial Stag", slots: "DUU", quality: "legendary" },
    { itemName: "Champion's Armored Bulette", slots: "AUU", quality: "legendary" },
    { itemName: "Coastal Flail Snail", slots: "CUU", quality: "legendary" },
    { itemName: "Commander Tyrannosaur", slots: "BUU", quality: "legendary" },
    { itemName: "Emperor Beetle", slots: "BUU", quality: "legendary" },
    { itemName: "Imperial Rage Drake", slots: "BUU", quality: "legendary" },
    { itemName: "Legendary Carpet of Flying", slots: "DUU", quality: "legendary" },
    { itemName: "Runeclad Manticore", slots: "CUU", quality: "legendary" },
    { itemName: "Skeleton Steed", slots: "DUU", quality: "legendary" },
    { itemName: "Swift Golden Lion", slots: "DUU", quality: "legendary" },
    { itemName: "Tenser's Floating Disk", slots: "EUU", quality: "legendary" },
    { itemName: "Warpainted Tyrannosaur", slots: "BUU", quality: "legendary" },
    { itemName: "Apparatus of Gond", slots: "BEU", quality: "epic" },
    { itemName: "Apparatus of Kwalish", slots: "EEU", quality: "epic" },
    { itemName: "Armored Bear", slots: "ABU", quality: "epic" },
    { itemName: "Axe Beak", slots: "CDU", quality: "epic" },
    { itemName: "Black Owlbear", slots: "AAU", quality: "epic" },
    //  {itemName: "Blazing Yeth Hound", slots: "CDU", quality: "epic"},
    { itemName: "Bulette", slots: "ABU", quality: "epic" },
    { itemName: "Carpet of Flying", slots: "DUU", quality: "epic" },
    { itemName: "Cavalry Tyrannosaur", slots: "BCU", quality: "epic" },
    { itemName: "Dawn Unicorn", slots: "BDU", quality: "epic" },
    { itemName: "Dusk Unicorn", slots: "AEU", quality: "epic" },
    { itemName: "Elite Shadow Wolf", slots: "ADU", quality: "epic" },
    { itemName: "Embellished Apparatus of Gond", slots: "AEU", quality: "epic" },
    { itemName: "Enchanted Courser", slots: "DCU", quality: "epic" },
    { itemName: "Flail Snail", slots: "CCU", quality: "epic" },
    //  {itemName: "Frozen Yeth Hound", slots: "CEU", quality: "epic"},
    { itemName: "Fungal Flail Snail", slots: "CCU", quality: "epic" },
    { itemName: "Gas Spore", slots: "DEU", quality: "epic" },
    { itemName: "Giant Beetle", slots: "BBU", quality: "epic" },
    { itemName: "Giant Crab", slots: "BCU", quality: "epic" },
    { itemName: "Giant Strider", slots: "DDU", quality: "epic" },
    { itemName: "Gorgon", slots: "BEU", quality: "epic" },
    { itemName: "Griffon", slots: "ADU", quality: "epic" },
    { itemName: "Guard Drake", slots: "BCU", quality: "epic" },
    { itemName: "Heavy Giant Spider", slots: "BDU", quality: "epic" },
    { itemName: "Heavy Howler", slots: "ACU", quality: "epic" },
    { itemName: "Heavy Inferno Nightmare", slots: "ADU", quality: "epic" },
    { itemName: "Heavy Mystic Nightmare", slots: "DEU", quality: "epic" },
    { itemName: "Heavy Twilight Nightmare", slots: "AAU", quality: "epic" },
    { itemName: "Heavy Worg", slots: "CEU", quality: "epic" },
    { itemName: "High Forest Bear", slots: "ABU", quality: "epic" },
    { itemName: "Leopard of Chult", slots: "CDU", quality: "epic" },
    { itemName: "Lord's Armored Polar Bear", slots: "BDU", quality: "epic" },
    { itemName: "Manticore", slots: "CEU", quality: "epic" },
    { itemName: "Medium Adventurer's Horse", slots: "ACU", quality: "epic" },
    { itemName: "Owlbear", slots: "AEU", quality: "epic" },
    { itemName: "Purple Owlbear", slots: "BBU", quality: "epic" },
    { itemName: "Rage Drake", slots: "CDU", quality: "epic" },
    //  {itemName: "Royal Winter Sled", slots: "EU", quality: "epic"},
    { itemName: "Savage Polar Bear", slots: "CCU", quality: "epic" },
    { itemName: "Siegebreaker Griffon", slots: "ADU", quality: "epic" },
    { itemName: "Silverback Bear", slots: "DEU", quality: "epic" },
    { itemName: "Skeletal Worg", slots: "CCU", quality: "epic" },
    { itemName: "Starfade Stag", slots: "DEU", quality: "epic" },
    { itemName: "Stormraider Clydesdale", slots: "BEU", quality: "epic" },
    { itemName: "Striped Owlbear", slots: "DDU", quality: "epic" },
    { itemName: "Sylvan Stag", slots: "CEU", quality: "epic" },
    { itemName: "Tiger-striped Owlbear", slots: "CCU", quality: "epic" },
    { itemName: "Turmish Lion", slots: "DBU", quality: "epic" },
    { itemName: "Whirlwind", slots: "CCU", quality: "epic" },
    { itemName: "White Owlbear", slots: "EEU", quality: "epic" },
    { itemName: "White Tiger", slots: "BCU", quality: "epic" },
    { itemName: "Yeth Hound", slots: "ACU", quality: "epic" },
    { itemName: "Aberrant Drake", slots: "CDD", quality: "rare" },
    { itemName: "Aberrant Fey Wolf", slots: "BEE", quality: "rare" },
    { itemName: "Aberrant Gorgon", slots: "CDU", quality: "rare" },
    { itemName: "Aberrant Yeth Hound", slots: "BAA", quality: "rare" },
    { itemName: "Arkaiun Courser", slots: "BBC", quality: "rare" },
    { itemName: "Armored Ghost Horse", slots: "AAC", quality: "rare" },
    { itemName: "Ash Tribal Lion", slots: "EBU", quality: "rare" },
    { itemName: "Black Stallion", slots: "BDE", quality: "rare" },
    { itemName: "Buckskin Destrier", slots: "CCE", quality: "rare" },
    { itemName: "Fey Gorgon", slots: "EDU", quality: "rare" },
    { itemName: "Firesoul Gorgon", slots: "AEU", quality: "rare" },
    { itemName: "Forest Flail Snail", slots: "CCU", quality: "rare" },
    //  {itemName: "Forest Wolf of the Wild Hunt", slots: "ADD", quality: "rare"},
    //  {itemName: "Frosted Wolf of the Wild Hunt", slots: "AEE", quality: "rare"},
    { itemName: "Frozen Demon Sled", slots: "AAB", quality: "rare" },
    //  {itemName: "Frozen Winter Sled", slots: "EU", quality: "rare"},
    { itemName: "Gelatinous Cube", slots: "BDD", quality: "rare" },
    { itemName: "Gilded Giant Spider", slots: "ABD", quality: "rare" },
    { itemName: "Golden Brindle Horse", slots: "BBE", quality: "rare" },
    { itemName: "Green Owlbear", slots: "AEE", quality: "rare" },
    { itemName: "Hell Emblazon Worg", slots: "DEE", quality: "rare" },
    { itemName: "Hell Hound", slots: "AAB", quality: "rare" },
    { itemName: "Howler", slots: "ACE", quality: "rare" },
    { itemName: "Medium Black Horse", slots: "BBC", quality: "rare" },
    { itemName: "Medium Palomino Horse", slots: "ACE", quality: "rare" },
    { itemName: "Medium Pharaoh Steed", slots: "AAC", quality: "rare" },
    { itemName: "Medium Snowswift Horse", slots: "ADD", quality: "rare" },
    { itemName: "Medium Tiger", slots: "CCE", quality: "rare" },
    { itemName: "Medium Waterdeep Horse", slots: "CCD", quality: "rare" },
    { itemName: "Medium Worg", slots: "BBE", quality: "rare" },
    { itemName: "Moonbear", slots: "ACD", quality: "rare" },
    { itemName: "Moss-daubed Horse", slots: "BDE", quality: "rare" },
    { itemName: "Neverwinter Champion's Charger", slots: "DEE", quality: "rare" },
    { itemName: "Panther", slots: "BCE", quality: "rare" },
    { itemName: "Poisonous Looking Spider", slots: "CCE", quality: "rare" },
    { itemName: "Polar Bear", slots: "AEE", quality: "rare" },
    { itemName: "Reanimated Destrier", slots: "DEE", quality: "rare" },
    { itemName: "Sabino Destrier", slots: "BCD", quality: "rare" },
    //  {itemName: "Sienna Tribal Lion", slots: "ADU", quality: "rare"},
    { itemName: "Small Forest Stag", slots: "BCD", quality: "rare" },
    { itemName: "Snowclad Manticore", slots: "ABE", quality: "rare" },
    { itemName: "Soot Tribal Lion", slots: "DBU", quality: "rare" },
    { itemName: "Suratuk's Teal Spider", slots: "ABD", quality: "rare" },
    { itemName: "Trained Grizzly", slots: "BBC", quality: "rare" },
    { itemName: "Tuigan Courser", slots: "CCD", quality: "rare" },
    { itemName: "Water Horse", slots: "BDD", quality: "rare" },
    { itemName: "Wolf of the Wild Hunt", slots: "BDE", quality: "rare" },
    { itemName: "Amnian Horse", slots: "DU", quality: "uncommon" },
    { itemName: "Amphail Fancy Horse", slots: "BU", quality: "uncommon" },
    { itemName: "Armored Boar", slots: "CU", quality: "uncommon" },
    { itemName: "Ashen Brindle Horse", slots: "AU", quality: "uncommon" },
    { itemName: "Autumn Stag", slots: "AU", quality: "uncommon" },
    { itemName: "Azureous Lion", slots: "DU", quality: "uncommon" },
    { itemName: "Bay Zakharan Horse", slots: "BU", quality: "uncommon" },
    { itemName: "Black Horse", slots: "BU", quality: "uncommon" },
    { itemName: "Blue Ribbon Pig", slots: "BU", quality: "uncommon" },
    { itemName: "Calimshan Horse", slots: "CU", quality: "uncommon" },
    { itemName: "Cerulean Unicorn", slots: "BU", quality: "uncommon" },
    { itemName: "Chartreuse Unicorn", slots: "AU", quality: "uncommon" },
    { itemName: "Crag Cat", slots: "CU", quality: "uncommon" },
    { itemName: "Dappled Riding Horse", slots: "DU", quality: "uncommon" },
    { itemName: "Deinonychus", slots: "CU", quality: "uncommon" },
    { itemName: "Demon Sled", slots: "AU", quality: "uncommon" },
    { itemName: "Electric Tiger", slots: "BD", quality: "uncommon" },
    { itemName: "Fey Wolf", slots: "AU", quality: "uncommon" },
    { itemName: "Frozen Polar Bear", slots: "BU", quality: "uncommon" },
    { itemName: "Gilded White Steed", slots: "BU", quality: "uncommon" },
    { itemName: "Grey Horse", slots: "BU", quality: "uncommon" },
    { itemName: "Inferno Nightmare", slots: "DU", quality: "uncommon" },
    { itemName: "Ice Panther", slots: "CU", quality: "uncommon" },
    { itemName: "Jubilee Parade Horse", slots: "BU", quality: "uncommon" },
    { itemName: "Jubilee Unicorn", slots: "BU", quality: "uncommon" },
    { itemName: "Onyx Horse", slots: "DU", quality: "uncommon" },
    { itemName: "Pale Horse", slots: "EU", quality: "uncommon" },
    { itemName: "Pharaoh Steed", slots: "CU", quality: "uncommon" },
    { itemName: "Rainbow Starry Panther", slots: "DU", quality: "uncommon" },
    { itemName: "Shadow Wolf", slots: "AU", quality: "uncommon" },
    { itemName: "Starry Panther", slots: "AU", quality: "uncommon" },
    { itemName: "Stormraider Horse", slots: "DU", quality: "uncommon" },
    { itemName: "Sunite Steed", slots: "EU", quality: "uncommon" },
    { itemName: "Teal Stained Gorgon", slots: "CU", quality: "uncommon" },
    { itemName: "Tethyr Horse", slots: "EU", quality: "uncommon" },
    { itemName: "Tribal Polar Bear", slots: "CU", quality: "uncommon" },
    { itemName: "Verdurous Lion", slots: "EU", quality: "uncommon" },
    { itemName: "Vert Stained Gorgon", slots: "CU", quality: "uncommon" },
    { itemName: "White Horse", slots: "DU", quality: "uncommon" },
    { itemName: "Winter Sled", slots: "EU", quality: "uncommon" },
    //  {itemName: "Winter Stag", slots: "AU", quality: "uncommon"},
    { itemName: "Winter Wolf", slots: "CU", quality: "uncommon" },
    { itemName: "Appaloosa Horse", slots: "AD", quality: "common" },
    { itemName: "Boar", slots: "BD", quality: "common" },
    { itemName: "Brindle Horse", slots: "AC", quality: "common" },
    { itemName: "Palomino Horse", slots: "BC", quality: "common" },
    { itemName: "Sabino Horse", slots: "BE", quality: "common" },
    { itemName: "Waterdeep Horse", slots: "DE", quality: "common" },
];
