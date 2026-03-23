import { useContext } from "react";
import { BudgetContext } from "../Components/BudgetContext";

function Navbar() {

  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

  
  function handleToggle() {
    setBudgetMode(!budgetMode);
  }

  return (
    <div>
      <button onClick={handleToggle}>
        {budgetMode ? "Disattiva modalità budget" : "Attiva modalità budget"}
      </button>
    </div>
  );
}

export default Navbar;