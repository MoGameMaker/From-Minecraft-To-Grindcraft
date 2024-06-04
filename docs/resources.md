# Resources

Resources are basically all the items, tools, buildings, people and animals that exist in your game. To add a new resource, you have to use the `addResources` function:

```
addResources(                                          // Function for adding all the resources (items/tools/buildings) that are used in your game!
    {
     dirt: {                                           // Name of the resource
          image: "images/dirt.png",                    // link/path to the image of the resource
     },
     stick: {
          image: "images/stick.png",
     },
     "crafting table": {                               // If the resource name contains multiple words, you have to place it inside ""
        image: "images/craftingTable.png",
    },
}
);
```

Inside the `addResources` function, you have to add all your different resources.

Resources are stored in the following format:
```
name: {                                           // Name of the resource
     image: "images/imageName.fileType",          // link/path to the image of the resource
     amount: 0,                                   // The amount of items of this resource that you start with
     limit: 10,                                   // The limit to how many items you can have of this resource
},
```

Individual resources can have these properties:

 - image: Link/path to the image that belongs to this resource. Can be a link to an image on Google or a path to an image downloaded on your PC. To use a path, move the image to the "images" folder in your "Grindcraft-Game-Maker" folder. Then, you just change the text to "images/\<name\>.\<file type\>" (for example: images/dirt.png).
   - Images should generally be from 100 to 300 pixels in size. 
   - The `image`-property can also be set to `"blank"` or `""` for a blank image, or `"wip"` for a W.I.P. text.
 - amount: **optional**. Set an amount of the item that you will have when you start the game. Useful for testing.
 - limit: **optional**. Set a max amount of the item. If you reach that amount, you won't be able to get more of the item.

### Important:

 - All resources should have a unique name!
 - You can have multiple `addResources` functions if you want, for example one for every area, to easily distinguish between the different areas!