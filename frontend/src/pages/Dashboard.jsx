import BottomNav from "../components/BottomNav";


function Dashboard() {
    return (
        <div className="container">
            <div className="main">            
                <h1>Total Balance</h1>
                <h2>25000</h2>
            </div>
            <div className="summary-card">
                <h1>Summary cards</h1>
                <p>Income|Expense|Savings</p>
            </div>
            <div className="mini-chart">
                <h1>Mini Chart</h1>
            </div>
            <div className="transactions">
                <h1>Recent Transactions</h1>
                <p>Food Rs. 200</p>
                <p>Travel Rs. 500</p>
            </div>
            <BottomNav/>
        </div>
    )
}
export default Dashboard;