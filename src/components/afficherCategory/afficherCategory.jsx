import styles from './afficherCategory.module.css';
function AfficherCategory(props){
    return <div className={styles.afficherCategory1}>
                <div className={styles.afficherCategory2}>
                    <p >{props.categoryName}</p>
                    <p className={styles.afficherCategory3}>{props.categoryTotalPrice}<img src={require('../images/money.png')} alt="DH"/></p>
                </div>
                
                <div className={styles.afficherCategory4}>
                    {/* <button onClick={props.afficherDetailsonClick} className={styles.button3}>Details</button> */}
                    <button className={styles.button3} onClick={props.afficherDetailsonClick}><img src={require('../images/down.png')} alt="details"/></button>
                    <button onClick={props.removeCategoryonClick} className={styles.button1}>Remove Category</button>
                    <button onClick={props.clearCategoryonClick} className={styles.button2}>Clear Category</button>
                </div>
    </div>
}

export default AfficherCategory;