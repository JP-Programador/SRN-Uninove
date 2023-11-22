
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/payment'
export default function Routess() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}