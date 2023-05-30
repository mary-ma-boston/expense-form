import './ExpenseDate.css';

const ExpenseDate = ({dateProps}) => {
    const month = dateProps.toLocaleString('en-us', {month: 'long'});
    const day = dateProps.toLocaleString('en-us', {day: '2-digit'});
    const year = dateProps.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>    
        </div>
    )
}

export default ExpenseDate;