# Grinds

Grinds are the main way to get resources. To add a new grind, go to the "grinds" property in the `addArea` function:

```
grinds: [
    {
        name: "surface",                                // Name of the grind
        unlocked: true,                                 // If true, the grind will be unlocked when the area is unlocked
        auto: ["dirt hut"],                             // List of items that will automatically grind this grind
        background: "images/grinds/overworld.png",      // Background image of the grind
        resources: [                                    // List of the different resources in the grind
            {
                id: "stick",                            // Name of resource        
                time: [["", 0.5]],                      // Time to grind with different tools
                image: "stick",                         // Image of the resource, can be either a link/path or a resource name
                probability: 50,                        // The higher the number, the more likely you are to get this resource
            },
            {
                id: "dirt",
                time: [["", 0.6]],
                image: "dirt",
                probability: 50,
            },
        ]
    },

    {
        name: "forest",
        unlocked: false,
        auto: ["lumberjack"],
        background: "images/grinds/forest.png",
        resources: [
            {
                id: "wood",     
                time: [["iron axe", 0.3], ["", 1]],
                image: "wood",
                probability: 80,
            },
            {
                id: "leaves",
                time: [["shears", 0.1, 2], ["", 0.4]],
                image: "leaves",
                probability: 20,
            },
        ]
    },
],
```

Individual grinds can have these properties:

 - name: The name of the grind.
 - unlocked: true or false. Should not be inside "". If true, the grind will be unlocked when the area is unlocked.
 - auto: **optional**. A list of items that will automatically grind this grind, so that you won't have to click it all the time! Each item in the list should be separated by a comma (for example: `auto: ["farmer", "miner", "hunter"],`).
 - background: A link/path to the background image of the grind. Usually "images/grinds/imageName.png".
   - Images should be either be 250x100 pixels or 500x200 pixels in size (Though you can also use other sizes with the same ratio).
 - resources: A list of the different resources you can get in this grind. More info below.

Inside the `resources: [],` property, you have to add all the different resources that you can get in the grind.


Resources are stored in the following format:
```
{
    id: "name",                             // Name of resource        
    time: [["tool", time, amount]],         // Time to grind with different tools
    image: "name/link/path",                // Image of the resource. Can be either a link/path or a resource name
    mults: [["tool/item", speed, amount]],  // Speed and amount multiplications that will be applied when you have unlocked different items
    probability: 50,                        // The higher the number, the more likely you are to get this resource
},
```

Individual resources can have these properties:

 - id: The name of the resource. Has to be the same as an already existing resource!
 - time: A list of all the tools that can grind this resource, how long it takes for them to grind it and how much of the resource you get!
   1. The first value in the list should be the name of the tool. (For example: `["wooden pickaxe"]`). You can also use `""` for when you just use your hand.
   2. The second value in the list should be the time in seconds to grind this resource. (For example: `["wooden pickaxe", 0.5]`).
   3. **optional**. The third value in the list should be the amount of the resource that you get when using this tool. (For example: `["wooden pickaxe", 0.5, 2]`).
   - Example: `time: [["stone pickaxe", 0.3, 3], ["wooden pickaxe", 0.5, 2], ["", 0.8],`
     - With this, it would take 0.3 seconds to grind the resource with a stone pickaxe, and you would get 3 items. With a wooden pickaxe, it would take 0.5 seconds and you would get 2. Lastly, with just your hand, it would take 0.8 seconds and you would only get 1.
     - **Important:** Always put the best tool first in the list, or else a weaker tool will be used instead!
 - image: **optional**. Either the name of a resource or a link/path to the image that you want to use. Defaults to the resource name.
 - mults: **optional**. Pretty similar to the `time` property. The first value in the list should be the name of the item that gives the boost. The second value in the list should be a number that divides the time it will take to grind the resource (For example: 2 will halve the time). The third value (**optional**) should be a number that multiplies the amount of items you get from the grind (For example: 2 will double the amount).
   - Example: `mult: [["farmer", 1.5, 3], ["bone meal", 2]],`
   - With this, the farmer would make the grind take 1.5x less time and give 3x more items, and the bone meal would make it take 2x less time.
   - **Important:** Here, the items can be placed in any order that you want, since all the boosts will be added anyways.
 - probability: A number that tells how likely a resource is to be chosen as your next grind. (If for example resource 1 has a probability of 1 and resource 2 has a probability of 2, resource 2 is twice as likely to be chosen as resource 1).
 - customResources (Advanced): **optional**. If the above properties are too simple for you, you can make the different resources in the grind reward custom resources, instead of just using the id name. Here's an example of what custom resources might look like:

```
{
    id: "cow",                                                  // Can be whatever you want, since it won't be used anyways!
    time: [["stone sword", 0.5], ["wooden sword", 0.8]],
    image: "images/cow.png",
    probability: 30,
    customResources: {                                          // Tells the grind what resources you will get from this grind
        guaranteed: [                                           // You are guaranteed to get these resources when grinding
            {
                name: "raw beef",                               // Name of the resource
                amount: [1, 2],                                 // Amount of the resource that you will get. [1, 2] means that you will get a random amount from 1 to 2
            },
        ],
        random: [                                               // You will get only 1 of these resources when grinding
            {
                name: "leather",                                // Name
                amount: 0,                                      // Amount
                probability: 60,                                // Probability of getting this resource
            },
            {
                name: "leather",
                amount: 1,
                probability: 40,
            },
        ],
        randomRolls: 1,                                         // The amount of rolls for random items
    },
},
```

 - As we can see, the `customResources` property is divided into `guaranteed` and `random` resources.
   - The `guaranteed` resources is a list of different resources that you are guaranteed to get from that item in the grind. The guaranteed resources can have two properties:
     - name: Name of the resource
     - amount: The amount of the resource that you will get (before tool or mults buffs are added). The amount can either be just a number, or a list with two numbers (smallest number first). If the amount is a list, a random number will be selected, from the lowest to the highest number. (For example: `amount: [3, 8],` will give from 3 to 8 of the resource).
   - The `random` resources is a list of different resources where one of them will be chosen at random. The random resources can have three properties:
     - name: Name of the resource
     - amount: The amount of the resource that you will get (before tool or mults buffs are added). The amount can either be just a number, or a list with two numbers (smallest number first).
     - probability: A number that tells how likely the resource is to be chosen. Higher number = higher chance of getting it.
   - In addition to this, you can also define the amount of rolls, using the `randomRolls` property.
     - `randomRolls` defaults to 1 and is **optional**.
     - If `randomRolls` is set to 3, you would get 3 of the random resources from the grind.