# Project 1 with Genereal Assembly: Vanilla JavaScript game.

## Overview
A 7 day solo project to create a single page game using vanilla JavaScript. This was the first project as part of the General Assembly Full-Stack course, following 4 weeks of learning.

## Technologies used: 
* Vanilla JavaScript (ES6)
* HTML5
* CSS3
* Git & GitHub
* Procreate
* GIMP

## The game: "Get to the pub"
![Get to the pub](https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-01/main/assets/Project01Screenshot.jpg)

You can check it out here >>> [https://daria-kafler.github.io/GA-SEI56-Project-01/](https://daria-kafler.github.io/GA-SEI56-Project-01/) 

So much has happened during 2020-2021, and you’re so close to putting it behind you forever. 
Use the ← ↑ ↓ →  keys to get to the pub safely.

### Game brief and requirements
* The game should be playable for one player.
* The obstacles should be auto generated.

The idea of a Frogger type game is to guide a family of frogs across a road, and a river to their homes at the top of the screen.
To make things more challenging there are numerous moving obstacles that the frogs must avoid to reach their destination.

### Approach
To start the project, I broke the game down into the different bits and bobs that would be required. I wasn't worried about pseudocode or making it neat at this point- but simply laying everything flat.

```
* Decide on style: css (maybe gifs too?)

* VARIABLES TO STORE EVERYTHING
  GRID, FUNCTION TO GENERATE GRID   

Player, player position
Obstacles, obstacle types, obstacles position
Score count - localStorage

* MAKE A GRID
For loop to create grid of divs.

* ADD AND MOVE PLAYER
To add player- a square on the grid will be given a class of the player.
For movement- on key press: player class removed from current square grid -> player class added to square corresponding with key press direction.


* GENERATE AND MOVE OBSTACLES -----
----- SHOULD THESE TO BE INCORPORATED INTO CREATE GRID? ----
  GENERATE
    const ObstaclesTypeOne = 'obstacleTypeOne'
    const ObstaclesTypeTwo = 'obstacleTypeTwo'
    const ObstaclesTypeThree = 'obstacleTypeThree'
    squares[position].classList.add(ObstaclesTypeOne)
    squares[position].classList.add(ObstaclesTypeTwo)
    squares[position].classList.add(ObstaclesTypeThree)

  INTERVALS
    Obstacles Auto generate and move in certain areas only 
    Interval function to add/remove special class group for certain areas of the grid? 
  
    Obstacles MOVE with Intervals.

* DETECT COLLISION
Condition if player-class grid position === obstacle-class grid position?

* FUNCTION FOR COLLISION - WHEN PLAYER TOUCHES OBSTACLE
Does player lose life or gets damage? Maybe some obstacles are actually beneficial? 

* MAKE DESTINATION
What happns when player reaches other side of screen?

WIN -  player reaches destination
LOSE - player collides 3 times
  
  NICE TO HAVE:
  
* ENLARGE PLAYER AND OBSTACLES
  WAY ONE
    Purely CSS - Class of player assigned to one div, Collision detecting will be only one square.
  WAY TWO - harder
    Find a way to clump together divs and track their position - should allow for detection collision on all squares in class.
    ^^^^^ NEED THIS ANYWAY TO BUILD OBSTACLE FORMATIONS
```

Then I threw the tasks up on a board, set deadlines for different parts of an MVP, and cracked on.

![Task board screenshot](https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-01/main/assets/taskboardproject01.png)


### Challenges
The main challanges have been detecting collision between objects and managing the different timers for each object, as well as the game score and reset functions.
I also wasn't familiar enough to utalise JS classes well enough, and ended up repeading loads of code.

```//* Add obstacle type ONE to grid  
  function addObstacleOne(ObsOnePosition) {
    squares[ObsOnePosition].classList.add(ObstaclesTypeOne)
  }
  // * Remove obstacle type ONE from grid
  function removeObstacleOne(ObsOnePosition) {
    squares[ObsOnePosition].classList.remove(ObstaclesTypeOne)
  }
  // * Add Obstacle Type TWO
  function addObstacleTwo(ObsTwoPosition) {
    squares[ObsTwoPosition].classList.add(ObstaclesTypeTwo)
  }
  // * Remove obstacle type TWO from grid
  function removeObstacleTwo(ObsTwoPosition) {
    squares[ObsTwoPosition].classList.remove(ObstaclesTypeTwo)
  }
```

I also knew that with my limited experience in CSS and digital art, I wouldn't be able to create the player character, obstacles and cityscape all in time.
For the player and obstacle sprites I used assets from [OpenGameArt.org](opengameart.org). Finding a cityscape that would fit the game, however, proved nearly impossible. Luckily I had an iPad laying around, and some basic drawing skills.

![Cityscape background](https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-01/main/assets/BackgroundGrid(1).png)

### Bugs
* Car objects are 'stuck' at the end of the screen instead of clearing.
* Movement for guy on skateboard is wrong and should be going back and forth.

### Future features
* Cars followed by more cars.
* Additional obstacle sprites, such as floating viruses, animals, more people, etc., to make game more interesting and feel fuller.
* Replace entire game background with nicer art, and make pub end goal more clear and appealing.
* Add a start button to run the game.

### Key takeaways
* Need to read up on JS classes, feel like code could have been much cleaner and more efficient if used classes for the obstacles.
* Should use more time psuedocoding, specifically planning out timers.
* Drawing is fun! 

### Acknowledgements
* Human sprites - [Peony](https://opengameart.org/users/peony) [CC](https://creativecommons.org/licenses/by/3.0/)
* Cars sprites - [gameguy](https://opengameart.org/users/gameguy) [Public domain](https://creativecommons.org/publicdomain/zero/1.0/)
