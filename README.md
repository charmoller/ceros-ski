# Ceros Ski Code Challenge

Ceros Ski Code Challenge

For this challenge, I have implemented bug fixes and enhancements to the base code for Ceros Ski, a version of the 
classic Windows game SkiFree. To play the game, go to https://ceros-ski.glitch.me/

Or deploy it locally by running:
```
npm install
npm run dev
```

## Implementation

The base code design/architecture was left essentially intact. The following bug fixes and enhancements were added.

### Bug Fixes
#### Bug Fix: Crash Skier and Go Left triggers blank screen

  * Steps to Reproduce:
    1. Load the game
    1. Crash into an obstacle
    1. Press the left arrow key
  * Expected Result: The skier gets up and is facing to the left
  * Actual Result: Giant blizzard occurs causing the screen to turn completely white (or maybe the game just crashes!)
  
  This bug was fixed and a unit test implemented to test for this use case. In addition, the same behavior was
  implemented for crash skier and turn right so that the skier gets up and is facing to the right.
  
  Also, the asset manager getAsset() function was modified to throw an Error when retrieving an asset that doesn't 
  exist to make the code easier to debug for potential future bugs of this type, and a unit test for this feature
  has been added.
  
### Unit tests

  Unit Tests have been implemented in Jest. The code coverage of the unit tests for all files is;
  * Statements 43.54%
  * Branches 22.73%
  * Functions 35.62%
  * Lines 43.9%
  
  Key areas that have been unit tested are;
  * Skier and Rhino Animation
  * Rhino Eat Skier
  * Jump Skier
  
### Features

The following new features and feature enhancements have been implemented.

#### Jump Skier

  * Jump the skier by pressing the spacebar or when teh skier hits a ramp.
  * The skier can jump rocks but not trees
  * The skier executes a trick flip while jumping
     
#### Rhino Chase

  * A Rhino appears after a set number of skier moves and chases the skier. 
  * The Rhino is animated using the rhino running assets. 
  * If the Rhino catches the skier, the rhino eats the skier and the game is over. 
  * The Rhino moves faster than the skier except when turning. When the rhino is turning it slows down for several
  moves before it speeds up again.
  * The Rhino can move through obstacles.

## Known Bugs

  * The asset manager load asset unit tests are not functioning and have been disabled.
  
## Future Improvements
  
  The following are future improvements I would like to make to the implementation:
  * Enhance the rhino chase algorithm. For example, make the rhino look like it's actually slowly turning or
  re-implement a more complex chase algorithm.
  * Mock the loading assets in unit tests so can implement more tests of the game and asset manager. 
  * Either make the rhino go around obstacles or leave as now where the rhino goes through obstacles but
  implement animations that show the obstacles being smashed.
  
   
