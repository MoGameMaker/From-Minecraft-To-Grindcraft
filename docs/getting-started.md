# Getting started

Don't let the word "Github" scare you away. It's actually much easier to use than most people think, especially because most people use it the hard way. The key is Github Desktop, which lets you do everything you need to, without even touching the command line.

The benefits of using Github:

 - It makes it much, much easier to update the Grindcraft Game Maker.
 - You can share your work without any extra effort using githack, or with a bit more effort, set up a github.io site.
 - It lets you undo changes to your code, and to have multiple versions of it.
 - It lets you collaborate with other people, if you want to.

## Getting set up with Github Desktop, Visual Studio Code, and the Grindcraft Game Maker:

1. Install [Github Desktop](https://desktop.github.com/) and [Visual Studio Code](https://code.visualstudio.com/).

2. Make a Github account.

3. Log in on your browser, and go back to the Grindcraft Game Maker page. At the top right, there should be a button that says "fork". Click on it, and then on your username. You now have your own fork, or copy, of Grindcraft Game Maker tool!

4. Open Github Desktop and log in. Ignore everything else and choose "clone a repository". A "repository" is basically a "Github project", like the Grindcraft Game Maker. "Cloning" is downloading a copy of the repository to your computer.

5. Look for Grindcraft Game Maker in the list of repositiories (it should be the only one) and click "clone".

6. Select that you're using it for your own purposes, and click continue. It will download the files and handle everything.

### Using your repository

1. Click on "show in explorer/finder" to the right, and then open the index.html file in the folder. The page should open up on your browser. This will let you view and test your project locally!

2. To edit your project, click "open in VSCode" in Github Desktop.

3. Open [areas.js](/js/areas.js) in VSCode, and look at the top part where it has a "gameInfo" object. Fill in your game's name to whatever you want, and change the icon to something that fits your game! You also have to change the game ID. (It can be any text value, and it's used to determine where the savefile is. Make it something that's probably unique, and don't change it again later or else it'll effectively wipe existing saves)

4. Save [areas.js](/js/areas.js), and then reload [index.html](/index.html) in your browser. The title and icon on the tab will now be updated! You can reload the page every time you change the code to test it quickly and easily.

5. Go back to Github Desktop. It's time to save your changes into the git system by making a "commit". This basically saves your work and creates a snapshot of what your code looks like at this moment, allowing you to look back at it later.

6. At the bottom left corner, add a summary of your changes, and then click "commit to main".

7. Finally, at the top middle, click "push origin" to push your changes out onto the online repository.

8. You can view your project online, or share it with others, by going to https://raw.githack.com/[YOUR-GITHUB-USERNAME]/Grindcraft-Game-Maker/main/index.html. You do not need to do this to test your mod locally.

And now, you have successfully used Github! Head on over to the [docs](overview.md) to start making your game!

### Adding custom Discord links

To make custom Discord links for your game, go over to [index.html](/index.html) and go to the "meta"-tags:

```
<meta property="og:title" content="Grindcraft Game Creator">                                <!-- Title for Discord links -->
<meta property="og:description" content="A tool for creating Grindcraft-like games!">       <!-- Description for Discord links -->
<meta property='og:image' content="">                                                       <!-- Image for Discord links -->
<meta property="og:type" content="website">
<meta name="theme-color" content="#60ff52">                                                 <!-- Color for Discord links -->
```

To change the Discord link, you just change the text inside the `content=""` in these tags!
However, Discord usually takes a long time to update the contents of the links, so you might not see these changes in action until maybe 15-30 minutes later.