import Logo from "../../assets/logo.png";
import "./index.css";
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
                <a class="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">
                Sobre Nós
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">
                Planos
                </a>
              </li>
              <li class="nav-item dropdown">
              <a class="nav-link" href="/#"> Entre em Contato
                </a>

              </li>
              <li class="nav-item dropdown">
              <a class="nav-link" href="/#"> Portal do Cliente
                </a>

              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
  );
}
