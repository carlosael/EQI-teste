import { useContext, useEffect } from "react";
import check from "../../../assets/check.svg";
import informationIcon from "../../../assets/informationIcon.svg";
import ValuesContext from "../../../contexts/ValuesContext";
import handleGetIPCA from "../../../services/handleGetIPCA";
import Button from "../../Button";
import InputErrorMessage from "../../InputErrorMessage";
import "./style.css";

function Yield({ setYieldType }) {
  const data = useContext(ValuesContext);

  useEffect(() => {
    handleGetIPCA(data.setIpca);
  }, [data.setIpca]);

  function handleChange(target) {
    data.setForm({ ...data.form, [target.name]: target.value });
  }

  function handleIncomeType(event) {
    if (event.target.outerText === "Bruto") {
      data.setGrossIncomeActive(true);
      data.setNetIncomeActive(false);
      setYieldType("bruto");
    } else if (event.target.outerText === "Líquido") {
      data.setGrossIncomeActive(false);
      data.setNetIncomeActive(true);
      setYieldType("liquido");
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
          color={data.grossIncomeActive ? "active" : ""}
          classes={"wider left"}
          action={handleIncomeType}
        >
          {data.grossIncomeActive && <img src={check} alt="check icon" />}
          Bruto
        </Button>

        <Button
          color={data.netIncomeActive ? "active" : ""}
          classes={"wider right"}
          action={handleIncomeType}
        >
          {data.netIncomeActive && <img src={check} alt="check icon" />}
          Líquido
        </Button>
      </div>

      <form className="inputs">
        <div className="input-container">
          <label
            htmlFor=""
            className={data.initialAportInputTypeError ? "red-error" : ""}
          >
            Aporte Inicial
          </label>
          <input
            type="text"
            name="aport"
            value={data.form.aport}
            onChange={(event) => handleChange(event.target)}
          />
          {data.initialAportInputTypeError && (
            <InputErrorMessage>Aporte deve ser um número</InputErrorMessage>
          )}
        </div>
        <div className="input-container">
          <label
            htmlFor=""
            className={data.termInputTypeError ? "red-error" : ""}
          >
            Prazo (em meses)
          </label>
          <input
            type="text"
            name="term"
            value={data.form.term}
            onChange={(event) => handleChange(event.target)}
          />
          {data.termInputTypeError && (
            <InputErrorMessage>Prazo deve ser um número</InputErrorMessage>
          )}
        </div>

        <label htmlFor="">IPCA (ao ano)</label>
        <input type="text" name="ipca" value={`${data.ipca}% `} />
      </form>
    </div>
  );
}

export default Yield;
