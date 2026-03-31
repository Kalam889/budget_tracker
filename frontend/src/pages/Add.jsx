import BottomNav from "../components/BottomNav";
import { useState } from "react";

function Add() {
    const [type, setType] = useState("expense");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [note, setNote] = useState("");

    const handleAdd = () => {
        const newTransaction = {
            amount: Number(amount),
            category,
            type,
            date,
            note
        };
        const oldData = JSON.parse(localStorage.getItem("transactions")) || [];
        const updatedData = [...oldData, newTransaction];
        localStorage.setItem("transactions", JSON.stringify(updatedData));
}  
    return (
        <div>
            <h1>Add Transaction</h1>
            <button onClick={() => setType("income")}>Income</button>
            <button onClick={() => setType("expense")}>Expense</button>
            {type === "income" ? (
                <>
                <input type="number" value={amount} placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)}/>
                <h2>Category</h2>
                <select value={category}>
                    <option value="salary" >Salary</option>
                    <option value="freelance">Freelance</option>
                    <option value="gift">Gift</option>
                </select>
                <input type="date" value={date} placeholder="Enter date" onChange={(e) => setDate(e.target.value)}/>
                <input type="text" value={note} placeholder="Enter Notes" onChange={(e) => setNote(e.target.value)}/>
   
                </>
            ) : (
                <>
                <input type="number" value={amount} placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)}/>
                <h2>Category</h2>
                <select value={category}>
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="bills">Bills</option>
                </select>
                <input type="date" value={date} placeholder="Enter date" onChange={(e) => setDate(e.target.value)}/>
                <input type="text" value={note} placeholder="Enter Notes" onChange={(e) => setNote(e.target.value)}/>
                </>
            )}
            <button onClick={handleAdd}>Add Transaction</button>
             <BottomNav/>
        </div>
    )
}
export default Add;