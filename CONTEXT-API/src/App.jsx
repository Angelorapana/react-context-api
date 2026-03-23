import { useContext } from "react";
import { BudgetContext } from "./Components/BudgetContext.jsx";
import Navbar from "./Components/Navbar";

function App() {

  const { budgetMode } = useContext(BudgetContext);

  const prodotti = [
    { name: "Scarpe", price: 50 },
    { name: "Maglietta", price: 20 },
    { name: "Cappello", price: 15 }
  ];

  const prodottiFiltrati = prodotti.filter(prodotto => {
    if (budgetMode) {
      return prodotto.price < 30;
    } else {
      return true;
    }
  });

  return (
    <div>
      <Navbar />

      {prodottiFiltrati.map((prodotto, index) => (
        <div key={index}>
          {prodotto.name} - {prodotto.price}€
        </div>
      ))}

    </div>
  );
}

export default App;