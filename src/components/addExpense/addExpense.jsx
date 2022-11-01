import styles from './addExpense.module.css';

function AddExpense(props){
   
    return <div className={styles.addExpense1}>
        
        <input type="text" name="expenseName" value={props.descriptionExpense} onChange={props.onChangeExpenseDesc} placeholder="Add an expense name..." className={styles.addExpense2}/>
        <input type="number" name="expensePrice" value={props.expensePrice} onChange={props.onChangeExpensePrice} placeholder="add an expense price..." className={styles.addExpense2}/>
        <button onClick={props.onClickExpense} className={styles.addExpense3}>Add a Expnese</button>
        
    </div>
}


export default AddExpense;