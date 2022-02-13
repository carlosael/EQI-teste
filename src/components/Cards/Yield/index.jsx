import informationIcon from "../../../assets/informationIcon.svg";
import "./style.css";
import Button from "../Button";
import check from "../../../assets/check.svg";
import { useState } from "react";

function Yield() {
  const [grossIncomeActive, setGrossIncomeActive] = useState(true);
  const [netIncomeActive, setNetIncomeActive] = useState(false);

  function handleIncomeType() {
    if (grossIncomeActive) {
      setGrossIncomeActive(false);
      setNetIncomeActive(true);
    } else {
      setGrossIncomeActive(true);
      setNetIncomeActive(false);
    }
  }

  return (
    <div className="card">
      <div className="card-title">
        <p>Rendimentos</p>
        <img src={informationIcon} alt="Ícone de informação" />
      </div>
      <div className="buttons-container">
        <Button
          color={grossIncomeActive ? "active" : ""}
          classes={"wider"}
          action={handleIncomeType}
        >
          {grossIncomeActive && <img src={check} alt="check icon" />}
          Bruto
        </Button>

        <Button
          color={netIncomeActive ? "active" : ""}
          classes={"wider"}
          action={handleIncomeType}
        >
          {netIncomeActive && <img src={check} alt="check icon" />}
          Líquido
        </Button>
      </div>
    </div>
  );
}

export default Yield;
