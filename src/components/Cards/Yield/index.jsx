import informationIcon from "../../../assets/informationIcon.svg";
import "./style.css";
import Button from "../Button";
import check from "../../../assets/check.svg";
import { useEffect, useState } from "react";
import InputMask from "react-input-mask";

const defaultFormValues = {
  grossIncomeActive: "",
  netIncomeActive: "",
};

function Yield() {
  const [grossIncomeActive, setGrossIncomeActive] = useState(true);
  const [netIncomeActive, setNetIncomeActive] = useState(false);
  const [form, setForm] = useState(defaultFormValues);
  const [aport, setAport] = useState("");
  const [term, setTerm] = useState("");
  const [ipca, setIpca] = useState("");

  useEffect(() => {}, []);

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

      <div className="inputs">
        <label htmlFor="">Aporte Inicial</label>
        <InputMask mask="R$ 9.999,99" type="text" name="aport" value={aport} />

        <label htmlFor="">Prazo (em meses)</label>
        <input type="text" name="term" value={term} />

        <label htmlFor="">IPCA (ao ano)</label>
        <input type="text" name="ipca" value={ipca} />
      </div>
    </div>
  );
}

export default Yield;
