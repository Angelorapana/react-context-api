
import { createContext } from "react";
import { useState } from "react";

export const BudgetContext = createContext();


export function BudgetProvider({ children }) {
const [budgetMode, setBudgetMode] = useState(true);


  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      {children}
    </BudgetContext.Provider>
  );
}