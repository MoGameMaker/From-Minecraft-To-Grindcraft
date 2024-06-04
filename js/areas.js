// Game Info
setGameInfo({
    name: "From Minecraft To Grindcraft",                         // The name of your game!
    version: "0.1",                                     // The current version of your game!
    icon: "images/system/air.png",                    // Link or path to an icon image for your game!
    ID: "fromMinecraftToGrindcraft",                             // Your game's ID! Should be unique for every game!
});

// Resources

addResources({                                          // Function for adding all the resources (items/tools/buildings) that are used in your game!
    air: {
        image: "images/system/air.png",
    },
    dirt: {
        image: "images/dirt.png",
    },
    sticks: {
        image: "images/sticks.png",
    },
    "oak door": {
        image: "images/oak_door.png",
    },
    "oak planks": {
        image: "images/oak_planks.png",
    },
    "crafting table": {
        image: "images/crafting_table.png",
    },
    "oak logs": {
        image: "images/oak_logs.png",
    },
    //Axes
    "wooden axe": {
        image: "images/axe/wooden_axe.png",
    },
    "stone axe": {
        image: "images/axe/stone_axe.png",
    },
    "iron axe": {
        image: "images/axe/iron_axe.png",
    },
    "gold axe": {
        image: "images/axe/gold_axe.png",
    },
    "diamond axe": {
        image: "images/axe/diamond_axe.png",
    },
    "netherite axe": {
        image: "images/axe/netherite_axe.png",
    },
    //Axes

    //Axes
    "wooden pickaxe": {
        image: "images/pickaxe/wooden_pickaxe.png",
    },
    "stone pickaxe": {
        image: "images/pickaxe/stone_pickaxe.png",
    },
    "iron pickaxe": {
        image: "images/pickaxe/iron_pickaxe.png",
    },
    "gold pickaxe": {
        image: "images/pickaxe/gold_pickaxe.png",
    },
    "diamond pickaxe": {
        image: "images/pickaxe/diamond_pickaxe.png",
    },
    "netherite pickaxe": {
        image: "images/pickaxe/netherite_pickaxe.png",
    },
    //Axes
});

// Areas

addArea("o",                                            // Function for adding areas to your game
{
    name: "Overworld",
    image: "images/areas/cityState.png",
    unlocked: true,
    updateWhileUnactive: true,

    grinds: [
        {
            name: "surface",
            unlocked: true,
            auto: ["wodden axe"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                {
                    id: "oak logs",
                    time: [["diamond axe", 0.4], ["gold axe", 0.45], ["iron axe", 0.5], ["stone axe", 0.75], ["wooden axe", 1.5], ["", 3.0]],
                    probability: 50,
                },
                {
                    id: "dirt",
                    time: [["diamond shovel", 0.1], ["gold shovel", 0.125], ["iron shovel", 0.15], ["stone shovel", 0.2], ["wooden shovel", 0.4], ["", 0.75]],
                    probability: 50,
                },
            ]
        },
    ],

    crafts: [
        {
            name: "oak logs",
            desc: "Used to make oak planks",
            type: "display",
            cost: [["oak logs", 0]],
            amount: 4,
        },
        {
            name: "oak planks",
            desc: "Used to make a crafting table",
            type: "craft",
            cost: [["oak logs", 1]],
            amount: 4,
        },
        {
            name: "crafting table",
            desc: "Required craft complex items",
            type: "craft",
            cost: [["oak planks", 4]],
            amount: 1,
        },
        {
            name: "sticks",
            desc: "Used to craft planks",
            type: "craft",
            cost: [["oak planks", 2]],
            amount: 4,
        },
        {
            name: "oak door",
            desc: "Required to build a villager house",
            type: "craft",
            cost: [["oak planks", 6]],
            amount: 3,
        },
        {
            name: "dirt",
            desc: "Used to build a dirt hut",
            type: "display",
            cost: [["dirt", 0]],
            amount: 0,
        },

        //Ores

        //Ores

        //Tools
        {
            name: "wooden pickaxe",
            desc: "Unlocks caves and allows cobblestone, coal ore and stone varient mining",
            type: "craft",
            cost: [["sticks", 2], ["oak planks", 3]],
            amount: 1,
            unlockGrinds: ["caves"],
        },
        {
            name: "wooden axe",
            desc: "Mines logs 2x faster",
            type: "craft",
            cost: [["sticks", 2], ["oak planks", 3]],
            amount: 1,
        },
        {
            name: "stone pickaxe",
            desc: "Allows iron ore mining",
            type: "craft",
            cost: [["sticks", 2], ["cobblestone", 3]],
            amount: 1,
        },
        {
            name: "stone axe",
            desc: "Mines logs 4x faster",
            type: "craft",
            cost: [["sticks", 2], ["cobblestone", 3]],
            amount: 1,
        },
        {
            name: "iron pickaxe",
            desc: "Allows gold ore, redstone ore, emerald ore and diamond ore mining",
            type: "craft",
            cost: [["sticks", 2], ["iron ingot", 3]],
            amount: 1,
        },
        {
            name: "iron axe",
            desc: "Mines logs 6x faster",
            type: "craft",
            cost: [["sticks", 2], ["iron ingot", 3]],
            amount: 1,
        },
        {
            name: "gold pickaxe",
            desc: "Mines stone and stone varients 7x faster than a iron pickaxe",
            type: "craft",
            cost: [["sticks", 2], ["gold ingot", 3]],
            amount: 1,
        },
        {
            name: "gold axe",
            desc: "Mines logs 7x faster",
            type: "craft",
            cost: [["sticks", 2], ["gold ingot", 3]],
            amount: 1,
        },
        {
            name: "diamond pickaxe",
            desc: "Allows obsidian mining",
            type: "craft",
            cost: [["sticks", 2], ["diamond", 3]],
            amount: 1,
        },
        {
            name: "diamond axe",
            desc: "Mines logs 8x faster",
            type: "craft",
            cost: [["sticks", 2], ["diamond", 3]],
            amount: 1,
        },
        //Tools
    ],

    update(diff) {                                      // diff is the time in milliseconds since last time the update function was runned
        
    },
}
);

// Function that will be runned when the website is loaded
function onLoad(oldVersion) {
    // If the game version in the player's save is not the same as the current game version:
    if (oldVersion !== player.gameInfo.version) {
        // Write it to the console
        console.log(oldVersion);
    }
}