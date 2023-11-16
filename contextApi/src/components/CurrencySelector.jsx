import { useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import { ThemeContext } from "../contexts/ThemeContext";

function CurrencySelector() {
  const { changeCurrency } = useContext(CurrencyContext);
  const { currentTheme } = useContext(ThemeContext);

  return (
    <select
      onChange={(e) => changeCurrency(e.target.value)}
      className={`form-select ${
        currentTheme === "dark"
          ? "bg-gray-600 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      <option value="USD">USD</option>
      <option value="CAD">CAD</option>
      <option value="TL">TL</option>
    </select>
  );
}

export default CurrencySelector;
