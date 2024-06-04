# Overview

This is a basic breakdown of the different functions required to make a game.
If you want, you can just copy this into your [areas.js](/js/areas.js) file and edit it later.

### Notes:

 - Even though this tool doesn't require you to have any previous coding experience, understanding how and why it works will be a lot easier if you already know the basics of JavaScript.
 - For making more advanced games (for example with custom functions and variables), it is suggested to have at least some form of previous coding experience.

### Code Overview:

(Text after a "//" just means that it's a comment and won't change anything in the code.)
```
// Game Info

setGameInfo({
    name: "My Grindcraft Game",                         // The name of your game!
    version: "0.1",                                     // The current version of your game!
    icon: "images/system/air.png",                    // Link or path to an icon image for your game!
    ID: "myGrindcraftGame",                             // Your game's ID! Should be unique for every game!
});

// Resources

addResources(                                           // Function for adding all the resources (items/tools/buildings) that are used in your game!
    {
                                                        // Look in the resources docs for more information about this.
}
);

// Areas

addArea("c",                                            // Function for adding a new area. The "c" is the area ID. This should be unique for all the areas in your game!
{
    name: "City State",                                 // The name of the area.
    image: "images/areas/cityState.png",                // The image of the area.
    unlocked: true,                                     // If true, the area will be unlocked when you start the game. The first area should always be unlocked!
    updateWhileUnactive: true,                          // If true, grinds in this area will still give you resources when you travel to another area.

    grinds: [                                           // List of all the different grinds in this area.
                                                        // Look in the grinds docs for more information about this.
    ],

    crafts: [                                           // List of all the different crafts/recipes in this area.
                                                        // Look in the crafts docs for more information about this.
    ],
}
);

```

### More Information:

 - [Resources:](resources.md) Information about the resources/items that you use in your game.
 - [Areas:](areas.md) Information about areas and how to add them.
 - [Grinds:](grinds.md) Information about grinds and how to use them.
 - [Crafts:](crafts.md) Information about crafts and how to use them.
 - [Advanced:](advanced.md) More detailed information about the tool for making more advanced games. It is recommended to have more coding experience, with understanding of JavaScript objects, functions, arrays and variables, before trying to use any of this.

### Error Handling:

 - [Common Mistakes:](mistake-check.md) See a list of common mistakes to help find out what you've done wrong in your code!