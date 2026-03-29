import {Link} from "react-router-dom"

function BottomNav() {
    return (
        <div className="bottom-nav">
            <Link to="/">Home</Link>
            <Link to="/Add">Add</Link>
            <Link to="/Report">Report</Link>
            <Link to="/History">History</Link>
            <Link to="/Profile">Profile</Link>
        </div>
    )
}
export default BottomNav;