import React, {useState} from "react";

import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';


const Expenses=({expenseData})=> {
    
    const [selectedYear, setSelectedYear] = useState('2020');
    

    const handleSelectYear = (selectYear) => {
        setSelectedYear(selectYear);        
    }

    const filteredExpense = expenseData.filter((expense)=>{
        return expense.date.getFullYear().toString() === selectedYear
    })

    

    return( 
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} onHandleSelectYear = {handleSelectYear} />
                {/* {expenseData.filter(item => item.date.getFullYear().toString() === selectedYear ).map((expense)=>{
                    return (
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                    )
                })} */}
                <ExpensesChart expenses={filteredExpense}/>
                <ExpensesList filteredExpense={filteredExpense}/>
            </Card>
        </div>          
    )
}
export default Expenses;