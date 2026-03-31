import BottomNav from "../components/BottomNav";
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