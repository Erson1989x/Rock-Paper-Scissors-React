import { useState } from 'react'
import './App.css'

const App =() => {
  // Use State
  const [history, setHistory] = useState([]);
 // Declare Variables
 let playerOne, playerTwo, result;
 // Handle Submit Function with history tracker
const handleSubmit = (event) => {
  event.preventDefault();

  playerOne = document.getElementById('operator').value;
  playerTwoTurn();
  result = getWinner();
  document.getElementById('result').innerHTML = result;

  setHistory(history.concat({
    playerOne: playerOne.charAt(0) + playerOne.slice(1),
    playerTwo: playerTwo,
    result: result,
  }));
}

// Player Two's Turn Function
const playerTwoTurn = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  
  switch(randomNumber) {
    case 1:
        playerTwo = 'Paper';
        break;
    case 2:
        playerTwo = 'Scissors';
        break;
    case 3:
        playerTwo = 'Rock';
        break;
    }
};
    // Get Winner Function
    const getWinner = () => {
      // Convert playerTwo to lowercase for comparison
      const playerTwoLower = playerTwo;
    
      if (playerOne === playerTwoLower) {
        return 'Draw !';
      } else if (playerTwoLower === 'Rock') {
        return (playerOne === 'Paper') ? 'Player One Won !' : 'Player Two Won !';
      } else if (playerTwoLower === 'Paper') {
        return (playerOne === 'Scissors') ? 'Player One Won !' : 'Player Two Won !';
      } else if (playerTwoLower === 'Scissors') {
        return (playerOne === 'Rock') ? 'Player One Won !' : 'Player Two Won !';
      }
    }



  return (
    <div className='app-container'>
       {/* --- App-Container --- */}
         <form className='form-container' onSubmit={handleSubmit}>
           <h1>Rock-Paper-Scissors</h1>
           <div className='player-text-input' id='player-one'> Player One: </div>
           <select name="operator" id="operator" className='game-operator'>
             <option value="Rock">Rock</option>
             <option value="Paper">Paper</option>
             <option value="Scissors">Scissors</option>
           </select>
           <div className='player-text-input' id='player-two'> Player Two: </div>
           <button type='submit' className='submit-button'> Submit </button>
           <div className='player-score' id='result'> Result: </div>
         </form>
         {/* History Container */}
         <div className='history-container'>
          <h2>Game History</h2>
          <ul>
          {history.map((entry, index) => (
            <li key={index}>
              Player One:<span className='history-result'> {entry.playerOne}</span> , Player Two: <span className='history-result'> {entry.playerTwo} </span> -<span className='history-result'> {entry.result} </span>
            </li>
          ))}
          </ul>
         </div>
    </div>
  )
}

export default App
