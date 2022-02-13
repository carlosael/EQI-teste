import informationIcon from "../../../assets/informationIcon.svg";
import "./style.css";
import Button from "../Button";
import check from "../../../assets/check.svg";
import { useEffect, useState, useContext } from "react";
import InputMask from "react-input-mask";
import ValuesContext from "../../../contexts/ValuesContext";

function Yield() {
  const [grossIncomeActive, setGrossIncomeActive] = useState(true);
  const [netIncomeActive, setNetIncomeActive] = useState(false);
  const [ipca, setIpca] = useState("");
  const data = useContext(ValuesContext);

  useEffect(() => {}, []);

  function handleChange(target) {
    data.setForm({ ...data.form, [target.name]: target.value });
  }

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

      <form className="inputs">
        <label htmlFor="">Aporte Inicial</label>
        <InputMask
          mask="R$ 9.999,99"
          type="text"
          name="aport"
          value={data.form.aport}
          onChange={(event) => handleChange(event.target)}
        />

        <label htmlFor="">Prazo (em meses)</label>
        <input
          type="text"
          name="term"
          value={data.form.term}
          onChange={(event) => handleChange(event.target)}
        />

        <label htmlFor="">IPCA (ao ano)</label>
        <input type="text" name="ipca" value={ipca} />
      </form>
    </div>
  );
}

export default Yield;
