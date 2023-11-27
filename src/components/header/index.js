import Logo from "../../assets/logo.png";
import "./index.css";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="containerHeader">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/#">
            <img src={Logo} alt="" width={'150px'}/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Sobre Nós">
                Sobre Nós
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Planos">
                Planos
                </Link>
              </li>
              <li class="nav-item dropdown">
              <Link class="nav-link" to="/Contato"> Entre em Contato
                </Link>

              </li>
              <li class="nav-item dropdown">
              <Link class="nav-link" to="/Login"> Portal do Cliente
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
  );
}
