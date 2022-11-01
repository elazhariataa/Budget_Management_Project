import styles from './afficherExpense.module.css';
function AfficherExpense(props){
    return <div className={styles.afficherExpense1}>
        <div className={styles.afficherExpense2}>
            <p>{props.expenseName}</p>
            <p className={styles.afficherExpense3}>{props.expensePrice} <img src={require('../images/money.png')} alt="DH" /></p>
        </div>
        <button onClick={props.removeExpenseonClick} className={styles.button1}><img src={require('../images/remove.png')} alt="remove" /></button>
    </div>
}

export default AfficherExpense;