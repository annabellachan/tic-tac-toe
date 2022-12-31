import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'


const App = () => {
      const [squares, setSquares] = useState(Array(9).fill(null))
      const [player, setPlayer] = useState(1)
      const [counter, setCounter] = useState(0)

      let updatedSquares = [...squares]

      const handleGamePlay = (index) => {

        if(winner(squares) === "X"){
          return alert("Congrats, Player 1 is the winner!")
        } else if (winner(squares) === "O") {
          return alert("Congrats, Player 1 is the winner!")
        }

        if(counter === squares.length) {
          alert("Game over, restart the game?")
        }

          if(player === 1) {
            if(updatedSquares[index] === "X") {
              alert("You have already marked this square!")
            } else if(updatedSquares[index] === "O") {
              alert(`Player ${player + 1} already marked this square!`)
            } else {
              updatedSquares[index] = "X"
              setSquares(updatedSquares)
              setCounter(counter + 1)
              setPlayer(2)
            }
          }

          if(player === 2){
            if(updatedSquares[index] === "O"){
              alert("You have already marked this square")
            } else if (updatedSquares[index] === "X") {
              alert(`Player ${player - 1} already marked this square`)
            } else {
              updatedSquares[index] = "O"
              setSquares(updatedSquares)
              setCounter(counter + 1)
              setPlayer(1)
            }
          }
    }

    function winner(squares) {
      const calcWinner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for(let i = 0; i < calcWinner.length; i++) {
        const [x, y, z] = calcWinner[i];
          if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]){
            return squares[x]
          }     
        }
        return null 
      }
    
    const handleReset = () => {
      setPlayer(1)
      setCounter(0)
      setSquares(squares.fill(null))
    }

  return (
    <>
      <h1>Tic Tac Toe</h1>
        <p>Player:{player}</p>
      <div className="board">
      {squares.map((value,index) => {
          return (
            <Square 
            handleGamePlay={handleGamePlay} 
            value={value} 
            index={index} />
          )
        })}
        </div> 
      <br></br>
      <div id="btn">
          <button className="button" onClick={handleReset}>Play Again</button>
      </div>
    </>
  )
}

export default App;
