function init() {

  // * Variables
  const grid = document.querySelector('.grid')
  const livesLeft = document.querySelector('.livesLeft')
  const header = document.querySelector('p')

  const width = 10
  const squareCount = width * width
  const squares = []
  
  let lives = 3
  livesLeft.innerText = lives


  const playerCharacter = 'dude'
  const playerCharacterStartPosition = 94
  let playerCharacterCurrentPosition = 94

  const ObstaclesTypeOne = 'obstacle-type-one'
  const ObstaclesTypeTwo = 'obstacle-type-two'
  const ObstaclesTypeThree = 'obstacle-type-three'
  const ObstaclesTypeFour = 'obstacle-type-four'
  const trophy = 'cerveza'
  
  const ObsTypeOneStartPosition = 80
  let ObsTypeOneCurrentPosition = 80
  let ObsTypeOneDirection = 1   // 1 is right, -1 is left.
  
  const ObsTypeTwoStartPosition = 79
  let ObsTypeTwoCurrentPosition = 79
  let ObsTypeTwoDirection = 1 

  const ObsTypeThreeStartPosition = 60
  let ObsTypeThreeCurrentPosition = 60
  let ObsTypeThreeDirection = 1 

  const ObsTypeFourStartPosition = 40
  let ObsTypeFourCurrentPosition = 40
  let ObsTypeFourDirection = 1   

  const trophyLoc = 4

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
    addObstacleThree(ObsTypeThreeStartPosition)
    addObstacleFour(ObsTypeFourStartPosition)
    obstOneMovement()  
    obstTwoMovement()
    obstThreeMovement()
    obstFourMovement()
    addtrophy(trophyLoc)
  }

  // * PLAYER CHARACTER ON GRID & MOVEMENT * //
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
    } else if (key === 37 && playerCharacterCurrentPosition % width !== 0 ) {
      playerCharacterCurrentPosition--  //LEFT KEY
    } else if (key === 38 && playerCharacterCurrentPosition >= width) {
      playerCharacterCurrentPosition -= width // UP KEY
    } else if (key === 40 && playerCharacterCurrentPosition + width <= width * width - 1) {
      playerCharacterCurrentPosition += width // DOWN KEY
    } else {
      console.log('OOPS NOT THERE')
    }
    addPlayer(playerCharacterCurrentPosition)
    if (playerCharacterCurrentPosition === width - 6) {
      win()
    }
  }

  // * OBSTACLES ON GRID & MOVEMENT * //
  
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
  function addObstacleThree(ObsThreePosition) {
    squares[ObsThreePosition].classList.add(ObstaclesTypeThree)
  }
  // * Remove obstacle type THREE
  function removeObstacleThree(ObsThreePosition) {
    squares[ObsThreePosition].classList.remove(ObstaclesTypeThree)
  }
  // * Add Obstacle Type FOUR
  function addObstacleFour(ObsFourPosition) {
    squares[ObsFourPosition].classList.add(ObstaclesTypeFour)
  }
  // * Remove obstacle type FOUR
  function removeObstacleFour(ObsFourPosition) {
    squares[ObsFourPosition].classList.remove(ObstaclesTypeFour)
  }


  // * Add trophy
  function addtrophy(trophyPosition) {
    squares[trophyPosition].classList.add(trophy)
  }


  // * RESET GAME AFTER ALL LIVES LOST OR PLAYER WON
  function resetGame() {
    const innerResetDelay = setTimeout(() => {
      //console.log('game reset, player either lost 3 lives or got to the pub')
      lives = 3
      header.innerText = `You have ${lives} lives left` 
      removePlayer(playerCharacterCurrentPosition)
      playerCharacterCurrentPosition = playerCharacterStartPosition
      addPlayer(playerCharacterStartPosition)
      removeObstacleOne(ObsTypeOneCurrentPosition)
      ObsTypeOneCurrentPosition = ObsTypeOneStartPosition
      addObstacleOne(ObsTypeOneStartPosition)
      removeObstacleTwo(ObsTypeTwoCurrentPosition)
      ObsTypeTwoCurrentPosition = ObsTypeTwoStartPosition
      addObstacleTwo(ObsTypeTwoStartPosition)
      removeObstacleThree(ObsTypeThreeCurrentPosition)
      ObsTypeThreeCurrentPosition = ObsTypeThreeStartPosition
      addObstacleThree(ObsTypeThreeStartPosition)
      removeObstacleFour(ObsTypeFourCurrentPosition)
      ObsTypeFourCurrentPosition = ObsTypeFourStartPosition
      addObstacleFour(ObsTypeFourStartPosition)
      
    }, 300)
    
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
      const ObstAtEnd = ObsTypeTwoCurrentPosition === 70
      
      if (ObstAtStart && !ObstAtEnd) {
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
        removeObstacleThree(ObsTypeThreeCurrentPosition)
      } else if (ObstAtEnd) {
        removeObstacleThree(ObsTypeThreeCurrentPosition)
      } 
      if (ObsTypeThreeCurrentPosition === playerCharacterCurrentPosition){
        collision()
      }
      addObstacleThree(ObsTypeThreeCurrentPosition)
    }, 200)
  }
  // * Obst Four movement
  function obstFourMovement() {
    const timerFour = setInterval(() => {
      const ObstAtStart = ObsTypeFourCurrentPosition === ObsTypeOneStartPosition
      const ObstAtEnd = ObsTypeFourCurrentPosition % width === width - 1
      
      if (!ObstAtEnd && ObsTypeFourDirection === 1) {
        removeObstacleFour(ObsTypeFourCurrentPosition)
        ObsTypeFourCurrentPosition++

      } else if (ObstAtEnd && ObsTypeFourStartPosition + width) {
        removeObstacleFour(ObsTypeFourCurrentPosition)
        ObsTypeFourCurrentPosition = ObsTypeFourCurrentPosition - 10
        if (ObstAtEnd && !ObsTypeFourStartPosition + width) {
          ObsTypeFourDirection = -1
          ObsTypeFourCurrentPosition--
          removeObstacleFour(ObsTypeFourCurrentPosition)
        }  
      } else if (!ObstAtEnd && !ObstAtStart && ObsTypeFourDirection === -1) {
        removeObstacleFour(ObsTypeFourCurrentPosition)
        ObsTypeFourCurrentPosition--

      } else if (ObsTypeFourCurrentPosition === ObstAtStart - 10) {
        ObsTypeFourCurrentPosition = ObsTypeFourCurrentPosition + 10
        ObsTypeFourDirection = 1
        ObsTypeFourCurrentPosition++
      }
      if (ObsTypeFourCurrentPosition === playerCharacterCurrentPosition){
        collision()
      }
      addObstacleFour(ObsTypeFourCurrentPosition)
    }, 200)
  }



  // * COLLISION DETECTION WHILE HAVE LIVES

  function collision() {
    console.log('Wham!') // COLLISION ANIMATION HERE.
    console.log('header', header)
    console.log('lives variable', lives)
    // Add sprite changes here //
    removePlayer(playerCharacterCurrentPosition)
    playerCharacterCurrentPosition = playerCharacterStartPosition
    addPlayer(playerCharacterStartPosition)
    if ((lives >= 0) && (lives !== 0)) {
      lives--
      header.innerText = `You have ${lives} lives left`
      if (lives === 0) {
        header.innerText = 'You lose!'
        const resetDelay = setTimeout(() => {
          resetGame()
        },200 )
      }
    }  
  } 
    
  
  

  // * WIN GAME - Player reached the pub
  function win() {
    console.log('player reached the pub')
    header.innerText = 'You reached the pub!'
    //! SOLVE CALLING IMG FROM JS playerCharacter.style.backgroundImage = 'url("/dariakafler/developement/project-1/assets/Red/redfront.png")'
    const resetDelay = setTimeout(() => {
      resetGame()
    }, 300)
  
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