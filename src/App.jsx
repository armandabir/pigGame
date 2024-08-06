import styles from './App.module.scss'
import Dice from './components/UI/Dice'
import GameOver from './components/UI/GameOver'
import Player from './components/UI/Player'

import { useState } from 'react'
const PLAYERS={
  "player1":"player1",
  "player2":"player2"
}

// check game status
let gameStatus=true

let gameBoard={
    player1:{currentScore:0,score:0},
    player2:{currentScore:0,score:0}
  }



function updateGameBoard(Player,currentS,mainScore=0){
  gameBoard[Player].currentScore=currentS
  gameBoard[Player].score+=mainScore
  return gameBoard
  
}

function derivedwiner(gameBoard){
  let winer;
  console.log(gameStatus)
  if(gameBoard.player1.score == 100){
    winer= PLAYERS.player1
  }
  if(gameBoard.player2.score == 100){
    winer= PLAYERS.player2
  }

  if(gameBoard.player1.score > 100){
    winer= PLAYERS.player2
  }

  if(gameBoard.player2.score > 100){
    winer= PLAYERS.player1
  }

  if (!gameStatus){
    if(gameBoard.player1.score < 100 && gameBoard.player1.score > gameBoard.player2.score ){
      winer=PLAYERS.player1
    }else if(gameBoard.player2.score < 100 && gameBoard.player1.score < gameBoard.player2.score ){
      winer=PLAYERS.player2
    }
  }


  return winer
}



function App() {
  const [activePlayer ,setActivePlayer]=useState(PLAYERS.player1)
  const [currentScore,setCurrentScore]=useState(0)
  gameBoard=updateGameBoard(activePlayer,currentScore)
  let winer=derivedwiner(gameBoard)
  console.log(winer)
  function handleDiceRoll(score){
    setCurrentScore((currentScore)=>currentScore + score);
    updateGameBoard(activePlayer,currentScore)
  }

  function handleHoldclick(){
    setActivePlayer((activePlayer)=>activePlayer=="player1"?"player2":"player1");
    updateGameBoard(activePlayer,currentScore,currentScore)
    setCurrentScore(0)
    derivedwiner(gameBoard)
  }


  function handleOnRestart(){

    gameBoard={
      player1:{currentScore:0,score:0},
      player2:{currentScore:0,score:0}
    }

    setActivePlayer((activePlayer)=>activePlayer=="player1"?"player2":"player1");
    setCurrentScore(0)
    gameStatus=true
  }

  function handleOnNewGame(){
    
    updateGameBoard(activePlayer,currentScore,currentScore)
    gameStatus=false
    derivedwiner(gameBoard)
    setActivePlayer((activePlayer)=>activePlayer=="player1"?"player2":"player1");
    setCurrentScore(0)
    
  }

  return (
    <main>
        <Player name="Player1" currentScore={gameBoard.player1.currentScore} score={gameBoard.player1.score} active={activePlayer=="player1"?true:false} />
        <Player name="Player2" currentScore={gameBoard.player2.currentScore} score={gameBoard.player2.score} active={activePlayer=="player2"?true:false}/>
        <Dice onDiceClick={handleDiceRoll}/>
        <button className={`${styles.btn} ${styles.btnNew}`} onClick={handleOnNewGame}>🔄 New game</button>
        <button className={`${styles.btn} ${styles.btnHold}`} onClick={handleHoldclick}>📥 Hold</button>
        {winer && (<GameOver winner={winer} onRestart={handleOnRestart}/>)}
    </main>
  )
}

export default App
