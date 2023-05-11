import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        console.log('Clicked!!!');
        setTitle('Updated!');
    }
    return(
        <div className="expense-item" id="{props.id}">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </div>
    );
}

export default ExpenseItem;