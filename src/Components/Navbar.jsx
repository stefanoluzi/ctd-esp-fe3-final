import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../utils/routes";
import { useGlobalStates } from "../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();

  const { state, toggleTheme } = useGlobalStates();

  return (
    <div className={state.theme}>
      <nav className="nav">
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <ul>
          <li>
            <button onClick={() => navigate(-1)}>🔙</button>
          </li>
          <li>
            <Link to={routes.home}>Home</Link>
          </li>
          <li>
            <Link to={routes.contact}>Contact</Link>
          </li>
          <li>
            <Link to={routes.favs}>Favs</Link>
          </li>
        </ul>

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <label class="toggle">
          <input
            onClick={toggleTheme}
            class="toggle-checkbox"
            type="checkbox"
          />
          <div class="toggle-switch"></div>
          <span class="toggle-label"></span>
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
