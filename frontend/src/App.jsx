import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Add from "./pages/Add";
import Report from "./pages/Report";
import History from "./pages/History";
import Profile from "./pages/Profile";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/History" element={<History />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}
export default App;