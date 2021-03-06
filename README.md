# Ceros Ski Code Challenge

Ceros Ski Code Challenge

For this challenge, I have implemented bug fixes and enhancements to the base code for Ceros Ski, a version of the 
classic Windows game SkiFree. To play the game, go to https://ceros-ski.glitch.me/

Or deploy it locally by running:
```
npm install
npm run dev
```

The base code design/architecture was left essentially intact. The following bug fixes and enhancements were
implemented.

## Bug Fixes
### Bug Fix: Crash Skier and Go Left triggers blank screen

  * Steps to Reproduce:
    1. Load the game
    1. Crash into an obstacle
    1. Press the left arrow key
  * Expected Result: The skier gets up and is facing to the left
  * Actual Result: Giant blizzard occurs causing the screen to turn completely white (or maybe the game just crashes!)
  
  This bug was fixed and a unit test implemented to test for this use case. In addition, the same behavior was
  implemented for crash skier and turn right so that the skier gets up and is facing to the right.
  
  Also, the asset manager get asset function was modified to throw an Error when retrieving an asset that hasn't 
  been loaded to make the code easier to debug for potential future bugs of this type. I also implemented a unit test
  for this error.
  
## Unit tests

  Unit Tests have been implemented in Jest. To run the unit tests execute:
```
npm test
```
  
  Key areas that have been unit tested are;
  * Skier and Rhino Animation
  * Rhino Eat Skier
  * Jump Skier
  * Calculate Score  
  
  The code coverage of the unit tests for all files is;
  * Statements 46.42%
  * Branches 27.27%
  * Functions 40.51%
  * Lines 46.8%
  
  To check the unit test code coverage execute:
```
npm test-coverage
```

 
## Features

The following new features and feature enhancements have been implemented.

### Jump Skier

  * Jump the skier by pressing the spacebar.
  * Jump the skier by hitting a ramp.
  * The skier can jump rocks but not trees.
  * The skier executes a trick flip while jumping.
     
### Rhino Chase

  * A Rhino appears after a set number of skier moves and chases the skier. 
  * The Rhino is animated using the rhino running assets. 
  * If the Rhino catches the skier, the rhino eats the skier and the game is over. 
  * The Rhino moves faster than the skier except when turning. When the Rhino is turning it slows down for several
  moves before it speeds up again.
  * The Rhino can move through obstacles.
  
### Reset Game

  * Reset the game after the skier has been eaten by clicking the mouse.

### Score

   * Display a score as the skier travels further.
   * Reset score when game is reset.
   
## Known Bugs

  * The asset manager load asset unit tests are not functioning and have been disabled.
  * Refresh the browser sometimes causes a crash / blank screen.
  
## Future Improvements
  
  The following are recommended future improvements:
  * Enhance the rhino chase algorithm. Possible improvements could including making the rhino look like it's actually 
  slowly turning and/or implementing a more complex chase algorithm.
  * Fix mock loading of the assets in unit tests so can implement more tests of the game and asset manager. 
  * Either make the rhino go around obstacles or leave as now where the rhino goes through obstacles but
  implement animations that shows the obstacles being smashed.
  * Provide a way to pause and resume the game.
  * Increase the difficulty the longer the skier skis.
  * Implement additional unit tests and improve unit test coverage.
  * Modularize unit tests and factor out common code like the code to create expected objects.
  * Refactor Score into it's own class to decouple it from the Game class.
  * Improve how the score is displayed so that it isn't randomly floating in space.
  * Change the rhino chase so that the rhino stops chasing the skier after a period of time.


  
   
