import "./App.css";
import IndexingFees from "./components/Cards/IndexingFees";
import Yield from "./components/Cards/Yield";

function App() {
  return (
    <div className="App">
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
        </div>
      </div>
    </div>
  );
}

export default App;
