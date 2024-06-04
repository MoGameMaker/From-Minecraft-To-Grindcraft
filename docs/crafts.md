# Crafts

Crafts are used to craft different resources into new items. To add a new craft, go to the "crafts" property in the `addArea` function:

```
crafts: [
     {
          name: "stick",                                                        // Name/id of the resource
          desc: "Used to craft planks",                                         // Description of the upgrade
          type: "display",                                                      // Craft type. Can either be "display" or "craft"
          cost: [["stick", 0]],                                                 // List of items that are required to craft this item
     },
     {
          name: "planks",
          desc: "Used to make a crafting table",
          type: "craft",
          cost: [["stick", 2]],
          unlockGrinds: ["forest"],                                             // List of grinds that will be unlocked by crafting this item
     },
     {
          name: "door",
          desc: "Required to build a dirt hut",
          type: "craft",
          amount: 3,                                                            // Used if you get more than one of the item
          cost: [["planks", 6]],
     },
     {
          name: "dirt hut",
          desc: "Required to beat the game!",
          type: "craft",
          cost: [["dirt", 23], ["crafting table", 1], ["door", 1]],
          message: "You have beaten the game!",                                 // Sends a message on screen the first time you craft this item
     },
],
```

Individual crafts can have these properties:

 - name: The name of the resource that will be crafted.
 - displayName: **optional**. Used if you want the name of the upgrade to be different from the resource name. Can be anything you want!
 - displayImage: **optional**. Used if you want the image of the upgrade to be different from the resource image. Can be either a resource name or a link/path.
 - desc: The description of the upgrade. Can be anything you want!
 - type: **optional**. The type of the craft. Can be either "display" or "craft".
   - display: The item can't be crafted, but instead just displays how many of that item you have.
   - craft (default): The item can be crafted.
 - amount: **optional**. How many of the item you get when crafting it. Default value is 1.
 - cost: A list of all the different resources required to craft this item. The first value in the list is the resource name and the second is the amount required.
   - Example: `cost: [["planks", 3], ["stick", 2]],`
   - With this, the item would cost 3 planks and 2 sticks to craft.
   - **Important:**
     - If you put 0 as the amount, you will still need at least 1 of the resource to craft the item, but the resource won't be used.
     - If you put a negative number as the amount (for example -5), you will need at least 5 of the resource to craft the item, but the resource won't be used.
 - message: **optional**. Sends a message on screen the first time you craft this item. Can be anything you want!
 - unlockGrinds: **optional**. A list of grinds that will be unlocked by crafting this item. (For example: `unlockGrinds: ["forest", "farm"],`).
 - unlockAreas: **optional**. A list of area IDs of the areas that will be unlocked by crafting this item. (For example: `unlockAreas: ["b", "i"],`).
 - autoCraft: **optional**. A list of items to be crafted and the time in milliseconds (1 thousandth of a second) to wait between every craft. (For example: `autoCraft: [["planks", 10], ["door", 100]],`).
   - This will craft 1x planks every 10 milliseconds (100x every second) and 1x door every 100 ms (10x every second).
 - runFunction (Advanced): **optional**. A list of lists, where the first value in the lists is the function name and the next values are the arguments for the function.
   - Example: `runFunction: [["calculateMults", 2, 5, 1.5], ["upgradeShovel"]],` will run the function `calculateMults` with the arguments `(2, 5, 1.5)`, and the function `upgradeShovel` with no arguments.