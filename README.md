# Emblem of Fire

### Background
This project is a browser game modeled after the 6th and 7th entries in Nintendo's popular Fire Emblem series. The gameplay features turn-based strategy against an AI player in which the the player moves his/her units across a map to fight units on the opposing team and acheive victory by capturing the opposing team's throne. 

### Functionality & MVP

This project intends to emulate the core mechanics from the series including: 
* unit pathfinding, achieved using Dijkstra's algorithm to account for unit movement through terrain with varied move costs 
* sprite animations that make use of custom sprite classes to allow rendering of unit map and combat sprites and animations.  
* combat mechanics that use a probabalistic system to determine the outcomes of single combat events
* varied AI behavior amongst different enemy units to allow for dynamic and fun behavior.

Users will be able to control a cursor that they can move around during their turn to select their units, move them, and fight opposing units. The screen will include a button map to allow users to quickly infere the control scheme

### Wireframes (screenshot)

The app will include a single screen surronded by a button map on the left and right sides that communicates the controls to the user. The logo will be featured above the screen while links to my LinkedIn and GitHub accounts will be listed below the screen. 

![screen shot](https://raw.githubusercontent.com/rowanlittlefield/JSFE7BOTW/master/screen_shot.png)

### Architecture and Technologies

This project will be implemented using the following technologies

* `JavaScript` for game logic
* `HTML5 canvas` for rendering
*  `webpack` for bundling files

### Implementation Timeline

**Day 1**
  Complete combat animations.
**Day 2**
  Finish cobat animations if have not already done so. Create and style menu screen, game over window and html surrounding the main canvas element. 
**Day 3**
  Implement animations signaling transition between player turn and enemy turn. Refactor brittle sections of code associated with turn transitions. Begin to integrage webpack into the project since this project was originally implemented not using this technology.  
**Day 4**
  Finish integrating webpack into the project.
**Bonus** 
* Very brief introductory cutscene between main menu and gameplay.
* Leveling mechanics and animations
* Refactor code associated with combat animations.
