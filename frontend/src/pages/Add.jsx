import BottomNav from "../components/BottomNav";
import { useState } from "react";

function Add() {
    const [type, setType] = useState("expense");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [note, setNote] = useState("");

    return (
        <div>
            <h1>Add Transaction</h1>
            <button onClick={() => setType("income")}>Income</button>
            <button onClick={() => setType("expense")}>Expense</button>
            {type === "income" ? (
                <>
                <input type="number" value={amount} placeholder="Enter amount" />
                <h2>Category</h2>
                <select value={category}>
                    <option value="salary" >Salary</option>
                    <option value="freelance">Freelance</option>
                    <option value="gift">Gift</option>
                </select>
                <input type="date" value={date} placeholder="Enter date" />
                <input type="text" value={note} placeholder="Enter Notes" />
   
                </>
            ) : (
                <>
                <input type="number" value={amount} placeholder="Enter amount" />
                <h2>Category</h2>
                <select value={category}>
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="bills">Bills</option>
                </select>
                <input type="date" value={date} placeholder="Enter date" />
                <input type="text" value={note} placeholder="Enter Notes" />

                </>
            )}
            <button>Add Transaction</button>
             <BottomNav/>
        </div>
    )
}
export default Add;