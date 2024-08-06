import styles from "./../style/player.module.scss"
export default function Player({name,active,currentScore,score}){
    return (
      <section className={active?`${styles.player} ${styles.playerActive}`:`${styles.player}`}>
        <h2 className={styles.name} id="name--0">{name}</h2>
        <p className={styles.score} id="score--0">{score}</p>
        <div className={styles.current}>
          <p className={styles.currentLabel}>Current</p>
          <p className={styles.currentScore} id="current--0">{currentScore}</p>
        </div>
      </section>
    )
}