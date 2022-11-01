import styles from './chooseCategory.module.css';

function ChooseCategory(props){
    return <div className={styles.chooseCategory1}>
        <label className={styles.chooseCategory3}>
            {props.categoryName}
        </label>
        <input type="radio" name="cat" checked={props.categoryChecked} onChange={props.categoryonChange} className={styles.chooseCategory2}/>
    </div>
}

export default ChooseCategory;