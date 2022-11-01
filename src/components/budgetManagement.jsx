import styles from './budgetManagement.module.css';
import Swal from 'sweetalert2';
import {useState,useEffect} from 'react';
import AddExpense from './addExpense/addExpense';
import AddCategory from './addCategory/addCategory';
import AfficherCategory from './afficherCategory/afficherCategory';
import Example from './Graphs/budgetGraphs';
import BudgetGraphs2 from './Graphs/budgetGraphs2';
import ChooseCategory from './chooseCategory/chooseCategory';
import AfficherExpense from './afficherExpense/afficherExpense';
import Dashboard from './dashboard/dashboard';
import Header from './header/header';
import Footer from './footer/footer';
function BudgetMangement(){
  const [budget,setBudget] = useState(0);
  const [expenses,setExpenses] = useState([]);
  const [expenseName,setExpenseName] = useState("");
  const[expensePrice,setExpensesPrice] = useState(0);
  const [cat,setCat] = useState(1);
  const [filterExpenses,setFilterExpenses] = useState(0);
  const [expenseDate,setExpenseDate] = useState(new Date().getMonth()+1)
  const [dateanalyse,setDateanalyse] = useState([{id:1,monthPrice:0,month:"Jan"},{id:2,monthPrice:0,month:"Feb"},{id:3,monthPrice:0,month:"March"},{id:4,monthPrice:0,month:"April"},{id:5,monthPrice:0,month:"May"},{id:6,monthPrice:0,month:"June"},{id:7,monthPrice:0,month:"July"},{id:8,monthPrice:0,month:"Aug"},{id:9,monthPrice:0,month:"Sept"},{id:10,monthPrice:0,month:"Oct"},{id:11,monthPrice:0,month:"Nov"},{id:12,monthPrice:0,month:"Dec"}])

  const[categories,setCategories] = useState([{name:"Housing",id : 1,totalPrice : 0},{name:"Transportation",id:2,totalPrice : 0},{name:"Utilities",id:3,totalPrice : 0},{name:"Education",id:4,totalPrice : 0}]);
  const [catName,setCatName] = useState("");

  
  const addExpense = () =>{
      
      if(expenses.filter(item => item.name.toUpperCase() === expenseName.toUpperCase()).length>0){
          // alert('Expense already exist');
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Expense already exist!',
              
            })
          
      }else{
          
          setExpenses([...expenses,{name : expenseName,price : expensePrice,id : expenses.length+1, category : cat,expenseDate : expenseDate}]);
          Swal.fire({
              // position: 'top-end',
              icon: 'success',
              title: 'Expense has been added',
              showConfirmButton: false,
              timer: 1500
            })
      }
      
  }
  
  const addCategory = ()=>{
      if(categories.filter(item => item.name.toUpperCase() === catName.toUpperCase()).length>0){
          // alert("category already exist")
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'category already exist!',
              
            })
          return;
      }else{
          setCategories([...categories,{name : catName,id : categories.length+1,totalPrice : 0}])
          Swal.fire({
              // position: 'top-end',
              icon: 'success',
              title: 'Category has been added',
              showConfirmButton: false,
              timer: 1500
            })
      }
  }

  const catTotalPrice = (id) =>{
      let total =0;
      expenses.map(item => {if(item.category === id) total += item.price});
      categories.map(item => {if(item.id === id) item.totalPrice=total})
      return total;
  }

  const monthlyPrice = (date)=>{
      let total=0;
          expenses.map(item => {if(item.expenseDate === date) total = total +item.price});
          dateanalyse.map(item => {if(item.id === date) item.monthPrice=total})
          
  }
  
  const spent = () =>{
      let total = 0
      categories.map(item => total +=item.totalPrice)
      return total;
  }

  const remaining = ()=>{
    let rem = budget - spent();
    return rem;
  }
  const afficherExpense = ()=>{
      let newtab =[] 
      newtab = expenses.filter(item => item.category === filterExpenses);
      return newtab;
  }
      
  const removeCategory = (id) =>{
      // if(window.confirm('are you sure you want to delete this category?')){
      //     let updatedTab = categories.filter(item => item.id !== id);
      //     setCategories(updatedTab);
      //     let newTab = expenses.filter(item => item.category !== id);
      //     setExpenses(newTab)
      // }
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
              let updatedTab = categories.filter(item => item.id !== id);
              setCategories(updatedTab);
              let newTab = expenses.filter(item => item.category !== id);
              setExpenses(newTab)
            Swal.fire(
              'Deleted!',
              'Category has been deleted.',
              'success'
            )
          }
        })
  }

  const clearCategory = (id) =>{
      // if(window.confirm('are you sure you want to clear this category?')){
      //     let newTab = expenses.filter(item => item.category !== id);
      //     setExpenses(newTab)
      // }
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, clear it!'
        }).then((result) => {
          if (result.isConfirmed) {
              let newTab = expenses.filter(item => item.category !== id);
              setExpenses(newTab)
            Swal.fire(
              'Cleaned!',
              'Category has been cleaned.',
              'success'
            )
          }
        })
  }

  const removeExpense = (id) =>{
      // if(window.confirm('are you sure you want to delete this Expense?')){
      //     let newTab = expenses.filter(item => item.id !== id);
      //     setExpenses(newTab)
      // }
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
              let newTab = expenses.filter(item => item.id !== id);
              setExpenses(newTab)
            Swal.fire(
              'Deleted!',
              'Expense has been deleted.',
              'success'
            )
          }
        })
  }
          
      


  


  return <div className={styles.management1}>
      <Header form={"#Expense"} Graphs={"#graph"}/>
      
      <div className={styles.management3}>
        <div id='Expense'className={styles.management5}>
            <div className={styles.management4}>
              <h3>Choose a Category please:</h3>
              {categories.map((item,index) =>
                  <ChooseCategory key={index} categoryName={item.name} categoryChecked={cat === item.id} categoryonChange={() => setCat(item.id)}/>
              )}
            </div>
            <div className='add1'>
              <AddExpense descriptionExpense={expenseName} onChangeExpenseDesc={(e) => setExpenseName(e.target.value)}
              expensePrice={expensePrice} onChangeExpensePrice={(e) => setExpensesPrice(parseInt(e.target.value))}
              onClickExpense={addExpense}/>
              {monthlyPrice(expenseDate)}
            </div>
          </div>
        <div className={styles.management2}>  
          <div>
            <AddCategory namecat={catName} onChangeNameCat={(e) => setCatName(e.target.value)} onClickCat={addCategory}/>
          </div>
          <div>
              {categories.map((item) =>
                  <div key={item.id}>
                      <div>
                          <AfficherCategory categoryName={item.name} categoryTotalPrice={catTotalPrice(item.id)} afficherDetailsonClick={() => setFilterExpenses(item.id)} removeCategoryonClick={() => removeCategory(item.id)} clearCategoryonClick={()=> clearCategory(item.id)}/>
                      </div>
                      <div className={styles.management4}>
                          {(filterExpenses === item.id) && afficherExpense().map((expense,index) => 
                          <div key={expense.id}>
                              <AfficherExpense expenseName={expense.name} expensePrice={expense.price} removeExpenseonClick={() => removeExpense(expense.id)}/>
                          </div>
                          
                          )}
                      </div>
                  </div>
                  )}
          </div>
        </div>
        <div className={styles.management7}>
          <Dashboard budget={budget} spent={spent()} remaining={remaining()} budgetValue={budget} budgetonchange={(e)=> setBudget(e.target.value)} 
          budgetonClick={()=> Swal.fire({
            icon: 'success',
            title: 'Your Budget has been saved',
            showConfirmButton: false,
            timer: 1500
          })}
          />
        </div>
      </div>

      <div className={styles.management6} id='graph'>
        <div>
          <BudgetGraphs2 data={dateanalyse}/>
        </div>
        <div>
          <Example data={categories}/>
        </div>
      </div>
      
      
      
      

      <Footer/>
    </div>
}


export default BudgetMangement;