import styles from './dashboard.module.css';
function Dashboard(props){
    return <div className={styles.dashboard1}>
        <div className={styles.dashboard2}>Budget: {props.budget} <img src={require('../images/money.png')} alt="DH" /></div>
        <div className={styles.dashboard3}>Spent: {props.spent} <img src={require('../images/money.png')} alt="DH" /></div>
        <div className={styles.dashboard4}>Remaining: {props.remaining} <img src={require('../images/money.png')} alt="DH" /></div>
        <div className={styles.dashboard5}>
            <h3>Set a Budget</h3>
            <input type="number" placeholder="Set a budget" name="budget" value={props.budgetValue} onChange={props.budgetonchange} className={styles.dashboard6}/>
            <button onClick={props.budgetonClick} className={styles.dashboard7}>Save</button>
        </div>
    </div>
}

export default Dashboard;