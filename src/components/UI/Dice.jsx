import dice_1 from "./../../assets/dice-1.png"
import dice_2 from "./../../assets/dice-2.png"
import dice_3 from "./../../assets/dice-3.png"
import dice_4 from "./../../assets/dice-4.png"
import dice_5 from "./../../assets/dice-5.png"
import dice_6 from "./../../assets/dice-6.png"
import styles from "./../style/dice.module.scss"
import { useState } from 'react'
const initialDice=[dice_1,dice_2,dice_3,dice_4,dice_5,dice_6]
export default function Dice({onDiceClick}){
    const [dice , setDice]=useState(initialDice[0])
    function rolldice(){
      const rnd = Math.trunc(Math.random() * 6)
        setDice((prevDice)=>{
         
          return initialDice[rnd]
        }
          
        )

        onDiceClick(rnd+1)

      }
    return (
       <>
        <img src={dice} alt="Playing dice" className={styles.dice} />
        <button className={`${styles.btn} ${styles.btnRoll}`} onClick={rolldice}>🎲 Roll dice</button>
       </>
    )
}