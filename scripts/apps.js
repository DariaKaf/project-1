function init() {

  // * Variables
  const grid = document.querySelector('.grid')
  const livesLeft = document.querySelector('.livesLeft')

  const width = 19
  const squareCount = width * width
  const squares = []
  
  let lives = 3
  livesLeft.innerText = lives


  const playerCharacter = 'dude'
  const playerCharacterStartPosition = 332
  let playerCharacterCurrentPosition = 332

  const ObstaclesTypeOne = 'obstacle-type-one'
  const ObstaclesTypeTwo = 'obstacle-type-two'
  const ObstaclesTypeThree = 'obstacle-type-three'
  
  const ObsTypeOneStartPosition = 304
  let ObsTypeOneCurrentPosition = 304
  let ObsTypeOneDirection = 1   // 1 is right, -1 is left.
  
  const ObsTypeTwoStartPosition = 284
  let ObsTypeTwoCurrentPosition = 284
  let ObsTypeTwoDirection = 1 

  const ObsTypeThreeStartPosition = 247
  let ObsTypeThreeCurrentPosition = 247
  let ObsTypeThreeDirection = 1 

  // * Making the grid
  function createGrid(playerCharacterStartPosition) {
    for (let i = 0; i < squareCount; i++) {
      const square = document.createElement('div')
      square.innerText = i
      grid.appendChild(square)
      squares.push(square)
    }  
    
    addPlayer(playerCharacterStartPosition)
    addObstacleOne(ObsTypeOneStartPosition) 
    addObstacleTwo(ObsTypeTwoStartPosition)
    obstOneMovement()  
    obstTwoMovement()
    obstThreeMovement()
  }

  
  //* Add player character to grid
  function addPlayer(position) {
    squares[position].classList.add(playerCharacter)
  }

  // * Remove player character from grid
  function removePlayer(position) {
    squares[position].classList.remove(playerCharacter)
  }

  // * Move player character
  function handleKeyStroke(event) {
    const key = event.keyCode
    removePlayer(playerCharacterCurrentPosition)
    if (key === 39 && playerCharacterCurrentPosition % width !== width - 1) {
      playerCharacterCurrentPosition++  //RIGHT KEY
    } else if (key === 37 && playerCharacterCurrentPosition % width !== 0) {
      playerCharacterCurrentPosition--  //LEFT KEY
    } else if (key === 38 && playerCharacterCurrentPosition >= width) {
      playerCharacterCurrentPosition -= width // UP KEY
    } else if (key === 40 && playerCharacterCurrentPosition + width <= width * width - 1) {
      playerCharacterCurrentPosition += width // DOES KEY
    } else {
      console.log('OOPS NOT THERE')
    }
    addPlayer(playerCharacterCurrentPosition)
    if (playerCharacterCurrentPosition === 47) {
      win()
    }
  }

  // * ADD OBSTACLES
  
  //* Add obstacle type ONE to grid  
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

  // * Add Obstacle Type THREE
  function addObstacleThree(ObsTwoPosition) {
    squares[ObsTwoPosition].classList.add(ObstaclesTypeThree)
  }
  // * Remove obstacle type THREE
  function removeObstacleThree(ObsThreePosition) {
    squares[ObsThreePosition].classList.remove(ObstaclesTypeThree)
  }




  
  // * Obst ONE movement
  function obstOneMovement() {
    const timerOne = setInterval(() => {
      const ObstAtStart = ObsTypeOneCurrentPosition === ObsTypeOneStartPosition
      const ObstAtEnd = ObsTypeOneCurrentPosition % width === width - 1
      
      if (ObstAtStart) {
        removeObstacleOne(ObsTypeOneCurrentPosition)
        ObsTypeOneCurrentPosition++
        ObsTypeOneDirection = 1
      } else if (ObstAtEnd) {
        removeObstacleOne(ObsTypeOneCurrentPosition)
        ObsTypeOneCurrentPosition--
        ObsTypeOneDirection = -1
      } else if (!ObstAtEnd && ObsTypeOneDirection === 1) {
        removeObstacleOne(ObsTypeOneCurrentPosition)
        ObsTypeOneCurrentPosition++
      } else if (!ObstAtEnd && ObsTypeOneDirection === -1) {
        removeObstacleOne(ObsTypeOneCurrentPosition)
        ObsTypeOneCurrentPosition--
      } 
      if (ObsTypeOneCurrentPosition === playerCharacterCurrentPosition){
        collision()
      }
      addObstacleOne(ObsTypeOneCurrentPosition)
    }, 200)
  }

  // * Obst TWO movement
  function obstTwoMovement() {
    const timerTwo = setInterval(() => {
      const ObstAtStart = ObsTypeTwoCurrentPosition % width === width - 1 
      const ObstAtEnd = ObsTypeTwoCurrentPosition === 266
      
      if (ObstAtStart) {
        removeObstacleTwo(ObsTypeTwoCurrentPosition)
        ObsTypeTwoCurrentPosition--
        ObsTypeTwoDirection = -1
      } else if (ObstAtEnd) {
        removeObstacleTwo(ObsTypeTwoCurrentPosition)
      } else if (!ObstAtEnd && ObsTypeTwoDirection === -1) {
        removeObstacleTwo(ObsTypeTwoCurrentPosition)
        ObsTypeTwoCurrentPosition--
      }  
      if (ObsTypeTwoCurrentPosition === playerCharacterCurrentPosition){
        collision()
      }
      addObstacleTwo(ObsTypeTwoCurrentPosition)
    }, 200)
  }

  // * Obst THREE movement
  function obstThreeMovement() {
    const timerThree = setInterval(() => {
      const ObstAtStart = ObsTypeThreeStartPosition
      const ObstAtEnd = ObsTypeThreeCurrentPosition % width === width - 1
      
      if (ObstAtStart && !ObstAtEnd) {
        removeObstacleThree(ObsTypeThreeCurrentPosition)
        ObsTypeThreeCurrentPosition++
        ObsTypeThreeDirection = 1
      } else if (ObstAtEnd) {
        removeObstacleThree(ObsTypeThreeCurrentPosition)
      } 
      if (ObsTypeThreeCurrentPosition === playerCharacterCurrentPosition){
        collision()
      }
      addObstacleThree(ObsTypeThreeCurrentPosition)
    }, 200)
  }


  // * COLLISION DETECTION WHILE HAVE LIVES
  function collision() {
    console.log('Wham!') // COLLISION ANIMATION HERE.
    // Add sprite changes here //
    removePlayer(playerCharacterCurrentPosition)
    playerCharacterCurrentPosition = playerCharacterStartPosition
    addPlayer(playerCharacterStartPosition)
    lives--
    livesLeft.innerText = lives
    if (lives === 0) {
      resetGame()
    }
  } 
    
  
  // * RESET GAME AFTER ALL LIVES LOST OR PLAYER WON
  function resetGame() {
    console.log('game reset, player either lost 3 lives or got to the pub')
    lives = 3
    removePlayer(playerCharacterCurrentPosition)
    playerCharacterCurrentPosition = playerCharacterStartPosition
    addPlayer(playerCharacterStartPosition)
    removeObstacleOne(ObsTypeOneCurrentPosition)
    ObsTypeOneCurrentPosition = ObsTypeOneStartPosition
    addObstacleOne(ObsTypeOneStartPosition)
    //removeObstacleTwo(ObsTypeTwoCurrentPosition)
    
  }

  // * WIN GAME - Player reached the pub! Need ot find where to call this though.
  function win() {
    console.log('player reached the pub!')
    resetGame()
  }

  document.addEventListener('keydown', handleKeyStroke)
  createGrid(playerCharacterStartPosition)








  // -------------------------------- //




  // * CREATING CLASS FOR OBSTACLES * //
  //! Abandoned for lack of time.

  // class obstacle {
  //   constructor(type) {
  //     this.type = type
  //   }
  //   moveObstacle() {
  //     const timerOne = setInterval(() => {
  //       const ObstAtStart = ObsTypeOneCurrentPosition === ObsTypeOneStartPosition
  //       const ObstAtEnd = ObsTypeOneCurrentPosition % width === width - 1
        
  //       if (ObstAtStart) {
  //         removeObstacleOne(ObsTypeOneCurrentPosition)
  //         ObsTypeOneCurrentPosition++
  //         ObsTypeOneDirection = 1
  //       } else if (ObstAtEnd) {
  //         removeObstacleOne(ObsTypeOneCurrentPosition)
  //         ObsTypeOneCurrentPosition--
  //         ObsTypeOneDirection = -1
  //       } else if (!ObstAtEnd && ObsTypeOneDirection === 1) {
  //         removeObstacleOne(ObsTypeOneCurrentPosition)
  //         ObsTypeOneCurrentPosition++
  //       } else if (!ObstAtEnd && ObsTypeOneDirection === -1) {
  //         removeObstacleOne(ObsTypeOneCurrentPosition)
  //         ObsTypeOneCurrentPosition--
  //       } 
  //       addObstacleOne(ObsTypeOneCurrentPosition)
  //     }, 200)
  //   }
  // }
  // -------------------------------- //
}

window.addEventListener('DOMContentLoaded', init)