import { createContext, useState, useContext } from "react";

const BudgetContext = createContext();

export function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error(
      "useBudget deve essere usato all'interno di un BudgetProvider"
    );
  }
  return context;
}
