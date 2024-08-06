import styles from "./../style/gameOver.module.scss"
export default function({winner,onRestart}){
    return (
        <div className={styles.gameOver}>
            <h2>Gmae Over!</h2>
            {(winner) && <p>{winner} is winner</p> }
            <p>
                <button onClick={onRestart}>Rematch!</button>
            </p>

        </div>

    )
}