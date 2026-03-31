import BottomNav from "../components/BottomNav";
// const transactions = [
//         { amount: 200, category: "food", type: "expense", date: "2026-03-20", note: "Lunch" },
//         { amount: 500, category: "travel", type: "expense", date: "2026-03-21", note: "Auto" },
//         { amount: 1000, category: "salary", type: "income", date: "2026-03-22", note: "Monthly salary" },
//         { amount: 2000, category: "freelance", type: "income", date: "2026-03-23", note: "Project" },
//         { amount: 500, category: "food", type: "expense", date: "2026-03-24", note: "Dinner" },
//     ];

function History() {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    return (
        <>
            <h2>Transaction History</h2>
            {transactions.map((item, index) => (
                <div key={index} >

                    <h3>{item.category.toUpperCase()}</h3>
                    <p>Amount: ₹{item.amount}</p>
                    <p>Type: {item.type}</p>
                    <p>Date: {item.date}</p>
                    <p>Note: {item.note}</p>
                </div>
            ))}
            <BottomNav />

        </>
    )
}
export default History;