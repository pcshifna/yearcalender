import ExpenseItem from "./components/expenseItem";

import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState(
    []
    // {
    //   ExpenseDate: new Date(2023, 8, 10),
    //   ExpenseTitle: "Car Insurence",
    //   ExpensePrize: 29.89,
    // },
    // {
    //   ExpenseDate: new Date(2023, 8, 10),
    //   ExpenseTitle: "Food",
    //   ExpensePrize: 45.89,
    // },
    // {
    //   ExpenseDate: new Date(2023, 8, 10),
    //   ExpenseTitle: "Medicine",
    //   ExpensePrize: 75.89,
    // },
    // {
    //   ExpenseDate: new Date(2023, 8, 10),
    //   ExpenseTitle: "Education",
    //   ExpensePrize: 15.89,
    // },
    // {
    // ExpenseDate: new Date(2023, 8, 10),
    // ExpenseTitle: "Free Time",
    // ExpensePrize: 51.89,
    // },
    // ]
  );


  const handleSubmit = (event) => {
    event.preventDefault();//toprevent refreshing
    // console.log(
    //   event.target.date.value,
    //   event.target.title.value,
    //   event.target.prize.value
    // );
    const values = {
      ExpenseDate: new Date(event.target.date.value),
      ExpenseTitle: event.target.title.value,
      ExpensePrize: event.target.prize.value,
    };
    // setData([...data,values]);
    //use it in loop,,because the above method will take time
    setData((prevState) => [...prevState, values]);
  };
  const handleDelete = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };
const handleEdit =()=>{
} 

  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit} className="new">
          <input type="date" name="date" id="" required />
          <input type="text" name="title" id="" required />
          <input type="number" name="prize" id="" required />
          <button type="submit">click me</button>
        </form>
        <div className="componentStyle">
          {data?.map((item, index) => (
            <ExpenseItem
              //calling funtion when passing props.for taing proper value AND ONLY CALL THE FUNCTION WEHN CLICK THE UTTON DELETE
              onDelete={() => handleDelete(index)}
              onEdit={() => handleEdit()}
              data={item}
              key={index}
            />
          ))}
        </div>
        {/* <ExpenseItem
          ExpenseDate={ExpenseList[0].ExpenseDate}
          ExpenseTitle={ExpenseList[0].ExpenseTitle}
          ExpensePrize={ExpenseList[0].ExpensePrize}
        />
        <ExpenseItem
          ExpenseDate={ExpenseList[1].ExpenseDate}
          ExpenseTitle={ExpenseList[1].ExpenseTitle}
          ExpensePrize={ExpenseList[1].ExpensePrize}
        />
        <ExpenseItem
          ExpenseDate={ExpenseList[2].ExpenseDate}
          ExpenseTitle={ExpenseList[2].ExpenseTitle}
          ExpensePrize={ExpenseList[2].ExpensePrize}
        />
        <ExpenseItem
          ExpenseDate={ExpenseList[3].ExpenseDate}
          ExpenseTitle={ExpenseList[3].ExpenseTitle}
          ExpensePrize={ExpenseList[3].ExpensePrize}
        />
        <ExpenseItem
          ExpenseDate={ExpenseList[4].ExpenseDate}
          ExpenseTitle={ExpenseList[4].ExpenseTitle}
          ExpensePrize={ExpenseList[4].ExpensePrize}
        /> */}
      </div>
    </>
  );
}

export default App;
