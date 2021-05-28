function init() {

  // * Variables
  const grid = document.querySelector('.grid')

  const width = 19
  const squareCount = width * width
  const squares = []

  const playerCharacter = 'dude'
  const playerCharacterStartPosition = 0
  let playerCharacterCurrentPosition = 0

  // * Making the grid
  function createGrid(playerCharacterStartPosition) {
    for (let i = 0; i < squareCount; i++) {
      const square = document.createElement('div')
      square.innerText = i
      grid.appendChild(square)
      squares.push(square)
    }
    addPlayer(playerCharacterStartPosition)
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
      playerCharacterCurrentPosition++
    } else if (key === 37 && playerCharacterCurrentPosition % width !== 0) {
      playerCharacterCurrentPosition--
    } else if (key === 38 && playerCharacterCurrentPosition >= width) {
      playerCharacterCurrentPosition -= width
    } else if (key === 40 && playerCharacterCurrentPosition + width <= width * width - 1) {
      playerCharacterCurrentPosition += width
    } else {
      console.log('NO SUCH KEY')
    }
    addPlayer(playerCharacterCurrentPosition)
    
  }



  document.addEventListener('keydown', handleKeyStroke)

  createGrid(playerCharacterStartPosition)



}

window.addEventListener('DOMContentLoaded', init)