import styles from './header.module.css';

function Header(props){
    return <header className={styles.header1}>
        <div className={styles.header2}>
            <img src={require('../images/4.jpg')} alt="Logo" className={styles.header3}/>
            <p className={styles.header4}>Budgets Managment</p>
        </div>
        <div>
            <ul className={styles.header5}>
                <li className={styles.header7}><a href={props.Graphs}className={styles.header6}>Graphs</a></li>
            </ul>
        </div>
    </header>

    
}

export default Header;