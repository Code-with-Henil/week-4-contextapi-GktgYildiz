import { useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import clothesData from "../data/data.js";
import { ThemeContext } from "../contexts/ThemeContext";
function ProductGrid() {
  const { currentCurrency, currencySymbols } = useContext(CurrencyContext);
  const { currentTheme } = useContext(ThemeContext);
  const convertCurrency = (priceUSD) => {
    const exchangeRates = { USD: 1, CAD: 1.33, TL: 29.68 };
    return (priceUSD * exchangeRates[currentCurrency]).toFixed(2);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {clothesData.map((product) => (
        <div
          key={product.id}
          className={`border rounded p-4 flex flex-col items-center ${
            currentTheme === "dark"
              ? "bg-gray-600 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-contain mb-2"
          />
          <h3
            className={`text-lg font-semibold ${
              currentTheme === "dark"
                ? "bg-gray-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {product.name}
          </h3>
          <p
            className={` ${
              currentTheme === "dark"
                ? "bg-gray-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {currencySymbols[currentCurrency]}
            {convertCurrency(product.priceUSD)} {currentCurrency}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
