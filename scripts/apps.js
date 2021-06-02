function init() {

  // * Variables
  const grid = document.querySelector('.grid')
  const livesLeft = document.querySelector('.livesLeft')

  const width = 19
  const squareCount = width * width
  const squares = []
  

  let lives = 3
  //let score = 0 // NICE TO HAVE.

  // maybe don't need this? const livesLeft = 'lives'
  const playerCharacter = 'dude'
  const playerCharacterStartPosition = 332
  let playerCharacterCurrentPosition = 332

  const ObstaclesTypeOne = 'obstacle-type-one'
  const ObstaclesTypeTwo = 'obstacle-type-two'
  const ObstaclesTypeThree = 'obstacle-type-three'
  const ObsTypeOneStartPosition = 304
  let ObsTypeOneCurrentPosition = 304
  let ObsTypeOneDirection = 1   // 1 is right, -1 is left.
  let ObsTypeTwoStartPosition = 284
  let ObsTypeTwoCurrentPosition = 284
  let ObsTypeThreeStartPosition = 38
  let ObsTypeThreeCurrentPosition = 38

  // * Making the grid
  function createGrid(playerCharacterStartPosition) {
    for (let i = 0; i < squareCount; i++) {
      const square = document.createElement('div')
      square.innerText = i
      grid.appendChild(square)
      squares.push(square)
    }  
    
    addPlayer(playerCharacterStartPosition)
    addObstacleOne(ObsTypeOneStartPosition) //! This is only for type one
    addObstacleTwo(ObsTypeTwoStartPosition)
    obstOneMovement()  //! This is only for type one 
    
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
    
  }

  // * ADD OBSTACLES
  
  //* Add obstacle type one to grid  
  //! This is only for type one
  function addObstacleOne(ObsOnePosition) {
    squares[ObsOnePosition].classList.add(ObstaclesTypeOne)
  }
  //! This is only for type one
  // * Remove obstacle type one from grid
  function removeObstacleOne(ObsOnePosition) {
    squares[ObsOnePosition].classList.remove(ObstaclesTypeOne)
  }

  // Add Obstacle Type Two
  function addObstacleTwo(ObsTwoPosition) {
    squares[ObsTwoPosition].classList.add(ObstaclesTypeTwo)
  }
  // * Remove obstacle type Two from grid
  function removeObstacleTwo(ObsTwoPosition) {
    squares[ObsTwoPosition].classList.remove(ObstaclesTypeTwo)
  }

  //! This is only for type one
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
      // * COLLISION DETECTION WHILE HAVE LIVES
      if (ObsTypeOneCurrentPosition === playerCharacterCurrentPosition){
        console.log('Wham!') // COLLISION ANIMATION HERE.
        
        // Add sprite changes here //

        removePlayer(playerCharacterCurrentPosition)
        playerCharacterCurrentPosition = playerCharacterStartPosition
        addPlayer(playerCharacterStartPosition)
        lives--
        livesLeft.innerText = lives
      }
      addObstacleOne(ObsTypeOneCurrentPosition)
    }, 200)
  }

  // * Reset Game after all lives lost
  function resetGame() {
    
  }

  document.addEventListener('keydown', handleKeyStroke)
  createGrid(playerCharacterStartPosition)



}

window.addEventListener('DOMContentLoaded', init)