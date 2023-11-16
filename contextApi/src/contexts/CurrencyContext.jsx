import { useState, createContext } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  const currencySymbols = {
    USD: "$",
    CAD: "C$",
    TL: "₺",
  };

  const changeCurrency = (currency) => {
    setCurrentCurrency(currency);
  };
  return (
    <CurrencyContext.Provider
      value={{ currentCurrency, changeCurrency, currencySymbols }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
