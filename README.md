# Emblem of Fire

[Live link](http://rowanlittlefield.com/JSFE7BOTW/)

### Screenshot

![Screenshot](https://user-images.githubusercontent.com/30376211/65392337-c3da7f00-dd41-11e9-9180-0419483ace30.jpg)

### Background
Emblem of Fire is a browser game modeled after the 6th and 7th entries in Nintendo's popular Fire Emblem series. The gameplay features turn-based strategy against an AI player in which the player moves his/her units across a map to fight units on the opposing team. The player achieves victory by capturing the opposing team's throne. 

### Functionality & MVP

This project intends to emulate the core mechanics from the series, including: 
* unit pathfinding, achieved using Dijkstra's algorithm to account for unit movement through terrain with varied move costs.
* sprite animations that make use of custom sprite classes to allow rendering of unit map and combat animations.
* combat mechanics that use a probabalistic system to determine the outcomes of combat events.
* varied AI behavior amongst different enemy units to allow for fun and dynamic gameplay.

Users will be able to control a cursor that they can use to select units, move them, and fight opposing units. The screen will include a button map to allow users to quickly infer the control scheme.

### Architecture and Technologies

This project will be implemented using the following technologies:

* `JavaScript` for game logic
* `HTML5 canvas` for rendering
*  `webpack` for bundling files
