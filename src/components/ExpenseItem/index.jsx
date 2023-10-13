import React from "react";
import style from "./Expense.module.css";
const ExpenseItem = (props) => {
  //   const date = props?.data?.ExpenseDate.toISOString();

  let year = props?.data?.ExpenseDate.getFullYear();
  var month = props?.data?.ExpenseDate.toLocaleString("en-US", {
    month: "long",
  });
  const day = props?.data?.ExpenseDate.getDate();

  return (
    
    <div className={style.expenseItem}>

      <div className={style.dateString}>
        <div className={style.month}>{month}</div>
        <div className={style.year}>{year}</div>
        <div className={style.day}>{day}</div>
      </div>

      <h2>{props?.data?.ExpenseTitle}</h2>

      <div className={style.expensePrize}>${props?.data?.ExpensePrize}</div>
      <button onClick={props.onEdit}>Edit</button>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default ExpenseItem;



