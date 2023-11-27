
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/About Us'
import Base_client from './pages/base_client'
import Contact from './pages/contact us'
import Login from './pages/login'
import My_plans from './pages/my_plans'
import Payment from './pages/payment'
import Plans from './pages/plans'





export default function Routess() {
    return(
        <Router>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/Sobre Nós" element={<About />} />
                <Route path="/Cadastro" element={<Base_client />} />
                <Route path="/Contato" element={<Contact />} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Meu Plano" element={<My_plans />} />
                <Route path="/Pagamento" element={<Payment />} />
                <Route path="/Planos" element={<Plans />} />

            </Routes>
        </Router>
    );
}