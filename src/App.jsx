import { useState } from 'react'
import './App.css'

const App =() => {
  // Use State
  const [history, setHistory] = useState([]);

 // Handle Submit Function with history tracker
const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const playerOne = formData.get('player-one-choose')
  const playerTwo = playerTwoTurn();

  const  result = getWinner( playerOne, playerTwo);

  setHistory(history.concat({
    playerOne: playerOne.charAt(0) + playerOne.slice(1),
    playerTwo: playerTwo,
    result: result,
  }));
}

// Player Two's Turn Function
const playerTwoTurn = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let result;
  
  switch(randomNumber) {
    case 1:
        result = 'Paper';
        break;
    case 2:
        result = 'Scissors';
        break;
    case 3:
        result = 'Rock';
        break;
    }
    return result
};
    // Get Winner Function
    const getWinner = ( playerOne, playerTwo) => {
    
      if (playerOne === playerTwo) {
        return 'Draw !';
      } else if (playerTwo === 'Rock') {
        return (playerOne === 'Paper') ? 'Player One Won !' : 'Player Two Won !';
      } else if (playerTwo === 'Paper') {
        return (playerOne === 'Scissors') ? 'Player One Won !' : 'Player Two Won !';
      } else if (playerTwo === 'Scissors') {
        return (playerOne === 'Rock') ? 'Player One Won !' : 'Player Two Won !';
      }
    }



  return (
    <div className='app-container'>
       {/* --- App-Container --- */}
         <form className='form-container' onSubmit={handleSubmit}>
           <h1>Rock-Paper-Scissors</h1>
           <div className='player-text-input'> Player One: </div>
           <select name="player-one-choose" className='game-operator'>
             <option value="Rock">Rock</option>
             <option value="Paper">Paper</option>
             <option value="Scissors">Scissors</option>
           </select>
           <div className='player-text-input'> Player Two: </div>
           <button type='submit' className='submit-button'> Submit </button>
           <div className='player-score'> Result: </div>
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
