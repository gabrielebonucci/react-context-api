import { Link, NavLink } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

const Navbar = () => {
  const { budgetMode, setBudgetMode } = useBudget();

  const toggleBudgetMode = () => {
    setBudgetMode(!budgetMode);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <NavLink to="/ChiSiamo">Chi Siamo</NavLink>
        </li>
        <li>
          <NavLink to="/Prodotti">Prodotti</NavLink>
        </li>
      </ul>
      <button onClick={toggleBudgetMode} className="budget-button">
        {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
      </button>
    </nav>
  );
};
export default Navbar;
