import BottomNav from "../components/BottomNav";
import { useState } from "react";

function Report() {
    const [type, setType] = useState("expense");

    const transactions = [
        { amount: 200, category: "food", type: "expense" },
        { amount: 500, category: "travel", type: "expense" },
        { amount: 1000, category: "salary", type: "income" },
        { amount: 2000, category: "freelance", type: "income" },
        { amount: 500, category: "food", type: "expense" },
    ]
    const filteredData = transactions.filter((item) => item.type === type);
    const total = filteredData.reduce((acc, item) => acc + item.amount, 0);
    const grouped = {};
    filteredData.forEach((item) => {
        if (!grouped[item.category]) {
            grouped[item.category] = 0;
        }
        grouped[item.category] += item.amount;
    })
    const finalData = Object.keys(grouped).map((category) => {
        return {
            category: category,
            amount: grouped[category],
            percentage: ((grouped[category] / total) * 100).toFixed(2)
        };
    });
    return (
        <div>
            <h1>Report Card</h1>
            <button onClick={() => setType("income")}>Income</button>
            <button onClick={() => setType("expense")}>Expense</button>
            {type === "expense" ? (
                <>
                    <div>
                        {finalData.map((item, index) => (
                            <div key={index}>
                                <h3>{item.category}: ₹{item.amount} ({item.percentage}%)</h3>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div>
                        {finalData.map((item, index) => (
                            <div key={index}>

                                <h3>{item.category}: ₹{item.amount} ({item.percentage}%)</h3>
                            </div>
                        ))}
                    </div>
                </>
            )}
            <BottomNav />
        </div>
    )
}
export default Report;