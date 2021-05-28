function init() {

  // * Variables
  const grid = document.querySelector('.grid')

  const width = 19
  const squareCount = width * width
  const squares = []

  const playerCharacter = 'dude'
  const playerCharacterStartPosition = 332
  let playerCharacterCurrentPosition = 332

  const ObstaclesTypeOne = 'obstacle-type-one'
  const ObstaclesTypeTwo = 'obstacle-type-two'
  const ObstaclesTypeThree = 'obstacle-type-three'
  let ObsTypeOneStartPosition = 266
  let ObsTypeOneCurrentPosition = 266
  let ObsTypeTwoStartPosition = 133
  let ObsTypeTwoCurrentPosition = 133
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
  
  //* Add obstacles type one to grid  
  //! This is only for type one
  function addObstacleOne(ObsOnePosition) {
    squares[ObsOnePosition].classList.add(ObstaclesTypeOne)
  }
  //! This is only for type one
  // * Remove obstacles type one from grid
  function removeObstacleOne(ObsOnePosition) {
    squares[ObsOnePosition].classList.remove(ObstaclesTypeOne)
  }
  //! This is only for type one
  function obstOneMovement() {
    const timerOne = setInterval(() => {
      if (ObsTypeOneCurrentPosition % width !== width - 1) {
        removeObstacleOne(ObsTypeOneCurrentPosition)
        ObsTypeOneCurrentPosition++
        
      } else {
        clearInterval(timerOne)
      }
      addObstacleOne(ObsTypeOneCurrentPosition)
    }, 200)
    
  }

  document.addEventListener('keydown', handleKeyStroke)
  createGrid(playerCharacterStartPosition)



}

window.addEventListener('DOMContentLoaded', init)