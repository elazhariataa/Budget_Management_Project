import styles from './addCategory.module.css';

function AddCategory(props){
    return <div className={styles.addCategory3}>
        {/* <p >Add a Category?</p> */}
        <input type="text" name="nameCat" value={props.namecat} onChange={props.onChangeNameCat} className={styles.addCategory1} />
        <button onClick={props.onClickCat} className={styles.addCategory2}>Add Category</button>
    </div>
}


export default AddCategory