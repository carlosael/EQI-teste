import "./App.css";
import IndexingFees from "./components/Cards/IndexingFees";
import Yield from "./components/Cards/Yield";
import ValuesProvider from "./contexts/ValuesContext/ValuesProvider";
import MainButtons from "./components/MainButtons";
import Simulation from "./components/Cards/Simulation";
import { useState } from "react";

function App() {
  const [openSimulation, setOpenSimulation] = useState(false);
  const [simulationData, setSimulationData] = useState([]);
  const [yieldType, setYieldType] = useState("bruto");
  const [indexingType, setIndexingType] = useState("pre");

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
                <Yield setYieldType={setYieldType} />
                <IndexingFees setIndexingType={setIndexingType} />
              </div>
              <div className="main-buttons">
                <MainButtons
                  setOpenSimulation={setOpenSimulation}
                  setSimulationData={setSimulationData}
                  yieldType={yieldType}
                  indexingType={indexingType}
                />
              </div>
            </div>
            <div className="container-right">
              {openSimulation && <Simulation simulationData={simulationData} />}
            </div>
          </div>
        </div>
      </div>
    </ValuesProvider>
  );
}

export default App;
