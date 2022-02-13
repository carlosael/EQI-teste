import "./App.css";
import IndexingFees from "./components/Cards/IndexingFees";
import Yield from "./components/Cards/Yield";
import Button from "./components/Cards/Button";
import ValuesProvider from "./contexts/ValuesContext/ValuesProvider";

function App() {
  return (
    <div className="App">
      <ValuesProvider>
        <div className="main-container">
          <div className="header">
            <h1>Simulador de Investimentos</h1>
          </div>
          <div className="main-content">
            <h2>Simulador</h2>
            <div className="cards">
              <Yield></Yield>
              <IndexingFees></IndexingFees>
            </div>
            <div className="main-buttons">
              <Button classes={"wider"}>
                <strong>Limpar campos</strong>
              </Button>
              <Button classes={"wider"}>
                <strong>Simular</strong>
              </Button>
            </div>
          </div>
        </div>
      </ValuesProvider>
    </div>
  );
}

export default App;
