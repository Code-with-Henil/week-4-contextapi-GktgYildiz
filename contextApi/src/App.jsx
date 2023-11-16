import { ThemeProvider } from "./contexts/ThemeContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import CurrencySelector from "./components/CurrencySelector";
import ProductGrid from "./components/ProductGrid";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <div className="App">
          <nav className="flex justify-between items-center px-4 py-2 bg-gray-200 dark:bg-gray-800">
            <div className="flex-grow">
              <ThemeToggle />
            </div>
            <div className="flex-grow">
              <CurrencySelector />
            </div>
          </nav>
          <ProductGrid />
        </div>
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default App;
