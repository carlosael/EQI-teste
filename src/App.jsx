import "./App.css";
import IndexingFees from "./components/Cards/IndexingFees";
import Yield from "./components/Cards/Yield";
import ValuesProvider from "./contexts/ValuesContext/ValuesProvider";
import MainButtons from "./components/MainButtons";
import Simulation from "./components/Cards/Simulation";

function App() {
  return (
    <ValuesProvider>
      <div className="App">
        <div className="main-container">
          <div className="header">
            <h1>Simulador de Investimentos</h1>
          </div>

          <div className="main-content">
            <div className="container-left">
              <h2>Simulador</h2>
              <div className="cards">
                <Yield />
                <IndexingFees />
              </div>
              <div className="main-buttons">
                <MainButtons />
              </div>
            </div>
            <div className="container-right">
              <Simulation></Simulation>
            </div>
          </div>
        </div>
      </div>
    </ValuesProvider>
  );
}

export default App;
