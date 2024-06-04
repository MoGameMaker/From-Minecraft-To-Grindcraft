# Areas

In your game, you can have multiple different areas, each with their own resources, grinds and crafts. To add a new area, you have to use the `addArea` function:

```
addArea("c",                                            // Function for adding a new area. The "c" is the area ID. This should be unique for all the areas in your game!
{
    name: "City State",                                 // The name of the area.
    image: "images/areas/cityState.png",                // The background image of the area.
    unlocked: true,                                     // If true, the area will be unlocked when you start the game. The first area should always be unlocked!
    updateWhileUnactive: true,                          // If true, grinds in this area will still give you resources when you travel to another area.

    grinds: [                                           // List of all the different grinds in this area.
                                                        
    ],

    crafts: [                                           // List of all the different crafts/recipes in this area.
                                                        
    ],

    update(diff) {                                      // Function that will be run every frame. Useful for more advanced games.
                                                        
    },
}
);
```

Individual areas can have these properties:

 - name: The name of the area.
 - image: A link/path to the background image of the area. Usually "images/areas/imageName.png".
   - Images should generally be either be 250x45 pixels or 500x90 pixels in size (Though you can also use other sizes with the same ratio if you want).
 - unlocked: Either true or false. Should not be placed inside "". If true, the area will be unlocked when you start the game. The first area should always be unlocked!
 - updateWhileUnactive: true or false. Should not be placed inside "". If true, grinds in this area will still give you resources when you travel to another area.
 - grinds: A list of all the different grinds in this area. For more information, go to the [grinds](grinds.md) docs.
 - crafts: A list of all the different crafts in this area. For more information, go to the [crafts](crafts.md) docs.
 - update(diff): **optional**. A function that will be run every frame. Useful for advanced games with changing variables.