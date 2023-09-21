

import ExpensesItems from './ExpensesItems';
import '../../src/components/Expenses.css';
import ExpensesItem from './ExpensesItems';

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpensesItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpensesItems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpensesItems
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpensesItems
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </div>
  );
}

export default Expenses;
