import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 1, title: 'Car Insurance', amount: 249, date: new Date(2021, 2, 28) },
  { id: 2, title: 'Car Insurance', amount: 249, date: new Date(2020, 2, 28) },
  { id: 3, title: 'Car Insurance', amount: 249, date: new Date(2022, 2, 28) }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
      </div>
      <h2>Lets get started.</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
