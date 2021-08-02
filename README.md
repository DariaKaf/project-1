# Project: “Get to the pub” 
A 7 day solo project to create a frogger-type game, to solidify Javascript knowledge.

So much has happened during 2020-2021, and you’re so close to putting it behind you forever. All you need now is to get to the pub safely.

### Tools used: Vanilla JavaScript (ES6), HTML5, CSS3, Procreate, Git & GitHub, yarn.



### Requirements
The game should be playable for one player.
The obstacles should be auto generated.


### Challenges
The main difficulty here is animating the obstacles and detecting collision. 
There will be a number of timers to manage across the whole game, which can be easily get out of hand.

====== MVP ======

base logic
css (gifs also)

<!-- * VARIABLES TO STORE EVERYTHING
  GRID
    FUNCTION TO GENERATE GRID   



Player, player position
Obstacles, obstacle types, obstacles position
Score count - localStorage

* MAKE A GRID
According to Charlottes lesson.

* ADD AND MOVE PLAYER
According to Charlottes lesson.
Would use Keyup -->

* ENLARGE PLAYER AND OBSTACLES
  WAY ONE
    Purely CSS - Class of player assigned to one div, Collision detectin will be only one square.
  WAY TWO - harder
    Find a way to clump together divs and track their position - should allow for detection collision on all squares in class.
    ^^^^^ NEED THIS ANYWAY TO BUILD OBSTACLE FORMATIONS

* GENERATE AND MOVE OBSTACLES -----
----- THESE TO BE INCORPORATED INTO CREATE GRID??? ----
  GENERATE
    const ObstaclesTypeOne = 'obstacleTypeOne'
    const ObstaclesTypeTwo = 'obstacleTypeTwo'
    const ObstaclesTypeThree = 'obstacleTypeThree'
    squares[position].classList.add(ObstaclesTypeOne)
    squares[position].classList.add(ObstaclesTypeTwo)
    squares[position].classList.add(ObstaclesTypeThree)

  INTERVALS
    Obstacles Auto generate and move in certain areas only 
    Interval function to add/remove Special class group for certain areas of the grid? 
  
    Obstacles MOVE with Intervals.

* DETECT COLLISION
Condition for if player-class tries to access same grid positin as obstacle-class?

* FUNCTION FOR COLLISION - WHEN PLAYER TOUCHES OBSTACLE
Does player lose life or gets damage? Maybe some obstacles are actually beneficial? 

* MAKE DESTINATION
What happnes when player reaches other side of screen?

  WIN -  player reaches destination
  LOSE - player collides 3 times
